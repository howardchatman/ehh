"use client";

import Link from "next/link";

interface ComingSoonProps {
  title: string;
  subtitle?: string;
  backLabel?: string;
  backHref?: string;
}

export default function ComingSoon({
  title,
  subtitle = "This chapter is being written with intention. Return soon.",
  backLabel = "Return Home",
  backHref = "/",
}: ComingSoonProps) {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="text-center max-w-lg">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-10" style={{ backgroundColor: "var(--gold)" }} />
          <span
            className="editorial-label"
            style={{ color: "var(--gold)", fontSize: "0.6rem" }}
          >
            Coming Soon
          </span>
          <div className="h-px w-10" style={{ backgroundColor: "var(--gold)" }} />
        </div>

        <h1
          className="editorial-headline mb-8"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            color: "var(--espresso)",
            lineHeight: 1,
          }}
        >
          {title}
        </h1>

        <div
          className="mx-auto mb-8 h-px"
          style={{
            width: "60px",
            background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
          }}
        />

        <p
          className="font-serif italic mb-12"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.05rem",
            color: "var(--muted)",
            fontWeight: 300,
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>

        <Link
          href={backHref}
          className="editorial-label inline-flex items-center gap-3 group"
          style={{
            color: "var(--espresso)",
            fontSize: "0.62rem",
            borderBottom: "1px solid var(--espresso)",
            paddingBottom: "2px",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.color = "var(--gold)";
            el.style.borderBottomColor = "var(--gold)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.color = "var(--espresso)";
            el.style.borderBottomColor = "var(--espresso)";
          }}
        >
          ← {backLabel}
        </Link>
      </div>
    </section>
  );
}
