import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUBDOMAIN_ROOTS: Record<string, string> = {
  "osw.marcuscaporaso.com": "/osw",
  "biosymm.marcuscaporaso.com": "/biosymm",
  "ergoworks.marcuscaporaso.com": "/ergoworks",
};

// ── Access gate for the private ErgoWorks material (/ergoworks/plan/* and
//    /ergoworks/lp-mockup) ──
// HTTP Basic Auth, credentials from server-only env vars. Fail-closed.
// Edge runtime: use atob(), not Buffer.
const PLAN_PREFIX = "/ergoworks/plan";
// The LP mockup lives outside /plan but carries the same class of content: its
// annotation layer names client personnel, unapproved spend figures and internal
// gate IDs. Same gate, same credentials.
const GATED_PREFIXES = [PLAN_PREFIX, "/ergoworks/lp-mockup"];
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

// Speculative loads (Next Link prefetch, browser prefetch/prerender) must be
// denied WITHOUT WWW-Authenticate: offering the challenge on a prefetch makes
// the browser pop its native login dialog while the user merely scrolls a
// public page that links into the gate. Real navigations still get the prompt.
function isPrefetch(request: NextRequest): boolean {
  const h = request.headers;
  return (
    // Best-effort: Next 16 strips its internal prefetch signals (the
    // next-router-prefetch/rsc headers AND the ?_rsc= param) before the proxy
    // runs, so router prefetches cannot be reliably detected here. The
    // guaranteed fix is that public pages link into the gate with plain
    // anchors, never next/link. These checks still silence browser-level
    // speculation (purpose/sec-purpose) and any signal that does survive.
    new URL(request.url).searchParams.has("_rsc") ||
    h.get("next-router-prefetch") === "1" ||
    (h.get("purpose") ?? "").includes("prefetch") ||
    (h.get("sec-purpose") ?? "").includes("prefetch")
  );
}

function unauthorized(request: NextRequest) {
  const headers: Record<string, string> = {
    "Cache-Control": "no-store",
    "Content-Type": "text/plain; charset=utf-8",
  };
  if (!isPrefetch(request)) headers["WWW-Authenticate"] = PLAN_REALM;
  return new NextResponse("Authentication required.", { status: 401, headers });
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
  return candidates.some((p) =>
    GATED_PREFIXES.some((prefix) => p === prefix || p.startsWith(`${prefix}/`)),
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
  if (!user || !pass) return unauthorized(request); // fail closed if unconfigured

  const header = request.headers.get("authorization") ?? "";
  if (!header.startsWith("Basic ")) return unauthorized(request);

  const decoded = decodeBasic(header.slice(6));
  if (decoded === null || decoded.indexOf(":") === -1) return unauthorized(request);

  // Single compare of the whole "user:pass" pair — no field-specific branching.
  if (!safeEqual(decoded, `${user}:${pass}`)) return unauthorized(request);

  return null; // authenticated
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase() ?? "";
  const root = SUBDOMAIN_ROOTS[host];
  const { pathname } = request.nextUrl;

  // Resolve the pathname the app will actually serve BEFORE deciding anything
  // else. A subdomain rewrite maps `/plan` to `/ergoworks/plan`, so gating on the
  // incoming pathname would let `ergoworks.marcuscaporaso.com/plan` walk straight
  // into the private pack unauthenticated — and skip the retired-URL redirects and
  // the private cache headers with it. On the apex, resolved === incoming.
  const needsRewrite = Boolean(root) && !pathname.startsWith(root!);
  const resolvedPath = needsRewrite
    ? `${root}${pathname === "/" ? "" : pathname}`
    : pathname;

  const gated = isGatedPath(resolvedPath);

  // Gate the private review pack before any other routing.
  if (gated) {
    const denied = authenticate(request);
    if (denied) return denied;

    // Next config redirects run before Proxy in Next 16. Keep these redirects here
    // so a retired private URL authenticates before it is permanently redirected.
    const retiredPath = resolvedPath.replace(/\/$/, "");
    const destination = RETIRED_PLAN_REDIRECTS[retiredPath];
    if (destination) {
      const url = request.nextUrl.clone();
      // Redirect to the address the visitor is actually using: on a subdomain the
      // canonical /ergoworks prefix is stripped back off, so the Location header
      // never bounces them onto the apex path.
      url.pathname = needsRewrite ? destination.slice(root!.length) || "/" : destination;
      const response = NextResponse.redirect(url, 308);
      response.headers.set("Cache-Control", "private, no-store");
      response.headers.set("Vary", "Authorization");
      return response;
    }
  }

  let response: NextResponse;
  if (needsRewrite) {
    const url = request.nextUrl.clone();
    url.pathname = resolvedPath;
    response = NextResponse.rewrite(url);
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
