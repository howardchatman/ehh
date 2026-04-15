"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const VIEW = { once: true, margin: "-100px" } as const;

export default function Philosophy() {
  return (
    <section
      aria-label="Philosophy"
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
          opacity: 0.5,
        }}
      />

      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: `var(--section-y) var(--section-x)`,
        }}
      >

        {/* ── Layout: two-column editorial ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(3rem, 6vw, 6rem)",
          }}
          className="lg:grid-cols-[1fr_auto_1fr]"
        >

          {/* ── LEFT: Pull quote ── */}
          <div>
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2.5rem, 4vw, 4rem)" }}
            >
              <div style={{ height: "1px", width: "28px", backgroundColor: "var(--gold)", flexShrink: 0 }} />
              <span className="micro-label" style={{ color: "var(--gold)" }}>
                Philosophy
              </span>
            </motion.div>

            {/* Big pull quote */}
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.6rem, 5.5vw, 6rem)",
                fontWeight: 300,
                lineHeight: 0.94,
                letterSpacing: "-0.025em",
                color: "var(--espresso)",
                marginBottom: "clamp(2rem, 3.5vw, 3.5rem)",
              }}
            >
              This is not
              <br />
              surface-level
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                wellness.
              </em>
            </motion.h2>

            {/* Decorative image block — desktop only */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 1, ease: EASE, delay: 0.4 }}
              className="hidden lg:block"
              style={{
                width: "100%",
                maxWidth: "260px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/ehh1.png"
                alt=""
                width={260}
                height={347}
                style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "center top", display: "block" }}
              />
            </motion.div>
          </div>

          {/* ── CENTER: Vertical thin rule (desktop) ── */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={VIEW}
            transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
            className="hidden lg:block"
            style={{
              width: "1px",
              alignSelf: "stretch",
              background: "linear-gradient(to bottom, transparent, var(--gold-pale), transparent)",
              transformOrigin: "top center",
            }}
          />

          {/* ── RIGHT: Body copy ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "clamp(1.5rem, 2.5vw, 2.25rem)",
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 1, ease: EASE, delay: 0.25 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)",
                fontWeight: 300,
                color: "var(--charcoal)",
                lineHeight: 1.75,
              }}
            >
              Echoing Holistic Health was created for women who are done guessing.
              Women who have felt the discomfort. The imbalance. The quiet
              frustration of knowing something isn&rsquo;t right — and being
              told everything is fine.
            </motion.p>

            {/* Gold rule mid-section */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={VIEW}
              transition={{ duration: 0.8, ease: EASE, delay: 0.42 }}
              style={{
                height: "1px",
                width: "60px",
                backgroundColor: "var(--gold)",
                transformOrigin: "left center",
                opacity: 0.7,
              }}
            />

            {[
              "This is a space for restoration. For understanding your body instead of fighting it. For choosing intention over quick fixes.",
              "Your body is not broken. It needs support, understanding, and consistency. That is what we are here to provide.",
            ].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.9, ease: EASE, delay: 0.52 + i * 0.12 }}
                style={{
                  fontFamily: i === 0 ? "var(--font-serif)" : "var(--font-sans)",
                  fontSize: i === 0 ? "clamp(1rem, 1.35vw, 1.2rem)" : "0.875rem",
                  fontWeight: 300,
                  fontStyle: i === 0 ? "italic" : "normal",
                  color: i === 0 ? "var(--muted)" : "var(--muted)",
                  lineHeight: 1.85,
                }}
              >
                {line}
              </motion.p>
            ))}

            {/* Founder credential */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE, delay: 0.78 }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                fontWeight: 400,
                color: "var(--gold)",
                letterSpacing: "0.04em",
                lineHeight: 1.7,
                paddingTop: "0.75rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              Founded on 14 years of lived experience — endometriosis, Crohn&rsquo;s disease,
              and the hard-won knowledge that comes from healing yourself first.
            </motion.p>

            {/* Vertical pull quote — mobile */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.55 }}
              viewport={VIEW}
              transition={{ duration: 1.2, ease: EASE, delay: 0.9 }}
              className="lg:hidden"
              style={{
                borderLeft: "1px solid var(--gold)",
                paddingLeft: "1.5rem",
                marginTop: "0.5rem",
              }}
            >
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontStyle: "italic", color: "var(--muted)", lineHeight: 1.7 }}>
                The body is not broken. It is responding.
              </p>
            </motion.blockquote>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "40%",
          height: "100%",
          background:
            "radial-gradient(ellipse at 0% 50%, rgba(184,150,90,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
