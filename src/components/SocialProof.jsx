import React from "react";
import { PARTNER_LOGOS } from "../data/content";

export default function SocialProof() {
  return (
    <section
      style={{
        padding: "100px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 80
      }}
    >
      {/* Logos Strip */}
      <div style={{ width: "100%", textAlign: "center" }}>
        <p
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--color-text-quaternary)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 36
          }}
        >
          Our designers have been part of these teams
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(32px, 6vw, 72px)",
            flexWrap: "wrap",
            opacity: 0.85
          }}
        >
          {PARTNER_LOGOS.map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.name}
              style={{
                height: 32,
                width: "auto",
                objectFit: "contain",
                filter: "grayscale(100%)",
                opacity: 0.7,
                transition: "opacity 0.2s, filter 0.2s"
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = "1";
                e.target.style.filter = "none";
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = "0.7";
                e.target.style.filter = "grayscale(100%)";
              }}
            />
          ))}
        </div>
      </div>

      {/* Large Typography Statement */}
      <div style={{ maxWidth: 1040, textAlign: "left" }}>
        <h2
          style={{
            fontFamily: "'AM Le Cygne', serif",
            fontSize: "clamp(36px, 5.5vw, 68px)",
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
            fontWeight: 700,
            color: "var(--color-text-primary)"
          }}
        >
          Finding a product designer takes months. Starting with UMANO takes minutes. Unlimited requests. Fixed monthly price. No commitment.
        </h2>
      </div>
    </section>
  );
}
