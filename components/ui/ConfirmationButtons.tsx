"use client";

import Link from "next/link";

export default function ConfirmationButtons() {
  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
      <Link
        href="/shop"
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: "0.58rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "white",
          backgroundColor: "transparent",
          border: "1px solid rgba(255,255,255,0.5)",
          padding: "1rem 2.5rem",
          textDecoration: "none",
          display: "inline-block",
          transition: "background-color 0.3s, border-color 0.3s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.backgroundColor = "rgba(255,255,255,0.1)";
          el.style.borderColor = "white";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.backgroundColor = "transparent";
          el.style.borderColor = "rgba(255,255,255,0.5)";
        }}
      >
        Order More
      </Link>
      <Link
        href="/contact"
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: "0.58rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
          backgroundColor: "transparent",
          border: "1px solid rgba(255,255,255,0.15)",
          padding: "1rem 2.5rem",
          textDecoration: "none",
          display: "inline-block",
          transition: "color 0.3s, border-color 0.3s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.color = "white";
          el.style.borderColor = "rgba(255,255,255,0.4)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.color = "rgba(255,255,255,0.5)";
          el.style.borderColor = "rgba(255,255,255,0.15)";
        }}
      >
        Contact Us
      </Link>
    </div>
  );
}
