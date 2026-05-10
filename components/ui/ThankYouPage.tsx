"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ThankYouPage() {
  return (
    <div
      style={{
        minHeight: "100svh",
        backgroundColor: "var(--espresso)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(3rem, 6vw, 6rem) var(--section-x)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(184,150,90,0.09) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}
      >
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-serif)",
            fontSize: "0.52rem",
            fontWeight: 300,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "var(--gold)",
            lineHeight: 1,
            marginBottom: "0.3rem",
          }}
        >
          Echoing
        </span>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-serif)",
            fontSize: "0.82rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(250,248,245,0.8)",
            lineHeight: 1,
          }}
        >
          Holistic Health
        </span>
      </motion.div>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
        }}
      >
        <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", opacity: 0.6 }} />
        <span className="micro-label" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>
          Welcome to the Circle
        </span>
        <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", opacity: 0.6 }} />
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.18 }}
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(3.5rem, 9vw, 9rem)",
          fontWeight: 300,
          lineHeight: 0.9,
          letterSpacing: "-0.03em",
          color: "var(--cream)",
          marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
        }}
      >
        You&rsquo;re
        <br />
        <em style={{ fontStyle: "italic", color: "var(--gold)" }}>on the list.</em>
      </motion.h1>

      {/* Gold rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.3 }}
        style={{
          height: "1px",
          width: "50px",
          background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
          marginBottom: "clamp(2rem, 3.5vw, 3.5rem)",
          transformOrigin: "center",
        }}
      />

      {/* Body copy */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 0.36 }}
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)",
          fontWeight: 300,
          color: "rgba(250,248,245,0.45)",
          lineHeight: 1.9,
          maxWidth: "42ch",
          marginBottom: "clamp(2.5rem, 4vw, 4.5rem)",
        }}
      >
        We&rsquo;ll reach out with exclusive early access to personalized herbal
        wellness designed for your healing journey. Something intentional
        is being prepared — just for you.
      </motion.p>

      {/* CTA back */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.46 }}
      >
        <Link href="/splash" className="btn-outline-cream" style={{ fontSize: "0.58rem" }}>
          Back to the page
        </Link>
      </motion.div>

      {/* Bottom quote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.13 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.7 }}
        style={{
          position: "absolute",
          bottom: "clamp(1.5rem, 3vw, 2.5rem)",
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "clamp(0.65rem, 0.9vw, 0.8rem)",
          color: "var(--gold)",
          letterSpacing: "0.05em",
        }}
      >
        Healing is not a trend. It&rsquo;s a return to self.
      </motion.p>
    </div>
  );
}
