// ─────────────────────────────────────────────────────────────────────────────
// Product Catalog — Echoing Holistic Health™
// ─────────────────────────────────────────────────────────────────────────────

export type Product = {
  id: number;
  slug: string;
  name: string;
  category: "herbal-tea" | "seamoss" | "ritual";
  categoryLabel: string;
  tagline: string;
  description: string;
  longDescription: string;
  benefits: string[];
  ritual: string;
  price: string;
  focusAreas: string[];
  featured: boolean;
  level: "entry" | "core" | "lifestyle" | "digital" | "premium";
  image: string;
  images: string[];
};

export const products: Product[] = [
  {
    id: 1,
    slug: "gut-flow",
    name: "Gut Flow™",
    category: "herbal-tea",
    categoryLabel: "Herbal Tea",
    tagline: "Digestive harmony, restored.",
    description:
      "A carefully selected herbal blend to support digestion, reduce inflammation, and restore natural gut balance.",
    longDescription:
      "Formulated to work with the body's natural restorative processes, Gut Flow™ combines herbs with established roles in digestive support—addressing the gut lining, microbiome diversity, and inflammatory load simultaneously. This is not a quick-relief formula. It is a daily practice.",
    benefits: [
      "Supports digestive function and motility",
      "Helps reduce gut-based inflammation",
      "Nourishes and protects the gut lining",
      "Encourages microbiome balance",
    ],
    ritual:
      "Prepare with intention. Steep for 7–10 minutes. Consume slowly, ideally 20 minutes before a meal or before sleep. Allow the body to respond.",
    price: "$48",
    focusAreas: ["gut-health", "inflammation-support"],
    featured: true,
    level: "core",
    image: "/gut_flow.png",
    images: [
      "/gut_flow.png",
      "/gut_flow_2.png",
      "/gut_flow_3.png",
      "/gut_flow_4.png",
    ],
  },
  {
    id: 2,
    slug: "womb-flow",
    name: "Womb Flow™",
    category: "herbal-tea",
    categoryLabel: "Herbal Tea",
    tagline: "Honor your cycles.",
    description:
      "A restorative blend of traditional herbs designed to support womb health and the feminine cycle with intention.",
    longDescription:
      "Womb Flow™ draws on a lineage of traditional feminine herbalism—plants that have been used across cultures for centuries to support the uterus, ease menstrual discomfort, and restore rhythm to the cycle. Each ingredient is chosen for its specific affinity with the female reproductive system.",
    benefits: [
      "Supports uterine health and circulation",
      "Helps ease menstrual discomfort naturally",
      "Encourages cycle regularity",
      "Nourishes reproductive tissue",
    ],
    ritual:
      "Prepare during the luteal or menstrual phase of your cycle. Steep for 10 minutes. Sit quietly while it cools. Drink with awareness. This is not just a tea—it is a practice.",
    price: "$52",
    focusAreas: ["womb-wellness", "hormonal-balance"],
    featured: true,
    level: "core",
    image: "/womb_flow.png",
    images: [
      "/womb_flow.png",
      "/womb_flow_2.png",
      "/womb_flow_3.png",
      "/womb_flow_4.png",
      "/womb_flow_5.png",
    ],
  },
  {
    id: 3,
    slug: "morning-vessel",
    name: "Morning Vessel™",
    category: "seamoss",
    categoryLabel: "Seamoss Blend",
    tagline: "Balance begins within.",
    description:
      "Wild-crafted seamoss formulated to support the endocrine system and encourage natural hormonal rhythm.",
    longDescription:
      "Seamoss is one of the most mineral-dense foods available—providing the trace elements the thyroid, adrenals, and reproductive system depend on for function. Morning Vessel™ combines wild-crafted seamoss with carefully selected botanical support to create a daily foundation for endocrine health.",
    benefits: [
      "Supports thyroid function with natural iodine",
      "Provides minerals essential for hormone production",
      "Nourishes adrenal function and stress resilience",
      "Supports estrogen metabolism pathways",
    ],
    ritual:
      "One tablespoon blended into water, juice, or a smoothie daily. Best taken in the morning to support the body's natural cortisol rhythm. Consistency creates results.",
    price: "$64",
    focusAreas: ["hormonal-balance", "gut-health"],
    featured: true,
    level: "core",
    image: "/morning_vessel.png",
    images: [
      "/morning_vessel.png",
      "/morning_vessel_2.png",
      "/morning_vessel_3.png",
      "/morning_vessel_4.png",
    ],
  },
  {
    id: 4,
    slug: "root-reset",
    name: "Root Reset™",
    category: "herbal-tea",
    categoryLabel: "Herbal Tea",
    tagline: "Quiet the signal. Restore the system.",
    description:
      "A botanical formula combining herbs known for their anti-inflammatory and adaptogenic properties.",
    longDescription:
      "Root Reset™ is formulated for the woman who carries chronic inflammation in her body—whether expressed as fatigue, joint discomfort, skin reactivity, or the persistent low-level unease that comes from a body under sustained burden. This blend works systemically, not symptomatically.",
    benefits: [
      "Modulates the inflammatory response naturally",
      "Supports liver detoxification pathways",
      "Provides adaptogenic stress support",
      "Helps reduce systemic inflammatory load",
    ],
    ritual:
      "Two cups daily—morning and evening. Allow 4–6 weeks of consistent use before assessing results. The body heals on its own timeline. Patience is part of the practice.",
    price: "$46",
    focusAreas: ["inflammation-support", "gut-health"],
    featured: false,
    level: "core",
    image: "/root_reset.png",
    images: [
      "/root_reset.png",
      "/root_reset_2.png",
      "/root_reset_3.png",
      "/root_reset_4.png",
      "/root_reset_5.png",
      "/root_reset_6.png",
      "/root_reset_woman_picture.png",
    ],
  },
  {
    id: 5,
    slug: "sea-moss-gel",
    name: "Sea Moss Gel",
    category: "seamoss",
    categoryLabel: "Seamoss",
    tagline: "92 minerals. One daily practice.",
    description:
      "Pure wild-crafted seamoss gel—unflavored, uncut, and formulated for daily use as a nutritional foundation.",
    longDescription:
      "This is the simplest offering in our collection—and perhaps the most powerful. Pure seamoss gel, wild-crafted from clean Atlantic waters, contains 92 of the 102 minerals the human body is made of. It is a nutritional foundation, not a supplement. A daily practice, not a quick fix.",
    benefits: [
      "92 essential minerals in bioavailable form",
      "Supports gut lining and mucosal health",
      "Thyroid and metabolic support",
      "Natural energy without stimulation",
    ],
    ritual:
      "One tablespoon daily. Add to water, smoothies, soups, or consume directly. Store refrigerated. Use within three weeks of opening.",
    price: "$38",
    focusAreas: ["gut-health", "hormonal-balance", "inflammation-support"],
    featured: false,
    level: "core",
    image: "/ehh2.png",
    images: [
      "/ehh2.png",
      "/ehh4.png",
      "/ehh5.png",
    ],
  },
  {
    id: 6,
    slug: "healing-waters",
    name: "Healing Waters",
    category: "ritual",
    categoryLabel: "Ritual",
    tagline: "Begin with water. Begin with intention.",
    description:
      "A mineral-infused herbal water ritual designed as the simplest entry point into daily healing practice.",
    longDescription:
      "Healing Waters is where most women begin. A gentle, mineral-rich herbal infusion that requires nothing more than water and willingness. It is the entry point into the E.H.H. system—designed to reduce baseline inflammation and introduce the body to consistent herbal support.",
    benefits: [
      "Gentle introduction to daily herbal support",
      "Reduces baseline inflammatory load",
      "Mineral-rich hydration support",
      "Establishes a daily healing ritual",
    ],
    ritual:
      "Add one sachet to 16oz of warm water each morning. No steeping required. Drink slowly before eating. This is your first act of care for the day.",
    price: "$28",
    focusAreas: ["gut-health", "inflammation-support"],
    featured: false,
    level: "entry",
    image: "/ehh3.png",
    images: [
      "/ehh3.png",
      "/ehh1.png",
    ],
  },
  {
    id: 7,
    slug: "root-reset-bundle",
    name: "Root Reset Bundle",
    category: "ritual",
    categoryLabel: "Ritual Bundle",
    tagline: "Everything you need to begin.",
    description:
      "The complete entry bundle: Gut Flow™, Womb Flow™, and Sea Moss Gel — formulated to work together across the E.H.H. Method™.",
    longDescription:
      "The Root Reset Bundle brings together three of our core formulas in a single, intentional package. Designed to address the gut, womb, and mineral foundation simultaneously — this is the recommended starting point for women entering the E.H.H. system for the first time.",
    benefits: [
      "Addresses gut, womb, and mineral needs together",
      "Discounted bundle pricing",
      "Includes the complete beginner protocol",
      "Designed for the first 30 days of practice",
    ],
    ritual:
      "Follow the included 30-day protocol guide. Morning: Sea Moss Gel. Daytime: Gut Flow™. Evening or cycle-phase specific: Womb Flow™.",
    price: "$118",
    focusAreas: ["gut-health", "womb-wellness", "hormonal-balance"],
    featured: false,
    level: "lifestyle",
    image: "/root_reset.png",
    images: [
      "/root_reset.png",
      "/root_reset_2.png",
      "/root_reset_3.png",
    ],
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByFocusArea(slug: string): Product[] {
  return products.filter((p) => p.focusAreas.includes(slug));
}

export function getProductsByCategory(cat: string): Product[] {
  if (cat === "all") return products;
  return products.filter((p) => p.category === cat);
}

export function getProductsByLevel(level: Product["level"]): Product[] {
  return products.filter((p) => p.level === level);
}

export const categoryLabels: Record<string, string> = {
  all:          "All Products",
  "herbal-tea": "Herbal Teas",
  seamoss:      "Seamoss",
  ritual:       "Ritual Essentials",
};
