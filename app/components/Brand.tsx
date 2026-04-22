import Image from "next/image";

export default function Brand() {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <Image
        src="/logo.png"
        alt="ThinkTerm logo"
        width={180}
        height={180}
        className="object-contain"
      />
    </div>
  );
}
