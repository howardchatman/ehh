import Link from "next/link";

export default function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ backgroundColor: "var(--coastal)", minHeight: "100svh" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(160deg, var(--ocean) 0%, var(--ocean-mid) 100%)",
          padding: "clamp(7rem, 12vw, 10rem) var(--section-x) clamp(3rem, 5vw, 5rem)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", opacity: 0.6 }} />
            <span className="micro-label" style={{ color: "var(--aqua)", letterSpacing: "0.2em" }}>
              Legal
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: "-0.025em",
              color: "var(--cream)",
              marginBottom: "1rem",
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.45)" }}>
              {subtitle}
            </p>
          )}
          {lastUpdated && (
            <p className="micro-label" style={{ color: "rgba(255,255,255,0.25)", marginTop: "1.5rem" }}>
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "clamp(3rem, 6vw, 6rem) var(--section-x)",
        }}
      >
        <div className="legal-body">
          {children}
        </div>

        {/* Back link */}
        <div style={{ marginTop: "clamp(3rem, 5vw, 5rem)", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
          <Link
            href="/"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--aqua)", textDecoration: "none" }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      <style>{`
        .legal-body h2 {
          font-family: var(--font-serif);
          font-size: clamp(1.2rem, 2vw, 1.5rem);
          font-weight: 400;
          color: var(--ocean);
          margin: 2.5rem 0 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border);
        }
        .legal-body p {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 300;
          color: var(--charcoal);
          line-height: 1.85;
          margin-bottom: 1rem;
        }
        .legal-body ul {
          margin: 0 0 1rem 1.5rem;
        }
        .legal-body li {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 300;
          color: var(--charcoal);
          line-height: 1.85;
          margin-bottom: 0.4rem;
        }
        .legal-body a {
          color: var(--aqua);
          text-decoration: underline;
        }
        .legal-body strong {
          font-weight: 500;
          color: var(--ocean);
        }
        .legal-disclaimer {
          background: var(--sea-foam);
          border-left: 3px solid var(--aqua);
          padding: 1.25rem 1.5rem;
          margin: 1.5rem 0;
          font-family: var(--font-sans);
          font-size: 0.82rem;
          color: var(--ocean-mid);
          line-height: 1.8;
        }
      `}</style>
    </div>
  );
}
