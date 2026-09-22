import React, { useState, useEffect } from "react";
import {
  Wifi,
  BatteryCharging,
  Lock,
  ShieldCheck,
  AlertTriangle,
  Cpu,
  Fingerprint,
  Activity,
  CheckCircle2,
  Volume2,
  VolumeX,
  ArrowRight,
  RefreshCw,
  Waves
} from "lucide-react";
import { SIMULATION_PHASES } from "../data/sentinelData";

export default function PhoneTerminal({ activePhaseId, onSelectPhase }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);
  const [hasBiometricSigned, setHasBiometricSigned] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sync external phase if provided
  useEffect(() => {
    if (activePhaseId) {
      const idx = SIMULATION_PHASES.findIndex((p) => p.id === activePhaseId);
      if (idx !== -1) {
        setCurrentIdx(idx);
        setIsAutoPlaying(false);
      }
    }
  }, [activePhaseId]);

  // Autoplay progression (cycles every 4.8 seconds unless user interacts)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => {
        const next = (prev + 1) % SIMULATION_PHASES.length;
        if (next === 0) setHasBiometricSigned(false);
        return next;
      });
    }, 4800);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const activePhase = SIMULATION_PHASES[currentIdx];

  const handleStageJump = (idx) => {
    setIsAutoPlaying(false);
    setCurrentIdx(idx);
    if (idx !== 4) setHasBiometricSigned(false);
    onSelectPhase?.(SIMULATION_PHASES[idx].id);
  };

  const handleBiometricTouch = () => {
    setHasBiometricSigned(true);
  };

  return (
    <div
      style={{
        width: 380,
        height: 560,
        borderRadius: 44,
        background: "#0d1117",
        padding: 10,
        boxShadow: "0 25px 60px -15px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.12), inset 0 1px 0 rgba(255,255,255,0.2)",
        position: "relative",
        userSelect: "none",
        fontFamily: "Inter, sans-serif"
      }}
    >
      {/* Phone Screen Outer Chassis */}
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 36,
          background: "#F4F2EC",
          color: "#181d27",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative"
        }}
      >
        {/* Punch-hole Camera Bezel */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#000",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.08)"
          }}
        >
          <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#175cd3" }} />
        </div>

        {/* Top Status Bar */}
        <div
          style={{
            padding: "10px 18px 6px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 10,
            fontWeight: 600,
            color: "rgba(24, 29, 39, 0.8)",
            borderBottom: "1px solid rgba(24, 29, 39, 0.06)",
            background: "rgba(244, 242, 236, 0.95)",
            backdropFilter: "blur(10px)"
          }}
        >
          <span>14:28</span>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 3,
                fontSize: 8,
                fontWeight: 700,
                color: "#067647",
                background: "#dcfae6",
                padding: "2px 6px",
                borderRadius: 999
              }}
            >
              <Lock style={{ width: 8, height: 8 }} />
              SOVEREIGN
            </span>
            <Wifi style={{ width: 10, height: 10 }} />
            <span style={{ fontSize: 9 }}>98%</span>
            <BatteryCharging style={{ width: 12, height: 12, color: "#067647" }} />
          </div>
        </div>

        {/* Stage Header & Progress Dock */}
        <div style={{ padding: "8px 16px 6px", background: "#fff", borderBottom: "1px solid rgba(24, 29, 39, 0.05)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <div>
              <div style={{ fontSize: 9, fontWeight: 700, color: "#717680", letterSpacing: "0.04em" }}>
                ORIGINOS 5 FIELD NODE · 0{currentIdx + 1}/05
              </div>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#181d27" }}>{activePhase.tag}</div>
            </div>
            <span
              style={{
                fontSize: 9,
                fontWeight: 800,
                padding: "3px 8px",
                borderRadius: 999,
                background:
                  activePhase.badgeType === "danger"
                    ? "#fee4e2"
                    : activePhase.badgeType === "success"
                    ? "#dcfae6"
                    : activePhase.badgeType === "warn"
                    ? "#fef0c7"
                    : "#eff8ff",
                color:
                  activePhase.badgeType === "danger"
                    ? "#b42318"
                    : activePhase.badgeType === "success"
                    ? "#067647"
                    : activePhase.badgeType === "warn"
                    ? "#b54708"
                    : "#175cd3"
              }}
            >
              {activePhase.badge}
            </span>
          </div>

          {/* 5 Progress Tabs */}
          <div style={{ display: "flex", gap: 4 }}>
            {SIMULATION_PHASES.map((phase, idx) => (
              <div
                key={phase.id}
                onClick={() => handleStageJump(idx)}
                style={{
                  flex: 1,
                  height: 4,
                  borderRadius: 2,
                  background: idx === currentIdx ? "#ff4405" : idx < currentIdx ? "#181d27" : "rgba(24, 29, 39, 0.12)",
                  cursor: "pointer",
                  transition: "background 0.3s ease"
                }}
                title={phase.tag}
              />
            ))}
          </div>
        </div>

        {/* Main Terminal Screen Content Area */}
        <div
          style={{
            flex: 1,
            padding: "12px 16px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 10
          }}
        >
          {/* Card: Current Operation Overview */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: 16,
              padding: "10px 12px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
              border: "1px solid rgba(24, 29, 39, 0.06)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
              {currentIdx === 0 && <Volume2 style={{ width: 14, height: 14, color: "#b54708" }} />}
              {currentIdx === 1 && <Cpu style={{ width: 14, height: 14, color: "#175cd3" }} />}
              {currentIdx === 2 && <ShieldCheck style={{ width: 14, height: 14, color: "#067647" }} />}
              {currentIdx === 3 && <Waves style={{ width: 14, height: 14, color: "#b42318" }} />}
              {currentIdx === 4 && <Fingerprint style={{ width: 14, height: 14, color: "#067647" }} />}
              <span style={{ fontSize: 12, fontWeight: 800, color: "#181d27" }}>{activePhase.title}</span>
            </div>
            <p style={{ fontSize: 11, color: "#535862", lineHeight: 1.4, margin: 0 }}>{activePhase.lead}</p>
          </div>

          {/* Interactive Stage Specific Visual Area */}
          {currentIdx === 0 && (
            <div
              style={{
                background: "#fef0c7",
                borderRadius: 14,
                padding: "8px 12px",
                border: "1px solid #fedf89",
                display: "flex",
                flexDirection: "column",
                gap: 6
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: "#b54708" }}>AUDIO DISPATCH WAVEFORM</span>
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    fontSize: 9,
                    fontWeight: 700,
                    color: "#b54708",
                    cursor: "pointer"
                  }}
                >
                  {isPlayingAudio ? <Volume2 style={{ width: 12, height: 12 }} /> : <VolumeX style={{ width: 12, height: 12 }} />}
                  {isPlayingAudio ? "LIVE AUDIO" : "MUTED"}
                </button>
              </div>

              {/* Dynamic Waveform Bars */}
              <div style={{ display: "flex", alignItems: "center", gap: 3, height: 28, padding: "0 4px" }}>
                {[14, 26, 18, 28, 12, 22, 10, 24, 16, 26, 20, 14, 28, 18, 22, 12, 24, 16, 22, 14].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: isPlayingAudio ? `${(h * 0.9).toFixed(0)}px` : "4px",
                      background: i > 12 ? "#b42318" : "#b54708",
                      borderRadius: 2,
                      transition: "height 0.2s ease"
                    }}
                  />
                ))}
              </div>
              <div style={{ fontSize: 9.5, fontFamily: "JetBrains Mono, monospace", color: "#7a271a" }}>
                {activePhase.rawSnippet}
              </div>
            </div>
          )}

          {currentIdx === 1 && (
            <div
              style={{
                background: "#eff8ff",
                borderRadius: 14,
                padding: "8px 12px",
                border: "1px solid #b2ddff",
                fontFamily: "JetBrains Mono, monospace"
              }}
            >
              <div style={{ fontSize: 9, fontWeight: 700, color: "#175cd3", marginBottom: 4 }}>
                SNAPDRAGON NPU 18ms EXTRACTOR
              </div>
              <div style={{ fontSize: 9.5, color: "#181d27", lineHeight: 1.5 }}>
                <span style={{ color: "#717680" }}>[0.018s]</span> ACTION: <strong>SET_SPEED</strong>(PUMP_04)
                <br />
                <span style={{ color: "#717680" }}>[0.018s]</span> REG: <strong>%QW104</strong> (Modbus 40012)
                <br />
                <span style={{ color: "#717680" }}>[0.018s]</span> VALUE: <strong>850 RPM</strong> (Hex: 0x0352)
                <br />
                <span style={{ color: "#067647" }}>[SOVEREIGN]</span> ZERO DATA SENT OUTSIDE DEVICE
              </div>
            </div>
          )}

          {currentIdx === 2 && (
            <div
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: "8px 12px",
                border: "1px solid rgba(24, 29, 39, 0.08)",
                fontSize: 10
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontWeight: 700, color: "#535862" }}>CONVENTIONAL IT/OT FIREWALL</span>
                <span style={{ fontWeight: 800, color: "#067647" }}>APPROVED ✓</span>
              </div>
              <p style={{ fontSize: 10, color: "#717680", lineHeight: 1.4, margin: 0 }}>
                Firewalls analyze only syntax and certificates. They allow this packet because it is formatted cleanly — yet execution will rupture the physical water mains.
              </p>
            </div>
          )}

          {currentIdx === 3 && (
            <div
              style={{
                background: "#fee4e2",
                borderRadius: 14,
                padding: "8px 12px",
                border: "1px solid #fecdca",
                display: "flex",
                flexDirection: "column",
                gap: 4
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 10, fontWeight: 800, color: "#b42318" }}>
                  SIMULATED WATER HAMMER WAVE
                </span>
                <span style={{ fontSize: 10, fontWeight: 800, color: "#b42318" }}>11.4 BAR</span>
              </div>

              {/* Dynamic SVG Pressure Curve */}
              <svg viewBox="0 0 200 45" style={{ width: "100%", height: 42 }}>
                {/* Safe limit dotted line at 9.2 bar */}
                <line x1="0" y1="20" x2="200" y2="20" stroke="#b42318" strokeDasharray="3,3" strokeWidth="1" />
                <text x="5" y="16" fill="#b42318" fontSize="7" fontFamily="JetBrains Mono">
                  MAX SAFETY ENVELOPE: 9.2 BAR
                </text>
                {/* Shock wave spike curve */}
                <path
                  d="M0,35 Q40,34 70,30 T110,6 T140,28 T200,32"
                  fill="none"
                  stroke="#b42318"
                  strokeWidth="2.5"
                />
                <circle cx="110" cy="6" r="3.5" fill="#b42318" />
              </svg>
              <div style={{ fontSize: 9.5, fontWeight: 700, color: "#b42318" }}>
                SURGE PEAK: 11.4 BAR EXCEEDS 9.2 BAR YIELD LIMIT
              </div>
            </div>
          )}

          {currentIdx === 4 && (
            <div
              style={{
                background: hasBiometricSigned ? "#dcfae6" : "#ffffff",
                borderRadius: 14,
                padding: "10px 12px",
                border: hasBiometricSigned ? "1.5px solid #75e0a7" : "1px solid rgba(24, 29, 39, 0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 6,
                transition: "all 0.3s ease"
              }}
            >
              <div style={{ fontSize: 10, fontWeight: 700, color: hasBiometricSigned ? "#067647" : "#181d27" }}>
                {hasBiometricSigned ? "ED25519 AUTHORIZATION COMMITTED" : "TOUCH FINGERPRINT TO AUTHORIZE PLAN B"}
              </div>

              <button
                onClick={handleBiometricTouch}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: hasBiometricSigned ? "#067647" : "#ff4405",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: hasBiometricSigned
                    ? "0 0 0 6px rgba(6, 118, 71, 0.15)"
                    : "0 0 0 6px rgba(255, 68, 5, 0.18)",
                  transition: "transform 0.15s ease, background 0.3s ease",
                  transform: hasBiometricSigned ? "scale(1.05)" : "scale(1)"
                }}
              >
                {hasBiometricSigned ? <CheckCircle2 style={{ width: 28, height: 28 }} /> : <Fingerprint style={{ width: 28, height: 28 }} />}
              </button>

              <div style={{ fontSize: 9, color: hasBiometricSigned ? "#067647" : "#717680", fontFamily: "JetBrains Mono" }}>
                {hasBiometricSigned ? "CRYPTOGRAPHIC PROOF LOGGED TO SCADA" : "Tap sensor to sign replanned safe trajectory"}
              </div>
            </div>
          )}

          {/* Telemetry Key-Value Grid */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: 14,
              padding: "8px 10px",
              border: "1px solid rgba(24, 29, 39, 0.06)",
              display: "flex",
              flexDirection: "column",
              gap: 4
            }}
          >
            {activePhase.telemetry.map((t, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: 9.5,
                  padding: "2px 0",
                  borderBottom: i < activePhase.telemetry.length - 1 ? "1px solid rgba(24, 29, 39, 0.04)" : "none"
                }}
              >
                <span style={{ color: "#717680", fontWeight: 500 }}>{t.label}</span>
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontWeight: 700,
                    color:
                      t.status === "danger"
                        ? "#b42318"
                        : t.status === "warn"
                        ? "#b54708"
                        : t.status === "success"
                        ? "#067647"
                        : "#181d27"
                  }}
                >
                  {t.val}
                </span>
              </div>
            ))}
          </div>

          {/* Verdict Banner */}
          <div
            style={{
              borderRadius: 12,
              padding: "8px 10px",
              background:
                activePhase.badgeType === "danger"
                  ? "#fee4e2"
                  : activePhase.badgeType === "success"
                  ? "#dcfae6"
                  : activePhase.badgeType === "warn"
                  ? "#fef0c7"
                  : "#eff8ff",
              border: "1px solid rgba(0,0,0,0.04)"
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 800,
                color:
                  activePhase.badgeType === "danger"
                    ? "#b42318"
                    : activePhase.badgeType === "success"
                    ? "#067647"
                    : activePhase.badgeType === "warn"
                    ? "#b54708"
                    : "#175cd3"
              }}
            >
              {activePhase.verdict}
            </div>
            <div style={{ fontSize: 9, color: "#535862", marginTop: 2 }}>{activePhase.verdictDetail}</div>
          </div>
        </div>

        {/* Bottom Dock Step Forward Button */}
        <div
          style={{
            padding: "8px 16px 12px",
            background: "#ffffff",
            borderTop: "1px solid rgba(24, 29, 39, 0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div style={{ fontSize: 9.5, color: "#717680", fontWeight: 600 }}>
            {isAutoPlaying ? "Autoplay Active" : "Manual Inspection"}
          </div>

          <button
            onClick={() => handleStageJump((currentIdx + 1) % SIMULATION_PHASES.length)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 11,
              fontWeight: 700,
              color: "#ff4405",
              cursor: "pointer"
            }}
          >
            <span>NEXT STAGE</span>
            <ArrowRight style={{ width: 12, height: 12 }} />
          </button>
        </div>
      </div>
    </div>
  );
}
