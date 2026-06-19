"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import WaveDivider from "@/components/ui/WaveDivider";
import BotanicalAccent from "@/components/ui/BotanicalAccent";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

const FLAVORS = [
  {
    name: "Emerald Energy™",
    tagline: "Sea moss, chlorophyll, mint & lemon.",
    image: "/emerald-energy.png",
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
    <section aria-label="Our Products" style={{ backgroundColor: "var(--ivory)", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "var(--section-y) var(--section-x) clamp(8rem, 14vw, 12rem)",
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

        {/* Botanical ornament */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "clamp(2rem, 3vw, 3rem)" }}>
          <BotanicalAccent color="var(--sage)" width={100} opacity={0.5} />
        </div>

        {/* 2×2 grid */}
        <div
          style={{ display: "grid", gap: "clamp(1.25rem, 2vw, 2rem)" }}
          className="grid-cols-1 md:grid-cols-2"
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

        {/* Wave to PackOptions (dark ocean) */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <WaveDivider fill="#0A2540" height={90} />
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
    <Link
      href="/shop"
      style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}
    >
      <div
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          backgroundColor: "var(--warm-white)",
          boxShadow: "0 4px 24px rgba(90,60,20,0.08), 0 1px 4px rgba(90,60,20,0.04)",
          transition: "box-shadow 0.3s, transform 0.3s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.boxShadow = "0 16px 48px rgba(10,37,64,0.15)";
          el.style.transform = "translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.boxShadow = "0 4px 20px rgba(10,37,64,0.07)";
          el.style.transform = "translateY(0)";
        }}
      >
        {/* Product image */}
        <div
          style={{
            height: "clamp(160px, 18vw, 240px)",
            background: flavor.bg,
            position: "relative",
          }}
        >
          <Image
            src={flavor.image}
            alt={flavor.name}
            fill
            style={{ objectFit: "contain", padding: "1rem" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Info */}
        <div style={{ padding: "1rem 1.25rem 1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
              fontWeight: 400,
              color: "var(--ocean)",
              lineHeight: 1.2,
            }}
          >
            {flavor.name}
          </h3>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.78rem", color: "var(--muted)", fontWeight: 300 }}>
            {flavor.tagline}
          </p>
        </div>
      </div>
    </Link>
  );
}
