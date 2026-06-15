"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { products, type Product } from "@/lib/products";
import { OrderButton } from "@/components/ui/CheckoutModal";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

export default function ShopPage() {
  return (
    <>
      <ShopHero />
      <ShopGrid />
      <ShopNote />
    </>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function ShopHero() {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, var(--ocean) 0%, var(--ocean-mid) 100%)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(8rem, 14vw, 14rem)",
        paddingBottom: "clamp(5rem, 8vw, 9rem)",
        paddingLeft: "var(--section-x)",
        paddingRight: "var(--section-x)",
      }}
    >
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(28,184,200,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "var(--container)", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2rem, 3vw, 3rem)" }}
        >
          <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", opacity: 0.7 }} />
          <span className="micro-label" style={{ color: "var(--aqua)" }}>Shop Healing Water™</span>
        </motion.div>

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
          Hydrate.
          <br />
          <em style={{ fontStyle: "italic", color: "var(--aqua)" }}>Nourish.</em>
          <br />
          Thrive.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.75,
            maxWidth: "48ch",
            marginTop: "clamp(2rem, 3.5vw, 3.5rem)",
          }}
        >
          Sea moss-powered functional hydration — made to order in Houston, Texas.
          Choose the pack that fits your lifestyle.
        </motion.p>
      </div>
    </section>
  );
}

// ── GRID ──────────────────────────────────────────────────────────────────────
function ShopGrid() {
  return (
    <section style={{ backgroundColor: "var(--coastal)", paddingBottom: "var(--section-y)" }}>
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: `clamp(4rem, 6vw, 7rem) var(--section-x) 0`,
        }}
      >
        <div
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "white",
        border: product.label === "Most Popular" ? "1.5px solid var(--aqua)" : "1px solid rgba(10,37,64,0.1)",
        position: "relative",
        transition: "box-shadow 0.35s",
        boxShadow: hovered ? "0 8px 32px rgba(10,37,64,0.12)" : "0 2px 8px rgba(10,37,64,0.05)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {product.label && (
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "var(--aqua)", padding: "0.25rem 0.85rem", zIndex: 2 }}>
          <span className="micro-label" style={{ color: "white", fontSize: "0.48rem" }}>{product.label}</span>
        </div>
      )}

      {/* Image */}
      <div style={{ overflow: "hidden", backgroundColor: "var(--sea-foam)" }}>
        <motion.div animate={{ scale: hovered ? 1.04 : 1 }} transition={{ duration: 0.75, ease: EASE }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} style={{ width: "100%", height: "auto", display: "block" }} />
        </motion.div>
      </div>

      {/* Info */}
      <div style={{ padding: "clamp(1.25rem, 2vw, 1.75rem)", display: "flex", flexDirection: "column", flex: 1 }}>
        <span className="micro-label" style={{ color: "var(--aqua)", display: "block", marginBottom: "0.6rem" }}>
          {product.pouches} Pouches
        </span>
        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)", fontWeight: 400, letterSpacing: "-0.01em", color: "var(--ocean)", marginBottom: "0.3rem", lineHeight: 1.2 }}>
          {product.name}
        </h3>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.85rem", color: "var(--ocean-mid)", opacity: 0.7, fontWeight: 300, marginBottom: "1.25rem", lineHeight: 1.5, flex: 1 }}>
          {product.tagline}
        </p>

        <div style={{ borderTop: "1px solid rgba(10,37,64,0.08)", paddingTop: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 300, color: "var(--ocean)", letterSpacing: "-0.02em" }}>
            {product.price}
          </span>
          <OrderButton
            priceId={product.priceId}
            productName={product.shortName}
            price={product.price}
            className="btn-ocean"
            style={{ fontSize: "0.52rem", padding: "0.65rem 1.25rem" }}
          >
            Order Now
          </OrderButton>
        </div>
      </div>
    </div>
  );
}

// ── NOTE ──────────────────────────────────────────────────────────────────────
function ShopNote() {
  return (
    <section style={{ backgroundColor: "var(--ocean)", position: "relative" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: `clamp(5rem, 8vw, 9rem) var(--section-x)`, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)" }}>
            <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", opacity: 0.5 }} />
            <span className="micro-label" style={{ color: "var(--aqua)" }}>Made to Order</span>
            <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", opacity: 0.5 }} />
          </div>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4.5vw, 5rem)", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.025em", color: "var(--cream)", marginBottom: "1.5rem" }}>
            Every pouch is crafted<br />
            <em style={{ fontStyle: "italic", color: "var(--aqua)" }}>fresh for you.</em>
          </h2>

          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, maxWidth: "50ch", margin: "0 auto 2.5rem" }}>
            All orders are made to order — no cancellations once production begins.
            Houston delivery available. Questions? We&apos;re here for you.
          </p>

          <Link href="/contact" className="btn-outline-ocean" style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.75)" }}>
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
