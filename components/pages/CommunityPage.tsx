"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-80px" } as const;

const BENEFITS = [
  "Weekly wellness education",
  "Herbal wellness insights",
  "Healthy recipes",
  "Stress-management tools",
  "Nervous system support education",
  "Product launch updates",
  "Wellness event invitations",
  "Exclusive member offers",
];

export default function CommunityPage({
  action,
  joinedStatus,
}: {
  action: (formData: FormData) => Promise<void>;
  joinedStatus?: string;
}) {
  const [nameFocused,  setNameFocused]  = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  return (
    <div style={{ backgroundColor: "var(--ivory)" }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          backgroundColor: "var(--espresso)",
          overflow: "hidden",
          padding: "clamp(6rem, 12vw, 11rem) var(--section-x) clamp(4rem, 8vw, 8rem)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 55% at 50% 60%, rgba(184,150,90,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)" }}
        >
          <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", opacity: 0.6 }} />
          <span className="micro-label" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>
            Free to Join
          </span>
          <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", opacity: 0.6 }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.12 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3rem, 8vw, 8.5rem)",
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: "var(--cream)",
            marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
          }}
        >
          Welcome to the
          <br />
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>EHH Wellness</em>
          <br />
          Community
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.28 }}
          style={{
            height: "1px",
            width: "50px",
            background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
            transformOrigin: "center",
          }}
        />
      </section>

      {/* ── ABOUT + BENEFITS ─────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "var(--section-y) var(--section-x)",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(3rem, 6vw, 6rem)",
          alignItems: "start",
        }}
        className="lg:grid-cols-2"
      >
        {/* Left: About */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE }}
            style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2rem, 3vw, 3rem)" }}
          >
            <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", flexShrink: 0 }} />
            <span className="micro-label" style={{ color: "var(--gold)" }}>Our Community</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)",
              fontWeight: 300,
              color: "var(--charcoal)",
              lineHeight: 1.8,
              marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
            }}
          >
            At Echoing Holistic Health, we believe wellness starts with
            understanding your body.
          </motion.p>

          {[
            "Our community was created for women who want to reconnect with themselves through education, nourishment, intentional living, and holistic wellness practices.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE, delay: 0.22 + i * 0.1 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--muted)",
                lineHeight: 1.85,
              }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Right: Benefits */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEW}
          transition={{ duration: 1, ease: EASE, delay: 0.18 }}
        >
          <p
            className="micro-label"
            style={{ color: "var(--gold)", marginBottom: "2rem", letterSpacing: "0.2em" }}
          >
            As a Member You&rsquo;ll Receive
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {BENEFITS.map((benefit, i) => (
              <motion.li
                key={benefit}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.7, ease: EASE, delay: 0.26 + i * 0.06 }}
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <span style={{ color: "var(--gold)", fontSize: "0.9rem", flexShrink: 0 }}>✓</span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    color: "var(--charcoal)",
                    letterSpacing: "0.02em",
                    lineHeight: 1.5,
                  }}
                >
                  {benefit}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ── SIGN-UP FORM ─────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "var(--espresso)",
          padding: "var(--section-y) var(--section-x)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 50% at 50% 55%, rgba(184,150,90,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE }}
          style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "420px" }}
        >
          {joinedStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "var(--gold)",
                  marginBottom: "0.75rem",
                }}
              >
                Welcome to the community.
              </p>
              <p className="micro-label" style={{ color: "rgba(250,248,245,0.35)" }}>
                You&rsquo;ll hear from us with intention.
              </p>
            </motion.div>
          ) : (
            <>
              <p
                className="micro-label"
                style={{ color: "var(--gold)", letterSpacing: "0.2em", marginBottom: "2.5rem" }}
              >
                Join the Community
              </p>

              {joinedStatus === "duplicate" && (
                <p className="micro-label" style={{ color: "var(--gold)", marginBottom: "1.25rem" }}>
                  You&rsquo;re already a member.
                </p>
              )}
              {joinedStatus === "error" && (
                <p className="micro-label" style={{ color: "var(--gold)", marginBottom: "1.25rem" }}>
                  Something went wrong. Please try again.
                </p>
              )}

              <form
                action={action}
                style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  onFocus={() => setNameFocused(true)}
                  onBlur={() => setNameFocused(false)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: `1px solid ${nameFocused ? "var(--gold)" : "rgba(250,248,245,0.18)"}`,
                    outline: "none",
                    padding: "0.75rem 0",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    color: "var(--cream)",
                    textAlign: "center",
                    letterSpacing: "0.08em",
                    transition: "border-color 0.3s var(--ease-luxury)",
                  }}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: `1px solid ${emailFocused ? "var(--gold)" : "rgba(250,248,245,0.18)"}`,
                    outline: "none",
                    padding: "0.75rem 0",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    color: "var(--cream)",
                    textAlign: "center",
                    letterSpacing: "0.08em",
                    transition: "border-color 0.3s var(--ease-luxury)",
                  }}
                />

                <button
                  type="submit"
                  className="btn-outline-cream"
                  style={{ fontSize: "0.6rem", padding: "0.9rem 2.5rem", width: "100%", marginTop: "0.5rem" }}
                >
                  Join the Community
                </button>
              </form>
            </>
          )}
        </motion.div>
      </section>
    </div>
  );
}
