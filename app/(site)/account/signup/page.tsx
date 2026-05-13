import Link from "next/link";
import { accountSignup } from "../actions";

export const metadata = { title: "Create Profile — Echoing Holistic Health" };

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  const errorMsg =
    error === "mismatch"
      ? "Passwords do not match."
      : error
      ? "Something went wrong. Please try again."
      : null;

  return (
    <div
      style={{
        minHeight: "100svh",
        background: "linear-gradient(160deg, #0d0804 0%, #1a1208 55%, #0d0804 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.5rem 4rem",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Orbs */}
      <div aria-hidden style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "15%", right: "10%", width: "450px", height: "450px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,150,90,0.07) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "20%", left: "10%", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,150,90,0.05) 0%, transparent 70%)" }} />
      </div>

      <div style={{ width: "100%", maxWidth: "480px", position: "relative", zIndex: 1 }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "0.5rem", fontWeight: 300, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.25rem" }}>Echoing</span>
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(250,248,245,0.85)" }}>Holistic Health</span>
          </Link>
          <p style={{ marginTop: "0.75rem", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(184,150,90,0.55)" }}>Create Your Profile</p>
        </div>

        {/* Glass card */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(184,150,90,0.2)",
            borderRadius: "16px",
            padding: "2.5rem",
            boxShadow: "0 32px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 300, color: "var(--cream)", marginBottom: "0.4rem", letterSpacing: "-0.02em" }}>
            Join the journey
          </h1>
          <p style={{ fontSize: "0.78rem", color: "rgba(250,248,245,0.35)", marginBottom: "2rem", fontWeight: 300 }}>
            Your personalized wellness begins here.
          </p>

          {errorMsg && (
            <div style={{ background: "rgba(220,60,60,0.1)", border: "1px solid rgba(220,60,60,0.25)", borderRadius: "8px", padding: "0.75rem 1rem", marginBottom: "1.5rem" }}>
              <p style={{ fontSize: "0.72rem", color: "#e57373", letterSpacing: "0.04em" }}>{errorMsg}</p>
            </div>
          )}

          <form action={accountSignup} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Field label="Full Name" name="name" type="text" autoComplete="name" />
            <Field label="Email" name="email" type="email" autoComplete="email" />
            <Field label="Password" name="password" type="password" autoComplete="new-password" />
            <Field label="Confirm Password" name="confirm" type="password" autoComplete="new-password" />

            <button
              type="submit"
              style={{
                marginTop: "0.5rem",
                width: "100%",
                background: "linear-gradient(135deg, var(--gold) 0%, #c9a96e 100%)",
                border: "none",
                borderRadius: "8px",
                padding: "0.9rem",
                color: "var(--espresso)",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Create Profile
            </button>
          </form>

          <p style={{ marginTop: "1.5rem", textAlign: "center", fontSize: "0.72rem", color: "rgba(250,248,245,0.3)", fontWeight: 300 }}>
            Already have an account?{" "}
            <Link href="/account/login" style={{ color: "rgba(184,150,90,0.75)", textDecoration: "none" }}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type, autoComplete }: { label: string; name: string; type: string; autoComplete?: string }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(184,150,90,0.8)", marginBottom: "0.5rem" }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        autoComplete={autoComplete}
        style={{
          width: "100%",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(184,150,90,0.2)",
          borderRadius: "8px",
          padding: "0.75rem 1rem",
          color: "var(--cream)",
          fontSize: "0.875rem",
          fontWeight: 300,
          outline: "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}
