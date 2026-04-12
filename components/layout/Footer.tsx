"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

const footerNav = [
  { label: "About",   href: "/about"   },
  { label: "Shop",    href: "/shop"    },
  { label: "Journal", href: "/journal" },
  { label: "Events",  href: "/events"  },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy",  href: "/privacy"  },
  { label: "Terms",    href: "/terms"    },
  { label: "Shipping", href: "/shipping" },
];

export default function Footer() {
  const [email,     setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused,   setFocused]   = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <footer
      style={{ backgroundColor: "var(--espresso)", color: "var(--cream)" }}
    >
      {/* Main footer */}
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: `clamp(4rem, 7vw, 8rem) var(--section-x) clamp(3rem, 5vw, 5rem)`,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(3rem, 5vw, 5rem)",
          }}
          className="md:grid-cols-3"
        >

          {/* ── Brand column ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <Link href="/" style={{ display: "block", marginBottom: "clamp(1.5rem, 2.5vw, 2rem)", textDecoration: "none" }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.55rem",
                  fontWeight: 300,
                  letterSpacing: "0.35em",
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
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(250,248,245,0.85)",
                  lineHeight: 1,
                }}
              >
                Holistic Health
              </span>
            </Link>

            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "1rem",
                fontWeight: 300,
                color: "rgba(250,248,245,0.38)",
                lineHeight: 1.65,
                marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
              }}
            >
              Healing is not a trend.<br />
              It&rsquo;s a return to self.
            </p>

            {/* Social */}
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {["Instagram", "Pinterest", "TikTok"].map((s) => (
                <FooterSocialLink key={s} label={s} />
              ))}
            </div>
          </motion.div>

          {/* ── Navigation column ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          >
            <p
              className="micro-label"
              style={{ color: "var(--gold)", marginBottom: "clamp(1.25rem, 2vw, 2rem)", display: "block" }}
            >
              Navigate
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {footerNav.map((link) => (
                <FooterNavLink key={link.href} href={link.href} label={link.label} />
              ))}
            </nav>
          </motion.div>

          {/* ── Newsletter micro-signup ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          >
            <p
              className="micro-label"
              style={{ color: "var(--gold)", marginBottom: "clamp(1.25rem, 2vw, 2rem)", display: "block" }}
            >
              The Healing Circle
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.95rem",
                fontWeight: 300,
                fontStyle: "italic",
                color: "rgba(250,248,245,0.45)",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              Receive thoughtful guidance—<br />
              delivered with clarity, not noise.
            </p>

            {submitted ? (
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                  color: "var(--gold)",
                }}
              >
                Welcome to the circle.
              </p>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
                    borderBottom: `1px solid ${focused ? "var(--gold)" : "rgba(250,248,245,0.15)"}`,
                    outline: "none",
                    padding: "0.6rem 0",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    fontWeight: 300,
                    color: "var(--cream)",
                    transition: "border-color 0.3s var(--ease-luxury)",
                  }}
                />
                <div>
                  <button
                    type="submit"
                    className="btn-outline-cream"
                    style={{ fontSize: "0.58rem", padding: "0.75rem 1.5rem" }}
                  >
                    Join the Circle
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(250,248,245,0.07)" }}>
        <div
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            padding: `1.25rem var(--section-x)`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
          className="md:flex-row"
        >
          <span
            className="micro-label"
            style={{ color: "rgba(250,248,245,0.2)", fontSize: "0.55rem" }}
          >
            &copy; {new Date().getFullYear()} Echoing Holistic Health. All rights reserved.
          </span>
          <nav style={{ display: "flex", gap: "1.5rem" }}>
            {legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="micro-label"
                style={{
                  color: "rgba(250,248,245,0.2)",
                  textDecoration: "none",
                  fontSize: "0.55rem",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,248,245,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,248,245,0.2)";
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterNavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      style={{
        fontFamily: "var(--font-serif)",
        fontSize: "1rem",
        fontWeight: 300,
        color: hovered ? "var(--cream)" : "rgba(250,248,245,0.5)",
        textDecoration: "none",
        transition: "color 0.3s var(--ease-luxury)",
        letterSpacing: "0.02em",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </Link>
  );
}

function FooterSocialLink({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      aria-label={label}
      className="micro-label"
      style={{
        color: hovered ? "var(--gold)" : "rgba(250,248,245,0.25)",
        textDecoration: "none",
        fontSize: "0.55rem",
        transition: "color 0.3s var(--ease-luxury)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  );
}
