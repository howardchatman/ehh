import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { createSupabaseClient } from "@/lib/supabase";
import { accountLogout } from "./actions";

export const metadata = { title: "My Profile — Echoing Holistic Health" };

export default async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get("ehh_user")?.value;

  if (!token) {
    redirect("/account/login");
  }

  const supabase = createSupabaseClient();
  const { data: { user }, error } = await supabase.auth.getUser(token);

  if (error || !user) {
    redirect("/account/login");
  }

  const name = (user.user_metadata?.name as string) ?? user.email?.split("@")[0] ?? "Member";

  return (
    <div
      style={{
        minHeight: "100svh",
        background: "linear-gradient(160deg, #0d0804 0%, #1a1208 55%, #0d0804 100%)",
        padding: "7rem 1.5rem 4rem",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Orbs */}
      <div aria-hidden style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", right: "8%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,150,90,0.06) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "15%", left: "8%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,150,90,0.04) 0%, transparent 70%)" }} />
      </div>

      <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontSize: "0.58rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(184,150,90,0.6)", marginBottom: "0.4rem" }}>
            My Profile
          </p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", fontWeight: 300, color: "var(--cream)", letterSpacing: "-0.02em" }}>
            Welcome, {name}.
          </h1>
        </div>

        {/* Profile card */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(184,150,90,0.18)",
            borderRadius: "16px",
            padding: "2rem",
            boxShadow: "0 16px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
            marginBottom: "1.25rem",
          }}
        >
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(184,150,90,0.65)", marginBottom: "1.25rem" }}>
            Account Details
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <ProfileRow label="Name" value={name} />
            <ProfileRow label="Email" value={user.email ?? ""} mono />
            <ProfileRow label="Member Since" value={new Date(user.created_at).toLocaleDateString("en-US", { month: "long", year: "numeric" })} />
          </div>
        </div>

        {/* Orders placeholder */}
        <div
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(184,150,90,0.1)",
            borderRadius: "16px",
            padding: "2rem",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "rgba(250,248,245,0.25)", fontWeight: 300 }}>
            Orders will appear here once the shop is live.
          </p>
          <Link href="/shop" style={{ display: "inline-block", marginTop: "1rem", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(184,150,90,0.6)", textDecoration: "none" }}>
            Browse the Shop →
          </Link>
        </div>

        {/* Sign out */}
        <form action={accountLogout}>
          <button
            type="submit"
            style={{
              background: "transparent",
              border: "1px solid rgba(184,150,90,0.2)",
              borderRadius: "8px",
              padding: "0.65rem 1.5rem",
              color: "rgba(250,248,245,0.4)",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
}

function ProfileRow({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "baseline", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "1rem" }}>
      <span style={{ fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(184,150,90,0.55)", minWidth: "90px" }}>
        {label}
      </span>
      <span style={{ fontSize: "0.85rem", color: "rgba(250,248,245,0.7)", fontWeight: 300, fontFamily: mono ? "monospace" : "inherit" }}>
        {value}
      </span>
    </div>
  );
}
