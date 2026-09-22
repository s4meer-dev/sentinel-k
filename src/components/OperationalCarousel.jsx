import React, { useState, useEffect } from "react";
import { OPERATIONAL_MOMENTS } from "../data/sentinelData";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Cpu,
  ShieldCheck,
  AlertTriangle,
  Radio,
  CheckCircle2,
  ShieldAlert,
  Layers
} from "lucide-react";

export default function OperationalCarousel({ onSelectPhase }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % OPERATIONAL_MOMENTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const slide = OPERATIONAL_MOMENTS[currentIdx];

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentIdx((prev) => (prev === 0 ? OPERATIONAL_MOMENTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentIdx((prev) => (prev + 1) % OPERATIONAL_MOMENTS.length);
  };

  return (
    <section
      id="moments"
      style={{
        padding: "90px 24px",
        maxWidth: 1240,
        margin: "0 auto",
        position: "relative"
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 50px" }}>
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
          <Radio style={{ width: 14, height: 14 }} />
          <span>01 // 5 SIGNATURE OPERATIONAL MOMENTS</span>
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
          Witness Autonomous Field Triage in Action.
        </h2>

        <p className="font-sans-tight" style={{ fontSize: 16, color: "#535862", lineHeight: 1.5 }}>
          Five pivotal moments across the mobile field terminal and industrial digital twin — from acoustic spoof detection to EPANET hydrodynamic water hammer simulation.
        </p>
      </div>

      {/* Main Carousel Card */}
      <div
        className="glass-card glass-sheen"
        style={{
          borderRadius: 32,
          padding: "clamp(24px, 4vw, 48px)",
          background: "#ffffff",
          boxShadow: "0 20px 50px -15px rgba(20, 9, 6, 0.08)",
          border: "1px solid rgba(20, 9, 6, 0.08)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 40,
          alignItems: "center"
        }}
      >
        {/* Left Column: Narrative Details */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: 10,
                fontFamily: "JetBrains Mono, monospace",
                fontWeight: 800,
                padding: "4px 10px",
                borderRadius: 999,
                background: "#140906",
                color: "#fff"
              }}
            >
              {slide.tag}
            </span>
            <span
              style={{
                fontSize: 10,
                fontFamily: "JetBrains Mono, monospace",
                fontWeight: 700,
                color: "#ff4405"
              }}
            >
              {slide.hardware}
            </span>
          </div>

          <h3
            className="font-cygne"
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 700,
              color: "#140906",
              lineHeight: 1.2,
              marginBottom: 16
            }}
          >
            {slide.title}
          </h3>

          <div
            style={{
              fontSize: 12,
              fontFamily: "JetBrains Mono, monospace",
              fontWeight: 700,
              color: "#b54708",
              background: "#fef0c7",
              padding: "8px 14px",
              borderRadius: 12,
              marginBottom: 16,
              border: "1px solid #fedf89"
            }}
          >
            {slide.headline}
          </div>

          <p style={{ fontSize: 15, color: "#414651", lineHeight: 1.6, marginBottom: 24 }}>
            {slide.description}
          </p>

          {/* Verdict Box */}
          <div
            style={{
              padding: "14px 18px",
              borderRadius: 16,
              background:
                slide.verdict.type === "reject"
                  ? "#fee4e2"
                  : slide.verdict.type === "pass"
                  ? "#eff8ff"
                  : slide.verdict.type === "replan"
                  ? "#dcfae6"
                  : "#fef0c7",
              border: "1px solid rgba(0,0,0,0.06)"
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                color:
                  slide.verdict.type === "reject"
                    ? "#b42318"
                    : slide.verdict.type === "pass"
                    ? "#175cd3"
                    : slide.verdict.type === "replan"
                    ? "#067647"
                    : "#b54708",
                display: "flex",
                alignItems: "center",
                gap: 6
              }}
            >
              {slide.verdict.type === "reject" ? (
                <ShieldAlert style={{ width: 16, height: 16 }} />
              ) : slide.verdict.type === "replan" ? (
                <CheckCircle2 style={{ width: 16, height: 16 }} />
              ) : (
                <ShieldCheck style={{ width: 16, height: 16 }} />
              )}
              <span>{slide.verdict.status}</span>
            </div>
            <p style={{ fontSize: 12, color: "#535862", margin: "4px 0 0" }}>{slide.verdict.details}</p>
          </div>
        </div>

        {/* Right Column: Industrial Telemetry Grid */}
        <div
          style={{
            background: "#EDE7DB",
            borderRadius: 24,
            padding: 28,
            border: "1px solid rgba(20, 9, 6, 0.08)",
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: "#140906", letterSpacing: "0.04em" }}>
              LIVE TELEMETRY EXTRACTOR
            </span>
            <span
              style={{
                fontSize: 10,
                fontFamily: "JetBrains Mono, monospace",
                fontWeight: 700,
                background: "#fff",
                padding: "3px 10px",
                borderRadius: 999,
                color: "#140906",
                border: "1px solid rgba(0,0,0,0.06)"
              }}
            >
              0{slide.id} / 05
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {slide.telemetry.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  borderRadius: 12,
                  padding: "10px 14px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "1px solid rgba(20, 9, 6, 0.05)"
                }}
              >
                <span style={{ fontSize: 11, color: "#535862", fontWeight: 600 }}>{item.label}</span>
                <span
                  style={{
                    fontSize: 11.5,
                    fontFamily: "JetBrains Mono, monospace",
                    fontWeight: 700,
                    color:
                      item.status === "hazard"
                        ? "#b42318"
                        : item.status === "warn"
                        ? "#b54708"
                        : item.status === "good"
                        ? "#067647"
                        : "#181d27"
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Metric Highlights Pill */}
          <div
            style={{
              padding: "10px 14px",
              borderRadius: 12,
              background: "#140906",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>KEY SAFETY METRIC</span>
            <span style={{ fontSize: 11, fontFamily: "JetBrains Mono", fontWeight: 700, color: "#ffd580" }}>
              {slide.metricBadge}
            </span>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Bar */}
      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16
        }}
      >
        {/* Step Indicators */}
        <div style={{ display: "flex", gap: 8 }}>
          {OPERATIONAL_MOMENTS.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => {
                setIsPlaying(false);
                setCurrentIdx(idx);
              }}
              style={{
                width: idx === currentIdx ? 36 : 10,
                height: 10,
                borderRadius: 5,
                background: idx === currentIdx ? "#ff4405" : "rgba(20, 9, 6, 0.2)",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              title={m.title}
            />
          ))}
        </div>

        {/* Play/Pause and Next/Prev Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "#fff",
              border: "1px solid rgba(20, 9, 6, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}
          >
            <ChevronLeft style={{ width: 18, height: 18 }} />
          </button>

          <button
            onClick={handleNext}
            style={{
              width: 38,
              height: 38,
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
            <ChevronRight style={{ width: 18, height: 18 }} />
          </button>
        </div>
      </div>
    </section>
  );
}
