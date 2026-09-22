import React, { useState } from "react";
import { PROBLEM_PILLARS, COMPARISON_DATA } from "../data/sentinelData";
import { AlertTriangle, ShieldX, UserX, Cpu, ArrowRight, ShieldCheck } from "lucide-react";

export default function ProblemSection() {
  const [viewMode, setViewMode] = useState("sentinel");

  return (
    <section
      id="problem"
      style={{
        padding: "100px 24px",
        maxWidth: 1240,
        margin: "0 auto",
        position: "relative"
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 60px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 999,
            background: "#fee4e2",
            color: "#b42318",
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.05em",
            marginBottom: 16
          }}
        >
          <AlertTriangle style={{ width: 14, height: 14 }} />
          <span>02 // THE CYBER-PHYSICAL VULNERABILITY GAP</span>
        </div>

        <h2
          className="font-cygne"
          style={{
            fontSize: "clamp(32px, 4.5vw, 56px)",
            fontWeight: 700,
            color: "#140906",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 16
          }}
        >
          The attack targets the operator, not the firewall.
        </h2>

        <p className="font-sans-tight" style={{ fontSize: 16, color: "#535862", lineHeight: 1.5 }}>
          Industrial adversaries weaponize fabricated urgency and cloned supervisor identities to induce operators into executing physically catastrophic commands through legitimate, authorized credentials.
        </p>
      </div>

      {/* 3 Core Threat Pillars Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
          marginBottom: 60
        }}
      >
        {PROBLEM_PILLARS.map((p, idx) => (
          <div
            key={idx}
            className="glass-card glass-sheen"
            style={{
              borderRadius: 28,
              padding: 32,
              background: "#ffffff",
              boxShadow: "0 12px 30px -10px rgba(20, 9, 6, 0.06)",
              border: "1px solid rgba(20, 9, 6, 0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.2s ease"
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    background: "#EDE7DB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#140906"
                  }}
                >
                  {idx === 0 && <UserX style={{ width: 22, height: 22 }} />}
                  {idx === 1 && <ShieldX style={{ width: 22, height: 22 }} />}
                  {idx === 2 && <Cpu style={{ width: 22, height: 22 }} />}
                </div>
                <span
                  style={{
                    fontSize: 9.5,
                    fontFamily: "JetBrains Mono",
                    fontWeight: 800,
                    padding: "4px 10px",
                    borderRadius: 999,
                    background: "#fef0c7",
                    color: "#b54708"
                  }}
                >
                  {p.badge}
                </span>
              </div>

              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: "#140906",
                  marginBottom: 12,
                  letterSpacing: "-0.01em"
                }}
              >
                {p.title}
              </h3>

              <div
                style={{
                  fontSize: 12,
                  fontFamily: "JetBrains Mono, monospace",
                  fontStyle: "italic",
                  color: "#b54708",
                  background: "#fef0c7",
                  padding: "10px 12px",
                  borderRadius: 12,
                  marginBottom: 14,
                  lineHeight: 1.4
                }}
              >
                {p.lead}
              </div>

              <p style={{ fontSize: 13.5, color: "#535862", lineHeight: 1.5, margin: 0 }}>
                {p.detail}
              </p>
            </div>

            <div
              style={{
                marginTop: 24,
                paddingTop: 16,
                borderTop: "1px solid rgba(20, 9, 6, 0.06)",
                fontSize: 12,
                color: "#717680"
              }}
            >
              <strong style={{ color: "#b42318", display: "block", marginBottom: 2 }}>Impact Consequence:</strong>
              {p.consequence}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Dual-Domain Comparator Section */}
      <div
        style={{
          background: "#140906",
          borderRadius: 32,
          padding: "clamp(28px, 5vw, 56px)",
          color: "#ffffff",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Toggle Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 36,
            paddingBottom: 24,
            borderBottom: "1px solid rgba(255,255,255,0.12)"
          }}
        >
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#ffd580", letterSpacing: "0.05em" }}>
              ARCHITECTURAL COMPARATOR
            </div>
            <h3 className="font-cygne" style={{ fontSize: 28, margin: "4px 0 0", color: "#fff" }}>
              Traditional SCADA vs Dual-Domain Sentinel-K
            </h3>
          </div>

          <div
            style={{
              display: "flex",
              background: "rgba(255,255,255,0.08)",
              padding: 4,
              borderRadius: 30,
              gap: 4
            }}
          >
            <button
              onClick={() => setViewMode("traditional")}
              style={{
                padding: "8px 18px",
                borderRadius: 24,
                background: viewMode === "traditional" ? "#b42318" : "transparent",
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              Traditional SCADA
            </button>
            <button
              onClick={() => setViewMode("sentinel")}
              style={{
                padding: "8px 18px",
                borderRadius: 24,
                background: viewMode === "sentinel" ? "#ff4405" : "transparent",
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              Sentinel-K Defense
            </button>
          </div>
        </div>

        {/* Comparison Details Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20
          }}
        >
          {viewMode === "traditional" ? (
            COMPARISON_DATA.traditional.items.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 18,
                  padding: 20,
                  border: "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <div style={{ fontSize: 11, color: "#ff8b7b", fontWeight: 700, marginBottom: 6 }}>
                  STAGE 0{i + 1} · {item.label}
                </div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.9)", lineHeight: 1.5 }}>
                  {item.desc}
                </div>
              </div>
            ))
          ) : (
            COMPARISON_DATA.sentinel.items.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255, 68, 5, 0.12)",
                  borderRadius: 18,
                  padding: 20,
                  border: "1px solid rgba(255, 68, 5, 0.3)"
                }}
              >
                <div style={{ fontSize: 11, color: "#ffd580", fontWeight: 700, marginBottom: 6 }}>
                  STAGE 0{i + 1} · {item.label}
                </div>
                <div style={{ fontSize: 14, color: "#ffffff", lineHeight: 1.5 }}>
                  {item.desc}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
