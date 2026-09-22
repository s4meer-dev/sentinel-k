import React, { useState, useEffect } from "react";
import { INCIDENT_STEPS } from "../data/sentinelData";
import { Clock, Play, Pause, ChevronLeft, ChevronRight, AlertCircle, ShieldCheck } from "lucide-react";

export default function IncidentTimeline() {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentStepIdx((prev) => (prev + 1) % INCIDENT_STEPS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const step = INCIDENT_STEPS[currentStepIdx];

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentStepIdx((prev) => (prev === 0 ? INCIDENT_STEPS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentStepIdx((prev) => (prev + 1) % INCIDENT_STEPS.length);
  };

  return (
    <section
      id="playbook"
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
            background: "#dcfae6",
            color: "#067647",
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.05em",
            marginBottom: 16
          }}
        >
          <Clock style={{ width: 14, height: 14 }} />
          <span>07 // 10-STEP INCIDENT PLAYBOOK</span>
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
          The Friday Surge Attack Walkthrough.
        </h2>

        <p className="font-sans-tight" style={{ fontSize: 16, color: "#535862", lineHeight: 1.5 }}>
          Anatomy of a real-world cyber-physical attack simulation. Follow the second-by-second timeline from initial spoofed dispatch to safe trajectory replanning.
        </p>
      </div>

      {/* Timeline Interactive Card */}
      <div
        className="glass-card glass-sheen"
        style={{
          borderRadius: 32,
          padding: "clamp(24px, 4vw, 44px)",
          background: "#ffffff",
          boxShadow: "0 20px 45px -10px rgba(20, 9, 6, 0.08)",
          border: "1px solid rgba(20, 9, 6, 0.08)",
          marginBottom: 24
        }}
      >
        {/* Timeline Header Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 24,
            paddingBottom: 16,
            borderBottom: "1px solid rgba(20, 9, 6, 0.06)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontSize: 11,
                fontFamily: "JetBrains Mono",
                fontWeight: 800,
                background: "#140906",
                color: "#fff",
                padding: "4px 10px",
                borderRadius: 999
              }}
            >
              STEP {step.step < 10 ? `0${step.step}` : step.step} / 10
            </span>
            <span
              style={{
                fontSize: 12,
                fontFamily: "JetBrains Mono",
                fontWeight: 700,
                color: "#ff4405"
              }}
            >
              TIMESTAMP: {step.time}
            </span>
          </div>

          <span
            style={{
              fontSize: 10,
              fontFamily: "JetBrains Mono",
              fontWeight: 800,
              padding: "4px 12px",
              borderRadius: 999,
              background:
                step.threatStatus === "CRITICAL"
                  ? "#fee4e2"
                  : step.threatStatus === "WARNING" || step.threatStatus === "SUSPICIOUS"
                  ? "#fef0c7"
                  : step.threatStatus === "SAFE"
                  ? "#dcfae6"
                  : "#eff8ff",
              color:
                step.threatStatus === "CRITICAL"
                  ? "#b42318"
                  : step.threatStatus === "WARNING" || step.threatStatus === "SUSPICIOUS"
                  ? "#b54708"
                  : step.threatStatus === "SAFE"
                  ? "#067647"
                  : "#175cd3"
            }}
          >
            STATUS: {step.threatStatus}
          </span>
        </div>

        {/* Step Details */}
        <h3
          className="font-cygne"
          style={{
            fontSize: "clamp(24px, 3.2vw, 36px)",
            fontWeight: 700,
            color: "#140906",
            lineHeight: 1.2,
            marginBottom: 14
          }}
        >
          {step.title}
        </h3>

        <p style={{ fontSize: 16, color: "#414651", lineHeight: 1.6, marginBottom: 20 }}>
          {step.summary}
        </p>

        {/* Actor & Action Card */}
        <div
          style={{
            background: "#EDE7DB",
            borderRadius: 20,
            padding: 20,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            border: "1px solid rgba(20, 9, 6, 0.06)"
          }}
        >
          <div>
            <span style={{ fontSize: 10.5, fontWeight: 800, color: "#717680", textTransform: "uppercase" }}>
              OPERATIONAL ACTOR:
            </span>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#140906", marginTop: 4 }}>
              {step.actor}
            </div>
          </div>
          <div>
            <span style={{ fontSize: 10.5, fontWeight: 800, color: "#717680", textTransform: "uppercase" }}>
              ACTION / SIGNAL SNAPSHOT:
            </span>
            <div style={{ fontSize: 13, fontFamily: "JetBrains Mono", color: "#140906", marginTop: 4 }}>
              {step.action}
            </div>
          </div>
        </div>
      </div>

      {/* Scrub Bar & Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16
        }}
      >
        {/* Step Scrub Dots */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", flex: 1 }}>
          {INCIDENT_STEPS.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => {
                setIsPlaying(false);
                setCurrentStepIdx(idx);
              }}
              style={{
                height: 8,
                flex: 1,
                minWidth: 20,
                borderRadius: 4,
                background: idx === currentStepIdx ? "#ff4405" : idx < currentStepIdx ? "#140906" : "rgba(20, 9, 6, 0.15)",
                cursor: "pointer",
                transition: "all 0.25s ease"
              }}
              title={`Step ${s.step}: ${s.title}`}
            />
          ))}
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              padding: "8px 14px",
              borderRadius: 20,
              background: "#fff",
              border: "1px solid rgba(20, 9, 6, 0.1)",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              fontWeight: 700,
              cursor: "pointer"
            }}
          >
            {isPlaying ? <Pause style={{ width: 12, height: 12 }} /> : <Play style={{ width: 12, height: 12 }} />}
            <span>{isPlaying ? "AUTOPLAY" : "PAUSED"}</span>
          </button>

          <button
            onClick={handlePrev}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "#fff",
              border: "1px solid rgba(20, 9, 6, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}
          >
            <ChevronLeft style={{ width: 16, height: 16 }} />
          </button>

          <button
            onClick={handleNext}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "#140906",
              color: "#fff",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}
          >
            <ChevronRight style={{ width: 16, height: 16 }} />
          </button>
        </div>
      </div>
    </section>
  );
}
