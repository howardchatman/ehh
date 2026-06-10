import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
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
