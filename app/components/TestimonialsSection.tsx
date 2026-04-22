import OwlSvg from "./OwlSvg";

const testimonials = [
  { quote: "We cut our cost-per-acquisition by 41% in the first 6 weeks. Ollie basically does the search term audits our team used to dread.", name: "Kavya R.", role: "Head of Growth, Chiraag", accentColor: "var(--brand-blue)" },
  { quote: "I used to spend every Friday exporting search term reports. Now ThinkTerm tells me what to negate on Monday morning. Life-changing.", name: "Marcus D.", role: "Senior PPC Manager, Mercur.ly", accentColor: "var(--brand-green)" },
  { quote: "Our CFO noticed the spend curve flatten two weeks in. Then she asked who we hired. I said 'an owl.'", name: "Priya S.", role: "Performance Lead, Roost", accentColor: "var(--brand-yellow)" },
];

const Star = () => (
  <svg width="14" height="14" viewBox="0 0 14 14">
    <polygon fill="var(--brand-yellow)" points="7,1 9,5 13,5.5 10,8.5 11,13 7,10.5 3,13 4,8.5 1,5.5 5,5" />
  </svg>
);

export default function TestimonialsSection() {
  return (
    <section id="customers" className="section-pad" style={{ background: "var(--cream-dark)" }}>
      <div className="container">
        <div className="testimonials-header">
          <div style={{ maxWidth: 560 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgb(254,246,220)", color: "rgb(138,92,0)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "6px 12px", borderRadius: 6 }}>Customers</div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.8, marginTop: 16, color: "var(--ink)" }}>
              Teams who&apos;d rather<br /><span style={{ color: "var(--brand-yellow)", fontStyle: "italic" }}>sleep well</span> at night.
            </h2>
          </div>
          <div className="testimonials-stats" style={{ display: "flex", gap: 32 }}>
            {[["$4.2M", "saved across our customers"], ["34%", "avg. reduction in wasted spend"], ["300+", "teams running ThinkTerm"]].map(([val, label]) => (
              <div key={val}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 800, letterSpacing: -1, color: "var(--ink)" }}>{val}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "var(--ink-60)", maxWidth: 130 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="three-col">
          {testimonials.map((t) => (
            <div key={t.name} style={{ background: "#fff", borderRadius: 18, padding: 28, border: "1px solid rgba(45,45,45,0.06)", boxShadow: "0 4px 20px rgba(45,45,45,0.04)", position: "relative" }}>
              <div style={{ position: "absolute", top: -24, left: 20, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 120, lineHeight: 1, color: t.accentColor, opacity: 0.3 }}>&quot;</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, position: "relative" }}>
                {[1,2,3,4,5].map((i) => <Star key={i} />)}
              </div>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, lineHeight: 1.55, color: "var(--ink)", marginBottom: 22 }}>&quot;{t.quote}&quot;</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid rgba(45,45,45,0.06)" }}>
                <div style={{ width: 46, height: 46, borderRadius: "50%", background: "var(--cream-light)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0 }}>
                  <div style={{ transform: "translateY(4px)" }}>
                    <OwlSvg width={56} height={67} />
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>{t.name}</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "var(--ink-60)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
