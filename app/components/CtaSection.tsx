import OwlSvg from "./OwlSvg";

export default function CtaSection({ onDemo, onTrial }: { onDemo: () => void; onTrial: () => void }) {
  return (
    <section className="section-pad" style={{ background: "var(--cream)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", background: "var(--ink)", borderRadius: 24, padding: "clamp(40px, 6vw, 80px) clamp(24px, 5vw, 60px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "var(--brand-yellow)", opacity: 0.12, filter: "blur(40px)" }} />
        <div className="cta-grid">
          <div style={{ position: "relative" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgb(254,246,220)", color: "rgb(138,92,0)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "6px 12px", borderRadius: 6 }}>Ready when you are</div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.8, color: "#fff", marginTop: 18, marginBottom: 20 }}>
              Your ad spend<br />called. It wants<br /><span style={{ color: "var(--brand-yellow)", fontStyle: "italic" }}>a supervisor.</span>
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,0.7)", marginBottom: 32, maxWidth: 480 }}>
              Connect your account in 5 minutes. See what ThinkTerm catches in the first scan. Keep it, or walk away.
            </p>
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <button onClick={onTrial} className="btn-primary" style={{ padding: "16px 26px", fontSize: 15 }}>Start free 14-day trial</button>
              <button onClick={onDemo} style={{ color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 500, background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", cursor: "pointer", padding: "16px 22px" }}>Book a 20-min demo →</button>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <div style={{ display: "inline-block", width: "min(320px, 80vw)", animation: "owlFloat 4.5s ease-in-out infinite" }}>
              <OwlSvg width={320} height={384} />
            </div>
            <div style={{ position: "absolute", top: 20, right: -10, background: "#fff", color: "var(--ink)", padding: "10px 14px", borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.25)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 600, lineHeight: 1.4, maxWidth: 200, animation: "bubbleFloat 5s ease-in-out infinite" }}>
              <div style={{ position: "absolute", bottom: -8, left: 24, width: 0, height: 0, borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderTop: "10px solid #fff" }} />
              Hoo&apos;s ready to save <span style={{ color: "var(--brand-green)" }}>$12k/mo</span>? 🦉
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
