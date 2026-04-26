import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const unlocked = cookieStore.get("ehh_unlocked")?.value === "1";

  if (!unlocked) {
    redirect("/splash");
  }

  return (
    <>
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
