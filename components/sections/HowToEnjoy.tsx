"use client";

import { motion } from "framer-motion";
import WaveDivider from "@/components/ui/WaveDivider";
import BotanicalAccent from "@/components/ui/BotanicalAccent";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

const METHODS = [
  { step: "01", title: "Drink It",      body: "Enjoy chilled straight from the pouch." },
  { step: "02", title: "Freeze It",     body: "Freeze into ice cubes and add to water throughout the day." },
  { step: "03", title: "Blend It",      body: "Pour into your smoothie for a sea moss boost." },
  { step: "04", title: "After Activity", body: "Enjoy following workouts and daily movement for optimal recovery." },
];

export default function HowToEnjoy() {
  return (
    <section
      aria-label="How to Enjoy"
      style={{ backgroundColor: "var(--ivory)", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "var(--section-y) var(--section-x)",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE }}
          style={{ textAlign: "center", marginBottom: "clamp(3rem, 5vw, 5rem)" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 6vw, 6.5rem)",
              fontWeight: 300,
              lineHeight: 0.92,
              letterSpacing: "-0.025em",
              color: "var(--ocean)",
            }}
          >
            Four ways to
            <br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>hydrate well.</em>
          </h2>
        </motion.div>

        {/* Botanical ornament */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "-1rem", marginBottom: "clamp(2rem, 3vw, 3rem)" }}>
          <BotanicalAccent color="#B8965A" width={90} opacity={0.45} />
        </div>

        {/* Methods */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(1.5rem, 2.5vw, 2rem)" }}
          className="sm:grid-cols-2 lg:grid-cols-4"
        >
          {METHODS.map((method, i) => (
            <motion.div
              key={method.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.09 }}
              style={{
                padding: "clamp(1.75rem, 2.5vw, 2.5rem)",
                borderRadius: "20px",
                background: "linear-gradient(145deg, var(--warm-white) 0%, var(--parchment) 100%)",
                boxShadow: "0 4px 24px rgba(90,60,20,0.07)",
                position: "relative",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  fontWeight: 300,
                  color: "var(--aqua)",
                  opacity: 0.2,
                  lineHeight: 1,
                  marginBottom: "1rem",
                  letterSpacing: "-0.03em",
                }}
              >
                {method.step}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
                  fontWeight: 400,
                  color: "var(--ocean)",
                  marginBottom: "0.75rem",
                  lineHeight: 1.2,
                }}
              >
                {method.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "var(--muted)",
                  lineHeight: 1.7,
                }}
              >
                {method.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
