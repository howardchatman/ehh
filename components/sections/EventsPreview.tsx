"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

export default function EventsPreview() {
  return (
    <section
      aria-label="Upcoming Events"
      style={{
        background: "linear-gradient(160deg, #041828 0%, var(--ocean) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(28,184,200,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "var(--section-y) var(--section-x)",
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "clamp(2rem, 3.5vw, 3.5rem)",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEW}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 1, ease: EASE, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.8rem, 6vw, 6.5rem)",
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: "var(--cream)",
          }}
        >
          Find us in
          <br />
          <em style={{ fontStyle: "italic", color: "var(--aqua)" }}>your community.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE, delay: 0.22 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.8,
            maxWidth: "44ch",
          }}
        >
          Vendor events, pop-ups, farmers markets, gym events, and community sampling —
          come try Healing Water™ in person.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE, delay: 0.32 }}
        >
          <Link href="/where-to-find-us" className="btn-ocean">
            View Full Event Calendar
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
