"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "@/lib/products";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

const featured = products.slice(0, 6);

const tiers = [
  "Ritual Bundles",
  "Gut Reset Guide",
  "Womb Healing Guide",
  "Healing Home Manual",
  "Coaching",
  "Retreats",
];

export default function ProductWorld() {
  return (
    <section
      aria-label="The Collection"
      style={{ backgroundColor: "var(--cream)", position: "relative" }}
    >
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
          padding: `var(--section-y) var(--section-x)`,
        }}
      >
        {/* ── Header ── */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "clamp(1.5rem, 2.5vw, 2rem)", marginBottom: "clamp(3rem, 5vw, 6rem)" }}
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
              <span className="micro-label" style={{ color: "var(--gold)" }}>The Collection</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 1, ease: EASE, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.4rem, 5vw, 5.5rem)",
                fontWeight: 400,
                lineHeight: 0.92,
                letterSpacing: "-0.025em",
                color: "var(--espresso)",
              }}
            >
              Formulated for
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>the whole body.</em>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            style={{ flexShrink: 0 }}
          >
            <p style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
              fontWeight: 300,
              color: "var(--muted)",
              lineHeight: 1.7,
              maxWidth: "36ch",
              marginBottom: "1.5rem",
            }}>
              Every product is built to address the root — not manage the symptom.
            </p>
            <Link href="/shop" className="text-link link-gold" style={{ color: "var(--espresso)" }}>
              View the full collection →
            </Link>
          </motion.div>
        </div>

        {/* ── Product grid ── */}
        <div
          style={{ display: "grid", gap: "clamp(2rem, 3vw, 3.5rem) clamp(1.5rem, 2.5vw, 2.5rem)" }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* ── Ecosystem strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          style={{
            marginTop: "clamp(3rem, 5vw, 5rem)",
            padding: "clamp(1.5rem, 2.5vw, 2.5rem)",
            border: "1px solid var(--border)",
            backgroundColor: "var(--ivory)",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}
            className="sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <span className="micro-label" style={{ color: "var(--gold)", display: "block", marginBottom: "0.6rem" }}>
                Also Available
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.5rem" }}>
                {tiers.map((tier) => (
                  <span key={tier} style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    color: "var(--muted)",
                  }}>
                    {tier}
                  </span>
                ))}
              </div>
            </div>
            <Link href="/shop" className="btn-dark" style={{ flexShrink: 0 }}>
              Enter the shop →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/shop/${product.slug}`}
      style={{ display: "block", textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ overflow: "hidden", marginBottom: "1.5rem", position: "relative", aspectRatio: "3/4", backgroundColor: "#f5f0e8" }}>
        <motion.div
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.75, ease: EASE }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </motion.div>
        <div style={{
          position: "absolute", top: "1rem", left: "1rem",
          padding: "0.3rem 0.65rem",
          backgroundColor: "rgba(250,248,245,0.9)",
          backdropFilter: "blur(8px)",
        }}>
          <span className="micro-label" style={{ color: "var(--muted)" }}>{product.categoryLabel}</span>
        </div>
        {product.level === "entry" && (
          <div style={{
            position: "absolute", top: "1rem", right: "1rem",
            padding: "0.3rem 0.65rem",
            backgroundColor: "var(--sage)",
          }}>
            <span className="micro-label" style={{ color: "rgba(250,248,245,0.9)" }}>Start here</span>
          </div>
        )}
      </div>

      <h3 style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(1.2rem, 1.75vw, 1.5rem)",
        fontWeight: 400,
        letterSpacing: "-0.01em",
        color: hovered ? "var(--gold)" : "var(--espresso)",
        transition: "color 0.35s var(--ease-luxury)",
        marginBottom: "0.3rem",
        lineHeight: 1.15,
      }}>
        {product.name}
      </h3>
      <p style={{
        fontFamily: "var(--font-serif)",
        fontStyle: "italic",
        fontSize: "0.9rem",
        color: "var(--muted)",
        fontWeight: 300,
        marginBottom: "1rem",
        lineHeight: 1.55,
      }}>
        {product.tagline}
      </p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 400, color: "var(--espresso)" }}>
          {product.price}
        </span>
        <motion.span
          animate={{ x: hovered ? 0 : -4, opacity: hovered ? 1 : 0.35 }}
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
