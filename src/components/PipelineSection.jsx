import React, { useState } from "react";
import { PIPELINE_STEPS } from "../data/sentinelData";
import {
  CheckCircle,
  AlertOctagon,
  AlertTriangle,
  RotateCcw,
  Sliders,
  Terminal,
  Cpu,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

export default function PipelineSection() {
  const [activeStepId, setActiveStepId] = useState(1);

  const activeStep = PIPELINE_STEPS.find((s) => s.id === activeStepId) || PIPELINE_STEPS[0];

  return (
    <section
      id="pipeline"
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
            background: "#eff8ff",
            color: "#175cd3",
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.05em",
            marginBottom: 16
          }}
        >
          <Sliders style={{ width: 14, height: 14 }} />
          <span>03 // 8-STAGE AUTONOMOUS PIPELINE</span>
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
          From Deceptive Dispatch to Sovereign Actuation.
        </h2>

        <p className="font-sans-tight" style={{ fontSize: 16, color: "#535862", lineHeight: 1.5 }}>
          Explore each discrete stage of the verification barrier. The on-device SLM reasons, deterministic compilers translate, dynamic physics models calculate, and the human confirms.
        </p>
      </div>

      {/* Main 2-Column Pipeline Explorer */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 32,
          alignItems: "start"
        }}
      >
        {/* Left Column: 8 Stage Navigation List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {PIPELINE_STEPS.map((step) => {
            const isActive = step.id === activeStepId;
            return (
              <div
                key={step.id}
                onClick={() => setActiveStepId(step.id)}
                style={{
                  padding: "16px 20px",
                  borderRadius: 20,
                  background: isActive ? "#ffffff" : "rgba(255,255,255,0.6)",
                  border: isActive ? "2px solid #ff4405" : "1px solid rgba(20, 9, 6, 0.08)",
                  boxShadow: isActive ? "0 10px 25px -5px rgba(255, 68, 5, 0.15)" : "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: "JetBrains Mono, monospace",
                      fontWeight: 800,
                      color: isActive ? "#ff4405" : "#717680"
                    }}
                  >
                    0{step.id}
                  </span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: "#140906" }}>{step.title}</div>
                    <div style={{ fontSize: 11, color: "#717680", marginTop: 2 }}>{step.stage}</div>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: 9.5,
                    fontFamily: "JetBrains Mono",
                    fontWeight: 800,
                    padding: "3px 8px",
                    borderRadius: 999,
                    background:
                      step.status === "FAIL"
                        ? "#fee4e2"
                        : step.status === "FLAGGED"
                        ? "#fef0c7"
                        : step.status === "REPLANNED"
                        ? "#dcfae6"
                        : "#eff8ff",
                    color:
                      step.status === "FAIL"
                        ? "#b42318"
                        : step.status === "FLAGGED"
                        ? "#b54708"
                        : step.status === "REPLANNED"
                        ? "#067647"
                        : "#175cd3"
                  }}
                >
                  {step.status}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Column: Active Stage Technical Inspector */}
        <div
          className="glass-card glass-sheen"
          style={{
            borderRadius: 32,
            padding: "clamp(24px, 4vw, 40px)",
            background: "#ffffff",
            boxShadow: "0 20px 45px -10px rgba(20, 9, 6, 0.08)",
            border: "1px solid rgba(20, 9, 6, 0.08)",
            position: "sticky",
            top: 100
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <span
              style={{
                fontSize: 11,
                fontFamily: "JetBrains Mono",
                fontWeight: 800,
                padding: "4px 12px",
                borderRadius: 999,
                background: "#140906",
                color: "#fff"
              }}
            >
              STAGE 0{activeStep.id} OF 08
            </span>

            <span
              style={{
                fontSize: 11,
                fontFamily: "JetBrains Mono",
                fontWeight: 700,
                color: "#ff4405"
              }}
            >
              {activeStep.engine}
            </span>
          </div>

          <h3
            className="font-cygne"
            style={{
              fontSize: "clamp(24px, 3vw, 32px)",
              fontWeight: 700,
              color: "#140906",
              lineHeight: 1.2,
              marginBottom: 16
            }}
          >
            {activeStep.title}
          </h3>

          <p style={{ fontSize: 15, color: "#414651", lineHeight: 1.6, marginBottom: 20 }}>
            {activeStep.description}
          </p>

          {/* Technical Details Card */}
          <div
            style={{
              background: "#EDE7DB",
              borderRadius: 18,
              padding: 18,
              marginBottom: 20,
              border: "1px solid rgba(20, 9, 6, 0.08)"
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 800, color: "#140906", marginBottom: 6 }}>
              ENGINE EXECUTION SPECIFICATION:
            </div>
            <p style={{ fontSize: 13, color: "#535862", lineHeight: 1.5, margin: 0 }}>
              {activeStep.technicalDetails}
            </p>
          </div>

          {/* Output Payload / Code Snippet */}
          <div
            style={{
              background: "#0a0d12",
              color: "#ffd580",
              borderRadius: 18,
              padding: 18,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 12,
              lineHeight: 1.5,
              overflowX: "auto"
            }}
          >
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
              // TELEMETRY & REGISTER SNAPSHOT
            </div>
            <div>{activeStep.outputSnippet}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
