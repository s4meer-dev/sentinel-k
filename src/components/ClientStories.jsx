import React, { useState } from "react";
import { INCIDENT_DOSSIERS } from "../data/sentinelData";
import { ShieldCheck, ArrowRight, Activity, Terminal, AlertTriangle } from "lucide-react";

export default function ClientStories({ onOpenDossier }) {
  const [activeSlug, setActiveSlug] = useState("alpa");
  const activeCase = INCIDENT_DOSSIERS.find((c) => c.slug === activeSlug) || INCIDENT_DOSSIERS[0];

  return (
    <section
      id="scenarios"
      style={{
        padding: "120px 24px",
        background: "#0a0d12",
        color: "#ffffff",
        position: "relative"
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        {/* Title & Section Tag */}
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 999,
              background: "rgba(255, 68, 5, 0.15)",
              color: "#ff6e26",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.05em",
              marginBottom: 16
            }}
          >
            <Activity style={{ width: 14, height: 14 }} />
            <span>FIELD VERIFICATION BENCHMARKS</span>
          </div>

          <h2
            className="font-cygne"
            style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              letterSpacing: "-0.03em",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 16,
              color: "#fff"
            }}
          >
            Field Incident Benchmarks.
          </h2>

          <p
            className="font-sans-tight"
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 680,
              margin: "0 auto",
              lineHeight: 1.5
            }}
          >
            Empirical evaluations conducted against simulated municipal water reclamation infrastructure and regional pressure vaults.
          </p>

          {/* Scenario Tabs */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.06)",
              padding: 6,
              borderRadius: 999,
              marginTop: 32,
              border: "1px solid rgba(255,255,255,0.1)"
            }}
          >
            {INCIDENT_DOSSIERS.map((c) => (
              <button
                key={c.slug}
                onClick={() => setActiveSlug(c.slug)}
                style={{
                  padding: "10px 22px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  color: activeSlug === c.slug ? "#ffffff" : "rgba(255,255,255,0.6)",
                  background: activeSlug === c.slug ? "#ff4405" : "transparent",
                  transition: "all 0.2s ease"
                }}
              >
                {c.name.split(":")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Card */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            borderRadius: 36,
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "clamp(24px, 4vw, 56px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 48,
            alignItems: "center"
          }}
        >
          {/* Details Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span
                style={{
                  fontSize: 11,
                  fontFamily: "JetBrains Mono",
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.1)",
                  color: "#ffd580"
                }}
              >
                {activeCase.role}
              </span>
            </div>

            <h3
              className="font-cygne"
              style={{
                fontSize: "clamp(26px, 3.2vw, 40px)",
                lineHeight: 1.15,
                fontWeight: 700,
                marginBottom: 20
              }}
            >
              {activeCase.name}
            </h3>

            <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.8)", marginBottom: 28 }}>
              {activeCase.summary}
            </p>

            {/* Impact Metric Card */}
            <div
              style={{
                background: "rgba(255, 68, 5, 0.12)",
                borderRadius: 20,
                border: "1px solid rgba(255, 68, 5, 0.3)",
                padding: "18px 22px",
                marginBottom: 28
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 800, color: "#ff8b7b", marginBottom: 4, letterSpacing: "0.04em" }}>
                EMPIRICAL OUTCOME &amp; PHYSICAL IMPACT:
              </div>
              <p style={{ fontSize: 13.5, color: "#ffffff", lineHeight: 1.5, margin: 0 }}>
                {activeCase.impact}
              </p>
            </div>

            <button
              onClick={() => onOpenDossier?.(activeCase)}
              style={{
                background: "#ffffff",
                color: "#140906",
                padding: "14px 24px",
                borderRadius: 44,
                fontSize: 13,
                fontWeight: 800,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
                transition: "transform 0.2s ease"
              }}
            >
              <Terminal style={{ width: 15, height: 15, color: "#ff4405" }} />
              <span>INSPECT FULL TECHNICAL DOSSIER</span>
              <ArrowRight style={{ width: 14, height: 14 }} />
            </button>
          </div>

          {/* Video / Visual Demonstration Column */}
          <div
            style={{
              position: "relative",
              borderRadius: 28,
              overflow: "hidden",
              height: 420,
              background: "#181d27",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            }}
          >
            <video
              src={activeCase.video}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
            {/* Live Indicator Overlay */}
            <div
              style={{
                position: "absolute",
                top: 18,
                left: 18,
                padding: "6px 12px",
                borderRadius: 999,
                background: "rgba(0,0,0,0.65)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 10,
                fontFamily: "JetBrains Mono",
                fontWeight: 700,
                color: "#dcfae6"
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", animation: "pulseGreen 1.5s infinite" }} />
              <span>DIGITAL TWIN SIMULATION RUN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
