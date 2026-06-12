import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUBDOMAIN_ROOTS: Record<string, string> = {
  "osw.marcuscaporaso.com": "/osw",
  "biosymm.marcuscaporaso.com": "/biosymm",
};

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase() ?? "";
  const root = SUBDOMAIN_ROOTS[host];

  if (root) {
    const { pathname } = request.nextUrl;
    if (!pathname.startsWith(root)) {
      const url = request.nextUrl.clone();
      url.pathname = `${root}${pathname === "/" ? "" : pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
};
