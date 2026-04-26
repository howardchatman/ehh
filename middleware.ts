import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow the splash page through
  if (pathname.startsWith("/splash")) {
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
