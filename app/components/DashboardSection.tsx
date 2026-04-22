import Brand from "./Brand";
import OwlSvg from "./OwlSvg";

const navItems = [
  { icon: "◈", label: "Overview", active: true },
  { icon: "≡", label: "Search Terms", badge: "284" },
  { icon: "◇", label: "Campaigns" },
  { icon: "↺", label: "Clawbacks" },
  { icon: "⚙", label: "Rules" },
  { icon: "▤", label: "Reports" },
];

const metrics = [
  {
    label: "Saved this month",
    value: "$12,480",
    sub: "+23% vs last month",
    highlight: true,
  },
  { label: "Irrelevant terms blocked", value: "1,247" },
  { label: "High-intent clawbacks", value: "189" },
  { label: "CTR improvement", value: "+34%" },
];

const tableRows = [
  {
    term: '"ergonomic office chair sale"',
    intent: "Potential",
    intentBg: "rgb(212,237,221)",
    intentColor: "rgb(26,110,58)",
    action: "↑ Clawback +$200",
    saved: "+$186",
    savedColor: "var(--brand-green)",
  },
  {
    term: '"how to repair my chair"',
    intent: "Irrelevant",
    intentBg: "rgb(253,222,221)",
    intentColor: "rgb(163,28,28)",
    action: "Negative keyword",
    saved: "$94",
    savedColor: "var(--ink)",
  },
  {
    term: '"cheapest chair 2026"',
    intent: "Broad",
    intentBg: "rgb(254,240,192)",
    intentColor: "rgb(138,92,0)",
    action: "Monitor",
    saved: "—",
    savedColor: "var(--ink)",
  },
  {
    term: '"free ergonomic chair template"',
    intent: "Irrelevant",
    intentBg: "rgb(253,222,221)",
    intentColor: "rgb(163,28,28)",
    action: "Negative keyword",
    saved: "$72",
    savedColor: "var(--ink)",
  },
  {
    term: '"buy herman miller aeron"',
    intent: "Potential",
    intentBg: "rgb(212,237,221)",
    intentColor: "rgb(26,110,58)",
    action: "↑ Clawback +$150",
    saved: "+$220",
    savedColor: "var(--brand-green)",
  },
];

export default function DashboardSection() {
  return (
    <section style={{ padding: "40px 40px 120px", background: "var(--cream)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            border: "1px solid rgba(45,45,45,0.08)",
            boxShadow:
              "0 30px 80px rgba(45,45,45,0.1), 0 4px 12px rgba(45,45,45,0.04)",
            overflow: "hidden",
          }}
        >
          {/* Browser bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 16px",
              background: "var(--cream-light)",
              borderBottom: "1px solid rgba(45,45,45,0.06)",
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              {["rgb(229,115,91)", "rgb(245,188,37)", "rgb(77,170,106)"].map(
                (c) => (
                  <div
                    key={c}
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      background: c,
                    }}
                  />
                ),
              )}
            </div>
            <div
              style={{
                marginLeft: 16,
                padding: "4px 12px",
                background: "#fff",
                border: "1px solid rgba(45,45,45,0.08)",
                borderRadius: 6,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 11,
                color: "var(--ink-60)",
              }}
            >
              app.thinkterm.co/campaigns
            </div>
          </div>

          <div className="dashboard-grid">
            {/* Sidebar */}
            <div
              className="dashboard-sidebar"
              style={{
                padding: "20px 14px",
                borderRight: "1px solid rgba(45,45,45,0.06)",
                background: "rgb(252,251,248)",
                minHeight: 540,
              }}
            >
              <div style={{ marginBottom: 22, padding: "0 6px" }}>
                <Brand />
              </div>
              {navItems.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 10px",
                    borderRadius: 6,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: item.active ? 600 : 500,
                    color: item.active ? "var(--ink)" : "var(--ink-60)",
                    background: item.active
                      ? "var(--cream-dark)"
                      : "transparent",
                    marginBottom: 2,
                  }}
                >
                  <span style={{ fontSize: 14 }}>{item.icon}</span>
                  <span style={{ flex: 1 }}>{item.label}</span>
                  {item.badge && (
                    <span
                      style={{
                        fontSize: 10,
                        background: "var(--brand-yellow)",
                        color: "var(--ink)",
                        padding: "1px 6px",
                        borderRadius: 100,
                        fontWeight: 700,
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
              <div
                style={{
                  marginTop: 28,
                  padding: 12,
                  background: "var(--cream-dark)",
                  borderRadius: 10,
                }}
              >
                <div style={{ width: 40, marginBottom: 8 }}>
                  <OwlSvg width={40} height={48} />
                </div>
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--ink)",
                    marginBottom: 2,
                  }}
                >
                  Ollie is watching
                </div>
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 10.5,
                    color: "var(--ink-60)",
                    lineHeight: 1.4,
                  }}
                >
                  Autopilot is on. 12 changes pending review.
                </div>
              </div>
            </div>

            {/* Main */}
            <div style={{ padding: "24px 28px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 20,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: 1,
                      color: "var(--ink-60)",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    Account overview · last 30 days
                  </div>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "var(--ink)",
                    }}
                  >
                    Gustavo Co — Master MCC
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    className="btn-ghost"
                    style={{ padding: "7px 12px", fontSize: 12 }}
                  >
                    Export
                  </button>
                  <button
                    className="btn-primary"
                    style={{ padding: "7px 14px", fontSize: 12 }}
                  >
                    Review changes (12)
                  </button>
                </div>
              </div>

              {/* Metrics */}
              <div className="four-col" style={{ marginBottom: 20 }}>
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    style={{
                      padding: 14,
                      background: m.highlight
                        ? "var(--brand-yellow)"
                        : "var(--cream-light)",
                      borderRadius: 10,
                      border: m.highlight
                        ? "1px solid rgb(226,169,29)"
                        : "1px solid rgba(45,45,45,0.06)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 10.5,
                        fontWeight: 600,
                        letterSpacing: 0.5,
                        textTransform: "uppercase",
                        color: m.highlight ? "rgb(107,75,0)" : "var(--ink-60)",
                        marginBottom: 6,
                      }}
                    >
                      {m.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 22,
                        fontWeight: 600,
                        color: "var(--ink)",
                      }}
                    >
                      {m.value}
                    </div>
                    {m.sub && (
                      <div
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: 11,
                          fontWeight: 600,
                          color: "rgb(107,75,0)",
                          marginTop: 2,
                        }}
                      >
                        {m.sub}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Table */}
              <div
                style={{
                  border: "1px solid rgba(45,45,45,0.08)",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 1fr 0.8fr",
                    padding: "10px 14px",
                    background: "var(--cream-dark)",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    color: "var(--ink-60)",
                  }}
                >
                  <div>Search term</div>
                  <div>Intent</div>
                  <div>Action</div>
                  <div style={{ textAlign: "right" }}>Saved</div>
                </div>
                {tableRows.map((r) => (
                  <div
                    key={r.term}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "2fr 1fr 1fr 0.8fr",
                      padding: "10px 14px",
                      borderTop: "1px solid rgba(45,45,45,0.05)",
                      alignItems: "center",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 12,
                    }}
                  >
                    <div style={{ color: "var(--ink)" }}>{r.term}</div>
                    <div>
                      <span
                        style={{
                          display: "inline-block",
                          background: r.intentBg,
                          color: r.intentColor,
                          padding: "2px 10px",
                          borderRadius: 100,
                          fontSize: 11,
                          fontWeight: 600,
                        }}
                      >
                        {r.intent}
                      </span>
                    </div>
                    <div style={{ color: "var(--ink-60)" }}>{r.action}</div>
                    <div
                      style={{
                        textAlign: "right",
                        color: r.savedColor,
                        fontWeight: 600,
                      }}
                    >
                      {r.saved}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
