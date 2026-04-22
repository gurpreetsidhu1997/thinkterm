const plans = [
  {
    name: "Starter", price: "$149", period: "/mo", desc: "Solo operators & small agencies",
    dark: false, popular: false, cta: "Start free trial", ctaClass: "btn-ghost",
    features: ["Up to $20k/mo ad spend", "1 Google Ads account", "Daily classification", "Email alerts", "Community support"],
  },
  {
    name: "Pro", price: "$499", period: "/mo", desc: "In-house teams running serious spend",
    dark: true, popular: true, cta: "Start free trial", ctaClass: "btn-primary",
    features: ["Up to $250k/mo ad spend", "5 Google Ads accounts", "Hourly classification", "Autopilot mode", "Slack + email alerts", "Priority support", "Custom rules engine"],
  },
  {
    name: "Agency", price: "Custom", period: "", desc: "Agencies with 10+ clients",
    dark: false, popular: false, cta: "Talk to sales", ctaClass: "btn-ghost",
    features: ["Unlimited ad spend", "Unlimited accounts (MCC)", "White-label reports", "Dedicated CSM", "SSO & SCIM", "SLA-backed uptime"],
  },
];

export default function PricingSection({ onTrial }: { onTrial: () => void }) {
  return (
    <section id="pricing" className="section-pad" style={{ background: "var(--cream)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 64px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgb(235,242,251)", color: "rgb(26,63,122)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "6px 12px", borderRadius: 6 }}>Pricing</div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.8, marginTop: 16, marginBottom: 16, color: "var(--ink)" }}>
            Pays for itself<br /><span style={{ color: "var(--brand-blue)", fontStyle: "italic" }}>in the first week.</span>
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, color: "var(--ink-60)", lineHeight: 1.55 }}>Every plan includes the classifier, autopilot mode, and unlimited seats. Cancel anytime.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((p) => (
            <div key={p.name} style={{ background: p.dark ? "var(--ink)" : "#fff", color: p.dark ? "#fff" : "var(--ink)", borderRadius: 18, padding: 30, border: p.dark ? "1px solid var(--ink)" : "1px solid rgba(45,45,45,0.08)", boxShadow: p.dark ? "0 24px 60px rgba(45,45,45,0.2)" : "0 4px 20px rgba(45,45,45,0.04)", position: "relative", transform: p.popular ? "translateY(-12px)" : "none" }}>
              {p.popular && (
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "var(--brand-yellow)", color: "var(--ink)", padding: "4px 14px", borderRadius: 100, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", whiteSpace: "nowrap" }}>Most popular</div>
              )}
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: p.dark ? "var(--brand-yellow)" : "var(--ink-60)", marginBottom: 12 }}>{p.name}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(36px, 4vw, 48px)", lineHeight: 1, fontWeight: 800, letterSpacing: -1.5 }}>{p.price}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: p.dark ? "rgba(255,255,255,0.6)" : "var(--ink-60)" }}>{p.period}</span>
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: p.dark ? "rgba(255,255,255,0.7)" : "var(--ink-60)", marginBottom: 22 }}>{p.desc}</div>
              <button onClick={onTrial} className={p.ctaClass} style={{ display: "block", width: "100%", textAlign: "center", padding: 12, fontSize: 14, marginBottom: 22 }}>{p.cta}</button>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {p.features.map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: p.dark ? "rgba(255,255,255,0.85)" : "var(--ink-60)" }}>
                    <span style={{ width: 18, height: 18, borderRadius: "50%", background: p.dark ? "rgba(245,188,37,0.2)" : "var(--cream-dark)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--brand-yellow)", fontSize: 10, fontWeight: 700 }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
