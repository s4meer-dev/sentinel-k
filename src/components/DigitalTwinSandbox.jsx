import React, { useState, useMemo } from "react";
import { Waves, Database, Cpu, ShieldCheck, AlertTriangle, Play, RefreshCw, Zap } from "lucide-react";

export default function DigitalTwinSandbox() {
  const [pumpSpeed, setPumpSpeed] = useState(850);
  const [valveAperture, setValveAperture] = useState(0);

  // Dynamic Joukowsky water hammer pressure approximation
  // Base static head: 4.5 bar
  // Dynamic surge ~ (RPM / 850) * 6.9
  // Relief valve dampens surge: (1 - (valve / 100) * 0.72)
  const simulatedPeak = useMemo(() => {
    const rawSurge = (pumpSpeed / 850) * 6.9;
    const reliefFactor = valveAperture > 0 ? 1 - (valveAperture / 100) * 0.72 : 1.0;
    return 4.5 + rawSurge * reliefFactor;
  }, [pumpSpeed, valveAperture]);

  const isExcursion = simulatedPeak > 9.2;

  const handleApplyReplan = () => {
    setValveAperture(40);
    setPumpSpeed(620);
  };

  const handleResetDangerous = () => {
    setValveAperture(0);
    setPumpSpeed(850);
  };

  return (
    <section
      id="digital-twin"
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
          <Waves style={{ width: 14, height: 14 }} />
          <span>05 // EPANET 2.2 / WNTR HYDRODYNAMIC TWIN</span>
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
          Physics as the Inviolable Testbed.
        </h2>

        <p className="font-sans-tight" style={{ fontSize: 16, color: "#535862", lineHeight: 1.5 }}>
          Before any high-impact Modbus packet touches municipal hardware, Sentinel-K calculates forward transient shockwaves using Navier-Stokes and Joukowsky water hammer differential equations.
        </p>
      </div>

      {/* 3 Architecture Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
          marginBottom: 44
        }}
      >
        <div
          className="glass-card glass-sheen"
          style={{
            padding: 28,
            borderRadius: 24,
            background: "#ffffff",
            border: "1px solid rgba(20, 9, 6, 0.08)"
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: "#eff8ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#175cd3",
              marginBottom: 16
            }}
          >
            <Database style={{ width: 20, height: 20 }} />
          </div>
          <h3 style={{ fontSize: 16, fontWeight: 800, color: "#140906", marginBottom: 8 }}>
            Plant Topology Model
          </h3>
          <p style={{ fontSize: 13, color: "#535862", lineHeight: 1.5, margin: 0 }}>
            Models 24 pipe junctions, 4 variable frequency pumps, 6 pressure relief valves, and 2 reservoirs with exact Hazen-Williams friction coefficients.
          </p>
          <div style={{ marginTop: 16, fontSize: 10.5, fontFamily: "JetBrains Mono", fontWeight: 700, color: "#175cd3" }}>
            SCHEMA: EPANET 2.2 INP NETWORK
          </div>
        </div>

        <div
          className="glass-card glass-sheen"
          style={{
            padding: 28,
            borderRadius: 24,
            background: "#ffffff",
            border: "1px solid rgba(20, 9, 6, 0.08)"
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: "#fef0c7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#b54708",
              marginBottom: 16
            }}
          >
            <Cpu style={{ width: 20, height: 20 }} />
          </div>
          <h3 style={{ fontSize: 16, fontWeight: 800, color: "#140906", marginBottom: 8 }}>
            Transient Kinematics Solver
          </h3>
          <p style={{ fontSize: 13, color: "#535862", lineHeight: 1.5, margin: 0 }}>
            Computes Joukowsky water hammer waves (ΔP = ρ·c·Δv), velocity head gradients, and cavitation boundaries in 50ms discrete time slices.
          </p>
          <div style={{ marginTop: 16, fontSize: 10.5, fontFamily: "JetBrains Mono", fontWeight: 700, color: "#b54708" }}>
            ENGINE: PYTHON WNTR SOLVER
          </div>
        </div>

        <div
          className="glass-card glass-sheen"
          style={{
            padding: 28,
            borderRadius: 24,
            background: "#ffffff",
            border: "1px solid rgba(20, 9, 6, 0.08)"
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: "#dcfae6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#067647",
              marginBottom: 16
            }}
          >
            <ShieldCheck style={{ width: 20, height: 20 }} />
          </div>
          <h3 style={{ fontSize: 16, fontWeight: 800, color: "#140906", marginBottom: 8 }}>
            Invariant Guardrails
          </h3>
          <p style={{ fontSize: 13, color: "#535862", lineHeight: 1.5, margin: 0 }}>
            Hardcoded mathematical invariants: Max Manifold Pressure ≤ 9.2 bar, Min Head ≥ 1.5m, Max Surge Velocity ≤ 3.2 m/s.
          </p>
          <div style={{ marginTop: 16, fontSize: 10.5, fontFamily: "JetBrains Mono", fontWeight: 700, color: "#067647" }}>
            GATE: DETERMINISTIC INVARIANT CLAMP
          </div>
        </div>
      </div>

      {/* Interactive EPANET Hydrodynamic Simulator Sandbox */}
      <div
        className="glass-card glass-sheen"
        style={{
          borderRadius: 32,
          padding: "clamp(24px, 4vw, 44px)",
          background: "#ffffff",
          boxShadow: "0 25px 60px -15px rgba(20, 9, 6, 0.08)",
          border: "1px solid rgba(20, 9, 6, 0.08)"
        }}
      >
        {/* Sandbox Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 32,
            paddingBottom: 20,
            borderBottom: "1px solid rgba(20, 9, 6, 0.06)"
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: isExcursion ? "#b42318" : "#067647" }} />
              <span style={{ fontSize: 12, fontWeight: 800, color: "#140906", letterSpacing: "0.04em" }}>
                INTERACTIVE SIMULATOR // EPANET 2.2 KINETIC TWIN
              </span>
            </div>
            <p style={{ fontSize: 13, color: "#535862", margin: 0 }}>
              Adjust commanded pump speed and relief valve state to witness forward transient pressure waves before PLC execution.
            </p>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={handleApplyReplan}
              style={{
                padding: "8px 16px",
                borderRadius: 20,
                background: "#067647",
                color: "#fff",
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6
              }}
            >
              <Zap style={{ width: 14, height: 14 }} />
              <span>APPLY SAFE REPLAN</span>
            </button>
            <button
              onClick={handleResetDangerous}
              style={{
                padding: "8px 16px",
                borderRadius: 20,
                background: "#EDE7DB",
                color: "#140906",
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer"
              }}
            >
              Reset Attack
            </button>
          </div>
        </div>

        {/* Sliders & Visualizer 2-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 36,
            alignItems: "center"
          }}
        >
          {/* Controls Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Pump Speed Slider */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#140906" }}>
                  Booster Pump 04 Commanded Speed:
                </span>
                <span style={{ fontSize: 14, fontFamily: "JetBrains Mono", fontWeight: 800, color: "#ff4405" }}>
                  {pumpSpeed} RPM
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={1200}
                step={25}
                value={pumpSpeed}
                onChange={(e) => setPumpSpeed(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#ff4405", height: 6, cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#717680", marginTop: 4 }}>
                <span>0 RPM (Idle)</span>
                <span>620 RPM (Safe Cap)</span>
                <span>850 RPM (Attack Target)</span>
                <span>1200 RPM (Max)</span>
              </div>
            </div>

            {/* Relief Valve Slider */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#140906" }}>
                  Relief Valve A2 Modulation Aperture:
                </span>
                <span style={{ fontSize: 14, fontFamily: "JetBrains Mono", fontWeight: 800, color: "#175cd3" }}>
                  {valveAperture}%
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={valveAperture}
                onChange={(e) => setValveAperture(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#175cd3", height: 6, cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#717680", marginTop: 4 }}>
                <span>0% (Closed / Trapped)</span>
                <span>40% (Replanned Damping)</span>
                <span>100% (Full Vent)</span>
              </div>
            </div>

            {/* Live Readout Metrics Box */}
            <div
              style={{
                background: "#EDE7DB",
                borderRadius: 20,
                padding: 18,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12
              }}
            >
              <div>
                <span style={{ fontSize: 10, color: "#535862", fontWeight: 700 }}>SIMULATED PEAK PRESSURE</span>
                <div
                  style={{
                    fontSize: 24,
                    fontFamily: "JetBrains Mono",
                    fontWeight: 800,
                    color: isExcursion ? "#b42318" : "#067647"
                  }}
                >
                  {simulatedPeak.toFixed(1)} bar
                </div>
              </div>
              <div>
                <span style={{ fontSize: 10, color: "#535862", fontWeight: 700 }}>PIPE YIELD THRESHOLD</span>
                <div style={{ fontSize: 24, fontFamily: "JetBrains Mono", fontWeight: 800, color: "#140906" }}>
                  9.2 bar
                </div>
              </div>
            </div>
          </div>

          {/* SVG Waveform Visualizer Column */}
          <div
            style={{
              background: "#0a0d12",
              borderRadius: 24,
              padding: 24,
              color: "#fff",
              position: "relative"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontFamily: "JetBrains Mono", fontWeight: 700, color: "#ffd580" }}>
                NODE 14 SURGE TRANSIENT WAVEFORM
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontFamily: "JetBrains Mono",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: 999,
                  background: isExcursion ? "#b42318" : "#067647",
                  color: "#fff"
                }}
              >
                {isExcursion ? "CATASTROPHIC" : "SAFE BOUND"}
              </span>
            </div>

            {/* SVG Chart with Dynamic Height */}
            <svg viewBox="0 0 300 120" style={{ width: "100%", height: 160 }}>
              {/* Grid Lines */}
              <line x1="30" y1="20" x2="290" y2="20" stroke="rgba(255,255,255,0.1)" />
              <line x1="30" y1="55" x2="290" y2="55" stroke="rgba(255,255,255,0.1)" />
              <line x1="30" y1="90" x2="290" y2="90" stroke="rgba(255,255,255,0.1)" />

              {/* Threshold Line at 9.2 bar (around y = 45) */}
              <line x1="30" y1="45" x2="290" y2="45" stroke="#ef4444" strokeDasharray="4,4" strokeWidth="1.5" />
              <text x="35" y="40" fill="#ef4444" fontSize="8" fontFamily="JetBrains Mono">
                YIELD LIMIT: 9.2 BAR
              </text>

              {/* Dynamic Waveform Path */}
              {(() => {
                // Map simulatedPeak (4.5 - 12.0) to y-coords (90 down to 15)
                const peakY = Math.max(15, Math.min(100, 95 - ((simulatedPeak - 4.5) / 7.5) * 80));
                return (
                  <>
                    <path
                      d={`M 30,90 Q 70,88 110,${peakY} T 180,${Math.min(90, peakY + 25)} T 240,${Math.min(
                        90,
                        peakY + 15
                      )} T 290,85`}
                      fill="none"
                      stroke={isExcursion ? "#ef4444" : "#10b981"}
                      strokeWidth="3"
                    />
                    <circle cx="110" cy={peakY} r="4.5" fill={isExcursion ? "#ef4444" : "#10b981"} />
                    <text
                      x="118"
                      y={peakY + 4}
                      fill={isExcursion ? "#ef4444" : "#10b981"}
                      fontSize="9"
                      fontWeight="bold"
                      fontFamily="JetBrains Mono"
                    >
                      {simulatedPeak.toFixed(1)} bar
                    </text>
                  </>
                );
              })()}

              {/* Baseline indicator */}
              <text x="35" y="105" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="JetBrains Mono">
                t=0s (4.5 bar baseline)
              </text>
              <text x="240" y="105" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="JetBrains Mono">
                t=60s
              </text>
            </svg>

            {/* Verdict Alert Box */}
            <div
              style={{
                marginTop: 12,
                padding: "10px 14px",
                borderRadius: 14,
                background: isExcursion ? "rgba(180, 35, 24, 0.25)" : "rgba(6, 118, 71, 0.25)",
                border: isExcursion ? "1px solid #b42318" : "1px solid #067647",
                fontSize: 11.5
              }}
            >
              {isExcursion ? (
                <div style={{ color: "#fca5a5" }}>
                  <strong>CATASTROPHIC OVERPRESSURE:</strong> 11.4 bar shock wave will rupture municipal header flange. Command execution prohibited by invariant gate.
                </div>
              ) : (
                <div style={{ color: "#86efac" }}>
                  <strong>SAFE OPERATIONAL ENVELOPE:</strong> Fluid transients safely dampened below 9.2 bar yield limit. Operating margin: {(9.2 - simulatedPeak).toFixed(1)} bar.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
