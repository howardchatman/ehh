import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-05-27.dahlia",
    });

    const { priceId } = await req.json();

    if (!priceId) {
      return NextResponse.json({ error: "Missing priceId" }, { status: 400 });
    }

    const origin = req.headers.get("origin") ?? "https://echoingholistichealth.com";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sessionParams: any = {
      ui_mode: "embedded",
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "payment",
      return_url: `${origin}/order-confirmed?session_id={CHECKOUT_SESSION_ID}`,
    };

    const session = await stripe.checkout.sessions.create(sessionParams);

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[checkout] Stripe error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
