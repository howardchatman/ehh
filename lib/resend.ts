import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendGutTeaCollection(name: string, email: string) {
  const { gutTeaCollectionEmail } = await import("./emails/gut-tea-collection");
  const firstName = name.split(" ")[0];

  await resend.emails.send({
    from: "Echoing Holistic Health™ <hello@echoingholistichealth.com>",
    to: email,
    subject: "Your Free Gut-Friendly Tea Collection 🍵",
    html: gutTeaCollectionEmail(firstName),
  });
}
