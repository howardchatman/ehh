export function gutTeaCollectionEmail(firstName: string): string {
  const recipes = [
    {
      number: "01",
      name: "Ginger Mint Tea",
      tagline: "Warms and activates digestion.",
      ingredients: [
        "1 inch fresh ginger, sliced thin",
        "8–10 fresh mint leaves",
        "2 cups filtered water",
        "1 tsp raw honey",
        "Juice of ¼ lemon (optional)",
      ],
      steps: [
        "Bring water to a gentle simmer.",
        "Add ginger slices and steep 7 minutes.",
        "Remove from heat, add mint leaves, steep 3 more minutes.",
        "Strain, sweeten with honey, add lemon if desired.",
        "Drink warm before or after meals.",
      ],
      use: "Ginger stimulates digestive enzymes and reduces nausea. Mint relaxes the muscles of the digestive tract and eases cramping.",
    },
    {
      number: "02",
      name: "Fennel Comfort Tea",
      tagline: "Soothes bloating and gas naturally.",
      ingredients: [
        "1½ tsp fennel seeds, lightly crushed",
        "1 cup hot water",
        "½ tsp raw honey",
        "Pinch of sea salt (optional)",
      ],
      steps: [
        "Lightly crush fennel seeds with a spoon or mortar and pestle.",
        "Place in a tea strainer or directly in a cup.",
        "Pour hot water over seeds and steep 8–10 minutes.",
        "Strain and sweeten lightly with honey.",
        "Sip slowly after meals.",
      ],
      use: "Fennel's volatile oils relax the smooth muscles of the intestinal tract, helping trapped gas pass and reducing post-meal discomfort.",
    },
    {
      number: "03",
      name: "Chamomile Belly Tea",
      tagline: "Calms the gut and reduces inflammation.",
      ingredients: [
        "1 tbsp dried chamomile flowers (or 1 tea bag)",
        "2 cups hot water",
        "1 tsp raw honey",
        "2 slices fresh lemon",
      ],
      steps: [
        "Pour hot water over chamomile in a strainer or infuser.",
        "Steep for 5–7 minutes — don't over-steep or it turns bitter.",
        "Remove chamomile, add honey and lemon.",
        "Sip warm, especially in the evening.",
      ],
      use: "Chamomile contains bisabolol and chamazulene — compounds that reduce gut inflammation and calm irritated stomach lining. Also supports restful sleep.",
    },
    {
      number: "04",
      name: "Cinnamon Digest Tea",
      tagline: "Balances blood sugar and supports gut motility.",
      ingredients: [
        "1 cinnamon stick (or ½ tsp cinnamon powder)",
        "2 cups filtered water",
        "¼ tsp fresh ginger, grated",
        "1 tsp raw honey",
      ],
      steps: [
        "Bring water to a low simmer and add cinnamon stick.",
        "Simmer gently for 10 minutes.",
        "Remove from heat and add grated ginger.",
        "Steep 5 more minutes, then strain.",
        "Sweeten with honey and drink warm.",
      ],
      use: "Cinnamon reduces blood sugar spikes after meals, directly impacting gut health. It also has antimicrobial properties that help balance gut bacteria.",
    },
    {
      number: "05",
      name: "Lemon Peel Tea",
      tagline: "Detoxes and stimulates the digestive system.",
      ingredients: [
        "Peel of 1 organic lemon (avoid wax-coated)",
        "2 cups water",
        "1 tsp raw honey",
        "1 sprig fresh rosemary (optional)",
      ],
      steps: [
        "Wash the lemon thoroughly and peel in long strips.",
        "Bring water to a boil, add lemon peel and rosemary if using.",
        "Reduce heat and simmer 8 minutes.",
        "Strain into a mug and sweeten with honey.",
        "Best on an empty stomach first thing in the morning.",
      ],
      use: "Lemon peel is rich in d-limonene, which supports liver detox and bile production — essential for fat digestion. The bitter compounds also activate digestive enzymes.",
    },
  ];

  const recipeCards = recipes
    .map(
      (r) => `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px; border:1px solid #2a2a2a; background:#111111;">
      <tr>
        <td style="padding:20px 24px 16px;">
          <p style="font-family:Georgia,serif; font-size:11px; color:#B8965A; letter-spacing:0.2em; text-transform:uppercase; margin:0 0 6px;">${r.number}</p>
          <h3 style="font-family:Georgia,serif; font-size:20px; font-weight:400; color:#FAF8F5; margin:0 0 4px; line-height:1.2;">${r.name}</h3>
          <p style="font-family:Georgia,serif; font-style:italic; font-size:13px; color:rgba(250,248,245,0.4); margin:0;">${r.tagline}</p>
        </td>
      </tr>
      <tr>
        <td style="padding:0 24px 20px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td width="48%" valign="top" style="padding-right:16px;">
                <p style="font-family:Arial,sans-serif; font-size:9px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#B8965A; margin:0 0 10px;">Ingredients</p>
                ${r.ingredients.map((ing) => `<p style="font-family:Arial,sans-serif; font-size:12px; font-weight:300; color:rgba(250,248,245,0.6); margin:0 0 6px; line-height:1.5;">· ${ing}</p>`).join("")}
              </td>
              <td width="4%" style="border-left:1px solid #2a2a2a;">&nbsp;</td>
              <td width="48%" valign="top" style="padding-left:16px;">
                <p style="font-family:Arial,sans-serif; font-size:9px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:rgba(184,150,90,0.6); margin:0 0 10px;">Preparation</p>
                ${r.steps.map((step, i) => `<p style="font-family:Arial,sans-serif; font-size:12px; font-weight:300; color:rgba(250,248,245,0.6); margin:0 0 6px; line-height:1.5;"><span style="color:#B8965A;">${i + 1}.</span> ${step}</p>`).join("")}
              </td>
            </tr>
          </table>
          <div style="margin-top:16px; border-left:2px solid rgba(184,150,90,0.3); padding-left:14px;">
            <p style="font-family:Arial,sans-serif; font-size:9px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:rgba(184,150,90,0.5); margin:0 0 4px;">Traditional Use</p>
            <p style="font-family:Georgia,serif; font-style:italic; font-size:12px; color:rgba(250,248,245,0.3); line-height:1.75; margin:0;">${r.use}</p>
          </div>
        </td>
      </tr>
    </table>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Free Gut-Friendly Tea Collection</title>
</head>
<body style="margin:0; padding:0; background-color:#0D0D0D; font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0D0D0D;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

          <!-- Header -->
          <tr>
            <td align="center" style="padding:40px 32px 32px; background:linear-gradient(160deg,#1A1208 0%,#2A1F10 100%); border-bottom:1px solid rgba(184,150,90,0.15);">
              <p style="font-family:Georgia,serif; font-size:9px; font-weight:300; letter-spacing:0.4em; text-transform:uppercase; color:#B8965A; margin:0 0 4px;">Echoing</p>
              <p style="font-family:Georgia,serif; font-size:13px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; color:rgba(250,248,245,0.85); margin:0 0 28px;">Holistic Health</p>
              <div style="height:1px; width:40px; background:#B8965A; opacity:0.4; margin:0 auto 28px;"></div>
              <h1 style="font-family:Georgia,serif; font-size:32px; font-weight:300; line-height:1.1; color:#FAF8F5; margin:0 0 12px; letter-spacing:-0.02em;">
                Hi ${firstName},<br/>
                <em style="font-style:italic; color:#B8965A;">here's your gift.</em>
              </h1>
              <p style="font-family:Georgia,serif; font-style:italic; font-size:14px; font-weight:300; color:rgba(250,248,245,0.4); line-height:1.85; margin:0;">
                Thank you for joining the Echoing Holistic Health™ community before our
                official launch. Below are your 5 free gut-friendly tea recipes — yours
                to keep and enjoy.
              </p>
            </td>
          </tr>

          <!-- Section label -->
          <tr>
            <td style="padding:28px 32px 20px; background:#111111;">
              <p style="font-family:Arial,sans-serif; font-size:9px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:rgba(184,150,90,0.5); text-align:center; margin:0;">
                Free Gut-Friendly Tea Collection · 5 Recipes
              </p>
            </td>
          </tr>

          <!-- Recipes -->
          <tr>
            <td style="padding:0 32px; background:#111111;">
              ${recipeCards}
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 32px; background:#111111;">
              <div style="height:1px; background:rgba(184,150,90,0.12); margin:8px 0 32px;"></div>
            </td>
          </tr>

          <!-- Disclaimer -->
          <tr>
            <td style="padding:0 32px 16px; background:#111111;">
              <p style="font-family:Arial,sans-serif; font-size:10px; font-weight:300; color:rgba(250,248,245,0.2); line-height:1.75; margin:0; text-align:center;">
                These statements have not been evaluated by the Food and Drug Administration.
                This information is for educational purposes only and is not intended as medical advice.
                Always consult a qualified healthcare professional. Individual results may vary.
              </p>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td align="center" style="padding:32px; background:#111111;">
              <p style="font-family:Georgia,serif; font-style:italic; font-size:13px; color:rgba(250,248,245,0.3); margin:0 0 20px; line-height:1.75;">
                Be among the first to know when Healing Water™ officially launches.
              </p>
              <a href="https://echoingholistichealth.com" style="display:inline-block; font-family:Arial,sans-serif; font-size:9px; font-weight:600; letter-spacing:0.2em; text-transform:uppercase; color:#B8965A; border:1px solid rgba(184,150,90,0.4); padding:12px 28px; text-decoration:none;">
                Visit EchoingHolisticHealth.com
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 32px; background:#0A0A0A; border-top:1px solid rgba(184,150,90,0.08);">
              <p style="font-family:Arial,sans-serif; font-size:10px; color:rgba(250,248,245,0.15); text-align:center; margin:0 0 6px;">
                Echoing Holistic Health™ · Houston, Texas
              </p>
              <p style="font-family:Arial,sans-serif; font-size:10px; color:rgba(250,248,245,0.15); text-align:center; margin:0;">
                You received this because you joined our community at EchoingHolisticHealth.com.
                <br/>Hydration. Wellness. Abundance.
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
