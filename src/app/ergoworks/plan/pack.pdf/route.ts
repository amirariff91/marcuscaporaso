import type { NextRequest } from "next/server";

// Streams the confidential review-pack PDF from a private Cloudflare R2 bucket
// (via a Basic-auth-gated Worker) WITHOUT the file ever entering git or public/.
// This route already sits behind the /ergoworks/plan/* proxy gate, so the
// incoming request carries the authenticated user's credentials; we forward the
// same Authorization header to the Worker, which validates it against the same
// creds and returns the object. Result: one auth prompt, same origin, nothing
// confidential committed to the repo.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WORKER_URL = "https://ergoworks-pack.ariffseh2824.workers.dev";

export async function GET(request: NextRequest) {
  const auth = request.headers.get("authorization");
  if (!auth) {
    // The proxy gate should have enforced this already; belt and braces.
    return new Response("Authentication required.", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="ErgoWorks Plan", charset="UTF-8"',
        "Cache-Control": "no-store",
      },
    });
  }

  let upstream: Response;
  try {
    upstream = await fetch(WORKER_URL, {
      headers: { authorization: auth },
      cache: "no-store",
    });
  } catch {
    return new Response("The review pack is temporarily unavailable.", {
      status: 502,
      headers: { "Cache-Control": "no-store" },
    });
  }

  const headers = new Headers();
  headers.set("Content-Type", upstream.headers.get("content-type") ?? "application/pdf");
  headers.set(
    "Content-Disposition",
    upstream.headers.get("content-disposition") ??
      'attachment; filename="ErgoWorks-Consulting-Review-Pack.pdf"',
  );
  const len = upstream.headers.get("content-length");
  if (len) headers.set("Content-Length", len);
  headers.set("Cache-Control", "private, no-store");
  headers.set("Vary", "Authorization");

  return new Response(upstream.body, { status: upstream.status, headers });
}
