import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-05-27.dahlia",
  });

  const { priceId } = await req.json();

  if (!priceId) {
    return NextResponse.json({ error: "Missing priceId" }, { status: 400 });
  }

  const origin = req.headers.get("origin") ?? "https://echoingholistichealth.com";

  const session = await stripe.checkout.sessions.create({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ui_mode: "embedded" as any,
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "payment",
    return_url: `${origin}/order-confirmed?session_id={CHECKOUT_SESSION_ID}`,
  } as Parameters<typeof stripe.checkout.sessions.create>[0]);

  return NextResponse.json({ clientSecret: session.client_secret });
}
