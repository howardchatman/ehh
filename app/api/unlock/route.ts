import { NextRequest, NextResponse } from "next/server";

const COOKIE = "ehh_unlocked";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const password = form.get("password");

  if (password !== "august") {
    return NextResponse.redirect(new URL("/splash?error=1", request.url));
  }

  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.set(COOKIE, "1", {
    httpOnly: true,
    path: "/",
    maxAge: MAX_AGE,
    sameSite: "lax",
  });

  return response;
}
