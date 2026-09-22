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
      background: "linear-gradient(180deg, #090c12 0%, #05070a 100%)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "10px 9px 8px",
      boxSizing: "border-box",
      borderRadius: 14,
      fontFamily: L,
      overflow: "hidden",
      position: "relative",
      boxShadow: "inset 0 0 24px rgba(0,0,0,0.8)"
    },
    children: [
      // Ambient scanline overlay
      (0, x.jsx)("div", {
        style: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)",
          backgroundSize: "100% 3px",
          pointerEvents: "none",
          zIndex: 4,
          opacity: 0.35
        }
      }),

      // Ambient Laser sweep line
      (0, x.jsx)("div", {
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg, transparent, rgba(217,83,35,0.6), transparent)",
          top: `${(tick % 240) / 240 * 100}%`,
          pointerEvents: "none",
          zIndex: 5,
          opacity: 0.6
        }
      }),

      // Top Header HUD
      (0, x.jsxs)("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 7.5,
          color: "#98a2b3",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          paddingBottom: 5,
          zIndex: 6
        },
        children: [
          (0, x.jsxs)("span", {
            style: { display: "flex", alignItems: "center", gap: 4, fontWeight: 700, letterSpacing: "0.05em" },
            children: [
              (0, x.jsx)("span", {
                style: {
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: activePhase === 3 ? "#ef4444" : "#10b981",
                  boxShadow: `0 0 6px ${activePhase === 3 ? "#ef4444" : "#10b981"}`
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
              background: "rgba(255,255,255,0.06)",
              padding: "1px 5px",
              borderRadius: 4
            },
            children: ["STAGE 0", activePhase + 1, "/05"]
          })
        ]
      }),

      // 5 Interactive Stage Selector Pills
      (0, x.jsx)("div", {
        style: { display: "flex", gap: 3, margin: "4px 0", zIndex: 6 },
        children: [0, 1, 2, 3, 4].map((idx) => (
          (0, x.jsx)("div", {
            key: idx,
            onClick: () => { setActivePhase(idx); setIsInteracting(true); },
            style: {
              flex: 1,
              height: 3,
              borderRadius: 2,
              background: activePhase === idx ? phases[idx].color : "rgba(255,255,255,0.15)",
              boxShadow: activePhase === idx ? `0 0 6px ${phases[idx].color}80` : "none",
              cursor: "pointer",
              transition: "all 0.25s ease"
            }
          })
        ))
      }),

      // Dynamic Stage Body Container
      (0, x.jsxs)("div", {
        style: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "rgba(255,255,255,0.025)",
          borderRadius: 10,
          padding: "7px 8px",
          border: "1px solid rgba(255,255,255,0.06)",
          position: "relative",
          zIndex: 6,
          overflow: "hidden"
        },
        children: [
          // Stage Title Bar
          (0, x.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 },
            children: [
              (0, x.jsx)("span", {
                style: { fontSize: 8, fontWeight: 800, color: phases[activePhase].color, letterSpacing: "0.06em", fontFamily: "monospace" },
                children: phases[activePhase].title
              }),
              (0, x.jsx)("span", {
                style: {
                  fontSize: 7,
                  background: `${phases[activePhase].color}20`,
                  color: phases[activePhase].color,
                  border: `1px solid ${phases[activePhase].color}40`,
                  padding: "1px 4px",
                  borderRadius: 3,
                  fontWeight: 700,
                  fontFamily: "monospace"
                },
                children: phases[activePhase].badge
              })
            ]
          }),

          // STAGE 0: Live Voiceprint Forensic Intercept
          activePhase === 0 && (0, x.jsxs)("div", {
            style: { display: "flex", flexDirection: "column", gap: 4 },
            children: [
              (0, x.jsxs)("div", {
                style: { fontSize: 8.5, fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", gap: 4 },
                children: [
                  (0, x.jsx)("span", { style: { width: 4, height: 4, borderRadius: "50%", background: "#f59e0b" } }),
                  "Voice Clone Intercepted"
                ]
              }),
              (0, x.jsx)("div", {
                style: { fontSize: 7, color: "#94a3b8", lineHeight: 1.25, background: "rgba(0,0,0,0.4)", padding: "4px 6px", borderRadius: 4, borderLeft: "2px solid #f59e0b" },
                children: '"Urgent Miller! Ramp Booster Pump 4 to 850 RPM immediately!"'
              }),

              // Living Dynamic Audio Oscilloscope
              (0, x.jsx)("div", {
                style: {
                  height: 28,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                  padding: "2px 4px",
                  background: "rgba(0,0,0,0.6)",
                  borderRadius: 6,
                  border: "1px solid rgba(245,158,11,0.2)"
                },
                children: Array.from({ length: 22 }).map((_, i) => {
                  let barH = 5 + Math.abs(Math.sin(tick * 0.15 + i * 0.45)) * 18;
                  let isAlert = i >= 8 && i <= 14;
                  return (0, x.jsx)("div", {
                    key: i,
                    style: {
                      flex: 1,
                      height: `${barH}px`,
                      background: isAlert ? "#ef4444" : "#f59e0b",
                      borderRadius: 1.5,
                      boxShadow: isAlert ? "0 0 4px #ef4444" : "none",
                      transition: "height 0.08s ease"
                    }
                  });
                })
              }),

              (0, x.jsxs)("div", {
                style: { fontSize: 7, color: "#f87171", fontWeight: 700, display: "flex", justifyContent: "space-between", fontFamily: "monospace" },
                children: [
                  (0, x.jsx)("span", { children: "SPECTRAL MATCH: 71%" }),
                  (0, x.jsx)("span", { children: "ROSTER: OFFLINE" })
                ]
              })
            ]
          }),

          // STAGE 1: Snapdragon 8 Elite NPU Decompilation
          activePhase === 1 && (0, x.jsxs)("div", {
            style: { display: "flex", flexDirection: "column", gap: 3 },
            children: [
              (0, x.jsxs)("div", {
                style: { fontSize: 8.5, fontWeight: 700, color: "#38bdf8", display: "flex", justifyContent: "space-between" },
                children: [
                  (0, x.jsx)("span", { children: "Snapdragon NPU 45 TOPS" }),
                  (0, x.jsx)("span", { style: { color: "#10b981", fontFamily: "monospace" }, children: "18.4ms" })
                ]
              }),
              (0, x.jsx)("div", {
                style: { fontSize: 7, color: "#94a3b8" },
                children: "Compiling spoken speech to PLC register writes:"
              }),
              (0, x.jsxs)("div", {
                style: {
                  background: "#000",
                  padding: "5px 6px",
                  borderRadius: 5,
                  fontFamily: "monospace",
                  fontSize: 7,
                  color: "#38bdf8",
                  border: "1px solid rgba(56,189,248,0.25)",
                  lineHeight: 1.4
                },
                children: [
                  (0, x.jsxs)("div", { style: { color: "#94a3b8" }, children: [">> TARGET: ", (0, x.jsx)("span", { style: { color: "#fff" }, children: "STATION_04_PLC" })] }),
                  (0, x.jsxs)("div", { style: { color: "#fbbf24" }, children: [">> REG: ", (0, x.jsx)("span", { style: { color: "#34d399" }, children: "HOLDING_40012 := 850" })] }),
                  (0, x.jsxs)("div", { style: { color: "#a78bfa" }, children: [">> HEX: ", (0, x.jsx)("span", { children: "0x01 0x06 0x9C 0x2C 0x03 0x52" })] }),
                  (0, x.jsx)("div", { style: { color: "#10b981", marginTop: 2, fontWeight: 700 }, children: "✓ PARSED IN 18ms (AIR-GAPPED)" })
                ]
              })
            ]
          }),

          // STAGE 2: Deterministic Cyber Gate
          activePhase === 2 && (0, x.jsxs)("div", {
            style: { display: "flex", flexDirection: "column", gap: 3 },
            children: [
              (0, x.jsx)("div", { style: { fontSize: 8.5, fontWeight: 700, color: "#fff" }, children: "IT/OT Firewall Paradox" }),
              (0, x.jsx)("div", { style: { fontSize: 7, color: "#94a3b8" }, children: "Standard firewall permits command blindly:" }),
              (0, x.jsxs)("div", {
                style: { background: "rgba(16,185,129,0.08)", padding: "5px 6px", borderRadius: 5, border: "1px solid rgba(16,185,129,0.25)", fontSize: 7, lineHeight: 1.4 },
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
            style: { display: "flex", flexDirection: "column", gap: 3 },
            children: [
              (0, x.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-between", alignItems: "center" },
                children: [
                  (0, x.jsx)("div", { style: { fontSize: 8.5, fontWeight: 800, color: "#ef4444" }, children: "11.4 Bar Catastrophe!" }),
                  (0, x.jsx)("div", { style: { fontSize: 7, color: "#ef4444", background: "rgba(239,68,68,0.2)", padding: "1px 4px", borderRadius: 3, fontWeight: 800 }, children: "BLOWOUT" })
                ]
              }),
              (0, x.jsx)("div", { style: { fontSize: 7, color: "#94a3b8", lineHeight: 1.25 }, children: "Relief Valve closed. 850 RPM induces severe water hammer:" }),
              (0, x.jsxs)("div", {
                style: { background: "rgba(239,68,68,0.15)", padding: "5px 6px", borderRadius: 5, border: "1px solid rgba(239,68,68,0.35)", fontSize: 7, lineHeight: 1.35 },
                children: [
                  (0, x.jsxs)("div", { style: { color: "#f87171", fontWeight: 800, fontSize: 8 }, children: ["SIMULATED SURGE: 11.4 BAR"] }),
                  (0, x.jsx)("div", { style: { color: "#cbd5e1" }, children: "Flange Safety Ceiling: 9.2 BAR" }),
                  (0, x.jsx)("div", { style: { color: "#ef4444", fontWeight: 800, marginTop: 2 }, children: "⛔ TWIN HARD REJECT: VALVE BLOWN" })
                ]
              })
            ]
          }),

          // STAGE 4: Autonomous Replan & Biometric Enclave
          activePhase === 4 && (0, x.jsxs)("div", {
            style: { display: "flex", flexDirection: "column", gap: 3 },
            children: [
              (0, x.jsx)("div", { style: { fontSize: 8.5, fontWeight: 800, color: "#10b981" }, children: "Autonomous Replan Synthesized" }),
              (0, x.jsx)("div", { style: { fontSize: 7, color: "#94a3b8", lineHeight: 1.25 }, children: "Pre-open Valve 02 to 40%, ramp Pump 4 over 60s:" }),
              (0, x.jsxs)("div", {
                style: { background: "rgba(16,185,129,0.12)", padding: "5px 6px", borderRadius: 5, border: "1px solid rgba(16,185,129,0.3)", fontSize: 7, lineHeight: 1.35 },
                children: [
                  (0, x.jsx)("div", { style: { color: "#34d399", fontWeight: 800, fontSize: 8 }, children: "✓ REPLANNED PEAK: 7.4 BAR (SAFE)" }),
                  (0, x.jsx)("div", { style: { color: "#cbd5e1" }, children: "Zero kinetic water hammer. Flange preserved." }),
                  (0, x.jsx)("div", { style: { color: "#38bdf8", fontWeight: 700, marginTop: 2 }, children: "🛡️ TEE KEY 0x8F92 CRYPTO SIGNED" })
                ]
              })
            ]
          }),

          // Bottom Action Stepper Button
          (0, x.jsx)("button", {
            onClick: () => {
              setActivePhase((p) => (p + 1) % 5);
              setIsInteracting(true);
            },
            style: {
              background: phases[activePhase].color,
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "5px 8px",
              fontSize: 7.5,
              fontWeight: 800,
              cursor: "pointer",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              fontFamily: I,
              letterSpacing: "0.04em",
              boxShadow: `0 2px 8px ${phases[activePhase].color}40`,
              transition: "all 0.2s ease",
              marginTop: 4
            },
            children: [
              activePhase === 0 && "STEP 02: NPU INFERENCE →",
              activePhase === 1 && "STEP 03: CYBER CHECK →",
              activePhase === 2 && "STEP 04: RUN EPANET TWIN →",
              activePhase === 3 && "STEP 05: AUTO-REPLAN →",
              activePhase === 4 && "✓ ACTION SIGNED & COMMITTED"
            ]
          })
        ]
      })
    ]
  });
}


// 2. The 3D Popping-Up Cards Component (Next-Level Tactical Telemetry HUDs)
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
      flagColor: "#f59e0b",
      flagBg: "rgba(245, 158, 11, 0.15)",
      sub: "CELLULAR INGESTION // VOICE BIOMETRICS",
      title: "SPOOFED AUTHORITY DISPATCH",
      desc: "Deepfake voice clone detected with 71% spectral similarity. Duty roster indicates Supervisor Reynolds is offline on annual leave.",
      status: "STATUS: QUARANTINED",
      statusColor: "#f59e0b",
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
      flagColor: "#10b981",
      flagBg: "rgba(16, 185, 129, 0.15)",
      sub: "DETERMINISTIC SCADA GATE // MODBUS TCP",
      title: "THE KINETIC PARADOX",
      desc: "Standard firewall permits command. Modbus CRC 0x9B4E matches, register 40012 accessible. Physical consequences remain unchecked.",
      status: "CYBER RESULT: APPROVED (BLIND)",
      statusColor: "#10b981",
      pills: [
        { label: "PROTOCOL", value: "Modbus TCP" },
        { label: "REGISTER", value: "HR_40012" },
        { label: "FIREWALL", value: "Approved (Blind)" }
      ],
      type: "modbus"
    },
    {
      tier: "TIER 04 // PHYSICAL TWIN",
      flag: "11.4 BAR // HARD REJECT",
      flagColor: "#ef4444",
      flagBg: "rgba(239, 68, 68, 0.15)",
      sub: "EPANET 2.2 / WNTR DYNAMIC TWIN",
      title: "OVERPRESSURE SURGE PREDICTED",
      desc: "Relief Valve 02 is closed (0%). Forward kinetic simulation calculates 11.4 bar shockwave at Node 14 (safety ceiling: 9.2 bar). Action halted!",
      status: "PHYSICAL SAFETY: REJECTED",
      statusColor: "#ef4444",
      pills: [
        { label: "PEAK SURGE", value: "11.4 Bar" },
        { label: "LIMIT", value: "9.2 Bar" },
        { label: "VERDICT", value: "Hard Reject" }
      ],
      type: "hydro"
    }
  ];

  const c = cards[index % cards.length];

  return (0, x.jsxs)("div", {
    style: {
      width: "100%",
      height: "100%",
      background: "linear-gradient(145deg, #0e131d 0%, #080b11 100%)",
      color: "#fff",
      padding: 18,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxSizing: "border-box",
      borderRadius: 16,
      border: `1px solid ${isHovered ? c.flagColor : "rgba(255, 255, 255, 0.1)"}`,
      fontFamily: L,
      position: "relative",
      overflow: "hidden",
      boxShadow: isHovered ? `0 20px 50px rgba(0,0,0,0.5), 0 0 20px ${c.flagColor}30` : "0 16px 40px rgba(0,0,0,0.35)",
      transition: "border 0.3s ease, box-shadow 0.3s ease"
    },
    children: [
      // Top row
      (0, x.jsxs)("div", {
        children: [
          (0, x.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
            children: [
              (0, x.jsx)("span", {
                style: {
                  fontFamily: "monospace",
                  fontSize: 9.5,
                  fontWeight: 800,
                  color: "#cbd5e1",
                  background: "rgba(255,255,255,0.06)",
                  padding: "3px 8px",
                  borderRadius: 100,
                  border: "1px solid rgba(255,255,255,0.08)"
                },
                children: c.tier
              }),
              (0, x.jsx)("span", {
                style: {
                  fontFamily: "monospace",
                  fontSize: 9,
                  fontWeight: 800,
                  color: c.flagColor,
                  background: c.flagBg,
                  padding: "3px 8px",
                  borderRadius: 100,
                  border: `1px solid ${c.flagColor}40`
                },
                children: c.flag
              })
            ]
          }),

          // Sub & Title
          (0, x.jsx)("div", { style: { fontSize: 9.5, fontFamily: "monospace", fontWeight: 800, color: R, letterSpacing: "0.08em", marginBottom: 3 }, children: c.sub }),
          (0, x.jsx)("h3", {
            style: { fontFamily: F, fontSize: 17, fontWeight: 700, color: "#fff", margin: "0 0 6px", lineHeight: 1.2 },
            children: c.title
          }),
          (0, x.jsx)("p", {
            style: { fontSize: 11, color: "#94a3b8", lineHeight: 1.45, margin: 0 },
            children: c.desc
          })
        ]
      }),

      // Animated Industrial Telemetry Visual in Center
      (0, x.jsxs)("div", {
        style: {
          height: 88,
          background: "rgba(0,0,0,0.6)",
          borderRadius: 10,
          border: "1px solid rgba(255,255,255,0.08)",
          margin: "8px 0",
          padding: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden"
        },
        children: [
          // Ambient grid
          (0, x.jsx)("div", {
            style: {
              position: "absolute",
              inset: 0,
              backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
              pointerEvents: "none"
            }
          }),

          // Visual 1: Acoustic Spectrogram
          c.type === "acoustic" && (0, x.jsxs)("div", {
            style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", zIndex: 2 },
            children: [
              (0, x.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-between", fontSize: 8, fontFamily: "monospace", color: "#f59e0b" },
                children: [
                  (0, x.jsx)("span", { children: "VOICEPRINT SPECTROGRAM" }),
                  (0, x.jsx)("span", { children: "ALERT // CLONE DETECTED" })
                ]
              }),
              (0, x.jsx)("div", {
                style: { display: "flex", alignItems: "flex-end", gap: 3, height: 42, padding: "0 4px" },
                children: Array.from({ length: 18 }).map((_, i) => {
                  let h = 8 + Math.abs(Math.sin(tick * 0.12 + i * 0.5)) * 30;
                  let isAlert = i >= 6 && i <= 12;
                  return (0, x.jsx)("div", {
                    key: i,
                    style: {
                      flex: 1,
                      height: `${h}px`,
                      background: isAlert ? "#ef4444" : "#f59e0b",
                      borderRadius: 2,
                      boxShadow: isAlert ? "0 0 6px #ef4444" : "none"
                    }
                  });
                })
              }),
              (0, x.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-between", fontSize: 7.5, fontFamily: "monospace", color: "#cbd5e1" },
                children: [
                  (0, x.jsx)("span", { children: "MATCH: 71.4%" }),
                  (0, x.jsx)("span", { style: { color: "#f87171" }, children: "ANOMALY: 8.9 SIGMA" })
                ]
              })
            ]
          }),

          // Visual 2: Modbus TCP Frame Inspection
          c.type === "modbus" && (0, x.jsxs)("div", {
            style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", zIndex: 2 },
            children: [
              (0, x.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-between", fontSize: 8, fontFamily: "monospace", color: "#38bdf8" },
                children: [
                  (0, x.jsx)("span", { children: "MODBUS TCP FRAME [PORT 502]" }),
                  (0, x.jsx)("span", { style: { color: "#10b981" }, children: "CRC VALID: 0x9B4E" })
                ]
              }),
              (0, x.jsxs)("div", {
                style: { background: "#000", padding: "4px 8px", borderRadius: 4, fontFamily: "monospace", fontSize: 8, color: "#38bdf8", border: "1px solid rgba(56,189,248,0.2)" },
                children: [
                  (0, x.jsx)("div", { children: "HEX: 00 01 00 00 00 06 01 06 9C 2C 03 52" }),
                  (0, x.jsx)("div", { style: { color: "#fbbf24" }, children: "WRITE_HOLDING_REG(40012) -> 850 RPM" })
                ]
              }),
              (0, x.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-between", fontSize: 7.5, fontFamily: "monospace", color: "#cbd5e1" },
                children: [
                  (0, x.jsx)("span", { style: { color: "#10b981" }, children: "FIREWALL: PERMITTED" }),
                  (0, x.jsx)("span", { style: { color: "#ef4444", fontWeight: 700 }, children: "PHYSICAL TWIN: PENDING" })
                ]
              })
            ]
          }),

          // Visual 3: EPANET Hydrodynamic Pipe Surge
          c.type === "hydro" && (0, x.jsxs)("div", {
            style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", zIndex: 2 },
            children: [
              (0, x.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-between", fontSize: 8, fontFamily: "monospace", color: "#ef4444" },
                children: [
                  (0, x.jsx)("span", { children: "EPANET KINETIC SOLVER" }),
                  (0, x.jsx)("span", { style: { background: "rgba(239,68,68,0.2)", padding: "1px 4px", borderRadius: 3, fontWeight: 800 }, children: "11.4 BAR SURGE" })
                ]
              }),
              (0, x.jsxs)("svg", {
                viewBox: "0 0 240 40",
                style: { width: "100%", height: 36 },
                children: [
                  // Safety ceiling line
                  (0, x.jsx)("line", { x1: 0, y1: 18, x2: 240, y2: 18, stroke: "#ef4444", strokeDasharray: "3 3", strokeWidth: 1 }),
                  // Surge wave
                  (0, x.jsx)("path", {
                    d: "M 0 32 Q 50 32 80 4 T 140 28 T 240 30",
                    fill: "none",
                    stroke: "#ef4444",
                    strokeWidth: 2,
                    style: { filter: "drop-shadow(0 0 4px #ef4444)" }
                  }),
                  // Safe trajectory
                  (0, x.jsx)("path", {
                    d: "M 0 32 Q 60 32 120 22 T 240 22",
                    fill: "none",
                    stroke: "#10b981",
                    strokeWidth: 2,
                    style: { filter: "drop-shadow(0 0 4px #10b981)" }
                  })
                ]
              }),
              (0, x.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-between", fontSize: 7.5, fontFamily: "monospace", color: "#cbd5e1" },
                children: [
                  (0, x.jsx)("span", { style: { color: "#ef4444" }, children: "BURST: 11.4 BAR" }),
                  (0, x.jsx)("span", { style: { color: "#10b981" }, children: "REPLANNED: 7.4 BAR" })
                ]
              })
            ]
          })
        ]
      }),

      // Bottom Row: Telemetry Pills
      (0, x.jsxs)("div", {
        children: [
          (0, x.jsx)("div", {
            style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginBottom: 8 },
            children: c.pills.map((pill, idx) => (
              (0, x.jsxs)("div", {
                key: idx,
                style: {
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 6,
                  padding: "4px 6px",
                  textAlign: "center"
                },
                children: [
                  (0, x.jsx)("div", { style: { fontSize: 7.5, color: "#64748b", fontFamily: "monospace", textTransform: "uppercase" }, children: pill.label }),
                  (0, x.jsx)("div", { style: { fontSize: 8.5, fontWeight: 700, color: "#fff", fontFamily: "monospace", marginTop: 1 }, children: pill.value })
                ]
              })
            ))
          }),
          (0, x.jsxs)("div", {
            style: {
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 8,
              padding: "6px 10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [
              (0, x.jsx)("span", { style: { fontSize: 8.5, fontWeight: 800, color: c.statusColor, fontFamily: "monospace" }, children: c.status }),
              (0, x.jsx)("span", { style: { fontSize: 8.5, color: "#cbd5e1", fontWeight: 700 }, children: "SENTINEL-K VERIFIED →" })
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

          // Main Simulator Cockpit
          (0, x.jsxs)("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 28,
              background: V,
              borderRadius: 24,
              padding: "clamp(24px, 4vw, 44px)",
              color: "#fff",
              boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
              border: "1px solid rgba(255,255,255,0.08)",
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
                    children: [
                      (0, x.jsxs)("div", {
                        style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: I, fontSize: 13, color: "#98a2b3", marginBottom: 8 },
                        children: [
                          (0, x.jsx)("span", { children: "PUMP SPEED (BOOSTER 04)" }),
                          (0, x.jsxs)("span", { style: { color: R, fontWeight: 800, fontFamily: "monospace", fontSize: 15 }, children: [rpm, " RPM"] })
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
                          accentColor: R,
                          cursor: "pointer",
                          borderRadius: 4
                        }
                      }),
                      (0, x.jsxs)("div", {
                        style: { display: "flex", justifyContent: "space-between", fontSize: 10, color: "#64748b", fontFamily: "monospace", marginTop: 4 },
                        children: [(0, x.jsx)("span", { children: "0 RPM (IDLE)" }), (0, x.jsx)("span", { children: "600 RPM" }), (0, x.jsx)("span", { children: "1,200 RPM (MAX)" })]
                      })
                    ]
                  }),

                  // Valve Slider
                  (0, x.jsxs)("div", {
                    children: [
                      (0, x.jsxs)("div", {
                        style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: I, fontSize: 13, color: "#98a2b3", marginBottom: 8 },
                        children: [
                          (0, x.jsx)("span", { children: "RELIEF VALVE APERTURE (RV-02)" }),
                          (0, x.jsxs)("span", { style: { color: valve < 15 ? "#ef4444" : "#10b981", fontWeight: 800, fontFamily: "monospace", fontSize: 15 }, children: [valve, "%"] })
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
                          accentColor: valve < 15 ? "#ef4444" : "#10b981",
                          cursor: "pointer",
                          borderRadius: 4
                        }
                      }),
                      (0, x.jsxs)("div", {
                        style: { display: "flex", justifyContent: "space-between", fontSize: 10, color: "#64748b", fontFamily: "monospace", marginTop: 4 },
                        children: [
                          (0, x.jsx)("span", { style: { color: "#ef4444" }, children: "0% (BLOCKED - DANGER)" }),
                          (0, x.jsx)("span", { children: "50%" }),
                          (0, x.jsx)("span", { style: { color: "#10b981" }, children: "100% (FULL BYPASS)" })
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
                        style: { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "10px 12px" },
                        children: [
                          (0, x.jsx)("div", { style: { fontSize: 10, color: "#64748b", fontFamily: "monospace", textTransform: "uppercase" }, children: m.label }),
                          (0, x.jsx)("div", { style: { fontSize: 14, fontWeight: 800, color: "#cbd5e1", fontFamily: "monospace", marginTop: 2 }, children: m.val })
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
                      background: isBreach ? "rgba(239,68,68,0.12)" : "rgba(16,185,129,0.1)",
                      border: `1px solid ${isBreach ? "rgba(239,68,68,0.3)" : "rgba(16,185,129,0.3)"}`,
                      borderRadius: 16,
                      padding: 20,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    },
                    children: [
                      (0, x.jsxs)("div", {
                        children: [
                          (0, x.jsx)("div", { style: { fontSize: 11, fontFamily: "monospace", color: isBreach ? "#f87171" : "#34d399", fontWeight: 700 }, children: isBreach ? "CRITICAL BURST DETECTED" : "HYDRODYNAMIC STABILITY PASS" }),
                          (0, x.jsxs)("div", { style: { fontSize: "clamp(28px, 4vw, 44px)", fontFamily: F, fontWeight: 700, color: isBreach ? "#ef4444" : "#10b981", lineHeight: 1.1, margin: "4px 0" }, children: [calculatedPressure, " BAR"] }),
                          (0, x.jsx)("div", { style: { fontSize: 11, color: "#94a3b8" }, children: "Safety ceiling threshold: 8.0 BAR" })
                        ]
                      }),
                      (0, x.jsxs)("div", {
                        style: {
                          background: isBreach ? "#ef4444" : "#10b981",
                          color: "#fff",
                          padding: "10px 16px",
                          borderRadius: 100,
                          fontSize: 12,
                          fontWeight: 800,
                          fontFamily: I,
                          letterSpacing: "0.05em",
                          boxShadow: `0 8px 24px ${isBreach ? "#ef444460" : "#10b98160"}`
                        },
                        children: [isBreach ? "⛔ HARD REJECT" : "✓ SAFE TO COMMIT"]
                      })
                    ]
                  }),

                  // Dynamic Joukowsky Shockwave Visual
                  (0, x.jsxs)("div", {
                    style: {
                      background: "rgba(0,0,0,0.5)",
                      borderRadius: 16,
                      border: "1px solid rgba(255,255,255,0.06)",
                      padding: 16,
                      position: "relative",
                      height: 150
                    },
                    children: [
                      (0, x.jsxs)("svg", {
                        viewBox: "0 0 400 120",
                        style: { width: "100%", height: "100%" },
                        children: [
                          // 8.0 Bar Limit line
                          (0, x.jsx)("line", { x1: 0, y1: 45, x2: 400, y2: 45, stroke: "#ef4444", strokeDasharray: "4 4", strokeWidth: 1.5 }),
                          (0, x.jsx)("text", { x: 395, y: 40, textAnchor: "end", fill: "#ef4444", fontSize: 9, fontFamily: "monospace", children: "8.0 BAR BURST LIMIT" }),

                          // Dynamic curve based on calculatedPressure
                          (0, x.jsx)("path", {
                            d: `M 0 95 Q 100 95 180 ${Math.max(10, 110 - calculatedPressure * 8.5)} T 300 ${Math.max(25, 95 - calculatedPressure * 4)} T 400 ${Math.max(30, 95 - calculatedPressure * 5)}`,
                            fill: "none",
                            stroke: isBreach ? "#ef4444" : "#10b981",
                            strokeWidth: 3,
                            style: { filter: `drop-shadow(0 0 8px ${isBreach ? "#ef4444" : "#10b981"})` }
                          })
                        ]
                      }),
                      isCavitation && (0, x.jsx)("div", {
                        style: {
                          position: "absolute",
                          bottom: 12,
                          left: 16,
                          background: "rgba(245,158,11,0.2)",
                          border: "1px solid rgba(245,158,11,0.4)",
                          color: "#fbbf24",
                          padding: "4px 8px",
                          borderRadius: 6,
                          fontSize: 9.5,
                          fontFamily: "monospace",
                          fontWeight: 700
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


// 4. Multi-Agent Bento Grid Component
export function AgentBentoSection() {
  let [activeAgent, setActiveAgent] = (0, o.useState)(0);

  const agents = [
    {
      role: `Acoustic Forensics`,
      engine: `Whisper-v3 + Silero VAD`,
      target: `Snapdragon NPU Hexagon DSP`,
      latency: `142ms`,
      desc: `Triage dispatcher voice feeds, radio calls, and phone instructions. Identifies deepfake voice cloning, artificial cadence, and panic markers.`,
      status: `ACTIVE`
    },
    {
      role: `SCADA Sentinel`,
      engine: `Z3 SMT Formal Prover`,
      target: `OpenPLC v3 / Modbus TCP`,
      latency: `48ms`,
      desc: `Decompiles operator commands into target PLC holding registers (%QW104). Formally verifies safety boundaries and interlocks before single-coil write.`,
      status: `VALIDATED`
    },
    {
      role: `Hydraulic Twin`,
      engine: `EPANET 2.2 / WNTR`,
      target: `Physical Consequence Engine`,
      latency: `185ms`,
      desc: `Executes 4th-order Runge-Kutta simulation of fluid velocity and pressure heads. Forecasts water hammer shockwaves before valves actuate.`,
      status: `ONLINE`
    },
    {
      role: `Swarm Planner`,
      engine: `LangGraph Multi-Agent`,
      target: `Staged Ramp Engine`,
      latency: `210ms`,
      desc: `When an instruction is physically dangerous, generates safe alternative ramp schedules (e.g. 45-second stepped valve opening).`,
      status: `READY`
    },
    {
      role: `Sovereign Gatekeeper`,
      engine: `Android TEE / TrustZone`,
      target: `Hardware Biometric Enclave`,
      latency: `32ms`,
      desc: `Requires physical biometric operator sign-off before releasing signed ED25519 execution tokens to the control network.`,
      status: `ENFORCED`
    }
  ];

  return (0, x.jsxs)(`section`, {
    id: `agents`,
    "data-section": `agents`,
    style: { background: `#f2f3f5`, paddingBottom: 80 },
    children: [
      (0, x.jsx)(Bridge, { number: `06`, tag: `DISTRIBUTED AGENTS // SNAPDRAGON NPU ORCHESTRATION` }),
      (0, x.jsxs)(`div`, {
        style: { maxWidth: 1280, margin: `0 auto`, padding: `0 32px` },
        children: [
          (0, x.jsxs)(`div`, {
            style: { textAlign: `center`, margin: `24px 0 48px` },
            children: [
              (0, x.jsx)(`h2`, {
                style: {
                  fontFamily: F,
                  fontSize: `clamp(36px, 5vw, 64px)`,
                  fontWeight: 700,
                  color: V,
                  letterSpacing: `-0.03em`,
                  lineHeight: 1.05,
                  margin: `0 0 16px`
                },
                children: `Five Specialized Agents. Zero Single Point of Failure.`
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
                children: `Sentinel-K does not rely on a single hallucinating LLM. Five specialized edge agents run asynchronously across on-device NPU cores and air-gapped simulation nodes.`
              })
            ]
          }),

          // Bento Grid
          (0, x.jsx)(`div`, {
            style: {
              display: `grid`,
              gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
              gap: 20
            },
            children: agents.map((a, i) => (
              (0, x.jsxs)(`div`, {
                key: i,
                onClick: () => setActiveAgent(i),
                style: {
                  background: activeAgent === i ? V : W_CARD,
                  color: activeAgent === i ? `#fff` : V,
                  border: `1px solid ${activeAgent === i ? R : BORDER_LIGHT}`,
                  borderRadius: 20,
                  padding: 28,
                  cursor: `pointer`,
                  transition: `all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`,
                  display: `flex`,
                  flexDirection: `column`,
                  justifyContent: `space-between`,
                  boxShadow: activeAgent === i ? `0 20px 48px rgba(0,0,0,0.2)` : `0 4px 16px rgba(0,0,0,0.03)`
                },
                children: [
                  (0, x.jsxs)(`div`, {
                    children: [
                      (0, x.jsxs)(`div`, {
                        style: { display: `flex`, justifyContent: `space-between`, alignItems: `center`, marginBottom: 16 },
                        children: [
                          (0, x.jsx)(`span`, {
                            style: {
                              fontFamily: `monospace`,
                              fontSize: 11,
                              fontWeight: 700,
                              color: R,
                              background: `rgba(255, 105, 46, 0.1)`,
                              padding: `4px 8px`,
                              borderRadius: 6
                            },
                            children: `AGENT 0${i + 1}`
                          }),
                          (0, x.jsxs)(`span`, {
                            style: { fontFamily: I, fontSize: 11, color: `#98a2b3` },
                            children: [`LATENCY: `, (0, x.jsx)(`strong`, { style: { color: activeAgent === i ? `#fff` : V }, children: a.latency })]
                          })
                        ]
                      }),
                      (0, x.jsx)(`h3`, {
                        style: {
                          fontFamily: F,
                          fontSize: 22,
                          fontWeight: 700,
                          margin: `0 0 8px`,
                          lineHeight: 1.2
                        },
                        children: a.role
                      }),
                      (0, x.jsx)(`p`, {
                        style: {
                          fontFamily: L,
                          fontSize: 14,
                          color: activeAgent === i ? `#98a2b3` : `#535862`,
                          lineHeight: 1.5,
                          margin: 0
                        },
                        children: a.desc
                      })
                    ]
                  }),

                  (0, x.jsxs)(`div`, {
                    style: {
                      marginTop: 24,
                      paddingTop: 16,
                      borderTop: `1px solid ${activeAgent === i ? BORDER_DARK : BORDER_LIGHT}`,
                      display: `flex`,
                      justifyContent: `space-between`,
                      alignItems: `center`,
                      fontFamily: I,
                      fontSize: 12
                    },
                    children: [
                      (0, x.jsx)(`span`, { style: { color: `#98a2b3` }, children: a.engine }),
                      (0, x.jsx)(`span`, { style: { color: R, fontWeight: 700 }, children: a.status })
                    ]
                  })
                ]
              })
            ))
          })
        ]
      })
    ]
  });
}

// 5. 10-Step Incident Playbook: "The Friday Surge Attack"
export function PlaybookSection() {
  let [step, setStep] = (0, o.useState)(0);

  const steps = [
    { time: `14:02:11`, phase: `DISPATCH`, title: `Spoofed Audio Dispatch`, detail: `Deepfake audio clone of Plant Director instructs operator to force Booster Pump 4 to 100% capacity.` },
    { time: `14:02:12`, phase: `EVIDENCE`, title: `NPU Multimodal Extraction`, detail: `Hexagon NPU runs Whisper-v3 + Silero VAD on-device. Flags 98.4% urgency anomaly and unnatural acoustic spectral jitter.` },
    { time: `14:02:13`, phase: `DECOMPILE`, title: `Modbus Intent Translation`, detail: `Operational request translated to PLC register target: Holding Register HR_40012 = 1200 RPM.` },
    { time: `14:02:14`, phase: `CYBER GATE`, title: `Cyber ACL & Syntax Validation`, detail: `Cyber check passes: legitimate operator device, valid Modbus TCP packet structure, authorized IP.` },
    { time: `14:02:15`, phase: `TWIN SIM`, title: `EPANET 2.2 Transient Simulation`, detail: `Physical Twin simulates downstream pressure heads with closed relief valve PRV-02.` },
    { time: `14:02:16`, phase: `BREACH`, title: `Joukowsky Water Hammer Spike`, detail: `Simulation detects 9.6 bar transient surge. Exceeds 8.0 bar flange burst threshold at Junction J-104.` },
    { time: `14:02:17`, phase: `REPLAN`, title: `Swarm Replanner Synthesis`, detail: `LangGraph swarm synthesizes safe alternative: 45-second stepped ramp with PRV-02 bypass opened to 65%.` },
    { time: `14:02:18`, phase: `RE-VERIFY`, title: `Secondary Consequence Check`, detail: `EPANET verifies safe trajectory: peak pressure held to 5.4 bar throughout entire transient curve.` },
    { time: `14:02:19`, phase: `GATEKEEPER`, title: `Sovereign Biometric Prompt`, detail: `Copilot presents transparent evidence dossier. Prompts operator for physical biometric sign-off.` },
    { time: `14:02:20`, phase: `EXECUTE`, title: `Attested PLC Execution`, detail: `Hardware TEE issues signed ED25519 token. OpenPLC receives verified safe instruction sequence.` }
  ];

  return (0, x.jsxs)(`section`, {
    id: `playbook`,
    "data-section": `playbook`,
    style: { background: `#f2f3f5`, paddingBottom: 80 },
    children: [
      (0, x.jsx)(Bridge, { number: `07`, tag: `INCIDENT PLAYBOOK // THE FRIDAY SURGE WALKTHROUGH` }),
      (0, x.jsxs)(`div`, {
        style: { maxWidth: 1280, margin: `0 auto`, padding: `0 32px` },
        children: [
          (0, x.jsxs)(`div`, {
            style: { textAlign: `center`, margin: `24px 0 48px` },
            children: [
              (0, x.jsx)(`h2`, {
                style: {
                  fontFamily: F,
                  fontSize: `clamp(36px, 5vw, 64px)`,
                  fontWeight: 700,
                  color: V,
                  letterSpacing: `-0.03em`,
                  lineHeight: 1.05,
                  margin: `0 0 16px`
                },
                children: `10 Seconds from Catastrophe to Containment.`
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
                children: `Step through 'The Friday Surge Attack' — an autonomous verification sequence where a spoofed emergency dispatch attempted to cause physical pipe rupture on Booster Pump 4.`
              })
            ]
          }),

          // Interactive Scrubber
          (0, x.jsxs)(`div`, {
            style: {
              background: V,
              borderRadius: 24,
              padding: `clamp(24px, 4vw, 40px)`,
              color: `#fff`,
              boxShadow: `0 24px 64px rgba(0,0,0,0.15)`
            },
            children: [
              // Scrub Buttons
              (0, x.jsx)(`div`, {
                style: {
                  display: `flex`,
                  gap: 8,
                  overflowX: `auto`,
                  paddingBottom: 16,
                  borderBottom: `1px solid ${BORDER_DARK}`,
                  scrollbarWidth: `none`
                },
                children: steps.map((s, i) => (
                  (0, x.jsxs)(`button`, {
                    key: i,
                    onClick: () => setStep(i),
                    style: {
                      background: step === i ? R : `rgba(255, 255, 255, 0.05)`,
                      color: step === i ? `#fff` : `#98a2b3`,
                      border: `none`,
                      borderRadius: 10,
                      padding: `8px 14px`,
                      fontFamily: I,
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: `pointer`,
                      flexShrink: 0,
                      display: `flex`,
                      alignItems: `center`,
                      gap: 6,
                      transition: `all 0.2s ease`
                    },
                    children: [
                      (0, x.jsx)(`span`, { children: `0${i + 1}` }),
                      (0, x.jsx)(`span`, { style: { opacity: 0.7 }, children: s.time.slice(3) })
                    ]
                  })
                ))
              }),

              // Active Step Detail Display
              (0, x.jsxs)(`div`, {
                style: {
                  display: `grid`,
                  gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
                  gap: 32,
                  marginTop: 32,
                  alignItems: `center`
                },
                children: [
                  (0, x.jsxs)(`div`, {
                    children: [
                      (0, x.jsxs)(`div`, {
                        style: { display: `flex`, alignItems: `center`, gap: 12, marginBottom: 12 },
                        children: [
                          (0, x.jsxs)(`span`, {
                            style: {
                              fontFamily: `monospace`,
                              fontSize: 12,
                              color: R,
                              background: `rgba(255, 105, 46, 0.15)`,
                              padding: `4px 10px`,
                              borderRadius: 6,
                              fontWeight: 700
                            },
                            children: [`T+`, step, `s  //  `, steps[step].time]
                          }),
                          (0, x.jsx)(`span`, {
                            style: { fontFamily: I, fontSize: 12, color: `#98a2b3`, textTransform: `uppercase` },
                            children: steps[step].phase
                          })
                        ]
                      }),
                      (0, x.jsx)(`h3`, {
                        style: { fontFamily: F, fontSize: 32, fontWeight: 700, color: `#fff`, margin: `0 0 16px`, lineHeight: 1.15 },
                        children: steps[step].title
                      }),
                      (0, x.jsx)(`p`, {
                        style: { fontFamily: L, fontSize: 16, color: `#98a2b3`, lineHeight: 1.6, margin: 0 },
                        children: steps[step].detail
                      })
                    ]
                  }),

                  // Telemetry readout box
                  (0, x.jsxs)(`div`, {
                    style: {
                      background: `rgba(255, 255, 255, 0.03)`,
                      border: `1px solid ${BORDER_DARK}`,
                      borderRadius: 16,
                      padding: 24,
                      fontFamily: `monospace`,
                      fontSize: 13,
                      lineHeight: 1.8
                    },
                    children: [
                      (0, x.jsx)(`div`, { style: { color: `#98a2b3`, borderBottom: `1px solid ${BORDER_DARK}`, paddingBottom: 8, marginBottom: 12 }, children: `// SENTINEL-K REAL-TIME TELEMETRY` }),
                      (0, x.jsxs)(`div`, { children: [`[TIMESTAMP]: `, (0, x.jsx)(`span`, { style: { color: `#fff` }, children: `2026-03-20 ` + steps[step].time })] }),
                      (0, x.jsxs)(`div`, { children: [`[TARGET PLC]: `, (0, x.jsx)(`span`, { style: { color: R }, children: `OpenPLC_Booster_04 (%QW104)` })] }),
                      (0, x.jsxs)(`div`, { children: [`[PRESSURE]  : `, (0, x.jsx)(`span`, { style: { color: step >= 5 && step < 7 ? `#ef4444` : `#10b981` }, children: step >= 5 && step < 7 ? `9.6 bar (BREACH)` : `5.4 bar (SAFE)` })] }),
                      (0, x.jsxs)(`div`, { children: [`[GATE STATE]: `, (0, x.jsx)(`span`, { style: { color: step === 9 ? `#10b981` : R }, children: step === 9 ? `EXECUTED_TEE_SIGNED` : `INTERCEPTED_IN_VERIFICATION` })] })
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

// 6. iQOO Hackathon Alignment & The Builders
export function HackathonTeamSection() {
  const pillars = [
    {
      title: `Snapdragon NPU Acceleration`,
      subtitle: `Hexagon Direct Triage`,
      desc: `Runs Whisper-v3 acoustic forensics and evidence extraction locally on mobile hardware in under 150ms without cloud roundtrips.`
    },
    {
      title: `Vivo Office Kit Edge Bridge`,
      subtitle: `Zero-Friction Plant Uplink`,
      desc: `Low-latency secure edge channel bridging the operator's iQOO handheld directly into air-gapped SCADA simulation clusters.`
    },
    {
      title: `Hardware-Enforced Security`,
      subtitle: `Android TEE & TrustZone`,
      desc: `Immutable biometric confirmation ensures malicious AI dispatches cannot actuate plant hardware without physical sign-off.`
    }
  ];

  const builders = [
    { name: `J Sashank`, role: `Cyber-Physical Systems & SCADA Architecture`, focus: `Modbus TCP, PLC Interlocks, Z3 Prover` },
    { name: `D Mounika`, role: `Hydrodynamic Modeling & Digital Twin`, focus: `EPANET 2.2, WNTR, Water Hammer Transient Physics` },
    { name: `S Sameer`, role: `Distributed AI & Edge Orchestration`, focus: `Snapdragon NPU Pipelines, Mobile TEE, Multi-Agent Swarms` }
  ];

  return (0, x.jsxs)(`section`, {
    id: `team`,
    "data-section": `team`,
    style: { background: `#f2f3f5`, paddingBottom: 80 },
    children: [
      (0, x.jsx)(Bridge, { number: `08`, tag: `SUBMISSION PROFILE // iQOO HACKATHON 2026` }),
      (0, x.jsxs)(`div`, {
        style: { maxWidth: 1280, margin: `0 auto`, padding: `0 32px` },
        children: [
          (0, x.jsxs)(`div`, {
            style: { textAlign: `center`, margin: `24px 0 48px` },
            children: [
              (0, x.jsx)(`h2`, {
                style: {
                  fontFamily: F,
                  fontSize: `clamp(36px, 5vw, 64px)`,
                  fontWeight: 700,
                  color: V,
                  letterSpacing: `-0.03em`,
                  lineHeight: 1.05,
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
              gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
              gap: 20,
              marginBottom: 40
            },
            children: pillars.map((p, i) => (
              (0, x.jsxs)(`div`, {
                key: i,
                style: {
                  background: W_CARD,
                  border: `1px solid ${BORDER_LIGHT}`,
                  borderRadius: 20,
                  padding: 28,
                  boxShadow: `0 4px 16px rgba(0,0,0,0.03)`
                },
                children: [
                  (0, x.jsx)(`div`, { style: { fontFamily: I, fontSize: 11, fontWeight: 700, color: R, letterSpacing: `0.1em`, marginBottom: 8 }, children: p.subtitle }),
                  (0, x.jsx)(`h3`, { style: { fontFamily: F, fontSize: 22, fontWeight: 700, color: V, margin: `0 0 12px` }, children: p.title }),
                  (0, x.jsx)(`p`, { style: { fontFamily: L, fontSize: 14, color: `#535862`, lineHeight: 1.6, margin: 0 }, children: p.desc })
                ]
              })
            ))
          }),

          // The Builders
          (0, x.jsxs)(`div`, {
            style: {
              background: V,
              borderRadius: 24,
              padding: `clamp(24px, 4vw, 40px)`,
              color: `#fff`
            },
            children: [
              (0, x.jsxs)(`div`, {
                style: { display: `flex`, justifyContent: `space-between`, alignItems: `center`, marginBottom: 28, borderBottom: `1px solid ${BORDER_DARK}`, paddingBottom: 16 },
                children: [
                  (0, x.jsx)(`h3`, { style: { fontFamily: F, fontSize: 28, fontWeight: 700, margin: 0, color: `#fff` }, children: `The Engineering Team` }),
                  (0, x.jsx)(`span`, { style: { fontFamily: I, fontSize: 12, color: R, fontWeight: 700 }, children: `iQOO HACKATHON 2026` })
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
                      background: `rgba(255, 255, 255, 0.04)`,
                      border: `1px solid ${BORDER_DARK}`,
                      borderRadius: 16,
                      padding: 24
                    },
                    children: [
                      (0, x.jsx)(`div`, { style: { fontFamily: F, fontSize: 22, fontWeight: 700, color: `#fff`, marginBottom: 6 }, children: b.name }),
                      (0, x.jsx)(`div`, { style: { fontFamily: I, fontSize: 12, color: R, fontWeight: 600, marginBottom: 12 }, children: b.role }),
                      (0, x.jsx)(`div`, { style: { fontFamily: L, fontSize: 12, color: `#98a2b3` }, children: b.focus })
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
// CINEMATIC HORIZONTAL CARDS VISUALS (Ee)
// ==========================================

// 1. Field Copilot Radar & Spectral HUD Visual
export function FieldCopilotVisual({ w, h }) {
  let [angle, setAngle] = (0, o.useState)(0);

  (0, o.useEffect)(() => {
    let anim;
    let tick = () => {
      setAngle((a) => (a + 1.8) % 360);
      anim = requestAnimationFrame(tick);
    };
    anim = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(anim);
  }, []);

  return (0, x.jsxs)(`div`, {
    style: {
      position: `absolute`,
      inset: 0,
      background: `radial-gradient(circle at 50% 50%, #151d2a 0%, #080b10 100%)`,
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `space-between`,
      padding: 20,
      boxSizing: `border-box`,
      overflow: `hidden`
    },
    children: [
      // Top status row
      (0, x.jsxs)(`div`, {
        style: { display: `flex`, justifyContent: `space-between`, alignItems: `center`, fontSize: 10, fontFamily: `monospace`, color: `#94a3b8` },
        children: [
          (0, x.jsxs)(`span`, { style: { display: `flex`, alignItems: `center`, gap: 6 }, children: [(0, x.jsx)(`span`, { style: { width: 6, height: 6, borderRadius: `50%`, background: R, boxShadow: `0 0 8px ${R}` } }), `RADAR // SECTOR 04`] }),
          (0, x.jsx)(`span`, { style: { color: `#38bdf8`, fontWeight: 700 }, children: `45 TOPS NPU` })
        ]
      }),

      // Center: Circular Radar Sweep
      (0, x.jsxs)(`div`, {
        style: { position: `relative`, width: Math.min(180, w * 0.45), height: Math.min(180, w * 0.45), margin: `0 auto` },
        children: [
          (0, x.jsxs)(`svg`, {
            viewBox: `0 0 160 160`,
            style: { width: `100%`, height: `100%` },
            children: [
              // Concentric radar rings
              [25, 45, 65, 75].map((rVal, idx) => (
                (0, x.jsx)(`circle`, { key: idx, cx: 80, cy: 80, r: rVal, fill: `none`, stroke: `rgba(56, 189, 248, 0.2)`, strokeWidth: 1, strokeDasharray: idx === 3 ? `3 3` : undefined })
              )),
              // Crosshairs
              (0, x.jsx)(`line`, { x1: 5, y1: 80, x2: 155, y2: 80, stroke: `rgba(56, 189, 248, 0.15)`, strokeWidth: 1 }),
              (0, x.jsx)(`line`, { x1: 80, y1: 5, x2: 80, y2: 155, stroke: `rgba(56, 189, 248, 0.15)`, strokeWidth: 1 }),

              // Sweeping line
              (0, x.jsx)(`line`, {
                x1: 80,
                y1: 80,
                x2: 80 + 72 * Math.cos((angle * Math.PI) / 180),
                y2: 80 + 72 * Math.sin((angle * Math.PI) / 180),
                stroke: R,
                strokeWidth: 2,
                style: { filter: `drop-shadow(0 0 6px ${R})` }
              }),

              // Anomaly Blip
              (0, x.jsx)(`circle`, {
                cx: 105,
                cy: 62,
                r: 4,
                fill: `#ef4444`,
                style: { filter: `drop-shadow(0 0 6px #ef4444)` }
              })
            ]
          }),
          (0, x.jsx)(`div`, {
            style: {
              position: `absolute`,
              bottom: 4,
              left: `50%`,
              transform: `translateX(-50%)`,
              background: `rgba(239, 68, 68, 0.2)`,
              border: `1px solid rgba(239, 68, 68, 0.4)`,
              color: `#f87171`,
              fontSize: 8.5,
              fontFamily: `monospace`,
              fontWeight: 700,
              padding: `2px 6px`,
              borderRadius: 4,
              whiteSpace: `nowrap`
            },
            children: `8.9 URGENCY SPOOF DETECTED`
          })
        ]
      }),

      // Bottom: Acoustic Equalizer Bars
      (0, x.jsxs)(`div`, {
        style: { background: `rgba(0,0,0,0.4)`, borderRadius: 8, padding: 8, border: `1px solid rgba(255,255,255,0.06)` },
        children: [
          (0, x.jsxs)(`div`, {
            style: { display: `flex`, justifyContent: `space-between`, fontSize: 8.5, fontFamily: `monospace`, color: `#cbd5e1`, marginBottom: 6 },
            children: [(0, x.jsx)(`span`, { children: `VOICE CLONE SPECTRAL MATCH` }), (0, x.jsx)(`span`, { style: { color: `#f59e0b` }, children: `71% SIMILARITY` })]
          }),
          (0, x.jsx)(`div`, {
            style: { display: `flex`, alignItems: `flex-end`, gap: 3, height: 26 },
            children: [6, 14, 22, 10, 18, 26, 12, 20, 8, 24, 16, 10, 22, 14, 18, 8, 12, 16, 20, 10].map((hVal, idx) => (
              (0, x.jsx)(`div`, {
                key: idx,
                style: {
                  flex: 1,
                  height: `${Math.max(4, (hVal + Math.sin(angle * 0.1 + idx) * 8))}px`,
                  background: idx % 2 === 0 ? R : `#38bdf8`,
                  borderRadius: 1,
                  transition: `height 0.1s ease`
                }
              })
            ))
          })
        ]
      })
    ]
  });
}

// 2. Verification Pipeline Visual (Conduits & Nodes)
export function VerificationPipelineVisual({ w, h }) {
  let [activeNode, setActiveNode] = (0, o.useState)(0);

  (0, o.useEffect)(() => {
    let t = setInterval(() => {
      setActiveNode((n) => (n + 1) % 5);
    }, 1200);
    return () => clearInterval(t);
  }, []);

  const stages = [
    { name: `INGEST`, sub: `Voice Dispatch`, status: `Intercepted` },
    { name: `SLM 3B`, sub: `Snapdragon NPU`, status: `18ms Decompile` },
    { name: `MODBUS`, sub: `SCADA Gate`, status: `CRC Valid` },
    { name: `EPANET`, sub: `Fluid Dynamic Twin`, status: `Surge Reject` },
    { name: `TEE`, sub: `Biometric Enclave`, status: `Signed Safe` }
  ];

  return (0, x.jsxs)(`div`, {
    style: {
      position: `absolute`,
      inset: 0,
      background: `#0a0d14`,
      padding: 16,
      boxSizing: `border-box`,
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `space-between`
    },
    children: [
      (0, x.jsxs)(`div`, {
        style: { display: `flex`, justifyContent: `space-between`, alignItems: `center`, fontSize: 10, fontFamily: `monospace`, color: `#94a3b8` },
        children: [
          (0, x.jsx)(`span`, { children: `CROSS-DOMAIN VERIFICATION BARRIER` }),
          (0, x.jsxs)(`span`, { style: { color: R, fontWeight: 700 }, children: [`STAGE 0`, activeNode + 1, `/05`] })
        ]
      }),

      // 5 Nodes Connected by Conduit
      (0, x.jsx)(`div`, {
        style: { display: `flex`, flexDirection: `column`, gap: 8, margin: `8px 0` },
        children: stages.map((s, idx) => {
          let isActive = activeNode === idx;
          return (0, x.jsxs)(`div`, {
            key: idx,
            style: {
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
              padding: `6px 12px`,
              borderRadius: 8,
              background: isActive ? `rgba(255, 105, 46, 0.15)` : `rgba(255,255,255,0.03)`,
              border: isActive ? `1px solid ${R}` : `1px solid rgba(255,255,255,0.05)`,
              transition: `all 0.3s ease`
            },
            children: [
              (0, x.jsxs)(`div`, {
                style: { display: `flex`, alignItems: `center`, gap: 8 },
                children: [
                  (0, x.jsx)(`div`, {
                    style: {
                      width: 8,
                      height: 8,
                      borderRadius: `50%`,
                      background: isActive ? R : `#475467`,
                      boxShadow: isActive ? `0 0 10px ${R}` : `none`
                    }
                  }),
                  (0, x.jsxs)(`div`, {
                    children: [
                      (0, x.jsx)(`div`, { style: { fontFamily: `monospace`, fontSize: 11, fontWeight: 700, color: isActive ? `#fff` : `#94a3b8` }, children: s.name }),
                      (0, x.jsx)(`div`, { style: { fontSize: 8.5, color: `#64748b` }, children: s.sub })
                    ]
                  })
                ]
              }),
              (0, x.jsx)(`span`, {
                style: {
                  fontFamily: `monospace`,
                  fontSize: 9,
                  fontWeight: 700,
                  color: idx === 3 ? `#ef4444` : idx === 4 ? `#10b981` : `#38bdf8`
                },
                children: s.status
              })
            ]
          });
        })
      }),

      // Bottom Execution Terminal Log
      (0, x.jsxs)(`div`, {
        style: { background: `rgba(0,0,0,0.6)`, borderRadius: 6, padding: `6px 10px`, fontFamily: `monospace`, fontSize: 8.5, color: `#38bdf8` },
        children: [
          (0, x.jsx)(`div`, { children: `>> [EXEC] WRITE_HOLDING_REGISTER(40012, 850)` }),
          (0, x.jsx)(`div`, { style: { color: `#34d399` }, children: `>> [VERDICT] DETERMINISTIC INTERVENTION READY` })
        ]
      })
    ]
  });
}

// 3. Latency Triage Odometer Visual
export function LatencyTriageVisual({ w, h }) {
  let [count, setCount] = (0, o.useState)(1.84);

  (0, o.useEffect)(() => {
    let t = setInterval(() => {
      setCount((1.75 + Math.random() * 0.15).toFixed(2));
    }, 1800);
    return () => clearInterval(t);
  }, []);

  return (0, x.jsxs)(`div`, {
    style: {
      position: `absolute`,
      inset: 0,
      background: `#0a0d14`,
      padding: 20,
      boxSizing: `border-box`,
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `space-between`
    },
    children: [
      (0, x.jsxs)(`div`, {
        style: { display: `flex`, justifyContent: `space-between`, alignItems: `center`, fontSize: 10, fontFamily: `monospace`, color: `#94a3b8` },
        children: [
          (0, x.jsx)(`span`, { children: `END-TO-END TRIAGE LATENCY` }),
          (0, x.jsx)(`span`, { style: { color: `#10b981`, fontWeight: 700 }, children: `TARGET: < 2.0s` })
        ]
      }),

      // Giant Odometer
      (0, x.jsxs)(`div`, {
        style: { textAlign: `center`, margin: `10px 0` },
        children: [
          (0, x.jsxs)(`div`, {
            style: { fontFamily: F, fontSize: 56, fontWeight: 700, color: R, lineHeight: 1 },
            children: [count, (0, x.jsx)(`span`, { style: { fontSize: 24, fontFamily: I, color: `#fff` }, children: `s` })]
          }),
          (0, x.jsx)(`div`, { style: { fontFamily: `monospace`, fontSize: 9.5, color: `#94a3b8`, marginTop: 4 }, children: `AIR-GAPPED TOTAL EXECUTION TIME` })
        ]
      }),

      // 4 Precision Micro-Breakdowns
      (0, x.jsxs)(`div`, {
        style: { display: `flex`, flexDirection: `column`, gap: 6 },
        children: [
          { name: `Acoustic Forensics (Whisper-v3)`, time: `18ms`, pct: `18%`, color: `#38bdf8` },
          { name: `Modbus CRC Formal Check (Z3)`, time: `2ms`, pct: `4%`, color: `#34d399` },
          { name: `EPANET Fluid Twin (Runge-Kutta)`, time: `142ms`, pct: `72%`, color: R },
          { name: `Hardware Enclave Biometric (TEE)`, time: `12ms`, pct: `12%`, color: `#a855f7` }
        ].map((item, idx) => (
          (0, x.jsxs)(`div`, {
            key: idx,
            children: [
              (0, x.jsxs)(`div`, {
                style: { display: `flex`, justifyContent: `space-between`, fontSize: 8.5, fontFamily: `monospace`, color: `#cbd5e1`, marginBottom: 2 },
                children: [(0, x.jsx)(`span`, { children: item.name }), (0, x.jsx)(`span`, { style: { color: item.color, fontWeight: 700 }, children: item.time })]
              }),
              (0, x.jsx)(`div`, {
                style: { width: `100%`, height: 3, background: `rgba(255,255,255,0.08)`, borderRadius: 2, overflow: `hidden` },
                children: (0, x.jsx)(`div`, { style: { width: item.pct, height: `100%`, background: item.color, borderRadius: 2 } })
              })
            ]
          })
        ))
      })
    ]
  });
}

// 4. Industrial Protocol Matrix Visual
export function IndustrialStackVisual({ w, h }) {
  const protocols = [
    { name: `MODBUS TCP`, sub: `Port 502 // Holding Regs`, status: `ONLINE`, color: `#10b981` },
    { name: `OPENPLC`, sub: `IEC 61131-3 Ladder`, status: `ACTIVE`, color: `#38bdf8` },
    { name: `EPANET 2.2`, sub: `Hydraulic Twin Solver`, status: `READY`, color: R },
    { name: `SNAPDRAGON`, sub: `8 Elite NPU 45 TOPS`, status: `LOADED`, color: `#a855f7` },
    { name: `VIVO OFFICE`, sub: `Edge Zero-Friction Bridge`, status: `LINKED`, color: `#f59e0b` },
    { name: `ORIGINOS 5`, sub: `TEE Biometric Enclave`, status: `LOCKED`, color: `#10b981` }
  ];

  return (0, x.jsxs)(`div`, {
    style: {
      position: `absolute`,
      inset: 0,
      background: `#0a0d14`,
      padding: 16,
      boxSizing: `border-box`,
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `space-between`
    },
    children: [
      (0, x.jsxs)(`div`, {
        style: { display: `flex`, justifyContent: `space-between`, alignItems: `center`, fontSize: 10, fontFamily: `monospace`, color: `#94a3b8` },
        children: [
          (0, x.jsx)(`span`, { children: `HARDWARE-IN-THE-LOOP ECOSYSTEM` }),
          (0, x.jsx)(`span`, { style: { color: `#34d399`, fontWeight: 700 }, children: `ZERO BYPASS` })
        ]
      }),

      // 6-Chip Matrix Grid
      (0, x.jsx)(`div`, {
        style: { display: `grid`, gridTemplateColumns: `1fr 1fr`, gap: 8, margin: `10px 0` },
        children: protocols.map((p, idx) => (
          (0, x.jsxs)(`div`, {
            key: idx,
            style: {
              background: `rgba(255,255,255,0.03)`,
              border: `1px solid rgba(255,255,255,0.06)`,
              borderRadius: 8,
              padding: 8,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: `space-between`
            },
            children: [
              (0, x.jsxs)(`div`, {
                style: { display: `flex`, justifyContent: `space-between`, alignItems: `center` },
                children: [
                  (0, x.jsx)(`span`, { style: { fontFamily: `monospace`, fontSize: 10, fontWeight: 700, color: `#fff` }, children: p.name }),
                  (0, x.jsx)(`span`, { style: { width: 5, height: 5, borderRadius: `50%`, background: p.color, boxShadow: `0 0 6px ${p.color}` } })
                ]
              }),
              (0, x.jsx)(`div`, { style: { fontSize: 7.5, color: `#94a3b8`, marginTop: 3 }, children: p.sub })
            ]
          })
        ))
      }),

      // Bottom Telemetry Strip
      (0, x.jsxs)(`div`, {
        style: { background: `rgba(255, 105, 46, 0.08)`, border: `1px solid rgba(255, 105, 46, 0.2)`, borderRadius: 6, padding: `6px 10px`, display: `flex`, justifyContent: `space-between`, fontSize: 8.5, fontFamily: `monospace` },
        children: [
          (0, x.jsx)(`span`, { style: { color: `#cbd5e1` }, children: `PLC LATENCY: 0.8ms` }),
          (0, x.jsx)(`span`, { style: { color: R, fontWeight: 700 }, children: `MODBUS SYNC: 100%` })
        ]
      })
    ]
  });
}

// 5. Dynamic Twin Water Hammer Simulation Visual (Next-Level Cockpit)
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

  let scrubT = hoverX !== null ? (hoverX * 60).toFixed(1) : ((tick % 240) / 240 * 60).toFixed(1);
  let scrubP = hoverX !== null ? (4.2 + hoverX * 7.2).toFixed(1) : (4.2 + (Math.sin(tick * 0.05) + 1) * 3.6).toFixed(1);

  return (0, x.jsxs)("div", {
    onMouseMove: (e) => {
      let rect = e.currentTarget.getBoundingClientRect();
      setHoverX(Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)));
    },
    onMouseLeave: () => setHoverX(null),
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(circle at 50% 30%, #151d2c 0%, #080b11 100%)",
      padding: 16,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      cursor: "crosshair"
    },
    children: [
      // Top status row
      (0, x.jsxs)("div", {
        style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 9.5, fontFamily: "monospace", color: "#94a3b8" },
        children: [
          (0, x.jsxs)("span", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [(0, x.jsx)("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#ef4444", boxShadow: "0 0 6px #ef4444" } }), "TRANSIENT SURGE VS SAFE REPLAN"] }),
          (0, x.jsx)("span", { style: { color: "#10b981", fontWeight: 800 }, children: "EPANET 2.2 / WNTR" })
        ]
      }),

      // Animated Pipe Conduit Cross-Section
      (0, x.jsxs)("div", {
        style: {
          height: 38,
          background: "rgba(0,0,0,0.6)",
          borderRadius: 8,
          border: "1px solid rgba(255,255,255,0.08)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center"
        },
        children: [
          // Fluid flow particles
          Array.from({ length: 8 }).map((_, i) => (
            (0, x.jsx)("div", {
              key: i,
              style: {
                position: "absolute",
                left: `${((tick * 3 + i * 45) % 360) / 360 * 100}%`,
                width: 14,
                height: 3,
                background: "linear-gradient(90deg, transparent, #38bdf8, transparent)",
                borderRadius: 2
              }
            })
          )),
          // Pipe valve choke gate
          (0, x.jsx)("div", {
            style: {
              position: "absolute",
              right: 40,
              top: 4,
              bottom: 4,
              width: 5,
              background: "#ef4444",
              borderRadius: 2,
              boxShadow: "0 0 8px #ef4444"
            }
          }),
          (0, x.jsx)("div", {
            style: { position: "absolute", left: 10, fontSize: 8, fontFamily: "monospace", color: "#38bdf8", fontWeight: 700 },
            children: "PIPE P-04 // VELOCITY: 3.4 m/s"
          }),
          (0, x.jsx)("div", {
            style: { position: "absolute", right: 52, fontSize: 8, fontFamily: "monospace", color: "#ef4444", fontWeight: 800 },
            children: "RV-02 BLOCKED"
          })
        ]
      }),

      // Main Dual-Waveform Display
      (0, x.jsxs)("div", {
        style: { height: 110, background: "rgba(0,0,0,0.6)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)", padding: 8, position: "relative" },
        children: [
          (0, x.jsxs)("svg", {
            viewBox: "0 0 240 85",
            style: { width: "100%", height: "100%" },
            children: [
              // Safety limit line (8.0 Bar)
              (0, x.jsx)("line", { x1: 0, y1: 28, x2: 240, y2: 28, stroke: "#ef4444", strokeDasharray: "3 3", strokeWidth: 1 }),
              (0, x.jsx)("text", { x: 235, y: 24, textAnchor: "end", fill: "#ef4444", fontSize: 7, fontFamily: "monospace", children: "8.0 BAR LIMIT" }),

              // Catastrophic spike curve (11.4 Bar)
              (0, x.jsx)("path", {
                d: "M 0 68 Q 40 68 75 8 T 130 62 T 240 65",
                fill: "none",
                stroke: "#ef4444",
                strokeWidth: 2.2,
                style: { filter: "drop-shadow(0 0 5px #ef4444)" }
              }),

              // Safe replanned curve (7.4 Bar)
              (0, x.jsx)("path", {
                d: "M 0 68 Q 60 68 110 38 T 170 40 T 240 42",
                fill: "none",
                stroke: "#10b981",
                strokeWidth: 2.5,
                style: { filter: "drop-shadow(0 0 5px #10b981)" }
              }),

              // Scrubber vertical cursor
              (0, x.jsx)("line", {
                x1: hoverX !== null ? hoverX * 240 : ((tick % 240) / 240 * 240),
                y1: 0,
                x2: hoverX !== null ? hoverX * 240 : ((tick % 240) / 240 * 240),
                y2: 85,
                stroke: "#38bdf8",
                strokeWidth: 1.5,
                opacity: 0.8
              })
            ]
          }),

          // Telemetry Legend
          (0, x.jsxs)("div", {
            style: { position: "absolute", top: 8, left: 10, fontSize: 7.5, fontFamily: "monospace", lineHeight: 1.3 },
            children: [
              (0, x.jsx)("div", { style: { color: "#ef4444", fontWeight: 700 }, children: "-- UNVERIFIED: 11.4 BAR (BURST)" }),
              (0, x.jsx)("div", { style: { color: "#10b981", fontWeight: 700 }, children: "-- REPLANNED: 7.4 BAR (SAFE)" }),
              (0, x.jsxs)("div", { style: { color: "#38bdf8", marginTop: 2 }, children: ["T = ", scrubT, "s // P = ", scrubP, " BAR"] })
            ]
          })
        ]
      }),

      // Bottom Status Pill
      (0, x.jsxs)("div", {
        style: {
          background: "rgba(16, 185, 129, 0.12)",
          border: "1px solid rgba(16, 185, 129, 0.35)",
          borderRadius: 6,
          padding: "6px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        },
        children: [
          (0, x.jsx)("span", { style: { fontSize: 8.5, fontFamily: "monospace", color: "#34d399", fontWeight: 700 }, children: "✓ 60s STAGED VALVE DEVIATION COMMITTED" }),
          (0, x.jsx)("span", { style: { fontSize: 8.5, fontFamily: "monospace", color: "#fff", fontWeight: 800 }, children: "ZERO SURGE" })
        ]
      })
    ]
  });
}
