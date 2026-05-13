"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSupabaseClient } from "@/lib/supabase";

export async function accountSignup(formData: FormData) {
  const name     = (formData.get("name") as string)?.trim();
  const email    = (formData.get("email") as string)?.trim().toLowerCase();
  const password = formData.get("password") as string;
  const confirm  = formData.get("confirm") as string;

  if (password !== confirm) {
    redirect("/account/signup?error=mismatch");
  }

  const supabase = createSupabaseClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } },
  });

  if (error || !data.user) {
    redirect("/account/signup?error=1");
  }

  // If email confirmation is disabled, a session is returned immediately
  const token = data.session?.access_token;
  if (token) {
    const cookieStore = await cookies();
    cookieStore.set("ehh_user", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "lax",
    });
    redirect("/account");
  }

  // Email confirmation required — tell them to check inbox
  redirect("/account/login?confirm=1");
}

export async function accountLogin(formData: FormData) {
  const email    = (formData.get("email") as string)?.trim().toLowerCase();
  const password = formData.get("password") as string;

  const supabase = createSupabaseClient();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error || !data.session) {
    redirect("/account/login?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set("ehh_user", data.session.access_token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    sameSite: "lax",
  });

  redirect("/account");
}

export async function accountLogout() {
  const cookieStore = await cookies();
  cookieStore.delete("ehh_user");
  redirect("/account/login");
}
