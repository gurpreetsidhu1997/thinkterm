import OwlSvg from "./OwlSvg";

const steps = [
  {
    num: "STEP 01", color: "var(--brand-blue)", badge: "⚡ 2 min setup",
    title: "Connect your Google Ads account",
    desc: "One-click OAuth. ThinkTerm ingests your search term reports going back 90 days. No scripts, no spreadsheets.",
    illustration: (
      <svg viewBox="0 0 280 260" width="100%" height="100%" style={{ overflow: "visible" }}>
        <g transform="translate(40, 0)"><OwlSvg width={200} height={240} /></g>
        <g transform="translate(80, 180)">
          <rect x="0" y="0" width="120" height="60" rx="3" fill="#2D3D55" />
          <rect x="3" y="3" width="114" height="54" rx="2" fill="#FAF7F3" />
          <rect x="8" y="8" width="20" height="3" rx="1" fill="#E8843D" />
          <line x1="8" y1="16" x2="100" y2="16" stroke="#C9C2BB" strokeWidth="1" />
          {[["#4DAA6A",44,8],["#4DAA6A",38,14],["#E8843D",32,20],["#E8843D",28,24],["#E04F3F",34,18],["#E04F3F",40,12],["#4DAA6A",44,8],["#4DAA6A",38,14],["#E8843D",32,20],["#E8843D",36,16],["#E04F3F",42,10],["#4DAA6A",44,8]].map(([fill, y, h], i) => (
            <rect key={i} x={8 + i * 8} y={y as number} width="6" height={h as number} fill={fill as string} />
          ))}
          <path d="M -8,60 L 128,60 L 122,68 L -2,68 Z" fill="#1F1E1B" />
        </g>
      </svg>
    ),
  },
  {
    num: "STEP 02", color: "var(--brand-yellow)", badge: "⚡ Updates hourly",
    title: "Our AI reads every search term",
    desc: "We classify each query into Potential, Broad, or Irrelevant using a model fine-tuned on 4.2B buyer-intent signals across 90+ industries.",
    illustration: (
      <svg viewBox="0 0 240 260" width="100%" height="100%" style={{ overflow: "visible" }}>
        <g transform="translate(20, 0)"><OwlSvg width={200} height={240} /></g>
        <g transform="translate(70, 150)">
          <rect x="0" y="0" width="100" height="70" rx="4" fill="#FAF6EC" stroke="#1F1E1B" strokeWidth="1.8" />
          <line x1="50" y1="0" x2="50" y2="70" stroke="#1F1E1B" strokeWidth="0.8" opacity="0.3" />
          <rect x="6" y="8" width="36" height="4" rx="1" fill="#E04F3F" />
          <rect x="56" y="8" width="32" height="4" rx="1" fill="#4DAA6A" />
        </g>
      </svg>
    ),
  },
  {
    num: "STEP 03", color: "var(--brand-green)", badge: "⚡ Autopilot ready",
    title: "We rebalance budget automatically",
    desc: "Irrelevant terms become negative keywords. High-intent terms get budget. You approve changes with one click — or let it run on autopilot.",
    illustration: (
      <svg viewBox="0 0 320 260" width="100%" height="100%" style={{ overflow: "visible" }}>
        <g transform="translate(180, 30)">
          <rect x="0" y="0" width="120" height="100" rx="4" fill="#FAF6EC" stroke="#1F1E1B" strokeWidth="2" />
          <circle cx="20" cy="20" r="6" fill="#4DAA6A" />
          <rect x="32" y="17" width="70" height="3" rx="1" fill="#1F1E1B" opacity="0.55" />
          <circle cx="20" cy="48" r="6" fill="#E8843D" />
          <rect x="32" y="45" width="62" height="3" rx="1" fill="#1F1E1B" opacity="0.55" />
          <circle cx="20" cy="76" r="6" fill="#E04F3F" />
          <rect x="32" y="73" width="68" height="3" rx="1" fill="#1F1E1B" opacity="0.55" />
        </g>
        <g transform="translate(0, 0)"><OwlSvg width={200} height={240} /></g>
        <line x1="200" y1="138" x2="174" y2="60" stroke="#E8843D" strokeWidth="3" strokeLinecap="round" />
        <circle cx="174" cy="60" r="4" fill="#C76722" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-pad" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 80px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgb(231,246,236)", color: "rgb(26,82,48)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "6px 12px", borderRadius: 6 }}>How it works</div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.8, marginTop: 16, marginBottom: 18, color: "var(--ink)" }}>
            From 4 hours of audits<br />to <span style={{ color: "var(--brand-green)", fontStyle: "italic" }}>&nbsp;4 minutes.</span>
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, lineHeight: 1.6, color: "var(--ink-60)" }}>Three steps to stop bleeding budget. No scripts, no dashboards to build, no spreadsheets to maintain.</p>
        </div>
        <div className="three-col">
          {steps.map((s) => (
            <div key={s.num} style={{ background: "#fff", borderRadius: 18, padding: 32, border: "1px solid rgba(45,45,45,0.06)", boxShadow: "0 4px 20px rgba(45,45,45,0.04)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: s.color }} />
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "var(--ink-60)", letterSpacing: 1, marginBottom: 16 }}>{s.num}</div>
              <div style={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, overflow: "visible" }}>
                <div style={{ display: "inline-block", width: 260, animation: "owlFloat 4.5s ease-in-out infinite" }}>{s.illustration}</div>
              </div>
              <div style={{ display: "inline-block", background: "var(--cream-light)", border: "1px solid rgba(45,45,45,0.06)", padding: "3px 10px", borderRadius: 100, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 600, color: "var(--ink-60)", marginBottom: 14 }}>{s.badge}</div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 700, lineHeight: 1.25, color: "var(--ink)", marginBottom: 12, letterSpacing: -0.3 }}>{s.title}</h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, lineHeight: 1.6, color: "var(--ink-60)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
