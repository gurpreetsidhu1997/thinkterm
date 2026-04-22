import OwlSvg from "./OwlSvg";

const chips = [
  { text: "buy running shoes", badge: "✓", color: "#d4eddd", textColor: "#1a6e3a", top: "14%", left: "8%", delay: "0s" },
  { text: "what is shoe size", badge: "✕", color: "#fddedd", textColor: "#a31c1c", top: "38%", left: "4%", delay: "0.4s" },
  { text: "best nike alternatives", badge: "✓", color: "#d4eddd", textColor: "#1a6e3a", top: "62%", left: "10%", delay: "0.8s" },
  { text: "free running plan", badge: "✕", color: "#fddedd", textColor: "#a31c1c", top: "86%", left: "16%", delay: "1.2s" },
  { text: "marathon training price", badge: "?", color: "#fef0c0", textColor: "#8a5c00", top: "52%", right: "16%", delay: "0.2s" },
  { text: "running shoes near me", badge: "✓", color: "#d4eddd", textColor: "#1a6e3a", top: "34%", right: "2%", delay: "0.6s" },
  { text: "how do treadmills work", badge: "✕", color: "#fddedd", textColor: "#a31c1c", top: "76%", right: "6%", delay: "1s" },
];

export default function HeroSection({ onDemo, onTrial }: { onDemo: () => void; onTrial: () => void }) {
  return (
    <section className="section-pad" style={{ minHeight: "100vh", paddingTop: 120, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 30%, rgba(74,127,212,0.08), transparent 50%), radial-gradient(circle at 80% 70%, rgba(74,127,212,0.05), transparent 50%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", position: "relative" }}>
        <div className="hero-grid">
          {/* Left */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "var(--cream-dark)", border: "1px solid rgba(45,45,45,0.08)", borderRadius: 100, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: 0.5, color: "var(--ink-60)", textTransform: "uppercase", marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--brand-green)", boxShadow: "0 0 0 3px rgba(77,170,106,0.2)" }} />
              Trained on 4.2B search terms
            </div>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(36px, 5.2vw, 68px)", fontWeight: 800, lineHeight: 1.06, letterSpacing: -2, color: "var(--ink)", marginBottom: 28, maxWidth: 600, paddingBottom: "0.12em" }}>
              Stop paying for<br />
              <span style={{ color: "var(--brand-blue)", position: "relative", display: "inline-block", marginRight: "0.35em" }}>
                irrelevant
                <svg viewBox="0 0 300 20" preserveAspectRatio="none" style={{ position: "absolute", bottom: "-0.08em", left: 0, width: "100%", height: "0.18em", pointerEvents: "none" }}>
                  <path d="M5,12 Q75,2 150,10 T295,8" stroke="var(--brand-yellow)" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>
              </span>clicks.
            </h1>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.55, color: "var(--ink-60)", maxWidth: 520, marginBottom: 36 }}>
              ThinkTerm is the intent optimizer for Google Ads. Our AI reads every search term, flags wasted spend, and clawbacks budget to high-intent keywords — while you sleep.
            </p>
            <div className="hero-cta-row">
              <button onClick={onTrial} className="btn-primary" style={{ padding: "16px 26px", fontSize: 15 }}>Start free 14-day trial</button>
              <button onClick={onDemo} className="btn-ghost" style={{ padding: "16px 22px", fontSize: 15 }}><span style={{ marginRight: 8 }}>▶</span> Watch 90-sec demo</button>
            </div>
            <div className="hero-trust-row" style={{ color: "var(--ink-60)", fontSize: 13, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 28 }}>
              <span>✓ No credit card</span><span>✓ 5-minute setup</span><span>✓ Works with MCC</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 54, animation: "owlFloat 4s ease-in-out infinite" }}>
                <OwlSvg width={54} height={65} />
              </div>
              <div style={{ position: "relative", background: "#fff", border: "1px solid rgba(45,45,45,0.1)", borderRadius: 14, padding: "8px 12px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12.5, fontWeight: 500, color: "var(--ink)", maxWidth: 220, lineHeight: 1.45, boxShadow: "0 6px 18px rgba(45,45,45,0.08)" }}>
                <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: -7, width: 0, height: 0, borderTop: "7px solid transparent", borderBottom: "7px solid transparent", borderRight: "9px solid #fff" }} />
                Psst — I review your first 500 terms for free. No credit card.
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="hero-right">
            <div style={{ position: "absolute", width: 380, height: 380, background: "var(--brand-yellow)", opacity: 0.14, borderRadius: "50%", filter: "blur(40px)" }} />
            <div style={{ position: "absolute", width: 300, height: 300, background: "var(--brand-blue)", opacity: 0.08, borderRadius: "50%", filter: "blur(50px)", transform: "translate(60px,-80px)" }} />
            {chips.map((c, i) => (
              <div key={i} style={{ position: "absolute", top: c.top, left: (c as any).left, right: (c as any).right, display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", padding: "8px 14px", borderRadius: 100, boxShadow: "0 4px 16px rgba(45,45,45,0.08)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 500, color: "var(--ink)", animation: `chipFloat 6s ease-in-out ${c.delay} infinite`, zIndex: 2, whiteSpace: "nowrap" }}>
                <span>{c.text}</span>
                <span style={{ width: 18, height: 18, borderRadius: "50%", background: c.color, color: c.textColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>{c.badge}</span>
              </div>
            ))}
            <div style={{ position: "relative", zIndex: 3, display: "inline-block", width: 440, animation: "owlFloat 4.5s ease-in-out infinite" }}>
              <OwlSvg width={440} height={528} />
            </div>
            <div style={{ position: "absolute", bottom: 60, left: 40, zIndex: 4, animation: "bubbleFloat 5s ease-in-out 0.6s infinite" }}>
              <div style={{ background: "rgb(254,246,220)", border: "1px solid rgb(250,224,154)", borderRadius: 14, padding: "10px 14px", boxShadow: "0 6px 20px rgba(45,45,45,0.08)" }}>
                <div style={{ fontSize: 10, letterSpacing: 1.2, color: "rgb(138,92,0)", fontWeight: 600, textTransform: "uppercase" }}>Kept</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)" }}>High intent keywords</div>
              </div>
            </div>
            <div style={{ position: "absolute", top: 80, right: 10, zIndex: 4, animation: "bubbleFloat 5s ease-in-out 1.4s infinite" }}>
              <div style={{ background: "rgb(231,246,236)", border: "1px solid rgb(176,223,188)", borderRadius: 14, padding: "10px 14px", boxShadow: "0 6px 20px rgba(45,45,45,0.08)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--brand-green)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 700 }}>✓</div>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: 1.2, color: "rgb(26,110,58)", fontWeight: 600, textTransform: "uppercase" }}>Saved this month</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 600, color: "var(--ink)" }}>$12,480</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by */}
      <div style={{ maxWidth: 1280, margin: "80px auto 0", padding: "0 40px" }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--ink-60)", textAlign: "center", marginBottom: 24 }}>Trusted by 300+ performance teams</div>
        <div style={{ display: "flex", gap: 48, alignItems: "center", justifyContent: "center", flexWrap: "wrap", opacity: 0.55 }}>
          {[["Chiraag", 18, 700, -0.3, "normal"], ["Mercur.ly", 22, 400, 0, "normal"], ["NorthPine", 18, 700, -0.3, "normal"], ["Roost", 22, 400, 0, "normal"], ["Gustavo Co", 18, 700, -0.3, "italic"], ["Belbin & Co", 22, 400, 0, "normal"], ["Fieldform", 18, 700, -0.3, "normal"]].map(([name, size, weight, ls, style]) => (
            <div key={name as string} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: size as number, fontWeight: weight as number, color: "var(--ink)", letterSpacing: ls as number, fontStyle: style as string }}>{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
