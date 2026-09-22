import React from "react";
import { HACKATHON_PILLARS, TEAM_MEMBERS } from "../data/sentinelData";
import { Award, Users, Cpu, Shield, Activity, Zap, HeartHandshake, ShieldCheck } from "lucide-react";

export default function HackathonTeam() {
  return (
    <section
      id="team"
      style={{
        padding: "100px 24px",
        maxWidth: 1240,
        margin: "0 auto",
        position: "relative"
      }}
    >
      {/* 1. Hackathon Alignment Header */}
      <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 50px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 999,
            background: "#fef0c7",
            color: "#b54708",
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.05em",
            marginBottom: 16
          }}
        >
          <Award style={{ width: 14, height: 14 }} />
          <span>08 // iQOO HACKATHON 2026 SUBMISSION PROFILE</span>
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
          Built for the iQOO Mobile Ecosystem.
        </h2>

        <p className="font-sans-tight" style={{ fontSize: 16, color: "#535862", lineHeight: 1.5 }}>
          Demonstrating how flagship Snapdragon NPU compute and OriginOS 5 Office Kit connectivity elevate beyond consumer mobile into mission-critical sovereign infrastructure defense.
        </p>
      </div>

      {/* 4 Hackathon Pillars Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20,
          marginBottom: 80
        }}
      >
        {HACKATHON_PILLARS.map((p, idx) => (
          <div
            key={idx}
            className="glass-card glass-sheen"
            style={{
              padding: 24,
              borderRadius: 24,
              background: "#ffffff",
              border: "1px solid rgba(20, 9, 6, 0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "#EDE7DB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#140906",
                  marginBottom: 14
                }}
              >
                {idx === 0 && <Cpu style={{ width: 18, height: 18 }} />}
                {idx === 1 && <Zap style={{ width: 18, height: 18 }} />}
                {idx === 2 && <ShieldCheck style={{ width: 18, height: 18 }} />}
                {idx === 3 && <HeartHandshake style={{ width: 18, height: 18 }} />}
              </div>
              <h3 style={{ fontSize: 13.5, fontWeight: 800, color: "#140906", marginBottom: 8, letterSpacing: "-0.01em" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 13, color: "#535862", lineHeight: 1.5, margin: 0 }}>
                {p.desc}
              </p>
            </div>
            <div style={{ marginTop: 16, fontSize: 10, fontFamily: "JetBrains Mono", color: "#717680", fontWeight: 700 }}>
              CATEGORY: SYSTEM INTEGRATION
            </div>
          </div>
        ))}
      </div>

      {/* 2. The Builders Header */}
      <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 40px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 999,
            background: "#dcfae6",
            color: "#067647",
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.05em",
            marginBottom: 14
          }}
        >
          <Users style={{ width: 14, height: 14 }} />
          <span>09 // THE BUILDERS</span>
        </div>

        <h3
          className="font-cygne"
          style={{
            fontSize: "clamp(28px, 3.8vw, 44px)",
            fontWeight: 700,
            color: "#140906",
            marginBottom: 12
          }}
        >
          Engineered for Sovereign Physical Safety.
        </h3>
      </div>

      {/* 3 Builders Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24
        }}
      >
        {TEAM_MEMBERS.map((m, idx) => (
          <div
            key={idx}
            className="glass-card glass-sheen"
            style={{
              padding: 28,
              borderRadius: 28,
              background: "#ffffff",
              border: "1px solid rgba(20, 9, 6, 0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: "#EDE7DB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#140906"
                  }}
                >
                  {idx === 0 && <Cpu style={{ width: 20, height: 20 }} />}
                  {idx === 1 && <Shield style={{ width: 20, height: 20 }} />}
                  {idx === 2 && <Activity style={{ width: 20, height: 20 }} />}
                </div>
                <span style={{ fontSize: 11, fontFamily: "JetBrains Mono", fontWeight: 800, color: "#717680" }}>
                  0{idx + 1}
                </span>
              </div>

              <h4 style={{ fontSize: 18, fontWeight: 800, color: "#140906", marginBottom: 4 }}>
                {m.name}
              </h4>
              <div
                style={{
                  fontSize: 11,
                  fontFamily: "JetBrains Mono",
                  fontWeight: 700,
                  color: "#ff4405",
                  marginBottom: 12,
                  textTransform: "uppercase"
                }}
              >
                {m.role}
              </div>
              <p style={{ fontSize: 13, color: "#535862", lineHeight: 1.5, margin: 0 }}>
                {m.focus}
              </p>
            </div>

            <div
              style={{
                marginTop: 20,
                paddingTop: 14,
                borderTop: "1px solid rgba(20, 9, 6, 0.06)",
                display: "flex",
                justifyContent: "space-between",
                fontSize: 10.5,
                fontFamily: "JetBrains Mono",
                color: "#717680"
              }}
            >
              <span>SENTINEL-K CORE</span>
              <strong style={{ color: "#067647" }}>ACTIVE</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
