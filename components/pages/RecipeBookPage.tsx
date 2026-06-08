"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

// ── Swap this with the Stripe Payment Link ────────────────────────────────
// Steps:
//  1. Go to dashboard.stripe.com → Payment Links → Create
//  2. Add product "20 Healing Tea Recipes" → $9
//  3. Under "After payment" → set redirect URL to:
//     https://echoingholistichealth.com/download?session_id={CHECKOUT_SESSION_ID}
//  4. Copy the payment link and paste below
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/PASTE_LINK_HERE";
// ──────────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    name: "Gut Healing",
    color: "var(--aqua)",
    count: 5,
    recipes: [
      "Sea Moss & Ginger Gut Reset Tea",
      "Slippery Elm Gut Lining Repair Tea",
      "Fennel & Peppermint Bloat Buster",
      "Dandelion Root Digestive Cleanse",
      "Licorice Root & Marshmallow Soothe Tea",
    ],
  },
  {
    name: "Hormonal Balance",
    color: "var(--gold)",
    count: 4,
    recipes: [
      "Red Raspberry Leaf & Sea Moss Hormone Tea",
      "Maca & Cinnamon Cycle Support Tea",
      "Ashwagandha & Tulsi Adaptogen Tonic",
      "Wild Yam & Ginger Balance Tea",
    ],
  },
  {
    name: "Energy & Focus",
    color: "#5BC4A0",
    count: 4,
    recipes: [
      "Sea Moss Matcha Morning Tonic",
      "Peppermint & Rosemary Focus Tea",
      "Ginseng & Turmeric Vitality Brew",
      "Yerba Mate & Lemon Clarity Tea",
    ],
  },
  {
    name: "Immune Support",
    color: "#E8A83A",
    count: 4,
    recipes: [
      "Elderberry & Sea Moss Immune Tonic",
      "Echinacea & Lemon Zinger Tea",
      "Turmeric Fire Cider Tonic",
      "Ginger & Raw Honey Defense Tea",
    ],
  },
  {
    name: "Stress & Nervous System",
    color: "#9B8EC4",
    count: 3,
    recipes: [
      "Lavender & Chamomile Calm Tea",
      "Passionflower & Lemon Balm Nerve Tea",
      "Ashwagandha & Sea Moss Restore Tonic",
    ],
  },
];

const TOTAL = CATEGORIES.reduce((sum, c) => sum + c.count, 0);

export default function RecipeBookPage() {
  return (
    <div style={{ backgroundColor: "var(--coastal)" }}>

      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(160deg, var(--ocean) 0%, var(--ocean-mid) 100%)",
          padding: "clamp(7rem, 12vw, 10rem) var(--section-x) clamp(5rem, 8vw, 8rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 55% at 60% 50%, rgba(28,184,200,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div
          style={{ maxWidth: "var(--container)", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "center", position: "relative", zIndex: 1 }}
          className="lg:grid-cols-2"
        >
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: EASE }}
              style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)" }}
            >
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", opacity: 0.6 }} />
              <span className="micro-label" style={{ color: "var(--aqua)", letterSpacing: "0.22em" }}>Digital eBook · Instant Download</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 6vw, 6.5rem)", fontWeight: 300, lineHeight: 0.92, letterSpacing: "-0.03em", color: "var(--cream)", marginBottom: "clamp(1.25rem, 2vw, 2rem)" }}
            >
              {TOTAL} Healing Tea
              <br />
              <em style={{ fontStyle: "italic", color: "var(--aqua)" }}>Recipes</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.22 }}
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)", fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.85, maxWidth: "44ch", marginBottom: "clamp(2rem, 3.5vw, 3.5rem)" }}
            >
              Sea moss-powered herbal teas for gut healing, hormonal balance,
              energy, immune support, and nervous system repair — all in one
              beautifully designed PDF guide.
            </motion.p>

            {/* Category chips */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "clamp(2.5rem, 4vw, 4rem)" }}
            >
              {CATEGORIES.map((cat) => (
                <span key={cat.name} style={{ fontFamily: "var(--font-sans)", fontSize: "0.58rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: cat.color, border: `1px solid ${cat.color}40`, padding: "0.3rem 0.8rem", backgroundColor: `${cat.color}10` }}>
                  {cat.name}
                </span>
              ))}
            </motion.div>

            {/* Price + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.38 }}
              style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}
            >
              <div>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 1 }}>$9</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", display: "block", marginTop: "0.2rem" }}>One-time · Instant PDF download</span>
              </div>
              <a
                href={STRIPE_PAYMENT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ocean"
                style={{ fontSize: "0.65rem", padding: "1rem 2.5rem" }}
              >
                Buy Now — $9
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
              className="micro-label"
              style={{ color: "rgba(255,255,255,0.2)", marginTop: "1rem" }}
            >
              Secure checkout via Stripe · Download immediately after purchase
            </motion.p>
          </div>

          {/* Right: Book cover mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                width: "clamp(240px, 40vw, 340px)",
                aspectRatio: "3/4",
                background: "linear-gradient(145deg, #0D3D5A 0%, var(--ocean) 50%, #041828 100%)",
                border: "1px solid rgba(28,184,200,0.3)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5), 12px 12px 0 rgba(28,184,200,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2.5rem",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative rings */}
              {[0,1,2].map((i) => (
                <div key={i} aria-hidden="true" style={{ position: "absolute", borderRadius: "50%", border: "1px solid rgba(28,184,200,0.08)", width: `${(i+1)*40}%`, height: `${(i+1)*40}%` }} />
              ))}
              <div style={{ position: "relative", zIndex: 1 }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--aqua)", marginBottom: "1.5rem" }}>Echoing Holistic Health™</p>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 300, lineHeight: 1.1, color: "var(--cream)", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>{TOTAL} Healing</p>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 300, lineHeight: 1.1, color: "var(--cream)", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>Tea Recipes</p>
                <div style={{ height: "1px", width: "40px", background: "linear-gradient(90deg, transparent, var(--aqua), transparent)", margin: "1.25rem auto" }} />
                <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>Gut · Hormones · Energy<br />Immunity · Nervous System</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.45rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginTop: "1.5rem" }}>From the Source to the Body™</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ── */}
      <section style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "var(--section-y) var(--section-x)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE }}
          style={{ textAlign: "center", marginBottom: "clamp(3rem, 5vw, 5rem)" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", opacity: 0.6 }} />
            <span className="micro-label" style={{ color: "var(--aqua)" }}>What&rsquo;s Inside</span>
            <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", opacity: 0.6 }} />
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.4rem, 5vw, 5rem)", fontWeight: 300, lineHeight: 0.92, letterSpacing: "-0.025em", color: "var(--ocean)" }}>
            {TOTAL} recipes across
            <br />
            <em style={{ fontStyle: "italic", color: "var(--aqua)" }}>5 wellness areas.</em>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(1.5rem, 2vw, 2rem)" }} className="md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.07 }}
              style={{ backgroundColor: "white", border: "1px solid var(--border)", overflow: "hidden" }}
            >
              <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "var(--coastal)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: cat.color, flexShrink: 0 }} />
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 400, color: "var(--ocean)", lineHeight: 1 }}>{cat.name}</h3>
                </div>
                <span className="micro-label" style={{ color: cat.color }}>{cat.count} recipes</span>
              </div>
              <ul style={{ listStyle: "none", padding: "1.25rem 1.5rem", margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {cat.recipes.map((recipe) => (
                  <li key={recipe} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                    <span style={{ color: cat.color, fontSize: "0.65rem", flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.5 }}>{recipe}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Summary card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.8, ease: EASE, delay: CATEGORIES.length * 0.07 }}
            style={{ background: "linear-gradient(145deg, var(--ocean) 0%, var(--ocean-mid) 100%)", border: "1px solid rgba(28,184,200,0.25)", padding: "clamp(1.5rem, 2.5vw, 2.5rem)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "2rem" }}
          >
            <div>
              <p className="micro-label" style={{ color: "var(--aqua)", marginBottom: "1.25rem" }}>Everything You Get</p>
              {[
                `${TOTAL} complete herbal tea recipes`,
                "Full ingredient lists",
                "Step-by-step instructions",
                "Why It Works — the science behind each recipe",
                "Beautifully designed PDF",
                "Instant download after purchase",
                "Yours to keep forever",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginBottom: "0.6rem" }}>
                  <span style={{ color: "var(--aqua)", fontSize: "0.65rem", flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 300, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem", marginBottom: "1.25rem" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 3.5vw, 3rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 1 }}>$9</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", color: "rgba(255,255,255,0.35)", display: "block", marginTop: "0.2rem", letterSpacing: "0.1em" }}>One-time purchase</span>
              </div>
              <a
                href={STRIPE_PAYMENT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ocean"
                style={{ display: "block", textAlign: "center", width: "100%" }}
              >
                Buy Now — $9
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST + FAQ ── */}
      <section style={{ backgroundColor: "white", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "var(--section-y) var(--section-x)" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE }}
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}
            className="md:grid-cols-2"
          >
            {[
              { q: "What format is the book?", a: "A beautifully designed PDF you can read on any device — phone, tablet, or computer — or print at home." },
              { q: "How do I get it after purchase?", a: "Immediately. After checkout you'll receive an email from Gumroad with your personal download link." },
              { q: "Do I need to create an account?", a: "No account required. Just check out and download — it's that simple." },
              { q: "Can I share it with friends?", a: "This guide is for personal use only. We'd love for your friends to support us by grabbing their own copy." },
            ].map((item, i) => (
              <div key={i} style={{ borderTop: "2px solid var(--border)", paddingTop: "1.25rem" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 400, color: "var(--ocean)", marginBottom: "0.5rem", lineHeight: 1.3 }}>{item.q}</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.75 }}>{item.a}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            style={{ textAlign: "center", marginTop: "clamp(3rem, 5vw, 5rem)" }}
          >
            <a href={STRIPE_PAYMENT_LINK} target="_blank" rel="noopener noreferrer" className="btn-dark" style={{ fontSize: "0.65rem", padding: "1rem 3rem" }}>
              Get Your Copy — $9
            </a>
            <p className="micro-label" style={{ color: "var(--muted)", marginTop: "1rem" }}>
              Secure checkout · Instant download · Powered by Stripe
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
