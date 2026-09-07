// ErgoWorks review-pack delivery Worker.
// Serves the confidential PDF from a private R2 bucket, gated by the SAME
// HTTP Basic credentials as the /ergoworks/plan site. The Next route
// /ergoworks/plan/pack.pdf forwards the authenticated user's Authorization
// header here, so the file never enters git and the user authenticates once.

const REALM = 'Basic realm="ErgoWorks Plan", charset="UTF-8"';
const OBJECT_KEY = "pack.pdf";
const FILENAME = "ErgoWorks-Consulting-Review-Pack.pdf";

function unauthorized() {
  return new Response("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": REALM, "Cache-Control": "no-store" },
  });
}

// Length-aware constant-time comparison.
function safeEqual(a, b) {
  const enc = new TextEncoder();
  const ab = enc.encode(a);
  const bb = enc.encode(b);
  let diff = ab.length ^ bb.length;
  const len = Math.max(ab.length, bb.length);
  for (let i = 0; i < len; i++) diff |= (ab[i] ?? 0) ^ (bb[i] ?? 0);
  return diff === 0;
}

function decodeBasic(token) {
  try {
    const bin = atob(token.trim());
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
    return new TextDecoder("utf-8", { fatal: false }).decode(bytes);
  } catch {
    return null;
  }
}

export default {
  async fetch(request, env) {
    const user = env.ERGOWORKS_PLAN_USER;
    const pass = env.ERGOWORKS_PLAN_PASSWORD;
    if (!user || !pass) return unauthorized(); // fail closed

    const header = request.headers.get("authorization") ?? "";
    if (!header.startsWith("Basic ")) return unauthorized();
    const decoded = decodeBasic(header.slice(6));
    if (decoded === null || decoded.indexOf(":") === -1) return unauthorized();
    if (!safeEqual(decoded, `${user}:${pass}`)) return unauthorized();

    const obj = await env.PACK.get(OBJECT_KEY);
    if (!obj) return new Response("Not found.", { status: 404, headers: { "Cache-Control": "no-store" } });

    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    headers.set("Content-Disposition", `attachment; filename="${FILENAME}"`);
    headers.set("Cache-Control", "private, no-store");
    headers.set("Vary", "Authorization");
    if (obj.size != null) headers.set("Content-Length", String(obj.size));
    return new Response(obj.body, { headers });
  },
};
