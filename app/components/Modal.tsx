"use client";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "demo" | "trial";
}

export default function Modal({ isOpen, onClose, type }: ModalProps) {
  if (!isOpen) return null;

  const title = type === "demo" ? "Book a demo" : "Start your free trial";
  const subtitle = type === "demo" 
    ? "See ThinkTerm in action. We'll walk you through the platform in 20 minutes."
    : "No credit card required. Get started in 5 minutes.";
  const buttonText = type === "demo" ? "Book demo" : "Start trial";

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(45,45,45,0.6)", backdropFilter: "blur(4px)" }} onClick={onClose}>
      <div style={{ background: "#fff", borderRadius: 20, padding: "40px 48px", maxWidth: 480, width: "90%", boxShadow: "0 30px 80px rgba(45,45,45,0.3)", position: "relative" }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: "absolute", top: 20, right: 20, background: "transparent", border: "none", fontSize: 24, color: "var(--ink-40)", cursor: "pointer", lineHeight: 1 }}>×</button>
        
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 28, fontWeight: 800, letterSpacing: -0.5, color: "var(--ink)", marginBottom: 8 }}>{title}</h2>
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "var(--ink-60)", marginBottom: 32, lineHeight: 1.5 }}>{subtitle}</p>

        <form onSubmit={(e) => { e.preventDefault(); alert("Form submitted!"); onClose(); }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>Work email</label>
            <input type="email" required placeholder="you@company.com" style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(45,45,45,0.15)", borderRadius: 10, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "var(--ink)", outline: "none" }} />
          </div>

          <div>
            <label style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>Full name</label>
            <input type="text" required placeholder="John Doe" style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(45,45,45,0.15)", borderRadius: 10, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "var(--ink)", outline: "none" }} />
          </div>

          <div>
            <label style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>Company</label>
            <input type="text" required placeholder="Acme Inc." style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(45,45,45,0.15)", borderRadius: 10, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "var(--ink)", outline: "none" }} />
          </div>

          <div>
            <label style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>Monthly ad spend</label>
            <select required style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(45,45,45,0.15)", borderRadius: 10, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "var(--ink)", outline: "none", background: "#fff" }}>
              <option value="">Select range</option>
              <option value="0-20k">$0 - $20k</option>
              <option value="20k-100k">$20k - $100k</option>
              <option value="100k-250k">$100k - $250k</option>
              <option value="250k+">$250k+</option>
            </select>
          </div>

          <button type="submit" className="btn-primary" style={{ width: "100%", padding: "14px", fontSize: 15, marginTop: 8, justifyContent: "center" }}>{buttonText}</button>
        </form>
      </div>
    </div>
  );
}
