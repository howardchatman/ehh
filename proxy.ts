import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow the splash page and unlock API through
  if (pathname.startsWith("/splash") || pathname.startsWith("/api/unlock")) {
    return NextResponse.next();
  }

  const unlocked = request.cookies.get("ehh_unlocked")?.value === "1";

  if (!unlocked) {
    return NextResponse.redirect(new URL("/splash", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
