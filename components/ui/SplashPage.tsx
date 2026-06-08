"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const FREE_TEAS = [
  "Ginger Mint Tea",
  "Fennel Comfort Tea",
  "Chamomile Belly Tea",
  "Cinnamon Digest Tea",
  "Lemon Peel Tea",
];

export default function SplashPage({
  hasError,
  action,
  joinWaitlist,
  waitlistStatus,
}: {
  hasError: boolean;
  action: (formData: FormData) => Promise<void>;
  joinWaitlist: (formData: FormData) => Promise<void>;
  waitlistStatus?: string;
}) {
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [nameFocused,     setNameFocused]     = useState(false);
  const [emailFocused,    setEmailFocused]     = useState(false);

  return (
    <div
      style={{
        minHeight: "100svh",
        backgroundColor: "var(--espresso)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(4rem, 7vw, 7rem) var(--section-x)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(184,150,90,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        style={{ marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}
      >
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "0.52rem", fontWeight: 300, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold)", lineHeight: 1, marginBottom: "0.3rem" }}>
          Echoing
        </span>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(250,248,245,0.85)", lineHeight: 1 }}>
          Holistic Health
        </span>
      </motion.div>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
        style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(1.25rem, 2vw, 2rem)" }}
      >
        <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", opacity: 0.5 }} />
        <span className="micro-label" style={{ color: "var(--gold)", letterSpacing: "0.22em" }}>
          Join Before Launch
        </span>
        <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", opacity: 0.5 }} />
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2.6rem, 7vw, 7.5rem)",
          fontWeight: 300,
          lineHeight: 0.92,
          letterSpacing: "-0.03em",
          color: "var(--cream)",
          marginBottom: "clamp(1.25rem, 2vw, 2rem)",
        }}
      >
        Join the Community.
        <br />
        <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Receive a Free Gift.</em>
      </motion.h1>

      {/* Body copy */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 0.3 }}
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)",
          fontWeight: 300,
          color: "rgba(250,248,245,0.45)",
          lineHeight: 1.85,
          maxWidth: "46ch",
          marginBottom: "clamp(2rem, 3vw, 3rem)",
        }}
      >
        As a thank you for supporting Echoing Holistic Health™ before our official
        launch, everyone who joins today will receive our free
        Gut-Friendly Tea Collection.
      </motion.p>

      {/* Free collection card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.38 }}
        style={{
          width: "100%",
          maxWidth: "400px",
          border: "1px solid rgba(184,150,90,0.2)",
          padding: "clamp(1.5rem, 2.5vw, 2rem)",
          marginBottom: "clamp(2rem, 3.5vw, 3.5rem)",
          backgroundColor: "rgba(184,150,90,0.04)",
        }}
      >
        <p className="micro-label" style={{ color: "var(--gold)", marginBottom: "1.25rem", letterSpacing: "0.2em" }}>
          Free Gut-Friendly Tea Collection
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
          {FREE_TEAS.map((tea) => (
            <li key={tea} style={{ display: "flex", alignItems: "center", gap: "0.75rem", justifyContent: "center" }}>
              <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--gold)", opacity: 0.6, flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.9rem", fontWeight: 300, color: "rgba(250,248,245,0.65)" }}>
                {tea}
              </span>
            </li>
          ))}
        </ul>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.75rem", color: "rgba(250,248,245,0.25)", marginTop: "1.25rem", lineHeight: 1.7 }}>
          Each recipe includes ingredients, preparation instructions,<br />and traditional uses.
        </p>
      </motion.div>

      {/* Gold rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.44 }}
        style={{ height: "1px", width: "50px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", marginBottom: "clamp(2rem, 3.5vw, 3.5rem)", transformOrigin: "center" }}
      />

      {/* ── FORM ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
        style={{ width: "100%", maxWidth: "400px", marginBottom: "clamp(3rem, 5vw, 5rem)" }}
      >
        {waitlistStatus === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.2rem, 2vw, 1.5rem)", fontStyle: "italic", color: "var(--gold)", fontWeight: 300, marginBottom: "0.5rem" }}>
              Welcome to the community.
            </p>
            <p className="micro-label" style={{ color: "rgba(250,248,245,0.3)", marginBottom: "1.5rem" }}>
              Your free tea collection is on the way.
            </p>
            <a
              href="/thank-you"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.58rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(184,150,90,0.4)",
                paddingBottom: "2px",
              }}
            >
              View your free recipes →
            </a>
          </motion.div>
        ) : (
          <form action={joinWaitlist} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {waitlistStatus === "duplicate" && (
              <p className="micro-label" style={{ color: "var(--gold)", letterSpacing: "0.15em" }}>You&rsquo;re already on the list.</p>
            )}
            {waitlistStatus === "error" && (
              <p className="micro-label" style={{ color: "var(--gold)", letterSpacing: "0.15em" }}>Something went wrong. Please try again.</p>
            )}

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              style={{
                width: "100%", background: "transparent", border: "none",
                borderBottom: `1px solid ${nameFocused ? "var(--gold)" : "rgba(250,248,245,0.18)"}`,
                outline: "none", padding: "0.75rem 0",
                fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 300,
                color: "var(--cream)", textAlign: "center", letterSpacing: "0.08em",
                transition: "border-color 0.3s var(--ease-luxury)",
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              style={{
                width: "100%", background: "transparent", border: "none",
                borderBottom: `1px solid ${emailFocused ? "var(--gold)" : "rgba(250,248,245,0.18)"}`,
                outline: "none", padding: "0.75rem 0",
                fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 300,
                color: "var(--cream)", textAlign: "center", letterSpacing: "0.08em",
                transition: "border-color 0.3s var(--ease-luxury)",
              }}
            />

            <button type="submit" className="btn-outline-cream" style={{ fontSize: "0.6rem", padding: "0.9rem 2.5rem", width: "100%" }}>
              Join the Community
            </button>

            <p className="micro-label" style={{ color: "rgba(250,248,245,0.18)", marginTop: "-0.5rem" }}>
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </motion.div>

      {/* ── TEAM ACCESS ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.65 }}
        style={{ width: "100%", maxWidth: "360px" }}
      >
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(184,150,90,0.12), transparent)", marginBottom: "2rem" }} />
        <p className="micro-label" style={{ color: "rgba(250,248,245,0.12)", marginBottom: "1.25rem", letterSpacing: "0.2em" }}>Team Access</p>

        {hasError && (
          <p className="micro-label" style={{ color: "var(--gold)", letterSpacing: "0.15em", marginBottom: "1rem" }}>Incorrect access code.</p>
        )}

        <form action={action} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <input
            type="password"
            name="password"
            placeholder="Access code"
            autoComplete="current-password"
            required
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            style={{
              width: "100%", background: "transparent", border: "none",
              borderBottom: `1px solid ${passwordFocused ? "rgba(184,150,90,0.45)" : "rgba(250,248,245,0.08)"}`,
              outline: "none", padding: "0.6rem 0",
              fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 300,
              color: "rgba(250,248,245,0.4)", textAlign: "center", letterSpacing: "0.15em",
              transition: "border-color 0.3s var(--ease-luxury)",
            }}
          />
          <button
            type="submit"
            style={{ background: "transparent", border: "none", fontFamily: "var(--font-sans)", fontSize: "0.55rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(250,248,245,0.18)", cursor: "pointer", padding: "0.4rem 0", transition: "color 0.3s var(--ease-luxury)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(250,248,245,0.45)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,248,245,0.18)")}
          >
            Enter
          </button>
        </form>
      </motion.div>

      {/* Bottom tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.85 }}
        style={{ position: "absolute", bottom: "clamp(1.5rem, 3vw, 2.5rem)", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(0.65rem, 0.9vw, 0.8rem)", color: "var(--gold)", letterSpacing: "0.05em" }}
      >
        Hydration. Wellness. Abundance.
      </motion.p>
    </div>
  );
}
