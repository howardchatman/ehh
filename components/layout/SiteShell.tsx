"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/splash") {
    return <>{children}</>;
  }

  return (
    <>
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
