"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const callouts = [
  {
    title: "Gut Healing",
    subtitle: "Restore digestion from within",
    href: "/focus/gut-health",
    position: { top: "22%", left: "3%" },
    align: "left" as const,
    delay: 0.7,
  },
  {
    title: "Inflammation",
    subtitle: "Address the root cause,\nnot just the symptoms",
    href: "/focus/inflammation-support",
    position: { top: "18%", right: "3%" },
    align: "right" as const,
    delay: 0.8,
  },
  {
    title: "Womb Health",
    subtitle: "Harmonize your hormones",
    href: "/focus/womb-wellness",
    position: { top: "56%", left: "3%" },
    align: "left" as const,
    delay: 0.9,
  },
  {
    title: "Lifestyle Healing",
    subtitle: "Live in connection\nwith your body",
    href: "/focus/hormonal-balance",
    position: { top: "56%", right: "3%" },
    align: "right" as const,
    delay: 1.0,
  },
];

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "620px",
        overflow: "hidden",
        backgroundColor: "#2A1F10",
      }}
    >
      {/* ── IMAGE ─────────────────────────────────────────────────────────── */}
      <Image
        src="/hero.jpg"
        alt="Echoing Holistic Health — Ecko holding the Gut Support formula"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "60% top" }}
        sizes="100vw"
      />

      {/* ── GRADIENT OVERLAYS ─────────────────────────────────────────────── */}
      {/* Top + bottom darkening */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, zIndex: 2,
          background: `linear-gradient(
            to bottom,
            rgba(26,18,8,0.55) 0%,
            rgba(26,18,8,0.08) 18%,
            transparent 35%,
            transparent 58%,
            rgba(26,18,8,0.6) 82%,
            rgba(26,18,8,0.92) 100%
          )`,
        }}
      />
      {/* Mobile only: left-side gradient so cover lines are readable */}
      <div
        aria-hidden="true"
        className="lg:hidden"
        style={{
          position: "absolute", inset: 0, zIndex: 2,
          background: `linear-gradient(
            to right,
            rgba(26,18,8,0.72) 0%,
            rgba(26,18,8,0.45) 35%,
            transparent 65%
          )`,
        }}
      />
      {/* Side vignette */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, zIndex: 2,
          background: `radial-gradient(ellipse 110% 100% at 50% 50%, transparent 45%, rgba(26,18,8,0.28) 100%)`,
        }}
      />

      {/* ── MOBILE MAGAZINE COVER ─────────────────────────────────────────── */}
      {/* Masthead */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
        className="lg:hidden"
        style={{
          position: "absolute",
          top: "clamp(5rem, 10vw, 6.5rem)",
          left: 0, right: 0,
          zIndex: 10,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.15rem",
        }}
      >
        <span style={{
          fontFamily: "var(--font-serif)",
          fontSize: "0.5rem",
          fontWeight: 300,
          letterSpacing: "0.45em",
          textTransform: "uppercase",
          color: "rgba(250,248,245,0.6)",
        }}>
          Echoing
        </span>
        <span style={{
          fontFamily: "var(--font-serif)",
          fontSize: "0.85rem",
          fontWeight: 500,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "rgba(250,248,245,0.92)",
        }}>
          Holistic Health
        </span>
        <div style={{ height: "1px", width: "32px", backgroundColor: "var(--gold)", opacity: 0.5, marginTop: "0.4rem" }} />
      </motion.div>

      {/* Mobile cover lines — left side, stacked vertically */}
      <div
        className="lg:hidden"
        style={{
          position: "absolute",
          top: "50%",
          left: "1.25rem",
          transform: "translateY(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {callouts.map((callout, i) => (
          <motion.div
            key={callout.href}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 + i * 0.1 }}
          >
            <Link href={callout.href} style={{ display: "block", textDecoration: "none" }}>
              {/* Gold tick */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.2rem" }}>
                <div style={{ height: "1px", width: "14px", backgroundColor: "var(--gold)", opacity: 0.9, flexShrink: 0 }} />
                <span style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  fontSize: "clamp(1.1rem, 4.5vw, 1.4rem)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "rgba(250,248,245,0.95)",
                  lineHeight: 1,
                  textShadow: "0 1px 12px rgba(26,18,8,0.7)",
                }}>
                  {callout.title}
                </span>
              </div>
              <p style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(0.72rem, 2.8vw, 0.85rem)",
                fontWeight: 300,
                color: "rgba(250,248,245,0.58)",
                lineHeight: 1.4,
                paddingLeft: "1.1rem",
              }}>
                {callout.subtitle.replace("\n", " ")}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ── DESKTOP CALLOUTS ──────────────────────────────────────────────── */}
      {callouts.map((callout, i) => (
        <DesktopCalloutLink key={callout.href} callout={callout} index={i} />
      ))}

      {/* ── BOTTOM QUOTE + CTA ────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 1.1 }}
        style={{
          position: "absolute",
          bottom: "clamp(2.5rem, 5vw, 4rem)",
          left: 0, right: 0,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(0.75rem, 1.5vw, 1.5rem)",
          padding: "0 var(--section-x)",
          textAlign: "center",
        }}
      >
        <p style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
          fontWeight: 300,
          color: "rgba(250,248,245,0.95)",
          lineHeight: 1.25,
          letterSpacing: "-0.02em",
          textShadow: "0 2px 24px rgba(26,18,8,0.5)",
        }}>
          &ldquo;Healing is not a trend.
          <br />
          It&rsquo;s a return to self.&rdquo;
        </p>
        <span className="micro-label" style={{ color: "var(--gold)", letterSpacing: "0.32em", fontSize: "0.6rem" }}>
          — Ecko
        </span>
        <div style={{ height: "1px", width: "40px", backgroundColor: "var(--gold)", opacity: 0.5 }} />
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/shop" className="btn-outline-cream">Shop the Collection →</Link>
          <Link href="/about" className="btn-outline-cream">Our Story</Link>
        </div>
      </motion.div>

      {/* ── SCROLL INDICATOR (desktop) ────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8 }}
        style={{
          position: "absolute",
          bottom: "1.25rem",
          right: "var(--section-x)",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
        }}
        className="hidden md:flex"
      >
        <motion.div
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "36px",
            background: "linear-gradient(to bottom, rgba(250,248,245,0.45), transparent)",
            transformOrigin: "top center",
          }}
        />
        <span className="micro-label" style={{ color: "rgba(250,248,245,0.22)", fontSize: "0.44rem" }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

// ── Desktop callout links (lg and above) ──────────────────────────────────────
function DesktopCalloutLink({
  callout,
}: {
  callout: (typeof callouts)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: callout.delay }}
      className="hidden lg:block"
      style={{
        position: "absolute",
        zIndex: 10,
        ...callout.position,
        textAlign: callout.align,
        maxWidth: "380px",
      }}
    >
      <Link
        href={callout.href}
        style={{ display: "block", textDecoration: "none" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "0.3rem",
          justifyContent: callout.align === "right" ? "flex-end" : "flex-start",
        }}>
          {callout.align === "right" && (
            <div style={{
              height: "1px",
              width: hovered ? "28px" : "16px",
              backgroundColor: "var(--gold)",
              transition: "width 0.35s var(--ease-luxury)",
              opacity: 0.8,
            }} />
          )}
          <span style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 600,
            fontSize: "clamp(2.8rem, 4.4vw, 4.4rem)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: hovered ? "var(--gold)" : "rgba(250,248,245,0.95)",
            transition: "color 0.35s var(--ease-luxury)",
            display: "block",
            lineHeight: 1,
            textShadow: "0 2px 16px rgba(26,18,8,0.6)",
          }}>
            {callout.title}
          </span>
          {callout.align === "left" && (
            <div style={{
              height: "1px",
              width: hovered ? "28px" : "16px",
              backgroundColor: "var(--gold)",
              transition: "width 0.35s var(--ease-luxury)",
              opacity: 0.8,
            }} />
          )}
        </div>

        <p style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "0.95rem",
          fontWeight: 300,
          color: "rgba(250,248,245,0.72)",
          lineHeight: 1.5,
          whiteSpace: "pre-line",
          transition: "color 0.35s var(--ease-luxury)",
        }}>
          {callout.subtitle}
        </p>

        <motion.span
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : (callout.align === "right" ? 4 : -4) }}
          transition={{ duration: 0.25, ease: EASE }}
          style={{
            display: "block",
            fontFamily: "var(--font-sans)",
            fontSize: "0.6rem",
            color: "var(--gold)",
            marginTop: "0.3rem",
          }}
        >
          {callout.align === "right" ? "← Explore" : "Explore →"}
        </motion.span>
      </Link>
    </motion.div>
  );
}
