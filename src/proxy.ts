import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUBDOMAIN_ROOTS: Record<string, string> = {
  "osw.marcuscaporaso.com": "/osw",
  "biosymm.marcuscaporaso.com": "/biosymm",
};

// ── Access gate for the private ErgoWorks review pack (/ergoworks/plan/*) ──
// HTTP Basic Auth, credentials from server-only env vars. Fail-closed.
// Edge runtime: use atob(), not Buffer.
const PLAN_PREFIX = "/ergoworks/plan";
const PLAN_REALM = 'Basic realm="ErgoWorks Plan", charset="UTF-8"';

const RETIRED_PLAN_REDIRECTS: Record<string, string> = {
  "/ergoworks/plan/strategy": "/ergoworks/plan",
  "/ergoworks/plan/audit": "/ergoworks/plan/evidence",
  "/ergoworks/plan/landing-page": "/ergoworks/plan",
  "/ergoworks/plan/offer": "/ergoworks/plan",
  "/ergoworks/plan/media": "/ergoworks/plan",
  "/ergoworks/plan/market": "/ergoworks/plan",
  "/ergoworks/plan/launch": "/ergoworks/plan",
  "/ergoworks/plan/review": "/ergoworks/plan",
  // The v1 PDF in the private bucket predates these pages and contradicts them.
  // The client already holds this URL from the old shell, so redirect rather than
  // serve a superseded document. Restore only when a v2 pack exists in the bucket.
  "/ergoworks/plan/pack.pdf": "/ergoworks/plan",
};

function unauthorized() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": PLAN_REALM,
      "Cache-Control": "no-store",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

// Full-string constant-time comparison (no early-exit, no per-field branching).
function safeEqual(a: string, b: string): boolean {
  const enc = new TextEncoder();
  const ab = enc.encode(a);
  const bb = enc.encode(b);
  let diff = ab.length ^ bb.length;
  const len = Math.max(ab.length, bb.length);
  for (let i = 0; i < len; i++) diff |= (ab[i] ?? 0) ^ (bb[i] ?? 0);
  return diff === 0;
}

// Does this path hit the gated tree? Test BOTH the raw pathname and its decoded
// form, because Next decodes percent-escapes when it matches the app route — so
// `/%65rgoworks/plan` and `/ergoworks%2Fplan` must be gated too (bypass fix).
function isGatedPath(pathname: string): boolean {
  const candidates = [pathname];
  try {
    const decoded = decodeURIComponent(pathname);
    if (decoded !== pathname) candidates.push(decoded);
  } catch {
    /* malformed escapes — Next will reject; raw check still applies */
  }
  return candidates.some(
    (p) => p === PLAN_PREFIX || p.startsWith(`${PLAN_PREFIX}/`),
  );
}

// Correct UTF-8 decode of a base64 Basic-auth token (atob yields raw bytes).
function decodeBasic(token: string): string | null {
  try {
    const bin = atob(token.trim());
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
    return new TextDecoder("utf-8", { fatal: false }).decode(bytes);
  } catch {
    return null;
  }
}

// Returns a 401 response if the request must be denied, or null if it may proceed.
function authenticate(request: NextRequest): NextResponse | null {
  const user = process.env.ERGOWORKS_PLAN_USER;
  const pass = process.env.ERGOWORKS_PLAN_PASSWORD;
  if (!user || !pass) return unauthorized(); // fail closed if unconfigured

  const header = request.headers.get("authorization") ?? "";
  if (!header.startsWith("Basic ")) return unauthorized();

  const decoded = decodeBasic(header.slice(6));
  if (decoded === null || decoded.indexOf(":") === -1) return unauthorized();

  // Single compare of the whole "user:pass" pair — no field-specific branching.
  if (!safeEqual(decoded, `${user}:${pass}`)) return unauthorized();

  return null; // authenticated
}

export function proxy(request: NextRequest) {
  const gated = isGatedPath(request.nextUrl.pathname);

  // Gate the private review pack before any other routing.
  if (gated) {
    const denied = authenticate(request);
    if (denied) return denied;

    // Next config redirects run before Proxy in Next 16. Keep these redirects here
    // so a retired private URL authenticates before it is permanently redirected.
    const retiredPath = request.nextUrl.pathname.replace(/\/$/, "");
    const destination = RETIRED_PLAN_REDIRECTS[retiredPath];
    if (destination) {
      const url = request.nextUrl.clone();
      url.pathname = destination;
      const response = NextResponse.redirect(url, 308);
      response.headers.set("Cache-Control", "private, no-store");
      response.headers.set("Vary", "Authorization");
      return response;
    }
  }

  const host = request.headers.get("host")?.split(":")[0].toLowerCase() ?? "";
  const root = SUBDOMAIN_ROOTS[host];

  let response: NextResponse;
  if (root) {
    const { pathname } = request.nextUrl;
    if (!pathname.startsWith(root)) {
      const url = request.nextUrl.clone();
      url.pathname = `${root}${pathname === "/" ? "" : pathname}`;
      response = NextResponse.rewrite(url);
    } else {
      response = NextResponse.next();
    }
  } else {
    response = NextResponse.next();
  }

  // Never let an authenticated private page sit in a shared cache.
  if (gated) {
    response.headers.set("Cache-Control", "private, no-store");
    response.headers.set("Vary", "Authorization");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
};
