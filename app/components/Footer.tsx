import Brand from "./Brand";

const cols = [
  { title: "Product", links: ["Classifier", "Autopilot", "Clawbacks", "Rules engine", "Integrations"] },
  { title: "Company", links: ["About", "Blog", "Customers", "Careers", "Press"] },
  { title: "Resources", links: ["Help center", "API docs", "Changelog", "Roadmap", "Status"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA", "Cookies"] },
];

export default function Footer() {
  return (
    <footer style={{ padding: "60px 40px 40px", background: "var(--ink)", color: "#fff" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="footer-grid" style={{ paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div>
            <div style={{ color: "#fff" }}>
              <Brand size={32} textSize={22} />
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.55)", marginTop: 16, maxWidth: 280 }}>
              The intent optimizer for Google Ads. Built for teams who&apos;d rather ship than audit.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#fff", marginBottom: 16 }}>{col.title}</div>
              {col.links.map((l) => (
                <a key={l} href="#" style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: 8 }}>{l}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 28, flexWrap: "wrap", gap: 16 }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>© 2026 ThinkTerm Inc. Made with care in Bangalore & San Francisco.</div>
          <div style={{ display: "flex", gap: 12, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--brand-green)", boxShadow: "0 0 0 3px rgba(77,170,106,0.25)" }} />
              All systems operational
            </span>
            <span>·</span>
            <span>v4.12.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
