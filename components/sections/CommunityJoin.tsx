"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-80px" } as const;

const BENEFITS = [
  "Wellness education",
  "Herbal insights",
  "Recipes and meal ideas",
  "Product launch updates",
  "Community events",
  "Member-only discounts",
];

export default function CommunityJoin() {
  return (
    <section
      aria-label="Join the Wellness Community"
      style={{
        position: "relative",
        backgroundColor: "var(--ivory)",
        overflow: "hidden",
      }}
    >
      {/* Top gold rule */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
          opacity: 0.4,
        }}
      />

      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "var(--section-y) var(--section-x)",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(3rem, 5vw, 5rem)",
          alignItems: "center",
        }}
        className="lg:grid-cols-2"
      >
        {/* Left: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE }}
            style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2rem, 3.5vw, 3.5rem)" }}
          >
            <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", flexShrink: 0 }} />
            <span className="micro-label" style={{ color: "var(--gold)" }}>
              Free Community
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 5.5vw, 6rem)",
              fontWeight: 300,
              lineHeight: 0.94,
              letterSpacing: "-0.025em",
              color: "var(--espresso)",
              marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
            }}
          >
            Join the EHH
            <br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Wellness</em>
            <br />
            Community
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE, delay: 0.22 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
              fontWeight: 300,
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "40ch",
              marginBottom: "clamp(2rem, 3.5vw, 3.5rem)",
            }}
          >
            A free wellness community for women seeking education, inspiration,
            and practical tools to support mind, body, and spirit wellness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE, delay: 0.34 }}
          >
            <Link
              href="/community"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-sans)",
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--cream)",
                backgroundColor: "var(--espresso)",
                padding: "1rem 2.75rem",
                textDecoration: "none",
                transition: "background-color 0.3s var(--ease-luxury)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--espresso)")}
            >
              Join Free
            </Link>
          </motion.div>
        </div>

        {/* Right: Benefits */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEW}
          transition={{ duration: 1, ease: EASE, delay: 0.18 }}
          style={{
            borderLeft: "1px solid var(--border)",
            paddingLeft: "clamp(2rem, 4vw, 4rem)",
          }}
        >
          <p
            className="micro-label"
            style={{ color: "var(--gold)", marginBottom: "1.75rem", letterSpacing: "0.2em" }}
          >
            Member Benefits
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {BENEFITS.map((benefit, i) => (
              <motion.li
                key={benefit}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.7, ease: EASE, delay: 0.28 + i * 0.07 }}
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "var(--gold)",
                    flexShrink: 0,
                    opacity: 0.8,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    color: "var(--charcoal)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {benefit}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
          opacity: 0.25,
        }}
      />
    </section>
  );
}
