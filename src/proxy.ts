import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();

  const reportHosts: Record<string, string> = {
    "osw.marcuscaporaso.com": "/osw",
    "biosymm.marcuscaporaso.com": "/biosymm",
  };

  if (host && request.nextUrl.pathname === "/" && reportHosts[host]) {
    const url = request.nextUrl.clone();
    url.pathname = reportHosts[host];
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
