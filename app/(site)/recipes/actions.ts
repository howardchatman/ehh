"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSupabaseClient } from "@/lib/supabase";

export async function unlockRecipes(formData: FormData) {
  const name  = (formData.get("name")  as string)?.trim();
  const email = (formData.get("email") as string)?.trim().toLowerCase();

  if (!name || !email) {
    redirect("/recipes?error=1");
  }

  const supabase = createSupabaseClient();
  await supabase.from("recipe_leads").insert({ name, email });

  const cookieStore = await cookies();
  cookieStore.set("ehh_recipes_access", "1", {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  redirect("/recipes?access=granted");
}
