"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

const FEATURES = [
  { title: "Functional Hydration",    body: "Every pouch delivers more than water — it delivers wellness." },
  { title: "Real Ingredients",        body: "Made with alkaline water, sea moss, fresh fruit, and herbs. No fillers." },
  { title: "Sea Moss Powered",        body: "92 naturally occurring minerals in every sip, straight from the sea." },
  { title: "Refreshing Taste",        body: "Clean, light, and genuinely delicious — hydration you'll look forward to." },
  { title: "Grab-and-Go Pouches",     body: "Convenient 15 oz pouches ready for your day, gym bag, or commute." },
  { title: "Hydration Made Easy™",    body: "No prep, no mixing, no excuses. Just open and drink." },
];

export default function WhyCustomersLove() {
  return (
    <section
      aria-label="Why customers love Healing Water"
      style={{ backgroundColor: "var(--coastal)", position: "relative" }}
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
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "clamp(1.25rem, 2vw, 2rem)" }}>
            <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", opacity: 0.7 }} />
            <span className="micro-label" style={{ color: "var(--aqua)" }}>Why Customers Love It</span>
            <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", opacity: 0.7 }} />
          </div>
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
            Healing Water™
          </h2>
        </motion.div>

        {/* Feature grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(1.5rem, 2.5vw, 2rem)" }}
          className="sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.07 }}
              style={{
                padding: "clamp(1.75rem, 3vw, 2.5rem)",
                backgroundColor: "white",
                border: "1px solid var(--border)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Aqua accent bar */}
              <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", backgroundColor: "var(--aqua)", opacity: 0.6 }} />

              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)",
                  fontWeight: 400,
                  color: "var(--ocean)",
                  marginBottom: "0.75rem",
                  lineHeight: 1.2,
                }}
              >
                {feature.title}
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
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
