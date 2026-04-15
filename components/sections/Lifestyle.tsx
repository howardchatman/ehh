"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-80px" } as const;

const pillars = [
  {
    number: "01",
    title: "The Healing Kitchen",
    body: "Herbs, teas, and food as medicine. What you bring into your home shapes what happens in your body. The kitchen is not just where you cook — it is where you heal.",
  },
  {
    number: "02",
    title: "Grow Your Own",
    body: "Hydroponics, window gardens, and controlling the quality of what you consume. Security begins at home. When you grow your own medicine, you take back something essential.",
  },
  {
    number: "03",
    title: "Ritual as Structure",
    body: "Morning vessels. Intentional preparation. The daily practice of treating your healing seriously. Ritual is not extra. It is the structure that makes everything else possible.",
  },
  {
    number: "04",
    title: "The Healing Home",
    body: "Environment matters. What surrounds you affects what happens within you. The home is not separate from the healing — it is part of it.",
  },
];

export default function Lifestyle() {
  return (
    <section
      aria-label="The Healing Life"
      style={{
        backgroundColor: "var(--ivory)",
        position: "relative",
        overflow: "hidden",
      }}
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
          opacity: 0.35,
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
          style={{ marginBottom: "clamp(3rem, 5vw, 6rem)" }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE }}
              style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)" }} />
              <span className="micro-label" style={{ color: "var(--gold)" }}>The Healing Life</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.6rem, 5.5vw, 6.5rem)",
                fontWeight: 400,
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                color: "var(--espresso)",
                maxWidth: "16ch",
              }}
            >
              Healing the body
              <br />
              is only the{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>beginning.</em>
            </motion.h2>
          </div>
        </div>

        {/* ── Two-column layout ── */}
        <div
          style={{ display: "grid", gap: "clamp(3rem, 6vw, 8rem)", alignItems: "start" }}
          className="grid-cols-1 lg:grid-cols-[3fr_2fr]"
        >
          {/* Left: large editorial image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 1.1, ease: EASE }}
          >
            <div style={{ overflow: "hidden", width: "100%" }}>
              <Image
                src="/ehh2.png"
                alt="Woman in morning ritual with tea"
                width={900}
                height={1125}
                sizes="(max-width: 1024px) 100vw, 55vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
                fontWeight: 300,
                color: "var(--espresso)",
                lineHeight: 1.35,
                letterSpacing: "-0.02em",
                marginTop: "clamp(1.5rem, 2.5vw, 2.5rem)",
                maxWidth: "38ch",
                opacity: 0.7,
              }}
            >
              &ldquo;She is not only healing her body.
              <br />
              She is building her world.&rdquo;
            </motion.p>
          </motion.div>

          {/* Right: pillar stack */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {pillars.map((pillar, i) => (
              <LifestylePillar key={pillar.number} pillar={pillar} index={i} />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
              style={{ paddingTop: "clamp(2rem, 3vw, 3rem)" }}
            >
              <Link href="/journal" className="btn-outline" style={{ display: "inline-flex" }}>
                Explore the lifestyle →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sage background accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "40%",
          height: "50%",
          background: "radial-gradient(ellipse at 0% 100%, var(--sage-pale) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}

function LifestylePillar({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEW}
      transition={{ duration: 0.85, ease: EASE, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: "1px solid var(--border)",
        padding: "clamp(1.25rem, 2vw, 2rem) 0",
        transition: "padding-left 0.3s var(--ease-luxury)",
        paddingLeft: hovered ? "0.75rem" : "0",
      }}
    >
      <div style={{ display: "flex", gap: "1rem", marginBottom: "0.5rem", alignItems: "center" }}>
        <span style={{
          fontFamily: "var(--font-serif)",
          fontSize: "0.65rem",
          color: "var(--gold)",
          fontWeight: 300,
          flexShrink: 0,
        }}>
          {pillar.number}
        </span>
        <h3 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
          fontWeight: 400,
          letterSpacing: "-0.01em",
          color: hovered ? "var(--gold)" : "var(--espresso)",
          transition: "color 0.35s var(--ease-luxury)",
          lineHeight: 1.2,
        }}>
          {pillar.title}
        </h3>
      </div>
      <p style={{
        fontFamily: "var(--font-sans)",
        fontSize: "0.845rem",
        fontWeight: 300,
        color: "var(--muted)",
        lineHeight: 1.85,
        paddingLeft: "1.65rem",
      }}>
        {pillar.body}
      </p>
    </motion.div>
  );
}
