import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

export async function sendOrderConfirmation(
  name: string,
  email: string,
  productName: string,
  price: string,
  phone: string,
  address: string
) {
  const { orderConfirmationEmail } = await import("./emails/order-confirmation");
  const firstName = name.split(" ")[0];
  await getResend().emails.send({
    from: "Echoing Holistic Health™ <hello@echoingholistichealth.com>",
    to: email,
    subject: "Your Healing Water™ Order is Confirmed 💧",
    html: orderConfirmationEmail(firstName, productName, price, email, phone, address),
  });
}

export async function sendMerchantNotification(
  customerName: string,
  customerEmail: string,
  productName: string,
  price: string,
  phone: string,
  address: string
) {
  const to = process.env.MERCHANT_NOTIFY_EMAIL;
  if (!to) return;
  await getResend().emails.send({
    from: "Echoing Holistic Health™ <hello@echoingholistichealth.com>",
    to,
    subject: `New Order: ${productName} — ${price}`,
    html: `
      <p style="font-family:Arial,sans-serif;font-size:14px;">
        <strong>New Healing Water™ order received.</strong>
      </p>
      <table style="font-family:Arial,sans-serif;font-size:13px;border-collapse:collapse;">
        <tr><td style="padding:4px 12px 4px 0;color:#666;">Product</td><td>${productName}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666;">Amount</td><td>${price}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666;">Customer</td><td>${customerName}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666;">Email</td><td>${customerEmail}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666;">Phone</td><td>${phone || "—"}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666;">Ship To</td><td>${address || "—"}</td></tr>
      </table>
    `,
  });
}

export async function sendGutTeaCollection(name: string, email: string) {
  const { gutTeaCollectionEmail } = await import("./emails/gut-tea-collection");
  const firstName = name.split(" ")[0];

  await getResend().emails.send({
    from: "Echoing Holistic Health™ <hello@echoingholistichealth.com>",
    to: email,
    subject: "Your Free Gut-Friendly Tea Collection 🍵",
    html: gutTeaCollectionEmail(firstName),
  });
}
