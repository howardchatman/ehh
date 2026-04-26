"use client";

import { useState } from "react";
import Image from "next/image";
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
      <ProductRitual product={product} />
      {related.length > 0 && <RelatedProducts products={related} />}
    </>
  );
}

// ── MAIN DETAIL ────────────────────────────────────────────────────────────────
function ProductDetail({ product }: { product: Product }) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <section style={{ backgroundColor: "var(--cream)", paddingTop: "clamp(6rem, 10vw, 10rem)" }}>
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
            style={{
              color: "var(--muted-light)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "color 0.3s var(--ease-luxury)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted-light)"; }}
          >
            ← The Collection
          </Link>
        </motion.div>

        {/* 2-column grid */}
        <div
          style={{ display: "grid", gap: "clamp(3rem, 6vw, 7rem)", alignItems: "start" }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* ── Left: Image gallery ── */}
          <div>
            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.1 }}
              style={{ overflow: "hidden", backgroundColor: "#f5f0e8", marginBottom: "1rem", position: "relative" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImg}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <Image
                    src={product.images[activeImg]}
                    alt={`${product.name} — view ${activeImg + 1}`}
                    width={800}
                    height={1000}
                    priority={activeImg === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Thumbnail strip */}
            {product.images.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  paddingBottom: "0.25rem",
                }}
              >
                {product.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    style={{
                      flexShrink: 0,
                      width: "clamp(60px, 10vw, 80px)",
                      aspectRatio: "1/1",
                      overflow: "hidden",
                      background: "none",
                      border: `1px solid ${activeImg === i ? "var(--gold)" : "transparent"}`,
                      cursor: "pointer",
                      padding: 0,
                      transition: "border-color 0.3s var(--ease-luxury)",
                      backgroundColor: "#f5f0e8",
                    }}
                    aria-label={`View image ${i + 1}`}
                  >
                    <Image
                      src={src}
                      alt={`${product.name} thumbnail ${i + 1}`}
                      width={160}
                      height={160}
                      sizes="80px"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* ── Right: Product info ── */}
          <div style={{ position: "sticky", top: "clamp(5rem, 8vw, 8rem)" }}>
            {/* Category + featured badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)" }}
            >
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)" }} />
              <span className="micro-label" style={{ color: "var(--gold)" }}>{product.categoryLabel}</span>
              {product.featured && (
                <>
                  <span style={{ color: "var(--muted-light)", fontSize: "0.5rem" }}>·</span>
                  <span className="micro-label" style={{ color: "var(--muted)" }}>Featured</span>
                </>
              )}
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(3rem, 6vw, 6.5rem)",
                fontWeight: 300,
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                color: "var(--espresso)",
                marginBottom: "1rem",
              }}
            >
              {product.name}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                fontWeight: 300,
                color: "var(--muted)",
                lineHeight: 1.6,
                marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
              }}
            >
              {product.tagline}
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
              style={{
                height: "1px",
                backgroundColor: "var(--border)",
                marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
                transformOrigin: "left",
              }}
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                fontWeight: 300,
                color: "var(--charcoal)",
                lineHeight: 1.85,
                marginBottom: "clamp(2rem, 3vw, 3rem)",
              }}
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
              <p className="micro-label" style={{ color: "var(--gold)", marginBottom: "1rem" }}>
                What it supports
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {product.benefits.map((b, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      padding: "0.85rem 0",
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    <span style={{ color: "var(--gold)", fontSize: "0.5rem", flexShrink: 0, paddingTop: "0.35rem" }}>◆</span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.875rem",
                        fontWeight: 300,
                        color: "var(--charcoal)",
                        lineHeight: 1.7,
                      }}
                    >
                      {b}
                    </span>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid var(--border)" }} />
              </div>
            </motion.div>

            {/* Price + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 300,
                  color: "var(--espresso)",
                  letterSpacing: "-0.02em",
                }}
              >
                {product.price}
              </span>
              <button
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  fontSize: "0.58rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--cream)",
                  backgroundColor: "var(--espresso)",
                  border: "1px solid var(--espresso)",
                  padding: "1rem 2.5rem",
                  cursor: "pointer",
                  transition: "background-color 0.35s var(--ease-luxury), color 0.35s var(--ease-luxury)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "var(--gold)";
                  el.style.borderColor = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "var(--espresso)";
                  el.style.borderColor = "var(--espresso)";
                }}
              >
                Add to Ritual
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── RITUAL ────────────────────────────────────────────────────────────────────
function ProductRitual({ product }: { product: Product }) {
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
          padding: `clamp(5rem, 8vw, 9rem) var(--section-x)`,
          display: "grid",
          gap: "clamp(3rem, 6vw, 8rem)",
          alignItems: "center",
        }}
        className="grid-cols-1 lg:grid-cols-2"
      >
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE }}
            style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2rem, 3vw, 3rem)" }}
          >
            <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)" }} />
            <span className="micro-label" style={{ color: "var(--gold)" }}>The Ritual</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 5vw, 5.5rem)",
              fontWeight: 300,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "var(--cream)",
            }}
          >
            How to use<br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>this formula.</em>
          </motion.h2>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              fontWeight: 300,
              color: "rgba(250,248,245,0.65)",
              lineHeight: 1.9,
              marginBottom: "clamp(2rem, 3vw, 3rem)",
            }}
          >
            {product.ritual}
          </p>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              fontWeight: 300,
              color: "rgba(250,248,245,0.25)",
              lineHeight: 1.8,
              letterSpacing: "0.05em",
            }}
          >
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
    <section style={{ backgroundColor: "var(--ivory)", position: "relative" }}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEW}
        transition={{ duration: 1.2, ease: EASE }}
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
          transformOrigin: "left",
          opacity: 0.4,
        }}
      />

      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: `clamp(5rem, 8vw, 9rem) var(--section-x)`,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            marginBottom: "clamp(3rem, 5vw, 5rem)",
          }}
          className="md:flex-row md:items-end md:justify-between"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE }}
              style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}
            >
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)" }} />
              <span className="micro-label" style={{ color: "var(--gold)" }}>Continue the Practice</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 1, ease: EASE, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 3.5vw, 4rem)",
                fontWeight: 300,
                lineHeight: 0.95,
                letterSpacing: "-0.025em",
                color: "var(--espresso)",
              }}
            >
              You may also<br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>resonate with</em>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          >
            <Link
              href="/shop"
              className="micro-label"
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "2px",
                transition: "color 0.3s var(--ease-luxury), border-color 0.3s var(--ease-luxury)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "var(--gold)";
                el.style.borderBottomColor = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "var(--muted)";
                el.style.borderBottomColor = "var(--border)";
              }}
            >
              View all products →
            </Link>
          </motion.div>
        </div>

        <div
          style={{ display: "grid", gap: "clamp(1.5rem, 2.5vw, 2.5rem)" }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
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
      <div style={{ overflow: "hidden", marginBottom: "1.25rem", backgroundColor: "#f5f0e8" }}>
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
      </div>
      <span className="micro-label" style={{ color: "var(--gold)", display: "block", marginBottom: "0.5rem" }}>
        {product.categoryLabel}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(1.2rem, 1.75vw, 1.5rem)",
          fontWeight: 400,
          letterSpacing: "-0.01em",
          color: hovered ? "var(--gold)" : "var(--espresso)",
          transition: "color 0.35s var(--ease-luxury)",
          marginBottom: "0.3rem",
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
          marginBottom: "0.75rem",
        }}
      >
        {product.tagline}
      </p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 400, color: "var(--espresso)" }}>
          {product.price}
        </span>
        <span
          className="micro-label"
          style={{
            color: hovered ? "var(--gold)" : "var(--muted-light)",
            borderBottom: `1px solid ${hovered ? "var(--gold)" : "transparent"}`,
            paddingBottom: "1px",
            transition: "all 0.3s var(--ease-luxury)",
          }}
        >
          Add to Ritual →
        </span>
      </div>
    </Link>
  );
}
