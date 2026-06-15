import { redirect } from "next/navigation";
import Stripe from "stripe";
import ConfirmationButtons from "@/components/ui/ConfirmationButtons";
import { sendOrderConfirmation, sendMerchantNotification } from "@/lib/resend";

export const metadata = {
  title: "Order Confirmed — Healing Water™",
  robots: { index: false, follow: false },
};

async function getSession(sessionId: string) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-05-27.dahlia",
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (stripe.checkout.sessions as any).retrieve(sessionId, {
    expand: ["line_items"],
  });
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  if (!sessionId) redirect("/shop");

  let session;
  try {
    session = await getSession(sessionId);
  } catch {
    redirect("/shop");
  }

  if (session.payment_status !== "paid") redirect("/shop");

  const name    = session.customer_details?.name  ?? "Friend";
  const email   = session.customer_details?.email ?? "";
  const phone   = session.customer_details?.phone ?? "";
  const firstName = name.split(" ")[0];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addr = (session as any).shipping_details?.address as {
    line1?: string; line2?: string; city?: string; state?: string; postal_code?: string;
  } | null | undefined;

  const addressLine = addr
    ? [addr.line1, addr.line2, addr.city && addr.state ? `${addr.city}, ${addr.state} ${addr.postal_code ?? ""}`.trim() : ""]
        .filter(Boolean).join(" · ")
    : "";

  const details = [
    { label: "Name",    value: name },
    { label: "Email",   value: email },
    { label: "Phone",   value: phone },
    { label: "Ship To", value: addressLine },
  ].filter((d) => d.value);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lineItem = (session as any).line_items?.data?.[0];
  const productName = lineItem?.description ?? "Healing Water™";
  const priceAmount = session.amount_total != null
    ? `$${(session.amount_total / 100).toFixed(2)}`
    : "";

  // Send customer + merchant confirmation emails
  if (email) {
    try { await sendOrderConfirmation(name, email, productName, priceAmount, phone, addressLine); } catch {}
  }
  try { await sendMerchantNotification(name, email, productName, priceAmount, phone, addressLine); } catch {}

  return (
    <div style={{ minHeight: "100svh", background: "linear-gradient(160deg, var(--ocean) 0%, var(--ocean-mid) 60%, #0d3d5e 100%)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(28,184,200,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "clamp(6rem, 12vw, 10rem) var(--section-x) clamp(4rem, 8vw, 8rem)", position: "relative", zIndex: 1 }}>

        {/* Check circle */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2.5rem" }}>
          <div style={{ width: "72px", height: "72px", borderRadius: "50%", border: "1.5px solid rgba(28,184,200,0.5)", background: "rgba(28,184,200,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--aqua)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {/* Label */}
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--aqua)", textAlign: "center", marginBottom: "1.25rem" }}>
          Order Confirmed
        </p>

        {/* Headline */}
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.025em", color: "var(--cream)", textAlign: "center", marginBottom: "1.75rem" }}>
          Thank you,<br />
          <em style={{ fontStyle: "italic", color: "var(--aqua)" }}>{firstName}.</em>
        </h1>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
          <div style={{ height: "1px", width: "32px", backgroundColor: "var(--aqua)", opacity: 0.3 }} />
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>Healing Water™</span>
          <div style={{ height: "1px", width: "32px", backgroundColor: "var(--aqua)", opacity: 0.3 }} />
        </div>

        {/* Message */}
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(28,184,200,0.15)", padding: "clamp(1.75rem, 3vw, 2.5rem)", marginBottom: "1.5rem" }}>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, textAlign: "center", marginBottom: "1.5rem" }}>
            Your order is being handcrafted fresh and will be on its way to you soon.
            We appreciate your trust in Healing Water™.
          </p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { text: "Made to order — crafted fresh just for you" },
              { text: "Houston delivery available" },
              { text: "Questions? Contact us anytime" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ color: "var(--aqua)", fontSize: "0.45rem", flexShrink: 0, paddingTop: "0.4rem", opacity: 0.7 }}>◆</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{item.text}</span>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
          </div>
        </div>

        {/* Customer details */}
        {details.length > 0 && (
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", padding: "1.5rem", marginBottom: "2rem" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "1rem" }}>
              Your Details
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {details.map((d, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", flexShrink: 0, width: "52px" }}>
                    {d.label}
                  </span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
                    {d.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTAs */}
        <ConfirmationButtons />

        {/* Footer */}
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.55rem", color: "rgba(255,255,255,0.12)", textAlign: "center", marginTop: "3rem", lineHeight: 1.8 }}>
          Echoing Holistic Health™ · Houston, Texas<br />
          All orders are made to order. No cancellations once production begins.
        </p>
      </div>
    </div>
  );
}
