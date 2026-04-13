"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const navLinks = [
  { href: "/about",   label: "About"   },
  { href: "/shop",    label: "Shop"    },
  { href: "/journal", label: "Journal" },
  { href: "/events",  label: "Events"  },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Over the dark hero image: cream/white text
  // After scrolling onto light sections: espresso text
  const textColor    = scrolled ? "var(--muted)"   : "rgba(250,248,245,0.65)";
  const hoverColor   = scrolled ? "var(--gold)"    : "rgba(250,248,245,1)";
  const wordmarkColor = scrolled ? "var(--espresso)" : "rgba(250,248,245,0.92)";
  const wordmarkSub   = scrolled ? "var(--espresso)" : "rgba(250,248,245,0.7)";
  const iconColor     = scrolled ? "var(--espresso)" : "rgba(250,248,245,0.85)";

  return (
    <>
      {/* ── Main nav bar ── */}
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? "rgba(250,248,245,0.96)"
            : "transparent",
          borderBottomColor: scrolled
            ? "rgba(226,221,212,0.6)"
            : "transparent",
        }}
        transition={{ duration: 0.55, ease: EASE }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            padding: "0 var(--section-x)",
            display: "flex",
            alignItems: "center",
            height: scrolled ? "68px" : "78px",
            transition: "height 0.45s var(--ease-luxury)",
          }}
        >

          {/* ── Left nav (desktop) ── */}
          <nav
            style={{
              display: "none",
              flex: 1,
              gap: "clamp(1.5rem, 2.5vw, 2.5rem)",
              alignItems: "center",
            }}
            className="md:flex"
            aria-label="Primary navigation left"
          >
            {navLinks.slice(0, 2).map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                textColor={textColor}
                hoverColor={hoverColor}
              />
            ))}
          </nav>

          {/* ── Wordmark — centered ── */}
          <Link
            href="/"
            aria-label="Echoing Holistic Health — Home"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textDecoration: "none",
              gap: "0.2rem",
            }}
            className="md:flex-none md:mx-auto"
          >
            {/* "Echoing" — smaller, tracked */}
            <motion.span
              animate={{ color: wordmarkSub }}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(0.5rem, 0.75vw, 0.65rem)",
                fontWeight: 300,
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                display: "block",
                lineHeight: 1,
              }}
            >
              Echoing
            </motion.span>
            {/* "Holistic Health" — slightly larger, more prominent */}
            <motion.span
              animate={{ color: wordmarkColor }}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(0.72rem, 1.1vw, 0.92rem)",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                display: "block",
                lineHeight: 1,
              }}
            >
              Holistic Health
            </motion.span>
          </Link>

          {/* ── Right nav (desktop) ── */}
          <nav
            style={{
              display: "none",
              flex: 1,
              gap: "clamp(1.5rem, 2.5vw, 2.5rem)",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
            className="md:flex"
            aria-label="Primary navigation right"
          >
            {navLinks.slice(2).map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                textColor={textColor}
                hoverColor={hoverColor}
              />
            ))}
          </nav>

          {/* ── Mobile toggle ── */}
          <button
            className="md:hidden"
            style={{
              marginLeft: "auto",
              padding: "0.25rem",
              color: iconColor,
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.4s",
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.22, ease: EASE }}
                  style={{ display: "block" }}
                >
                  <X size={20} strokeWidth={1.25} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.22, ease: EASE }}
                  style={{ display: "block" }}
                >
                  <Menu size={20} strokeWidth={1.25} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ── Mobile fullscreen overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              backgroundColor: "var(--espresso)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            {/* Wordmark */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              style={{ textDecoration: "none", marginBottom: "3rem", textAlign: "center" }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.55rem",
                  fontWeight: 300,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "0.3rem",
                }}
              >
                Echoing
              </span>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(250,248,245,0.85)",
                }}
              >
                Holistic Health
              </span>
            </Link>

            {/* Thin gold rule */}
            <div
              style={{
                height: "1px",
                width: "36px",
                backgroundColor: "var(--gold)",
                opacity: 0.4,
                marginBottom: "3rem",
              }}
            />

            {/* Links */}
            <nav
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}
            >
              {[{ href: "/", label: "Home" }, ...navLinks].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
                >
                  <MobileNavLink href={link.href} label={link.label} onClose={() => setMenuOpen(false)} />
                </motion.div>
              ))}
            </nav>

            {/* Bottom signature */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              style={{
                position: "absolute",
                bottom: "2.5rem",
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "0.85rem",
                color: "var(--cream)",
              }}
            >
              Healing is not a trend.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ── Nav link with animated underline ────────────────────────────────────────
function NavLink({
  href,
  label,
  textColor,
  hoverColor,
}: {
  href: string;
  label: string;
  textColor: string;
  hoverColor: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "0.6rem",
        fontWeight: 500,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: hovered ? hoverColor : textColor,
        textDecoration: "none",
        transition: "color 0.35s var(--ease-luxury)",
        position: "relative",
        paddingBottom: "2px",
      }}
    >
      {label}
      <motion.span
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: EASE }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          backgroundColor: hovered ? hoverColor : "var(--gold)",
          transformOrigin: "left center",
          display: "block",
        }}
      />
    </Link>
  );
}

// ── Mobile nav link ──────────────────────────────────────────────────────────
function MobileNavLink({
  href,
  label,
  onClose,
}: {
  href: string;
  label: string;
  onClose: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onClick={onClose}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(1.6rem, 5.5vw, 2.4rem)",
        fontWeight: 300,
        letterSpacing: "-0.01em",
        color: hovered ? "var(--gold)" : "rgba(250,248,245,0.75)",
        textDecoration: "none",
        display: "block",
        textAlign: "center",
        transition: "color 0.3s var(--ease-luxury)",
      }}
    >
      {label}
    </Link>
  );
}
