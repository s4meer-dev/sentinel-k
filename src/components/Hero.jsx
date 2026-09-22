import React, { useState, useEffect } from "react";
import PhoneTerminal from "./PhoneTerminal";
import { DELIVERABLES, BRAND } from "../data/sentinelData";
import { ArrowDown, Shield, Waves, Terminal } from "lucide-react";

export default function Hero({ onExplorePipeline, onOpenSandbox }) {
  const [delivIdx, setDelivIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setDelivIdx((prev) => (prev + 1) % DELIVERABLES.length);
        setFade(true);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #ff4405 0%, #ff5714 55%, #ff6e26 100%)",
        color: "#ffffff",
        paddingTop: 120,
        paddingBottom: 60,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      {/* Background Cloud Accents */}
      <img
        src="/assets/cloud1.webp"
        alt=""
        style={{
          position: "absolute",
          top: "-5%",
          left: "-10%",
          width: "55%",
          opacity: 0.22,
          pointerEvents: "none",
          willChange: "transform"
        }}
      />
      <img
        src="/assets/cloud2.webp"
        alt=""
        style={{
          position: "absolute",
          top: "8%",
          right: "-10%",
          width: "60%",
          opacity: 0.22,
          pointerEvents: "none",
          willChange: "transform"
        }}
      />

      {/* Hero Header Content */}
      <div style={{ maxWidth: 980, padding: "0 24px", position: "relative", zIndex: 2 }}>
        {/* Top Hackathon Pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 18px",
            borderRadius: 999,
            background: "rgba(0,0,0,0.18)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: 24
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />
          <span>{BRAND.subTag}</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span style={{ color: "#ffd580" }}>DUAL-DOMAIN CAUSAL SECURITY</span>
        </div>

        {/* Display Serif Headline (AM Le Cygne) */}
        <h1
          className="font-cygne"
          style={{
            fontSize: "clamp(44px, 7.5vw, 92px)",
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            fontWeight: 700,
            marginBottom: 20,
            textShadow: "0 4px 24px rgba(0,0,0,0.18)"
          }}
        >
          {BRAND.heroHeadlineTop}
          <br />
          {BRAND.heroHeadlineBottom}
        </h1>

        {/* Dynamic Deliverable Subtitle */}
        <p
          className="font-sans-tight"
          style={{
            fontSize: "clamp(17px, 2.2vw, 23px)",
            fontWeight: 500,
            opacity: 0.95,
            maxWidth: 780,
            margin: "0 auto 32px",
            lineHeight: 1.4
          }}
        >
          We protect your{" "}
          <strong
            style={{
              fontWeight: 800,
              textDecoration: "underline",
              textUnderlineOffset: 6,
              transition: "opacity 0.3s ease",
              opacity: fade ? 1 : 0.3,
              color: "#fff"
            }}
          >
            {DELIVERABLES[delivIdx]}
          </strong>{" "}
          before execution through on-device SLM reasoning and forward hydrodynamic digital twin verification.
        </p>

        {/* Primary Call to Actions */}
        <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginBottom: 44 }}>
          <button
            onClick={onExplorePipeline}
            style={{
              background: "#140906",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: 44,
              fontSize: 14,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(20, 9, 6, 0.3)",
              transition: "transform 0.2s ease, background 0.2s ease"
            }}
          >
            <Terminal style={{ width: 16, height: 16, color: "#ff692e" }} />
            <span>EXPLORE 8-STAGE PIPELINE</span>
          </button>

          <button
            onClick={onOpenSandbox}
            style={{
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(12px)",
              color: "#fff",
              border: "1.5px solid rgba(255,255,255,0.35)",
              padding: "14px 28px",
              borderRadius: 44,
              fontSize: 14,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              transition: "background 0.2s ease"
            }}
          >
            <Waves style={{ width: 16, height: 16, color: "#ffd580" }} />
            <span>KINETIC TWIN SANDBOX</span>
          </button>
        </div>
      </div>

      {/* Central 3D Interactive Phone Terminal Showcase */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 16px"
        }}
      >
        <PhoneTerminal />
      </div>

      {/* Bottom Scroll Cue */}
      <div
        style={{
          marginTop: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: 0.8,
          fontSize: 11,
          letterSpacing: "0.08em",
          fontWeight: 700,
          cursor: "pointer"
        }}
        onClick={onExplorePipeline}
      >
        <span>SCROLL TO VERIFY</span>
        <ArrowDown style={{ width: 14, height: 14, animation: "bounce 2s infinite" }} />
      </div>
    </section>
  );
}
