"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-80px" } as const;

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutPhilosophy />
      <AboutApproach />
      <AboutCTA />
    </>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function AboutHero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--cream)",
        paddingTop: "clamp(8rem, 14vw, 14rem)",
        paddingBottom: "0",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: `0 var(--section-x)`,
        }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2rem, 3vw, 3rem)" }}
        >
          <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)" }} />
          <span className="micro-label" style={{ color: "var(--gold)" }}>The Story</span>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{ display: "grid", gap: "clamp(3rem, 6vw, 8rem)", alignItems: "end", paddingBottom: "clamp(5rem, 8vw, 9rem)" }}
          className="grid-cols-1 lg:grid-cols-[1.2fr_1fr]"
        >
          {/* Left: Headline */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(3.5rem, 8vw, 10rem)",
                fontWeight: 300,
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
                color: "var(--espresso)",
              }}
            >
              I don&apos;t teach
              <br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>healing.</em>
              <br />
              I live it.
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: EASE, delay: 0.5 }}
              style={{
                height: "1px",
                background: "linear-gradient(90deg, var(--gold), transparent)",
                transformOrigin: "left",
                marginTop: "clamp(2.5rem, 4vw, 4rem)",
                width: "60%",
                opacity: 0.5,
              }}
            />
          </div>

          {/* Right: Intro + image */}
          <div>
            <motion.div
              className="img-placeholder"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.25 }}
              style={{ aspectRatio: "3/4", width: "100%", maxWidth: "420px", marginBottom: "clamp(2rem, 3vw, 2.5rem)" }}
              aria-hidden="true"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
                fontWeight: 300,
                color: "var(--muted)",
                lineHeight: 1.75,
                maxWidth: "40ch",
              }}
            >
              Founder, formulator, and the woman who healed her own body before she
              ever considered helping anyone else heal theirs.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
          transformOrigin: "center",
          opacity: 0.3,
        }}
      />
    </section>
  );
}

// ── STORY ─────────────────────────────────────────────────────────────────────
function AboutStory() {
  return (
    <section style={{ backgroundColor: "var(--ivory)", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: `clamp(5rem, 8vw, 11rem) var(--section-x)`,
          display: "grid",
          gap: "clamp(3rem, 6vw, 8rem)",
          alignItems: "start",
        }}
        className="grid-cols-1 lg:grid-cols-[auto_1fr]"
      >
        {/* Left: Vertical label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE }}
          className="hidden lg:block"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            paddingTop: "0.5rem",
          }}
        >
          <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)" }} />
          <span
            className="micro-label"
            style={{
              color: "var(--gold)",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
              letterSpacing: "0.22em",
            }}
          >
            The Origin
          </span>
        </motion.div>

        {/* Right: Story blocks */}
        <div style={{ display: "grid", gap: "clamp(3rem, 5vw, 6rem)" }} className="grid-cols-1 lg:grid-cols-2">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 1, ease: EASE }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 3.5vw, 4rem)",
                fontWeight: 300,
                lineHeight: 0.96,
                letterSpacing: "-0.02em",
                color: "var(--espresso)",
                marginBottom: "clamp(2rem, 3.5vw, 3rem)",
              }}
            >
              This began with a body
              <br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>that wasn&apos;t working.</em>
            </motion.h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                "For years, I was told that what I was experiencing was normal. Irregular cycles. Persistent fatigue. Gut issues that doctors dismissed with a shrug. The kind of systemic dysfunction that gets labeled as stress, anxiety, or simply being a woman.",
                "It wasn't until I stopped looking for someone to fix me and started learning to understand my own body that things began to shift. I found herbalism. I found the gut-hormone connection. I found that the body, given the right support, has an extraordinary capacity to restore itself.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEW}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.1 + i * 0.1 }}
                  style={{
                    fontFamily: i === 0 ? "var(--font-serif)" : "var(--font-sans)",
                    fontSize: i === 0 ? "clamp(1rem, 1.3vw, 1.15rem)" : "0.875rem",
                    fontWeight: 300,
                    fontStyle: i === 0 ? "italic" : "normal",
                    color: i === 0 ? "var(--charcoal)" : "var(--muted)",
                    lineHeight: 1.85,
                  }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

          <div>
            <motion.div
              className="img-placeholder"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 1, ease: EASE, delay: 0.2 }}
              style={{ aspectRatio: "2/3", width: "100%", marginBottom: "clamp(2rem, 3vw, 2.5rem)" }}
              aria-hidden="true"
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                "Echoing Holistic Health was not built as a business. It was built as an answer—first for myself, then for the women who kept asking what I was doing differently.",
                "Every product in this collection is formulated around what I actually use, what actually worked, and what is grounded in both traditional wisdom and modern understanding of the female body.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEW}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.3 + i * 0.1 }}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    color: "var(--muted)",
                    lineHeight: 1.85,
                  }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── PHILOSOPHY ────────────────────────────────────────────────────────────────
function AboutPhilosophy() {
  return (
    <section
      style={{
        backgroundColor: "var(--espresso)",
        position: "relative",
        overflow: "hidden",
        padding: `clamp(5rem, 8vw, 11rem) var(--section-x)`,
      }}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEW}
        transition={{ duration: 1.2, ease: EASE }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(184,150,90,0.35), transparent)",
          transformOrigin: "left",
        }}
      />

      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        {/* Large pull quote */}
        <div
          style={{
            display: "grid",
            gap: "clamp(4rem, 7vw, 9rem)",
            alignItems: "center",
            marginBottom: "clamp(5rem, 8vw, 9rem)",
          }}
          className="grid-cols-1 lg:grid-cols-[1fr_auto_1fr]"
        >
          <motion.blockquote
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 1.1, ease: EASE }}
            style={{ margin: 0 }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 5rem)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: "var(--cream)",
              }}
            >
              &ldquo;Real healing. Real life.{" "}
              <em style={{ color: "var(--gold)" }}>Real results.&rdquo;</em>
            </p>
          </motion.blockquote>

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={VIEW}
            transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
            className="hidden lg:block"
            style={{
              width: "1px",
              height: "120px",
              background: "linear-gradient(to bottom, transparent, var(--gold-pale), transparent)",
              transformOrigin: "top center",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1.5rem, 2.5vw, 2.5rem)" }}>
            {[
              "This is not aspirational wellness. It is practical, embodied, and grounded in what it actually takes to live well in a female body in the modern world.",
              "Echoing is for the woman who has done the rounds—the doctors, the quick fixes, the programs that promised transformation and delivered frustration. She is ready for something that treats her as capable of understanding her own body.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.12 }}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  color: "rgba(250,248,245,0.55)",
                  lineHeight: 1.85,
                }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Values grid */}
        <div
          style={{ display: "grid", borderTop: "1px solid rgba(250,248,245,0.1)" }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { number: "01", title: "Root cause first", body: "We ask why before we address what. Symptoms are messages. We listen before we respond." },
            { number: "02", title: "The whole body", body: "Gut, hormones, womb, inflammation — these systems speak to each other. We treat them as one." },
            { number: "03", title: "Traditional wisdom", body: "Herbalism carries thousands of years of embodied knowledge. We honor it while understanding its science." },
            { number: "04", title: "Patient practice", body: "Real restoration unfolds over time. We build rituals, not quick fixes. The body heals on its own timeline." },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
              style={{
                padding: "clamp(2rem, 3.5vw, 3.5rem) clamp(1.5rem, 2.5vw, 2.5rem)",
                borderRight: i < 3 ? "1px solid rgba(250,248,245,0.06)" : "none",
              }}
              className={i < 3 ? "" : "sm:border-r-0"}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.65rem",
                  color: "var(--gold)",
                  fontWeight: 300,
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                {value.number}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)",
                  fontWeight: 400,
                  color: "var(--cream)",
                  marginBottom: "0.75rem",
                  lineHeight: 1.2,
                }}
              >
                {value.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.82rem",
                  fontWeight: 300,
                  color: "rgba(250,248,245,0.45)",
                  lineHeight: 1.8,
                }}
              >
                {value.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── APPROACH ──────────────────────────────────────────────────────────────────
function AboutApproach() {
  const [hovered, setHovered] = useState<number | null>(null);

  const pillars = [
    {
      number: "01",
      title: "Gut Health",
      href: "/focus/gut-health",
      body: "Every system begins here. The microbiome governs immunity, mood, and absorption. We restore the foundation.",
    },
    {
      number: "02",
      title: "Hormonal Balance",
      href: "/focus/hormonal-balance",
      body: "The endocrine system governs more than reproduction. We support estrogen, cortisol, thyroid, and adrenal function as one interconnected network.",
    },
    {
      number: "03",
      title: "Womb Wellness",
      href: "/focus/womb-wellness",
      body: "The menstrual cycle is a vital sign. We honor it, support it, and address dysfunction at its hormonal and inflammatory root.",
    },
    {
      number: "04",
      title: "Inflammation Support",
      href: "/focus/inflammation-support",
      body: "Chronic inflammation is the thread that runs through every modern condition. We address the origin—not just the expression.",
    },
  ];

  return (
    <section style={{ backgroundColor: "var(--cream)", position: "relative" }}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEW}
        transition={{ duration: 1.2, ease: EASE }}
        style={{ height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", transformOrigin: "left", opacity: 0.35 }}
      />
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: `clamp(5rem, 8vw, 10rem) var(--section-x)`,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "clamp(3.5rem, 6vw, 6rem)" }} className="md:flex-row md:items-end md:justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE }}
              style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}
            >
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)" }} />
              <span className="micro-label" style={{ color: "var(--gold)" }}>What We Work With</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 1, ease: EASE, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.2rem, 4vw, 4.5rem)",
                fontWeight: 300,
                lineHeight: 0.94,
                letterSpacing: "-0.025em",
                color: "var(--espresso)",
              }}
            >
              Four pillars.
              <br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>One practice.</em>
            </motion.h2>
          </div>
        </div>

        <div>
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.09 }}
            >
              <Link
                href={pillar.href}
                style={{ display: "block", textDecoration: "none" }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    padding: "clamp(1.5rem, 2.5vw, 2rem) 0",
                    display: "grid",
                    gridTemplateColumns: "2.5rem 1fr auto",
                    gap: "1.5rem",
                    alignItems: "center",
                    transition: "background-color 0.35s var(--ease-luxury)",
                    marginLeft: "calc(var(--section-x) * -1)",
                    marginRight: "calc(var(--section-x) * -1)",
                    paddingLeft: "var(--section-x)",
                    paddingRight: "var(--section-x)",
                    backgroundColor: hovered === i ? "rgba(26,18,8,0.03)" : "transparent",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.65rem", color: "var(--gold)", fontWeight: 300 }}>{pillar.number}</span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(1.6rem, 3vw, 3.5rem)",
                        fontWeight: 300,
                        letterSpacing: "-0.02em",
                        color: hovered === i ? "var(--gold)" : "var(--espresso)",
                        transition: "color 0.35s var(--ease-luxury)",
                        lineHeight: 1,
                        marginBottom: hovered === i ? "0.5rem" : 0,
                      }}
                    >
                      {pillar.title}
                    </h3>
                    {hovered === i && (
                      <motion.p
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.82rem",
                          fontWeight: 300,
                          color: "var(--muted)",
                          lineHeight: 1.8,
                          maxWidth: "55ch",
                        }}
                      >
                        {pillar.body}
                      </motion.p>
                    )}
                  </div>
                  <motion.span
                    animate={{ x: hovered === i ? 0 : -8, opacity: hovered === i ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    style={{ color: "var(--gold)", fontSize: "1.1rem" }}
                    aria-hidden="true"
                  >
                    →
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────
function AboutCTA() {
  return (
    <section
      style={{
        backgroundColor: "var(--espresso)",
        position: "relative",
        overflow: "hidden",
        padding: `clamp(5rem, 9vw, 12rem) var(--section-x)`,
        textAlign: "center",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(184,150,90,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", marginBottom: "clamp(2rem, 3.5vw, 3rem)" }}
        >
          <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", opacity: 0.5 }} />
          <span className="micro-label" style={{ color: "var(--gold)" }}>Begin Here</span>
          <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", opacity: 0.5 }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.5rem, 5vw, 6rem)",
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: "-0.025em",
            color: "var(--cream)",
            marginBottom: "clamp(2rem, 3.5vw, 3.5rem)",
          }}
        >
          Your body already
          <br />
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>knows the way.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
            fontWeight: 300,
            color: "rgba(250,248,245,0.45)",
            lineHeight: 1.75,
            marginBottom: "clamp(2.5rem, 4vw, 4rem)",
          }}
        >
          It just needs the right support to find it again.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}
          className="sm:flex-row sm:justify-center"
        >
          <Link href="/shop" className="btn-outline-cream">
            Explore the collection →
          </Link>
          <Link href="/focus/gut-health" className="text-link" style={{ color: "rgba(250,248,245,0.5)" }}>
            Learn about gut health
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
