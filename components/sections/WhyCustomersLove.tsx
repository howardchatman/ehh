"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CARDS = [
  {
    icon: "💧",
    title: "Functional Hydration",
    body: "Every pouch delivers more than water — it delivers wellness.",
    accent: "#1CB8C8",
  },
  {
    icon: "🌿",
    title: "Real Ingredients",
    body: "Made with alkaline water, sea moss, fresh fruit, and herbs. No fillers.",
    accent: "#4CAF82",
  },
  {
    icon: "🌊",
    title: "Sea Moss Powered",
    body: "92 naturally occurring minerals in every sip, straight from the sea.",
    accent: "#1CB8C8",
  },
  {
    icon: "✨",
    title: "Refreshing Taste",
    body: "Clean, light, and genuinely delicious — hydration you'll look forward to.",
    accent: "#C8A84B",
  },
  {
    icon: "⚡",
    title: "Grab-and-Go Pouches",
    body: "Convenient 15 oz pouches ready for your day, gym bag, or commute.",
    accent: "#1CB8C8",
  },
  {
    icon: "🙌",
    title: "Hydration Made Easy™",
    body: "No prep, no mixing, no excuses. Just open and drink.",
    accent: "#4CAF82",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function getPosition(index: number, active: number, total: number) {
  let rel = index - active;
  if (rel > total / 2) rel -= total;
  if (rel < -total / 2) rel += total;
  return rel;
}

export default function WhyCustomersLove() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((p) => (p + 1) % CARDS.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + CARDS.length) % CARDS.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 3800);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <section
      aria-label="Why customers love Healing Water"
      style={{
        background: "linear-gradient(160deg, var(--ocean) 0%, #0d3252 60%, #0a2540 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(5rem, 10vw, 9rem) var(--section-x)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background glow */}
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(28,184,200,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        style={{ textAlign: "center", marginBottom: "clamp(3rem, 5vw, 5rem)" }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.25rem" }}>
          <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", opacity: 0.6 }} />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--aqua)" }}>
            Why Customers Love It
          </span>
          <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", opacity: 0.6 }} />
        </div>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.8rem, 6vw, 6.5rem)",
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: "-0.025em",
            color: "var(--cream)",
          }}
        >
          Healing Water™
        </h2>
      </motion.div>

      {/* Carousel */}
      <div
        style={{
          position: "relative",
          height: "clamp(280px, 36vw, 380px)",
          perspective: "1200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {CARDS.map((card, i) => {
          const pos = getPosition(i, active, CARDS.length);
          const visible = Math.abs(pos) <= 2;
          if (!visible) return null;

          const isActive = pos === 0;
          const x = pos * (typeof window !== "undefined" && window.innerWidth < 600 ? 160 : 220);
          const scale = isActive ? 1 : Math.abs(pos) === 1 ? 0.78 : 0.58;
          const opacity = isActive ? 1 : Math.abs(pos) === 1 ? 0.55 : 0.2;
          const z = isActive ? 0 : Math.abs(pos) === 1 ? -80 : -200;
          const rotateY = pos * -8;

          return (
            <motion.div
              key={card.title}
              animate={{ x, scale, opacity, z, rotateY }}
              transition={{ duration: 0.65, ease: EASE }}
              onClick={() => setActive(i)}
              style={{
                position: "absolute",
                width: "clamp(260px, 36vw, 400px)",
                cursor: isActive ? "default" : "pointer",
                transformStyle: "preserve-3d",
                zIndex: isActive ? 10 : 5 - Math.abs(pos),
              }}
            >
              <div
                style={{
                  background: isActive
                    ? "linear-gradient(145deg, #ffffff 0%, #f8fbff 100%)"
                    : "rgba(255,255,255,0.06)",
                  border: isActive
                    ? `1px solid rgba(28,184,200,0.2)`
                    : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "2px",
                  padding: "clamp(2rem, 3.5vw, 3rem)",
                  boxShadow: isActive
                    ? "0 32px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(28,184,200,0.1)"
                    : "none",
                  backdropFilter: isActive ? "none" : "blur(4px)",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: isActive ? `rgba(28,184,200,0.1)` : "rgba(255,255,255,0.06)",
                    border: `1px solid ${isActive ? card.accent : "rgba(255,255,255,0.1)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {card.icon}
                </div>

                {/* Number */}
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.65rem",
                    fontWeight: 400,
                    letterSpacing: "0.18em",
                    color: isActive ? card.accent : "rgba(255,255,255,0.3)",
                    marginBottom: "0.6rem",
                    textTransform: "uppercase",
                  }}
                >
                  0{i + 1}
                </p>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.2rem, 1.8vw, 1.55rem)",
                    fontWeight: 400,
                    color: isActive ? "var(--ocean)" : "rgba(255,255,255,0.7)",
                    marginBottom: "0.85rem",
                    lineHeight: 1.15,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {card.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    color: isActive ? "var(--muted)" : "rgba(255,255,255,0.35)",
                    lineHeight: 1.75,
                  }}
                >
                  {card.body}
                </p>

                {/* Bottom accent line */}
                {isActive && (
                  <div
                    style={{
                      marginTop: "1.75rem",
                      height: "2px",
                      background: `linear-gradient(90deg, ${card.accent} 0%, transparent 100%)`,
                      width: "40px",
                    }}
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", marginTop: "clamp(2.5rem, 4vw, 4rem)" }}>
        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Previous"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.6)",
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            transition: "all 0.2s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "rgba(28,184,200,0.15)";
            el.style.borderColor = "rgba(28,184,200,0.5)";
            el.style.color = "white";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "rgba(255,255,255,0.06)";
            el.style.borderColor = "rgba(255,255,255,0.15)";
            el.style.color = "rgba(255,255,255,0.6)";
          }}
        >
          ←
        </button>

        {/* Dots */}
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to card ${i + 1}`}
              style={{
                width: i === active ? "24px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === active ? "var(--aqua)" : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.4s ease",
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          aria-label="Next"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.6)",
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            transition: "all 0.2s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "rgba(28,184,200,0.15)";
            el.style.borderColor = "rgba(28,184,200,0.5)";
            el.style.color = "white";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "rgba(255,255,255,0.06)";
            el.style.borderColor = "rgba(255,255,255,0.15)";
            el.style.color = "rgba(255,255,255,0.6)";
          }}
        >
          →
        </button>
      </div>
    </section>
  );
}
