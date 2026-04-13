"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

type Article = {
  slug: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  excerpt: string;
  readTime: string;
  date: string;
  featured: boolean;
};

const articles: Article[] = [
  {
    slug: "what-your-gut-is-trying-to-tell-you",
    number: "001",
    category: "Gut Health",
    title: "What Your Gut Is Trying to Tell You",
    subtitle: "And why you should start listening before it gets louder.",
    excerpt:
      "Bloating after meals. Energy that drops by noon. A mood that shifts without obvious reason. These are not separate problems—they are one body communicating through a compromised gut lining.",
    readTime: "6 min",
    date: "March 2025",
    featured: true,
  },
  {
    slug: "the-cortisol-estrogen-connection",
    number: "002",
    category: "Hormonal Balance",
    title: "The Cortisol–Estrogen Connection",
    subtitle: "Stress is a hormonal event. Here is why that matters.",
    excerpt:
      "Chronic stress doesn't just exhaust you—it actively disrupts the estrogen-progesterone balance through a mechanism most hormone protocols completely overlook.",
    readTime: "8 min",
    date: "February 2025",
    featured: false,
  },
  {
    slug: "your-cycle-is-a-vital-sign",
    number: "003",
    category: "Womb Wellness",
    title: "Your Cycle Is a Vital Sign",
    subtitle: "The information your period carries—and how to read it.",
    excerpt:
      "A heavy period isn't something to push through. An irregular cycle isn't just inconvenient. These are the body's clearest communications about the state of your internal environment.",
    readTime: "7 min",
    date: "January 2025",
    featured: false,
  },
  {
    slug: "seamoss-what-the-science-says",
    number: "004",
    category: "Nutrition",
    title: "Seamoss: What the Science Actually Says",
    subtitle: "Beyond the trend—a grounded look at what wild-crafted seamoss does.",
    excerpt:
      "Wild-crafted seamoss contains 92 of the 102 minerals the human body is made of. That is not a marketing claim. It is a nutritional fact that has been studied since the 19th century.",
    readTime: "5 min",
    date: "December 2024",
    featured: false,
  },
  {
    slug: "the-leaky-gut-inflammation-loop",
    number: "005",
    category: "Inflammation",
    title: "The Leaky Gut–Inflammation Loop",
    subtitle: "How a compromised gut barrier creates systemic inflammation—and how to interrupt it.",
    excerpt:
      "When the gut lining is compromised, proteins pass into the bloodstream that shouldn't be there. The immune system responds. Inflammation rises. And the cycle begins.",
    readTime: "9 min",
    date: "November 2024",
    featured: false,
  },
  {
    slug: "building-a-morning-ritual-that-works",
    number: "006",
    category: "Ritual",
    title: "Building a Morning Ritual That Works",
    subtitle: "Not a five-step routine. A genuine practice.",
    excerpt:
      "The first hour of the day shapes the hormonal and neurological terrain for everything that follows. This is how to use it intentionally—without adding complexity.",
    readTime: "5 min",
    date: "October 2024",
    featured: false,
  },
];

const JOURNAL_CATEGORIES = ["All", "Gut Health", "Hormonal Balance", "Womb Wellness", "Inflammation", "Nutrition", "Ritual"];

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = articles.find((a) => a.featured)!;
  const filtered = (activeCategory === "All"
    ? articles.filter((a) => !a.featured)
    : articles.filter((a) => a.category === activeCategory && !a.featured));

  return (
    <>
      <JournalHero />
      <FeaturedArticle article={featured} />
      <JournalFilter activeCategory={activeCategory} onChange={setActiveCategory} />
      <ArticleGrid articles={filtered} />
      <JournalNewsletter />
    </>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function JournalHero() {
  return (
    <section
      style={{
        backgroundColor: "var(--cream)",
        paddingTop: "clamp(8rem, 14vw, 14rem)",
        paddingBottom: "clamp(4rem, 7vw, 8rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: `0 var(--section-x)`,
          display: "grid",
          gap: "clamp(3rem, 6vw, 7rem)",
          alignItems: "end",
        }}
        className="grid-cols-1 lg:grid-cols-[1.4fr_1fr]"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2rem, 3vw, 3rem)" }}
          >
            <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)" }} />
            <span className="micro-label" style={{ color: "var(--gold)" }}>The Journal</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3.5rem, 8.5vw, 11rem)",
              fontWeight: 300,
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              color: "var(--espresso)",
            }}
          >
            Knowledge is
            <br />
            the{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>foundation</em>
            <br />
            of healing.
          </motion.h1>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
              fontWeight: 300,
              color: "var(--muted)",
              lineHeight: 1.75,
              marginBottom: "2rem",
              maxWidth: "42ch",
            }}
          >
            Insights designed to help you understand your body, not fight it.
            Grounded in science, written in plain language.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
          >
            {["Gut Health", "Hormones", "Womb", "Inflammation"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.52rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  border: "1px solid var(--border)",
                  padding: "0.35rem 0.75rem",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.4 }}
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
          transformOrigin: "center",
          opacity: 0.3,
          marginTop: "clamp(3rem, 5vw, 5rem)",
        }}
      />
    </section>
  );
}

// ── FEATURED ARTICLE ──────────────────────────────────────────────────────────
function FeaturedArticle({ article }: { article: Article }) {
  const [hovered, setHovered] = useState(false);

  return (
    <section style={{ backgroundColor: "var(--espresso)", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: `clamp(5rem, 8vw, 10rem) var(--section-x)`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2.5rem, 4vw, 4.5rem)" }}
        >
          <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)" }} />
          <span className="micro-label" style={{ color: "var(--gold)" }}>Featured</span>
        </motion.div>

        <Link
          href={`/journal/${article.slug}`}
          style={{ display: "block", textDecoration: "none" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            style={{
              display: "grid",
              gap: "clamp(3rem, 5vw, 6rem)",
              alignItems: "center",
            }}
            className="grid-cols-1 lg:grid-cols-[1fr_1fr]"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEW}
              transition={{ duration: 1, ease: EASE }}
              style={{ overflow: "hidden" }}
            >
              <motion.div
                className="img-placeholder-cover"
                animate={{ scale: hovered ? 1.03 : 1 }}
                transition={{ duration: 0.8, ease: EASE }}
                style={{ aspectRatio: "4/3", width: "100%", opacity: 0.75 }}
                aria-hidden="true"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEW}
              transition={{ duration: 1, ease: EASE, delay: 0.15 }}
            >
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)" }}>
                <span className="micro-label" style={{ color: "var(--gold)" }}>{article.category}</span>
                <span style={{ height: "1px", width: "20px", backgroundColor: "rgba(250,248,245,0.2)" }} />
                <span className="micro-label" style={{ color: "rgba(250,248,245,0.3)" }}>{article.readTime} read</span>
                <span style={{ height: "1px", width: "20px", backgroundColor: "rgba(250,248,245,0.2)" }} />
                <span className="micro-label" style={{ color: "rgba(250,248,245,0.3)" }}>{article.date}</span>
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 4vw, 5rem)",
                  fontWeight: 300,
                  lineHeight: 1,
                  letterSpacing: "-0.025em",
                  color: hovered ? "var(--gold)" : "var(--cream)",
                  transition: "color 0.4s var(--ease-luxury)",
                  marginBottom: "1rem",
                }}
              >
                {article.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
                  fontWeight: 300,
                  color: "rgba(250,248,245,0.5)",
                  lineHeight: 1.7,
                  marginBottom: "clamp(1.5rem, 3vw, 3rem)",
                }}
              >
                {article.subtitle}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "rgba(250,248,245,0.4)",
                  lineHeight: 1.85,
                  maxWidth: "46ch",
                  marginBottom: "clamp(2rem, 3.5vw, 3rem)",
                }}
              >
                {article.excerpt}
              </p>

              <motion.span
                animate={{ x: hovered ? 4 : 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="text-link"
                style={{ color: hovered ? "var(--gold)" : "rgba(250,248,245,0.45)", display: "inline-flex" }}
              >
                Read article →
              </motion.span>
            </motion.div>
          </div>
        </Link>
      </div>
    </section>
  );
}

// ── FILTER ────────────────────────────────────────────────────────────────────
function JournalFilter({
  activeCategory,
  onChange,
}: {
  activeCategory: string;
  onChange: (cat: string) => void;
}) {
  return (
    <section
      style={{
        backgroundColor: "var(--cream)",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: "68px",
        zIndex: 30,
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: `0 var(--section-x)`,
          display: "flex",
          alignItems: "center",
          gap: "clamp(1rem, 2.5vw, 2.5rem)",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {JOURNAL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "1.25rem 0",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: "0.58rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: activeCategory === cat ? "var(--espresso)" : "var(--muted-light)",
              borderBottom: activeCategory === cat ? "1px solid var(--espresso)" : "1px solid transparent",
              transition: "color 0.3s var(--ease-luxury), border-color 0.3s var(--ease-luxury)",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}

// ── ARTICLE GRID ──────────────────────────────────────────────────────────────
function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <section style={{ backgroundColor: "var(--cream)", padding: `clamp(4rem, 7vw, 8rem) var(--section-x)` }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <div
          style={{ display: "grid", gap: "clamp(3rem, 5vw, 5rem) clamp(2rem, 3vw, 3rem)" }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.09 }}
            >
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </div>

        {articles.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "1.05rem",
              color: "var(--muted)",
              textAlign: "center",
              padding: "4rem 0",
            }}
          >
            More articles in this category are being written.
          </motion.p>
        )}
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: Article }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/journal/${article.slug}`}
      style={{ display: "block", textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div style={{ overflow: "hidden", marginBottom: "1.5rem" }}>
        <motion.div
          className="img-placeholder"
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.75, ease: EASE }}
          style={{ aspectRatio: "16/10", width: "100%" }}
          aria-hidden="true"
        />
      </div>

      {/* Meta */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "0.85rem" }}>
        <span className="micro-label" style={{ color: "var(--gold)" }}>{article.category}</span>
        <span style={{ height: "1px", width: "14px", backgroundColor: "var(--border)" }} />
        <span className="micro-label" style={{ color: "var(--muted-light)" }}>{article.readTime}</span>
        <span style={{ height: "1px", width: "14px", backgroundColor: "var(--border)" }} />
        <span className="micro-label" style={{ color: "var(--muted-light)" }}>{article.date}</span>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(1.25rem, 1.8vw, 1.6rem)",
          fontWeight: 400,
          letterSpacing: "-0.01em",
          color: hovered ? "var(--gold)" : "var(--espresso)",
          transition: "color 0.35s var(--ease-luxury)",
          lineHeight: 1.15,
          marginBottom: "0.5rem",
        }}
      >
        {article.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "0.88rem",
          color: "var(--muted)",
          fontWeight: 300,
          lineHeight: 1.65,
          marginBottom: "1rem",
        }}
      >
        {article.subtitle}
      </p>

      <motion.span
        animate={{ x: hovered ? 3 : 0, opacity: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.3, ease: EASE }}
        className="micro-label"
        style={{
          color: hovered ? "var(--gold)" : "var(--muted)",
          borderBottom: `1px solid ${hovered ? "var(--gold)" : "transparent"}`,
          paddingBottom: "1px",
          transition: "border-color 0.3s var(--ease-luxury), color 0.3s var(--ease-luxury)",
        }}
      >
        Read article →
      </motion.span>
    </Link>
  );
}

// ── NEWSLETTER ────────────────────────────────────────────────────────────────
function JournalNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      style={{
        backgroundColor: "var(--espresso-mid)",
        padding: `clamp(5rem, 9vw, 12rem) var(--section-x)`,
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "560px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)" }}
        >
          <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", opacity: 0.5 }} />
          <span className="micro-label" style={{ color: "var(--gold)" }}>Stay Informed</span>
          <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", opacity: 0.5 }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 1, ease: EASE, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.2rem, 4.5vw, 5.5rem)",
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: "-0.025em",
            color: "var(--cream)",
            marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
          }}
        >
          New insights,
          <br />
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>delivered quietly.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "0.95rem",
            fontWeight: 300,
            color: "rgba(250,248,245,0.38)",
            lineHeight: 1.7,
            marginBottom: "clamp(2.5rem, 4vw, 4rem)",
          }}
        >
          New journal entries, formulation notes, and educational content — written only when there is something worth saying.
        </motion.p>

        {submitted ? (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "1.05rem",
              color: "var(--gold)",
              lineHeight: 1.7,
            }}
          >
            You&apos;re on the list. Thank you.
          </motion.p>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSubmitted(true);
            }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "stretch" }}
            className="sm:flex-row sm:items-center"
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                borderBottom: "1px solid rgba(250,248,245,0.2)",
                padding: "0.75rem 0",
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                color: "var(--cream)",
                outline: "none",
                transition: "border-color 0.3s var(--ease-luxury)",
              }}
              onFocus={(e) => { e.currentTarget.style.borderBottomColor = "var(--gold)"; }}
              onBlur={(e) => { e.currentTarget.style.borderBottomColor = "rgba(250,248,245,0.2)"; }}
            />
            <button type="submit" className="btn-outline-cream" style={{ flexShrink: 0 }}>
              Subscribe →
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
