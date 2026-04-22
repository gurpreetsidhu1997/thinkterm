const features = [
  { icon: "◉", bg: "rgb(235,242,251)", color: "rgb(74,127,212)", title: "Autopilot mode", desc: "Let ThinkTerm apply negatives and budget shifts automatically, with daily digest." },
  { icon: "⚙", bg: "rgb(254,246,220)", color: "rgb(245,188,37)", title: "Rules engine", desc: "Your ICP, your rules. Lock in custom logic per campaign or ad group." },
  { icon: "↺", bg: "rgb(231,246,236)", color: "rgb(77,170,106)", title: "Clawback budget", desc: "Drain wasted spend into high-intent keywords without touching bidding." },
  { icon: "◈", bg: "rgb(235,242,251)", color: "rgb(74,127,212)", title: "MCC ready", desc: "Manage 50 client accounts from one pane. Built for agencies from day one." },
  { icon: "◆", bg: "rgb(254,246,220)", color: "rgb(245,188,37)", title: "Slack alerts", desc: "Know the moment a new high-intent term appears. Route to the right channel." },
  { icon: "▤", bg: "rgb(231,246,236)", color: "rgb(77,170,106)", title: "Audit trail", desc: "Every decision logged with reasoning. Show your CFO exactly why spend dropped." },
];

export default function FeaturesSection() {
  return (
    <section id="product" className="section-pad" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 64px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgb(254,246,220)", color: "rgb(138,92,0)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "6px 12px", borderRadius: 6 }}>Features</div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -0.8, marginTop: 16, color: "var(--ink)" }}>
            Everything a PPC manager <span style={{ color: "var(--brand-yellow)", fontStyle: "italic" }}>actually</span> needs.
          </h2>
        </div>
        <div className="three-col">
          {features.map((f) => (
            <div key={f.title} style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid rgba(45,45,45,0.06)", boxShadow: "0 2px 10px rgba(45,45,45,0.03)" }}>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: f.bg, color: f.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 18 }}>{f.icon}</div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 700, color: "var(--ink)", marginBottom: 6, letterSpacing: -0.2 }}>{f.title}</h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, lineHeight: 1.55, color: "var(--ink-60)" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
