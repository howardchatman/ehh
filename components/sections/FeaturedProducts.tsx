"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-80px" } as const;

const products = [
  {
    id: 1,
    name: "Gut Restore Blend",
    category: "Herbal Tea",
    tagline: "Digestive harmony, restored.",
    description:
      "A herbal blend to support digestion, reduce inflammation, and restore natural gut balance.",
    price: "$48",
    large: true,
  },
  {
    id: 2,
    name: "Hormone Harmony",
    category: "Seamoss Blend",
    tagline: "Balance begins within.",
    description:
      "Wild-crafted seamoss formulated to support the endocrine system and encourage natural hormonal rhythm.",
    price: "$64",
    large: false,
  },
  {
    id: 3,
    name: "Womb Ritual Tea",
    category: "Herbal Tea",
    tagline: "Honor your cycles.",
    description:
      "A restorative herbal blend designed to support womb health and the feminine cycle with intention.",
    price: "$52",
    large: false,
  },
];

export default function FeaturedProducts() {
  return (
    <section
      aria-label="Featured Products"
      style={{ position: "relative", backgroundColor: "var(--cream)" }}
    >
      {/* Top gold rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEW}
        transition={{ duration: 1.2, ease: EASE }}
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
          transformOrigin: "left center",
          opacity: 0.45,
        }}
      />

      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: `var(--section-y) var(--section-x)`,
        }}
      >

        {/* ── Header ── */}
        <div style={{ marginBottom: "clamp(3.5rem, 6vw, 7rem)" }}>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE }}
            style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", flexShrink: 0 }} />
            <span className="micro-label" style={{ color: "var(--gold)" }}>
              The Collection
            </span>
          </motion.div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(1rem, 2vw, 1.5rem)",
            }}
            className="md:flex-row md:items-end md:justify-between"
          >
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 1, ease: EASE, delay: 0.15 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.6rem, 5.5vw, 6rem)",
                fontWeight: 300,
                lineHeight: 0.92,
                letterSpacing: "-0.025em",
                color: "var(--espresso)",
              }}
            >
              Formulated with{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                intention
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--muted)",
                lineHeight: 1.75,
                maxWidth: "38ch",
              }}
            >
              Our blends are crafted for function and experience—supporting the
              body while honoring the ritual.
            </motion.p>
          </div>
        </div>

        {/* ── Asymmetric editorial product grid ── */}
        {/* Desktop: large card left (2/5), two stacked cards right (3/5) */}
        {/* Mobile: stacked single column */}
        <div
          style={{ display: "grid", gap: "clamp(1.5rem, 2.5vw, 2.5rem)" }}
          className="grid-cols-1 md:grid-cols-5"
        >
          {/* Large card — left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
            className="md:col-span-2"
          >
            <ProductCard product={products[0]} tall />
          </motion.div>

          {/* Two stacked — right */}
          <div
            className="md:col-span-3"
            style={{ display: "flex", flexDirection: "column", gap: "clamp(1.5rem, 2.5vw, 2.5rem)" }}
          >
            {products.slice(1).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 1, ease: EASE, delay: 0.2 + i * 0.12 }}
              >
                <ProductCard product={product} tall={false} horizontal />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "clamp(3rem, 5vw, 5rem)",
            paddingTop: "clamp(2rem, 3vw, 3rem)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <Link
            href="/shop"
            className="text-link link-gold"
            style={{ color: "var(--espresso)" }}
          >
            View the full collection
            <span style={{ fontSize: "0.9rem" }}>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ── Product Card ──────────────────────────────────────────────────────────
function ProductCard({
  product,
  tall = false,
  horizontal = false,
}: {
  product: (typeof products)[0];
  tall?: boolean;
  horizontal?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  if (horizontal) {
    return (
      <Link
        href={`/shop/${product.id}`}
        style={{ display: "block", textDecoration: "none" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "180px 1fr",
            gap: "clamp(1.25rem, 2.5vw, 2rem)",
            alignItems: "start",
          }}
          className="grid-cols-1 sm:grid-cols-[180px_1fr]"
        >
          {/* Image */}
          <div style={{ overflow: "hidden", flexShrink: 0 }}>
            <motion.div
              className="img-placeholder"
              animate={{ scale: hovered ? 1.04 : 1 }}
              transition={{ duration: 0.7, ease: EASE }}
              style={{ aspectRatio: "3/4", width: "100%" }}
              aria-label={`${product.name} product image`}
            >
              <CategoryBadge category={product.category} />
            </motion.div>
          </div>

          {/* Info */}
          <ProductInfo product={product} hovered={hovered} />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/shop/${product.id}`}
      style={{ display: "block", textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div style={{ overflow: "hidden", marginBottom: "clamp(1rem, 1.75vw, 1.5rem)" }}>
        <motion.div
          className="img-placeholder"
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{
            aspectRatio: tall ? "2/3" : "4/5",
            width: "100%",
          }}
          aria-label={`${product.name} product image`}
        >
          <CategoryBadge category={product.category} />
          {/* Large ghost number */}
          <div
            style={{
              position: "absolute",
              bottom: "1.25rem",
              left: "1.25rem",
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 5vw, 5rem)",
              fontWeight: 300,
              color: "rgba(184,150,90,0.12)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              userSelect: "none",
            }}
            aria-hidden="true"
          >
            {String(product.id).padStart(2, "0")}
          </div>
        </motion.div>
      </div>

      <ProductInfo product={product} hovered={hovered} />
    </Link>
  );
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem" }}>
      <span
        className="micro-label"
        style={{
          display: "inline-block",
          padding: "0.35rem 0.75rem",
          backgroundColor: "rgba(250,248,245,0.82)",
          color: "var(--muted)",
          backdropFilter: "blur(8px)",
        }}
      >
        {category}
      </span>
    </div>
  );
}

function ProductInfo({
  product,
  hovered,
}: {
  product: (typeof products)[0];
  hovered: boolean;
}) {
  return (
    <div>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(1.25rem, 1.8vw, 1.6rem)",
          fontWeight: 400,
          letterSpacing: "-0.01em",
          color: hovered ? "var(--gold)" : "var(--espresso)",
          transition: "color 0.35s var(--ease-luxury)",
          marginBottom: "0.3rem",
          lineHeight: 1.15,
        }}
      >
        {product.name}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "0.9rem",
          fontStyle: "italic",
          color: "var(--muted)",
          fontWeight: 300,
          marginBottom: "0.6rem",
        }}
      >
        {product.tagline}
      </p>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.8rem",
          color: "var(--muted-light)",
          lineHeight: 1.75,
          fontWeight: 300,
          marginBottom: "0.85rem",
        }}
      >
        {product.description}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.05rem",
            fontWeight: 400,
            color: "var(--espresso)",
          }}
        >
          {product.price}
        </span>
        <span
          className="micro-label"
          style={{
            color: hovered ? "var(--gold)" : "var(--muted-light)",
            borderBottom: `1px solid ${hovered ? "var(--gold)" : "transparent"}`,
            paddingBottom: "1px",
            transition: "color 0.35s var(--ease-luxury), border-color 0.35s var(--ease-luxury)",
          }}
        >
          Add to Ritual →
        </span>
      </div>
    </div>
  );
}
