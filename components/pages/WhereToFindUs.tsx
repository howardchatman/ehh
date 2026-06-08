"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "-60px" } as const;

// ─── SWAP THIS with Ecko's Google Calendar ID ──────────────────────────────
// Steps:
//   1. Open Google Calendar → Settings → find the calendar → "Integrate calendar"
//   2. Copy the Calendar ID (e.g. abc123@group.calendar.google.com)
//   3. Make sure the calendar is set to Public
//   4. Paste it below replacing PASTE_CALENDAR_ID_HERE
const GOOGLE_CALENDAR_ID = "44486f17d0c9fdaab77fb91c8639f7cb8fb1295b0e5d5adbd604542879616bdf@group.calendar.google.com";
// ──────────────────────────────────────────────────────────────────────────

const CALENDAR_EMBED_URL =
  `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(GOOGLE_CALENDAR_ID)}` +
  `&ctz=America%2FChicago` +
  `&mode=AGENDA` +
  `&showTitle=0` +
  `&showNav=1` +
  `&showDate=1` +
  `&showPrint=0` +
  `&showTabs=1` +
  `&showCalendars=0` +
  `&showTz=0` +
  `&bgcolor=%230A2540` +
  `&color=%231CB8C8`;

const EVENT_TYPES = [
  "Vendor Events",
  "Pop-Ups",
  "Farmers Markets",
  "Gym Events",
  "Community Events",
  "Sampling Events",
];

export default function WhereToFindUs() {
  return (
    <div style={{ backgroundColor: "var(--coastal)" }}>

      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(160deg, var(--ocean) 0%, var(--ocean-mid) 100%)",
          padding: "clamp(7rem, 12vw, 10rem) var(--section-x) clamp(4rem, 6vw, 6rem)",
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
          <span className="micro-label" style={{ color: "var(--aqua)", letterSpacing: "0.22em" }}>Houston & Surrounding Areas</span>
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
          Where To
          <br />
          <em style={{ fontStyle: "italic", color: "var(--aqua)" }}>Find Us</em>
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
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          Come taste Healing Water™ in person. We show up at vendor events,
          pop-ups, farmers markets, gyms, and community events across Houston.
        </motion.p>

        {/* Event type chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.34 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            justifyContent: "center",
            marginTop: "clamp(2rem, 3vw, 3rem)",
            position: "relative",
            zIndex: 1,
          }}
        >
          {EVENT_TYPES.map((type) => (
            <span
              key={type}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--aqua)",
                border: "1px solid rgba(28,184,200,0.3)",
                padding: "0.35rem 0.9rem",
                backgroundColor: "rgba(28,184,200,0.06)",
              }}
            >
              {type}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ── CALENDAR ── */}
      <section
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "var(--section-y) var(--section-x)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div
            style={{
              border: "1px solid var(--border)",
              overflow: "hidden",
              backgroundColor: "var(--ocean)",
            }}
          >
            <iframe
              src={CALENDAR_EMBED_URL}
              style={{
                width: "100%",
                height: "clamp(500px, 70vh, 800px)",
                border: "none",
                display: "block",
              }}
              title="Echoing Holistic Health Event Calendar"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* How events are listed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(1rem, 2vw, 1.5rem)",
            marginTop: "clamp(2rem, 3.5vw, 3.5rem)",
          }}
          className="sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { label: "Event Name",        icon: "📍" },
            { label: "Date & Time",       icon: "📅" },
            { label: "Address",           icon: "🗺️" },
            { label: "Event Description", icon: "📋" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: "1.25rem 1.5rem",
                border: "1px solid var(--border)",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 400, color: "var(--ocean)", letterSpacing: "0.04em" }}>
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.8rem", color: "var(--muted)", textAlign: "center", marginTop: "1rem" }}>
          Each event listing includes the above details.
        </p>
      </section>

    </div>
  );
}
