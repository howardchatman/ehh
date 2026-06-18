"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

const FLAVORS = [
  {
    name: "Emeral Energy™",
    tagline: "Sea moss, chlorophyll, mint & lemon.",
    image: "/emeral-energy.png",
    ingredients: ["Sea Moss", "Chlorophyll", "Mint", "Lemon", "Alkaline Water"],
    bg: "linear-gradient(145deg, #e8f5e9 0%, #c8e6c9 100%)",
  },
  {
    name: "Ruby Renewal™",
    tagline: "Sea moss, ginger & beetroot recovery.",
    image: "/ruby-renewal.png",
    ingredients: ["Sea Moss", "Ginger", "Beetroot", "Alkaline Water"],
    bg: "linear-gradient(145deg, #fce4ec 0%, #f8bbd0 100%)",
  },
  {
    name: "Golden Glow™",
    tagline: "Sea moss, lemon, ginger & raw honey.",
    image: "/golden-glow.png",
    ingredients: ["Sea Moss", "Lemon", "Ginger", "Raw Honey", "Alkaline Water"],
    bg: "linear-gradient(145deg, #fffde7 0%, #fff9c4 100%)",
  },
  {
    name: "Gut Flow Tea™",
    tagline: "Cascara sagrada, senna, honey & fennel.",
    image: "/gut-flow-tea.png",
    ingredients: ["Cascara Sagrada", "Senna Leaf", "Honey", "Ginger", "Fennel Seed"],
    bg: "linear-gradient(145deg, #f3e5d8 0%, #e8d5c0 100%)",
  },
];

export default function HealingWaterProducts() {
  return (
    <section aria-label="Our Products" style={{ backgroundColor: "white", position: "relative" }}>
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
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(2rem, 3vw, 3rem)",
            marginBottom: "clamp(3rem, 5vw, 5rem)",
          }}
          className="md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", flexShrink: 0 }} />
              <span className="micro-label" style={{ color: "var(--aqua)" }}>The Collection</span>
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
            View packs & pricing →
          </Link>
        </motion.div>

        {/* 2×2 grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(1.25rem, 2vw, 2rem)",
          }}
          className="md:grid-cols-2"
        >
          {FLAVORS.map((flavor, i) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.1 }}
            >
              <FlavorCard flavor={flavor} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          style={{ textAlign: "center", marginTop: "clamp(2.5rem, 4vw, 4rem)" }}
        >
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--muted)", marginBottom: "1.5rem" }}>
            Available in packs of 4, 8, 12, 24 & 36 pouches.
          </p>
          <Link href="/shop" className="btn-ocean" style={{ display: "inline-flex" }}>
            Shop
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function FlavorCard({ flavor }: { flavor: typeof FLAVORS[number] }) {
  return (
    <div
      style={{
        border: "1px solid var(--border)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(10,37,64,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Product image */}
      <div
        style={{
          height: "clamp(240px, 30vw, 380px)",
          background: flavor.bg,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={flavor.image}
          alt={flavor.name}
          fill
          style={{ objectFit: "contain", padding: "1.5rem" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Info */}
      <div style={{ padding: "clamp(1.25rem, 2vw, 2rem)", flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.2rem, 1.8vw, 1.55rem)",
              fontWeight: 400,
              color: "var(--ocean)",
              marginBottom: "0.3rem",
              lineHeight: 1.2,
            }}
          >
            {flavor.name}
          </h3>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.9rem", color: "var(--muted)", fontWeight: 300 }}>
            {flavor.tagline}
          </p>
        </div>

        {/* Ingredients */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
          {flavor.ingredients.map((ing) => (
            <span
              key={ing}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.68rem",
                fontWeight: 400,
                color: "var(--ocean-mid)",
                backgroundColor: "var(--sea-foam)",
                padding: "0.2rem 0.6rem",
                border: "1px solid var(--border)",
              }}
            >
              {ing}
            </span>
          ))}
        </div>

        <div style={{ marginTop: "auto" }}>
          <Link href="/shop" className="btn-dark" style={{ width: "100%", justifyContent: "center" }}>
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
