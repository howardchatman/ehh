// ─────────────────────────────────────────────────────────────────────────────
// Focus Area Content — the four pillars of Echoing Holistic Health
// ─────────────────────────────────────────────────────────────────────────────

export type FocusArea = {
  slug: string;
  number: string;
  title: string;
  heroHeadline: string[];      // split by line for animation
  heroSubhead: string;
  intro: string;
  body: string[];              // paragraphs
  pullQuote: string;
  principles: string[];
  whatWeAddress: string[];
  productIds: number[];
};

export const focusAreas: FocusArea[] = [
  {
    slug: "gut-health",
    number: "01",
    title: "Gut Health",
    heroHeadline: ["Every system", "begins", "here."],
    heroSubhead:
      "The gut is not just a digestive organ. It is the origin of immunity, the seat of mood, the foundation of everything the body does.",
    intro:
      "When the gut is compromised, nothing works as it should. Digestion falters. Inflammation rises. Energy wanes. Mood shifts. The body begins to communicate through symptoms that conventional medicine too often treats in isolation.",
    body: [
      "The microbiome—the ecosystem of bacteria, fungi, and organisms living within the digestive tract—is now understood to influence nearly every system in the human body. It regulates the immune response, produces neurotransmitters that affect mood and cognition, and determines how efficiently the body absorbs the nutrients it needs to function.",
      "Gut health is not simply about what you eat. It is about the environment you have created inside your body. Years of stress, processed food, antibiotics, and environmental toxins can erode the microbiome, compromise the gut lining, and trigger a cascade of systemic inflammation.",
      "Our approach does not manage symptoms. It addresses the conditions that allowed dysfunction to take root—working to restore integrity to the gut lining, nourish the microbiome, and reduce the inflammatory burden that prevents healing.",
    ],
    pullQuote: "The gut does not fail alone. It responds to everything.",
    principles: [
      "Restore microbiome diversity before managing symptoms",
      "Address gut lining integrity and permeability",
      "Support the gut-brain axis and vagal tone",
      "Reduce systemic inflammation at its origin",
    ],
    whatWeAddress: [
      "Bloating and irregular digestion",
      "Chronic inflammation and immune dysregulation",
      "Low energy and nutrient malabsorption",
      "Mood disruption with digestive origins",
      "Food sensitivities and reactivity",
    ],
    productIds: [1, 2],
  },
  {
    slug: "hormonal-balance",
    number: "02",
    title: "Hormonal Balance",
    heroHeadline: ["When hormones", "shift,", "everything shifts."],
    heroSubhead:
      "The endocrine system governs more than reproduction. It is the master communication network of the body—and its imbalances are felt in every cell.",
    intro:
      "Hormonal imbalance is not a personality flaw or an inevitable consequence of womanhood. It is a signal. A message from the body that something in its environment—internal or external—has exceeded its capacity to adapt.",
    body: [
      "Estrogen, progesterone, cortisol, insulin, thyroid hormones—each of these communicates with the others in a delicate, interdependent web. When one is disrupted, the others compensate, shift, and eventually begin to signal distress through symptoms that are too often dismissed as 'normal' or managed with suppression rather than support.",
      "The modern world is an endocrine challenge. Plastics, pesticides, chronic stress, disrupted sleep, and a food supply engineered for convenience rather than nourishment—all of these place burden on a system that was never designed to absorb them.",
      "Restoring hormonal balance requires a systems-level view. Gut health. Liver function. Adrenal support. Reducing toxic load. Nourishing the body with what it needs to produce, transport, and clear hormones effectively. We approach each of these not as separate interventions, but as one integrated restoration.",
    ],
    pullQuote: "Balance is not a destination. It is a practice of returning.",
    principles: [
      "Support estrogen metabolism through gut and liver pathways",
      "Regulate cortisol to protect the HPG axis",
      "Nourish adrenal function without stimulation",
      "Reduce endocrine-disrupting burden systematically",
    ],
    whatWeAddress: [
      "Irregular or painful cycles",
      "PMS and premenstrual mood shifts",
      "Estrogen dominance and progesterone insufficiency",
      "Fatigue and cortisol dysregulation",
      "Thyroid sensitivity and metabolic disruption",
    ],
    productIds: [2, 3],
  },
  {
    slug: "womb-wellness",
    number: "03",
    title: "Womb Wellness",
    heroHeadline: ["The womb is", "not a problem", "to be managed."],
    heroSubhead:
      "It is the center of the feminine body—and it deserves an approach built on reverence, not just relief.",
    intro:
      "For many women, the womb has been a source of pain, confusion, and medical frustration. Cycles that are ignored until they become unbearable. Symptoms that are normalized. Bodies that are managed rather than understood.",
    body: [
      "The menstrual cycle is not a monthly inconvenience. It is a vital sign. Each phase carries information about the state of your hormones, your gut, your stress response, and your nutritional status. When that cycle is irregular, painful, or absent, the body is communicating—not malfunctioning.",
      "Womb wellness is a practice of listening. Of building the conditions within the body that allow the uterus, ovaries, and surrounding tissue to function with ease—not just survive. This requires understanding the hormonal architecture of the cycle, supporting the body's natural inflammatory response, and addressing root causes rather than masking monthly symptoms.",
      "Our formulations for womb wellness are rooted in traditional herbalism and supported by modern understanding of the female reproductive system. They are designed not as a band-aid, but as part of a deeper practice of self-knowledge and care.",
    ],
    pullQuote: "A woman who understands her cycle understands herself.",
    principles: [
      "Honor the four phases of the menstrual cycle",
      "Reduce prostaglandin-driven pain at its hormonal root",
      "Support uterine circulation and tissue health",
      "Address reproductive inflammation systemically",
    ],
    whatWeAddress: [
      "Painful or heavy menstruation",
      "Cycle irregularity and anovulation",
      "Endometriosis and fibroids support",
      "Fertility preparation and womb nourishment",
      "Perimenopause and cycle transition",
    ],
    productIds: [3, 1],
  },
  {
    slug: "inflammation-support",
    number: "04",
    title: "Inflammation Support",
    heroHeadline: ["Inflammation", "is not the", "enemy."],
    heroSubhead:
      "It is a message. The question is whether you are listening—or only trying to silence it.",
    intro:
      "Acute inflammation is how the body heals. It is precise, purposeful, and self-limiting. Chronic inflammation is something else entirely—a persistent, low-grade burden that accumulates quietly and expresses itself through fatigue, pain, disrupted cycles, skin issues, digestive dysfunction, and mood instability.",
    body: [
      "Chronic inflammation does not arrive overnight. It is built—brick by brick—through unresolved stress, poor sleep, a compromised gut barrier, nutrient deficiency, and a body that has been asked to adapt to conditions it was never designed for. It is the common thread that runs through nearly every modern chronic condition.",
      "Suppressing inflammation without addressing its cause is like removing the batteries from a smoke alarm. The alarm stops—but the fire continues. Our approach asks: what is the body responding to? Where is the inflammatory signal originating? And what does the body need to resolve—not suppress—that signal?",
      "Herbal anti-inflammatory support works differently from pharmaceutical approaches. Rather than blocking inflammatory pathways wholesale, it modulates the response—helping the body distinguish between the inflammation it needs and the burden it is carrying unnecessarily. This is a more intelligent, sustainable approach to resolution.",
    ],
    pullQuote:
      "The body does not create inflammation for no reason. It creates it in response.",
    principles: [
      "Address the origin of inflammation, not just its expression",
      "Support NF-kB modulation through plant compounds",
      "Restore gut integrity to reduce systemic inflammatory load",
      "Nourish the adrenals and reduce cortisol-driven inflammation",
    ],
    whatWeAddress: [
      "Chronic fatigue and systemic inflammation",
      "Joint discomfort and inflammatory pain",
      "Skin conditions with inflammatory drivers",
      "Autoimmune sensitivity and immune dysregulation",
      "Digestive inflammation and leaky gut",
    ],
    productIds: [1, 2],
  },
];

export function getFocusArea(slug: string): FocusArea | undefined {
  return focusAreas.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return focusAreas.map((a) => a.slug);
}
