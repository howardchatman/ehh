"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-80px" } as const;

const areas = [
  {
    number: "01",
    title: "Gut Health",
    description:
      "The foundation of everything. A balanced gut shapes immunity, mood, and metabolic function. We address the root—not the symptom.",
    href: "/shop?category=gut-health",
  },
  {
    number: "02",
    title: "Hormonal Balance",
    description:
      "When hormones shift, everything shifts. Our approach supports the endocrine system with precision—informed by science, grounded in nature.",
    href: "/shop?category=hormonal-balance",
  },
  {
    number: "03",
    title: "Womb Wellness",
    description:
      "The womb is not a problem to be managed. We offer support for the cycles, rhythms, and seasons of the feminine experience—with reverence.",
    href: "/shop?category=womb-wellness",
  },
  {
    number: "04",
    title: "Inflammation Support",
    description:
      "Chronic inflammation is a message. We work to quiet the signal thoughtfully—reducing burden on the body while rebuilding its natural resilience.",
    href: "/shop?category=inflammation",
  },
];

export default function FocusAreas() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      aria-label="Focus Areas"
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
            display: "flex",
            flexDirection: "column",
            gap: "clamp(1.5rem, 2.5vw, 2rem)",
            marginBottom: "clamp(4rem, 7vw, 8rem)",
          }}
          className="md:flex-row md:items-end md:justify-between"
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
                Areas of Focus
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
                fontWeight: 300,
                lineHeight: 0.92,
                letterSpacing: "-0.025em",
                color: "var(--cream)",
              }}
            >
              Where your{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                healing
              </em>
              <br />
              begins
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
              maxWidth: "36ch",
            }}
          >
            Every product, every teaching, every experience is designed to
            support the systems that sustain your life.
          </motion.p>
        </div>

        {/* ── Editorial rows ── */}
        <div>
          {areas.map((area, i) => (
            <motion.div
              key={area.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.1 }}
            >
              <Link
                href={area.href}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ display: "block", textDecoration: "none" }}
              >
                <div
                  style={{
                    borderTop: "1px solid rgba(250,248,245,0.1)",
                    padding: "clamp(1.5rem, 3vw, 2.5rem) 0",
                    display: "grid",
                    gridTemplateColumns: "3rem 1fr auto",
                    gap: "clamp(1rem, 2vw, 2rem)",
                    alignItems: "start",
                    transition: "background-color 0.4s var(--ease-luxury)",
                    marginLeft: "calc(var(--section-x) * -1)",
                    marginRight: "calc(var(--section-x) * -1)",
                    paddingLeft: "var(--section-x)",
                    paddingRight: "var(--section-x)",
                    backgroundColor: hovered === i
                      ? "rgba(250,248,245,0.04)"
                      : "transparent",
                  }}
                >
                  {/* Number */}
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "0.7rem",
                      fontWeight: 300,
                      color: "var(--gold)",
                      letterSpacing: "0.05em",
                      paddingTop: "0.55rem",
                    }}
                  >
                    {area.number}
                  </span>

                  {/* Title + description */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(2rem, 4.5vw, 5.5rem)",
                        fontWeight: 300,
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                        color: hovered === i ? "var(--gold)" : "var(--cream)",
                        transition: "color 0.4s var(--ease-luxury)",
                        marginBottom: "0.6rem",
                      }}
                    >
                      {area.title}
                    </h3>

                    <AnimatePresence mode="wait">
                      {hovered === i && (
                        <motion.p
                          key={area.number}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.35, ease: EASE }}
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.85rem",
                            fontWeight: 300,
                            color: "rgba(250,248,245,0.5)",
                            lineHeight: 1.8,
                            maxWidth: "55ch",
                          }}
                        >
                          {area.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Arrow */}
                  <motion.span
                    animate={{
                      x: hovered === i ? 0 : -8,
                      opacity: hovered === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: EASE }}
                    style={{
                      color: "var(--gold)",
                      fontSize: "1.25rem",
                      alignSelf: "center",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    →
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div
            style={{ borderTop: "1px solid rgba(250,248,245,0.1)" }}
          />
        </div>
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
          background:
            "radial-gradient(ellipse at 100% 0%, rgba(184,150,90,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
