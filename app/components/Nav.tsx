"use client";
import { useState, useEffect } from "react";
import Brand from "./Brand";

const links = ["Product", "How it works", "Pricing", "Customers", "Blog"];

export default function Nav({
  onDemo,
  onTrial,
}: {
  onDemo: () => void;
  onTrial: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background:
          scrolled || menuOpen ? "rgba(235,244,255,0.96)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        borderBottom:
          scrolled || menuOpen
            ? "1px solid rgba(45,45,45,0.06)"
            : "1px solid transparent",
        transition: "all 0.25s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "14px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Brand />
        <div className="nav-links">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--ink-60)",
                textDecoration: "none",
              }}
            >
              {l}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a
            href="#"
            className="nav-login"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--ink)",
              textDecoration: "none",
              padding: "8px 14px",
            }}
          >
            Log in
          </a>
          <button
            onClick={onDemo}
            className="btn-primary"
            style={{ padding: "9px 18px", fontSize: 14 }}
          >
            Book a demo →
          </button>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`}>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
            onClick={() => setMenuOpen(false)}
          >
            {l}
          </a>
        ))}
        <a href="#" onClick={() => setMenuOpen(false)}>
          Log in
        </a>
        <button
          onClick={() => {
            onDemo();
            setMenuOpen(false);
          }}
          className="btn-primary"
          style={{
            padding: "12px 20px",
            fontSize: 14,
            marginTop: 8,
            justifyContent: "center",
          }}
        >
          Book a demo →
        </button>
        <button
          onClick={() => {
            onTrial();
            setMenuOpen(false);
          }}
          className="btn-ghost"
          style={{
            padding: "12px 20px",
            fontSize: 14,
            justifyContent: "center",
          }}
        >
          Start free trial
        </button>
      </div>
    </nav>
  );
}
