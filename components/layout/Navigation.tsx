"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const navLinks = [
  { href: "/shop",             label: "Shop"             },
  { href: "/recipes",          label: "Recipes"          },
  { href: "/where-to-find-us", label: "Where To Find Us" },
  { href: "/testimonials",     label: "Testimonials"     },
  { href: "/about",            label: "About"            },
  { href: "/faq",              label: "FAQ"              },
  { href: "/contact",          label: "Contact"          },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const textColor     = scrolled ? "var(--ocean-mid)"       : "rgba(255,255,255,0.78)";
  const hoverColor    = scrolled ? "var(--aqua)"            : "rgba(255,255,255,1)";
  const wordmarkColor = scrolled ? "var(--ocean)"           : "rgba(255,255,255,0.95)";
  const wordmarkSub   = scrolled ? "var(--aqua)"            : "rgba(255,255,255,0.6)";
  const iconColor     = scrolled ? "var(--ocean)"           : "rgba(255,255,255,0.85)";

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(242,250,251,0.97)" : "transparent",
          borderBottomColor: scrolled ? "rgba(208,232,236,0.8)" : "transparent",
        }}
        transition={{ duration: 0.5, ease: EASE }}
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
            justifyContent: "space-between",
            height: scrolled ? "64px" : "72px",
            transition: "height 0.45s var(--ease-luxury)",
            gap: "2rem",
          }}
        >
          {/* ── Wordmark (left) ── */}
          <Link
            href="/"
            aria-label="Echoing Holistic Health — Home"
            style={{ display: "flex", flexDirection: "column", textDecoration: "none", gap: "0.15rem", flexShrink: 0 }}
          >
            <motion.span
              animate={{ color: wordmarkSub }}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(0.42rem, 0.65vw, 0.56rem)",
                fontWeight: 300,
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Echoing
            </motion.span>
            <motion.span
              animate={{ color: wordmarkColor }}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(0.6rem, 0.95vw, 0.85rem)",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Holistic Health
            </motion.span>
            <motion.span
              animate={{ color: wordmarkSub }}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.38rem",
                fontWeight: 400,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Healing Water™
            </motion.span>
          </Link>

          {/* ── All links in a row (desktop) ── */}
          <nav
            aria-label="Primary navigation"
            style={{ display: "none", alignItems: "center", gap: "clamp(1.25rem, 2vw, 2.25rem)" }}
            className="lg:flex"
          >
            {navLinks.map((link) => (
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
            className="lg:hidden"
            style={{
              padding: "0.25rem",
              color: iconColor,
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.4s",
              flexShrink: 0,
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.span key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.22, ease: EASE }} style={{ display: "block" }}>
                  <X size={20} strokeWidth={1.25} />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.22, ease: EASE }} style={{ display: "block" }}>
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
              background: "linear-gradient(160deg, var(--ocean) 0%, var(--ocean-mid) 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            {/* Wordmark */}
            <Link href="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none", marginBottom: "2.5rem", textAlign: "center" }}>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "0.5rem", fontWeight: 300, letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--aqua)", marginBottom: "0.25rem" }}>Echoing</span>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)" }}>Holistic Health</span>
              <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.4rem", fontWeight: 400, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--aqua)", marginTop: "0.25rem" }}>Healing Water™</span>
            </Link>

            <div style={{ height: "1px", width: "36px", background: "linear-gradient(90deg, transparent, var(--aqua), transparent)", opacity: 0.5, marginBottom: "2.5rem" }} />

            <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.75rem" }}>
              {[{ href: "/", label: "Home" }, ...navLinks].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
                >
                  <MobileNavLink href={link.href} label={link.label} onClose={() => setMenuOpen(false)} />
                </motion.div>
              ))}
            </nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              style={{ position: "absolute", bottom: "2.5rem", fontFamily: "var(--font-sans)", fontSize: "0.5rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--aqua-light)" }}
            >
              Hydration. Wellness. Abundance.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, label, textColor, hoverColor }: { href: string; label: string; textColor: string; hoverColor: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "0.55rem",
        fontWeight: 500,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: hovered ? hoverColor : textColor,
        textDecoration: "none",
        transition: "color 0.3s var(--ease-luxury)",
        position: "relative",
        paddingBottom: "2px",
        whiteSpace: "nowrap",
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
          backgroundColor: "var(--aqua)",
          transformOrigin: "left center",
          display: "block",
        }}
      />
    </Link>
  );
}

function MobileNavLink({ href, label, onClose }: { href: string; label: string; onClose: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onClick={onClose}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(1.4rem, 5vw, 2.2rem)",
        fontWeight: 300,
        letterSpacing: "-0.01em",
        color: hovered ? "var(--aqua)" : "rgba(255,255,255,0.75)",
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
