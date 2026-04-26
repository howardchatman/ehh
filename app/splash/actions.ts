"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function unlockSite(formData: FormData) {
  const password = formData.get("password");

  if (password !== "august") {
    redirect("/splash?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set("ehh_unlocked", "1", {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    sameSite: "lax",
  });

  redirect("/");
}
