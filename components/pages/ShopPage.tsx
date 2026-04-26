"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { products, categoryLabels, type Product } from "@/lib/products";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

const CATEGORIES = ["all", "herbal-tea", "seamoss", "ritual"] as const;

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <ShopHero />
      <ShopFilter activeCategory={activeCategory} onChange={setActiveCategory} />
      <ShopGrid products={filtered} />
      <ShopPhilosophy />
    </>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function ShopHero() {
  return (
    <section
      style={{
        backgroundColor: "var(--espresso)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(8rem, 14vw, 14rem)",
        paddingBottom: "clamp(5rem, 8vw, 9rem)",
        paddingLeft: "var(--section-x)",
        paddingRight: "var(--section-x)",
      }}
    >
      {/* Subtle gold radial */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 100% 100%, rgba(184,150,90,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "var(--container)", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2rem, 3vw, 3rem)" }}
        >
          <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)" }} />
          <span className="micro-label" style={{ color: "var(--gold)" }}>The Collection</span>
        </motion.div>

        {/* Headline */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(4rem, 9vw, 11rem)",
              fontWeight: 300,
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              color: "var(--cream)",
            }}
          >
            Ritual
            <br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>formulas</em>
            <br />
            for real life.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "rgba(250,248,245,0.45)",
            lineHeight: 1.75,
            maxWidth: "48ch",
            marginTop: "clamp(2rem, 3.5vw, 3.5rem)",
          }}
        >
          Each product is formulated with intention—built on traditional herbalism
          and informed by the science of the systems they support.
        </motion.p>
      </div>
    </section>
  );
}

// ── FILTER ────────────────────────────────────────────────────────────────────
function ShopFilter({
  activeCategory,
  onChange,
}: {
  activeCategory: string;
  onChange: (cat: string) => void;
}) {
  return (
    <section
      style={{
        backgroundColor: "var(--cream)",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: "68px",
        zIndex: 30,
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: `0 var(--section-x)`,
          display: "flex",
          alignItems: "center",
          gap: "clamp(1.5rem, 3vw, 3rem)",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {CATEGORIES.map((cat) => (
          <FilterTab
            key={cat}
            label={categoryLabels[cat] ?? cat}
            active={activeCategory === cat}
            onClick={() => onChange(cat)}
          />
        ))}
      </div>
    </section>
  );
}

function FilterTab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "1.25rem 0",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: "0.58rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: active ? "var(--espresso)" : "var(--muted-light)",
        borderBottom: active ? "1px solid var(--espresso)" : "1px solid transparent",
        transition: "color 0.3s var(--ease-luxury), border-color 0.3s var(--ease-luxury)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}

// ── GRID ──────────────────────────────────────────────────────────────────────
function ShopGrid({ products }: { products: Product[] }) {
  return (
    <section style={{ backgroundColor: "var(--cream)", paddingBottom: "var(--section-y)" }}>
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: `clamp(3rem, 5vw, 5rem) var(--section-x) 0`,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={products.map((p) => p.id).join("-")}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: EASE }}
            style={{
              display: "grid",
              gap: "clamp(2rem, 3vw, 3.5rem) clamp(1.5rem, 2.5vw, 2.5rem)",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
            }}
          >
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {products.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "1.1rem",
              color: "var(--muted)",
              textAlign: "center",
              padding: "4rem 0",
            }}
          >
            Coming soon — formulas in this category are being developed.
          </motion.p>
        )}
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/shop/${product.slug}`}
      style={{ display: "block", textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div style={{ overflow: "hidden", marginBottom: "1.5rem", position: "relative", backgroundColor: "#f5f0e8" }}>
        <motion.div
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={800}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </motion.div>
        {/* Category badge */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            padding: "0.3rem 0.65rem",
            backgroundColor: "rgba(250,248,245,0.88)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span className="micro-label" style={{ color: "var(--muted)" }}>
            {product.categoryLabel}
          </span>
        </div>
        {product.featured && (
          <div
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              padding: "0.3rem 0.65rem",
              backgroundColor: "var(--gold)",
            }}
          >
            <span className="micro-label" style={{ color: "var(--espresso)" }}>
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(1.25rem, 1.8vw, 1.55rem)",
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
          fontStyle: "italic",
          fontSize: "0.9rem",
          color: "var(--muted)",
          fontWeight: 300,
          marginBottom: "1rem",
          lineHeight: 1.55,
        }}
      >
        {product.tagline}
      </p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
        <motion.span
          animate={{ x: hovered ? 0 : -4, opacity: hovered ? 1 : 0.4 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="micro-label"
          style={{
            color: hovered ? "var(--gold)" : "var(--muted)",
            borderBottom: `1px solid ${hovered ? "var(--gold)" : "transparent"}`,
            paddingBottom: "1px",
            transition: "color 0.3s var(--ease-luxury), border-color 0.3s var(--ease-luxury)",
          }}
        >
          Add to ritual →
        </motion.span>
      </div>
    </Link>
  );
}

// ── PHILOSOPHY ────────────────────────────────────────────────────────────────
function ShopPhilosophy() {
  return (
    <section style={{ backgroundColor: "var(--espresso)", position: "relative", overflow: "hidden" }}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEW}
        transition={{ duration: 1.2, ease: EASE }}
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(184,150,90,0.35), transparent)",
          transformOrigin: "left",
        }}
      />
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: `clamp(5rem, 8vw, 10rem) var(--section-x)`,
          display: "grid",
          gap: "clamp(3rem, 6vw, 8rem)",
          alignItems: "center",
        }}
        className="grid-cols-1 lg:grid-cols-2"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE }}
            style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2rem, 3vw, 2.5rem)" }}
          >
            <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)" }} />
            <span className="micro-label" style={{ color: "var(--gold)" }}>Our Standard</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.4rem, 4.5vw, 5rem)",
              fontWeight: 300,
              lineHeight: 0.92,
              letterSpacing: "-0.025em",
              color: "var(--cream)",
              marginBottom: "clamp(2rem, 3.5vw, 3.5rem)",
            }}
          >
            Nothing is added
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>without purpose.</em>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
          >
            <Link href="/about" className="btn-outline-cream">
              About the formulas →
            </Link>
          </motion.div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1.5rem, 2.5vw, 2.5rem)" }}>
          {[
            {
              label: "Whole-plant integrity",
              body: "No isolated compounds. No synthetic fillers. Each formula uses the whole plant so the body receives what it recognizes.",
            },
            {
              label: "Wild-crafted sourcing",
              body: "Seamoss is sourced wild from clean Atlantic waters. Herbs are ethically gathered and dried at low temperature to preserve potency.",
            },
            {
              label: "Systems-level formulation",
              body: "Every product is built to address the root—not manage the symptom. Gut, hormones, womb, and inflammation are treated as one integrated system.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.1 }}
              style={{
                paddingTop: "clamp(1.25rem, 2vw, 2rem)",
                borderTop: "1px solid rgba(250,248,245,0.08)",
              }}
            >
              <p className="micro-label" style={{ color: "var(--gold)", marginBottom: "0.65rem" }}>
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "rgba(250,248,245,0.55)",
                  lineHeight: 1.85,
                }}
              >
                {item.body}
              </p>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid rgba(250,248,245,0.08)" }} />
        </div>
      </div>
    </section>
  );
}
