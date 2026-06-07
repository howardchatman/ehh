"use client";

import { useState } from "react";
import { X } from "lucide-react";

const ITEMS = [
  "🚚 Houston Delivery Available",
  "Minimum 4-Pouch Order Required",
  "Local Pickup Available",
];

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      style={{
        backgroundColor: "var(--ocean)",
        borderBottom: "1px solid rgba(28,184,200,0.2)",
        position: "relative",
        zIndex: 60,
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "0.6rem var(--section-x)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(1rem, 3vw, 2.5rem)",
          paddingRight: "calc(var(--section-x) + 2rem)",
        }}
      >
        {ITEMS.map((item, i) => (
          <span
            key={item}
            style={{ display: "flex", alignItems: "center", gap: "clamp(1rem, 3vw, 2.5rem)" }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
            {i < ITEMS.length - 1 && (
              <span
                style={{
                  width: "3px",
                  height: "3px",
                  borderRadius: "50%",
                  backgroundColor: "var(--aqua)",
                  opacity: 0.7,
                  flexShrink: 0,
                }}
              />
            )}
          </span>
        ))}
      </div>

      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        style={{
          position: "absolute",
          right: "var(--section-x)",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          color: "rgba(255,255,255,0.45)",
          cursor: "pointer",
          padding: "0.25rem",
          display: "flex",
          alignItems: "center",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
      >
        <X size={13} strokeWidth={2} />
      </button>
    </div>
  );
}
