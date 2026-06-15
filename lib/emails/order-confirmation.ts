export function orderConfirmationEmail(
  firstName: string,
  productName: string,
  price: string,
  email: string,
  phone: string,
  address: string
): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Order Confirmed — Healing Water™</title>
</head>
<body style="margin:0; padding:0; background-color:#0A2540; font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A2540;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

          <!-- Header -->
          <tr>
            <td align="center" style="padding:40px 32px 32px; background:linear-gradient(160deg,#0A2540 0%,#13446E 100%); border-bottom:1px solid rgba(28,184,200,0.15);">
              <p style="font-family:Georgia,serif; font-size:9px; font-weight:300; letter-spacing:0.4em; text-transform:uppercase; color:rgba(28,184,200,0.7); margin:0 0 4px;">Echoing</p>
              <p style="font-family:Georgia,serif; font-size:13px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.85); margin:0 0 4px;">Holistic Health</p>
              <p style="font-family:Arial,sans-serif; font-size:8px; font-weight:400; letter-spacing:0.28em; text-transform:uppercase; color:rgba(28,184,200,0.5); margin:0 0 28px;">Healing Water™</p>

              <div style="width:40px; height:40px; border-radius:50%; border:1.5px solid rgba(28,184,200,0.5); margin:0 auto 20px; display:table-cell; vertical-align:middle; text-align:center;">
                <span style="font-size:18px; color:var(--aqua);">✓</span>
              </div>

              <h1 style="font-family:Georgia,serif; font-size:28px; font-weight:300; line-height:1.2; color:#FAF8F5; margin:0 0 10px; letter-spacing:-0.02em;">
                Order Confirmed,<br/>
                <em style="font-style:italic; color:#1CB8C8;">${firstName}.</em>
              </h1>
              <p style="font-family:Georgia,serif; font-style:italic; font-size:13px; font-weight:300; color:rgba(255,255,255,0.4); line-height:1.75; margin:0;">
                Thank you for your order. We&apos;re crafting your Healing Water™ fresh and will be in touch with delivery details soon.
              </p>
            </td>
          </tr>

          <!-- Order summary -->
          <tr>
            <td style="padding:24px 32px 0; background:#0d2d4a;">
              <p style="font-family:Arial,sans-serif; font-size:9px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:rgba(28,184,200,0.5); margin:0 0 16px;">Order Summary</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-family:Arial,sans-serif; font-size:13px; font-weight:300; color:rgba(255,255,255,0.8); padding-bottom:8px;">${productName}</td>
                  <td align="right" style="font-family:Georgia,serif; font-size:16px; font-weight:300; color:#1CB8C8; padding-bottom:8px;">${price}</td>
                </tr>
                <tr>
                  <td colspan="2" style="border-top:1px solid rgba(255,255,255,0.06); padding-top:12px;">
                    <p style="font-family:Arial,sans-serif; font-size:11px; font-weight:300; color:rgba(255,255,255,0.3); margin:0; font-style:italic;">Made to order · No cancellations once production begins</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Customer details -->
          <tr>
            <td style="padding:20px 32px 24px; background:#0d2d4a;">
              <p style="font-family:Arial,sans-serif; font-size:9px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:rgba(28,184,200,0.5); margin:0 0 14px;">Your Details</p>
              ${[
                email    ? `<p style="font-family:Arial,sans-serif; font-size:12px; font-weight:300; color:rgba(255,255,255,0.5); margin:0 0 6px; line-height:1.5;"><span style="color:rgba(255,255,255,0.25); font-size:10px; letter-spacing:0.1em; text-transform:uppercase;">Email &nbsp;</span>${email}</p>` : "",
                phone    ? `<p style="font-family:Arial,sans-serif; font-size:12px; font-weight:300; color:rgba(255,255,255,0.5); margin:0 0 6px; line-height:1.5;"><span style="color:rgba(255,255,255,0.25); font-size:10px; letter-spacing:0.1em; text-transform:uppercase;">Phone &nbsp;</span>${phone}</p>` : "",
                address  ? `<p style="font-family:Arial,sans-serif; font-size:12px; font-weight:300; color:rgba(255,255,255,0.5); margin:0 0 6px; line-height:1.5;"><span style="color:rgba(255,255,255,0.25); font-size:10px; letter-spacing:0.1em; text-transform:uppercase;">Ship To &nbsp;</span>${address}</p>` : "",
              ].join("")}
            </td>
          </tr>

          <!-- What's next -->
          <tr>
            <td style="padding:24px 32px; background:#111e2e; border-top:1px solid rgba(28,184,200,0.08);">
              <p style="font-family:Arial,sans-serif; font-size:9px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:rgba(28,184,200,0.5); margin:0 0 14px;">What Happens Next</p>
              ${[
                "We prepare your Healing Water™ fresh to order.",
                "You'll receive delivery or pickup details within 1–2 business days.",
                "Questions? Reply to this email or visit EchoingHolisticHealth.com.",
              ].map((s, i) => `<p style="font-family:Arial,sans-serif; font-size:12px; font-weight:300; color:rgba(255,255,255,0.5); margin:0 0 8px; line-height:1.6;"><span style="color:#1CB8C8;">${i + 1}.</span> ${s}</p>`).join("")}
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td align="center" style="padding:28px 32px; background:#111e2e;">
              <a href="https://echoingholistichealth.com/shop" style="display:inline-block; font-family:Arial,sans-serif; font-size:9px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:white; background:transparent; border:1px solid rgba(255,255,255,0.4); padding:14px 32px; text-decoration:none;">
                Order More
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px; background:#0A2540; border-top:1px solid rgba(28,184,200,0.06);">
              <p style="font-family:Arial,sans-serif; font-size:10px; color:rgba(255,255,255,0.12); text-align:center; margin:0 0 6px;">
                Echoing Holistic Health™ · Houston, Texas
              </p>
              <p style="font-family:Arial,sans-serif; font-size:10px; color:rgba(255,255,255,0.12); text-align:center; margin:0;">
                EchoingHolisticHealth.com · Hydration. Wellness. Abundance.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
