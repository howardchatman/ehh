"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import WaveDivider from "@/components/ui/WaveDivider";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HealingWaterHero() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
        background: "linear-gradient(160deg, var(--ocean) 0%, var(--ocean-mid) 55%, #0D3D5A 100%)",
        padding: "clamp(7rem, 14vw, 12rem) var(--section-x) clamp(5rem, 8vw, 8rem)",
      }}
    >
      {/* Ocean depth layers */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 70%, rgba(28,184,200,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(14,70,120,0.8) 0%, transparent 60%)", pointerEvents: "none" }} />

      {/* Animated wave rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          animate={{ scale: [1, 1.6, 1], opacity: [0.08, 0, 0.08] }}
          transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "clamp(400px, 80vw, 900px)",
            height: "clamp(400px, 80vw, 900px)",
            borderRadius: "50%",
            border: "1px solid var(--aqua)",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}>

        {/* Tagline chip */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "clamp(2rem, 3.5vw, 3.5rem)" }}
        >
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3.5rem, 9vw, 9.5rem)",
            fontWeight: 300,
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            color: "var(--cream)",
            marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
          }}
        >
          From the Source
          <br />
          <em style={{ fontStyle: "italic", color: "var(--aqua)" }}>to the Body</em>
          <span style={{ color: "var(--gold)", fontSize: "0.5em", verticalAlign: "super", lineHeight: 1 }}>™</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.22 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1rem, 1.6vw, 1.3rem)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.7,
            maxWidth: "54ch",
            margin: "0 auto clamp(1rem, 1.5vw, 1.5rem)",
          }}
        >
          Sea Moss-Powered Functional Hydration Crafted with Real Ingredients
        </motion.p>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.32 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.38)",
            lineHeight: 1.85,
            maxWidth: "48ch",
            margin: "0 auto clamp(2.5rem, 4vw, 4.5rem)",
          }}
        >
          Refreshing hydration blends made with alkaline water, sea moss water,
          fresh fruit, herbs, and thoughtfully selected ingredients.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.42 }}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <Link href="/shop" className="btn-ocean">
            Shop Healing Water™
          </Link>
          <Link href="/community" className="btn-outline-ocean">
            Join the Community
          </Link>
        </motion.div>
      </div>

      {/* Bottom wave to ivory */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, pointerEvents: "none" }}>
        <WaveDivider fill="#F5F0E8" height={100} />
      </div>
    </section>
  );
}
