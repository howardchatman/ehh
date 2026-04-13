"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import type { FocusArea } from "@/lib/focus-areas";
import type { Product } from "@/lib/products";
import { focusAreas } from "@/lib/focus-areas";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-80px" } as const;

// ─────────────────────────────────────────────────────────────────────────────
export default function FocusAreaPage({
  area,
  relatedProducts,
}: {
  area: FocusArea;
  relatedProducts: Product[];
}) {
  return (
    <>
      <FocusHero area={area} />
      <FocusIntro area={area} />
      <FocusPrinciples area={area} />
      <FocusProducts area={area} products={relatedProducts} />
      <FocusNav current={area.slug} />
    </>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function FocusHero({ area }: { area: FocusArea }) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={heroRef}
      style={{ position: "relative", height: "85svh", minHeight: "580px", overflow: "hidden", backgroundColor: "var(--espresso)" }}
    >
      {/* Full bleed image */}
      <motion.div
        className="img-placeholder-cover"
        style={{ position: "absolute", inset: 0, height: "120%", top: "-10%", y: imageY, opacity: 0.5 }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, zIndex: 2,
          background: "linear-gradient(to bottom, rgba(26,18,8,0.65) 0%, rgba(26,18,8,0.15) 35%, rgba(26,18,8,0.08) 55%, rgba(26,18,8,0.75) 82%, rgba(26,18,8,0.95) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 10,
          display: "flex", flexDirection: "column",
          padding: "clamp(5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem) clamp(2.5rem, 5vw, 4rem)",
        }}
      >
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          <Link href="/" className="micro-label" style={{ color: "rgba(250,248,245,0.4)", textDecoration: "none" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,248,245,0.4)"; }}
          >
            ← Echoing Holistic Health
          </Link>
          <span className="micro-label" style={{ color: "rgba(250,248,245,0.35)" }}>{area.number} of 04</span>
        </motion.div>

        <div style={{ flex: 1 }} />

        {/* Headline block */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            className="micro-label"
            style={{ color: "var(--gold)", display: "block", marginBottom: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            {area.number} &nbsp;·&nbsp; Focus Area
          </motion.span>

          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, lineHeight: 0.88, letterSpacing: "-0.03em", marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)" }}>
            {area.heroHeadline.map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.48 + i * 0.11 }}
                style={{
                  display: "block",
                  fontSize: i < 2 ? "clamp(4rem, 10vw, 11rem)" : "clamp(2.5rem, 5.5vw, 7rem)",
                  fontStyle: i === area.heroHeadline.length - 1 ? "italic" : "normal",
                  color: i === area.heroHeadline.length - 1 ? "var(--gold)" : "var(--cream)",
                }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
            style={{
              display: "flex", flexDirection: "column", gap: "1.25rem",
              paddingTop: "clamp(1.25rem, 2vw, 2rem)",
              borderTop: "1px solid rgba(250,248,245,0.1)",
            }}
            className="sm:flex-row sm:items-center sm:justify-between"
          >
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)", fontWeight: 300, color: "rgba(250,248,245,0.48)", lineHeight: 1.65, maxWidth: "52ch" }}>
              {area.heroSubhead}
            </p>
            <Link href="/shop" className="btn-outline-cream" style={{ flexShrink: 0 }}>
              Shop This Category →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── INTRO ─────────────────────────────────────────────────────────────────────
function FocusIntro({ area }: { area: FocusArea }) {
  return (
    <section style={{ backgroundColor: "var(--ivory)", position: "relative", overflow: "hidden" }}>
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={VIEW} transition={{ duration: 1.2, ease: EASE }}
        style={{ height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", transformOrigin: "left", opacity: 0.4 }}
      />

      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: `clamp(5rem, 8vw, 10rem) var(--section-x)` }}>
        <div style={{ display: "grid", gap: "clamp(3rem, 6vw, 8rem)" }} className="grid-cols-1 lg:grid-cols-[1fr_auto_1.4fr]">

          {/* Left: pull-quote + image */}
          <div>
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={VIEW} transition={{ duration: 0.9, ease: EASE }}
              style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2rem, 3.5vw, 3.5rem)" }}>
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)" }} />
              <span className="micro-label" style={{ color: "var(--gold)" }}>{area.number} &nbsp;/&nbsp; {area.title}</span>
            </motion.div>

            <motion.blockquote initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW} transition={{ duration: 1.1, ease: EASE, delay: 0.15 }} style={{ margin: 0 }}>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.5vw, 3.8rem)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--espresso)" }}>
                &ldquo;{area.pullQuote}&rdquo;
              </p>
            </motion.blockquote>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW} transition={{ duration: 1, ease: EASE, delay: 0.35 }} className="hidden lg:block" style={{ marginTop: "clamp(2.5rem, 4vw, 4rem)" }}>
              <div className="img-placeholder" style={{ width: "100%", maxWidth: "280px", aspectRatio: "2/3" }} aria-hidden="true" />
            </motion.div>
          </div>

          {/* Vertical rule */}
          <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={VIEW} transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
            className="hidden lg:block"
            style={{ width: "1px", background: "linear-gradient(to bottom, transparent, var(--gold-pale), transparent)", transformOrigin: "top center", alignSelf: "stretch" }}
          />

          {/* Right: Body */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1.5rem, 2.5vw, 2.25rem)", justifyContent: "center" }}>
            <motion.p initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW} transition={{ duration: 1, ease: EASE, delay: 0.2 }}
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.75 }}>
              {area.intro}
            </motion.p>

            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={VIEW} transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
              style={{ height: "1px", width: "50px", backgroundColor: "var(--gold)", transformOrigin: "left", opacity: 0.7 }}
            />

            {area.body.map((para, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW} transition={{ duration: 0.9, ease: EASE, delay: 0.4 + i * 0.1 }}
                style={{
                  fontFamily: i === 0 ? "var(--font-serif)" : "var(--font-sans)",
                  fontSize: i === 0 ? "clamp(1rem, 1.3vw, 1.15rem)" : "0.875rem",
                  fontWeight: 300,
                  fontStyle: i === 0 ? "italic" : "normal",
                  color: i === 0 ? "var(--muted)" : "var(--charcoal)",
                  lineHeight: i === 0 ? 1.8 : 1.85,
                }}>
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── PRINCIPLES ────────────────────────────────────────────────────────────────
function FocusPrinciples({ area }: { area: FocusArea }) {
  return (
    <section style={{ backgroundColor: "var(--espresso)", position: "relative", overflow: "hidden" }}>
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={VIEW} transition={{ duration: 1.2, ease: EASE }}
        style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(184,150,90,0.35), transparent)", transformOrigin: "left" }}
      />

      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: `clamp(5rem, 8vw, 9rem) var(--section-x)` }}>
        <div style={{ display: "grid", gap: "clamp(3rem, 6vw, 8rem)", alignItems: "start" }} className="grid-cols-1 lg:grid-cols-2">

          {/* What we address */}
          <div>
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={VIEW} transition={{ duration: 0.9, ease: EASE }}
              style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2rem, 3.5vw, 3rem)" }}>
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)" }} />
              <span className="micro-label" style={{ color: "var(--gold)" }}>What We Address</span>
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW} transition={{ duration: 1, ease: EASE, delay: 0.1 }}
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4.5vw, 5rem)", fontWeight: 300, lineHeight: 0.92, letterSpacing: "-0.025em", color: "var(--cream)", marginBottom: "clamp(2.5rem, 4vw, 4rem)" }}>
              Where this work<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>begins for you</em>
            </motion.h2>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {area.whatWeAddress.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW} transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", padding: "1rem 0", borderTop: "1px solid rgba(250,248,245,0.08)" }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.65rem", color: "var(--gold)", fontWeight: 300, flexShrink: 0, paddingTop: "0.1rem" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 300, color: "rgba(250,248,245,0.65)", lineHeight: 1.7 }}>{item}</span>
                </motion.div>
              ))}
              <div style={{ borderTop: "1px solid rgba(250,248,245,0.08)" }} />
            </div>
          </div>

          {/* Our approach */}
          <div>
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={VIEW} transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
              style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2rem, 3.5vw, 3rem)" }}>
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)" }} />
              <span className="micro-label" style={{ color: "var(--gold)" }}>Our Approach</span>
            </motion.div>

            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1.5rem, 2.5vw, 2.5rem)" }}>
              {area.principles.map((principle, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW} transition={{ duration: 0.9, ease: EASE, delay: 0.2 + i * 0.1 }}
                  style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                  <div style={{ width: "1px", backgroundColor: "var(--gold)", opacity: 0.4, flexShrink: 0, alignSelf: "stretch", marginTop: "0.2rem" }} />
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1rem, 1.4vw, 1.2rem)", fontWeight: 300, color: "rgba(250,248,245,0.75)", lineHeight: 1.6, letterSpacing: "-0.01em" }}>
                    {principle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── PRODUCTS ──────────────────────────────────────────────────────────────────
function FocusProducts({ area, products }: { area: FocusArea; products: Product[] }) {
  if (products.length === 0) return null;
  return (
    <section style={{ backgroundColor: "var(--cream)", position: "relative" }}>
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={VIEW} transition={{ duration: 1.2, ease: EASE }}
        style={{ height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", transformOrigin: "left", opacity: 0.4 }}
      />
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: `clamp(5rem, 8vw, 9rem) var(--section-x)` }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1.5rem, 2.5vw, 2rem)", marginBottom: "clamp(3rem, 5vw, 5.5rem)" }} className="md:flex-row md:items-end md:justify-between">
          <div>
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={VIEW} transition={{ duration: 0.9, ease: EASE }}
              style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)" }} />
              <span className="micro-label" style={{ color: "var(--gold)" }}>For {area.title}</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW} transition={{ duration: 1, ease: EASE, delay: 0.1 }}
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4vw, 4.5rem)", fontWeight: 300, lineHeight: 0.94, letterSpacing: "-0.025em", color: "var(--espresso)" }}>
              Formulated for this<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>focus area</em>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW} transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}>
            <Link href="/shop" className="text-link link-gold" style={{ color: "var(--espresso)" }}>View all products →</Link>
          </motion.div>
        </div>

        <div style={{ display: "grid", gap: "clamp(1.5rem, 2.5vw, 2.5rem)" }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW} transition={{ duration: 0.9, ease: EASE, delay: i * 0.12 }}>
              <FocusProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FocusProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={`/shop/${product.slug}`} style={{ display: "block", textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{ overflow: "hidden", marginBottom: "1.25rem" }}>
        <motion.div className="img-placeholder" animate={{ scale: hovered ? 1.04 : 1 }} transition={{ duration: 0.7, ease: EASE }}
          style={{ aspectRatio: "4/5", width: "100%", position: "relative" }} aria-label={product.name}>
          <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem" }}>
            <span className="micro-label" style={{ padding: "0.35rem 0.75rem", backgroundColor: "rgba(250,248,245,0.82)", color: "var(--muted)", backdropFilter: "blur(8px)" }}>
              {product.categoryLabel}
            </span>
          </div>
        </motion.div>
      </div>
      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.2rem, 1.75vw, 1.5rem)", fontWeight: 400, letterSpacing: "-0.01em", color: hovered ? "var(--gold)" : "var(--espresso)", transition: "color 0.35s var(--ease-luxury)", marginBottom: "0.3rem" }}>
        {product.name}
      </h3>
      <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.9rem", color: "var(--muted)", fontWeight: 300, marginBottom: "0.5rem" }}>{product.tagline}</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 400, color: "var(--espresso)" }}>{product.price}</span>
        <span className="micro-label" style={{ color: hovered ? "var(--gold)" : "var(--muted-light)", borderBottom: `1px solid ${hovered ? "var(--gold)" : "transparent"}`, paddingBottom: "1px", transition: "all 0.3s var(--ease-luxury)" }}>
          Add to Ritual →
        </span>
      </div>
    </Link>
  );
}

// ── CONTINUE EXPLORING NAV ────────────────────────────────────────────────────
function FocusNav({ current }: { current: string }) {
  const others = focusAreas.filter((a) => a.slug !== current);
  return (
    <section style={{ backgroundColor: "var(--espresso)", position: "relative" }}>
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={VIEW} transition={{ duration: 1.2, ease: EASE }}
        style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(184,150,90,0.35), transparent)", transformOrigin: "left" }}
      />
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: `clamp(4rem, 6vw, 7rem) var(--section-x)` }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW} transition={{ duration: 0.9, ease: EASE }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2rem, 3.5vw, 3.5rem)" }}>
          <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)" }} />
          <span className="micro-label" style={{ color: "var(--gold)" }}>Continue Exploring</span>
        </motion.div>
        <div style={{ display: "grid", gap: "0" }} className="grid-cols-1 md:grid-cols-3">
          {others.map((area, i) => (
            <motion.div key={area.slug} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW} transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}>
              <FocusNavCard area={area} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FocusNavCard({ area }: { area: FocusArea }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={`/focus/${area.slug}`} style={{ display: "block", textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{
        padding: "clamp(1.5rem, 2.5vw, 2.5rem)",
        borderTop: "1px solid rgba(250,248,245,0.08)",
        borderRight: "1px solid rgba(250,248,245,0.06)",
        transition: "background-color 0.4s var(--ease-luxury)",
        backgroundColor: hovered ? "rgba(250,248,245,0.04)" : "transparent",
      }}>
        <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.65rem", color: "var(--gold)", fontWeight: 300, display: "block", marginBottom: "0.5rem" }}>{area.number}</span>
        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.4rem, 2.2vw, 2.2rem)", fontWeight: 300, letterSpacing: "-0.01em", color: hovered ? "var(--gold)" : "var(--cream)", transition: "color 0.4s var(--ease-luxury)", lineHeight: 1.1, marginBottom: "0.75rem" }}>
          {area.title}
        </h3>
        <span style={{ color: "var(--gold)", fontSize: "1rem", opacity: hovered ? 1 : 0, transition: "opacity 0.3s var(--ease-luxury)" }}>→</span>
      </div>
    </Link>
  );
}
