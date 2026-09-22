import React from "react";

export default function Footer({ onOpenBrief }) {
  return (
    <footer
      style={{
        position: "relative",
        padding: "80px 24px 140px",
        maxWidth: 1200,
        margin: "0 auto",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 32,
          position: "relative",
          zIndex: 2
        }}
      >
        {/* Orange card */}
        <div
          data-cursor="card"
          data-cursor-radius="28"
          style={{
            background: "var(--color-brand)",
            color: "#ffffff",
            borderRadius: 28,
            padding: "48px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: 280,
            boxShadow: "var(--shadow-md)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="/assets/logo-nav.svg" alt="UMANO" style={{ height: 20, filter: "brightness(0) invert(1)" }} />
          </div>

          <div>
            <h3
              style={{
                fontFamily: "'AM Le Cygne', serif",
                fontSize: 32,
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: 8
              }}
            >
              Senior product design, on demand.
            </h3>
          </div>
        </div>

        {/* Links Card */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: 28,
            padding: "48px 40px",
            border: "1px solid var(--color-border-secondary)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: 280
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-quaternary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                Links
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="#how-it-works" style={{ color: "var(--color-text-primary)", textDecoration: "none", fontWeight: 600 }}>How it works</a>
                <a href="#client-stories" style={{ color: "var(--color-text-primary)", textDecoration: "none", fontWeight: 600 }}>Client stories</a>
                <a href="#faq" style={{ color: "var(--color-text-primary)", textDecoration: "none", fontWeight: 600 }}>FAQ</a>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-quaternary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                Company
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="mailto:hi@umanodesign.studio" style={{ color: "var(--color-text-primary)", textDecoration: "none", fontWeight: 600 }}>Contact</a>
                <a href="#" style={{ color: "var(--color-text-primary)", textDecoration: "none", fontWeight: 600 }}>Privacy Policy</a>
                <a href="#" style={{ color: "var(--color-text-primary)", textDecoration: "none", fontWeight: 600 }}>Terms</a>
              </div>
            </div>

            <button
              onClick={onOpenBrief}
              style={{
                alignSelf: "flex-start",
                background: "var(--color-text-primary)",
                color: "#ffffff",
                padding: "10px 22px",
                borderRadius: "var(--radius-full)",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              Book a call
            </button>
          </div>

          <div style={{ fontSize: 13, color: "var(--color-text-quaternary)", marginTop: 32 }}>
            © {new Date().getFullYear()} UMANO DESIGN STUDIO. All rights reserved.
          </div>
        </div>
      </div>

      {/* Massive Watermark */}
      <div
        style={{
          fontFamily: "'AM Le Cygne', serif",
          fontSize: "clamp(48px, 11vw, 150px)",
          fontWeight: 700,
          color: "rgba(0,0,0,0.03)",
          userSelect: "none",
          textAlign: "center",
          marginTop: 40,
          whiteSpace: "nowrap",
          lineHeight: 1
        }}
      >
        hi@umanodesign.studio
      </div>
    </footer>
  );
}
