"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─────────────────────────────────────────────────────────────────────────────
// HERO — Full-bleed magazine cover composition
// Text lives ON the image, with a cinematic gradient overlay.
// Think: Vogue cover meets luxury wellness campaign.
// ─────────────────────────────────────────────────────────────────────────────
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Image parallax — drifts upward as user scrolls, creating depth
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  // Content fades slightly on scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={heroRef}
      aria-label="Hero"
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "640px",
        overflow: "hidden",
        backgroundColor: "#1A1208",
      }}
    >
      {/* ── 1. FULL-BLEED EDITORIAL IMAGE ────────────────────────────────── */}
      {/* This is where a luxury portrait photograph will live.                */}
      {/* The warm taupe gradient simulates the tone of editorial photography. */}
      <motion.div
        className="img-placeholder-cover"
        style={{
          position: "absolute",
          inset: 0,
          height: "120%",
          top: "-10%",
          width: "100%",
          y: imageY,
        }}
        aria-hidden="true"
      />

      {/* ── 2. CINEMATIC GRADIENT OVERLAY ───────────────────────────────── */}
      {/* Creates reading contrast for text — standard magazine technique.    */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: `
            linear-gradient(
              to bottom,
              rgba(26, 18, 8, 0.55) 0%,
              rgba(26, 18, 8, 0.10) 22%,
              rgba(26, 18, 8, 0.02) 45%,
              rgba(26, 18, 8, 0.08) 60%,
              rgba(26, 18, 8, 0.65) 82%,
              rgba(26, 18, 8, 0.90) 100%
            )
          `,
        }}
      />

      {/* ── 3. SUBTLE SIDE VIGNETTE ─────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: `
            radial-gradient(
              ellipse 120% 100% at 50% 50%,
              transparent 40%,
              rgba(26, 18, 8, 0.35) 100%
            )
          `,
        }}
      />

      {/* ── 4. CONTENT LAYER ────────────────────────────────────────────── */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          padding:
            "clamp(4.5rem, 7vw, 7rem) clamp(1.5rem, 5vw, 5rem) clamp(2.5rem, 5vw, 4.5rem)",
          opacity: contentOpacity,
        }}
      >

        {/* ── TOP STRIP — like the Vol. / issue line on a magazine ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          {/* Left: Issue tag */}
          <span
            className="micro-label"
            style={{ color: "rgba(250,248,245,0.45)", flexShrink: 0 }}
          >
            Vol. I
          </span>

          {/* Center rule */}
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "rgba(250,248,245,0.12)",
            }}
          />

          {/* Right: Section tag */}
          <span
            className="micro-label"
            style={{ color: "rgba(250,248,245,0.45)", flexShrink: 0 }}
          >
            Holistic Wellness
          </span>
        </motion.div>

        {/* ── MIDDLE: Right-side cover lines (desktop) ── */}
        {/* Like the smaller story callouts on a Vanity Fair cover */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            paddingTop: "clamp(2rem, 4vw, 4rem)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.9 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.55rem",
              textAlign: "right",
            }}
            className="hidden lg:flex"
          >
            {[
              "Gut Health",
              "Hormonal Balance",
              "Womb Wellness",
              "Inflammation Support",
            ].map((item, i) => (
              <span
                key={i}
                className="micro-label"
                style={{
                  color: "rgba(250,248,245,0.32)",
                  fontSize: "0.5rem",
                  display: "block",
                  letterSpacing: "0.22em",
                }}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── BOTTOM — The dominant typographic moment ── */}
        {/* Positioned at the bottom of the cover like a Vogue headline  */}
        <div>

          {/* Gold accent rule above headline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
            style={{
              height: "1px",
              width: "50px",
              backgroundColor: "var(--gold)",
              transformOrigin: "left center",
              marginBottom: "clamp(1rem, 2vw, 1.75rem)",
              opacity: 0.85,
            }}
          />

          {/* ── THE HEADLINE — This is the magazine cover masthead moment ── */}
          <h1
            aria-label="Healing is not a trend. It's a return to self."
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              color: "var(--cream)",
              marginBottom: "clamp(1.5rem, 3vw, 3rem)",
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.15, ease: EASE, delay: 0.45 }}
              style={{
                display: "block",
                fontSize: "clamp(4.5rem, 11.5vw, 14.5rem)",
              }}
            >
              Healing
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.15, ease: EASE, delay: 0.56 }}
              style={{
                display: "block",
                fontSize: "clamp(4.5rem, 11.5vw, 14.5rem)",
              }}
            >
              is not
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.15, ease: EASE, delay: 0.67 }}
              style={{
                display: "block",
                fontStyle: "italic",
                color: "var(--gold)",
                fontSize: "clamp(4.5rem, 11.5vw, 14.5rem)",
              }}
            >
              a trend.
            </motion.span>

            {/* Second register — slightly smaller, same voice */}
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.15, ease: EASE, delay: 0.78 }}
              style={{
                display: "block",
                fontSize: "clamp(2rem, 5.5vw, 7rem)",
                marginTop: "0.12em",
                opacity: 0.88,
              }}
            >
              It&rsquo;s a return to self.
            </motion.span>
          </h1>

          {/* ── Bottom bar: subhead left, CTAs right ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.95 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              paddingTop: "clamp(1.25rem, 2.5vw, 2rem)",
              borderTop: "1px solid rgba(250,248,245,0.12)",
            }}
            className="sm:flex-row sm:items-center sm:justify-between"
          >
            {/* Subheadline */}
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(0.88rem, 1.15vw, 1.05rem)",
                fontWeight: 300,
                color: "rgba(250,248,245,0.48)",
                lineHeight: 1.65,
                maxWidth: "46ch",
              }}
            >
              A refined approach to gut, womb, and whole-body wellness
              for women who expect more from their health.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexShrink: 0,
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/shop"
                className="btn-outline-cream"
              >
                Enter the Shop
                <span style={{ fontSize: "0.85rem" }}>→</span>
              </Link>
              <Link
                href="/about"
                className="btn-outline-cream"
              >
                Begin Your Healing
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── 5. SCROLL INDICATOR ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
        className="hidden md:flex"
      >
        <motion.div
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "44px",
            background:
              "linear-gradient(to bottom, rgba(250,248,245,0.5), transparent)",
            transformOrigin: "top center",
          }}
        />
        <span
          className="micro-label"
          style={{ color: "rgba(250,248,245,0.28)", fontSize: "0.48rem" }}
        >
          Scroll
        </span>
      </motion.div>

      {/* ── 6. EDITORIAL CORNER DETAIL ───────────────────────────────────── */}
      {/* Thin crop marks — homage to print production                        */}
      {[
        { top: "5rem", left: "var(--section-x)" },
        { top: "5rem", right: "var(--section-x)" },
      ].map((pos, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: "absolute",
            zIndex: 15,
            width: "16px",
            height: "16px",
            opacity: 0.2,
            ...pos,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "var(--cream)",
            }}
          />
          <div
            style={{
              width: "1px",
              height: "100%",
              backgroundColor: "var(--cream)",
            }}
          />
        </div>
      ))}
    </section>
  );
}
