"use client";

import { useState, useTransition } from "react";
import { subscribeNewsletter } from "@/app/newsletter-action";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-40px" } as const;

export default function NewsletterBar() {
  const [email,   setEmail]   = useState("");
  const [status,  setStatus]  = useState<"idle" | "success" | "duplicate" | "error">("idle");
  const [focused, setFocused] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await subscribeNewsletter(formData);
      setStatus(result.status);
      if (result.status === "success") setEmail("");
    });
  };

  return (
    <section
      aria-label="Newsletter signup"
      style={{
        backgroundColor: "var(--ocean)",
        borderTop: "1px solid rgba(28,184,200,0.15)",
        padding: "clamp(2.5rem, 4vw, 4rem) var(--section-x)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(2rem, 3.5vw, 3rem)",
          alignItems: "center",
        }}
        className="lg:grid-cols-2"
      >
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ height: "1px", width: "22px", backgroundColor: "var(--aqua)", opacity: 0.6 }} />
            <span className="micro-label" style={{ color: "var(--aqua)", letterSpacing: "0.2em" }}>
              Stay Connected
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--cream)",
              marginBottom: "0.6rem",
            }}
          >
            Join the Echoing Holistic
            <br />
            Health™{" "}
            <em style={{ fontStyle: "italic", color: "var(--aqua)" }}>community.</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "0.9rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.75,
            }}
          >
            Product updates · Wellness tips · Healthy recipes · Exclusive offers
          </p>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)", fontWeight: 300, color: "var(--aqua)", marginBottom: "0.4rem" }}>
                  You&rsquo;re in.
                </p>
                <p className="micro-label" style={{ color: "rgba(255,255,255,0.28)" }}>
                  Welcome to the community. You&rsquo;ll hear from us with intention.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                className="sm:flex-row sm:items-end"
              >
                <div style={{ flex: 1 }}>
                  {status === "duplicate" && (
                    <p className="micro-label" style={{ color: "var(--gold)", marginBottom: "0.5rem" }}>
                      You&rsquo;re already subscribed.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="micro-label" style={{ color: "var(--gold)", marginBottom: "0.5rem" }}>
                      Something went wrong — please try again.
                    </p>
                  )}
                  <label htmlFor="newsletter-email" className="micro-label" style={{ color: "rgba(255,255,255,0.3)", display: "block", marginBottom: "0.5rem" }}>
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder="you@example.com"
                    required
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid ${focused ? "var(--aqua)" : "rgba(255,255,255,0.15)"}`,
                      outline: "none",
                      padding: "0.8rem 1rem",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      fontWeight: 300,
                      color: "var(--cream)",
                      transition: "border-color 0.3s var(--ease-luxury)",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="btn-ocean"
                  style={{ flexShrink: 0, opacity: isPending ? 0.6 : 1 }}
                >
                  {isPending ? "Joining..." : "Join Free"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
          {status !== "success" && (
            <p className="micro-label" style={{ color: "rgba(255,255,255,0.18)", marginTop: "0.75rem" }}>
              No spam. Unsubscribe anytime.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
