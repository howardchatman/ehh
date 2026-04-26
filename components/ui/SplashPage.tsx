"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SplashPage({
  hasError,
  action,
}: {
  hasError: boolean;
  action: (formData: FormData) => Promise<never>;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      style={{
        minHeight: "100svh",
        backgroundColor: "var(--espresso)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(2.5rem, 6vw, 6rem) var(--section-x)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 55%, rgba(184,150,90,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        style={{ marginBottom: "clamp(3rem, 6vw, 6rem)" }}
      >
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-serif)",
            fontSize: "0.52rem",
            fontWeight: 300,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "var(--gold)",
            lineHeight: 1,
            marginBottom: "0.3rem",
          }}
        >
          Echoing
        </span>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-serif)",
            fontSize: "0.82rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(250,248,245,0.8)",
            lineHeight: 1,
          }}
        >
          Holistic Health
        </span>
      </motion.div>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
        }}
      >
        <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", opacity: 0.6 }} />
        <span
          className="micro-label"
          style={{ color: "var(--gold)", letterSpacing: "0.2em" }}
        >
          We&rsquo;re preparing something
        </span>
        <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", opacity: 0.6 }} />
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.18 }}
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(3.5rem, 9vw, 9rem)",
          fontWeight: 300,
          lineHeight: 0.9,
          letterSpacing: "-0.03em",
          color: "var(--cream)",
          marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
        }}
      >
        Something
        <br />
        <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
          intentional
        </em>
        <br />
        is taking shape.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 0.32 }}
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)",
          fontWeight: 300,
          color: "rgba(250,248,245,0.4)",
          lineHeight: 1.85,
          maxWidth: "38ch",
          marginBottom: "clamp(2.5rem, 4vw, 4.5rem)",
        }}
      >
        We are curating something worth waiting for.
        <br />
        Enter the access code to continue.
      </motion.p>

      {/* Gold rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.4 }}
        style={{
          height: "1px",
          width: "50px",
          background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
          marginBottom: "clamp(2rem, 3.5vw, 3.5rem)",
          transformOrigin: "center",
        }}
      />

      {/* Error message */}
      {hasError && (
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="micro-label"
          style={{
            color: "var(--gold)",
            letterSpacing: "0.15em",
            marginBottom: "1rem",
          }}
        >
          Incorrect access code. Please try again.
        </motion.p>
      )}

      {/* Password form */}
      <motion.form
        action={action}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.48 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
          width: "100%",
          maxWidth: "360px",
        }}
      >
        <input
          type="password"
          name="password"
          placeholder="Access code"
          autoComplete="current-password"
          required
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            background: "transparent",
            border: "none",
            borderBottom: `1px solid ${focused ? "var(--gold)" : "rgba(250,248,245,0.18)"}`,
            outline: "none",
            padding: "0.75rem 0",
            fontFamily: "var(--font-sans)",
            fontSize: "0.875rem",
            fontWeight: 300,
            color: "var(--cream)",
            textAlign: "center",
            letterSpacing: "0.15em",
            transition: "border-color 0.3s var(--ease-luxury)",
          }}
        />
        <button
          type="submit"
          className="btn-outline-cream"
          style={{ fontSize: "0.58rem", padding: "0.9rem 2.5rem", width: "100%" }}
        >
          Enter
        </button>
      </motion.form>

      {/* Bottom quote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.13 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.7 }}
        style={{
          position: "absolute",
          bottom: "clamp(1.5rem, 3vw, 2.5rem)",
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "clamp(0.65rem, 0.9vw, 0.8rem)",
          color: "var(--gold)",
          letterSpacing: "0.05em",
        }}
      >
        Healing is not a trend. It&rsquo;s a return to self.
      </motion.p>
    </div>
  );
}
