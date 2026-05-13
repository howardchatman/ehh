"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function adminLogin(formData: FormData) {
  const email    = (formData.get("email") as string)?.trim().toLowerCase();
  const password = formData.get("password") as string;

  if (email !== "contact@echoingholistichealth.com" || password !== "august1207") {
    redirect("/dashboard/login?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set("ehh_admin", "1", {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 8, // 8-hour session
    sameSite: "lax",
  });

  redirect("/dashboard");
}

export async function adminLogout() {
  const cookieStore = await cookies();
  cookieStore.delete("ehh_admin");
  redirect("/dashboard/login");
}
