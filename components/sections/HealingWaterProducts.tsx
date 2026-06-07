"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

const PRODUCTS = [
  {
    name: "Healing Water Lemon Ginger™",
    tagline: "Refreshing lemon and ginger hydration.",
    size: "15 oz",
    slug: "lemon-ginger",
    ingredients: ["Alkaline Water", "Sea Moss Water", "Lemon", "Ginger", "Raw Honey"],
    accent: "var(--gold)",
    bg: "linear-gradient(145deg, #FFF8E8 0%, #FFF3D0 100%)",
  },
  {
    name: "Healing Water Active™",
    tagline: "Sea moss, chlorophyll, mint, and electrolyte hydration.",
    size: "15 oz",
    slug: "active",
    ingredients: ["Alkaline Water", "Sea Moss Water", "Lemon", "Mint", "Chlorophyll", "Electrolytes", "Raw Honey"],
    accent: "var(--aqua)",
    bg: "linear-gradient(145deg, #E8F8FA 0%, #D0F0F4 100%)",
  },
];

export default function HealingWaterProducts() {
  return (
    <section
      aria-label="Featured Products"
      style={{ backgroundColor: "white", position: "relative" }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "var(--section-y) var(--section-x)",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE }}
          style={{ display: "flex", flexDirection: "column", gap: "clamp(2rem, 3vw, 3rem)", marginBottom: "clamp(3rem, 5vw, 5rem)" }}
          className="md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", flexShrink: 0 }} />
              <span className="micro-label" style={{ color: "var(--aqua)" }}>Featured Products</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.6rem, 5.5vw, 6rem)",
                fontWeight: 300,
                lineHeight: 0.92,
                letterSpacing: "-0.025em",
                color: "var(--ocean)",
              }}
            >
              Crafted to
              <br />
              <em style={{ fontStyle: "italic", color: "var(--aqua)" }}>hydrate deeply.</em>
            </h2>
          </div>
          <Link href="/shop" className="text-link link-gold" style={{ color: "var(--ocean)", flexShrink: 0 }}>
            View all products →
          </Link>
        </motion.div>

        {/* Product cards */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(2rem, 3.5vw, 3.5rem)" }}
          className="md:grid-cols-2"
        >
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.12 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: typeof PRODUCTS[number] }) {
  return (
    <div
      style={{
        border: "1px solid var(--border)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Visual placeholder — swap with real product photo */}
      <div
        style={{
          height: "clamp(200px, 28vw, 320px)",
          background: product.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              border: `2px solid ${product.accent}`,
              opacity: 0.35,
              margin: "0 auto 1rem",
            }}
          />
          <span
            className="micro-label"
            style={{ color: "var(--muted)", opacity: 0.5 }}
          >
            Product photo coming soon
          </span>
        </div>
        <div style={{ position: "absolute", top: "1rem", left: "1rem", padding: "0.3rem 0.75rem", backgroundColor: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)" }}>
          <span className="micro-label" style={{ color: "var(--ocean)" }}>{product.size}</span>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "clamp(1.5rem, 2.5vw, 2.5rem)", flex: 1, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <div>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
              fontWeight: 400,
              color: "var(--ocean)",
              marginBottom: "0.4rem",
              lineHeight: 1.2,
            }}
          >
            {product.name}
          </h3>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", color: "var(--muted)", fontWeight: 300 }}>
            {product.tagline}
          </p>
        </div>

        {/* Ingredients */}
        <div>
          <span className="micro-label" style={{ color: "var(--aqua)", display: "block", marginBottom: "0.75rem" }}>
            Ingredients
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {product.ingredients.map((ing) => (
              <span
                key={ing}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.72rem",
                  fontWeight: 400,
                  color: "var(--ocean-mid)",
                  backgroundColor: "var(--sea-foam)",
                  padding: "0.25rem 0.65rem",
                  border: "1px solid var(--border)",
                }}
              >
                {ing}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "auto" }}>
          <Link href={`/shop/${product.slug}`} className="btn-dark" style={{ width: "100%", justifyContent: "center" }}>
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
