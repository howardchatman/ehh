"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-80px" } as const;

const steps = [
  {
    number: "01",
    title: "Cleanse",
    body: "Reduce inflammation. Remove what is stressing the body. Create space for the body to respond.",
    detail: "The first stage clears the path. Before the body can restore, it must be relieved of what is burdening it — inflammatory foods, environmental stressors, and the accumulated load that keeps the system in a reactive state.",
    href: "/focus/inflammation-support",
    accent: "Remove the burden.",
  },
  {
    number: "02",
    title: "Restore",
    body: "Rebuild the gut lining. Restore minerals. Support womb health and microbiome diversity.",
    detail: "With the burden reduced, restoration becomes possible. This is the stage of rebuilding — nourishing the gut lining, replenishing mineral deficiencies, and supporting the organs that govern hormonal and reproductive health.",
    href: "/focus/gut-health",
    accent: "Rebuild the foundation.",
  },
  {
    number: "03",
    title: "Activate",
    body: "Support energy, circulation, and hormonal balance. Work with the body's natural rhythms.",
    detail: "Once restored, the body can begin to activate. Energy returns. Hormonal rhythms stabilize. Circulation improves. This stage is about working with the body — not pushing it — and supporting the systems that govern daily vitality.",
    href: "/focus/hormonal-balance",
    accent: "Restore the rhythm.",
  },
  {
    number: "04",
    title: "Elevate",
    body: "Upgrade lifestyle, home environment, identity, and aesthetics. This is where healing becomes living.",
    detail: "Healing does not end in the body. It extends into the home, the kitchen, the daily rituals, and the sense of identity that shapes how a woman moves through her life. Elevate is the stage where healing becomes a lifestyle — and a lifestyle becomes a legacy.",
    href: "/focus/womb-wellness",
    accent: "Healing becomes living.",
  },
];

export default function EHHMethod() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      aria-label="The E.H.H. Method"
      style={{
        position: "relative",
        backgroundColor: "var(--espresso)",
        overflow: "hidden",
      }}
    >
      {/* Top gold rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEW}
        transition={{ duration: 1.2, ease: EASE }}
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(184,150,90,0.45), transparent)",
          transformOrigin: "left center",
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
          style={{
            display: "grid",
            gap: "clamp(2rem, 4vw, 5rem)",
            marginBottom: "clamp(4rem, 7vw, 8rem)",
            alignItems: "end",
          }}
          className="grid-cols-1 lg:grid-cols-[1fr_1fr]"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE }}
              style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", flexShrink: 0 }} />
              <span className="micro-label" style={{ color: "var(--gold)" }}>
                The E.H.H. Method™
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 1, ease: EASE, delay: 0.15 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.6rem, 5.5vw, 6rem)",
                fontWeight: 400,
                lineHeight: 0.92,
                letterSpacing: "-0.025em",
                color: "var(--cream)",
              }}
            >
              A system built
              <br />
              for{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                real healing.
              </em>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(250,248,245,0.5)",
              lineHeight: 1.75,
              maxWidth: "42ch",
            }}
          >
            Not a protocol. A practice. Four stages, one direction —
            built for women who are ready to work with their body instead of against it.
          </motion.p>
        </div>

        {/* ── Four step cards ── */}
        <div
          style={{ display: "grid", gap: "clamp(1px, 0.15vw, 2px)" }}
          className="grid-cols-1 lg:grid-cols-4"
        >
          {steps.map((step, i) => (
            <MethodCard
              key={step.number}
              step={step}
              index={i}
              isExpanded={expanded === i}
              onToggle={() => setExpanded(expanded === i ? null : i)}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "clamp(3rem, 5vw, 5rem)",
          }}
        >
          <Link href="/focus/gut-health" className="btn-outline-cream">
            Begin with the method →
          </Link>
        </motion.div>
      </div>

      {/* Background texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          background: "radial-gradient(ellipse at 100% 0%, rgba(184,150,90,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}

function MethodCard({
  step,
  index,
  isExpanded,
  onToggle,
}: {
  step: (typeof steps)[number];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEW}
      transition={{ duration: 0.9, ease: EASE, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onToggle}
      style={{
        padding: "clamp(2rem, 3.5vw, 3.5rem) clamp(1.5rem, 2.5vw, 2.5rem)",
        border: "1px solid rgba(250,248,245,0.07)",
        cursor: "pointer",
        backgroundColor: isExpanded
          ? "rgba(184,150,90,0.08)"
          : hovered
          ? "rgba(250,248,245,0.03)"
          : "transparent",
        transition: "background-color 0.4s var(--ease-luxury)",
        display: "flex",
        flexDirection: "column",
        gap: "clamp(1.25rem, 2vw, 2rem)",
        position: "relative",
      }}
    >
      {/* Step number */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "0.7rem",
            fontWeight: 300,
            color: "var(--gold)",
            letterSpacing: "0.06em",
          }}
        >
          {step.number}
        </span>
        <motion.span
          animate={{ opacity: isExpanded ? 1 : hovered ? 0.5 : 0.2 }}
          style={{ color: "var(--gold)", fontSize: "0.7rem" }}
        >
          {isExpanded ? "−" : "+"}
        </motion.span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2rem, 3vw, 3rem)",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          color: isExpanded ? "var(--gold)" : hovered ? "var(--gold-light)" : "var(--cream)",
          transition: "color 0.4s var(--ease-luxury)",
        }}
      >
        {step.title}
      </h3>

      {/* Accent */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.6rem",
          fontWeight: 500,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--gold)",
          opacity: 0.7,
        }}
      >
        {step.accent}
      </p>

      {/* Body */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.875rem",
          fontWeight: 300,
          color: "rgba(250,248,245,0.55)",
          lineHeight: 1.8,
        }}
      >
        {step.body}
      </p>

      {/* Expanded detail */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.45, ease: EASE }}
        style={{ overflow: "hidden" }}
      >
        <div
          style={{
            paddingTop: "1rem",
            borderTop: "1px solid rgba(250,248,245,0.1)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "0.9rem",
              fontWeight: 300,
              color: "rgba(250,248,245,0.5)",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            {step.detail}
          </p>
          <Link
            href={step.href}
            className="text-link"
            style={{ color: "var(--gold)", fontSize: "0.55rem" }}
            onClick={(e) => e.stopPropagation()}
          >
            Explore this stage →
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
