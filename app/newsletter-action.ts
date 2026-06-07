"use server";

import { createSupabaseClient } from "@/lib/supabase";

export async function subscribeNewsletter(formData: FormData): Promise<{ status: "success" | "duplicate" | "error" }> {
  const email = (formData.get("email") as string)?.trim().toLowerCase();

  if (!email) return { status: "error" };

  const supabase = createSupabaseClient();
  const { error } = await supabase
    .from("newsletter_subscribers")
    .insert({ email });

  if (error) {
    if (error.code === "23505") return { status: "duplicate" };
    return { status: "error" };
  }

  return { status: "success" };
}
