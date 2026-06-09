"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-40px" } as const;

const RECIPE_IMAGES = [
  { src: "/2C2D0E72-680D-4887-A886-613B091AC28F.png", alt: "Ginger Mint Tea recipe card" },
  { src: "/7DFBF948-0DC6-4DFB-910D-F057CA29C106.png", alt: "Fennel Comfort Tea recipe card" },
  { src: "/5DCD7A37-D2CA-44E4-82D3-C04995DF93AE.png", alt: "Chamomile Belly Tea recipe card" },
  { src: "/B00EE985-E6DB-4E2D-81B7-F18C6644065A.png", alt: "Cinnamon Digest Tea recipe card" },
  { src: "/07B54CB7-5C07-4AC6-BF66-D6DB4ABA3AA6.png", alt: "Lemon Peel Tea recipe card" },
];

const RECIPES = [
  {
    number: "01",
    name: "Ginger Mint Tea",
    tagline: "Warms and activates digestion.",
    image: "/2C2D0E72-680D-4887-A886-613B091AC28F.png",
    ingredients: ["1 inch fresh ginger, sliced thin", "8–10 fresh mint leaves", "2 cups filtered water", "1 tsp raw honey", "Juice of ¼ lemon (optional)"],
    instructions: ["Bring water to a gentle simmer.", "Add ginger slices and steep 7 minutes.", "Remove from heat, add mint leaves, and steep 3 more minutes.", "Strain, sweeten with honey, and add lemon if desired.", "Drink warm before or after meals."],
    use: "Ginger stimulates digestive enzymes and reduces nausea. Mint relaxes the muscles of the digestive tract and eases cramping. A traditional remedy for sluggish digestion and bloating.",
  },
  {
    number: "02",
    name: "Fennel Comfort Tea",
    tagline: "Soothes bloating and gas naturally.",
    image: "/7DFBF948-0DC6-4DFB-910D-F057CA29C106.png",
    ingredients: ["1½ tsp fennel seeds, lightly crushed", "1 cup hot water", "½ tsp raw honey", "Pinch of sea salt (optional)"],
    instructions: ["Lightly crush fennel seeds with a spoon or mortar and pestle.", "Place in a tea strainer or directly in a cup.", "Pour hot water over seeds and steep 8–10 minutes.", "Strain and sweeten lightly with honey.", "Sip slowly after meals."],
    use: "Fennel has been used for centuries to ease bloating, gas, and stomach cramping. Its volatile oils relax the smooth muscles of the intestinal tract, helping trapped gas pass and reducing discomfort.",
  },
  {
    number: "03",
    name: "Chamomile Belly Tea",
    tagline: "Calms the gut and reduces inflammation.",
    image: "/5DCD7A37-D2CA-44E4-82D3-C04995DF93AE.png",
    ingredients: ["1 tbsp dried chamomile flowers (or 1 tea bag)", "2 cups hot water", "1 tsp raw honey", "2 slices fresh lemon"],
    instructions: ["Pour hot water over chamomile flowers in a strainer or infuser.", "Steep for 5–7 minutes — don't over-steep or it turns bitter.", "Remove chamomile and add honey and lemon.", "Sip warm, especially in the evening."],
    use: "Chamomile contains bisabolol and chamazulene — compounds that reduce gut inflammation and calm irritated stomach lining. Traditionally used for IBS, gastritis, and general digestive unease. Also supports sleep.",
  },
  {
    number: "04",
    name: "Cinnamon Digest Tea",
    tagline: "Balances blood sugar and supports gut motility.",
    image: "/B00EE985-E6DB-4E2D-81B7-F18C6644065A.png",
    ingredients: ["1 cinnamon stick (or ½ tsp cinnamon powder)", "2 cups filtered water", "¼ tsp fresh ginger, grated", "1 tsp raw honey"],
    instructions: ["Bring water to a low simmer and add cinnamon stick.", "Simmer gently for 10 minutes.", "Remove from heat and add grated ginger.", "Steep 5 more minutes, then strain.", "Sweeten with honey and drink warm."],
    use: "Cinnamon reduces blood sugar spikes after meals, which directly impacts gut health and energy levels. It also has antimicrobial properties that help balance gut bacteria. Ginger amplifies digestive support.",
  },
  {
    number: "05",
    name: "Lemon Peel Tea",
    tagline: "Detoxes and stimulates the digestive system.",
    image: "/07B54CB7-5C07-4AC6-BF66-D6DB4ABA3AA6.png",
    ingredients: ["Peel of 1 organic lemon (avoid wax-coated)", "2 cups water", "1 tsp raw honey", "1 sprig fresh rosemary (optional)"],
    instructions: ["Wash the lemon thoroughly and peel in long strips.", "Bring water to a boil, add lemon peel and rosemary if using.", "Reduce heat and simmer 8 minutes.", "Strain into a mug and sweeten with honey.", "Best enjoyed first thing in the morning on an empty stomach."],
    use: "Lemon peel is rich in d-limonene, a compound that supports liver detoxification and stimulates bile production — which is essential for proper fat digestion. The bitter compounds in the peel also activate digestive enzymes.",
  },
];

export default function ThankYouPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div
      style={{
        minHeight: "100svh",
        backgroundColor: "var(--espresso)",
        paddingBottom: "clamp(4rem, 7vw, 7rem)",
      }}
    >
      {/* ── HEADER ── */}
      <div
        style={{
          background: "linear-gradient(160deg, #1A1208 0%, #2A1F10 100%)",
          padding: "clamp(5rem, 9vw, 8rem) var(--section-x) clamp(3rem, 5vw, 5rem)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 50% at 50% 60%, rgba(184,150,90,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          style={{ marginBottom: "clamp(2.5rem, 4vw, 4rem)", position: "relative", zIndex: 1 }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "0.52rem", fontWeight: 300, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold)", lineHeight: 1, marginBottom: "0.3rem" }}>Echoing</span>
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(250,248,245,0.85)", lineHeight: 1 }}>Holistic Health</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)", position: "relative", zIndex: 1 }}
        >
          <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", opacity: 0.5 }} />
          <span className="micro-label" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Welcome to the Circle</span>
          <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", opacity: 0.5 }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.18 }}
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3.2rem, 8vw, 8rem)", fontWeight: 300, lineHeight: 0.9, letterSpacing: "-0.03em", color: "var(--cream)", marginBottom: "clamp(1.25rem, 2vw, 2rem)", position: "relative", zIndex: 1 }}
        >
          You&rsquo;re in.
          <br />
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Here&rsquo;s your gift.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.28 }}
          style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300, color: "rgba(250,248,245,0.38)", lineHeight: 1.85, maxWidth: "46ch", position: "relative", zIndex: 1, textAlign: "center" }}
        >
          Thank you for joining Echoing Holistic Health™ before our official launch.
          Below are your 5 free gut-friendly tea recipes — yours to keep and enjoy.
        </motion.p>
      </div>

      {/* ── RECIPES ── */}
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) var(--section-x)" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEW}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ textAlign: "center", marginBottom: "clamp(2rem, 3.5vw, 3.5rem)" }}
        >
          <p className="micro-label" style={{ color: "rgba(250,248,245,0.2)", letterSpacing: "0.2em", marginBottom: "1.25rem" }}>
            Free Gut-Friendly Tea Collection · 5 Recipes
          </p>
          <a
            href="/free-guide"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              fontFamily: "var(--font-sans)",
              fontSize: "0.58rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--espresso)",
              backgroundColor: "var(--gold)",
              border: "1px solid var(--gold)",
              padding: "0.75rem 2rem",
              textDecoration: "none",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--gold)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--espresso)";
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Your Free Recipes
          </a>
          <p className="micro-label" style={{ color: "rgba(250,248,245,0.15)", marginTop: "0.6rem", display: "block" }}>
            Opens print page — choose "Save as PDF" in your browser
          </p>
        </motion.div>

        {/* Recipe image cards */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "clamp(0.75rem, 1.5vw, 1.25rem)", marginBottom: "clamp(2.5rem, 4vw, 4rem)" }}
          className="sm:grid-cols-3"
        >
          {RECIPE_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              style={{ overflow: "hidden", border: "1px solid rgba(184,150,90,0.12)" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </motion.div>
          ))}
        </div>

        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(184,150,90,0.15), transparent)", marginBottom: "clamp(2rem, 3.5vw, 3.5rem)" }} />

        <p className="micro-label" style={{ color: "rgba(250,248,245,0.15)", textAlign: "center", marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)", letterSpacing: "0.2em" }}>
          Full recipe details below
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {RECIPES.map((recipe, i) => (
            <motion.div
              key={recipe.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.06 }}
            >
              <RecipeAccordion
                recipe={recipe}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE }}
          style={{ textAlign: "center", marginTop: "clamp(3rem, 5vw, 5rem)", paddingTop: "clamp(2rem, 3.5vw, 3.5rem)", borderTop: "1px solid rgba(184,150,90,0.1)" }}
        >
          <p className="micro-label" style={{ color: "rgba(250,248,245,0.2)", marginBottom: "0.75rem" }}>
            Want to be first to know when Healing Water™ launches?
          </p>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", color: "rgba(250,248,245,0.35)", lineHeight: 1.75, marginBottom: "1.75rem" }}>
            We&rsquo;ll reach out with exclusive early access, launch updates, and
            wellness content — only when there is something worth saying.
          </p>
          <Link href="/splash" className="btn-outline-cream" style={{ fontSize: "0.58rem" }}>
            Back to the page
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function RecipeAccordion({
  recipe,
  isOpen,
  onToggle,
}: {
  recipe: (typeof RECIPES)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ backgroundColor: isOpen ? "rgba(184,150,90,0.05)" : "transparent", border: "1px solid rgba(184,150,90,0.12)", marginBottom: "0.75rem" }}>
      {/* Header */}
      <button
        onClick={onToggle}
        style={{ width: "100%", display: "flex", alignItems: "center", gap: "1.25rem", padding: "clamp(1.25rem, 2vw, 1.75rem)", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
      >
        <span style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 300, color: "var(--gold)", opacity: 0.25, lineHeight: 1, flexShrink: 0, letterSpacing: "-0.02em" }}>
          {recipe.number}
        </span>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1rem, 1.6vw, 1.3rem)", fontWeight: 400, color: "var(--cream)", marginBottom: "0.2rem", lineHeight: 1.2 }}>
            {recipe.name}
          </h3>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.82rem", color: "rgba(250,248,245,0.35)", fontWeight: 300 }}>
            {recipe.tagline}
          </p>
        </div>
        <div style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1px solid rgba(184,150,90,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform 0.3s var(--ease-luxury)", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
        </div>
      </button>

      {/* Content */}
      {isOpen && (
        <div style={{ padding: "0 clamp(1.25rem, 2vw, 1.75rem) clamp(1.5rem, 2.5vw, 2rem)", borderTop: "1px solid rgba(184,150,90,0.1)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.75rem", marginTop: "1.5rem" }} className="md:grid-cols-[1fr_auto]">

            {/* Left: text content */}
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }} className="sm:grid-cols-2">
                <div>
                  <p className="micro-label" style={{ color: "var(--gold)", marginBottom: "1rem" }}>Ingredients</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                    {recipe.ingredients.map((ing) => (
                      <li key={ing} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                        <div style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: "var(--gold)", opacity: 0.5, marginTop: "0.45rem", flexShrink: 0 }} />
                        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", fontWeight: 300, color: "rgba(250,248,245,0.6)", lineHeight: 1.6 }}>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="micro-label" style={{ color: "rgba(184,150,90,0.6)", marginBottom: "1rem" }}>Preparation</p>
                  <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    {recipe.instructions.map((step, i) => (
                      <li key={i} style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start" }}>
                        <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.7rem", color: "rgba(184,150,90,0.5)", flexShrink: 0, minWidth: "1rem" }}>{i + 1}.</span>
                        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", fontWeight: 300, color: "rgba(250,248,245,0.6)", lineHeight: 1.65 }}>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div style={{ marginTop: "1.5rem", padding: "1rem 1.25rem", borderLeft: "2px solid rgba(184,150,90,0.3)" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.82rem", color: "rgba(250,248,245,0.3)", lineHeight: 1.8, margin: 0 }}>
                  <strong style={{ fontStyle: "normal", fontFamily: "var(--font-sans)", fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(184,150,90,0.5)", display: "block", marginBottom: "0.4rem" }}>Traditional Use</strong>
                  {recipe.use}
                </p>
              </div>
            </div>

            {/* Right: recipe image */}
            <div className="hidden md:block" style={{ width: "200px", flexShrink: 0 }}>
              <Image
                src={recipe.image}
                alt={recipe.name}
                width={400}
                height={533}
                style={{ width: "100%", height: "auto", display: "block", border: "1px solid rgba(184,150,90,0.12)" }}
              />
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
