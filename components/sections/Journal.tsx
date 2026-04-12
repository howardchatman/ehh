"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-80px" } as const;

const articles = [
  {
    number: "01",
    category: "Gut Health",
    title: "The Gut-Brain Connection: What Your Digestion Is Telling You",
    excerpt:
      "Understanding the bidirectional relationship between your gut and your mind is the first step toward meaningful, lasting healing.",
    readTime: "6 min",
    featured: true,
  },
  {
    number: "02",
    category: "Hormones",
    title: "Cycle Syncing: How to Work With Your Hormones, Not Against Them",
    excerpt:
      "Your hormones fluctuate in a predictable rhythm. Learning to move with that rhythm changes everything.",
    readTime: "8 min",
    featured: false,
  },
  {
    number: "03",
    category: "Womb Wellness",
    title: "Reclaiming Your Relationship With Your Womb",
    excerpt:
      "For many women, the womb has been a source of pain. This is an invitation to approach it with compassion.",
    readTime: "5 min",
    featured: false,
  },
];

export default function Journal() {
  return (
    <section
      aria-label="Journal"
      style={{
        position: "relative",
        backgroundColor: "var(--ivory)",
        overflow: "hidden",
      }}
    >
      {/* Top gold rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEW}
        transition={{ duration: 1.2, ease: EASE }}
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
          transformOrigin: "left center",
          opacity: 0.45,
        }}
      />

      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: `var(--section-y) var(--section-x)`,
        }}
      >

        {/* ── Two-column: sticky header left / articles right ── */}
        <div
          style={{ display: "grid", gap: "clamp(3rem, 6vw, 6rem)" }}
          className="grid-cols-1 lg:grid-cols-[2fr_3fr]"
        >

          {/* Left: Sticky header */}
          <div style={{ position: "relative" }}>
            <div className="lg:sticky" style={{ top: "8rem" }}>

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.9, ease: EASE }}
                style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)" }}
              >
                <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", flexShrink: 0 }} />
                <span className="micro-label" style={{ color: "var(--gold)" }}>
                  The Journal
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 1, ease: EASE, delay: 0.15 }}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.4rem, 5vw, 5.5rem)",
                  fontWeight: 300,
                  lineHeight: 0.92,
                  letterSpacing: "-0.025em",
                  color: "var(--espresso)",
                  marginBottom: "clamp(1.5rem, 3vw, 3rem)",
                }}
              >
                Learn your body.
                <br />
                <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                  Change your life.
                </em>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  marginBottom: "clamp(2rem, 3.5vw, 3.5rem)",
                }}
              >
                True wellness begins with understanding. Explore insights,
                teachings, and guidance designed to help you move with
                clarity and confidence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
              >
                <Link
                  href="/journal"
                  className="text-link link-gold"
                  style={{ color: "var(--espresso)" }}
                >
                  Explore the Journal
                  <span style={{ fontSize: "0.9rem" }}>→</span>
                </Link>
              </motion.div>

              {/* Category pills */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={VIEW}
                transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  marginTop: "clamp(2rem, 4vw, 4rem)",
                }}
              >
                {["Gut Health", "Hormones", "Womb", "Lifestyle"].map((cat) => (
                  <span
                    key={cat}
                    className="micro-label"
                    style={{
                      padding: "0.4rem 0.8rem",
                      border: "1px solid var(--border)",
                      color: "var(--muted)",
                      cursor: "default",
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right: Articles */}
          <div>
            {articles.map((article, i) => (
              <motion.div
                key={article.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.9, ease: EASE, delay: i * 0.1 }}
              >
                <ArticleRow article={article} index={i} />
              </motion.div>
            ))}

            {/* Bottom border */}
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticleRow({
  article,
  index,
}: {
  article: (typeof articles)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="/journal"
      style={{ display: "block", textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          borderTop: "1px solid var(--border)",
          padding: "clamp(1.75rem, 3vw, 2.75rem) 0",
          display: "grid",
          gridTemplateColumns: "clamp(90px, 15%, 140px) 1fr",
          gap: "clamp(1.25rem, 2.5vw, 2.25rem)",
          alignItems: "start",
        }}
      >
        {/* Image */}
        <div style={{ overflow: "hidden", flexShrink: 0 }}>
          <motion.div
            className="img-placeholder"
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.65, ease: EASE }}
            style={{ aspectRatio: "3/4", width: "100%" }}
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div>
          {/* Meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "0.75rem",
            }}
          >
            <span
              className="micro-label"
              style={{ color: "var(--gold)" }}
            >
              {article.category}
            </span>
            <span style={{ color: "var(--border)", fontSize: "0.5rem" }}>●</span>
            <span
              className="micro-label"
              style={{ color: "var(--muted-light)" }}
            >
              {article.readTime} read
            </span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              lineHeight: 1.25,
              color: hovered ? "var(--gold)" : "var(--espresso)",
              transition: "color 0.35s var(--ease-luxury)",
              marginBottom: "0.65rem",
            }}
          >
            {article.title}
          </h3>

          {/* Excerpt */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.82rem",
              fontWeight: 300,
              color: "var(--muted)",
              lineHeight: 1.8,
            }}
          >
            {article.excerpt}
          </p>

          {/* Read label */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
            transition={{ duration: 0.3, ease: EASE }}
            style={{ marginTop: "0.85rem" }}
          >
            <span
              className="micro-label"
              style={{
                color: "var(--gold)",
                borderBottom: "1px solid var(--gold)",
                paddingBottom: "1px",
              }}
            >
              Read →
            </span>
          </motion.div>
        </div>
      </div>
    </Link>
  );
}
