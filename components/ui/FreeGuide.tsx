"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const IMAGES = [
  { src: "/2C2D0E72-680D-4887-A886-613B091AC28F.png", alt: "Ginger Mint Tea" },
  { src: "/7DFBF948-0DC6-4DFB-910D-F057CA29C106.png", alt: "Fennel Comfort Tea" },
  { src: "/5DCD7A37-D2CA-44E4-82D3-C04995DF93AE.png", alt: "Chamomile Belly Tea" },
  { src: "/B00EE985-E6DB-4E2D-81B7-F18C6644065A.png", alt: "Cinnamon Digest Tea" },
  { src: "/07B54CB7-5C07-4AC6-BF66-D6DB4ABA3AA6.png", alt: "Lemon Peel Tea" },
];

export default function FreeGuide() {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; margin: 0; padding: 0; }
          .print-page { padding: 0 !important; background: white !important; }
          .recipe-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; padding: 8px; }
          .recipe-img { width: 100%; height: auto; display: block; page-break-inside: avoid; }
          @page { margin: 0.5cm; size: A4 portrait; }
        }
      `}</style>

      <div
        className="print-page"
        style={{ minHeight: "100svh", backgroundColor: "var(--espresso)", padding: "clamp(3rem, 5vw, 5rem) var(--section-x)" }}
      >
        {/* Header — hidden when printing */}
        <div className="no-print" style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 4vw, 4rem)" }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "0.52rem", fontWeight: 300, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.3rem" }}>
              Echoing
            </span>
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(250,248,245,0.85)", marginBottom: "2rem" }}>
              Holistic Health
            </span>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.25rem" }}>
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", opacity: 0.5 }} />
              <span className="micro-label" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>
                Free Gut-Friendly Tea Collection
              </span>
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", opacity: 0.5 }} />
            </div>

            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.025em", color: "var(--cream)", marginBottom: "1.5rem" }}>
              5 Recipes to<br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Heal Your Gut</em>
            </h1>

            {/* Save as PDF button */}
            <button
              onClick={() => window.print()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--espresso)",
                backgroundColor: "var(--gold)",
                border: "1px solid var(--gold)",
                padding: "0.9rem 2.5rem",
                cursor: "pointer",
                transition: "background-color 0.3s, color 0.3s",
                marginBottom: "0.75rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--gold)";
                e.currentTarget.style.color = "var(--espresso)";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Save as PDF
            </button>

            <p className="micro-label" style={{ color: "rgba(250,248,245,0.2)", display: "block" }}>
              Click "Save as PDF" in your browser print dialog
            </p>
          </motion.div>
        </div>

        {/* Recipe images — this is what gets printed */}
        <div
          className="recipe-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "clamp(0.75rem, 1.5vw, 1.25rem)",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              className="no-print-animation"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              style={{ overflow: "hidden", border: "1px solid rgba(184,150,90,0.15)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="recipe-img"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Footer disclaimer — shown on print */}
        <div style={{ textAlign: "center", marginTop: "clamp(2rem, 3.5vw, 3.5rem)" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", color: "rgba(250,248,245,0.15)", lineHeight: 1.7 }} className="no-print">
            Echoing Holistic Health™ · Houston, Texas · EchoingHolisticHealth.com
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.55rem", color: "rgba(250,248,245,0.12)", lineHeight: 1.7 }} className="no-print">
            These statements have not been evaluated by the FDA. Not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary.
          </p>
        </div>
      </div>
    </>
  );
}
