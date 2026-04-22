import Image from "next/image";

export default function Brand({ size = 30, textSize = 20 }: { size?: number; textSize?: number }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <Image src="/logo.png" alt="ThinkTerm logo" width={size} height={size} style={{ objectFit: "contain" }} />
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: textSize, fontWeight: 700, letterSpacing: -0.5, color: "inherit" }}>
        ThinkTerm<span style={{ color: "var(--brand-yellow)" }}>.</span>
      </div>
    </div>
  );
}
