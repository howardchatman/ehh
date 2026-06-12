// ─────────────────────────────────────────────────────────────────────────────
// Product Catalog — Healing Water™ by Echoing Holistic Health™
// ─────────────────────────────────────────────────────────────────────────────

export type Product = {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  pouches: number;
  price: string;
  priceUsd: number;
  stripeProductId: string;
  // Set these once you create Payment Links in Stripe Dashboard:
  // Products → click product → "Create payment link"
  paymentLink: string;
  tagline: string;
  description: string;
  benefits: string[];
  image: string;
  label: string | null;
  featured: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "starter-pack",
    name: "Functional Hydration Starter Pack",
    shortName: "Starter Pack",
    pouches: 4,
    price: "$46",
    priceUsd: 46,
    stripeProductId: "prod_Ufm7GK1ozRaCko",
    paymentLink: "", // paste https://buy.stripe.com/... from Stripe Dashboard
    tagline: "The perfect introduction.",
    description:
      "Four pouches of Healing Water™ — sea moss-powered functional hydration to experience the difference.",
    benefits: [
      "4 pouches of Healing Water™",
      "Sea moss + mineral blend",
      "Houston delivery available",
      "Mix & match flavors",
    ],
    image: "/4 pack.png",
    label: null,
    featured: false,
  },
  {
    id: 2,
    slug: "weekly-hydration-pack",
    name: "Weekly Hydration Pack",
    shortName: "Weekly Pack",
    pouches: 8,
    price: "$88",
    priceUsd: 88,
    stripeProductId: "prod_UfmGxiiQunDzSS",
    paymentLink: "",
    tagline: "Fuel your full week.",
    description:
      "Eight pouches to carry you through the week with consistent, mineral-rich hydration.",
    benefits: [
      "8 pouches of Healing Water™",
      "7-day hydration supply",
      "Sea moss + mineral blend",
      "Houston delivery available",
    ],
    image: "/8 pack.png",
    label: null,
    featured: false,
  },
  {
    id: 3,
    slug: "wellness-pack",
    name: "Wellness Pack",
    shortName: "Wellness Pack",
    pouches: 12,
    price: "$132",
    priceUsd: 132,
    stripeProductId: "prod_UfmHcgP223FK2n",
    paymentLink: "",
    tagline: "Most popular for a reason.",
    description:
      "Twelve pouches — the most popular pack for customers building a consistent hydration ritual.",
    benefits: [
      "12 pouches of Healing Water™",
      "Best value mid-size pack",
      "Sea moss + mineral blend",
      "Houston delivery available",
    ],
    image: "/12 Pack.png",
    label: "Most Popular",
    featured: true,
  },
  {
    id: 4,
    slug: "monthly-hydration-supply",
    name: "Monthly Hydration Supply",
    shortName: "Monthly Supply",
    pouches: 24,
    price: "$252",
    priceUsd: 252,
    stripeProductId: "prod_UfmKIEJUevpDPi",
    paymentLink: "",
    tagline: "Commit to the ritual.",
    description:
      "Twenty-four pouches — a full month of Healing Water™ for those committed to daily functional hydration.",
    benefits: [
      "24 pouches of Healing Water™",
      "Full month supply",
      "Sea moss + mineral blend",
      "Houston delivery available",
    ],
    image: "/24 150.png",
    label: null,
    featured: false,
  },
  {
    id: 5,
    slug: "family-pack",
    name: "Family Pack",
    shortName: "Family Pack",
    pouches: 36,
    price: "$324",
    priceUsd: 324,
    stripeProductId: "prod_UfmOfjfXSaLP0y",
    paymentLink: "",
    tagline: "Hydrate the whole family.",
    description:
      "Thirty-six pouches — the family-size pack so everyone in your home can experience the power of sea moss hydration.",
    benefits: [
      "36 pouches of Healing Water™",
      "Best per-pouch value",
      "Sea moss + mineral blend",
      "Houston delivery available",
    ],
    image: "/36 pack.png",
    label: null,
    featured: false,
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByFocusArea(_slug: string): Product[] {
  return products;
}
