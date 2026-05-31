"use server";

import { redirect } from "next/navigation";
import { createSupabaseClient } from "@/lib/supabase";

export async function joinCommunity(formData: FormData) {
  const name  = (formData.get("name")  as string)?.trim();
  const email = (formData.get("email") as string)?.trim().toLowerCase();

  if (!name || !email) {
    redirect("/community?joined=error");
  }

  const supabase = createSupabaseClient();
  const { error } = await supabase
    .from("community_members")
    .insert({ name, email });

  if (error) {
    if (error.code === "23505") {
      redirect("/community?joined=duplicate");
    }
    redirect("/community?joined=error");
  }

  redirect("/community?joined=success");
}
