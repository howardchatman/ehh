import { adminLogin } from "./actions";

export const metadata = { title: "Admin Login — Echoing Holistic Health" };

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div
      style={{
        minHeight: "100svh",
        background: "linear-gradient(135deg, #0d0804 0%, #1a1208 50%, #0d0804 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Background orbs */}
      <div aria-hidden style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "15%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,150,90,0.08) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "20%", right: "15%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,150,90,0.06) 0%, transparent 70%)" }} />
      </div>

      <div style={{ width: "100%", maxWidth: "420px", position: "relative", zIndex: 1 }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "0.5rem", fontWeight: 300, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.25rem" }}>Echoing</span>
          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(250,248,245,0.85)" }}>Holistic Health</span>
          <p style={{ marginTop: "0.75rem", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(184,150,90,0.6)" }}>Admin Portal</p>
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
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 300, color: "var(--cream)", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>
            Welcome back
          </h1>
          <p style={{ fontSize: "0.78rem", color: "rgba(250,248,245,0.4)", marginBottom: "2rem", fontWeight: 300 }}>
            Sign in to your dashboard
          </p>

          {error && (
            <div style={{ background: "rgba(220,60,60,0.1)", border: "1px solid rgba(220,60,60,0.25)", borderRadius: "8px", padding: "0.75rem 1rem", marginBottom: "1.5rem" }}>
              <p style={{ fontSize: "0.72rem", color: "#e57373", letterSpacing: "0.05em" }}>Invalid email or password.</p>
            </div>
          )}

          <form action={adminLogin} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(184,150,90,0.8)", marginBottom: "0.5rem" }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
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

            <div>
              <label style={{ display: "block", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(184,150,90,0.8)", marginBottom: "0.5rem" }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                autoComplete="current-password"
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
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
