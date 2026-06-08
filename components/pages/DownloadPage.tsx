"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function DownloadPage({
  status,
  pdfUrl,
}: {
  status: "success" | "invalid";
  pdfUrl?: string;
}) {
  return (
    <div
      style={{
        minHeight: "100svh",
        background: "linear-gradient(160deg, var(--ocean) 0%, var(--ocean-mid) 100%)",
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
      {/* Glow */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(28,184,200,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        style={{ marginBottom: "clamp(3rem, 5vw, 5rem)", position: "relative", zIndex: 1 }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "0.5rem", fontWeight: 300, letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--aqua)", marginBottom: "0.25rem" }}>Echoing</span>
          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)" }}>Holistic Health™</span>
        </Link>
      </motion.div>

      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.1 }}
          style={{ position: "relative", zIndex: 1, maxWidth: "520px" }}
        >
          {/* Check icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              border: "2px solid var(--aqua)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto clamp(2rem, 3.5vw, 3rem)",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--aqua)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </motion.div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", opacity: 0.6 }} />
            <span className="micro-label" style={{ color: "var(--aqua)", letterSpacing: "0.22em" }}>Payment Confirmed</span>
            <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", opacity: 0.6 }} />
          </div>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              fontWeight: 300,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "var(--cream)",
              marginBottom: "clamp(1.25rem, 2vw, 2rem)",
            }}
          >
            Your recipe book
            <br />
            <em style={{ fontStyle: "italic", color: "var(--aqua)" }}>is ready.</em>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.85,
              marginBottom: "clamp(2.5rem, 4vw, 4rem)",
            }}
          >
            Thank you for your purchase. Your 20 Healing Tea Recipes eBook is
            ready to download. Save it to your device and start healing.
          </p>

          {/* Download button */}
          <a
            href={pdfUrl}
            download="20-Healing-Tea-Recipes-EHH.pdf"
            className="btn-ocean"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", fontSize: "0.65rem", padding: "1.1rem 3rem", marginBottom: "1.5rem" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Your PDF
          </a>

          <p className="micro-label" style={{ color: "rgba(255,255,255,0.2)", display: "block", marginBottom: "clamp(2rem, 3.5vw, 3.5rem)" }}>
            A receipt was sent to your email by Stripe.
          </p>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "clamp(2rem, 3vw, 3rem)", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/shop" className="btn-outline-ocean" style={{ fontSize: "0.58rem" }}>
              Shop Healing Water™
            </Link>
            <Link href="/community" className="btn-outline-ocean" style={{ fontSize: "0.58rem" }}>
              Join the Community
            </Link>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.1 }}
          style={{ position: "relative", zIndex: 1, maxWidth: "480px" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ height: "1px", width: "28px", backgroundColor: "rgba(255,255,255,0.2)" }} />
            <span className="micro-label" style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.22em" }}>Access Not Found</span>
            <div style={{ height: "1px", width: "28px", backgroundColor: "rgba(255,255,255,0.2)" }} />
          </div>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              color: "var(--cream)",
              marginBottom: "clamp(1.25rem, 2vw, 2rem)",
            }}
          >
            This link is
            <br />
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.4)" }}>not valid.</em>
          </h1>

          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.4)", lineHeight: 1.85, marginBottom: "2.5rem" }}>
            This page is only accessible immediately after a completed purchase.
            If you believe this is an error, please contact us.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/recipes/recipe-book" className="btn-ocean" style={{ fontSize: "0.6rem" }}>
              Buy the Recipe Book
            </Link>
            <a href="mailto:Contact@EchoingHolisticHealth.com" className="btn-outline-ocean" style={{ fontSize: "0.6rem" }}>
              Contact Us
            </a>
          </div>
        </motion.div>
      )}

      {/* Bottom quote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.8 }}
        style={{ position: "absolute", bottom: "2rem", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(0.65rem, 0.9vw, 0.8rem)", color: "var(--aqua)", letterSpacing: "0.05em" }}
      >
        Healing is not a trend. It&rsquo;s a return to self.
      </motion.p>
    </div>
  );
}
