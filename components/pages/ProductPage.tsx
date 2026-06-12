"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/lib/products";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

export default function ProductPage({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  return (
    <>
      <ProductDetail product={product} />
      <HydrationInfo />
      {related.length > 0 && <RelatedProducts products={related} />}
    </>
  );
}

// ── MAIN DETAIL ────────────────────────────────────────────────────────────────
function ProductDetail({ product }: { product: Product }) {
  const [activeImg, setActiveImg] = useState(0);
  const images = [product.image];
  const hasLink = !!product.paymentLink;

  return (
    <section style={{ backgroundColor: "var(--coastal)", paddingTop: "clamp(6rem, 10vw, 10rem)" }}>
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: `0 var(--section-x) clamp(5rem, 8vw, 9rem)`,
        }}
      >
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: "clamp(2rem, 3.5vw, 3.5rem)" }}
        >
          <Link
            href="/shop"
            className="micro-label"
            style={{ color: "var(--ocean-mid)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", opacity: 0.6, transition: "opacity 0.3s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.6"; }}
          >
            ← All Packs
          </Link>
        </motion.div>

        <div
          style={{ display: "grid", gap: "clamp(3rem, 6vw, 7rem)", alignItems: "start" }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* ── Left: Image ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.1 }}
              style={{ overflow: "hidden", backgroundColor: "var(--sea-foam)", marginBottom: "1rem", position: "relative" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImg}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={images[activeImg]}
                    alt={`${product.name}`}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* ── Right: Product info ── */}
          <div style={{ position: "sticky", top: "clamp(5rem, 8vw, 8rem)" }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)" }}
            >
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)" }} />
              <span className="micro-label" style={{ color: "var(--aqua)" }}>{product.pouches} Pouches</span>
              {product.label && (
                <>
                  <span style={{ color: "var(--aqua)", fontSize: "0.5rem", opacity: 0.5 }}>·</span>
                  <span className="micro-label" style={{ color: "var(--ocean-mid)" }}>{product.label}</span>
                </>
              )}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem, 5vw, 5.5rem)",
                fontWeight: 300,
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                color: "var(--ocean)",
                marginBottom: "1rem",
              }}
            >
              {product.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                fontWeight: 300,
                color: "var(--ocean-mid)",
                opacity: 0.7,
                lineHeight: 1.6,
                marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
              }}
            >
              {product.tagline}
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
              style={{ height: "1px", backgroundColor: "rgba(10,37,64,0.1)", marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)", transformOrigin: "left" }}
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", fontWeight: 300, color: "var(--ocean-mid)", lineHeight: 1.85, marginBottom: "clamp(2rem, 3vw, 3rem)" }}
            >
              {product.description}
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
              style={{ marginBottom: "clamp(2rem, 3vw, 3rem)" }}
            >
              <p className="micro-label" style={{ color: "var(--aqua)", marginBottom: "1rem" }}>
                What&apos;s included
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {product.benefits.map((b, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "0.85rem 0", borderTop: "1px solid rgba(10,37,64,0.08)" }}
                  >
                    <span style={{ color: "var(--aqua)", fontSize: "0.5rem", flexShrink: 0, paddingTop: "0.35rem" }}>◆</span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 300, color: "var(--ocean-mid)", lineHeight: 1.7 }}>
                      {b}
                    </span>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(10,37,64,0.08)" }} />
              </div>
            </motion.div>

            {/* Price + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}
            >
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 300, color: "var(--ocean)", letterSpacing: "-0.02em" }}>
                {product.price}
              </span>
              {hasLink ? (
                <a
                  href={product.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ocean"
                >
                  Order Now
                </a>
              ) : (
                <Link href="/contact" className="btn-ocean">
                  Inquire to Order
                </Link>
              )}
            </motion.div>

            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", color: "var(--ocean-mid)", opacity: 0.4, marginTop: "1rem", lineHeight: 1.7 }}>
              Made to order · No cancellations once production begins · Houston delivery available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── HOW TO ENJOY ──────────────────────────────────────────────────────────────
function HydrationInfo() {
  return (
    <section style={{ backgroundColor: "var(--ocean)", position: "relative", overflow: "hidden" }}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEW}
        transition={{ duration: 1.2, ease: EASE }}
        style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(28,184,200,0.35), transparent)", transformOrigin: "left" }}
      />

      <div
        style={{ maxWidth: "var(--container)", margin: "0 auto", padding: `clamp(5rem, 8vw, 9rem) var(--section-x)`, display: "grid", gap: "clamp(3rem, 6vw, 8rem)", alignItems: "center" }}
        className="grid-cols-1 lg:grid-cols-2"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE }}
            style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2rem, 3vw, 3rem)" }}
          >
            <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)" }} />
            <span className="micro-label" style={{ color: "var(--aqua)" }}>How To Enjoy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 5.5rem)", fontWeight: 300, lineHeight: 0.92, letterSpacing: "-0.03em", color: "var(--cream)" }}
          >
            Simple to use,<br />
            <em style={{ color: "var(--aqua)", fontStyle: "italic" }}>powerful inside.</em>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {[
            { step: "01", label: "Shake well", body: "Give your Healing Water™ pouch a good shake to activate all the minerals and sea moss goodness." },
            { step: "02", label: "Sip throughout the day", body: "Enjoy chilled or at room temperature. One pouch is one serving — perfect for daily hydration." },
            { step: "03", label: "Make it a ritual", body: "Consistency is the key. Your body responds best when functional hydration is a daily practice." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.1 }}
              style={{ paddingTop: "clamp(1.25rem, 2vw, 2rem)", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", gap: "1.5rem", alignItems: "flex-start" }}
            >
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.65rem", color: "var(--aqua)", opacity: 0.7, flexShrink: 0, paddingTop: "0.2rem" }}>{item.step}</span>
              <div>
                <p className="micro-label" style={{ color: "var(--aqua)", marginBottom: "0.5rem" }}>{item.label}</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{item.body}</p>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 300, color: "rgba(255,255,255,0.2)", lineHeight: 1.8 }}>
            These statements have not been evaluated by the Food and Drug Administration.
            This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ── RELATED PRODUCTS ──────────────────────────────────────────────────────────
function RelatedProducts({ products }: { products: Product[] }) {
  return (
    <section style={{ backgroundColor: "var(--sea-foam)", position: "relative" }}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEW}
        transition={{ duration: 1.2, ease: EASE }}
        style={{ height: "1px", background: "linear-gradient(90deg, transparent, var(--aqua), transparent)", transformOrigin: "left", opacity: 0.4 }}
      />

      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: `clamp(5rem, 8vw, 9rem) var(--section-x)` }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "clamp(3rem, 5vw, 5rem)" }} className="md:flex-row md:items-end md:justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE }}
              style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}
            >
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)" }} />
              <span className="micro-label" style={{ color: "var(--aqua)" }}>Other Pack Sizes</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 1, ease: EASE, delay: 0.1 }}
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3.5vw, 4rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.025em", color: "var(--ocean)" }}
            >
              Find your<br />
              <em style={{ fontStyle: "italic", color: "var(--aqua)" }}>perfect fit</em>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW} transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}>
            <Link href="/shop" className="micro-label" style={{ color: "var(--ocean-mid)", textDecoration: "none", borderBottom: "1px solid rgba(10,37,64,0.2)", paddingBottom: "2px" }}>
              View all packs →
            </Link>
          </motion.div>
        </div>

        <div style={{ display: "grid", gap: "clamp(1.5rem, 2.5vw, 2.5rem)" }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.1 }}
            >
              <RelatedCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={`/shop/${product.slug}`}
      style={{ display: "block", textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ overflow: "hidden", marginBottom: "1.25rem", backgroundColor: "var(--sea-foam)", border: "1px solid rgba(10,37,64,0.08)" }}>
        <motion.div
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} style={{ width: "100%", height: "auto", display: "block" }} />
        </motion.div>
      </div>
      <span className="micro-label" style={{ color: "var(--aqua)", display: "block", marginBottom: "0.5rem" }}>
        {product.pouches} Pouches
      </span>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(1.2rem, 1.75vw, 1.5rem)",
          fontWeight: 400,
          letterSpacing: "-0.01em",
          color: hovered ? "var(--aqua)" : "var(--ocean)",
          transition: "color 0.35s",
          marginBottom: "0.3rem",
        }}
      >
        {product.name}
      </h3>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "0.75rem" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 300, color: "var(--ocean)" }}>
          {product.price}
        </span>
        <span className="micro-label" style={{ color: hovered ? "var(--aqua)" : "var(--ocean-mid)", opacity: hovered ? 1 : 0.5, transition: "all 0.3s" }}>
          View Pack →
        </span>
      </div>
    </Link>
  );
}
