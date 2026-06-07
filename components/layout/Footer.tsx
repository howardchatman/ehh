"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

const footerNav = [
  { label: "Home",             href: "/"                  },
  { label: "Shop",             href: "/shop"              },
  { label: "Recipes",          href: "/recipes"           },
  { label: "Where To Find Us", href: "/where-to-find-us"  },
  { label: "Testimonials",     href: "/testimonials"      },
  { label: "About",            href: "/about"             },
  { label: "FAQ",              href: "/faq"               },
  { label: "Contact",          href: "/contact"           },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy"    },
  { label: "Terms",          href: "/terms"      },
  { label: "Disclaimer",     href: "/disclaimer" },
  { label: "Shipping",       href: "/shipping"   },
  { label: "Delivery",       href: "/delivery"   },
  { label: "Refund Policy",  href: "/refunds"    },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--ocean)", color: "var(--cream)" }}>
      {/* Main footer */}
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "clamp(4rem, 7vw, 8rem) var(--section-x) clamp(3rem, 5vw, 5rem)",
        }}
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(3rem, 5vw, 5rem)" }}
          className="md:grid-cols-3"
        >
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <Link href="/" style={{ display: "block", marginBottom: "clamp(1.5rem, 2.5vw, 2rem)", textDecoration: "none" }}>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "0.5rem", fontWeight: 300, letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--aqua)", lineHeight: 1, marginBottom: "0.25rem" }}>
                Echoing
              </span>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", lineHeight: 1, marginBottom: "0.25rem" }}>
                Holistic Health™
              </span>
              <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.42rem", fontWeight: 400, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--aqua-light)" }}>
                Healing Water™
              </span>
            </Link>

            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.35)", lineHeight: 1.65, marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)" }}>
              Hydration. Wellness. Abundance.
            </p>

            <a
              href="mailto:Contact@EchoingHolisticHealth.com"
              style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 300, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: "0.6rem", transition: "color 0.3s var(--ease-luxury)", letterSpacing: "0.02em" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--aqua)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)")}
            >
              Contact@EchoingHolisticHealth.com
            </a>
            <a
              href="https://www.EchoingHolisticHealth.com"
              style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 300, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: "clamp(1.25rem, 2vw, 1.75rem)", transition: "color 0.3s var(--ease-luxury)", letterSpacing: "0.02em" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--aqua)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)")}
            >
              EchoingHolisticHealth.com
            </a>

            <div style={{ display: "flex", gap: "1.5rem" }}>
              {["Instagram", "TikTok", "Pinterest"].map((s) => (
                <FooterSocialLink key={s} label={s} />
              ))}
            </div>
          </motion.div>

          {/* Navigation column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          >
            <p className="micro-label" style={{ color: "var(--aqua)", marginBottom: "clamp(1.25rem, 2vw, 2rem)", display: "block" }}>
              Navigate
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {footerNav.map((link) => (
                <FooterNavLink key={link.href} href={link.href} label={link.label} />
              ))}
            </nav>
          </motion.div>

          {/* Community sign-up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          >
            <p className="micro-label" style={{ color: "var(--aqua)", marginBottom: "clamp(1.25rem, 2vw, 2rem)", display: "block" }}>
              Join the Community
            </p>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", fontWeight: 300, fontStyle: "italic", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Product announcements, wellness tips,
              healthy recipes, and exclusive offers.
            </p>
            <Link href="/community" className="btn-outline-ocean" style={{ fontSize: "0.55rem", padding: "0.75rem 1.5rem" }}>
              Join Free
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Disclaimers */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", backgroundColor: "rgba(0,0,0,0.15)" }}>
        <div
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            padding: "clamp(1.5rem, 3vw, 2.5rem) var(--section-x)",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 300, color: "rgba(255,255,255,0.2)", lineHeight: 1.7 }}>
            These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 300, color: "rgba(255,255,255,0.2)", lineHeight: 1.7 }}>
            The information provided on this website is for educational and informational purposes only and is not intended as medical advice. Always consult a qualified healthcare professional regarding health concerns. Individual experiences may vary.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 300, color: "rgba(255,255,255,0.2)", lineHeight: 1.7 }}>
            Due to the perishable nature of our products, all sales are final unless an error occurred with the order. Please review our full Refund Policy before purchasing.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            padding: "1.25rem var(--section-x)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
          className="md:flex-row"
        >
          <span className="micro-label" style={{ color: "rgba(255,255,255,0.18)", fontSize: "0.55rem" }}>
            &copy; {new Date().getFullYear()} Echoing Holistic Health™. All rights reserved. Houston, Texas.
          </span>
          <nav style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem 1.5rem" }}>
            {legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="micro-label"
                style={{ color: "rgba(255,255,255,0.18)", textDecoration: "none", fontSize: "0.5rem", transition: "color 0.3s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.18)")}
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
      style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", fontWeight: 300, color: hovered ? "var(--aqua-light)" : "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.3s var(--ease-luxury)", letterSpacing: "0.02em" }}
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
      style={{ color: hovered ? "var(--aqua)" : "rgba(255,255,255,0.25)", textDecoration: "none", fontSize: "0.55rem", transition: "color 0.3s var(--ease-luxury)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  );
}
