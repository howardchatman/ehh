// ─────────────────────────────────────────────────────────────────────────────
// Product Catalog — Echoing Holistic Health
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
  focusAreas: string[];   // focus area slugs
  featured: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "gut-restore-blend",
    name: "Gut Restore Blend",
    category: "herbal-tea",
    categoryLabel: "Herbal Tea",
    tagline: "Digestive harmony, restored.",
    description:
      "A carefully selected herbal blend to support digestion, reduce inflammation, and restore natural gut balance.",
    longDescription:
      "Formulated to work with the body's natural restorative processes, Gut Restore Blend combines herbs with established roles in digestive support—addressing the gut lining, microbiome diversity, and inflammatory load simultaneously. This is not a quick-relief formula. It is a daily practice.",
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
  },
  {
    id: 2,
    slug: "hormone-harmony",
    name: "Hormone Harmony",
    category: "seamoss",
    categoryLabel: "Seamoss Blend",
    tagline: "Balance begins within.",
    description:
      "Wild-crafted seamoss formulated to support the endocrine system and encourage natural hormonal rhythm.",
    longDescription:
      "Seamoss is one of the most mineral-dense foods available—providing the trace elements the thyroid, adrenals, and reproductive system depend on for function. Hormone Harmony combines wild-crafted seamoss with carefully selected botanical support to create a daily foundation for endocrine health.",
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
  },
  {
    id: 3,
    slug: "womb-ritual-tea",
    name: "Womb Ritual Tea",
    category: "herbal-tea",
    categoryLabel: "Herbal Tea",
    tagline: "Honor your cycles.",
    description:
      "A restorative blend of traditional herbs designed to support womb health and the feminine cycle with intention.",
    longDescription:
      "Womb Ritual Tea draws on a lineage of traditional feminine herbalism—plants that have been used across cultures for centuries to support the uterus, ease menstrual discomfort, and restore rhythm to the cycle. Each ingredient is chosen for its specific affinity with the female reproductive system.",
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
  },
  {
    id: 4,
    slug: "inflammation-ease-blend",
    name: "Inflammation Ease",
    category: "herbal-tea",
    categoryLabel: "Herbal Tea",
    tagline: "Quiet the signal. Restore the system.",
    description:
      "A botanical formula combining herbs known for their anti-inflammatory and adaptogenic properties.",
    longDescription:
      "Inflammation Ease is formulated for the woman who carries chronic inflammation in her body—whether expressed as fatigue, joint discomfort, skin reactivity, or the persistent low-level unease that comes from a body under sustained burden. This blend works systemically, not symptomatically.",
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
  },
  {
    id: 5,
    slug: "daily-seamoss-gel",
    name: "Daily Seamoss Gel",
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
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByFocusArea(slug: string): Product[] {
  return products.filter((p) => p.focusAreas.includes(slug));
}

export function getProductsByCategory(cat: string): Product[] {
  if (cat === "all") return products;
  return products.filter((p) => p.category === cat);
}

export const categoryLabels: Record<string, string> = {
  all:        "All Products",
  "herbal-tea": "Herbal Teas",
  seamoss:    "Seamoss",
  ritual:     "Ritual Essentials",
};
