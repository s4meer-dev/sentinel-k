import { r as e } from "./rolldown-runtime-Dw2cE7zH.js";
import { i as t, t as n } from "./vendor-react-DZDGgP02.js";

var o = e(t(), 1);
var x = n();

var F = `'AM Le Cygne', 'Playfair Display', Georgia, serif`;
var I = `'TWK Lausanne', 'Inter', sans-serif`;
var L = `'Inter', sans-serif`;
var R = `#ff692e`;
var V = `#0a0d12`;
var W_CARD = `#ffffff`;
var BORDER_LIGHT = `rgba(0, 0, 0, 0.08)`;
var BORDER_DARK = `rgba(255, 255, 255, 0.08)`;

// Section Bridge Divider
export function Bridge({ number, tag }) {
  return (0, x.jsx)(`div`, {
    style: {
      maxWidth: 1280,
      margin: `0 auto`,
      padding: `40px 32px 16px`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      borderTop: `1px solid ${BORDER_LIGHT}`,
      fontFamily: I,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: `0.15em`,
      color: `#7c766c`,
      textTransform: `uppercase`
    },
    children: (0, x.jsxs)(`div`, {
      style: { display: `flex`, alignItems: `center`, gap: 8, width: `100%`, justifyContent: `space-between` },
      children: [
        (0, x.jsxs)(`div`, {
          style: { display: `flex`, alignItems: `center`, gap: 8 },
          children: [
            (0, x.jsx)(`span`, { style: { width: 6, height: 6, borderRadius: `50%`, background: R } }),
            (0, x.jsx)(`span`, { style: { color: V, fontWeight: 800 }, children: number }),
            (0, x.jsx)(`span`, { children: `//` }),
            (0, x.jsx)(`span`, { children: tag })
          ]
        }),
        (0, x.jsx)(`div`, {
          style: { color: R, fontWeight: 600, letterSpacing: `0.1em` },
          children: `AIR-GAP PROTOCOL ACTIVE`
        })
      ]
    })
  });
}

// 1. Living Hero Phone Terminal - Award-Winning Cinematic Defense Cockpit
export function HeroPhoneTerminal() {
  let [activePhase, setActivePhase] = (0, o.useState)(0);
  let [tick, setTick] = (0, o.useState)(0);
  let [isInteracting, setIsInteracting] = (0, o.useState)(false);
  let animRef = (0, o.useRef)(null);

  // Smooth continuous animation ticker for live HUD
  (0, o.useEffect)(() => {
    let step = () => {
      setTick((t) => (t + 1) % 7200);
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => animRef.current && cancelAnimationFrame(animRef.current);
  }, []);

  // Auto-advance stages every 4.2s unless operator is actively interacting
  (0, o.useEffect)(() => {
    if (isInteracting) return;
    let timer = setInterval(() => {
      setActivePhase((p) => (p + 1) % 5);
    }, 4200);
    return () => clearInterval(timer);
  }, [isInteracting]);

  const phases = [
    { title: "01 // DISPATCH INTERCEPT", tag: "VOICE CLONE", badge: "8.9 URGENCY", color: "#f59e0b" },
    { title: "02 // NPU STRUCTURING", tag: "SLM 3B", badge: "18ms INFERENCE", color: "#38bdf8" },
    { title: "03 // SCADA CYBER GATE", tag: "MODBUS TCP", badge: "CRC VALID (PASS)", color: "#10b981" },
    { title: "04 // EPANET TWIN", tag: "HYDRAULIC SHOCK", badge: "11.4 BAR (REJECT)", color: "#ef4444" },
    { title: "05 // BIOMETRIC COMMIT", tag: "ENCLAVE TEE", badge: "7.4 BAR (SAFE)", color: "#10b981" }
  ];

  return (0, x.jsxs)("div", {
    onMouseEnter: () => setIsInteracting(true),
    onMouseLeave: () => setIsInteracting(false),
    style: {
      width: "100%",
      height: "100%",
      background: "linear-gradient(180deg, #0b0f17 0%, #05070a 100%)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "28px 12px 14px",
      boxSizing: "border-box",
      fontFamily: L,
      overflow: "hidden",
      position: "relative"
    },
    children: [
      // Ambient scanline overlay
      (0, x.jsx)("div", {
        style: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.22) 50%)",
          backgroundSize: "100% 3px",
          pointerEvents: "none",
          zIndex: 4,
          opacity: 0.3
        }
      }),

      // Ambient Laser sweep line
      (0, x.jsx)("div", {
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg, transparent, rgba(217,83,35,0.65), transparent)",
          top: `${(tick % 240) / 240 * 100}%`,
          pointerEvents: "none",
          zIndex: 5,
          opacity: 0.6
        }
      }),

      // 1. Top Enclave Header + 5-Stage Progress Strip
      (0, x.jsxs)("div", {
        style: { position: "relative", zIndex: 6 },
        children: [
          (0, x.jsxs)("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 8,
              color: "#98a2b3",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              paddingBottom: 6
            },
            children: [
              (0, x.jsxs)("span", {
                style: { display: "flex", alignItems: "center", gap: 5, fontWeight: 800, letterSpacing: "0.05em", color: "#e2e8f0" },
                children: [
                  (0, x.jsx)("span", {
                    style: {
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: activePhase === 3 ? "#ef4444" : "#10b981",
                      boxShadow: `0 0 8px ${activePhase === 3 ? "#ef4444" : "#10b981"}`
                    }
                  }),
                  "iQOO 13 // 45 TOPS NPU"
                ]
              }),
              (0, x.jsxs)("span", {
                style: {
                  color: phases[activePhase].color,
                  fontWeight: 800,
                  fontFamily: "monospace",
                  background: "rgba(255,255,255,0.07)",
                  padding: "2px 6px",
                  borderRadius: 4,
                  fontSize: 7.5
                },
                children: ["STAGE 0", activePhase + 1, "/05"]
              })
            ]
          }),

          // 5 Interactive Stage Selector Pills
          (0, x.jsx)("div", {
            style: { display: "flex", gap: 4, margin: "7px 0 0" },
            children: [0, 1, 2, 3, 4].map((idx) => (
              (0, x.jsx)("div", {
                key: idx,
                onClick: () => { setActivePhase(idx); setIsInteracting(true); },
                style: {
                  flex: 1,
                  height: 3.5,
                  borderRadius: 2,
                  background: activePhase === idx ? phases[idx].color : "rgba(255,255,255,0.14)",
                  boxShadow: activePhase === idx ? `0 0 8px ${phases[idx].color}` : "none",
                  cursor: "pointer",
                  transition: "all 0.25s ease"
                }
              })
            ))
          })
        ]
      }),

      // 2. Center Always-On Live EPANET 2.2 + NPU Oscilloscope Viewport (Eliminates Empty Space!)
      (0, x.jsxs)("div", {
        style: {
          background: "rgba(15, 23, 42, 0.65)",
          border: `1px solid ${activePhase === 3 ? "rgba(239,68,68,0.4)" : "rgba(255,255,255,0.09)"}`,
          borderRadius: 12,
          padding: "9px 10px",
          position: "relative",
          zIndex: 6,
          display: "flex",
          flexDirection: "column",
          gap: 7,
          boxShadow: "inset 0 0 20px rgba(0,0,0,0.6)"
        },
        children: [
          // Viewport Header
          (0, x.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "monospace", fontSize: 7.5 },
            children: [
              (0, x.jsx)("span", { style: { color: "#94a3b8", fontWeight: 700 }, children: "EPANET 2.2 // LIVE TRANSIENT" }),
              (0, x.jsx)("span", {
                style: {
                  color: activePhase === 4 ? "#10b981" : "#ef4444",
                  background: activePhase === 4 ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.18)",
                  padding: "1.5px 5px",
                  borderRadius: 4,
                  fontWeight: 800
                },
                children: activePhase === 4 ? "7.4 BAR (SAFE)" : "11.4 BAR SURGE"
              })
            ]
          }),

          // Live SVG Hydrodynamic Waveform Graph
          (0, x.jsxs)("div", {
            style: {
              height: 82,
              background: "rgba(0,0,0,0.55)",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.06)",
              position: "relative",
              overflow: "hidden",
              padding: "4px"
            },
            children: [
              (0, x.jsxs)("svg", {
                viewBox: "0 0 200 70",
                style: { width: "100%", height: "100%", display: "block" },
                children: [
                  // Subtle grid lines
                  (0, x.jsx)("line", { x1: 0, y1: 18, x2: 200, y2: 18, stroke: "rgba(239,68,68,0.55)", strokeDasharray: "3 3", strokeWidth: 1 }),
                  (0, x.jsx)("text", { x: 196, y: 14, textAnchor: "end", fill: "#ef4444", fontSize: 6.5, fontFamily: "monospace", fontWeight: 700, children: "9.2 BAR CEILING" }),
                  (0, x.jsx)("line", { x1: 0, y1: 45, x2: 200, y2: 45, stroke: "rgba(255,255,255,0.07)", strokeWidth: 0.8 }),

                  // Unchecked Surge Trajectory (Red)
                  (0, x.jsx)("path", {
                    d: `M 0 56 Q 45 54 85 ${activePhase === 4 ? 36 : 7 + Math.sin(tick * 0.12) * 3} T 155 ${activePhase === 4 ? 38 : 22} T 200 ${activePhase === 4 ? 36 : 26}`,
                    fill: "none",
                    stroke: activePhase === 4 ? "rgba(239,68,68,0.3)" : "#ef4444",
                    strokeWidth: activePhase === 4 ? 1.2 : 2.2,
                    strokeDasharray: activePhase === 4 ? "2 2" : "none"
                  }),

                  // Safe Replanned Trajectory (Emerald)
                  (0, x.jsx)("path", {
                    d: `M 0 56 Q 55 52 105 ${36 + Math.cos(tick * 0.1) * 1.5} T 200 35`,
                    fill: "none",
                    stroke: "#10b981",
                    strokeWidth: activePhase === 4 ? 2.4 : 1.5,
                    opacity: activePhase === 4 ? 1 : 0.65
                  }),

                  // Pulsing Telemetry Cursor Node
                  (0, x.jsx)("circle", {
                    cx: 85,
                    cy: activePhase === 4 ? 36 : 9,
                    r: 3.5,
                    fill: activePhase === 4 ? "#10b981" : "#ef4444"
                  })
                ]
              })
            ]
          }),

          // 3 Hardware Mini-Gauges Row
          (0, x.jsx)("div", {
            style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5 },
            children: [
              { label: "BOOSTER 04", val: activePhase === 4 ? "680 RPM" : "850 RPM", col: activePhase === 4 ? "#10b981" : "#f59e0b" },
              { label: "VALVE RV-02", val: activePhase === 4 ? "40% OPEN" : "0% SHUT", col: activePhase === 4 ? "#10b981" : "#ef4444" },
              { label: "NPU LATENCY", val: "18.4 ms", col: "#38bdf8" }
            ].map((g, i) => (
              (0, x.jsxs)("div", {
                key: i,
                style: {
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 6,
                  padding: "4px 5px",
                  textAlign: "center"
                },
                children: [
                  (0, x.jsx)("div", { style: { fontSize: 6.5, color: "#64748b", fontFamily: "monospace" }, children: g.label }),
                  (0, x.jsx)("div", { style: { fontSize: 8, fontWeight: 800, color: g.col, fontFamily: "monospace", marginTop: 1 }, children: g.val })
                ]
              })
            ))
          })
        ]
      }),

      // 3. Active Stage Dossier Card
      (0, x.jsxs)("div", {
        style: {
          background: "rgba(255,255,255,0.03)",
          borderRadius: 12,
          padding: "10px 10px",
          border: `1px solid ${phases[activePhase].color}35`,
          position: "relative",
          zIndex: 6,
          display: "flex",
          flexDirection: "column",
          gap: 6
        },
        children: [
          // Stage Title Bar
          (0, x.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between", alignItems: "center" },
            children: [
              (0, x.jsx)("span", {
                style: { fontSize: 8, fontWeight: 800, color: phases[activePhase].color, letterSpacing: "0.05em", fontFamily: "monospace" },
                children: phases[activePhase].title
              }),
              (0, x.jsx)("span", {
                style: {
                  fontSize: 7,
                  background: `${phases[activePhase].color}20`,
                  color: phases[activePhase].color,
                  border: `1px solid ${phases[activePhase].color}40`,
                  padding: "1.5px 5px",
                  borderRadius: 4,
                  fontWeight: 800,
                  fontFamily: "monospace"
                },
                children: phases[activePhase].badge
              })
            ]
          }),

          // STAGE 0: Live Voiceprint Forensic Intercept
          activePhase === 0 && (0, x.jsxs)("div", {
            style: { display: "flex", flexDirection: "column", gap: 5 },
            children: [
              (0, x.jsxs)("div", {
                style: { fontSize: 9, fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", gap: 5 },
                children: [
                  (0, x.jsx)("span", { style: { width: 5, height: 5, borderRadius: "50%", background: "#f59e0b" } }),
                  "Voice Clone Intercepted"
                ]
              }),
              (0, x.jsx)("div", {
                style: { fontSize: 7.5, color: "#cbd5e1", lineHeight: 1.35, background: "rgba(0,0,0,0.45)", padding: "5px 7px", borderRadius: 6, borderLeft: "2px solid #f59e0b" },
                children: '"Urgent Miller! Ramp Booster Pump 4 to 850 RPM immediately!"'
              }),
              (0, x.jsxs)("div", {
                style: { fontSize: 7.5, color: "#f87171", fontWeight: 700, display: "flex", justifyContent: "space-between", fontFamily: "monospace" },
                children: [
                  (0, x.jsx)("span", { children: "SPECTRAL MATCH: 71%" }),
                  (0, x.jsx)("span", { children: "ROSTER: OFFLINE" })
                ]
              })
            ]
          }),

          // STAGE 1: Snapdragon 8 Elite NPU Decompilation
          activePhase === 1 && (0, x.jsxs)("div", {
            style: { display: "flex", flexDirection: "column", gap: 4 },
            children: [
              (0, x.jsxs)("div", {
                style: { fontSize: 9, fontWeight: 700, color: "#38bdf8", display: "flex", justifyContent: "space-between" },
                children: [
                  (0, x.jsx)("span", { children: "Snapdragon NPU 45 TOPS" }),
                  (0, x.jsx)("span", { style: { color: "#10b981", fontFamily: "monospace" }, children: "18.4ms" })
                ]
              }),
              (0, x.jsxs)("div", {
                style: {
                  background: "#000",
                  padding: "6px 7px",
                  borderRadius: 6,
                  fontFamily: "monospace",
                  fontSize: 7.5,
                  color: "#38bdf8",
                  border: "1px solid rgba(56,189,248,0.25)",
                  lineHeight: 1.45
                },
                children: [
                  (0, x.jsxs)("div", { style: { color: "#94a3b8" }, children: [">> TARGET: ", (0, x.jsx)("span", { style: { color: "#fff" }, children: "STATION_04_PLC" })] }),
                  (0, x.jsxs)("div", { style: { color: "#fbbf24" }, children: [">> REG: ", (0, x.jsx)("span", { style: { color: "#34d399" }, children: "HOLDING_40012 := 850" })] }),
                  (0, x.jsx)("div", { style: { color: "#10b981", marginTop: 2, fontWeight: 700 }, children: "✓ PARSED ON-DEVICE (AIR-GAPPED)" })
                ]
              })
            ]
          }),

          // STAGE 2: Deterministic Cyber Gate
          activePhase === 2 && (0, x.jsxs)("div", {
            style: { display: "flex", flexDirection: "column", gap: 4 },
            children: [
              (0, x.jsx)("div", { style: { fontSize: 9, fontWeight: 700, color: "#fff" }, children: "IT/OT Firewall Paradox" }),
              (0, x.jsxs)("div", {
                style: { background: "rgba(16,185,129,0.08)", padding: "6px 7px", borderRadius: 6, border: "1px solid rgba(16,185,129,0.25)", fontSize: 7.5, lineHeight: 1.45 },
                children: [
                  (0, x.jsx)("div", { style: { color: "#34d399", fontWeight: 700 }, children: "✓ Modbus CRC-16 Checksum: VALID (0x9B4E)" }),
                  (0, x.jsx)("div", { style: { color: "#34d399" }, children: "✓ Authorized Operator Credentials" }),
                  (0, x.jsx)("div", { style: { color: "#f87171", fontWeight: 800, marginTop: 2 }, children: "⚠️ PHYSICAL SAFETY: UNCHECKED (BLIND)" })
                ]
              })
            ]
          }),

          // STAGE 3: EPANET Hydrodynamic Surge Rejection
          activePhase === 3 && (0, x.jsxs)("div", {
            style: { display: "flex", flexDirection: "column", gap: 4 },
            children: [
              (0, x.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-between", alignItems: "center" },
                children: [
                  (0, x.jsx)("div", { style: { fontSize: 9, fontWeight: 800, color: "#ef4444" }, children: "11.4 Bar Catastrophe!" }),
                  (0, x.jsx)("div", { style: { fontSize: 7, color: "#ef4444", background: "rgba(239,68,68,0.2)", padding: "1px 5px", borderRadius: 3, fontWeight: 800 }, children: "BLOWOUT" })
                ]
              }),
              (0, x.jsxs)("div", {
                style: { background: "rgba(239,68,68,0.15)", padding: "6px 7px", borderRadius: 6, border: "1px solid rgba(239,68,68,0.35)", fontSize: 7.5, lineHeight: 1.45 },
                children: [
                  (0, x.jsx)("div", { style: { color: "#f87171", fontWeight: 800 }, children: "SIMULATED SURGE: 11.4 BAR (CEILING 9.2)" }),
                  (0, x.jsx)("div", { style: { color: "#cbd5e1" }, children: "Relief Valve 02 closed -> Joukowsky shockwave" }),
                  (0, x.jsx)("div", { style: { color: "#ef4444", fontWeight: 800, marginTop: 2 }, children: "⛔ TWIN HARD REJECT: VALVE BLOWN" })
                ]
              })
            ]
          }),

          // STAGE 4: Autonomous Replan & Biometric Enclave
          activePhase === 4 && (0, x.jsxs)("div", {
            style: { display: "flex", flexDirection: "column", gap: 4 },
            children: [
              (0, x.jsx)("div", { style: { fontSize: 9, fontWeight: 800, color: "#10b981" }, children: "Autonomous Replan Synthesized" }),
              (0, x.jsxs)("div", {
                style: { background: "rgba(16,185,129,0.12)", padding: "6px 7px", borderRadius: 6, border: "1px solid rgba(16,185,129,0.3)", fontSize: 7.5, lineHeight: 1.45 },
                children: [
                  (0, x.jsx)("div", { style: { color: "#34d399", fontWeight: 800 }, children: "✓ REPLANNED PEAK: 7.4 BAR (SAFE)" }),
                  (0, x.jsx)("div", { style: { color: "#cbd5e1" }, children: "Pre-open RV-02 to 40%, stepped 60s ramp." }),
                  (0, x.jsx)("div", { style: { color: "#38bdf8", fontWeight: 700, marginTop: 2 }, children: "🛡️ TEE KEY 0x8F92 CRYPTO SIGNED" })
                ]
              })
            ]
          })
        ]
      }),

      // 4. Bottom Action Stepper + Android Navigation Indicator
      (0, x.jsxs)("div", {
        style: { position: "relative", zIndex: 6, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 },
        children: [
          (0, x.jsx)("button", {
            onClick: () => {
              setActivePhase((p) => (p + 1) % 5);
              setIsInteracting(true);
            },
            style: {
              background: phases[activePhase].color,
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "7px 10px",
              fontSize: 8,
              fontWeight: 800,
              cursor: "pointer",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              fontFamily: I,
              letterSpacing: "0.05em",
              boxShadow: `0 4px 14px ${phases[activePhase].color}50`,
              transition: "all 0.2s ease"
            },
            children: [
              activePhase === 0 && "STEP 02: NPU INFERENCE →",
              activePhase === 1 && "STEP 03: CYBER CHECK →",
              activePhase === 2 && "STEP 04: RUN EPANET TWIN →",
              activePhase === 3 && "STEP 05: AUTO-REPLAN →",
              activePhase === 4 && "✓ ACTION SIGNED & COMMITTED"
            ]
          }),
          // Native OriginOS 5 Gesture Pill
          (0, x.jsx)("div", {
            style: {
              width: 76,
              height: 3.5,
              borderRadius: 4,
              background: "rgba(255,255,255,0.28)"
            }
          })
        ]
      })
    ]
  });
}


// 2. The 3D Popping-Up Cards Component (Warm Architectural Alabaster & Terracotta Tactile Dossiers)
export function Card3DVisual({ index, testimonial, isHovered }) {
  let [tick, setTick] = (0, o.useState)(0);
  (0, o.useEffect)(() => {
    let anim;
    let step = () => {
      setTick((t) => (t + 1) % 3600);
      anim = requestAnimationFrame(step);
    };
    anim = requestAnimationFrame(step);
    return () => cancelAnimationFrame(anim);
  }, []);

  const cards = [
    {
      tier: "TIER 01 // HUMAN SECURITY",
      flag: "8.9 URGENCY FLAG",
      flagColor: "#d95323",
      flagBg: "rgba(217, 83, 35, 0.1)",
      sub: "CELLULAR INGESTION // VOICE BIOMETRICS",
      title: "SPOOFED AUTHORITY DISPATCH",
      desc: "Deepfake voice clone detected with 71% spectral similarity. Duty roster indicates Supervisor Reynolds is offline on annual leave.",
      status: "STATUS: QUARANTINED",
      statusColor: "#d95323",
      pills: [
        { label: "ANOMALY", value: "8.9 Urgency" },
        { label: "LATENCY", value: "18ms NPU" },
        { label: "STATUS", value: "Quarantined" }
      ],
      type: "acoustic"
    },
    {
      tier: "TIER 03 // CYBER GATE",
      flag: "CRC VALID // PASS",
      flagColor: "#181d27",
      flagBg: "rgba(24, 29, 39, 0.08)",
      sub: "DETERMINISTIC SCADA GATE // MODBUS TCP",
      title: "THE KINETIC PARADOX",
      desc: "Standard firewall permits command. Modbus CRC 0x9B4E matches, register 40012 accessible. Physical consequences remain unchecked.",
      status: "CYBER RESULT: APPROVED (BLIND)",
      statusColor: "#181d27",
      pills: [
        { label: "PROTOCOL", value: "Modbus TCP" },
        { label: "REGISTER", value: "HR_40012" },
        { label: "FIREWALL", value: "Blind Pass" }
      ],
      type: "modbus"
    },
    {
      tier: "TIER 04 // PHYSICAL TWIN",
      flag: "11.4 BAR -> 7.4 BAR",
      flagColor: "#15803d",
      flagBg: "rgba(21, 128, 61, 0.1)",
      sub: "EPANET 2.2 / WNTR KINETIC REACTOR",
      title: "AUTONOMOUS SURGE EQUILIBRIUM",
      desc: "Forward kinetic simulation intercepts 11.4 bar shockwave at Node 14 and synthesizes a 60s staged PRV-02 valve ramp capped at 7.4 bar.",
      status: "PHYSICAL SAFETY: VERIFIED SAFE",
      statusColor: "#15803d",
      pills: [
        { label: "RAW SURGE", value: "11.4 Bar" },
        { label: "REPLANNED", value: "7.4 Bar" },
        { label: "VERDICT", value: "Zero Surge" }
      ],
      type: "hydro"
    }
  ];

  const c = cards[index % cards.length];

  return (0, x.jsxs)("div", {
    style: {
      width: "100%",
      height: "100%",
      background: "linear-gradient(155deg, #ffffff 0%, #f7f4ed 55%, #eee8dc 100%)",
      color: "#181d27",
      padding: 18,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxSizing: "border-box",
      borderRadius: 18,
      border: `1.5px solid ${isHovered ? "#d95323" : "rgba(24, 29, 39, 0.1)"}`,
      fontFamily: L,
      position: "relative",
      overflow: "hidden",
      boxShadow: isHovered
        ? "0 24px 54px rgba(24, 29, 39, 0.14), 0 0 0 3px rgba(217, 83, 35, 0.12), inset 0 1px 0 #ffffff"
        : "0 16px 40px rgba(24, 29, 39, 0.08), inset 0 1px 0 #ffffff",
      transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
    },
    children: [
      // Subtle architectural dot matrix
      (0, x.jsx)("div", {
        style: {
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(24, 29, 39, 0.06) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          pointerEvents: "none"
        }
      }),

      // Top row
      (0, x.jsxs)("div", {
        style: { position: "relative", zIndex: 2 },
        children: [
          (0, x.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
            children: [
              (0, x.jsx)("span", {
                style: {
                  fontFamily: "monospace",
                  fontSize: 9,
                  fontWeight: 800,
                  color: "#181d27",
                  background: "#f3efe6",
                  padding: "3px 8px",
                  borderRadius: 100,
                  border: "1px solid rgba(24,29,39,0.1)"
                },
                children: c.tier
              }),
              (0, x.jsx)("span", {
                style: {
                  fontFamily: "monospace",
                  fontSize: 8.5,
                  fontWeight: 800,
                  color: c.flagColor,
                  background: c.flagBg,
                  padding: "3px 8px",
                  borderRadius: 100,
                  border: `1px solid ${c.flagColor}30`
                },
                children: c.flag
              })
            ]
          }),

          // Sub & Title
          (0, x.jsx)("div", { style: { fontSize: 9, fontFamily: "monospace", fontWeight: 800, color: "#d95323", letterSpacing: "0.08em", marginBottom: 3 }, children: c.sub }),
          (0, x.jsx)("h3", {
            style: { fontFamily: F, fontSize: 17.5, fontWeight: 700, color: "#181d27", margin: "0 0 5px", lineHeight: 1.15, letterSpacing: "-0.02em" },
            children: c.title
          }),
          (0, x.jsx)("p", {
            style: { fontSize: 11, color: "#57534e", lineHeight: 1.45, margin: 0 },
            children: c.desc
          })
        ]
      }),

      // Tactile Architectural Instrument Well in Center
      (0, x.jsxs)("div", {
        style: {
          height: 94,
          background: "linear-gradient(180deg, #efeae0 0%, #e6dfd1 100%)",
          borderRadius: 12,
          border: "1px solid rgba(24,29,39,0.09)",
          boxShadow: "inset 0 2px 6px rgba(24,29,39,0.05)",
          margin: "8px 0",
          padding: "8px 10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          zIndex: 2
        },
        children: [
          // Visual 1: Warm Architectural Voiceprint Harmonics
          c.type === "acoustic" && (0, x.jsxs)("div", {
            style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" },
            children: [
              (0, x.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-between", fontSize: 8, fontFamily: "monospace", color: "#57534e", fontWeight: 700 },
                children: [
                  (0, x.jsx)("span", { children: "NPU VOICEPRINT HARMONICS" }),
                  (0, x.jsx)("span", { style: { color: "#d95323", fontWeight: 800 }, children: "JITTER: 98.4%" })
                ]
              }),
              (0, x.jsx)("div", {
                style: { display: "flex", alignItems: "center", gap: 2.5, height: 42 },
                children: Array.from({ length: 24 }).map((_, i) => {
                  let barH = 8 + Math.abs(Math.sin(tick * 0.12 + i * 0.45)) * 28;
                  let isHighlight = i >= 8 && i <= 15;
                  return (0, x.jsx)("div", {
                    key: i,
                    style: {
                      flex: 1,
                      height: `${barH}px`,
                      background: isHighlight ? "#d95323" : "#181d27",
                      opacity: isHighlight ? 0.95 : 0.35,
                      borderRadius: 2
                    }
                  });
                })
              }),
              (0, x.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-between", fontSize: 7.5, fontFamily: "monospace", color: "#57534e" },
                children: [
                  (0, x.jsx)("span", { children: "WHISPER-V3 INT4" }),
                  (0, x.jsx)("span", { style: { color: "#181d27", fontWeight: 800 }, children: "DEEPFAKE QUARANTINED" })
                ]
              })
            ]
          }),

          // Visual 2: Modbus Formal Register Gate
          c.type === "modbus" && (0, x.jsxs)("div", {
            style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" },
            children: [
              (0, x.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-between", fontSize: 8, fontFamily: "monospace", color: "#57534e", fontWeight: 700 },
                children: [
                  (0, x.jsx)("span", { children: "REGISTER DECOMPILATION" }),
                  (0, x.jsx)("span", { style: { color: "#d95323", fontWeight: 800 }, children: "HR_40012 := 850" })
                ]
              }),
              (0, x.jsx)("div", {
                style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 5 },
                children: [
                  { k: "FUNC", v: "0x06" },
                  { k: "ADDR", v: "%QW104" },
                  { k: "CRC16", v: "0x9B4E" },
                  { k: "Z3 SMT", v: "HOLD" }
                ].map((cell, idx) => (
                  (0, x.jsxs)("div", {
                    key: idx,
                    style: {
                      background: idx === 3 ? "#d95323" : "#ffffff",
                      color: idx === 3 ? "#ffffff" : "#181d27",
                      borderRadius: 6,
                      padding: "5px 4px",
                      textAlign: "center",
                      border: "1px solid rgba(24,29,39,0.08)"
                    },
                    children: [
                      (0, x.jsx)("div", { style: { fontSize: 6.5, fontFamily: "monospace", opacity: 0.7 }, children: cell.k }),
                      (0, x.jsx)("div", { style: { fontSize: 8.5, fontFamily: "monospace", fontWeight: 800, marginTop: 1 }, children: cell.v })
                    ]
                  })
                ))
              }),
              (0, x.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-between", fontSize: 7.5, fontFamily: "monospace", color: "#57534e" },
                children: [
                  (0, x.jsx)("span", { children: "ACL SYNTAX: PERMITTED" }),
                  (0, x.jsx)("span", { style: { color: "#d95323", fontWeight: 800 }, children: "TWIN CHECK REQUIRED →" })
                ]
              })
            ]
          }),

          // Visual 3 (THE 3RD POPPING-UP CARD): Interactive Kinetic Turbine & Flange Equilibrium Reactor
          c.type === "hydro" && (0, x.jsxs)("div", {
            style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" },
            children: [
              (0, x.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-between", fontSize: 8, fontFamily: "monospace", color: "#181d27", fontWeight: 800 },
                children: [
                  (0, x.jsx)("span", { children: "TURBINE HARMONIC DAMPENER" }),
                  (0, x.jsx)("span", { style: { background: "#15803d", color: "#fff", padding: "1px 6px", borderRadius: 100, fontSize: 7.5 }, children: "7.4 BAR LOCKED" })
                ]
              }),
              // Interactive Dual-Dial & Harmonic Pressure Bars
              (0, x.jsxs)("div", {
                style: { display: "flex", alignItems: "center", gap: 10, height: 46 },
                children: [
                  // Rotating Precision Impeller SVG
                  (0, x.jsxs)("svg", {
                    viewBox: "0 0 48 48",
                    style: { width: 42, height: 42, flexShrink: 0 },
                    children: [
                      (0, x.jsx)("circle", { cx: 24, cy: 24, r: 21, fill: "#ffffff", stroke: "rgba(24,29,39,0.15)", strokeWidth: 1.5 }),
                      (0, x.jsx)("circle", { cx: 24, cy: 24, r: 16, fill: "none", stroke: "#d95323", strokeWidth: 1.5, strokeDasharray: "4 3", transform: `rotate(${(tick * 2) % 360} 24 24)` }),
                      (0, x.jsxs)("g", {
                        transform: `rotate(${(-tick * 3) % 360} 24 24)`,
                        children: [
                          (0, x.jsx)("line", { x1: 24, y1: 10, x2: 24, y2: 38, stroke: "#181d27", strokeWidth: 2 }),
                          (0, x.jsx)("line", { x1: 10, y1: 24, x2: 38, y2: 24, stroke: "#181d27", strokeWidth: 2 })
                        ]
                      }),
                      (0, x.jsx)("circle", { cx: 24, cy: 24, r: 4.5, fill: "#15803d" })
                    ]
                  }),
                  // Live Stepped Ramp Progression Bars
                  (0, x.jsxs)("div", {
                    style: { flex: 1, display: "flex", flexDirection: "column", gap: 4 },
                    children: [
                      (0, x.jsxs)("div", {
                        style: { display: "flex", alignItems: "center", gap: 6 },
                        children: [
                          (0, x.jsx)("span", { style: { fontSize: 7, fontFamily: "monospace", width: 48, color: "#57534e", fontWeight: 700 }, children: "RAW 11.4B" }),
                          (0, x.jsx)("div", {
                            style: { flex: 1, height: 7, background: "rgba(24,29,39,0.08)", borderRadius: 4, overflow: "hidden" },
                            children: (0, x.jsx)("div", { style: { width: "92%", height: "100%", background: "#d95323", borderRadius: 4 } })
                          })
                        ]
                      }),
                      (0, x.jsxs)("div", {
                        style: { display: "flex", alignItems: "center", gap: 6 },
                        children: [
                          (0, x.jsx)("span", { style: { fontSize: 7, fontFamily: "monospace", width: 48, color: "#15803d", fontWeight: 800 }, children: "SAFE 7.4B" }),
                          (0, x.jsx)("div", {
                            style: { flex: 1, height: 7, background: "rgba(24,29,39,0.08)", borderRadius: 4, overflow: "hidden" },
                            children: (0, x.jsx)("div", {
                              style: {
                                width: `${58 + Math.sin(tick * 0.08) * 4}%`,
                                height: "100%",
                                background: "#15803d",
                                borderRadius: 4
                              }
                            })
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              // 8-Segment Runge-Kutta Pressure Harmonic Strip
              (0, x.jsx)("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(8, 1fr)",
                  gap: 3,
                  padding: "4px 6px",
                  background: "#ffffff",
                  borderRadius: 6,
                  border: "1px solid rgba(24,29,39,0.08)"
                },
                children: [0, 1, 2, 3, 4, 5, 6, 7].map(seg => {
                  const active = seg <= 5;
                  return (0, x.jsxs)("div", {
                    key: seg,
                    style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 2 },
                    children: [
                      (0, x.jsx)("div", {
                        style: {
                          width: "100%",
                          height: 4,
                          borderRadius: 2,
                          background: active ? (seg >= 4 ? "#15803d" : "#181d27") : "rgba(24,29,39,0.12)"
                        }
                      }),
                      (0, x.jsx)("span", { style: { fontSize: 6, fontFamily: "monospace", color: "#57534e", fontWeight: 700 }, children: `T+${(seg + 1) * 7}s` })
                    ]
                  });
                })
              }),
              (0, x.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-between", fontSize: 7.5, fontFamily: "monospace", color: "#57534e" },
                children: [
                  (0, x.jsx)("span", { children: "PRV-02 OPENED TO 45%" }),
                  (0, x.jsx)("span", { style: { color: "#15803d", fontWeight: 800 }, children: "FLANGE INTEGRITY 100%" })
                ]
              })
            ]
          })
        ]
      }),

      // Bottom Row: Telemetry Pills & Verdict Strip
      (0, x.jsxs)("div", {
        style: { position: "relative", zIndex: 2 },
        children: [
          (0, x.jsx)("div", {
            style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginBottom: 8 },
            children: c.pills.map((pill, idx) => (
              (0, x.jsxs)("div", {
                key: idx,
                style: {
                  background: "#ffffff",
                  border: "1px solid rgba(24,29,39,0.08)",
                  borderRadius: 8,
                  padding: "4px 6px",
                  textAlign: "center",
                  boxShadow: "0 2px 5px rgba(24,29,39,0.03)"
                },
                children: [
                  (0, x.jsx)("div", { style: { fontSize: 7, color: "#78716c", fontFamily: "monospace", textTransform: "uppercase" }, children: pill.label }),
                  (0, x.jsx)("div", { style: { fontSize: 8.5, fontWeight: 800, color: "#181d27", fontFamily: "monospace", marginTop: 1 }, children: pill.value })
                ]
              })
            ))
          }),
          (0, x.jsxs)("div", {
            style: {
              background: "#181d27",
              borderRadius: 10,
              padding: "7px 12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [
              (0, x.jsx)("span", { style: { fontSize: 8, fontWeight: 800, color: "#faf8f5", fontFamily: "monospace", letterSpacing: "0.04em" }, children: c.status }),
              (0, x.jsx)("span", { style: { fontSize: 8, color: "#d95323", fontWeight: 800, fontFamily: "monospace" }, children: "VERIFIED →" })
            ]
          })
        ]
      })
    ]
  });
}


// 3. Digital Twin Hydrodynamic Sandbox (Zero-Glitch, Fluid Hardware-Accelerated)
export function DigitalTwinSection() {
  let [rpm, setRpm] = (0, o.useState)(980);
  let [valve, setValve] = (0, o.useState)(12);
  let [scenario, setScenario] = (0, o.useState)('custom');
  let animRef = (0, o.useRef)(null);

  // Smooth scenario transition animation with proper frame cancellation to eliminate glitches
  const animateTo = (targetRpm, targetValve, mode) => {
    setScenario(mode);
    if (animRef.current) cancelAnimationFrame(animRef.current);
    
    let startRpm = rpm;
    let startValve = valve;
    let startTime = performance.now();
    let duration = 550;

    let step = (now) => {
      let progress = Math.min(1, (now - startTime) / duration);
      let ease = 1 - Math.pow(1 - progress, 3);
      setRpm(Math.round(startRpm + (targetRpm - startRpm) * ease));
      setValve(Math.round(startValve + (targetValve - startValve) * ease));
      if (progress < 1) {
        animRef.current = requestAnimationFrame(step);
      }
    };
    animRef.current = requestAnimationFrame(step);
  };

  // Real-time Joukowsky water hammer calculations
  let calculatedPressure = Number(((rpm / 1200) * 8.6 + (1 - valve / 100) * 3.2).toFixed(1));
  let isBreach = calculatedPressure > 8.0;
  let flowVelocity = (rpm * 0.0031).toFixed(2);
  let flowRate = Math.round(rpm * 0.42 * (valve / 100));
  let stressPercent = Math.min(150, Math.round((calculatedPressure / 8.0) * 100));
  let isCavitation = valve < 15 && rpm > 750;

  return (0, x.jsxs)("section", {
    id: "digital-twin",
    "data-section": "digital-twin",
    style: { background: "#ede7db", paddingBottom: 80 },
    children: [
      (0, x.jsx)(Bridge, { number: "05", tag: "HYDRODYNAMIC SIMULATION // EPANET 2.2 / WNTR" }),
      (0, x.jsxs)("div", {
        style: { maxWidth: 1280, margin: "0 auto", padding: "0 32px" },
        children: [
          (0, x.jsxs)("div", {
            style: { textAlign: "center", margin: "24px 0 36px" },
            children: [
              (0, x.jsx)("h2", {
                style: {
                  fontFamily: F,
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 700,
                  color: V,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  margin: "0 0 16px"
                },
                children: "Simulate Before You Actuate."
              }),
              (0, x.jsx)("p", {
                style: {
                  fontFamily: L,
                  fontSize: 18,
                  color: "#535862",
                  maxWidth: 720,
                  margin: "0 auto",
                  lineHeight: 1.6
                },
                children: "Every high-impact instruction is simulated in an on-device EPANET 2.2 / WNTR hydrodynamic twin before physical coil actuation. If Joukowsky water hammer pressure exceeds flange burst ceiling, single-coil write is deterministically rejected."
              })
            ]
          }),

          // 3 Scenario Quick-Select Tabs
          (0, x.jsx)("div", {
            style: { display: "flex", justifyContent: "center", gap: 10, marginBottom: 24, flexWrap: "wrap" },
            children: [
              { id: 'blind', label: '1. BLIND ACTION (11.4 BAR BURST)', targetRpm: 1050, targetValve: 4, color: '#ef4444' },
              { id: 'cyber', label: '2. FIREWALL VALIDATED (UNCHECKED KINETIC)', targetRpm: 920, targetValve: 8, color: '#f59e0b' },
              { id: 'replan', label: '3. SENTINEL-K REPLAN (7.4 BAR SAFE)', targetRpm: 680, targetValve: 45, color: '#10b981' }
            ].map((sc) => (
              (0, x.jsx)("button", {
                key: sc.id,
                onClick: () => animateTo(sc.targetRpm, sc.targetValve, sc.id),
                style: {
                  fontFamily: I,
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "11px 20px",
                  borderRadius: 100,
                  border: scenario === sc.id ? `1px solid ${sc.color}` : "1px solid rgba(0,0,0,0.12)",
                  background: scenario === sc.id ? sc.color : "#fff",
                  color: scenario === sc.id ? "#fff" : "#334155",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: scenario === sc.id ? `0 6px 18px ${sc.color}40` : "0 2px 6px rgba(0,0,0,0.04)"
                },
                children: sc.label
              })
            ))
          }),

          // Main Simulator Cockpit — Warm Architectural Alabaster & Sand Glass
          (0, x.jsxs)("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 28,
              background: "linear-gradient(155deg, #ffffff 0%, #f7f4ed 55%, #eee8dc 100%)",
              borderRadius: 24,
              padding: "clamp(24px, 4vw, 44px)",
              color: "#181d27",
              boxShadow: "0 24px 56px rgba(24,29,39,0.08), inset 0 1px 0 #ffffff",
              border: "1px solid rgba(24,29,39,0.12)",
              position: "relative",
              overflow: "hidden"
            },
            children: [
              // Left Column: Interactive Controls
              (0, x.jsxs)("div", {
                style: { display: "flex", flexDirection: "column", gap: 24 },
                children: [
                  // Pump Slider
                  (0, x.jsxs)("div", {
                    style: { background: "#efeae0", border: "1px solid rgba(24,29,39,0.08)", borderRadius: 16, padding: "16px 18px" },
                    children: [
                      (0, x.jsxs)("div", {
                        style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: I, fontSize: 13, color: "#57534e", fontWeight: 700, marginBottom: 8 },
                        children: [
                          (0, x.jsx)("span", { children: "PUMP SPEED (BOOSTER 04)" }),
                          (0, x.jsxs)("span", { style: { color: "#d95323", fontWeight: 800, fontFamily: "monospace", fontSize: 15 }, children: [rpm, " RPM"] })
                        ]
                      }),
                      (0, x.jsx)("input", {
                        type: "range",
                        min: 0,
                        max: 1200,
                        step: 5,
                        value: rpm,
                        onChange: (e) => {
                          if (animRef.current) cancelAnimationFrame(animRef.current);
                          setScenario('custom');
                          setRpm(Number(e.target.value));
                        },
                        style: {
                          width: "100%",
                          height: 8,
                          accentColor: "#d95323",
                          cursor: "pointer",
                          borderRadius: 4
                        }
                      }),
                      (0, x.jsxs)("div", {
                        style: { display: "flex", justifyContent: "space-between", fontSize: 10, color: "#78716c", fontFamily: "monospace", marginTop: 6 },
                        children: [(0, x.jsx)("span", { children: "0 RPM (IDLE)" }), (0, x.jsx)("span", { children: "600 RPM" }), (0, x.jsx)("span", { children: "1,200 RPM (MAX)" })]
                      })
                    ]
                  }),

                  // Valve Slider
                  (0, x.jsxs)("div", {
                    style: { background: "#efeae0", border: "1px solid rgba(24,29,39,0.08)", borderRadius: 16, padding: "16px 18px" },
                    children: [
                      (0, x.jsxs)("div", {
                        style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: I, fontSize: 13, color: "#57534e", fontWeight: 700, marginBottom: 8 },
                        children: [
                          (0, x.jsx)("span", { children: "RELIEF VALVE APERTURE (RV-02)" }),
                          (0, x.jsxs)("span", { style: { color: valve < 15 ? "#dc2626" : "#15803d", fontWeight: 800, fontFamily: "monospace", fontSize: 15 }, children: [valve, "%"] })
                        ]
                      }),
                      (0, x.jsx)("input", {
                        type: "range",
                        min: 0,
                        max: 100,
                        step: 1,
                        value: valve,
                        onChange: (e) => {
                          if (animRef.current) cancelAnimationFrame(animRef.current);
                          setScenario('custom');
                          setValve(Number(e.target.value));
                        },
                        style: {
                          width: "100%",
                          height: 8,
                          accentColor: valve < 15 ? "#dc2626" : "#15803d",
                          cursor: "pointer",
                          borderRadius: 4
                        }
                      }),
                      (0, x.jsxs)("div", {
                        style: { display: "flex", justifyContent: "space-between", fontSize: 10, color: "#78716c", fontFamily: "monospace", marginTop: 6 },
                        children: [
                          (0, x.jsx)("span", { style: { color: "#dc2626", fontWeight: 700 }, children: "0% (BLOCKED - DANGER)" }),
                          (0, x.jsx)("span", { children: "50%" }),
                          (0, x.jsx)("span", { style: { color: "#15803d", fontWeight: 700 }, children: "100% (FULL BYPASS)" })
                        ]
                      })
                    ]
                  }),

                  // Real-Time Hydraulic Telemetry Readout Grid
                  (0, x.jsx)("div", {
                    style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 4 },
                    children: [
                      { label: "FLUID VELOCITY (v)", val: `${flowVelocity} m/s` },
                      { label: "FLOW RATE (Q)", val: `${flowRate} m³/h` },
                      { label: "EPANET HEAD", val: `${(calculatedPressure * 10.197).toFixed(0)} m` },
                      { label: "VALVE RESISTANCE", val: `${(100 - valve) * 1.8} ζ` }
                    ].map((m, idx) => (
                      (0, x.jsxs)("div", {
                        key: idx,
                        style: { background: "#ffffff", border: "1px solid rgba(24,29,39,0.08)", borderRadius: 12, padding: "12px 14px", boxShadow: "0 2px 6px rgba(24,29,39,0.03)" },
                        children: [
                          (0, x.jsx)("div", { style: { fontSize: 10, color: "#78716c", fontFamily: "monospace", textTransform: "uppercase" }, children: m.label }),
                          (0, x.jsx)("div", { style: { fontSize: 15, fontWeight: 800, color: "#181d27", fontFamily: "monospace", marginTop: 3 }, children: m.val })
                        ]
                      })
                    ))
                  })
                ]
              }),

              // Right Column: Live Dynamic Pressure Waveform & Safety Status
              (0, x.jsxs)("div", {
                style: { display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 16 },
                children: [
                  // Semicircular Pressure Gauge & Verdict Banner
                  (0, x.jsxs)("div", {
                    style: {
                      background: isBreach ? "rgba(220,38,38,0.07)" : "rgba(21,128,61,0.07)",
                      border: `1.5px solid ${isBreach ? "rgba(220,38,38,0.3)" : "rgba(21,128,61,0.3)"}`,
                      borderRadius: 18,
                      padding: 22,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 12
                    },
                    children: [
                      (0, x.jsxs)("div", {
                        children: [
                          (0, x.jsx)("div", { style: { fontSize: 11, fontFamily: "monospace", color: isBreach ? "#dc2626" : "#15803d", fontWeight: 800 }, children: isBreach ? "CRITICAL BURST DETECTED" : "HYDRODYNAMIC STABILITY PASS" }),
                          (0, x.jsxs)("div", { style: { fontSize: "clamp(30px, 4vw, 46px)", fontFamily: F, fontWeight: 700, color: isBreach ? "#dc2626" : "#15803d", lineHeight: 1.08, margin: "4px 0" }, children: [calculatedPressure, " BAR"] }),
                          (0, x.jsx)("div", { style: { fontSize: 11, color: "#57534e", fontFamily: "monospace" }, children: "Safety ceiling threshold: 8.0 BAR" })
                        ]
                      }),
                      (0, x.jsxs)("div", {
                        style: {
                          background: isBreach ? "#dc2626" : "#181d27",
                          color: "#faf8f5",
                          padding: "11px 18px",
                          borderRadius: 100,
                          fontSize: 12,
                          fontWeight: 800,
                          fontFamily: "monospace",
                          letterSpacing: "0.05em",
                          boxShadow: `0 8px 20px ${isBreach ? "rgba(220,38,38,0.28)" : "rgba(24,29,39,0.18)"}`
                        },
                        children: [isBreach ? "⛔ HARD REJECT" : "✓ SAFE TO COMMIT"]
                      })
                    ]
                  }),

                  // Dynamic Joukowsky Shockwave Visual — Strictly Bounded Cubic Bezier
                  (0, x.jsxs)("div", {
                    style: {
                      background: "#efeae0",
                      borderRadius: 18,
                      border: "1px solid rgba(24,29,39,0.09)",
                      padding: "16px 18px",
                      position: "relative",
                      height: 168,
                      boxShadow: "inset 0 2px 6px rgba(24,29,39,0.04)"
                    },
                    children: [
                      (0, x.jsxs)("div", {
                        style: { display: "flex", justifyContent: "space-between", fontSize: 10, fontFamily: "monospace", color: "#57534e", marginBottom: 6, fontWeight: 700 },
                        children: [
                          (0, x.jsx)("span", { children: "EPANET 2.2 TRANSIENT WAVEFORM (JUNCTION J-104)" }),
                          (0, x.jsxs)("span", { style: { color: isBreach ? "#dc2626" : "#15803d" }, children: ["STRESS INDEX: ", stressPercent, "%"] })
                        ]
                      }),
                      (() => {
                        const peakY = Math.max(12, Math.min(98, Math.round(108 - calculatedPressure * 7.8)));
                        const midY = Math.max(24, Math.min(100, Math.round(104 - calculatedPressure * 4.6)));
                        const endY = Math.max(32, Math.min(102, Math.round(104 - calculatedPressure * 4.2)));
                        const curvePath = `M 0 98 C 65 98, 105 ${peakY}, 155 ${peakY} C 205 ${peakY}, 240 ${midY}, 295 ${midY} C 345 ${midY}, 370 ${endY}, 400 ${endY}`;
                        return (0, x.jsxs)("svg", {
                          viewBox: "0 0 400 116",
                          style: { width: "100%", height: 112, display: "block", overflow: "hidden" },
                          children: [
                            (0, x.jsxs)("defs", {
                              children: [
                                (0, x.jsxs)("linearGradient", {
                                  id: "twinSandFill", x1: "0", y1: "0", x2: "0", y2: "1",
                                  children: [
                                    (0, x.jsx)("stop", { offset: "0%", stopColor: isBreach ? "#dc2626" : "#15803d", stopOpacity: "0.24" }),
                                    (0, x.jsx)("stop", { offset: "100%", stopColor: isBreach ? "#dc2626" : "#15803d", stopOpacity: "0.0" })
                                  ]
                                })
                              ]
                            }),
                            (0, x.jsx)("line", { x1: 0, y1: 45, x2: 400, y2: 45, stroke: "#dc2626", strokeDasharray: "4 4", strokeWidth: 1.4 }),
                            (0, x.jsx)("text", { x: 395, y: 39, textAnchor: "end", fill: "#dc2626", fontSize: 9, fontFamily: "monospace", fontWeight: 700, children: "8.0 BAR FLANGE BURST CEILING" }),
                            (0, x.jsx)("path", { d: `${curvePath} L 400 114 L 0 114 Z`, fill: "url(#twinSandFill)" }),
                            (0, x.jsx)("path", {
                              d: curvePath,
                              fill: "none",
                              stroke: isBreach ? "#dc2626" : "#15803d",
                              strokeWidth: 3,
                              strokeLinecap: "round"
                            }),
                            (0, x.jsx)("circle", { cx: 155, cy: peakY, r: 4.5, fill: isBreach ? "#dc2626" : "#15803d", stroke: "#ffffff", strokeWidth: 1.5 })
                          ]
                        });
                      })(),
                      isCavitation && (0, x.jsx)("div", {
                        style: {
                          position: "absolute",
                          bottom: 10,
                          left: 16,
                          background: "rgba(217,83,35,0.12)",
                          border: "1px solid rgba(217,83,35,0.35)",
                          color: "#d95323",
                          padding: "3px 9px",
                          borderRadius: 6,
                          fontSize: 9.5,
                          fontFamily: "monospace",
                          fontWeight: 800
                        },
                        children: "⚠️ CAVITATION RISK: Rapid Pressure Drop Near Flange"
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}


// 4. Multi-Agent Editorial Showcase & Live NPU Execution Stage
export function AgentBentoSection() {
  let [activeAgent, setActiveAgent] = (0, o.useState)(0);

  const agents = [
    {
      id: `01`,
      role: `Acoustic Forensics`,
      engine: `Whisper-v3 + Silero VAD`,
      target: `Snapdragon NPU Hexagon DSP`,
      latency: `142ms`,
      desc: `Triage dispatcher voice feeds, radio calls, and phone instructions. Identifies deepfake voice cloning, artificial cadence, and panic markers.`,
      status: `ACTIVE`,
      trace: [
        `[HEXAGON_DSP] Loading quantized Whisper-v3-Turbo INT4 weights (45 TOPS)`,
        `[SILERO_VAD] Spectral jitter anomaly: 98.4% synthetic voice probability`,
        `[VERDICT] Flagging emergency dispatch as adversarial audio spoofing`
      ],
      metricLabel: `SPECTRAL AUTHENTICITY`,
      metricValue: `99.4% ACCURACY`
    },
    {
      id: `02`,
      role: `SCADA Sentinel`,
      engine: `Z3 SMT Formal Prover`,
      target: `OpenPLC v3 / Modbus TCP`,
      latency: `48ms`,
      desc: `Decompiles operator commands into target PLC holding registers (%QW104). Formally verifies safety boundaries and interlocks before single-coil write.`,
      status: `VALIDATED`,
      trace: [
        `[MODBUS_DECOMPILER] Target: Function Code 0x06 -> Register %QW104 (1200 RPM)`,
        `[Z3_PROVER] Evaluating constraint: (RPM <= 850) OR (PRV_02_OPEN >= 40%)`,
        `[VERDICT] Formal safety invariant violated -> Blocking direct write`
      ],
      metricLabel: `REGISTER INVARIANTS`,
      metricValue: `100% DETERMINISTIC`
    },
    {
      id: `03`,
      role: `Hydraulic Twin`,
      engine: `EPANET 2.2 / WNTR`,
      target: `Physical Consequence Engine`,
      latency: `185ms`,
      desc: `Executes 4th-order Runge-Kutta simulation of fluid velocity and pressure heads. Forecasts water hammer shockwaves before valves actuate.`,
      status: `ONLINE`,
      trace: [
        `[EPANET_SOLVER] Initializing 60-second lookahead transient matrix`,
        `[JOUKOWSKY_SIM] ΔP = ρ · c · Δv -> Peak transient head: 11.4 BAR at J-104`,
        `[VERDICT] Exceeds 8.0 BAR flange burst ceiling -> Hard Interlock Triggered`
      ],
      metricLabel: `TRANSIENT LOOKAHEAD`,
      metricValue: `60s HORIZON`
    },
    {
      id: `04`,
      role: `Swarm Planner`,
      engine: `LangGraph Multi-Agent`,
      target: `Staged Ramp Engine`,
      latency: `210ms`,
      desc: `When an instruction is physically dangerous, generates safe alternative ramp schedules (e.g. 45-second stepped valve opening).`,
      status: `READY`,
      trace: [
        `[SWARM_SYNTHESIS] Generating counterfactual safe actuation trajectory`,
        `[RAMP_SCHEDULE] Step 1: Open PRV-02 to 45% -> Step 2: Ramp Pump 04 to 680 RPM`,
        `[VERDICT] Secondary EPANET pass verified at 7.4 BAR peak pressure`
      ],
      metricLabel: `SAFE REPLANNING`,
      metricValue: `7.4 BAR BOUNDED`
    },
    {
      id: `05`,
      role: `Sovereign Gatekeeper`,
      engine: `Android TEE / TrustZone`,
      target: `Hardware Biometric Enclave`,
      latency: `32ms`,
      desc: `Requires physical biometric operator sign-off before releasing signed ED25519 execution tokens to the control network.`,
      status: `ENFORCED`,
      trace: [
        `[ANDROID_TEE] Awaiting physical Ultrasonic Fingerprint attestation`,
        `[CRYPTO_ENCLAVE] Signing replanned Modbus frame with hardware ED25519 key`,
        `[VERDICT] Zero-cloud sovereign token dispatched to OpenPLC gateway`
      ],
      metricLabel: `HARDWARE ATTESTATION`,
      metricValue: `ED25519 SIGNED`
    }
  ];

  const current = agents[activeAgent];

  return (0, x.jsxs)(`section`, {
    id: `agents`,
    "data-section": `agents`,
    style: { background: `#f5f3ee`, paddingBottom: 104 },
    children: [
      (0, x.jsx)(Bridge, { number: `06`, tag: `DISTRIBUTED AGENTS // SNAPDRAGON NPU ORCHESTRATION` }),
      (0, x.jsxs)(`div`, {
        style: { maxWidth: 1280, margin: `0 auto`, padding: `0 32px` },
        children: [
          // Editorial Split Header
          (0, x.jsxs)(`div`, {
            style: {
              display: `grid`,
              gridTemplateColumns: `repeat(auto-fit, minmax(320px, 1fr))`,
              gap: 32,
              alignItems: `end`,
              margin: `28px 0 56px`,
              paddingBottom: 32,
              borderBottom: `1px solid rgba(24,29,39,0.1)`
            },
            children: [
              (0, x.jsxs)(`div`, {
                children: [
                  (0, x.jsx)(`div`, {
                    style: { fontFamily: `monospace`, fontSize: 11, fontWeight: 700, color: R, letterSpacing: `0.14em`, marginBottom: 14, textTransform: `uppercase` },
                    children: `// MULTI-AGENT SWARM ARCHITECTURE`
                  }),
                  (0, x.jsx)(`h2`, {
                    style: {
                      fontFamily: F,
                      fontSize: `clamp(38px, 5vw, 68px)`,
                      fontWeight: 700,
                      color: V,
                      letterSpacing: `-0.035em`,
                      lineHeight: 1.02,
                      margin: 0
                    },
                    children: `Five Specialized Agents. Zero Single Point of Failure.`
                  })
                ]
              }),
              (0, x.jsx)(`p`, {
                style: {
                  fontFamily: L,
                  fontSize: 18,
                  color: `#535862`,
                  maxWidth: 520,
                  margin: 0,
                  lineHeight: 1.65
                },
                children: `Sentinel-K never relies on a single hallucinating LLM. Five deterministic edge agents execute asynchronously across on-device Snapdragon NPU cores and air-gapped physical simulation nodes.`
              })
            ]
          }),

          // Asymmetric Editorial Composition: Left Interactive Index + Right Live Enclave Inspector
          (0, x.jsxs)(`div`, {
            style: {
              display: `grid`,
              gridTemplateColumns: `repeat(auto-fit, minmax(340px, 1fr))`,
              gap: 32,
              alignItems: `stretch`
            },
            children: [
              // Left Column: Numbered Editorial Agent Rows
              (0, x.jsx)(`div`, {
                style: { display: `flex`, flexDirection: `column`, gap: 12 },
                children: agents.map((a, i) => {
                  const isSelected = activeAgent === i;
                  return (0, x.jsxs)(`div`, {
                    key: i,
                    "data-cursor": `card`,
                    "data-cursor-text": `INSPECT`,
                    onClick: () => setActiveAgent(i),
                    onMouseEnter: () => setActiveAgent(i),
                    style: {
                      background: isSelected ? `#181d27` : `#ffffff`,
                      color: isSelected ? `#faf8f5` : `#181d27`,
                      border: `1px solid ${isSelected ? `#d95323` : `rgba(24,29,39,0.09)`}`,
                      borderRadius: 20,
                      padding: `22px 26px`,
                      cursor: `pointer`,
                      transition: `all 0.32s cubic-bezier(0.16, 1, 0.3, 1)`,
                      display: `flex`,
                      alignItems: `center`,
                      justifyContent: `space-between`,
                      gap: 16,
                      boxShadow: isSelected ? `0 18px 40px rgba(24,29,39,0.14)` : `0 2px 8px rgba(24,29,39,0.03)`,
                      transform: isSelected ? `translateX(6px)` : `translateX(0)`
                    },
                    children: [
                      (0, x.jsxs)(`div`, {
                        style: { display: `flex`, alignItems: `center`, gap: 18 },
                        children: [
                          (0, x.jsx)(`span`, {
                            style: {
                              fontFamily: `monospace`,
                              fontSize: 12,
                              fontWeight: 800,
                              color: isSelected ? `#fff` : `#d95323`,
                              background: isSelected ? `#d95323` : `rgba(217, 83, 35, 0.1)`,
                              padding: `6px 10px`,
                              borderRadius: 8
                            },
                            children: a.id
                          }),
                          (0, x.jsxs)(`div`, {
                            children: [
                              (0, x.jsx)(`h3`, {
                                style: {
                                  fontFamily: F,
                                  fontSize: 21,
                                  fontWeight: 700,
                                  margin: `0 0 4px`,
                                  letterSpacing: `-0.02em`
                                },
                                children: a.role
                              }),
                              (0, x.jsx)(`div`, {
                                style: {
                                  fontFamily: `monospace`,
                                  fontSize: 11.5,
                                  color: isSelected ? `#d6d3d1` : `#57534e`
                                },
                                children: `${a.engine}  •  ${a.target}`
                              })
                            ]
                          })
                        ]
                      }),
                      (0, x.jsxs)(`div`, {
                        style: { textAlign: `right`, flexShrink: 0 },
                        children: [
                          (0, x.jsx)(`div`, {
                            style: { fontFamily: `monospace`, fontSize: 13, fontWeight: 800, color: isSelected ? `#4ade80` : `#181d27` },
                            children: a.latency
                          }),
                          (0, x.jsx)(`div`, {
                            style: { fontFamily: `monospace`, fontSize: 10, color: `#d95323`, fontWeight: 700, letterSpacing: `0.06em` },
                            children: a.status
                          })
                        ]
                      })
                    ]
                  });
                })
              }),

              // Right Column: Deep-Inspection Telemetry Dossier — Warm Alabaster & Sand Glass
              (0, x.jsxs)(`div`, {
                style: {
                  background: `linear-gradient(155deg, #ffffff 0%, #f7f4ed 55%, #eee8dc 100%)`,
                  color: `#181d27`,
                  borderRadius: 24,
                  padding: `clamp(28px, 4vw, 44px)`,
                  display: `flex`,
                  flexDirection: `column`,
                  justifyContent: `space-between`,
                  border: `1px solid rgba(24,29,39,0.12)`,
                  boxShadow: `0 24px 56px rgba(24,29,39,0.08), inset 0 1px 0 #ffffff`,
                  position: `relative`,
                  overflow: `hidden`
                },
                children: [
                  (0, x.jsxs)(`div`, {
                    children: [
                      (0, x.jsxs)(`div`, {
                        style: { display: `flex`, justifyContent: `space-between`, alignItems: `center`, marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid rgba(24,29,39,0.09)` },
                        children: [
                          (0, x.jsxs)(`div`, {
                            style: { display: `flex`, alignItems: `center`, gap: 10 },
                            children: [
                              (0, x.jsx)(`span`, { style: { width: 8, height: 8, borderRadius: `50%`, background: `#15803d`, boxShadow: `0 0 8px rgba(21,128,61,0.4)` } }),
                              (0, x.jsxs)(`span`, { style: { fontFamily: `monospace`, fontSize: 11, color: `#57534e`, fontWeight: 700, letterSpacing: `0.1em` }, children: [`AGENT NODE // `, current.id, ` OF 05`] })
                            ]
                          }),
                          (0, x.jsx)(`span`, {
                            style: { fontFamily: `monospace`, fontSize: 11, color: `#d95323`, background: `rgba(217,83,35,0.12)`, padding: `4px 12px`, borderRadius: 100, fontWeight: 800 },
                            children: `SLA LATENCY: ${current.latency}`
                          })
                        ]
                      }),

                      (0, x.jsx)(`h3`, {
                        style: { fontFamily: F, fontSize: `clamp(28px, 3.5vw, 40px)`, fontWeight: 700, color: `#181d27`, margin: `0 0 14px`, letterSpacing: `-0.025em` },
                        children: current.role
                      }),
                      (0, x.jsx)(`p`, {
                        style: { fontFamily: L, fontSize: 16.5, color: `#57534e`, lineHeight: 1.65, margin: `0 0 28px` },
                        children: current.desc
                      }),

                      // Live NPU / Enclave Execution Trace Terminal — Recessed Sand Well
                      (0, x.jsxs)(`div`, {
                        style: {
                          background: `#efeae0`,
                          border: `1px solid rgba(24,29,39,0.09)`,
                          borderRadius: 16,
                          padding: 20,
                          fontFamily: `monospace`,
                          fontSize: 12,
                          lineHeight: 1.75,
                          marginBottom: 24,
                          boxShadow: `inset 0 2px 6px rgba(24,29,39,0.04)`
                        },
                        children: [
                          (0, x.jsx)(`div`, { style: { color: `#78716c`, fontSize: 10.5, fontWeight: 700, marginBottom: 10, letterSpacing: `0.08em` }, children: `// LIVE ENCLAVE EXECUTION TRACE` }),
                          current.trace.map((line, idx) => (
                            (0, x.jsxs)(`div`, {
                              key: idx,
                              style: { color: idx === 2 ? `#15803d` : `#181d27`, fontWeight: idx === 2 ? 800 : 600, marginBottom: idx < 2 ? 6 : 0 },
                              children: [(0, x.jsx)(`span`, { style: { color: `#d95323`, fontWeight: 800, marginRight: 8 }, children: `>` }), line]
                            })
                          ))
                        ]
                      })
                    ]
                  }),

                  // Bottom Hardware Spec Strip
                  (0, x.jsxs)(`div`, {
                    style: {
                      display: `grid`,
                      gridTemplateColumns: `1fr 1fr`,
                      gap: 12,
                      paddingTop: 18,
                      borderTop: `1px solid rgba(24,29,39,0.09)`
                    },
                    children: [
                      (0, x.jsxs)(`div`, {
                        children: [
                          (0, x.jsx)(`div`, { style: { fontFamily: `monospace`, fontSize: 10, color: `#78716c`, textTransform: `uppercase` }, children: `COMPUTE TARGET` }),
                          (0, x.jsx)(`div`, { style: { fontFamily: `monospace`, fontSize: 13, fontWeight: 800, color: `#181d27`, marginTop: 3 }, children: current.target })
                        ]
                      }),
                      (0, x.jsxs)(`div`, {
                        style: { textAlign: `right` },
                        children: [
                          (0, x.jsx)(`div`, { style: { fontFamily: `monospace`, fontSize: 10, color: `#78716c`, textTransform: `uppercase` }, children: current.metricLabel }),
                          (0, x.jsx)(`div`, { style: { fontFamily: `monospace`, fontSize: 13, fontWeight: 800, color: `#15803d`, marginTop: 3 }, children: current.metricValue })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}

// 5. 10-Step Incident Playbook: "The Friday Surge Attack" (With Cinema Auto-Play & Pressure Trajectory)
export function PlaybookSection() {
  let [step, setStep] = (0, o.useState)(0);
  let [isPlaying, setIsPlaying] = (0, o.useState)(false);

  const steps = [
    { time: `14:02:11`, phase: `DISPATCH`, pressure: 5.2, title: `Spoofed Audio Dispatch`, detail: `Deepfake audio clone of Plant Director instructs operator to force Booster Pump 4 to 100% capacity.` },
    { time: `14:02:12`, phase: `EVIDENCE`, pressure: 5.2, title: `NPU Multimodal Extraction`, detail: `Hexagon NPU runs Whisper-v3 + Silero VAD on-device. Flags 98.4% urgency anomaly and unnatural acoustic spectral jitter.` },
    { time: `14:02:13`, phase: `DECOMPILE`, pressure: 5.4, title: `Modbus Intent Translation`, detail: `Operational request translated to PLC register target: Holding Register HR_40012 = 1200 RPM.` },
    { time: `14:02:14`, phase: `CYBER GATE`, pressure: 5.6, title: `Cyber ACL & Syntax Validation`, detail: `Cyber check passes: legitimate operator device, valid Modbus TCP packet structure, authorized IP.` },
    { time: `14:02:15`, phase: `TWIN SIM`, pressure: 7.8, title: `EPANET 2.2 Transient Simulation`, detail: `Physical Twin simulates downstream pressure heads with closed relief valve PRV-02.` },
    { time: `14:02:16`, phase: `BREACH`, pressure: 11.4, title: `Joukowsky Water Hammer Spike`, detail: `Simulation detects 11.4 bar transient surge. Exceeds 8.0 bar flange burst threshold at Junction J-104.` },
    { time: `14:02:17`, phase: `REPLAN`, pressure: 6.8, title: `Swarm Replanner Synthesis`, detail: `LangGraph swarm synthesizes safe alternative: 45-second stepped ramp with PRV-02 bypass opened to 65%.` },
    { time: `14:02:18`, phase: `RE-VERIFY`, pressure: 5.4, title: `Secondary Consequence Check`, detail: `EPANET verifies safe trajectory: peak pressure held to 5.4 bar throughout entire transient curve.` },
    { time: `14:02:19`, phase: `GATEKEEPER`, pressure: 5.4, title: `Sovereign Biometric Prompt`, detail: `Copilot presents transparent evidence dossier. Prompts operator for physical biometric sign-off.` },
    { time: `14:02:20`, phase: `EXECUTE`, pressure: 5.4, title: `Attested PLC Execution`, detail: `Hardware TEE issues signed ED25519 token. OpenPLC receives verified safe instruction sequence.` }
  ];

  (0, o.useEffect)(() => {
    if (!isPlaying) return;
    let timer = setInterval(() => {
      setStep((prev) => {
        if (prev >= steps.length - 1) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 1400);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const currentStep = steps[step];
  const isDangerStep = step === 5;

  return (0, x.jsxs)(`section`, {
    id: `playbook`,
    "data-section": `playbook`,
    style: { background: `#ede7db`, paddingBottom: 104 },
    children: [
      (0, x.jsx)(Bridge, { number: `07`, tag: `INCIDENT PLAYBOOK // THE FRIDAY SURGE WALKTHROUGH` }),
      (0, x.jsxs)(`div`, {
        style: { maxWidth: 1280, margin: `0 auto`, padding: `0 32px` },
        children: [
          (0, x.jsxs)(`div`, {
            style: {
              display: `flex`,
              justifyContent: `space-between`,
              alignItems: `flex-end`,
              flexWrap: `wrap`,
              gap: 24,
              margin: `24px 0 44px`
            },
            children: [
              (0, x.jsxs)(`div`, {
                style: { maxWidth: 720 },
                children: [
                  (0, x.jsx)(`h2`, {
                    style: {
                      fontFamily: F,
                      fontSize: `clamp(36px, 5vw, 64px)`,
                      fontWeight: 700,
                      color: V,
                      letterSpacing: `-0.035em`,
                      lineHeight: 1.04,
                      margin: `0 0 14px`
                    },
                    children: `10 Seconds from Catastrophe to Containment.`
                  }),
                  (0, x.jsx)(`p`, {
                    style: {
                      fontFamily: L,
                      fontSize: 18,
                      color: `#535862`,
                      margin: 0,
                      lineHeight: 1.6
                    },
                    children: `Step through 'The Friday Surge Attack' — an autonomous verification sequence where a spoofed emergency dispatch attempted to cause physical pipe rupture on Booster Pump 4.`
                  })
                ]
              }),
              (0, x.jsx)(`button`, {
                "data-cursor": `card`,
                "data-cursor-text": isPlaying ? `PAUSE` : `AUTO-PLAY`,
                onClick: () => setIsPlaying(!isPlaying),
                style: {
                  background: isPlaying ? `#d95323` : `#181d27`,
                  color: `#faf8f5`,
                  border: `none`,
                  borderRadius: 100,
                  padding: `14px 26px`,
                  fontFamily: `monospace`,
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: `0.08em`,
                  cursor: `pointer`,
                  display: `flex`,
                  alignItems: `center`,
                  gap: 10,
                  boxShadow: `0 12px 28px rgba(24,29,39,0.14)`
                },
                children: [
                  (0, x.jsx)(`span`, { style: { width: 8, height: 8, borderRadius: `50%`, background: isPlaying ? `#fff` : `#4ade80` } }),
                  isPlaying ? `⏸ PAUSE SIMULATION` : `▶ AUTO-SIMULATE 10S CONTAINMENT`
                ]
              })
            ]
          }),

          // Interactive Scrubber Console — Warm Architectural Alabaster & Sand Glass
          (0, x.jsxs)(`div`, {
            style: {
              background: `linear-gradient(155deg, #ffffff 0%, #f7f4ed 55%, #eee8dc 100%)`,
              borderRadius: 24,
              padding: `clamp(24px, 4vw, 44px)`,
              color: `#181d27`,
              boxShadow: `0 24px 56px rgba(24,29,39,0.08), inset 0 1px 0 #ffffff`,
              border: `1px solid rgba(24,29,39,0.12)`
            },
            children: [
              // Progress bar across 10 steps
              (0, x.jsx)(`div`, {
                style: { width: `100%`, height: 5, background: `rgba(24,29,39,0.08)`, borderRadius: 4, marginBottom: 20, overflow: `hidden` },
                children: (0, x.jsx)(`div`, {
                  style: {
                    width: `${((step + 1) / steps.length) * 100}%`,
                    height: `100%`,
                    background: isDangerStep ? `#dc2626` : `#d95323`,
                    transition: `width 0.35s cubic-bezier(0.16, 1, 0.3, 1)`
                  }
                })
              }),

              // Scrub Buttons
              (0, x.jsx)(`div`, {
                style: {
                  display: `grid`,
                  gridTemplateColumns: `repeat(10, minmax(84px, 1fr))`,
                  gap: 8,
                  overflowX: `auto`,
                  paddingBottom: 20,
                  borderBottom: `1px solid rgba(24,29,39,0.09)`,
                  scrollbarWidth: `none`
                },
                children: steps.map((s, i) => (
                  (0, x.jsxs)(`button`, {
                    key: i,
                    onClick: () => { setIsPlaying(false); setStep(i); },
                    style: {
                      background: step === i ? (i === 5 ? `#dc2626` : `#181d27`) : `#efeae0`,
                      color: step === i ? `#faf8f5` : `#57534e`,
                      border: `1px solid ${step === i ? `transparent` : `rgba(24,29,39,0.08)`}`,
                      borderRadius: 12,
                      padding: `10px 12px`,
                      fontFamily: `monospace`,
                      fontSize: 11,
                      fontWeight: 800,
                      cursor: `pointer`,
                      display: `flex`,
                      flexDirection: `column`,
                      alignItems: `flex-start`,
                      gap: 4,
                      transition: `all 0.2s ease`
                    },
                    children: [
                      (0, x.jsxs)(`div`, {
                        style: { display: `flex`, justifyContent: `space-between`, width: `100%`, opacity: 0.85 },
                        children: [(0, x.jsx)(`span`, { children: `0${i + 1}` }), (0, x.jsx)(`span`, { children: `T+${i}s` })]
                      }),
                      (0, x.jsx)(`span`, { style: { fontSize: 10, letterSpacing: `0.04em`, color: step === i ? `#faf8f5` : `#181d27` }, children: s.phase })
                    ]
                  })
                ))
              }),

              // Active Step Detail Display
              (0, x.jsxs)(`div`, {
                style: {
                  display: `grid`,
                  gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
                  gap: 36,
                  marginTop: 32,
                  alignItems: `center`
                },
                children: [
                  (0, x.jsxs)(`div`, {
                    children: [
                      (0, x.jsxs)(`div`, {
                        style: { display: `flex`, alignItems: `center`, gap: 12, marginBottom: 14 },
                        children: [
                          (0, x.jsxs)(`span`, {
                            style: {
                              fontFamily: `monospace`,
                              fontSize: 12,
                              color: isDangerStep ? `#dc2626` : `#d95323`,
                              background: isDangerStep ? `rgba(220,38,38,0.12)` : `rgba(217, 83, 35, 0.12)`,
                              padding: `5px 12px`,
                              borderRadius: 8,
                              fontWeight: 800
                            },
                            children: [`T+`, step, `s  //  `, currentStep.time]
                          }),
                          (0, x.jsx)(`span`, {
                            style: { fontFamily: `monospace`, fontSize: 12, color: `#57534e`, fontWeight: 700, textTransform: `uppercase`, letterSpacing: `0.1em` },
                            children: `PHASE: ${currentStep.phase}`
                          })
                        ]
                      }),
                      (0, x.jsx)(`h3`, {
                        style: { fontFamily: F, fontSize: `clamp(26px, 3.2vw, 36px)`, fontWeight: 700, color: `#181d27`, margin: `0 0 16px`, lineHeight: 1.12 },
                        children: currentStep.title
                      }),
                      (0, x.jsx)(`p`, {
                        style: { fontFamily: L, fontSize: 16.5, color: `#57534e`, lineHeight: 1.65, margin: `0 0 24px` },
                        children: currentStep.detail
                      }),
                      // Prev / Next step controls
                      (0, x.jsxs)(`div`, {
                        style: { display: `flex`, gap: 10 },
                        children: [
                          (0, x.jsx)(`button`, {
                            onClick: () => { setIsPlaying(false); setStep((step - 1 + steps.length) % steps.length); },
                            style: { background: `#efeae0`, border: `1px solid rgba(24,29,39,0.12)`, color: `#181d27`, borderRadius: 100, padding: `9px 18px`, fontFamily: `monospace`, fontSize: 11, fontWeight: 700, cursor: `pointer` },
                            children: `← PREV SECOND`
                          }),
                          (0, x.jsx)(`button`, {
                            onClick: () => { setIsPlaying(false); setStep((step + 1) % steps.length); },
                            style: { background: `#d95323`, border: `none`, color: `#fff`, borderRadius: 100, padding: `9px 18px`, fontFamily: `monospace`, fontSize: 11, fontWeight: 800, cursor: `pointer` },
                            children: `NEXT SECOND →`
                          })
                        ]
                      })
                    ]
                  }),

                  // Telemetry readout box — Recessed Sand Well
                  (0, x.jsxs)(`div`, {
                    style: {
                      background: `#efeae0`,
                      border: `1.5px solid ${isDangerStep ? `rgba(220,38,38,0.4)` : `rgba(24,29,39,0.09)`}`,
                      borderRadius: 18,
                      padding: 24,
                      fontFamily: `monospace`,
                      fontSize: 13,
                      lineHeight: 1.85,
                      color: `#181d27`,
                      boxShadow: `inset 0 2px 6px rgba(24,29,39,0.04)`
                    },
                    children: [
                      (0, x.jsxs)(`div`, {
                        style: { display: `flex`, justifyContent: `space-between`, color: `#57534e`, fontWeight: 700, borderBottom: `1px solid rgba(24,29,39,0.09)`, paddingBottom: 10, marginBottom: 14 },
                        children: [
                          (0, x.jsx)(`span`, { children: `// SENTINEL-K REAL-TIME TELEMETRY` }),
                          (0, x.jsx)(`span`, { style: { color: isDangerStep ? `#dc2626` : `#15803d`, fontWeight: 800 }, children: `${currentStep.pressure} BAR` })
                        ]
                      }),
                      (0, x.jsxs)(`div`, { children: [`[TIMESTAMP]: `, (0, x.jsx)(`span`, { style: { color: `#181d27`, fontWeight: 700 }, children: `2026-03-20 ` + currentStep.time })] }),
                      (0, x.jsxs)(`div`, { children: [`[TARGET PLC]: `, (0, x.jsx)(`span`, { style: { color: `#d95323`, fontWeight: 700 }, children: `OpenPLC_Booster_04 (%QW104)` })] }),
                      (0, x.jsxs)(`div`, { children: [`[PRESSURE]  : `, (0, x.jsx)(`span`, { style: { color: isDangerStep ? `#dc2626` : `#15803d`, fontWeight: 800 }, children: isDangerStep ? `11.4 bar (BURST CEILING BREACH)` : `${currentStep.pressure} bar (BOUNDED SAFE)` })] }),
                      (0, x.jsxs)(`div`, { children: [`[GATE STATE]: `, (0, x.jsx)(`span`, { style: { color: step === 9 ? `#15803d` : `#d95323`, fontWeight: 800 }, children: step === 9 ? `EXECUTED_TEE_SIGNED` : `INTERCEPTED_IN_VERIFICATION` })] })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}

// 6. iQOO Hackathon Alignment & The Builders (Editorial Spec Layout)
export function HackathonTeamSection() {
  const pillars = [
    {
      code: `01 // HEXAGON DSP`,
      title: `Snapdragon NPU Acceleration`,
      subtitle: `45 TOPS INT4 Edge Triage`,
      desc: `Runs Whisper-v3 acoustic forensics and multimodal evidence extraction locally on mobile hardware in under 150ms without cloud roundtrips.`
    },
    {
      code: `02 // VIVO EDGE KIT`,
      title: `Vivo Office Kit Edge Bridge`,
      subtitle: `Zero-Friction Plant Uplink`,
      desc: `Low-latency secure edge channel bridging the operator's iQOO 13 handheld directly into air-gapped SCADA simulation clusters.`
    },
    {
      code: `03 // ANDROID TRUSTZONE`,
      title: `Hardware-Enforced Security`,
      subtitle: `Biometric TEE Attestation`,
      desc: `Immutable ultrasonic fingerprint confirmation ensures malicious AI dispatches cannot actuate plant hardware without physical sign-off.`
    }
  ];

  const builders = [
    { id: `ARCH // 01`, name: `J Sashank`, role: `Cyber-Physical Systems & SCADA Architecture`, focus: `Modbus TCP, PLC Interlocks, Z3 Prover` },
    { id: `TWIN // 02`, name: `D Mounika`, role: `Hydrodynamic Modeling & Digital Twin`, focus: `EPANET 2.2, WNTR, Water Hammer Transient Physics` },
    { id: `EDGE // 03`, name: `S Sameer`, role: `Distributed AI & Edge Orchestration`, focus: `Snapdragon NPU Pipelines, Mobile TEE, Multi-Agent Swarms` }
  ];

  return (0, x.jsxs)(`section`, {
    id: `team`,
    "data-section": `team`,
    style: { background: `#f5f3ee`, paddingBottom: 104 },
    children: [
      (0, x.jsx)(Bridge, { number: `08`, tag: `SUBMISSION PROFILE // iQOO HACKATHON 2026` }),
      (0, x.jsxs)(`div`, {
        style: { maxWidth: 1280, margin: `0 auto`, padding: `0 32px` },
        children: [
          (0, x.jsxs)(`div`, {
            style: { textAlign: `center`, margin: `24px 0 56px` },
            children: [
              (0, x.jsx)(`h2`, {
                style: {
                  fontFamily: F,
                  fontSize: `clamp(36px, 5vw, 64px)`,
                  fontWeight: 700,
                  color: V,
                  letterSpacing: `-0.035em`,
                  lineHeight: 1.04,
                  margin: `0 0 16px`
                },
                children: `Engineered for Mission-Critical Mobile Intelligence.`
              }),
              (0, x.jsx)(`p`, {
                style: {
                  fontFamily: L,
                  fontSize: 18,
                  color: `#535862`,
                  maxWidth: 680,
                  margin: `0 auto`,
                  lineHeight: 1.6
                },
                children: `Built for the iQOO Hackathon 2026. Empowering field engineers with the computational horsepower of Snapdragon NPU to protect critical water and power infrastructure from spoofed operational commands.`
              })
            ]
          }),

          // 3 Pillars
          (0, x.jsx)(`div`, {
            style: {
              display: `grid`,
              gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
              gap: 24,
              marginBottom: 40
            },
            children: pillars.map((p, i) => (
              (0, x.jsxs)(`div`, {
                key: i,
                "data-cursor": `card`,
                "data-cursor-text": `SPEC`,
                style: {
                  background: `linear-gradient(155deg, #ffffff 0%, #f7f4ed 55%, #eee8dc 100%)`,
                  border: `1px solid rgba(24,29,39,0.1)`,
                  borderRadius: 22,
                  padding: 32,
                  boxShadow: `0 12px 32px rgba(24,29,39,0.05), inset 0 1px 0 #ffffff`,
                  display: `flex`,
                  flexDirection: `column`,
                  justifyContent: `space-between`
                },
                children: [
                  (0, x.jsxs)(`div`, {
                    children: [
                      (0, x.jsxs)(`div`, {
                        style: { display: `flex`, justifyContent: `space-between`, alignItems: `center`, marginBottom: 16 },
                        children: [
                          (0, x.jsx)(`span`, { style: { fontFamily: `monospace`, fontSize: 11, fontWeight: 800, color: `#d95323`, letterSpacing: `0.08em` }, children: p.code }),
                          (0, x.jsx)(`span`, { style: { fontFamily: `monospace`, fontSize: 10, color: `#57534e`, fontWeight: 700, background: `#efeae0`, padding: `4px 8px`, borderRadius: 6 }, children: p.subtitle })
                        ]
                      }),
                      (0, x.jsx)(`h3`, { style: { fontFamily: F, fontSize: 24, fontWeight: 700, color: `#181d27`, margin: `0 0 12px`, letterSpacing: `-0.02em` }, children: p.title }),
                      (0, x.jsx)(`p`, { style: { fontFamily: L, fontSize: 14.5, color: `#57534e`, lineHeight: 1.65, margin: 0 }, children: p.desc })
                    ]
                  })
                ]
              })
            ))
          }),

          // The Builders — Warm Architectural Alabaster & Sand Glass
          (0, x.jsxs)(`div`, {
            style: {
              background: `linear-gradient(155deg, #ffffff 0%, #f7f4ed 55%, #eee8dc 100%)`,
              borderRadius: 24,
              padding: `clamp(28px, 4vw, 44px)`,
              color: `#181d27`,
              border: `1px solid rgba(24,29,39,0.12)`,
              boxShadow: `0 24px 56px rgba(24,29,39,0.07), inset 0 1px 0 #ffffff`
            },
            children: [
              (0, x.jsxs)(`div`, {
                style: { display: `flex`, justifyContent: `space-between`, alignItems: `center`, marginBottom: 28, borderBottom: `1px solid rgba(24,29,39,0.09)`, paddingBottom: 18, flexWrap: `wrap`, gap: 12 },
                children: [
                  (0, x.jsx)(`h3`, { style: { fontFamily: F, fontSize: 28, fontWeight: 700, margin: 0, color: `#181d27`, letterSpacing: `-0.02em` }, children: `The Engineering Team` }),
                  (0, x.jsx)(`span`, { style: { fontFamily: `monospace`, fontSize: 12, color: `#d95323`, fontWeight: 800, letterSpacing: `0.08em` }, children: `iQOO HACKATHON 2026 // SOVEREIGN DEFENSE SQUAD` })
                ]
              }),
              (0, x.jsx)(`div`, {
                style: {
                  display: `grid`,
                  gridTemplateColumns: `repeat(auto-fit, minmax(260px, 1fr))`,
                  gap: 20
                },
                children: builders.map((b, i) => (
                  (0, x.jsxs)(`div`, {
                    key: i,
                    style: {
                      background: `#efeae0`,
                      border: `1px solid rgba(24,29,39,0.08)`,
                      borderRadius: 18,
                      padding: 26,
                      boxShadow: `inset 0 2px 5px rgba(24,29,39,0.03)`
                    },
                    children: [
                      (0, x.jsx)(`div`, { style: { fontFamily: `monospace`, fontSize: 10.5, color: `#78716c`, fontWeight: 700, marginBottom: 8, letterSpacing: `0.08em` }, children: b.id }),
                      (0, x.jsx)(`div`, { style: { fontFamily: F, fontSize: 24, fontWeight: 700, color: `#181d27`, marginBottom: 6 }, children: b.name }),
                      (0, x.jsx)(`div`, { style: { fontFamily: I, fontSize: 12.5, color: `#d95323`, fontWeight: 700, marginBottom: 12 }, children: b.role }),
                      (0, x.jsx)(`div`, { style: { fontFamily: `monospace`, fontSize: 11.5, color: `#57534e`, lineHeight: 1.5 }, children: b.focus })
                    ]
                  })
                ))
              })
            ]
          })
        ]
      })
    ]
  });
}

// ==========================================
// THREAT RADAR COCKPIT FOR PARAGRAPH SECTION (he) — WARM ARCHITECTURAL INSTRUMENT
// ==========================================
export function ThreatRadarCockpit({ scrollProgress = 0 }) {
  let [mousePos, setMousePos] = (0, o.useState)({ x: 0, y: 0, active: false });
  let [tick, setTick] = (0, o.useState)(0);
  let [selectedNode, setSelectedNode] = (0, o.useState)(0);
  let animRef = (0, o.useRef)(null);

  (0, o.useEffect)(() => {
    let step = () => {
      setTick((t) => (t + 1) % 7200);
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => animRef.current && cancelAnimationFrame(animRef.current);
  }, []);

  let handleMouseMove = (e) => {
    let rect = e.currentTarget.getBoundingClientRect();
    let x = (e.clientX - rect.left) / rect.width - 0.5;
    let y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y, active: true });
  };

  let handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0, active: false });
  };

  let rotX = mousePos.active ? mousePos.y * -8 : 0;
  let rotY = mousePos.active ? mousePos.x * 10 : 0;
  let sweepAngle = (tick * 2.0) % 360;
  let isSafePhase = scrollProgress >= 0.45;

  const nodes = [
    { id: "N1", name: "BOOSTER 04", x: 106, y: 42, val: isSafePhase ? "680 RPM" : "850 RPM" },
    { id: "N2", name: "VALVE RV-02", x: 46, y: 108, val: isSafePhase ? "45% OPEN" : "0% SHUT" },
    { id: "N3", name: "FLANGE J-104", x: 114, y: 112, val: isSafePhase ? "7.4 BAR" : "11.4 BAR" }
  ];

  return (0, x.jsxs)("div", {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      position: "relative",
      width: "100%",
      maxWidth: 520,
      height: 470,
      background: "linear-gradient(155deg, #ffffff 0%, #f7f3eb 55%, #ece5d8 100%)",
      borderRadius: 24,
      border: "1.5px solid rgba(24, 29, 39, 0.1)",
      boxShadow: "0 28px 64px rgba(24, 29, 39, 0.1), inset 0 1px 0 #ffffff",
      padding: "22px 24px",
      boxSizing: "border-box",
      color: "#181d27",
      fontFamily: L,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      overflow: "hidden",
      transform: `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
      transition: "transform 0.18s ease-out, box-shadow 0.25s ease",
      willChange: "transform"
    },
    children: [
      // Subtle Warm Architectural Grid
      (0, x.jsx)("div", {
        style: {
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(24, 29, 39, 0.06) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          pointerEvents: "none",
          zIndex: 1
        }
      }),

      // Header Bar: Threat Radar Status & Node Metadata
      (0, x.jsxs)("div", {
        style: { display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 5, borderBottom: "1px solid rgba(24,29,39,0.09)", paddingBottom: 12 },
        children: [
          (0, x.jsxs)("div", {
            style: { display: "flex", alignItems: "center", gap: 8 },
            children: [
              (0, x.jsx)("span", {
                style: {
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: isSafePhase ? "#15803d" : "#d95323",
                  boxShadow: `0 0 10px ${isSafePhase ? "rgba(21,128,61,0.5)" : "rgba(217,83,35,0.5)"}`
                }
              }),
              (0, x.jsxs)("span", {
                style: { fontFamily: "monospace", fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", color: "#181d27" },
                children: ["SECTOR 04 // ", isSafePhase ? "EQUILIBRIUM LOCKED" : "INTERCEPTING SURGE"]
              })
            ]
          }),
          (0, x.jsxs)("div", {
            style: { display: "flex", gap: 6, alignItems: "center", fontSize: 9.5, fontFamily: "monospace" },
            children: [
              (0, x.jsx)("span", { style: { background: "#efeae0", color: "#57534e", border: "1px solid rgba(24,29,39,0.08)", padding: "3px 8px", borderRadius: 100, fontWeight: 700 }, children: "AIR-GAP ENCLAVE" }),
              (0, x.jsx)("span", { style: { background: "#181d27", color: "#fff", padding: "3px 8px", borderRadius: 100, fontWeight: 800 }, children: "45 TOPS" })
            ]
          })
        ]
      }),

      // Middle Stage: Tactile Architectural Radar Dial & Decompiled Dossier
      (0, x.jsxs)("div", {
        style: { display: "grid", gridTemplateColumns: "164px 1fr", gap: 16, alignItems: "center", position: "relative", zIndex: 5, margin: "6px 0" },
        children: [
          // Left: Warm Brushed Alabaster & Copper Radar Dial
          (0, x.jsxs)("div", {
            style: {
              width: 158,
              height: 158,
              position: "relative",
              borderRadius: "50%",
              background: "radial-gradient(circle at 50% 50%, #ffffff 0%, #efeae0 75%, #e5dec9 100%)",
              border: "1.5px solid rgba(24,29,39,0.14)",
              boxShadow: "0 12px 28px rgba(24,29,39,0.08), inset 0 2px 6px rgba(24,29,39,0.05)",
              overflow: "hidden"
            },
            children: [
              // Concentric Precision Rings
              [22, 46, 68].map((rVal, idx) => (
                (0, x.jsx)("div", {
                  key: idx,
                  style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: rVal * 2,
                    height: rVal * 2,
                    transform: "translate(-50%, -50%)",
                    borderRadius: "50%",
                    border: idx === 1 ? "1px dashed rgba(217,83,35,0.35)" : "1px solid rgba(24,29,39,0.08)"
                  }
                })
              )),

              // Crosshair Lines
              (0, x.jsx)("div", { style: { position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: "rgba(24,29,39,0.08)" } }),
              (0, x.jsx)("div", { style: { position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "rgba(24,29,39,0.08)" } }),

              // Sweeping Copper/Terracotta Needle
              (0, x.jsx)("div", {
                style: {
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 76,
                  height: 2,
                  background: `linear-gradient(90deg, #d95323, transparent)`,
                  transformOrigin: "0 0",
                  transform: `rotate(${sweepAngle}deg)`
                }
              }),

              // Interactive Substation Nodes
              nodes.map((nd, idx) => (
                (0, x.jsxs)("div", {
                  key: nd.id,
                  onClick: () => setSelectedNode(idx),
                  onMouseEnter: () => setSelectedNode(idx),
                  style: {
                    position: "absolute",
                    top: nd.y,
                    left: nd.x,
                    transform: "translate(-50%, -50%)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  children: [
                    (0, x.jsx)("div", {
                      style: {
                        width: selectedNode === idx ? 11 : 8,
                        height: selectedNode === idx ? 11 : 8,
                        borderRadius: "50%",
                        background: isSafePhase ? "#15803d" : "#d95323",
                        border: "2px solid #ffffff",
                        boxShadow: "0 2px 6px rgba(24,29,39,0.25)",
                        transition: "all 0.2s ease"
                      }
                    }),
                    selectedNode === idx && (0, x.jsx)("div", {
                      style: {
                        position: "absolute",
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        border: `1.5px solid ${isSafePhase ? "#15803d" : "#d95323"}`,
                        opacity: 0.5
                      }
                    })
                  ]
                })
              )),

              // Bottom Dial Pill
              (0, x.jsx)("div", {
                style: {
                  position: "absolute",
                  bottom: 8,
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: 7.5,
                  fontFamily: "monospace",
                  fontWeight: 800,
                  color: "#ffffff",
                  background: "#181d27",
                  padding: "2px 7px",
                  borderRadius: 100,
                  whiteSpace: "nowrap"
                },
                children: `${nodes[selectedNode].name}: ${nodes[selectedNode].val}`
              })
            ]
          }),

          // Right: Warm Ivory Forensic & Register Dossier
          (0, x.jsxs)("div", {
            style: {
              background: "#ffffff",
              borderRadius: 16,
              padding: "14px 16px",
              border: "1px solid rgba(24,29,39,0.09)",
              boxShadow: "0 8px 24px rgba(24,29,39,0.04)",
              display: "flex",
              flexDirection: "column",
              gap: 7,
              fontSize: 9,
              fontFamily: "monospace"
            },
            children: [
              (0, x.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-between", color: "#57534e", borderBottom: "1px solid rgba(24,29,39,0.08)", paddingBottom: 6, fontWeight: 800 },
                children: [
                  (0, x.jsx)("span", { children: "DISPATCH FORENSICS" }),
                  (0, x.jsx)("span", { style: { color: "#d95323" }, children: "URGENCY: 8.9" })
                ]
              }),
              (0, x.jsxs)("div", { style: { color: "#57534e" }, children: ["PAYLOAD: ", (0, x.jsx)("strong", { style: { color: "#181d27" }, children: '"Force Pump 4 to 850 RPM"' })] }),
              (0, x.jsxs)("div", { style: { color: "#57534e" }, children: ["MODBUS : ", (0, x.jsx)("strong", { style: { color: "#d95323" }, children: "0x06 WRITE_REG 40012" })] }),
              (0, x.jsxs)("div", { style: { color: "#57534e" }, children: ["CYBER  : ", (0, x.jsx)("strong", { style: { color: "#181d27" }, children: "CRC-16 VALID (BLIND PASS)" })] }),
              (0, x.jsxs)("div", {
                style: {
                  marginTop: 3,
                  padding: "6px 10px",
                  borderRadius: 8,
                  background: isSafePhase ? "rgba(21,128,61,0.1)" : "rgba(217,83,35,0.12)",
                  border: `1px solid ${isSafePhase ? "rgba(21,128,61,0.3)" : "rgba(217,83,35,0.3)"}`,
                  color: isSafePhase ? "#15803d" : "#d95323",
                  fontWeight: 800,
                  fontSize: 8.5
                },
                children: [
                  isSafePhase ? "✓ TWIN REPLAN: 60s RAMP (7.4 BAR SAFE)" : "⚡ TWIN INTERCEPT: 11.4 BAR SURGE BLOCKED"
                ]
              })
            ]
          })
        ]
      }),

      // Bottom Stage: Warm Sand Recessed Hydrodynamic Envelope
      (0, x.jsxs)("div", {
        style: {
          background: "linear-gradient(180deg, #efeae0 0%, #e7e0d2 100%)",
          borderRadius: 16,
          padding: "12px 16px",
          border: "1px solid rgba(24,29,39,0.09)",
          boxShadow: "inset 0 2px 6px rgba(24,29,39,0.04)",
          position: "relative",
          zIndex: 5
        },
        children: [
          (0, x.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 8.5, fontFamily: "monospace", marginBottom: 6, fontWeight: 800 },
            children: [
              (0, x.jsx)("span", { style: { color: "#57534e" }, children: "EPANET 2.2 // HYDRAULIC PRESSURE ENVELOPE" }),
              (0, x.jsxs)("span", { style: { color: isSafePhase ? "#15803d" : "#d95323" }, children: [isSafePhase ? "REPLANNED: 7.4 BAR" : "SURGE: 11.4 BAR", " (CEILING: 9.2 BAR)"] })
            ]
          }),

          // Clean Bounded Dual-Wave SVG Canvas
          (0, x.jsxs)("svg", {
            viewBox: "0 0 300 52",
            style: { width: "100%", height: 48, display: "block" },
            children: [
              // 9.2 Bar Ceiling
              (0, x.jsx)("line", { x1: 0, y1: 18, x2: 300, y2: 18, stroke: "rgba(217,83,35,0.45)", strokeDasharray: "4 3", strokeWidth: 1.2 }),
              // Safe Baseline
              (0, x.jsx)("line", { x1: 0, y1: 44, x2: 300, y2: 44, stroke: "rgba(24,29,39,0.1)", strokeWidth: 1 }),

              // Unverified Surge Spike (Terracotta)
              (0, x.jsx)("path", {
                d: "M 0 44 C 45 44, 65 6, 95 6 C 125 6, 145 38, 190 40 C 230 41, 265 42, 300 42",
                fill: "none",
                stroke: "#d95323",
                strokeWidth: isSafePhase ? 1.5 : 2.5,
                strokeDasharray: isSafePhase ? "3 3" : "none",
                opacity: isSafePhase ? 0.45 : 1
              }),

              // Safe Replan Curve (Deep Forest Sage / Charcoal)
              (0, x.jsx)("path", {
                d: "M 0 44 C 55 44, 95 27, 145 27 C 195 27, 240 28, 300 28",
                fill: "none",
                stroke: "#15803d",
                strokeWidth: isSafePhase ? 2.8 : 1.8,
                opacity: isSafePhase ? 1 : 0.65
              })
            ]
          }),

          // Enclave Attestation Seal
          (0, x.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 7.5, fontFamily: "monospace", color: "#57534e", marginTop: 4, fontWeight: 700 },
            children: [
              (0, x.jsx)("span", { children: "SNAPDRAGON 8 ELITE // TEE KEY: 0x8F92" }),
              (0, x.jsx)("span", { style: { color: "#181d27", fontWeight: 800 }, children: isSafePhase ? "✓ BIOMETRIC COMMIT READY" : "SIMULATING KINETICS →" })
            ]
          })
        ]
      })
    ]
  });
}

// ==========================================
// CINEMATIC HORIZONTAL CARDS VISUALS (Ee) — UNIFIED UMANO WARM ARCHITECTURAL SERIES
// ==========================================

// 1. Field Copilot Radar & Spectral HUD Visual (Warm Alabaster & Terracotta — 4-Tier Full-Height Instrument)
export function FieldCopilotVisual({ w, h }) {
  let [angle, setAngle] = (0, o.useState)(0);
  let [mouseDist, setMouseDist] = (0, o.useState)(0.5);

  (0, o.useEffect)(() => {
    let anim;
    let tick = () => {
      setAngle((a) => (a + 1.8) % 360);
      anim = requestAnimationFrame(tick);
    };
    anim = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(anim);
  }, []);

  return (0, x.jsxs)("div", {
    onMouseMove: (e) => {
      let rect = e.currentTarget.getBoundingClientRect();
      setMouseDist(Math.max(0.15, Math.min(1, (e.clientX - rect.left) / rect.width)));
    },
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(155deg, #ffffff 0%, #f6f2ea 55%, #eae3d5 100%)",
      border: "1.5px solid rgba(24, 29, 39, 0.09)",
      boxShadow: "inset 0 1px 0 #ffffff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 22,
      boxSizing: "border-box",
      overflow: "hidden"
    },
    children: [
      // Subtle dot grid
      (0, x.jsx)("div", {
        style: {
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(24,29,39,0.06) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          pointerEvents: "none"
        }
      }),

      // Tier 1: Top status row
      (0, x.jsxs)("div", {
        style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 9.5, fontFamily: "monospace", color: "#57534e", fontWeight: 800, position: "relative", zIndex: 2 },
        children: [
          (0, x.jsxs)("span", {
            style: { display: "flex", alignItems: "center", gap: 7, color: "#181d27" },
            children: [(0, x.jsx)("span", { style: { width: 7, height: 7, borderRadius: "50%", background: "#d95323" } }), "01 // ACOUSTIC TRIAGE FORENSICS"]
          }),
          (0, x.jsx)("span", { style: { background: "#181d27", color: "#fff", padding: "3px 9px", borderRadius: 100, fontSize: 8.5 }, children: "45 TOPS NPU" })
        ]
      }),

      // Tier 2: Intercepted Caller Dossier & Duty Roster Cross-Check
      (0, x.jsxs)("div", {
        style: {
          background: "#ffffff",
          borderRadius: 12,
          border: "1px solid rgba(24,29,39,0.09)",
          padding: "10px 14px",
          boxShadow: "0 4px 14px rgba(24,29,39,0.04)",
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: 6
        },
        children: [
          (0, x.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 8, fontFamily: "monospace", fontWeight: 800 },
            children: [
              (0, x.jsx)("span", { style: { color: "#78716c" }, children: "CALLER ID: SUPERVISOR REYNOLDS" }),
              (0, x.jsx)("span", { style: { color: "#dc2626", background: "rgba(220,38,38,0.1)", padding: "2px 6px", borderRadius: 4 }, children: "ROSTER: OFFLINE (LEAVE)" })
            ]
          }),
          (0, x.jsx)("div", {
            style: { fontSize: 9.5, fontFamily: "monospace", fontWeight: 700, color: "#181d27", background: "#f7f4ed", padding: "6px 10px", borderRadius: 8, borderLeft: "3px solid #d95323" },
            children: "\"Emergency override! Force Booster 04 to 100% capacity immediately!\""
          })
        ]
      }),

      // Tier 3: Tactile Brushed Alabaster & Copper Radar Dial
      (0, x.jsxs)("div", {
        style: { position: "relative", width: Math.min(182, w * 0.44), height: Math.min(182, w * 0.44), margin: "0 auto", zIndex: 2 },
        children: [
          (0, x.jsxs)("svg", {
            viewBox: "0 0 160 160",
            style: { width: "100%", height: "100%", filter: "drop-shadow(0 12px 24px rgba(24,29,39,0.08))" },
            children: [
              (0, x.jsx)("circle", { cx: 80, cy: 80, r: 74, fill: "#ffffff", stroke: "rgba(24,29,39,0.12)", strokeWidth: 1.5 }),
              (0, x.jsx)("circle", { cx: 80, cy: 80, r: 54, fill: "#f7f4ed", stroke: "rgba(217,83,35,0.3)", strokeWidth: 1, strokeDasharray: "4 3" }),
              (0, x.jsx)("circle", { cx: 80, cy: 80, r: 30, fill: "none", stroke: "rgba(24,29,39,0.1)", strokeWidth: 1 }),
              (0, x.jsx)("line", { x1: 10, y1: 80, x2: 150, y2: 80, stroke: "rgba(24,29,39,0.08)", strokeWidth: 1 }),
              (0, x.jsx)("line", { x1: 80, y1: 10, x2: 80, y2: 150, stroke: "rgba(24,29,39,0.08)", strokeWidth: 1 }),
              // Radar sweep needle
              (0, x.jsx)("line", {
                x1: 80,
                y1: 80,
                x2: 80 + 68 * Math.cos((angle * Math.PI) / 180),
                y2: 80 + 68 * Math.sin((angle * Math.PI) / 180),
                stroke: "#d95323",
                strokeWidth: 2.5
              }),
              (0, x.jsx)("circle", { cx: 80, cy: 80, r: 4, fill: "#181d27" }),
              // Threat target node
              (0, x.jsx)("circle", { cx: 112, cy: 56, r: 6, fill: "#d95323", stroke: "#ffffff", strokeWidth: 2 })
            ]
          }),
          (0, x.jsx)("div", {
            style: {
              position: "absolute",
              bottom: -4,
              left: "50%",
              transform: "translateX(-50%)",
              background: "#181d27",
              color: "#ffffff",
              fontSize: 8,
              fontFamily: "monospace",
              fontWeight: 800,
              padding: "4px 12px",
              borderRadius: 100,
              whiteSpace: "nowrap",
              boxShadow: "0 4px 12px rgba(24,29,39,0.15)"
            },
            children: "8.9 URGENCY SPOOF FLAGGED"
          })
        ]
      }),

      // Tier 4: Warm Sand Recessed Equalizer Waveform & Metrics
      (0, x.jsxs)("div", {
        style: {
          background: "#efeae0",
          borderRadius: 14,
          padding: "12px 14px",
          border: "1px solid rgba(24,29,39,0.09)",
          position: "relative",
          zIndex: 2
        },
        children: [
          (0, x.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between", fontSize: 8, fontFamily: "monospace", color: "#57534e", fontWeight: 800, marginBottom: 8 },
            children: [
              (0, x.jsx)("span", { children: "VOICEPRINT SPECTRAL HARMONICS (SILERO VAD)" }),
              (0, x.jsx)("span", { style: { color: "#d95323" }, children: "71% CLONE MATCH" })
            ]
          }),
          (0, x.jsx)("div", {
            style: { display: "flex", alignItems: "flex-end", gap: 3.5, height: 38 },
            children: [10, 18, 28, 14, 24, 32, 16, 26, 12, 30, 22, 14, 28, 18, 24, 12, 16, 22, 26, 14].map((hVal, idx) => {
              let dynamicH = Math.max(6, hVal + Math.sin(angle * 0.12 + idx * 0.5) * (10 * mouseDist));
              let isTerracotta = idx % 2 === 0;
              return (0, x.jsx)("div", {
                key: idx,
                style: {
                  flex: 1,
                  height: `${dynamicH}px`,
                  background: isTerracotta ? "#d95323" : "#181d27",
                  opacity: isTerracotta ? 0.92 : 0.48,
                  borderRadius: 2.5,
                  transition: "height 0.08s ease"
                }
              });
            })
          })
        ]
      })
    ]
  });
}

// 2. Verification Pipeline Visual (Warm Architectural Interlock Stack — 4-Tier Full-Height Instrument)
export function VerificationPipelineVisual({ w, h }) {
  let [activeNode, setActiveNode] = (0, o.useState)(0);
  let [hoveredIndex, setHoveredIndex] = (0, o.useState)(null);

  (0, o.useEffect)(() => {
    let t = setInterval(() => {
      setActiveNode((n) => (n + 1) % 5);
    }, 1600);
    return () => clearInterval(t);
  }, []);

  const stages = [
    { id: "01", name: "INGEST", sub: "Cellular Voice Dispatch", status: "Intercepted", code: "PAYLOAD: 850 RPM" },
    { id: "02", name: "SLM 3B", sub: "Snapdragon NPU On-Device", status: "18ms Decompile", code: "HOLDING REG: 40012" },
    { id: "03", name: "MODBUS", sub: "SCADA Protocol Gate", status: "CRC Valid (Blind)", code: "0x01 0x06 CRC:OK" },
    { id: "04", name: "EPANET", sub: "Hydrodynamic Twin Solver", status: "11.4B Blocked", code: "SURGE -> 7.4B REPLAN" },
    { id: "05", name: "TEE KEY", sub: "Hardware Biometric Enclave", status: "Signed Safe", code: "ED25519 COMMITTED" }
  ];

  let displayIdx = hoveredIndex !== null ? hoveredIndex : activeNode;

  return (0, x.jsxs)("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(155deg, #ffffff 0%, #f6f2ea 55%, #eae3d5 100%)",
      border: "1.5px solid rgba(24, 29, 39, 0.09)",
      boxShadow: "inset 0 1px 0 #ffffff",
      padding: 22,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    children: [
      // Tier 1: Header
      (0, x.jsxs)("div", {
        style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 9.5, fontFamily: "monospace", color: "#181d27", fontWeight: 800 },
        children: [
          (0, x.jsx)("span", { children: "02 // CROSS-DOMAIN BARRIER" }),
          (0, x.jsxs)("span", { style: { background: "#d95323", color: "#fff", padding: "3px 9px", borderRadius: 100, fontSize: 8.5 }, children: ["STAGE 0", displayIdx + 1, "/05"] })
        ]
      }),

      // Tier 2: Decompiled Register Target Summary Strip
      (0, x.jsxs)("div", {
        style: {
          background: "#efeae0",
          borderRadius: 12,
          border: "1px solid rgba(24,29,39,0.08)",
          padding: "10px 14px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 8
        },
        children: [
          { label: "TARGET PLC", val: "%QW104" },
          { label: "Z3 INVARIANT", val: "RPM <= 850" },
          { label: "ENCLAVE MODE", val: "AIR-GAPPED" }
        ].map((item, i) => (
          (0, x.jsxs)("div", {
            key: i,
            style: { background: "#ffffff", borderRadius: 8, padding: "6px 8px", border: "1px solid rgba(24,29,39,0.06)", textAlign: "center" },
            children: [
              (0, x.jsx)("div", { style: { fontSize: 7, fontFamily: "monospace", color: "#78716c" }, children: item.label }),
              (0, x.jsx)("div", { style: { fontSize: 8.5, fontFamily: "monospace", fontWeight: 800, color: "#181d27", marginTop: 2 }, children: item.val })
            ]
          })
        ))
      }),

      // Tier 3: 5 Interactive Architectural Stage Rows
      (0, x.jsx)("div", {
        style: { display: "flex", flexDirection: "column", gap: 8, margin: "4px 0" },
        children: stages.map((s, idx) => {
          let isActive = displayIdx === idx;
          return (0, x.jsxs)("div", {
            key: idx,
            onMouseEnter: () => setHoveredIndex(idx),
            onMouseLeave: () => setHoveredIndex(null),
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "11px 14px",
              borderRadius: 12,
              background: isActive ? "#181d27" : "#ffffff",
              color: isActive ? "#ffffff" : "#181d27",
              border: isActive ? "1px solid #181d27" : "1px solid rgba(24,29,39,0.08)",
              boxShadow: isActive ? "0 10px 22px rgba(24,29,39,0.15)" : "0 2px 5px rgba(24,29,39,0.02)",
              transform: isActive ? "translateX(4px)" : "translateX(0)",
              cursor: "pointer",
              transition: "all 0.24s cubic-bezier(0.16, 1, 0.3, 1)"
            },
            children: [
              (0, x.jsxs)("div", {
                style: { display: "flex", alignItems: "center", gap: 10 },
                children: [
                  (0, x.jsx)("span", {
                    style: {
                      fontFamily: "monospace",
                      fontSize: 9.5,
                      fontWeight: 800,
                      color: isActive ? "#ffffff" : "#d95323",
                      background: isActive ? "#d95323" : "rgba(217,83,35,0.1)",
                      padding: "3px 7px",
                      borderRadius: 6
                    },
                    children: s.id
                  }),
                  (0, x.jsxs)("div", {
                    children: [
                      (0, x.jsx)("div", { style: { fontFamily: "monospace", fontSize: 10.5, fontWeight: 800, color: isActive ? "#ffffff" : "#181d27" }, children: s.name }),
                      (0, x.jsx)("div", { style: { fontSize: 8, color: isActive ? "#cbd5e1" : "#78716c" }, children: s.sub })
                    ]
                  })
                ]
              }),
              (0, x.jsx)("span", {
                style: {
                  fontFamily: "monospace",
                  fontSize: 9,
                  fontWeight: 800,
                  color: isActive ? "#d95323" : "#57534e"
                },
                children: s.status
              })
            ]
          });
        })
      }),

      // Tier 4: Bottom Inspection Strip
      (0, x.jsxs)("div", {
        style: {
          background: "#efeae0",
          padding: "9px 14px",
          borderRadius: 10,
          border: "1px solid rgba(24,29,39,0.08)",
          fontFamily: "monospace",
          fontSize: 8.5,
          color: "#181d27",
          display: "flex",
          justifyContent: "space-between",
          fontWeight: 800
        },
        children: [
          (0, x.jsxs)("span", { children: ["TRACE // ", (0, x.jsx)("span", { style: { color: "#d95323" }, children: stages[displayIdx].code })] }),
          (0, x.jsx)("span", { style: { color: "#15803d" }, children: "✓ DETERMINISTIC" })
        ]
      })
    ]
  });
}

// 3. Latency Triage Chronograph Visual (Warm Alabaster & Terracotta Precision Timer — 4-Tier Full-Height Instrument)
export function LatencyTriageVisual({ w, h }) {
  let [tick, setTick] = (0, o.useState)(0);

  (0, o.useEffect)(() => {
    let anim;
    let step = () => {
      setTick((t) => (t + 1) % 3600);
      anim = requestAnimationFrame(step);
    };
    anim = requestAnimationFrame(step);
    return () => cancelAnimationFrame(anim);
  }, []);

  let msJitter = (Math.sin(tick * 0.08) * 5).toFixed(0);
  let currentMs = 1788 + Number(msJitter);

  return (0, x.jsxs)("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(155deg, #ffffff 0%, #f6f2ea 55%, #eae3d5 100%)",
      border: "1.5px solid rgba(24, 29, 39, 0.09)",
      boxShadow: "inset 0 1px 0 #ffffff",
      padding: 22,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    children: [
      // Tier 1: Header
      (0, x.jsxs)("div", {
        style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 9.5, fontFamily: "monospace", color: "#181d27", fontWeight: 800 },
        children: [
          (0, x.jsx)("span", { children: "03 // END-TO-END SLA CHRONOGRAPH" }),
          (0, x.jsx)("span", { style: { background: "rgba(21,128,61,0.12)", color: "#15803d", padding: "3px 9px", borderRadius: 100, fontSize: 8.5 }, children: "SLA < 2.0s" })
        ]
      }),

      // Tier 2: 3-Column NPU Hardware Telemetry Strip
      (0, x.jsx)("div", {
        style: {
          background: "#efeae0",
          borderRadius: 12,
          border: "1px solid rgba(24,29,39,0.08)",
          padding: "10px 12px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 8
        },
        children: [
          { label: "HEXAGON DSP", val: "45 TOPS" },
          { label: "PRECISION", val: "INT4 QUANT" },
          { label: "CLOUD TRIP", val: "0.0ms (ZERO)" }
        ].map((m, i) => (
          (0, x.jsxs)("div", {
            key: i,
            style: { background: "#ffffff", borderRadius: 8, padding: "6px 8px", border: "1px solid rgba(24,29,39,0.06)", textAlign: "center" },
            children: [
              (0, x.jsx)("div", { style: { fontSize: 7, fontFamily: "monospace", color: "#78716c" }, children: m.label }),
              (0, x.jsx)("div", { style: { fontSize: 8.5, fontFamily: "monospace", fontWeight: 800, color: "#181d27", marginTop: 2 }, children: m.val })
            ]
          })
        ))
      }),

      // Tier 3: Center Tactile Chronograph Dial with 1.79s Readout + Sub-Millisecond Budget Bar
      (0, x.jsxs)("div", {
        style: {
          background: "#ffffff",
          borderRadius: 16,
          border: "1px solid rgba(24,29,39,0.08)",
          boxShadow: "0 10px 26px rgba(24,29,39,0.05)",
          padding: "20px 18px",
          textAlign: "center",
          position: "relative"
        },
        children: [
          (0, x.jsxs)("div", {
            style: {
              fontFamily: F,
              fontSize: 58,
              fontWeight: 700,
              color: "#d95323",
              lineHeight: 0.95,
              letterSpacing: "-0.04em"
            },
            children: [
              (currentMs / 1000).toFixed(2),
              (0, x.jsx)("span", { style: { fontSize: 26, fontFamily: I, fontWeight: 800, color: "#181d27", marginLeft: 3 }, children: "s" })
            ]
          }),
          (0, x.jsx)("div", {
            style: { fontSize: 8.5, fontFamily: "monospace", color: "#57534e", letterSpacing: "0.1em", fontWeight: 800, textTransform: "uppercase", marginTop: 8 },
            children: "TOTAL AIR-GAPPED VERIFICATION LATENCY"
          }),
          // Segmented Latency Budget Bar
          (0, x.jsxs)("div", {
            style: { display: "flex", gap: 3, height: 8, marginTop: 14, borderRadius: 4, overflow: "hidden" },
            children: [
              (0, x.jsx)("div", { style: { flex: 18, background: "#181d27" } }),
              (0, x.jsx)("div", { style: { flex: 8, background: "#15803d" } }),
              (0, x.jsx)("div", { style: { flex: 62, background: "#d95323" } }),
              (0, x.jsx)("div", { style: { flex: 12, background: "#78716c" } })
            ]
          })
        ]
      }),

      // Tier 4: Sub-Stage Breakdown Progress Bars in Warm Palette
      (0, x.jsx)("div", {
        style: {
          background: "#efeae0",
          borderRadius: 14,
          padding: "12px 14px",
          border: "1px solid rgba(24,29,39,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: 8
        },
        children: [
          { name: "Acoustic Forensics (Whisper-v3)", ms: 18, pct: 22, color: "#181d27" },
          { name: "Modbus CRC Formal Prover (Z3)", ms: 2, pct: 12, color: "#15803d" },
          { name: "EPANET Fluid Twin (Runge-Kutta)", ms: 142, pct: 76, color: "#d95323" },
          { name: "Hardware Enclave Biometric (TEE)", ms: 12, pct: 18, color: "#181d27" }
        ].map((item, idx) => (
          (0, x.jsxs)("div", {
            key: idx,
            style: { display: "flex", flexDirection: "column", gap: 3 },
            children: [
              (0, x.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-between", fontSize: 8, fontFamily: "monospace", color: "#181d27", fontWeight: 700 },
                children: [
                  (0, x.jsx)("span", { children: item.name }),
                  (0, x.jsxs)("span", { style: { color: item.color, fontWeight: 800 }, children: [item.ms, "ms"] })
                ]
              }),
              (0, x.jsx)("div", {
                style: { width: "100%", height: 5, background: "rgba(24,29,39,0.08)", borderRadius: 3, overflow: "hidden" },
                children: (0, x.jsx)("div", {
                  style: {
                    width: `${item.pct}%`,
                    height: "100%",
                    background: item.color,
                    borderRadius: 3
                  }
                })
              })
            ]
          })
        ))
      })
    ]
  });
}

// 4. Industrial Stack Tactile Hardware Matrix (Warm Ceramic Tiles — 4-Tier Full-Height Instrument)
export function IndustrialStackVisual({ w, h }) {
  let [mouseOffset, setMouseOffset] = (0, o.useState)({ x: 0, y: 0 });
  let [hoveredTile, setHoveredTile] = (0, o.useState)(null);

  const stackItems = [
    { label: "MODBUS TCP", desc: "Port 502 // Holding Regs", badge: "0.8ms", load: "98%" },
    { label: "OPENPLC v3", desc: "IEC 61131-3 Ladder", badge: "LOCKED", load: "100%" },
    { label: "EPANET 2.2", desc: "Hydraulic Twin Solver", badge: "RK4", load: "60s" },
    { label: "SNAPDRAGON", desc: "8 Elite NPU 45 TOPS", badge: "INT4", load: "18ms" },
    { label: "VIVO OFFICE", desc: "Edge Zero-Friction Bridge", badge: "SYNC", load: "TLS1.3" },
    { label: "ORIGINOS 5", desc: "TEE Biometric Enclave", badge: "ED25519", load: "SIGNED" }
  ];

  return (0, x.jsxs)("div", {
    onMouseMove: (e) => {
      let rect = e.currentTarget.getBoundingClientRect();
      let x = (e.clientX - rect.left) / rect.width - 0.5;
      let y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouseOffset({ x, y });
    },
    onMouseLeave: () => { setMouseOffset({ x: 0, y: 0 }); setHoveredTile(null); },
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(155deg, #ffffff 0%, #f6f2ea 55%, #eae3d5 100%)",
      border: "1.5px solid rgba(24, 29, 39, 0.09)",
      boxShadow: "inset 0 1px 0 #ffffff",
      padding: 22,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    children: [
      // Tier 1: Header
      (0, x.jsxs)("div", {
        style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 9.5, fontFamily: "monospace", color: "#181d27", fontWeight: 800 },
        children: [
          (0, x.jsx)("span", { children: "04 // HARDWARE-IN-THE-LOOP MATRIX" }),
          (0, x.jsx)("span", { style: { background: "#181d27", color: "#fff", padding: "3px 9px", borderRadius: 100, fontSize: 8.5 }, children: "ZERO BYPASS" })
        ]
      }),

      // Tier 2: Live Edge-to-Plant Conduit Topology Strip
      (0, x.jsxs)("div", {
        style: {
          background: "#efeae0",
          borderRadius: 12,
          border: "1px solid rgba(24,29,39,0.08)",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "monospace",
          fontSize: 8
        },
        children: [
          (0, x.jsx)("span", { style: { background: "#181d27", color: "#fff", padding: "4px 8px", borderRadius: 6, fontWeight: 800 }, children: "iQOO 13 NPU" }),
          (0, x.jsx)("span", { style: { color: "#d95323", fontWeight: 800 }, children: "──[VIVO KIT]──►" }),
          (0, x.jsx)("span", { style: { background: "#ffffff", color: "#181d27", border: "1px solid rgba(24,29,39,0.12)", padding: "4px 8px", borderRadius: 6, fontWeight: 800 }, children: "OPENPLC" }),
          (0, x.jsx)("span", { style: { color: "#15803d", fontWeight: 800 }, children: "──► EPANET" })
        ]
      }),

      // Tier 3: 6 Floating Warm Ceramic Hardware Cards
      (0, x.jsx)("div", {
        style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, margin: "6px 0" },
        children: stackItems.map((st, idx) => {
          let isHov = hoveredTile === idx;
          let jitterX = mouseOffset.x * ((idx % 2 === 0 ? 1 : -1) * 6);
          let jitterY = mouseOffset.y * ((idx < 3 ? 1 : -1) * 5);
          return (0, x.jsxs)("div", {
            key: idx,
            onMouseEnter: () => setHoveredTile(idx),
            style: {
              background: isHov ? "#181d27" : "#ffffff",
              color: isHov ? "#ffffff" : "#181d27",
              border: `1px solid ${isHov ? "#d95323" : "rgba(24,29,39,0.09)"}`,
              borderRadius: 14,
              padding: "14px 14px",
              boxShadow: isHov ? "0 12px 24px rgba(24,29,39,0.15)" : "0 4px 12px rgba(24,29,39,0.04)",
              transform: `translate(${jitterX}px, ${jitterY}px)`,
              transition: "transform 0.16s ease-out, background 0.2s ease, color 0.2s ease",
              cursor: "pointer"
            },
            children: [
              (0, x.jsxs)("div", {
                style: { display: "flex", alignItems: "center", justifyContent: "space-between" },
                children: [
                  (0, x.jsx)("span", { style: { fontFamily: "monospace", fontSize: 10, fontWeight: 800 }, children: st.label }),
                  (0, x.jsx)("span", {
                    style: {
                      fontFamily: "monospace",
                      fontSize: 7.5,
                      fontWeight: 800,
                      color: "#d95323",
                      background: isHov ? "rgba(217,83,35,0.2)" : "rgba(217,83,35,0.1)",
                      padding: "2px 6px",
                      borderRadius: 4
                    },
                    children: st.badge
                  })
                ]
              }),
              (0, x.jsx)("div", { style: { fontSize: 8.5, color: isHov ? "#cbd5e1" : "#57534e", marginTop: 4 }, children: st.desc }),
              (0, x.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, paddingTop: 6, borderTop: `1px solid ${isHov ? "rgba(255,255,255,0.1)" : "rgba(24,29,39,0.06)"}`, fontSize: 7.5, fontFamily: "monospace" },
                children: [
                  (0, x.jsx)("span", { style: { color: isHov ? "#94a3b8" : "#78716c" }, children: "STATUS: ONLINE" }),
                  (0, x.jsx)("span", { style: { color: "#15803d", fontWeight: 800 }, children: st.load })
                ]
              })
            ]
          });
        })
      }),

      // Tier 4: Bottom Telemetry Bar
      (0, x.jsxs)("div", {
        style: {
          background: "#efeae0",
          borderRadius: 10,
          padding: "9px 14px",
          border: "1px solid rgba(24,29,39,0.08)",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 8.5,
          fontFamily: "monospace",
          color: "#181d27",
          fontWeight: 800
        },
        children: [
          (0, x.jsx)("span", { children: "PLC ROUNDTRIP: 0.8ms" }),
          (0, x.jsx)("span", { style: { color: "#d95323" }, children: "AIR-GAP ASSURANCE: 100%" })
        ]
      })
    ]
  });
}

// 5. Dynamic Twin Water Hammer & Valve Replanning Reactor (Screenshot 4 Complete Rebuild — 4-Tier Full-Height Instrument)
export function DynamicTwinVisual({ w, h }) {
  let [tick, setTick] = (0, o.useState)(0);
  let [hoverX, setHoverX] = (0, o.useState)(null);

  (0, o.useEffect)(() => {
    let anim;
    let step = () => {
      setTick((t) => (t + 1) % 3600);
      anim = requestAnimationFrame(step);
    };
    anim = requestAnimationFrame(step);
    return () => cancelAnimationFrame(anim);
  }, []);

  let normX = hoverX !== null ? hoverX : ((tick % 240) / 240);
  let scrubT = (normX * 60).toFixed(1);
  let replannedP = (5.2 + Math.sin(normX * Math.PI) * 2.2).toFixed(1);

  return (0, x.jsxs)("div", {
    onMouseMove: (e) => {
      let rect = e.currentTarget.getBoundingClientRect();
      setHoverX(Math.max(0.02, Math.min(0.98, (e.clientX - rect.left) / rect.width)));
    },
    onMouseLeave: () => setHoverX(null),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(155deg, #ffffff 0%, #f6f2ea 55%, #eae3d5 100%)",
      border: "1.5px solid rgba(24, 29, 39, 0.09)",
      boxShadow: "inset 0 1px 0 #ffffff",
      padding: 22,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      cursor: "ew-resize"
    },
    children: [
      // Tier 1: Top Header Row
      (0, x.jsxs)("div", {
        style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 9.5, fontFamily: "monospace", color: "#181d27", fontWeight: 800 },
        children: [
          (0, x.jsxs)("span", {
            style: { display: "flex", alignItems: "center", gap: 6 },
            children: [(0, x.jsx)("span", { style: { width: 7, height: 7, borderRadius: "50%", background: "#15803d" } }), "05 // AUTONOMOUS VALVE REPLANNER"]
          }),
          (0, x.jsx)("span", { style: { background: "#d95323", color: "#fff", padding: "3px 9px", borderRadius: 100, fontSize: 8.5 }, children: "EPANET 2.2 / WNTR" })
        ]
      }),

      // Tier 2: 3-Column Comparative Consequence Matrix
      (0, x.jsx)("div", {
        style: {
          background: "#efeae0",
          borderRadius: 12,
          border: "1px solid rgba(24,29,39,0.08)",
          padding: "9px 12px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 8
        },
        children: [
          { label: "RAW OVERRIDE", val: "11.4 BAR", color: "#dc2626" },
          { label: "FLANGE LIMIT", val: "8.0 BAR", color: "#181d27" },
          { label: "SAFE REPLAN", val: "7.4 BAR", color: "#15803d" }
        ].map((c, i) => (
          (0, x.jsxs)("div", {
            key: i,
            style: { background: "#ffffff", borderRadius: 8, padding: "6px 8px", border: "1px solid rgba(24,29,39,0.06)", textAlign: "center" },
            children: [
              (0, x.jsx)("div", { style: { fontSize: 6.5, fontFamily: "monospace", color: "#78716c" }, children: c.label }),
              (0, x.jsx)("div", { style: { fontSize: 9, fontFamily: "monospace", fontWeight: 800, color: c.color, marginTop: 2 }, children: c.val })
            ]
          })
        ))
      }),

      // Tier 3: Tactile Actuator & Conduit Status Bar
      (0, x.jsxs)("div", {
        style: {
          background: "#ffffff",
          borderRadius: 12,
          border: "1px solid rgba(24,29,39,0.09)",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 4px 12px rgba(24,29,39,0.03)"
        },
        children: [
          (0, x.jsxs)("div", {
            style: { display: "flex", alignItems: "center", gap: 10 },
            children: [
              // Spinning Precision Impeller Icon
              (0, x.jsxs)("svg", {
                viewBox: "0 0 28 28",
                style: { width: 26, height: 26, flexShrink: 0 },
                children: [
                  (0, x.jsx)("circle", { cx: 14, cy: 14, r: 12, fill: "#f7f4ed", stroke: "#181d27", strokeWidth: 1.5 }),
                  (0, x.jsxs)("g", {
                    transform: `rotate(${(tick * 2.5) % 360} 14 14)`,
                    children: [
                      (0, x.jsx)("line", { x1: 14, y1: 4, x2: 14, y2: 24, stroke: "#d95323", strokeWidth: 2 }),
                      (0, x.jsx)("line", { x1: 4, y1: 14, x2: 24, y2: 14, stroke: "#181d27", strokeWidth: 2 })
                    ]
                  })
                ]
              }),
              (0, x.jsxs)("div", {
                children: [
                  (0, x.jsx)("div", { style: { fontFamily: "monospace", fontSize: 9, fontWeight: 800, color: "#181d27" }, children: "BOOSTER 04: 680 RPM RAMP" }),
                  (0, x.jsx)("div", { style: { fontFamily: "monospace", fontSize: 7.5, color: "#57534e" }, children: "FLUID VELOCITY: 2.11 m/s // J-104" })
                ]
              })
            ]
          }),
          (0, x.jsx)("div", {
            style: {
              fontFamily: "monospace",
              fontSize: 8,
              fontWeight: 800,
              color: "#15803d",
              background: "rgba(21,128,61,0.1)",
              border: "1px solid rgba(21,128,61,0.25)",
              padding: "4px 9px",
              borderRadius: 6
            },
            children: "PRV-02: 45% OPEN"
          })
        ]
      }),

      // Tier 4: Perfectly Bounded Dual-Curve Hydrodynamic Equilibrium Graph + Stepped Ramp Bars
      (0, x.jsxs)("div", {
        style: {
          background: "#efeae0",
          borderRadius: 14,
          border: "1px solid rgba(24,29,39,0.09)",
          padding: "12px 14px",
          display: "flex",
          flexDirection: "column",
          gap: 8
        },
        children: [
          (0, x.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 8, fontFamily: "monospace", fontWeight: 800 },
            children: [
              (0, x.jsxs)("div", {
                style: { display: "flex", gap: 10 },
                children: [
                  (0, x.jsx)("span", { style: { color: "#d95323" }, children: "● UNVERIFIED: 11.4B" }),
                  (0, x.jsx)("span", { style: { color: "#15803d" }, children: "● REPLANNED: 7.4B" })
                ]
              }),
              (0, x.jsxs)("span", { style: { color: "#181d27" }, children: ["T+", scrubT, "s // ", replannedP, " BAR"] })
            ]
          }),

          // Bounded Cubic Bezier SVG (Guaranteed Within 0..84 Y Range)
          (0, x.jsxs)("svg", {
            viewBox: "0 0 240 84",
            style: { width: "100%", height: 96, display: "block", overflow: "hidden" },
            children: [
              // 8.0 Bar Flange Ceiling Line
              (0, x.jsx)("line", { x1: 0, y1: 26, x2: 240, y2: 26, stroke: "rgba(217,83,35,0.5)", strokeDasharray: "3 3", strokeWidth: 1.2 }),
              (0, x.jsx)("text", { x: 236, y: 21, textAnchor: "end", fill: "#d95323", fontSize: 7, fontFamily: "monospace", fontWeight: 800, children: "8.0 BAR CEILING" }),
              (0, x.jsx)("line", { x1: 0, y1: 72, x2: 240, y2: 72, stroke: "rgba(24,29,39,0.1)", strokeWidth: 1 }),

              // Unverified Surge Curve (Cubic Bezier peaking cleanly at y=8, never overflowing!)
              (0, x.jsx)("path", {
                d: "M 0 68 C 35 68, 55 8, 82 8 C 110 8, 130 58, 175 60 C 205 61, 225 62, 240 62",
                fill: "none",
                stroke: "#d95323",
                strokeWidth: 2.2,
                strokeDasharray: "3 2"
              }),

              // Replanned Safe Curve (Cubic Bezier staying smoothly at y=40 beneath ceiling!)
              (0, x.jsx)("path", {
                d: "M 0 68 C 45 68, 75 40, 120 40 C 165 40, 200 42, 240 42",
                fill: "none",
                stroke: "#15803d",
                strokeWidth: 3
              }),

              // Interactive Scrubber Line & Node
              (0, x.jsx)("line", {
                x1: normX * 240,
                y1: 4,
                x2: normX * 240,
                y2: 76,
                stroke: "#181d27",
                strokeWidth: 1.2,
                strokeDasharray: "2 2"
              }),
              (0, x.jsx)("circle", {
                cx: normX * 240,
                cy: 40,
                r: 4.5,
                fill: "#15803d",
                stroke: "#ffffff",
                strokeWidth: 1.5
              })
            ]
          })
        ]
      }),

      // Tier 5: Bottom Status Pill
      (0, x.jsxs)("div", {
        style: {
          background: "#181d27",
          borderRadius: 10,
          padding: "9px 14px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        },
        children: [
          (0, x.jsx)("span", { style: { fontSize: 8.5, fontFamily: "monospace", color: "#faf8f5", fontWeight: 800 }, children: "✓ 60s STAGED VALVE RAMP COMMITTED" }),
          (0, x.jsx)("span", { style: { fontSize: 8.5, fontFamily: "monospace", color: "#d95323", fontWeight: 800 }, children: "ZERO SURGE →" })
        ]
      })
    ]
  });
}

// ==========================================
// CINEMATIC ATMOSPHERE & SCADA SYNTHESIZER
// ==========================================
export function CinematicAtmosphere() {
  let canvasRef = (0, o.useRef)(null);
  let [audioEnabled, setAudioEnabled] = (0, o.useState)(false);
  let [scrollProgress, setScrollProgress] = (0, o.useState)(0);
  let audioCtxRef = (0, o.useRef)(null);

  // Sound synthesis function
  let playBlip = (freq = 880, dur = 0.035, type = "sine") => {
    if (!audioEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      let ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();
      let osc = ctx.createOscillator();
      let gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + dur);
    } catch {}
  };

  // Wire subtle global interaction clicks when audio is enabled
  (0, o.useEffect)(() => {
    let onClick = (e) => {
      let target = e.target.closest("button, a, [role='button'], input");
      if (target) playBlip(1200, 0.04, "triangle");
    };
    window.addEventListener("click", onClick, { passive: true });
    return () => window.removeEventListener("click", onClick);
  }, [audioEnabled]);

  // Track scroll progress for hairline progress line
  (0, o.useEffect)(() => {
    let onScroll = () => {
      let h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) setScrollProgress(window.scrollY / h);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Canvas particle & fluid wave loop
  (0, o.useEffect)(() => {
    let canvas = canvasRef.current;
    if (!canvas) return;
    let ctx = canvas.getContext("2d");
    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize, { passive: true });

    let mouseX = width / 2;
    let mouseY = height / 2;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    let onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let onScroll = () => {
      let sy = window.scrollY;
      scrollVelocity = Math.min(25, Math.abs(sy - lastScrollY));
      lastScrollY = sy;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Generate telemetry particles
    let count = Math.min(48, Math.floor(width / 32));
    let particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      rad: Math.random() * 1.6 + 0.8,
      alpha: Math.random() * 0.4 + 0.15,
      hue: Math.random() > 0.6 ? 24 : 198
    }));

    let frame = 0;
    let render = () => {
      frame++;
      scrollVelocity *= 0.94;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle undulating hydrodynamic waveforms
      let waveCount = 3;
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        let baseY = height * (0.25 + w * 0.28);
        ctx.moveTo(0, baseY);
        for (let x = 0; x <= width; x += 40) {
          let distMouse = Math.abs(x - mouseX) / width;
          let mouseInfluence = Math.max(0, 1 - distMouse * 2.5) * (mouseY - baseY) * 0.12;
          let waveY = baseY + Math.sin(frame * 0.012 + x * 0.003 + w * 1.5) * (14 + scrollVelocity * 1.2) + mouseInfluence;
          ctx.lineTo(x, waveY);
        }
        ctx.strokeStyle = w === 1 ? "rgba(217, 83, 35, 0.045)" : "rgba(56, 189, 248, 0.035)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw vector particles
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Subtle mouse repulsion
        let dx = p.x - mouseX;
        let dy = p.y - mouseY;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140 && dist > 1) {
          p.x += (dx / dist) * 1.2;
          p.y += (dy / dist) * 1.2;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.rad, 0, Math.PI * 2);
        ctx.fillStyle = p.hue === 24 ? `rgba(217, 83, 35, ${p.alpha * 0.6})` : `rgba(56, 189, 248, ${p.alpha * 0.5})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };
    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (0, x.jsxs)(x.Fragment, {
    children: [
      // 1. Hairline Scroll Progress Bar along top edge
      (0, x.jsx)("div", {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: `${scrollProgress * 100}%`,
          height: 2.5,
          background: "linear-gradient(90deg, #d95323, #ff8c5a)",
          zIndex: 10003,
          pointerEvents: "none",
          boxShadow: "0 0 8px rgba(217,83,35,0.7)",
          transition: "width 0.1s linear"
        }
      }),

      // 2. Micro-Film Grain Filter Overlay
      (0, x.jsx)("div", {
        style: {
          position: "fixed",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 50% 50%, transparent 80%, rgba(0,0,0,0.18)), url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\" opacity=\"0.03\"/%3E%3C/svg%3E')",
          pointerEvents: "none",
          zIndex: 99990,
          opacity: 0.8
        }
      }),

      // 3. Cyber-Physical Fluid Wave Energy Canvas
      (0, x.jsx)("canvas", {
        ref: canvasRef,
        style: {
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.75
        }
      }),

      // 4. SCADA Audio Synthesizer Control Pill (Floating in bottom-left)
      (0, x.jsxs)("button", {
        onClick: () => {
          setAudioEnabled(!audioEnabled);
          if (!audioEnabled) playBlip(1760, 0.06, "sine");
        },
        "data-cursor-stick": true,
        style: {
          position: "fixed",
          bottom: 24,
          left: 28,
          zIndex: 10000,
          background: audioEnabled ? "rgba(16, 185, 129, 0.15)" : "rgba(255, 255, 255, 0.75)",
          border: audioEnabled ? "1px solid rgba(16, 185, 129, 0.5)" : "1px solid rgba(0, 0, 0, 0.12)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: 100,
          padding: "6px 14px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          transition: "all 0.25s ease"
        },
        children: [
          (0, x.jsxs)("div", {
            style: { display: "flex", alignItems: "flex-end", gap: 2, height: 12 },
            children: [
              (0, x.jsx)("span", { style: { width: 2.5, height: audioEnabled ? 11 : 4, background: audioEnabled ? "#10b981" : "#7c766c", borderRadius: 1, transition: "height 0.2s ease" } }),
              (0, x.jsx)("span", { style: { width: 2.5, height: audioEnabled ? 8 : 4, background: audioEnabled ? "#10b981" : "#7c766c", borderRadius: 1, transition: "height 0.3s ease" } }),
              (0, x.jsx)("span", { style: { width: 2.5, height: audioEnabled ? 12 : 4, background: audioEnabled ? "#10b981" : "#7c766c", borderRadius: 1, transition: "height 0.15s ease" } })
            ]
          }),
          (0, x.jsx)("span", {
            style: {
              fontFamily: "monospace",
              fontSize: 9.5,
              fontWeight: 800,
              letterSpacing: "0.08em",
              color: audioEnabled ? "#059669" : "#545b67"
            },
            children: audioEnabled ? "TELEMETRY AUDIO: ON" : "AUDIO: MUTED"
          })
        ]
      })
    ]
  });
}

