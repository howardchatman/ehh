"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-80px" } as const;

export default function WhySeaMoss() {
  return (
    <section
      aria-label="Why Sea Moss"
      style={{ backgroundColor: "var(--coastal)", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "var(--section-y) var(--section-x)",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(3rem, 6vw, 6rem)",
          alignItems: "center",
        }}
        className="lg:grid-cols-2"
      >
        {/* Left: Visual element */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEW}
          transition={{ duration: 1, ease: EASE }}
          style={{
            position: "relative",
            height: "clamp(300px, 45vw, 520px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Ocean depth visual */}
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(160deg, var(--ocean-mid) 0%, var(--ocean) 50%, #041828 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(28,184,200,0.15) 0%, transparent 65%)" }} />
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                aria-hidden="true"
                style={{
                  position: "absolute",
                  borderRadius: "50%",
                  border: "1px solid rgba(28,184,200,0.15)",
                  width: `${(i + 1) * 22}%`,
                  height: `${(i + 1) * 22}%`,
                }}
              />
            ))}
            <div style={{ textAlign: "center", position: "relative", zIndex: 2, padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 300, color: "var(--aqua)", lineHeight: 1, marginBottom: "0.5rem" }}>92</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                Naturally Occurring<br />Minerals
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE }}
            style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2rem, 3.5vw, 3rem)" }}
          >
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.4rem, 4.5vw, 5rem)",
              fontWeight: 300,
              lineHeight: 0.94,
              letterSpacing: "-0.025em",
              color: "var(--ocean)",
              marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
            }}
          >
            Nature&rsquo;s most
            <br />
            <em style={{ fontStyle: "italic", color: "var(--aqua)" }}>mineral-rich</em>
            <br />
            sea vegetable.
          </motion.h2>

          {[
            "Sea moss is a naturally mineral-rich sea vegetable that has been used for generations in wellness traditions around the world.",
            "At Echoing Holistic Health™, sea moss water serves as the foundation of our hydration blends — delivering 92 naturally occurring minerals directly to your body in every sip.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE, delay: 0.22 + i * 0.12 }}
              style={{
                fontFamily: i === 0 ? "var(--font-serif)" : "var(--font-sans)",
                fontSize: i === 0 ? "clamp(1rem, 1.35vw, 1.2rem)" : "0.875rem",
                fontWeight: 300,
                fontStyle: i === 0 ? "italic" : "normal",
                color: "var(--muted)",
                lineHeight: 1.85,
                marginBottom: "1.25rem",
              }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
