import OwlSvg from "./OwlSvg";

const stats = [
  { value: "34%", label: "of spend wasted on wrong-intent searches" },
  { value: "200+", label: "new search terms per day in a typical account" },
  { value: "4.2h", label: "weekly audit cycle for a manual optimization" },
];

const results = [
  { term: '"buy ergonomic chair online"', desc: "High commercial intent", badge: "POTENTIAL", badgeBg: "rgb(212,237,221)", badgeColor: "rgb(26,110,58)", icon: "✓", iconBg: "rgb(26,110,58)", cpc: "$4.20 CPC", cpcColor: "var(--ink-60)" },
  { term: '"how to fix my chair wheel"', desc: "DIY search, not a buyer", badge: "IRRELEVANT", badgeBg: "rgb(253,222,221)", badgeColor: "rgb(163,28,28)", icon: "✕", iconBg: "rgb(163,28,28)", cpc: "−$2.80 saved", cpcColor: "var(--brand-green)" },
  { term: '"best office chair 2026"', desc: "Research-then-buy pattern", badge: "POTENTIAL", badgeBg: "rgb(212,237,221)", badgeColor: "rgb(26,110,58)", icon: "✓", iconBg: "rgb(26,110,58)", cpc: "$3.60 CPC", cpcColor: "var(--ink-60)" },
];

const suggestions = ["buy ergonomic chair online", "how to fix my chair wheel", "what is an ergonomic chair", "best office chair 2026", "ergonomic chair price india", "free chair design template"];

export default function ProblemSection() {
  return (
    <section className="section-pad" style={{ background: "var(--cream-dark)", position: "relative" }}>
      <div className="container">
        <div className="two-col">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgb(235,242,251)", color: "rgb(26,63,122)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "6px 12px", borderRadius: 6 }}>The problem</div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: -0.8, color: "var(--ink)", marginTop: 16, marginBottom: 28 }}>
              Google shows your ads to the wrong people.<br />
              <span style={{ color: "var(--brand-blue)", fontStyle: "italic" }}>Every. Single. Day.</span>
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, lineHeight: 1.65, color: "var(--ink-60)", marginBottom: 28 }}>
              Broad match and smart bidding quietly spend your budget on searches you never intended to target. The average account wastes <span style={{ color: "var(--ink)", fontWeight: 600 }}>34% of spend</span> on terms with zero buying intent.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {stats.map((s) => (
                <div key={s.value} style={{ display: "flex", alignItems: "baseline", gap: 16, paddingBottom: 14, borderBottom: "1px solid rgba(45,45,45,0.08)" }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, letterSpacing: -1, color: "var(--brand-blue)", minWidth: 90 }}>{s.value}</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "var(--ink-60)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#fff", borderRadius: 20, border: "1px solid rgba(45,45,45,0.08)", boxShadow: "0 20px 60px rgba(45,45,45,0.08)", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 18px", borderBottom: "1px solid rgba(45,45,45,0.06)", background: "var(--cream-light)" }}>
              <div style={{ display: "flex", gap: 6 }}>
                {["rgb(245,188,37)", "rgb(77,170,106)", "rgb(74,127,212)"].map((c) => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "var(--ink-60)", marginLeft: 8 }}>thinkterm / classifier · live</div>
              <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--brand-green)", boxShadow: "0 0 0 3px rgba(77,170,106,0.25)" }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "var(--ink-60)" }}>AI online</span>
              </div>
            </div>
            <div style={{ padding: "18px", display: "flex", alignItems: "center", gap: 14, borderBottom: "1px solid rgba(45,45,45,0.06)" }}>
              <div style={{ width: 48, height: 48, flexShrink: 0 }}><OwlSvg width={48} height={58} /></div>
              <form style={{ flex: 1, display: "flex", gap: 10 }}>
                <div style={{ flex: 1, display: "flex", alignItems: "center", background: "var(--cream-light)", borderRadius: 10, border: "1px solid rgba(45,45,45,0.08)", padding: "0 14px" }}>
                  <span style={{ fontSize: 13, color: "var(--ink-60)", marginRight: 8 }}>›</span>
                  <input placeholder="Type any search term…" style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "var(--ink)", padding: "12px 0" }} />
                </div>
                <button type="submit" className="btn-primary" style={{ padding: "12px 18px", fontSize: 13 }}>Classify</button>
              </form>
            </div>
            <div style={{ padding: "10px 18px", display: "flex", gap: 6, flexWrap: "wrap", borderBottom: "1px solid rgba(45,45,45,0.06)", background: "rgb(252,251,248)" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "var(--ink-60)", fontWeight: 600, alignSelf: "center", marginRight: 4 }}>Try:</span>
              {suggestions.map((s) => (
                <button key={s} style={{ background: "transparent", border: "1px solid rgba(45,45,45,0.1)", borderRadius: 100, padding: "4px 12px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, color: "var(--ink-60)", cursor: "pointer" }}>{s}</button>
              ))}
            </div>
            <div style={{ maxHeight: 340, overflow: "auto" }}>
              {results.map((r) => (
                <div key={r.term} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, padding: "14px 18px", borderBottom: "1px solid rgba(45,45,45,0.05)", alignItems: "center" }}>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13.5, color: "var(--ink)", marginBottom: 3 }}>{r.term}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "var(--ink-60)" }}>{r.desc}</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: r.badgeBg, color: r.badgeColor, padding: "3px 9px", borderRadius: 100, fontSize: 10.5, fontWeight: 700, letterSpacing: 0.7 }}>
                      <span style={{ width: 14, height: 14, borderRadius: "50%", background: r.iconBg, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700 }}>{r.icon}</span>
                      {r.badge}
                    </div>
                    <div style={{ fontSize: 12, color: r.cpcColor, fontWeight: r.cpcColor === "var(--brand-green)" ? 600 : 400 }}>{r.cpc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
