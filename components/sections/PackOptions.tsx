"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import WaveDivider from "@/components/ui/WaveDivider";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

const PACKS = [
  { name: "Functional Hydration Starter Pack", price: "$46",  pouches: 4,  label: null,          image: "/4-pack.png",  note: "Mix & Match" },
  { name: "Weekly Hydration Pack",             price: "$88",  pouches: 8,  label: null,          image: "/8-pack.png",  note: null },
  { name: "Wellness Pack",                     price: "$132", pouches: 12, label: "Most Popular", image: "/12-pack.png", note: null },
  { name: "Monthly Hydration Supply",          price: "$252", pouches: 24, label: null,          image: "/24-pack.png", note: null },
  { name: "Family Pack",                       price: "$324", pouches: 36, label: null,          image: "/36-pack.png", note: null },
];

export default function PackOptions() {
  return (
    <section
      aria-label="Pack Options"
      style={{
        background: "linear-gradient(160deg, var(--ocean) 0%, var(--ocean-mid) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(28,184,200,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "var(--section-y) var(--section-x)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE }}
          style={{ textAlign: "center", marginBottom: "clamp(3rem, 5vw, 5rem)" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 6vw, 6.5rem)",
              fontWeight: 300,
              lineHeight: 0.92,
              letterSpacing: "-0.025em",
              color: "var(--cream)",
            }}
          >
            Hydrate on
            <br />
            <em style={{ fontStyle: "italic", color: "var(--aqua)" }}>your terms.</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
              color: "rgba(255,255,255,0.4)",
              marginTop: "1.25rem",
            }}
          >
            Houston delivery available · Minimum 4-pouch order · Local pickup available
          </p>
        </motion.div>

        {/* Pack grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(1rem, 1.5vw, 1.5rem)" }}
          className="sm:grid-cols-2 lg:grid-cols-5"
        >
          {PACKS.map((pack, i) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.07 }}
            >
              <PackCard pack={pack} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
          style={{ textAlign: "center", marginTop: "clamp(2.5rem, 4vw, 4rem)" }}
        >
          <Link href="/shop" className="btn-ocean">
            Shop Healing Water™
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function PackCard({ pack }: { pack: typeof PACKS[number] }) {
  const isPopular = pack.label === "Most Popular";
  return (
    <div
      style={{
        borderRadius: "20px",
        backgroundColor: isPopular ? "rgba(28,184,200,0.15)" : "rgba(255,255,255,0.06)",
        border: isPopular ? "1px solid rgba(28,184,200,0.4)" : "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        backdropFilter: "blur(8px)",
        transition: "transform 0.3s, background 0.3s",
      }}
    >
      {isPopular && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "var(--aqua)",
            padding: "0.25rem 0.75rem",
            zIndex: 2,
          }}
        >
          <span className="micro-label" style={{ color: "var(--ocean)", fontSize: "0.5rem" }}>Most Popular</span>
        </div>
      )}

      {/* Pack image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={pack.image}
        alt={pack.name}
        style={{ width: "100%", height: "auto", display: "block" }}
      />

      <div style={{ padding: "clamp(1.25rem, 2vw, 1.75rem)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.62rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              color: isPopular ? "var(--aqua)" : "rgba(255,255,255,0.5)",
              marginBottom: "0.4rem",
              textTransform: "uppercase",
            }}
          >
            {pack.name}
          </p>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)",
              fontWeight: 300,
              color: "var(--cream)",
              lineHeight: 1,
            }}
          >
            {pack.price}
          </p>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "0.75rem" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 300, color: "rgba(255,255,255,0.6)" }}>
            <strong style={{ color: "var(--cream)", fontWeight: 500 }}>{pack.pouches}</strong> Pouches
          </p>
          {pack.note && (
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.75rem", color: "var(--aqua-light)", marginTop: "0.25rem" }}>
              {pack.note}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
