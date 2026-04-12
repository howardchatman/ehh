"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// ── Animation constants ────────────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay = 0, duration = 1) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration, ease: EASE, delay },
  };
}

// ── Component ─────────────────────────────────────────────────────────────
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax — image drifts upward at ~20% speed relative to scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section
      ref={heroRef}
      aria-label="Hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--cream)",
        overflow: "hidden",
      }}
    >
      {/* ── Content: mobile stacked / desktop split ─────────────────────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: "100svh",
        }}
        className="lg:flex-row"
      >

        {/* ────────────────────────────────────────────────────────────────
            LEFT — Typography column
        ──────────────────────────────────────────────────────────────── */}
        <motion.div
          style={{ y: textY }}
          className="flex flex-col justify-center relative z-10
                     px-6 pt-32 pb-16
                     md:px-12 md:pt-36 md:pb-20
                     lg:w-[54%] lg:px-16 lg:pt-0 lg:pb-0 lg:py-0
                     xl:px-20 xl:w-[52%]"
        >

          {/* Issue label */}
          <motion.div
            {...fadeUp(0.25)}
            style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", flexShrink: 0 }} />
            <span
              className="micro-label"
              style={{ color: "var(--gold)" }}
            >
              Vol. I &nbsp;&nbsp;·&nbsp;&nbsp; Holistic Wellness
            </span>
          </motion.div>

          {/* ── HEADLINE — the dominant typographic moment ── */}
          <h1
            aria-label="Healing is not a trend. It's a return to self."
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: "var(--espresso)",
              marginBottom: "clamp(2rem, 3.5vw, 3rem)",
            }}
          >
            {/* Line 1 */}
            <motion.span
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
              style={{
                display: "block",
                fontSize: "clamp(3.4rem, 7.5vw, 8.5rem)",
              }}
            >
              Healing
            </motion.span>

            {/* Line 2 */}
            <motion.span
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.46 }}
              style={{
                display: "block",
                fontSize: "clamp(3.4rem, 7.5vw, 8.5rem)",
              }}
            >
              is not
            </motion.span>

            {/* Line 3 — italic gold accent */}
            <motion.span
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.57 }}
              style={{
                display: "block",
                fontStyle: "italic",
                color: "var(--gold)",
                fontSize: "clamp(3.4rem, 7.5vw, 8.5rem)",
              }}
            >
              a trend.
            </motion.span>

            {/* Thin space */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.01, delay: 0.68 }}
              style={{ display: "block", height: "0.18em" }}
              aria-hidden="true"
            />

            {/* Line 4 */}
            <motion.span
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.72 }}
              style={{
                display: "block",
                fontSize: "clamp(2.2rem, 5vw, 5.8rem)",
                opacity: 0.82,
              }}
            >
              It&rsquo;s a return
            </motion.span>

            {/* Line 5 */}
            <motion.span
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.82 }}
              style={{
                display: "block",
                fontSize: "clamp(2.2rem, 5vw, 5.8rem)",
                opacity: 0.82,
              }}
            >
              to self.
            </motion.span>
          </h1>

          {/* Gold extending rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.95 }}
            style={{
              height: "1px",
              width: "90px",
              backgroundColor: "var(--gold)",
              transformOrigin: "left center",
              marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
            }}
          />

          {/* Subheadline */}
          <motion.p
            {...fadeUp(1.05)}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1rem, 1.35vw, 1.2rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--muted)",
              lineHeight: 1.65,
              maxWidth: "40ch",
              marginBottom: "clamp(2.5rem, 4vw, 3.5rem)",
            }}
          >
            A refined approach to gut, womb, and whole-body wellness
            for women who expect more from their health.
          </motion.p>

          {/* CTA row */}
          <motion.div
            {...fadeUp(1.18)}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <Link href="/shop" className="btn-dark">
              <span>Enter the Shop</span>
              <span style={{ fontSize: "0.8rem", lineHeight: 1 }}>→</span>
            </Link>
            <Link href="/about" className="btn-outline">
              Begin Your Healing
            </Link>
          </motion.div>

          {/* Bottom category strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.42 }}
            transition={{ duration: 1.2, delay: 1.45 }}
            style={{
              display: "flex",
              gap: "clamp(1rem, 2vw, 1.75rem)",
              marginTop: "clamp(2.5rem, 5vw, 5rem)",
              flexWrap: "wrap",
            }}
          >
            {["Gut Health", "Hormonal Balance", "Womb Wellness", "Inflammation Support"].map((cat, i) => (
              <span key={i} className="micro-label" style={{ color: "var(--muted)" }}>
                {cat}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ────────────────────────────────────────────────────────────────
            RIGHT — Editorial image panel
        ──────────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.15 }}
          style={{ position: "relative", overflow: "hidden" }}
          className="
            h-[65vw] min-h-[400px]
            lg:h-auto lg:flex-1 lg:w-[46%] xl:w-[48%]
          "
        >
          {/* Parallax image layer */}
          <motion.div
            className="img-placeholder"
            style={{
              position: "absolute",
              inset: 0,
              y: imageY,
              height: "120%",
              top: "-10%",
              width: "100%",
            }}
            aria-label="Editorial portrait image"
          >
            {/* Inner frame */}
            <div
              style={{
                position: "absolute",
                inset: "clamp(1.25rem, 3%, 2.5rem)",
                border: "1px solid rgba(184,150,90,0.22)",
                pointerEvents: "none",
              }}
            />

            {/* Corner marks */}
            {(
              [
                { top: "1.5rem", left: "1.5rem" },
                { top: "1.5rem", right: "1.5rem" },
                { bottom: "1.5rem", left: "1.5rem" },
                { bottom: "1.5rem", right: "1.5rem" },
              ] as React.CSSProperties[]
            ).map((pos, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "18px",
                  height: "18px",
                  pointerEvents: "none",
                  ...pos,
                }}
              >
                <div style={{ width: "100%", height: "1px", backgroundColor: "var(--gold)", opacity: 0.55 }} />
                <div style={{ width: "1px", height: "100%", backgroundColor: "var(--gold)", opacity: 0.55 }} />
              </div>
            ))}

            {/* Large ghost number */}
            <div
              style={{
                position: "absolute",
                bottom: "clamp(1.5rem, 4%, 3rem)",
                right: "clamp(1.5rem, 4%, 3rem)",
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(5rem, 12vw, 14rem)",
                fontWeight: 300,
                color: "rgba(184,150,90,0.08)",
                letterSpacing: "-0.06em",
                lineHeight: 1,
                userSelect: "none",
                pointerEvents: "none",
              }}
              aria-hidden="true"
            >
              01
            </div>

            {/* Caption label */}
            <div
              style={{
                position: "absolute",
                bottom: "1.75rem",
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <span
                className="micro-label"
                style={{ color: "rgba(184,150,90,0.4)" }}
              >
                Editorial Portrait
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 10,
        }}
        className="hidden lg:flex"
      >
        <span className="micro-label" style={{ color: "rgba(184,150,90,0.45)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, var(--gold), transparent)",
            transformOrigin: "top center",
          }}
        />
      </motion.div>
    </section>
  );
}
