import React from "react";
import { MULTI_AGENTS } from "../data/sentinelData";
import { Cpu, Terminal, Radio, Shield, Wrench, CheckCircle } from "lucide-react";

export default function AgentBento() {
  return (
    <section
      id="agents"
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
            background: "#fef0c7",
            color: "#b54708",
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.05em",
            marginBottom: 16
          }}
        >
          <Cpu style={{ width: 14, height: 14 }} />
          <span>06 // DISTRIBUTED MULTI-AGENT COORDINATION</span>
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
          Agents Reason. Tools Measure. Validators Decide.
        </h2>

        <p className="font-sans-tight" style={{ fontSize: 16, color: "#535862", lineHeight: 1.5 }}>
          No monolithic chatbot handles critical infrastructure safety. Sentinel-K orchestrates five bounded, specialized agents with isolated scopes and deterministic validation kernels.
        </p>
      </div>

      {/* 5-Agent Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24
        }}
      >
        {MULTI_AGENTS.map((agent, i) => (
          <div
            key={i}
            className="glass-card glass-sheen"
            style={{
              padding: 30,
              borderRadius: 28,
              background: "#ffffff",
              boxShadow: "0 10px 30px -10px rgba(20, 9, 6, 0.06)",
              border: "1px solid rgba(20, 9, 6, 0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <span
                  style={{
                    fontSize: 9.5,
                    fontFamily: "JetBrains Mono",
                    fontWeight: 800,
                    padding: "4px 10px",
                    borderRadius: 999,
                    background: "#EDE7DB",
                    color: "#140906"
                  }}
                >
                  {agent.tier}
                </span>
                <span style={{ fontSize: 10, fontFamily: "JetBrains Mono", color: "#717680", fontWeight: 700 }}>
                  AGENT 0{i + 1}
                </span>
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#140906", marginBottom: 6 }}>
                {agent.name}
              </h3>

              <div
                style={{
                  fontSize: 11.5,
                  fontFamily: "JetBrains Mono, monospace",
                  fontWeight: 700,
                  color: "#ff4405",
                  marginBottom: 12
                }}
              >
                Engine: {agent.model}
              </div>

              <p style={{ fontSize: 13.5, color: "#535862", lineHeight: 1.5, marginBottom: 20 }}>
                {agent.role}
              </p>
            </div>

            <div style={{ paddingTop: 16, borderTop: "1px solid rgba(20, 9, 6, 0.06)" }}>
              <div style={{ fontSize: 10.5, fontWeight: 700, color: "#717680", marginBottom: 8 }}>
                DETERMINISTIC TOOLS &amp; SCHEMAS:
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {agent.tools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontSize: 10,
                      fontFamily: "JetBrains Mono, monospace",
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: 8,
                      background: "#EDE7DB",
                      color: "#140906"
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
