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
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Main nav bar ── */}
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(250,248,245,0.96)" : "transparent",
          borderBottomColor: scrolled ? "rgba(226,221,212,0.8)" : "transparent",
        }}
        transition={{ duration: 0.5, ease: EASE }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: "1px solid transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            padding: "0 var(--section-x)",
            display: "flex",
            alignItems: "center",
            height: scrolled ? "68px" : "80px",
            transition: "height 0.4s var(--ease-luxury)",
          }}
        >

          {/* ── Left nav links (desktop) ── */}
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
              <NavLink key={link.href} href={link.href} label={link.label} />
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
            }}
            className="md:flex-none md:mx-auto"
          >
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(0.55rem, 0.9vw, 0.7rem)",
                fontWeight: 300,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "var(--espresso)",
                display: "block",
                lineHeight: 1,
                marginBottom: "0.2rem",
              }}
            >
              Echoing
            </span>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(0.75rem, 1.15vw, 0.95rem)",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--espresso)",
                display: "block",
                lineHeight: 1,
              }}
            >
              Holistic Health
            </span>
          </Link>

          {/* ── Right nav links (desktop) ── */}
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
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* ── Mobile menu toggle ── */}
          <button
            className="md:hidden"
            style={{
              marginLeft: "auto",
              padding: "0.25rem",
              color: "var(--espresso)",
              background: "none",
              border: "none",
              cursor: "pointer",
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
                  transition={{ duration: 0.25, ease: EASE }}
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
                  transition={{ duration: 0.25, ease: EASE }}
                  style={{ display: "block" }}
                >
                  <Menu size={20} strokeWidth={1.25} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ── Mobile overlay menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              backgroundColor: "var(--cream)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              style={{ textDecoration: "none", marginBottom: "3.5rem", textAlign: "center" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.6rem",
                  fontWeight: 300,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  display: "block",
                  marginBottom: "0.25rem",
                }}
              >
                Echoing
              </span>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--espresso)",
                  display: "block",
                }}
              >
                Holistic Health
              </span>
            </Link>

            {/* Gold rule */}
            <div
              style={{
                height: "1px",
                width: "40px",
                backgroundColor: "var(--gold)",
                opacity: 0.5,
                marginBottom: "3.5rem",
              }}
            />

            {/* Links */}
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2.25rem",
              }}
              aria-label="Mobile navigation"
            >
              {[{ href: "/", label: "Home" }, ...navLinks].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
                      fontWeight: 300,
                      letterSpacing: "-0.01em",
                      color: "var(--espresso)",
                      textDecoration: "none",
                      display: "block",
                      textAlign: "center",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--espresso)";
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom signature */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                position: "absolute",
                bottom: "2.5rem",
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "0.9rem",
                color: "var(--muted)",
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

// ── Single nav link with hover underline ──────────────────────────────────
function NavLink({ href, label }: { href: string; label: string }) {
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
        color: hovered ? "var(--gold)" : "var(--muted)",
        textDecoration: "none",
        transition: "color 0.3s var(--ease-luxury)",
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
          backgroundColor: "var(--gold)",
          transformOrigin: "left center",
          display: "block",
        }}
      />
    </Link>
  );
}
