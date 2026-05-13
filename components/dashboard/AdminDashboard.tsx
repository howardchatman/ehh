"use client";

import { useState, useMemo } from "react";

type WaitlistEntry = {
  id: string;
  name: string;
  email: string;
  focus_area: string | null;
  created_at: string;
};

type Props = {
  waitlist: WaitlistEntry[];
  logout: () => Promise<void>;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(184,150,90,0.2)",
        borderRadius: "16px",
        padding: "1.75rem",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
        flex: "1 1 180px",
        minWidth: 0,
      }}
    >
      <p style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(184,150,90,0.7)", marginBottom: "0.75rem" }}>
        {label}
      </p>
      <p style={{ fontFamily: "var(--font-serif)", fontSize: "2.6rem", fontWeight: 300, color: "var(--cream)", lineHeight: 1 }}>
        {value}
      </p>
      {sub && (
        <p style={{ marginTop: "0.5rem", fontSize: "0.72rem", color: "rgba(250,248,245,0.35)", fontWeight: 300 }}>
          {sub}
        </p>
      )}
    </div>
  );
}

export default function AdminDashboard({ waitlist, logout }: Props) {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<"name" | "email" | "focus_area" | "created_at">("created_at");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;

  const stats = useMemo(() => {
    const total = waitlist.length;
    const recent = waitlist.filter((e) => new Date(e.created_at).getTime() > sevenDaysAgo).length;
    const focusCounts: Record<string, number> = {};
    waitlist.forEach((e) => {
      const fa = e.focus_area ?? "Not specified";
      focusCounts[fa] = (focusCounts[fa] ?? 0) + 1;
    });
    const topFocus = Object.entries(focusCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";
    return { total, recent, topFocus };
  }, [waitlist]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    const rows = q
      ? waitlist.filter(
          (e) =>
            e.name?.toLowerCase().includes(q) ||
            e.email?.toLowerCase().includes(q) ||
            (e.focus_area ?? "").toLowerCase().includes(q)
        )
      : waitlist;
    return [...rows].sort((a, b) => {
      const av = (a[sortField] ?? "").toString();
      const bv = (b[sortField] ?? "").toString();
      return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
    });
  }, [waitlist, search, sortField, sortDir]);

  function toggleSort(field: typeof sortField) {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  }

  function exportCSV() {
    const header = "Name,Email,Focus Area,Signed Up\n";
    const rows = filtered
      .map((e) => `"${e.name}","${e.email}","${e.focus_area ?? ""}","${formatDate(e.created_at)}"`)
      .join("\n");
    download("waitlist.csv", "text/csv", header + rows);
  }

  async function exportXLSX() {
    const XLSX = await import("xlsx");
    const data = filtered.map((e) => ({
      Name: e.name,
      Email: e.email,
      "Focus Area": e.focus_area ?? "",
      "Signed Up": formatDate(e.created_at),
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Waitlist");
    XLSX.writeFile(wb, "waitlist.xlsx");
  }

  async function exportPDF() {
    const { default: jsPDF } = await import("jspdf");
    const { default: autoTable } = await import("jspdf-autotable");
    const doc = new jsPDF({ orientation: "landscape" });
    doc.setFontSize(14);
    doc.text("Echoing Holistic Health — Waitlist", 14, 16);
    autoTable(doc, {
      startY: 24,
      head: [["Name", "Email", "Focus Area", "Signed Up"]],
      body: filtered.map((e) => [e.name, e.email, e.focus_area ?? "", formatDate(e.created_at)]),
      styles: { fontSize: 9 },
      headStyles: { fillColor: [184, 150, 90] },
    });
    doc.save("waitlist.pdf");
  }

  function download(filename: string, mime: string, content: string) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  const thStyle: React.CSSProperties = {
    padding: "0.75rem 1rem",
    textAlign: "left",
    fontSize: "0.58rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "rgba(184,150,90,0.7)",
    fontWeight: 500,
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
  };

  const tdStyle: React.CSSProperties = {
    padding: "0.85rem 1rem",
    fontSize: "0.8rem",
    color: "rgba(250,248,245,0.8)",
    fontWeight: 300,
    borderTop: "1px solid rgba(255,255,255,0.04)",
  };

  return (
    <div
      style={{
        minHeight: "100svh",
        background: "linear-gradient(135deg, #0d0804 0%, #1a1208 50%, #0d0804 100%)",
        fontFamily: "var(--font-sans)",
        padding: "0",
      }}
    >
      {/* Background orbs */}
      <div aria-hidden style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "10%", left: "5%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,150,90,0.06) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "15%", right: "5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,150,90,0.05) 0%, transparent 70%)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem 4rem" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p style={{ fontSize: "0.58rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(184,150,90,0.6)", marginBottom: "0.25rem" }}>
              Echoing Holistic Health
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 300, color: "var(--cream)", letterSpacing: "-0.02em" }}>
              Admin Dashboard
            </h1>
          </div>
          <form action={logout}>
            <button
              type="submit"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(184,150,90,0.25)",
                borderRadius: "8px",
                padding: "0.6rem 1.25rem",
                color: "rgba(250,248,245,0.55)",
                fontSize: "0.62rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Sign Out
            </button>
          </form>
        </div>

        {/* Stat cards */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          <StatCard label="Total Signups" value={stats.total} sub="All time" />
          <StatCard label="Last 7 Days" value={stats.recent} sub="New signups" />
          <StatCard label="Top Focus Area" value={stats.topFocus} sub="Most requested" />
        </div>

        {/* Waitlist table card */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(184,150,90,0.15)",
            borderRadius: "16px",
            boxShadow: "0 16px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
            overflow: "hidden",
          }}
        >
          {/* Table toolbar */}
          <div style={{ padding: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ flex: 1, minWidth: "200px" }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 300, color: "var(--cream)", marginBottom: "0.2rem" }}>
                Waitlist
              </h2>
              <p style={{ fontSize: "0.68rem", color: "rgba(250,248,245,0.35)", fontWeight: 300 }}>
                {filtered.length} of {waitlist.length} entries
              </p>
            </div>

            {/* Search */}
            <input
              type="search"
              placeholder="Search by name, email, or focus…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(184,150,90,0.2)",
                borderRadius: "8px",
                padding: "0.55rem 0.9rem",
                color: "var(--cream)",
                fontSize: "0.78rem",
                fontWeight: 300,
                outline: "none",
                width: "220px",
              }}
            />

            {/* Export buttons */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {[
                { label: "CSV", fn: exportCSV },
                { label: "XLSX", fn: exportXLSX },
                { label: "PDF", fn: exportPDF },
              ].map(({ label, fn }) => (
                <button
                  key={label}
                  onClick={fn}
                  style={{
                    background: "rgba(184,150,90,0.12)",
                    border: "1px solid rgba(184,150,90,0.3)",
                    borderRadius: "8px",
                    padding: "0.55rem 0.9rem",
                    color: "rgba(184,150,90,0.9)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "rgba(0,0,0,0.2)" }}>
                  {(["name", "email", "focus_area", "created_at"] as const).map((field) => (
                    <th key={field} style={thStyle} onClick={() => toggleSort(field)}>
                      {field === "created_at" ? "Signed Up" : field === "focus_area" ? "Focus Area" : field.charAt(0).toUpperCase() + field.slice(1)}
                      {sortField === field && (
                        <span style={{ marginLeft: "0.3em", opacity: 0.7 }}>
                          {sortDir === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={4} style={{ ...tdStyle, textAlign: "center", padding: "3rem", color: "rgba(250,248,245,0.2)" }}>
                      No entries found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((entry, i) => (
                    <tr
                      key={entry.id ?? i}
                      style={{ transition: "background 0.15s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(184,150,90,0.04)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <td style={tdStyle}>{entry.name}</td>
                      <td style={{ ...tdStyle, color: "rgba(184,150,90,0.75)", fontFamily: "monospace", fontSize: "0.75rem" }}>
                        {entry.email}
                      </td>
                      <td style={tdStyle}>
                        {entry.focus_area ? (
                          <span
                            style={{
                              background: "rgba(184,150,90,0.1)",
                              border: "1px solid rgba(184,150,90,0.2)",
                              borderRadius: "20px",
                              padding: "0.2rem 0.65rem",
                              fontSize: "0.68rem",
                              letterSpacing: "0.04em",
                              color: "rgba(184,150,90,0.85)",
                            }}
                          >
                            {entry.focus_area}
                          </span>
                        ) : (
                          <span style={{ color: "rgba(255,255,255,0.18)" }}>—</span>
                        )}
                      </td>
                      <td style={{ ...tdStyle, color: "rgba(250,248,245,0.4)", fontSize: "0.72rem" }}>
                        {formatDate(entry.created_at)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
