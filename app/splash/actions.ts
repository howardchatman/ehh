"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSupabaseClient } from "@/lib/supabase";

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

export async function joinWaitlist(formData: FormData) {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim().toLowerCase();
  const focusArea = (formData.get("focus_area") as string) || null;

  if (!name || !email) {
    redirect("/splash?waitlist=error");
  }

  const supabase = createSupabaseClient();
  const { error } = await supabase
    .from("waitlist")
    .insert({ name, email, focus_area: focusArea });

  if (error) {
    if (error.code === "23505") {
      redirect("/splash?waitlist=duplicate");
    }
    redirect("/splash?waitlist=error");
  }

  redirect("/thank-you");
}
