"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-80px" } as const;

const BENEFITS = [
  "Product announcements",
  "Vendor event updates",
  "Wellness tips",
  "Healthy recipes",
  "Exclusive offers",
  "Community news",
];

export default function CommunitySection() {
  return (
    <section
      aria-label="Join the Community"
      style={{ backgroundColor: "var(--coastal)", position: "relative" }}
    >
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
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.6rem, 5vw, 5.5rem)",
              fontWeight: 300,
              lineHeight: 0.94,
              letterSpacing: "-0.025em",
              color: "var(--ocean)",
              marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
            }}
          >
            Join the Echoing
            <br />
            Holistic Health™
            <br />
            <em style={{ fontStyle: "italic", color: "var(--aqua)" }}>Community</em>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE, delay: 0.28 }}
          >
            <Link href="/community" className="btn-dark">
              Join the Community
            </Link>
          </motion.div>
        </div>

        {/* Right: Benefits */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEW}
          transition={{ duration: 1, ease: EASE, delay: 0.14 }}
          style={{
            borderLeft: "1px solid var(--border)",
            paddingLeft: "clamp(2rem, 4vw, 4rem)",
          }}
        >
          <p className="micro-label" style={{ color: "var(--aqua)", marginBottom: "1.75rem", letterSpacing: "0.2em" }}>
            Members Receive
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {BENEFITS.map((benefit, i) => (
              <motion.li
                key={benefit}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.7, ease: EASE, delay: 0.24 + i * 0.07 }}
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "var(--aqua)", flexShrink: 0, opacity: 0.8 }} />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", fontWeight: 300, color: "var(--charcoal)", letterSpacing: "0.02em" }}>
                  {benefit}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
