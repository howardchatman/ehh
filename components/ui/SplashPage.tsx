"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const FOCUS_AREAS = [
  "Gut Support",
  "Hormonal Balance",
  "Energy & Focus",
  "Menopause Support",
  "General Wellness",
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
  const [nameFocused, setNameFocused]         = useState(false);
  const [emailFocused, setEmailFocused]       = useState(false);

  return (
    <div
      style={{
        minHeight: "100svh",
        backgroundColor: "var(--espresso)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(3rem, 6vw, 6rem) var(--section-x)",
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
            "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(184,150,90,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Featured image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: EASE }}
        style={{
          marginBottom: "clamp(2rem, 4vw, 3.5rem)",
          borderRadius: "4px",
          overflow: "hidden",
          boxShadow: "0 8px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(184,150,90,0.15)",
          maxWidth: "clamp(240px, 55vw, 380px)",
          width: "100%",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/image0.png"
          alt="Echoing Holistic Health — featured"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.08 }}
        style={{ marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}
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
        transition={{ duration: 0.8, ease: EASE, delay: 0.14 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "clamp(1.25rem, 2vw, 2rem)",
        }}
      >
        <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", opacity: 0.6 }} />
        <span className="micro-label" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>
          Exclusive Early Access
        </span>
        <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", opacity: 0.6 }} />
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2.8rem, 7.5vw, 8rem)",
          fontWeight: 300,
          lineHeight: 0.92,
          letterSpacing: "-0.03em",
          color: "var(--cream)",
          marginBottom: "clamp(1.25rem, 2.5vw, 2.25rem)",
        }}
      >
        Personalized Herbal
        <br />
        <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Wellness</em>
        <br />
        Is Coming.
      </motion.h1>

      {/* Subheadline */}
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
          maxWidth: "44ch",
          marginBottom: "clamp(2.5rem, 4vw, 4rem)",
        }}
      >
        Join the waitlist for customized tea blends designed to support your body,
        hormones, gut, energy, and healing journey.
      </motion.p>

      {/* Gold rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.38 }}
        style={{
          height: "1px",
          width: "50px",
          background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
          marginBottom: "clamp(2rem, 3.5vw, 3.5rem)",
          transformOrigin: "center",
        }}
      />

      {/* ── WAITLIST FORM ─────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.46 }}
        style={{ width: "100%", maxWidth: "400px", marginBottom: "clamp(3rem, 5vw, 5rem)" }}
      >
        {waitlistStatus === "success" ? (
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
              You&rsquo;re on the list.
            </p>
            <p className="micro-label" style={{ color: "rgba(250,248,245,0.3)" }}>
              We&rsquo;ll reach out with exclusive early access.
            </p>
          </motion.div>
        ) : (
          <form
            action={joinWaitlist}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {waitlistStatus === "duplicate" && (
              <p className="micro-label" style={{ color: "var(--gold)", letterSpacing: "0.15em" }}>
                This email is already on the waitlist.
              </p>
            )}
            {waitlistStatus === "error" && (
              <p className="micro-label" style={{ color: "var(--gold)", letterSpacing: "0.15em" }}>
                Something went wrong. Please try again.
              </p>
            )}

            <input
              type="text"
              name="name"
              placeholder="Your name"
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
              placeholder="Your email address"
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

            <select
              name="focus_area"
              defaultValue=""
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid rgba(250,248,245,0.18)",
                outline: "none",
                padding: "0.75rem 0",
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                fontWeight: 300,
                color: "rgba(250,248,245,0.5)",
                textAlign: "center",
                letterSpacing: "0.08em",
                cursor: "pointer",
                appearance: "none",
              }}
            >
              <option value="" disabled style={{ backgroundColor: "#1a1208" }}>
                What are you healing? (optional)
              </option>
              {FOCUS_AREAS.map((area) => (
                <option key={area} value={area} style={{ backgroundColor: "#1a1208", color: "var(--cream)" }}>
                  {area}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="btn-outline-cream"
              style={{ fontSize: "0.6rem", padding: "0.9rem 2.5rem", width: "100%" }}
            >
              Join the Waitlist
            </button>

            <p
              className="micro-label"
              style={{ color: "rgba(250,248,245,0.18)", marginTop: "-0.5rem" }}
            >
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </motion.div>

      {/* ── TEAM ACCESS ───────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.65 }}
        style={{ width: "100%", maxWidth: "360px" }}
      >
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(184,150,90,0.15), transparent)",
            marginBottom: "2rem",
          }}
        />

        <p
          className="micro-label"
          style={{ color: "rgba(250,248,245,0.15)", marginBottom: "1.25rem", letterSpacing: "0.2em" }}
        >
          Team Access
        </p>

        {hasError && (
          <p
            className="micro-label"
            style={{ color: "var(--gold)", letterSpacing: "0.15em", marginBottom: "1rem" }}
          >
            Incorrect access code.
          </p>
        )}

        <form
          action={action}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
        >
          <input
            type="password"
            name="password"
            placeholder="Access code"
            autoComplete="current-password"
            required
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              borderBottom: `1px solid ${passwordFocused ? "rgba(184,150,90,0.5)" : "rgba(250,248,245,0.1)"}`,
              outline: "none",
              padding: "0.6rem 0",
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              fontWeight: 300,
              color: "rgba(250,248,245,0.5)",
              textAlign: "center",
              letterSpacing: "0.15em",
              transition: "border-color 0.3s var(--ease-luxury)",
            }}
          />
          <button
            type="submit"
            style={{
              background: "transparent",
              border: "none",
              fontFamily: "var(--font-sans)",
              fontSize: "0.55rem",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(250,248,245,0.22)",
              cursor: "pointer",
              padding: "0.4rem 0",
              transition: "color 0.3s var(--ease-luxury)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(250,248,245,0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,248,245,0.22)")}
          >
            Enter
          </button>
        </form>
      </motion.div>

      {/* Bottom quote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.13 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.8 }}
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
