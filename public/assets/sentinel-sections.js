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

// Section Bridge Component
function Bridge({ number, tag }) {
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

// 1. Digital Twin Sandbox Component
export function DigitalTwinSection() {
  let [rpm, setRpm] = (0, o.useState)(980);
  let [valve, setValve] = (0, o.useState)(12);
  let [replanned, setReplanned] = (0, o.useState)(!1);

  // Joukowsky surge calculation
  let calculatedPressure = replanned ? 5.4 : Number(((rpm / 1200) * 8.5 + (1 - valve / 100) * 2.8).toFixed(1));
  let isBreach = calculatedPressure > 8.0;

  const handleReplan = () => {
    setReplanned(true);
    setRpm(720);
    setValve(65);
  };

  const handleReset = () => {
    setReplanned(false);
    setRpm(980);
    setValve(12);
  };

  return (0, x.jsxs)(`section`, {
    id: `digital-twin`,
    "data-section": `digital-twin`,
    style: { background: `#f2f3f5`, paddingBottom: 80 },
    children: [
      (0, x.jsx)(Bridge, { number: `05`, tag: `HYDRODYNAMIC SIMULATION // EPANET 2.2 / WNTR` }),
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
                children: `Simulate Before You Actuate.`
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
                children: `Every high-consequence command is executed inside an on-device EPANET 2.2 / WNTR hydrodynamic twin before single-coil write. If a surge exceeds the physical pipe yield limit, execution is deterministically aborted.`
              })
            ]
          }),

          // Simulator Grid
          (0, x.jsxs)(`div`, {
            style: {
              display: `grid`,
              gridTemplateColumns: `repeat(auto-fit, minmax(320px, 1fr))`,
              gap: 24,
              background: V,
              borderRadius: 24,
              padding: `clamp(24px, 4vw, 40px)`,
              color: `#fff`,
              boxShadow: `0 24px 64px rgba(0,0,0,0.15)`
            },
            children: [
              // Left: Sliders & Controls
              (0, x.jsxs)(`div`, {
                style: { display: `flex`, flexDirection: `column`, gap: 24 },
                children: [
                  (0, x.jsxs)(`div`, {
                    children: [
                      (0, x.jsxs)(`div`, {
                        style: { display: `flex`, justifyContent: `space-between`, fontFamily: I, fontSize: 13, color: `#98a2b3`, marginBottom: 8 },
                        children: [
                          (0, x.jsx)(`span`, { children: `PUMP SPEED (BOOSTER 04)` }),
                          (0, x.jsxs)(`span`, { style: { color: R, fontWeight: 700 }, children: [rpm, ` RPM`] })
                        ]
                      }),
                      (0, x.jsx)(`input`, {
                        type: `range`,
                        min: 0,
                        max: 1200,
                        step: 10,
                        value: rpm,
                        disabled: replanned,
                        onChange: (e) => setRpm(Number(e.target.value)),
                        style: { width: `100%`, accentColor: R, cursor: `pointer` }
                      })
                    ]
                  }),

                  (0, x.jsxs)(`div`, {
                    children: [
                      (0, x.jsxs)(`div`, {
                        style: { display: `flex`, justifyContent: `space-between`, fontFamily: I, fontSize: 13, color: `#98a2b3`, marginBottom: 8 },
                        children: [
                          (0, x.jsx)(`span`, { children: `RELIEF VALVE APERTURE` }),
                          (0, x.jsxs)(`span`, { style: { color: R, fontWeight: 700 }, children: [valve, `% OPEN`] })
                        ]
                      }),
                      (0, x.jsx)(`input`, {
                        type: `range`,
                        min: 0,
                        max: 100,
                        step: 1,
                        value: valve,
                        disabled: replanned,
                        onChange: (e) => setValve(Number(e.target.value)),
                        style: { width: `100%`, accentColor: R, cursor: `pointer` }
                      })
                    ]
                  }),

                  // Joukowsky equation banner
                  (0, x.jsxs)(`div`, {
                    style: {
                      background: `rgba(255, 255, 255, 0.04)`,
                      border: `1px solid ${BORDER_DARK}`,
                      borderRadius: 14,
                      padding: 16
                    },
                    children: [
                      (0, x.jsx)(`div`, {
                        style: { fontFamily: I, fontSize: 11, color: `#98a2b3`, textTransform: `uppercase`, letterSpacing: `0.1em`, marginBottom: 6 },
                        children: `JOUKOWSKY WATER HAMMER LAW`
                      }),
                      (0, x.jsx)(`div`, {
                        style: { fontFamily: `monospace`, fontSize: 16, color: R, fontWeight: 700 },
                        children: `ΔP = ρ · c · Δv  (c = 1,200 m/s)`
                      }),
                      (0, x.jsx)(`div`, {
                        style: { fontFamily: L, fontSize: 12, color: `#98a2b3`, marginTop: 4 },
                        children: `Calculates instantaneous kinetic pressure rise across transmission flange.`
                      })
                    ]
                  }),

                  // Action Buttons
                  (0, x.jsxs)(`div`, {
                    style: { display: `flex`, gap: 12, marginTop: 8 },
                    children: [
                      (0, x.jsx)(`button`, {
                        onClick: handleReplan,
                        style: {
                          flex: 1,
                          padding: `12px 20px`,
                          background: R,
                          color: `#fff`,
                          border: `none`,
                          borderRadius: 12,
                          fontFamily: I,
                          fontWeight: 700,
                          fontSize: 14,
                          cursor: `pointer`,
                          boxShadow: `0 4px 14px rgba(255, 105, 46, 0.4)`
                        },
                        children: `APPLY SAFE REPLAN`
                      }),
                      replanned && (0, x.jsx)(`button`, {
                        onClick: handleReset,
                        style: {
                          padding: `12px 18px`,
                          background: `rgba(255, 255, 255, 0.1)`,
                          color: `#fff`,
                          border: `none`,
                          borderRadius: 12,
                          fontFamily: I,
                          fontWeight: 600,
                          fontSize: 13,
                          cursor: `pointer`
                        },
                        children: `RESET SIM`
                      })
                    ]
                  })
                ]
              }),

              // Right: Live SVG Waveform & Readout
              (0, x.jsxs)(`div`, {
                style: { display: `flex`, flexDirection: `column`, gap: 16 },
                children: [
                  (0, x.jsxs)(`div`, {
                    style: {
                      display: `flex`,
                      justifyContent: `space-between`,
                      alignItems: `baseline`,
                      paddingBottom: 12,
                      borderBottom: `1px solid ${BORDER_DARK}`
                    },
                    children: [
                      (0, x.jsxs)(`div`, {
                        children: [
                          (0, x.jsx)(`div`, { style: { fontFamily: I, fontSize: 11, color: `#98a2b3` }, children: `PEAK SURGE PRESSURE` }),
                          (0, x.jsxs)(`div`, {
                            style: { fontFamily: F, fontSize: 44, fontWeight: 700, color: isBreach ? `#ef4444` : `#10b981`, lineHeight: 1 },
                            children: [calculatedPressure, ` bar`]
                          })
                        ]
                      }),
                      (0, x.jsxs)(`div`, {
                        style: { textAlign: `right` },
                        children: [
                          (0, x.jsx)(`div`, { style: { fontFamily: I, fontSize: 11, color: `#98a2b3` }, children: `FLANGE BURST LIMIT` }),
                          (0, x.jsx)(`div`, { style: { fontFamily: I, fontSize: 20, fontWeight: 700, color: `#f87171` }, children: `8.0 bar` })
                        ]
                      })
                    ]
                  }),

                  // SVG Curve
                  (0, x.jsxs)(`svg`, {
                    viewBox: `0 0 500 180`,
                    style: {
                      width: `100%`,
                      height: 160,
                      background: `rgba(0, 0, 0, 0.4)`,
                      borderRadius: 14,
                      border: `1px solid ${BORDER_DARK}`
                    },
                    children: [
                      // Grid lines
                      (0, x.jsx)(`line`, { x1: 0, y1: 45, x2: 500, y2: 45, stroke: `rgba(239, 68, 68, 0.3)`, strokeDasharray: `4 4` }),
                      (0, x.jsx)(`text`, { x: 490, y: 40, textAnchor: `end`, fill: `#ef4444`, fontSize: 10, fontFamily: `monospace`, children: `8.0 bar limit` }),
                      // Dynamic surge wave
                      (0, x.jsx)(`path`, {
                        d: `M 0 140 Q 120 135 180 ${Math.max(15, 180 - (calculatedPressure / 10) * 160)} T 320 ${Math.max(40, 180 - (calculatedPressure / 10) * 110)} T 500 130`,
                        fill: `none`,
                        stroke: isBreach ? `#ef4444` : `#10b981`,
                        strokeWidth: 3
                      })
                    ]
                  }),

                  // Status Alert
                  (0, x.jsxs)(`div`, {
                    style: {
                      padding: `12px 16px`,
                      borderRadius: 12,
                      background: isBreach ? `rgba(239, 68, 68, 0.15)` : `rgba(16, 185, 129, 0.15)`,
                      border: `1px solid ${isBreach ? `#ef4444` : `#10b981`}`,
                      display: `flex`,
                      alignItems: `center`,
                      gap: 12
                    },
                    children: [
                      (0, x.jsx)(`span`, {
                        style: {
                          width: 10,
                          height: 10,
                          borderRadius: `50%`,
                          background: isBreach ? `#ef4444` : `#10b981`,
                          flexShrink: 0
                        }
                      }),
                      (0, x.jsx)(`span`, {
                        style: {
                          fontFamily: I,
                          fontSize: 13,
                          fontWeight: 700,
                          color: isBreach ? `#fca5a5` : `#6ee7b7`
                        },
                        children: isBreach
                          ? `CRITICAL BREACH: Surge exceeds pipe yield threshold (+${(calculatedPressure - 8.0).toFixed(1)} bar over limit)`
                          : `VERIFIED SAFE: Staged ramp trajectory maintains flange safety`
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

// 2. Multi-Agent Bento Grid Component
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

// 3. 10-Step Incident Chronicle: "The Friday Surge Attack" Component
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

// 4. iQOO Hackathon Alignment & The Builders Component
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
