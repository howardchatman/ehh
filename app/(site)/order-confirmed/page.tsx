import { redirect } from "next/navigation";
import Stripe from "stripe";
import Link from "next/link";

export const metadata = {
  title: "Order Confirmed — Healing Water™",
  robots: { index: false, follow: false },
};

async function getSession(sessionId: string) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-05-27.dahlia",
  });
  return stripe.checkout.sessions.retrieve(sessionId);
}

export default async function Page({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const sessionId = searchParams.session_id;
  if (!sessionId) redirect("/shop");

  const session = await getSession(sessionId);
  if (session.payment_status !== "paid") redirect("/shop");

  const name = session.customer_details?.name ?? "there";
  const email = session.customer_details?.email ?? "";
  const firstName = name.split(" ")[0];

  return (
    <div
      style={{
        minHeight: "100svh",
        background: "linear-gradient(160deg, var(--ocean) 0%, var(--ocean-mid) 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(4rem, 8vw, 8rem) var(--section-x)",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "52ch" }}>
        {/* Icon */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            border: "1.5px solid var(--aqua)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--aqua)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {/* Label */}
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--aqua)", marginBottom: "1rem" }}>
          Order Confirmed
        </p>

        {/* Headline */}
        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2.8rem, 6vw, 5rem)",
          fontWeight: 300,
          lineHeight: 1,
          letterSpacing: "-0.025em",
          color: "var(--cream)",
          marginBottom: "1.5rem",
        }}>
          Thank you,<br />
          <em style={{ fontStyle: "italic", color: "var(--aqua)" }}>{firstName}.</em>
        </h1>

        <p style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
          fontWeight: 300,
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.8,
          marginBottom: "0.75rem",
        }}>
          Your Healing Water™ order is being prepared fresh for you.
          We&apos;ll be in touch with delivery details soon.
        </p>

        {email && (
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", color: "rgba(255,255,255,0.25)", marginBottom: "3rem" }}>
            Confirmation sent to {email}
          </p>
        )}

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/shop" className="btn-ocean" style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.8)" }}>
            Continue Shopping
          </Link>
          <Link href="/" className="btn-ocean">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
