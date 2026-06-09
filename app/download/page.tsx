import Stripe from "stripe";
import DownloadPage from "@/components/pages/DownloadPage";

export const metadata = {
  title: "Download Your Recipe Book — Echoing Holistic Health™",
  description: "Your 20 Healing Tea Recipes eBook is ready to download.",
  robots: { index: false, follow: false },
};

// ── Set these in Vercel environment variables ──────────────────────────────
// STRIPE_SECRET_KEY   → your Stripe secret key (sk_live_...)
// RECIPE_BOOK_PDF_URL → direct download URL to the PDF
//   (Supabase Storage public URL, Google Drive direct link, etc.)
// ──────────────────────────────────────────────────────────────────────────

async function verifyStripeSession(sessionId: string): Promise<boolean> {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-05-27.dahlia",
    });
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return session.payment_status === "paid";
  } catch {
    return false;
  }
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    return <DownloadPage status="invalid" />;
  }

  const paid = await verifyStripeSession(session_id);
  const pdfUrl = process.env.RECIPE_BOOK_PDF_URL ?? "";

  return <DownloadPage status={paid ? "success" : "invalid"} pdfUrl={pdfUrl} />;
}
