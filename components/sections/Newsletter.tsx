"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-80px" } as const;

export default function Newsletter() {
  const [email, setEmail]         = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused]     = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section
      aria-label="Newsletter"
      style={{
        position: "relative",
        backgroundColor: "var(--espresso-mid)",
        overflow: "hidden",
      }}
    >
      {/* Radial warm glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 100% 70% at 50% 50%, rgba(184,150,90,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: `var(--section-y) var(--section-x)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2.5rem, 4vw, 4rem)" }}
        >
          <div style={{ height: "1px", width: "28px", background: "rgba(184,150,90,0.4)" }} />
          <span className="micro-label" style={{ color: "var(--gold)" }}>
            The Healing Circle
          </span>
          <div style={{ height: "1px", width: "28px", background: "rgba(184,150,90,0.4)" }} />
        </motion.div>

        {/* Headline — the dominant element */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
          style={{ marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3.2rem, 8vw, 9.5rem)",
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: "var(--cream)",
            }}
          >
            Stay in{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              alignment
            </em>
          </h2>
        </motion.div>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEW}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          style={{
            height: "1px",
            width: "60px",
            backgroundColor: "var(--gold)",
            opacity: 0.45,
            transformOrigin: "center",
            marginBottom: "clamp(1.5rem, 3vw, 3rem)",
          }}
        />

        {/* Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "rgba(250,248,245,0.5)",
            lineHeight: 1.75,
            maxWidth: "42ch",
            marginBottom: "clamp(2.5rem, 4vw, 4.5rem)",
          }}
        >
          Receive thoughtful guidance on gut health, hormones, and intentional
          living—delivered with clarity, not noise.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
          style={{ width: "100%", maxWidth: "480px" }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                  fontStyle: "italic",
                  color: "var(--gold)",
                  fontWeight: 300,
                  marginBottom: "0.5rem",
                }}
              >
                Welcome to the circle.
              </p>
              <p
                className="micro-label"
                style={{ color: "rgba(250,248,245,0.3)" }}
              >
                You will hear from us intentionally.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Input row */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  alignItems: "center",
                }}
                className="sm:flex-row"
              >
                <div style={{ flex: 1, width: "100%", position: "relative" }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder="Your email address"
                    required
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: `1px solid ${focused ? "var(--gold)" : "rgba(250,248,245,0.2)"}`,
                      outline: "none",
                      padding: "0.75rem 0",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.85rem",
                      fontWeight: 300,
                      color: "var(--cream)",
                      transition: "border-color 0.3s var(--ease-luxury)",
                      textAlign: "center",
                    }}
                    className="sm:text-left"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-outline-cream"
                  style={{ flexShrink: 0, whiteSpace: "nowrap" }}
                >
                  Join the Circle
                </button>
              </div>

              <p
                className="micro-label"
                style={{
                  color: "rgba(250,248,245,0.2)",
                  marginTop: "1.5rem",
                  display: "block",
                }}
              >
                No spam. No noise. Unsubscribe anytime.
              </p>
            </form>
          )}
        </motion.div>

        {/* Bottom decorative quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={VIEW}
          transition={{ duration: 1.2, ease: EASE, delay: 0.6 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(0.75rem, 1.2vw, 1rem)",
            fontStyle: "italic",
            color: "var(--gold)",
            marginTop: "clamp(4rem, 6vw, 7rem)",
            letterSpacing: "0.05em",
          }}
        >
          &ldquo;The body is not broken. It is responding.&rdquo;
        </motion.p>
      </div>

      {/* Bottom rule */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(184,150,90,0.25), transparent)",
        }}
      />
    </section>
  );
}
