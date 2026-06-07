"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

const RECIPES = [
  {
    number: "01",
    title: "Sea Moss & Ginger Gut Reset Tea",
    tagline: "Soothes the gut lining and ignites digestion.",
    ingredients: [
      "2 tbsp sea moss gel",
      "1 inch fresh ginger, sliced",
      "Juice of ½ lemon",
      "1 tsp raw honey",
      "2 cups filtered or alkaline water",
    ],
    instructions: [
      "Bring water to a gentle simmer (not a rolling boil).",
      "Add sliced ginger and steep for 8–10 minutes.",
      "Remove from heat and stir in sea moss gel until fully dissolved.",
      "Add lemon juice and honey. Stir well.",
      "Strain into your favorite mug. Sip warm, first thing in the morning.",
    ],
    benefit: "Sea moss coats and soothes the gut lining. Ginger stimulates digestive enzymes and reduces inflammation. Best consumed on an empty stomach.",
  },
  {
    number: "02",
    title: "Fennel & Peppermint Bloat Buster Tea",
    tagline: "Deflates bloating and calms the digestive tract.",
    ingredients: [
      "1 tsp fennel seeds, lightly crushed",
      "1 tsp dried peppermint leaves",
      "½ tsp dried chamomile flowers",
      "1 tsp raw honey",
      "2 cups hot water",
    ],
    instructions: [
      "Lightly crush fennel seeds with a mortar and pestle to release oils.",
      "Combine fennel, peppermint, and chamomile in a tea infuser or strainer.",
      "Pour hot water over herbs and steep for 7–10 minutes.",
      "Remove infuser and sweeten with honey.",
      "Drink after meals to reduce bloating and gas.",
    ],
    benefit: "Fennel relaxes intestinal muscles and expels trapped gas. Peppermint reduces spasms. Chamomile calms gut inflammation. A powerful trio for post-meal discomfort.",
  },
  {
    number: "03",
    title: "Slippery Elm Gut Lining Repair Tea",
    tagline: "Rebuilds and protects a damaged gut lining.",
    ingredients: [
      "1 tsp slippery elm bark powder",
      "½ tsp marshmallow root powder",
      "¼ tsp cinnamon",
      "1 tsp raw honey",
      "1½ cups warm water",
    ],
    instructions: [
      "Whisk slippery elm and marshmallow root powder into warm water — do not boil.",
      "Add cinnamon and stir until smooth.",
      "Sweeten with honey to taste.",
      "Drink slowly. The thick, gel-like consistency is the medicine.",
      "Best consumed 30 minutes before meals or before bed.",
    ],
    benefit: "Slippery elm forms a protective mucilaginous coating over the gut lining, reducing irritation from conditions like leaky gut, IBS, and gastritis. Marshmallow root amplifies this effect.",
  },
  {
    number: "04",
    title: "Turmeric & Sea Moss Anti-Inflammatory Tonic",
    tagline: "Fights gut inflammation at the root.",
    ingredients: [
      "1 tsp turmeric powder",
      "1 tbsp sea moss gel",
      "Pinch of black pepper (activates curcumin)",
      "½ cup coconut milk",
      "1½ cups alkaline water",
      "1 tsp raw honey",
    ],
    instructions: [
      "Warm alkaline water and coconut milk together over low heat.",
      "Whisk in turmeric and black pepper.",
      "Remove from heat and stir in sea moss gel until dissolved.",
      "Sweeten with honey.",
      "Drink warm. Can also be chilled for a golden milk-style cold tonic.",
    ],
    benefit: "Curcumin in turmeric is one of nature's most powerful anti-inflammatories. Black pepper increases absorption by up to 2,000%. Sea moss adds 92 minerals to support cellular gut repair.",
  },
  {
    number: "05",
    title: "Dandelion Root Digestive Cleanse Tea",
    tagline: "Supports the liver and cleanses the digestive system.",
    ingredients: [
      "1 tsp roasted dandelion root",
      "½ tsp burdock root",
      "½ tsp fresh ginger, grated",
      "Juice of ½ lemon",
      "1 tsp raw honey",
      "2 cups filtered water",
    ],
    instructions: [
      "Bring water to a boil and add dandelion and burdock root.",
      "Reduce heat and simmer for 10–12 minutes.",
      "Remove from heat and add grated ginger. Steep 5 more minutes.",
      "Strain into a cup. Add lemon juice and honey.",
      "Drink once daily — ideally in the morning or mid-afternoon.",
    ],
    benefit: "Dandelion root stimulates bile production and supports liver detox, which directly impacts gut health. Burdock root is a prebiotic that feeds healthy gut bacteria. Ginger aids transit.",
  },
];

export default function RecipesPage({
  hasAccess,
  action,
  hasError,
}: {
  hasAccess: boolean;
  action: (formData: FormData) => Promise<void>;
  hasError: boolean;
}) {
  const formRef = useRef<HTMLDivElement>(null);
  const [nameFocused, setNameFocused]   = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div style={{ backgroundColor: "var(--coastal)" }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(160deg, var(--ocean) 0%, var(--ocean-mid) 100%)",
          padding: "clamp(7rem, 12vw, 10rem) var(--section-x) clamp(4rem, 7vw, 7rem)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 55% at 50% 70%, rgba(28,184,200,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)", position: "relative", zIndex: 1 }}
        >
          <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", opacity: 0.6 }} />
          <span className="micro-label" style={{ color: "var(--aqua)", letterSpacing: "0.22em" }}>
            {hasAccess ? "Your Free Recipes" : "Free Recipe Guide"}
          </span>
          <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", opacity: 0.6 }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3rem, 7.5vw, 8rem)",
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: "var(--cream)",
            marginBottom: "clamp(1.25rem, 2vw, 2rem)",
            position: "relative",
            zIndex: 1,
          }}
        >
          5 Tea Recipes
          <br />
          <em style={{ fontStyle: "italic", color: "var(--aqua)" }}>That Heal</em>
          <br />
          the Gut
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.22 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.85,
            maxWidth: "46ch",
            marginBottom: "clamp(2rem, 3.5vw, 3.5rem)",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          Sea moss-infused herbal teas crafted to soothe, restore, and rebuild
          your gut — using real ingredients from nature.
        </motion.p>

        {!hasAccess && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.32 }}
            onClick={scrollToForm}
            className="btn-ocean"
            style={{ position: "relative", zIndex: 1 }}
          >
            Send Me the Recipes
          </motion.button>
        )}
      </section>

      {/* ── RECIPE CARDS ──────────────────────────────────────────────────── */}
      <section style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "var(--section-y) var(--section-x)" }}>

        {!hasAccess && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE }}
            style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 4vw, 4rem)" }}
          >
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8 }}>
              Enter your name and email below to unlock all 5 recipes — completely free.
            </p>
          </motion.div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1.5rem, 2.5vw, 2.5rem)" }}>
          {RECIPES.map((recipe, i) => (
            <motion.div
              key={recipe.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.06 }}
            >
              <RecipeCard recipe={recipe} unlocked={hasAccess} index={i} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SIGN-UP FORM ─────────────────────────────────────────────────── */}
      {!hasAccess && (
        <section
          ref={formRef}
          style={{
            background: "linear-gradient(160deg, var(--ocean) 0%, var(--ocean-mid) 100%)",
            padding: "var(--section-y) var(--section-x)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 50% at 50% 60%, rgba(28,184,200,0.09) 0%, transparent 65%)", pointerEvents: "none" }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE }}
            style={{ width: "100%", maxWidth: "440px", position: "relative", zIndex: 1 }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)" }}>
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", opacity: 0.6 }} />
              <span className="micro-label" style={{ color: "var(--aqua)", letterSpacing: "0.2em" }}>Unlock Free Access</span>
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--aqua)", opacity: 0.6 }} />
            </div>

            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.025em", color: "var(--cream)", marginBottom: "0.75rem" }}>
              Get All 5 Recipes
            </h2>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", fontWeight: 300, color: "rgba(255,255,255,0.4)", lineHeight: 1.75, marginBottom: "clamp(2rem, 3.5vw, 3.5rem)" }}>
              Enter your details below for instant, free access to all 5 gut-healing tea recipes.
            </p>

            {hasError && (
              <p className="micro-label" style={{ color: "var(--aqua)", marginBottom: "1.25rem" }}>
                Please enter your name and email to continue.
              </p>
            )}

            <form
              action={action}
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your first name"
                required
                onFocus={() => setNameFocused(true)}
                onBlur={() => setNameFocused(false)}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  borderBottom: `1px solid ${nameFocused ? "var(--aqua)" : "rgba(255,255,255,0.2)"}`,
                  outline: "none",
                  padding: "0.75rem 0",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  color: "var(--cream)",
                  textAlign: "center",
                  letterSpacing: "0.06em",
                  transition: "border-color 0.3s var(--ease-luxury)",
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  borderBottom: `1px solid ${emailFocused ? "var(--aqua)" : "rgba(255,255,255,0.2)"}`,
                  outline: "none",
                  padding: "0.75rem 0",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  color: "var(--cream)",
                  textAlign: "center",
                  letterSpacing: "0.06em",
                  transition: "border-color 0.3s var(--ease-luxury)",
                }}
              />
              <button
                type="submit"
                className="btn-ocean"
                style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }}
              >
                Send Me the Recipes
              </button>
              <p className="micro-label" style={{ color: "rgba(255,255,255,0.2)" }}>
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </motion.div>
        </section>
      )}

      {hasAccess && (
        <div style={{ textAlign: "center", padding: "clamp(2rem, 4vw, 4rem) var(--section-x)", borderTop: "1px solid var(--border)" }}>
          <p className="micro-label" style={{ color: "var(--aqua)", marginBottom: "0.75rem" }}>
            Enjoying these recipes?
          </p>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--muted)", marginBottom: "1.5rem" }}>
            Try Healing Water™ — the same sea moss goodness, ready to drink.
          </p>
          <a href="/shop" className="btn-dark">Shop Healing Water™</a>
        </div>
      )}
    </div>
  );
}

function RecipeCard({
  recipe,
  unlocked,
  index,
}: {
  recipe: typeof RECIPES[number];
  unlocked: boolean;
  index: number;
}) {
  const [open, setOpen] = useState(unlocked && index === 0);

  return (
    <div
      style={{
        border: "1px solid var(--border)",
        backgroundColor: "white",
        overflow: "hidden",
      }}
    >
      {/* Header — always visible */}
      <button
        onClick={() => unlocked && setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "clamp(1rem, 2vw, 2rem)",
          padding: "clamp(1.25rem, 2vw, 2rem)",
          background: "none",
          border: "none",
          cursor: unlocked ? "pointer" : "default",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 300,
            color: "var(--aqua)",
            opacity: 0.3,
            lineHeight: 1,
            flexShrink: 0,
            letterSpacing: "-0.03em",
          }}
        >
          {recipe.number}
        </span>

        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
              fontWeight: 400,
              color: "var(--ocean)",
              marginBottom: "0.3rem",
              lineHeight: 1.2,
            }}
          >
            {recipe.title}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "0.9rem",
              color: "var(--muted)",
              fontWeight: 300,
            }}
          >
            {recipe.tagline}
          </p>
        </div>

        {/* Lock or expand indicator */}
        <div style={{ flexShrink: 0 }}>
          {!unlocked ? (
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted-light)" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
          ) : (
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid var(--aqua)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.3s var(--ease-luxury)",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--aqua)" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          )}
        </div>
      </button>

      {/* Locked preview */}
      {!unlocked && (
        <div
          style={{
            padding: "0 clamp(1.25rem, 2vw, 2rem) clamp(1.25rem, 2vw, 2rem)",
            filter: "blur(4px)",
            userSelect: "none",
            pointerEvents: "none",
            opacity: 0.4,
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {recipe.ingredients.map((ing) => (
              <span key={ing} style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", backgroundColor: "var(--sea-foam)", padding: "0.2rem 0.6rem", border: "1px solid var(--border)" }}>
                {ing}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Unlocked full recipe */}
      {unlocked && open && (
        <div style={{ borderTop: "1px solid var(--border)", padding: "clamp(1.5rem, 2.5vw, 2.5rem)" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}
            className="md:grid-cols-2"
          >
            {/* Ingredients */}
            <div>
              <p className="micro-label" style={{ color: "var(--aqua)", marginBottom: "1rem" }}>Ingredients</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {recipe.ingredients.map((ing) => (
                  <li key={ing} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--aqua)", marginTop: "0.45rem", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.6 }}>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <p className="micro-label" style={{ color: "var(--gold)", marginBottom: "1rem" }}>Instructions</p>
              <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {recipe.instructions.map((step, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.75rem", fontWeight: 400, color: "var(--gold)", opacity: 0.7, flexShrink: 0, marginTop: "0.05rem", minWidth: "1rem" }}>{i + 1}.</span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.65 }}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Benefit note */}
          <div style={{ marginTop: "1.5rem", padding: "1rem 1.25rem", backgroundColor: "var(--sea-foam)", borderLeft: "3px solid var(--aqua)" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.875rem", color: "var(--ocean-mid)", lineHeight: 1.75, margin: 0 }}>
              <strong style={{ fontStyle: "normal", fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--aqua)", display: "block", marginBottom: "0.4rem" }}>Why It Works</strong>
              {recipe.benefit}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
