import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSupabaseClient } from "@/lib/supabase";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import { adminLogout } from "./login/actions";

export const metadata = { title: "Dashboard — Echoing Holistic Health" };

export default async function Page() {
  // Auth check
  const cookieStore = await cookies();
  if (cookieStore.get("ehh_admin")?.value !== "1") {
    redirect("/dashboard/login");
  }

  // Fetch waitlist data
  const supabase = createSupabaseClient();
  const { data: waitlist } = await supabase
    .from("waitlist")
    .select("*")
    .order("created_at", { ascending: false });

  return <AdminDashboard waitlist={waitlist ?? []} logout={adminLogout} />;
}
