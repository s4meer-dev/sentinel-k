/**
 * SENTINEL-K — Sovereign Field Security Copilot for Cyber-Physical Infrastructure
 * iQOO Hackathon 2026 Submission
 * Consolidated Domain Data & Telemetry Specifications
 */

export const BRAND = {
  name: "SENTINEL-K",
  tagline: "Field Security Copilot for Cyber-Physical Infrastructure",
  subTag: "iQOO Hackathon 2026 Submission",
  heroHeadlineTop: "The command isn’t trusted.",
  heroHeadlineBottom: "The consequence is verified.",
  heroSubtitle:
    "Sentinel-K turns the field terminal into an autonomous security copilot. Before deceptive operator dispatches reach municipal SCADA, on-device SLMs parse intent in 18ms and simulate forward hydrodynamic water hammer in real-time.",
  primaryCta: "EXPLORE PIPELINE",
  secondaryCta: "DIGITAL TWIN SANDBOX"
};

export const DELIVERABLES = [
  "Intake Pumps",
  "Modbus Logic",
  "Surge Valves",
  "Digital Twins",
  "Valve Ramps",
  "SCADA Nodes"
];

// 5 Interactive Simulation Phases for the Phone Terminal
export const SIMULATION_PHASES = [
  {
    id: "INCOMING",
    step: "01",
    tag: "01 // DISPATCH INTERCEPT",
    title: "Cellular Voice Clone Intercepted",
    subtitle: "Air-Gapped Field Terminal · Audio Buffer",
    badge: "8.9 URGENCY FLAG",
    badgeType: "warn",
    lead: "Supervisor Reynolds impersonation demanding immediate Pump 4 override.",
    rawSnippet: 'INCOMING DISPATCH: "Urgent Miller — Main intake valve sticking. Override pump sequence 4 to 850 RPM immediately."',
    telemetry: [
      { label: "Caller ID", val: "+1-800-442-FLOW (UNVERIFIED)", status: "warn" },
      { label: "Voice Acoustic Match", val: "71% (Synthetic Clone Anomaly)", status: "danger" },
      { label: "Shift Roster Status", val: "Off-Duty (Annual Leave Active)", status: "warn" },
      { label: "Urgency Coercion Index", val: "8.9 / 10 (Critical Pressure)", status: "danger" }
    ],
    verdict: "SUSPICIOUS DISPATCH QUARANTINED",
    verdictDetail: "Isolated in mobile enclave; prohibited from direct SCADA transmission."
  },
  {
    id: "EXTRACTING",
    step: "02",
    tag: "02 // NPU INTENT STRUCTURING",
    title: "On-Device Audio to SCADA Payload",
    subtitle: "Snapdragon® 8 Elite NPU · 45 TOPS",
    badge: "18ms INFERENCE",
    badgeType: "info",
    lead: "Quantized 3B SLM runs locally at 18ms latency with 100% air-gap guarantee.",
    rawSnippet: "EXTRACTED INTENT: SET_SPEED(PUMP_04, 850 RPM) -> WRITE_REG(40012, 0x0352)",
    telemetry: [
      { label: "Target Actuator", val: "High-Pressure Booster Pump 04", status: "neutral" },
      { label: "Decompiled Register", val: "Modbus %QW104 (Addr 40012)", status: "neutral" },
      { label: "Commanded Value", val: "850 RPM (Hex: 0x0352)", status: "neutral" },
      { label: "Cloud Egress", val: "0.0 KB (Strict Air-Gap Verified)", status: "success" }
    ],
    verdict: "INTENT VECTOR COMPILED",
    verdictDetail: "Human speech transformed into structured, verifiable register instructions."
  },
  {
    id: "CYBER_CHECK",
    step: "03",
    tag: "03 // SCADA CYBER GATE",
    title: "The Kinetic Paradox: Firewalls Pass",
    subtitle: "Deterministic OT Logic Verifier",
    badge: "CYBER: 100% VALID",
    badgeType: "warn",
    lead: "Modbus protocol syntax, CRC-16 checksum, and RBAC token are valid. Firewalls are blind.",
    rawSnippet: "PACKET: [0x00, 0x01, 0x00, 0x00, 0x00, 0x06, 0x01, 0x06, 0x9C, 0x4C, 0x03, 0x52] -> CRC: 0x9B4E",
    telemetry: [
      { label: "Modbus TCP Protocol", val: "CRC-16 0x9B4E (Passed)", status: "success" },
      { label: "Register Permission", val: "Range 40001 - 40050 (Permitted)", status: "success" },
      { label: "Session Token", val: "Active Field Engineer Token (Valid)", status: "success" },
      { label: "IT/OT Firewall", val: "ALL CHECKS APPROVED (PASS)", status: "warn" }
    ],
    verdict: "CYBER VALIDATION PASSED",
    verdictDetail: "Conventional defenses approve the packet — proving why pure cyber security is fatally blind."
  },
  {
    id: "PHYSICAL_SIM",
    step: "04",
    tag: "04 // EPANET HYDRAULIC TWIN",
    title: "Joukowsky Shock Wave Predicted",
    subtitle: "EPANET 2.2 / WNTR Kinematics Engine",
    badge: "11.4 BAR SPIKE DETECTED",
    badgeType: "danger",
    lead: "Simulates transient flow equations. Predicts 11.4 bar shock wave against 9.2 bar limit.",
    rawSnippet: "SIMULATION HAZARD: Node 14 Peak: 11.4 bar @ t+18s. Exceeds Yield Threshold (9.2 bar).",
    telemetry: [
      { label: "Upstream Valve A2", val: "0% (Fully Throttled/Closed)", status: "danger" },
      { label: "Baseline Pressure", val: "4.5 bar (Nominal Grid State)", status: "neutral" },
      { label: "Predicted Peak", val: "11.4 bar @ t+18s (CATASTROPHIC)", status: "danger" },
      { label: "Pipe Yield Limit", val: "9.2 bar (Rupture Expected in 18s)", status: "danger" }
    ],
    verdict: "PHYSICAL OVERPRESSURE REJECTED",
    verdictDetail: "Automated intervention locks SCADA queue, preventing municipal pipe blowout."
  },
  {
    id: "REPLAN",
    step: "05",
    tag: "05 // SOVEREIGN BIOMETRIC SIGN",
    title: "Autonomous Critic Replanning",
    subtitle: "Safety Critic & Air-Gapped Enclave",
    badge: "SAFE PEAK 7.4 BAR",
    badgeType: "success",
    lead: "Plan B: Modulate Relief Valve 2 to 40%, staged ramp Pump 4 to 620 RPM. Safe 7.4 bar peak.",
    rawSnippet: "REPLANNED TRAJECTORY: Pre-open V_02 to 40% -> Ramp P_04 to 620 RPM in 3 stages -> Peak 7.4 bar.",
    telemetry: [
      { label: "Action Synthesis", val: "Staged Modulation Trajectory", status: "success" },
      { label: "Valve A2 Sequence", val: "Pre-open 40% over 25 seconds", status: "success" },
      { label: "Pump 4 Speed Cap", val: "Staged 620 RPM (3x 30s steps)", status: "success" },
      { label: "Safety Margin", val: "1.8 bar below critical threshold", status: "success" }
    ],
    verdict: "CYBER ✓ | PHYSICAL ✓ | READY TO SIGN",
    verdictDetail: "Touch biometric sensor below to cryptographically sign Ed25519 authorization."
  }
];

// 5 Signature Operational Moments Carousel
export const OPERATIONAL_MOMENTS = [
  {
    id: 1,
    phase: "INCOMING",
    tag: "STAGE 01 // DISPATCH INTERCEPT",
    hardware: "Air-Gapped Field Enclave · Cellular Telemetry",
    title: "Adversary Authority Spoofing Intercepted",
    headline: "CELLULAR VOICE CLONE DIRECTED AT FIELD TECHNICIAN",
    description:
      "An incoming direct call impersonates Regional Supervisor Reynolds, ordering immediate manual override to ramp Pump 4 to 850 RPM. Sentinel-K intercepts the command at the field node before any SCADA contact.",
    metricBadge: "8.9 / 10 COERCIVE URGENCY",
    metricColor: "bg-amber-100 text-amber-900 border-amber-300",
    telemetry: [
      { label: "Caller Identity", value: "+1-800-442-FLOW (UNVERIFIED)", status: "warn" },
      { label: "Voice Spectral Match", value: "71% (Acoustic Anomaly Flagged)", status: "hazard" },
      { label: "Supervisor Status", value: "Off-Duty (Annual Leave Active)", status: "warn" },
      { label: "Command Urgency Index", value: "Critical (8.9 / 10)", status: "warn" }
    ],
    verdict: {
      status: "SUSPICIOUS SIGNAL QUARANTINED",
      details: "Command isolated on-device; prevented from direct PLC execution.",
      type: "warn"
    }
  },
  {
    id: 2,
    phase: "EXTRACTING",
    tag: "STAGE 02 // NPU EVIDENCE EXTRACTION",
    hardware: "Snapdragon® 8 Elite NPU · 45 TOPS On-Device SLM",
    title: "On-Device Audio-to-Intent Structuring",
    headline: "QUANTIZED SLM 3B TRANSLATES NATURAL SPEECH TO SCADA PAYLOAD",
    description:
      "The on-device SLM runs locally at 18ms inference latency. It extracts structured operational parameters from human audio, synthesizing the target Modbus register write while flagging psychological coercion patterns.",
    metricBadge: "45 TOPS LOCAL NPU · 18ms LATENCY",
    metricColor: "bg-blue-100 text-blue-900 border-blue-300",
    telemetry: [
      { label: "Extracted Action", value: "SET_RPM(PUMP_04, 850)", status: "neutral" },
      { label: "Synthesized Modbus", value: "WRITE_REG(ADDR: 40012, VAL: 0x0352)", status: "neutral" },
      { label: "Target PLC Node", value: "STATION_04_PUMP_STATION", status: "neutral" },
      { label: "On-Device Privacy", value: "100% Air-Gapped (Zero Cloud Leak)", status: "good" }
    ],
    verdict: {
      status: "INTENT VECTOR STRUCTURED",
      details: "Audio translated into verifiable cyber-physical instruction.",
      type: "pass"
    }
  },
  {
    id: 3,
    phase: "CYBER_CHECK",
    tag: "STAGE 03 // CYBER VALIDATION GATE",
    hardware: "Deterministic SCADA Logic Engine · Air-Gap Enclave",
    title: "The Kinetic Paradox: Traditional Defenses Pass",
    headline: "MODBUS SYNTAX, CRC CHECKSUM & RBAC PERMISSIONS ARE 100% VALID",
    description:
      "The instruction complies with Modbus protocol specifications, register boundaries, and network policy. Conventional IT/OT firewalls approve this command completely — proving why pure cyber verification is fatally blind.",
    metricBadge: "FIREWALL STATUS: APPROVED (BLIND)",
    metricColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    telemetry: [
      { label: "Protocol Verification", value: "Modbus TCP / CRC 0x9B4E (Valid)", status: "good" },
      { label: "Register Access Range", value: "40001 - 40050 (Permitted)", status: "good" },
      { label: "Field Technician Token", value: "Role-Based Token: Valid Operator", status: "good" },
      { label: "Firewall Verdict", value: "PERMITTED: NO THREAT DETECTED", status: "warn" }
    ],
    verdict: {
      status: "CYBER CHECKS PASSED (TRADITIONAL BLINDSPOT)",
      details: "Command passes syntax & access checks; advances to physical simulation.",
      type: "warn"
    }
  },
  {
    id: 4,
    phase: "PHYSICAL_SIM",
    tag: "STAGE 04 // EPANET 2.2 HYDRODYNAMIC TWIN",
    hardware: "Forward Kinetic Solver · WNTR Physics Engine",
    title: "Joukowsky Fluid Shockwave Calculation",
    headline: "11.4 BAR TRANSIENT SURGE PREDICTED (9.2 BAR THRESHOLD BREACH)",
    description:
      "The physics twin computes Joukowsky water hammer pressure waves. Ramping Pump 4 while Valve 2 is closed creates a destructive 11.4 bar shockwave at Node 14 in 18 seconds, rupturing the main municipal distribution line.",
    metricBadge: "11.4 BAR SURGE · 9.2 BAR LIMIT",
    metricColor: "bg-red-100 text-red-900 border-red-300",
    telemetry: [
      { label: "Valve 2 State", value: "Closed (0% Aperture)", status: "hazard" },
      { label: "Baseline Line Pressure", value: "4.5 bar (Nominal Operating State)", status: "neutral" },
      { label: "Predicted Peak Shockwave", value: "11.4 bar @ t+18s (CRITICAL EXCURSION)", status: "hazard" },
      { label: "Pipe Yield Strength", value: "9.2 bar Max Operating Margin", status: "hazard" }
    ],
    verdict: {
      status: "PHYSICAL INVARIANT BREACH DETECTED",
      details: "Destructive hydraulic surge blocked. Command execution prohibited.",
      type: "reject"
    }
  },
  {
    id: 5,
    phase: "REPLAN",
    tag: "STAGE 05 // SOVEREIGN BIOMETRIC SIGN",
    hardware: "Qualcomm 3D Sonic Sensor Gen 2 · Ed25519 Enclave",
    title: "Critic Replanning & Human Biometric Sign-Off",
    headline: "PLAN B SYNTHESIZED: 7.4 BAR SAFE PEAK WITH BIOMETRIC COMMIT",
    description:
      "Sentinel-K autonomously synthesizes a safe trajectory: pre-open Valve 2 to 40%, then ramp Pump 4 staged to 620 RPM in three 30s increments (peak: 7.4 bar — safe). The operator cryptographically signs with on-device fingerprint.",
    metricBadge: "SAFE REPLAN · 7.4 BAR PEAK",
    metricColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    telemetry: [
      { label: "Synthesized Strategy", value: "Staged Relief Valve Pre-Opening", status: "good" },
      { label: "Valve 2 Relief Setting", value: "Pre-Open to 40% Modulation", status: "good" },
      { label: "Ramped Pump 4 Target", value: "620 RPM (3 Staged 30s Steps)", status: "good" },
      { label: "Simulated Peak Pressure", value: "7.4 bar (1.8 bar Safety Margin)", status: "good" }
    ],
    verdict: {
      status: "SOVEREIGN OPERATOR SIGN-OFF COMMITTED",
      details: "Replanned action verified safe, signed with Ed25519, dispatched to SCADA.",
      type: "replan"
    }
  }
];

// The Vulnerability Gap: 3 Core Threat Pillars
export const PROBLEM_PILLARS = [
  {
    title: "AUTHORITY SPOOFING & SOCIAL VECTORS",
    lead: "“Emergency from Dispatch: Ramp Pump 4 immediately to relieve upstream surge.”",
    detail:
      "Sophisticated adversaries bypass perimeter firewalls by targeting the human operator via spoofed phone calls, forged WhatsApp/SMS dispatches, or cloned executive voice notes.",
    consequence: "Operators lack instant forensic tools to authenticate verbal and textual instructions.",
    badge: "HUMAN TRUST FAILURE"
  },
  {
    title: 'THE "VALID BUT DEADLY" COMMAND',
    lead: "A secure packet or authorized command can cause catastrophic kinetic failure.",
    detail:
      'Traditional OT security checks packet signatures and syntax: "Is this valid Modbus/DNP3? Yes." But it cannot predict fluid hammer when Valve 2 is closed while Pump 4 runs at 850 RPM.',
    consequence: "Cyber-security guarantees valid syntax; it does not guarantee physical survivability.",
    badge: "CYBER-PHYSICAL BLINDSPOT"
  },
  {
    title: "THE UNARMED FIELD TERMINAL",
    lead: "Field operators carry high-power mobile nodes, but zero predictive protection.",
    detail:
      "Modern iQOO smartphones contain multi-TOPS NPUs and desktop-class connectivity, yet field technicians are forced to make life-and-death infrastructure decisions with bare hands and gut feeling.",
    consequence: "No automated physical twin simulation or proof-of-intent engine exists at the field edge.",
    badge: "UNEXPLOITED EDGE HARDWARE"
  }
];

// Traditional SCADA vs Sentinel-K Comparison
export const COMPARISON_DATA = {
  traditional: {
    title: "TRADITIONAL SCADA FIREWALL",
    subtitle: "Perimeter syntax & access verification only",
    color: "#b42318",
    items: [
      { label: "Human Verification", desc: "Assumes caller is authentic if credentials match." },
      { label: "Syntax Checks", desc: "Confirms Modbus frame is well-formed." },
      { label: "Physical Consequences", desc: "Completely blind to fluid transients and pressure waves." },
      { label: "Emergency Response", desc: "Trips circuit breakers only AFTER pipe rupture." }
    ]
  },
  sentinel: {
    title: "SENTINEL-K DUAL-DOMAIN DEFENSE",
    subtitle: "Human evidence triage + Dynamic digital twin validation",
    color: "#067647",
    items: [
      { label: "Human Verification", desc: "Forensic SLM extracts coercion and voice clone anomalies." },
      { label: "Syntax Checks", desc: "Deterministic OpenPLC logic bounds checking." },
      { label: "Physical Consequences", desc: "EPANET / WNTR calculates forward fluid hammer in real-time." },
      { label: "Emergency Response", desc: "Rejects destructive spikes & replans safe ramp trajectories." }
    ]
  }
};

// 8 Autonomous Verification Pipeline Stages
export const PIPELINE_STEPS = [
  {
    id: 1,
    title: "OPERATIONAL DISPATCH INGESTION",
    stage: "INGEST",
    description: "Incoming verbal, textual, or radio dispatch arrives on the field technician's sovereign terminal.",
    engine: "OriginOS 5 Capture / Audio Buffer",
    technicalDetails:
      "Passive capture via audio streaming socket or encrypted WhatsApp/SMS dispatch payload. No continuous surveillance; activated strictly on dispatch reception.",
    outputSnippet: 'AUDIO STREAM: "Ramp Pump 4 to 850 RPM immediately. Water surge inbound."',
    status: "VERIFIED"
  },
  {
    id: 2,
    title: "NPU FORENSIC EVIDENCE PARSING",
    stage: "EVIDENCE EXTRACTION",
    description: "On-device Snapdragon NPU parses semantic intent, urgency vector, and caller metadata.",
    engine: "On-Device Quantized SLM + Forensic Audio Analyzer",
    technicalDetails:
      "Voice biometric extraction, acoustic spectral analysis, urgency sentiment score (0.89), and caller ID certificate extraction in 18ms.",
    outputSnippet: "INTENT: SET_SPEED(PUMP_04, 850 RPM) · URGENCY: HIGH · CALLER: +1-800-DISPATCH (UNVERIFIED)",
    status: "FLAGGED"
  },
  {
    id: 3,
    title: "AUTHORITY & ROSTER CROSS-CHECK",
    stage: "IDENTITY & AUTHORITY",
    description: "Sentinel-K cross-references the claimed dispatcher against shift roster and cryptographic keys.",
    engine: "Enterprise Identity Gateway / Office Kit Bridge",
    technicalDetails:
      "Shift roster indicates claimed dispatcher is currently offline. No hardware token signature matches incoming call payload.",
    outputSnippet: 'ALERT: Claimed identity "Supervisor Miller" is not on active duty roster.',
    status: "FLAGGED"
  },
  {
    id: 4,
    title: "DETERMINISTIC COMMAND SYNTHESIS",
    stage: "PROTOCOL COMPILATION",
    description: "Translates high-level human intent into concrete Modbus TCP / DNP3 register writes.",
    engine: "Domain Protocol Compiler",
    technicalDetails:
      "Compiles parsed intent to Modbus Register 40012 = 0x0352 (850 RPM) targeting PLC Station 04.",
    outputSnippet: "RAW_MODBUS: [0x00, 0x01, 0x00, 0x00, 0x00, 0x06, 0x01, 0x06, 0x9C, 0x4C, 0x03, 0x52]",
    status: "VERIFIED"
  },
  {
    id: 5,
    title: "CYBER VALIDATION GATE",
    stage: "CYBER DEFENSE",
    description: "OT firewall and protocol validation check syntax, schema, and perimeter access control.",
    engine: "Deterministic OT Logic Validator",
    technicalDetails:
      "Checks function codes, register ranges, and syntax validity. The command is syntactically flawless and authorized on the network layer.",
    outputSnippet: "CYBER_GATE: PASS (Valid Modbus frame, registered register 40012, no syntax errors)",
    status: "VERIFIED"
  },
  {
    id: 6,
    title: "PHYSICAL TWIN SIMULATION",
    stage: "KINETIC SIMULATION",
    description: "Deterministic EPANET / WNTR hydraulic engine simulates downstream consequences.",
    engine: "WNTR Hydraulic Kinematics Engine",
    technicalDetails:
      "Runs forward hydrodynamic transient model. Valve 02 is closed (0%). Pump 4 at 850 RPM induces surge pressure of 11.4 bar at Node 14.",
    outputSnippet: "SIMULATION RESULT: Peak pressure 11.4 bar at t+42s. EXCEEDS SAFETY LIMIT (9.2 bar).",
    status: "FAIL"
  },
  {
    id: 7,
    title: "CONSEQUENCE REJECTION & REPLANNING",
    stage: "CRITIC REPLANNING",
    description: "Automatic safety invariant breach triggers the Critic agent to compute a safe remediation.",
    engine: "Sentinel-K Constraint-Satisfaction Critic",
    technicalDetails:
      "Synthesizes Plan B: Open Relief Valve 02 to 40% before ramping Pump 4 to 620 RPM in three 30s increments. Simulated peak: 7.4 bar (SAFE).",
    outputSnippet: "SAFE_PLAN_SYNTHESIS: Open V_02 40% -> Ramp P_04 staged to 620 RPM -> Peak 7.4 bar.",
    status: "REPLANNED"
  },
  {
    id: 8,
    title: "OPERATOR SOVEREIGN CONFIRMATION",
    stage: "HUMAN SOVEREIGNTY",
    description: "The operator reviews evidence, the rejected failure, and authorizes the safe replanned path.",
    engine: "Air-Gapped Terminal Biometric Enclave",
    technicalDetails:
      "Operator confirms via ultrasonic in-display thumbprint sensor. Ed25519 cryptographic signature generated on-device and committed to SCADA gateway.",
    outputSnippet: "SIGNATURE: ED25519_OK [0x7F4A...B902] -> DISPATCHED TO PLC STATION 04",
    status: "VERIFIED"
  }
];

// 5 Specialized Multi-Agent Roles
export const MULTI_AGENTS = [
  {
    name: "Dispatch Ingestion Agent",
    tier: "ON-DEVICE NPU",
    model: "Quantized SLM (3B)",
    role: "Parses incoming audio dispatch or text radio stream into structured operational intent frames.",
    tools: ["Acoustic Spectrogram", "Audio Buffer Hook", "Semantic Slot Extractor"],
    badgeColor: "border-blue-200 text-blue-800 bg-blue-50"
  },
  {
    name: "Evidence Forensic Agent",
    tier: "EDGE / LOCAL",
    model: "Forensic SLM + Heuristic Engine",
    role: "Cross-checks caller ID certificates, urgency coercion patterns, and active personnel duty rosters.",
    tools: ["Telecom Meta Analyzer", "Duty Roster Gateway", "Acoustic Spoof Detector"],
    badgeColor: "border-amber-200 text-amber-800 bg-amber-50"
  },
  {
    name: "Protocol Compiler Agent",
    tier: "DETERMINISTIC COMPILER",
    model: "Grammar-Guided AST Generator",
    role: "Translates high-level candidate intent into strict Modbus TCP / DNP3 function codes and register offsets.",
    tools: ["Modbus Protocol Linter", "Register Range Verifier", "CRC Checksum Builder"],
    badgeColor: "border-purple-200 text-purple-800 bg-purple-50"
  },
  {
    name: "Hydraulic Kinematics Agent",
    tier: "WORKSTATION TWIN",
    model: "EPANET / WNTR Physics Wrapper",
    role: "Executes hydrodynamic transient forward simulation across pipe network graph under commanded parameters.",
    tools: ["WNTR Hydrodynamic Solver", "Surge Wave Calculator", "Manifold Sensor Interceptor"],
    badgeColor: "border-indigo-200 text-indigo-800 bg-indigo-50"
  },
  {
    name: "Safety Critic Agent",
    tier: "ORCHESTRATOR",
    model: "Constraint-Satisfaction Planner",
    role: "Activated when physical invariants fail. Synthesizes staged, non-destructive alternate actions.",
    tools: ["Pareto Frontier Optimizer", "Staged Ramp Synthesizer", "Relief Valve Governor"],
    badgeColor: "border-emerald-200 text-emerald-800 bg-emerald-50"
  }
];

// 10-Step Incident Chronicle: "The Friday Surge Attack"
export const INCIDENT_STEPS = [
  {
    step: 1,
    time: "14:02:11",
    title: "INCOMING CALL TO OPERATOR",
    summary: "Phone rings on field technician’s secure terminal from apparent regional dispatch.",
    actor: "Adversary (Spoofed Dispatch)",
    action: "Caller claims urgent pipeline pressure buildup from upstream storm runoff.",
    threatStatus: "SUSPICIOUS"
  },
  {
    step: 2,
    time: "14:02:45",
    title: "OPERATIONAL COMMAND DELIVERED",
    summary: "Adversary insists technician manually ramp Pump 4 to 850 RPM immediately.",
    actor: "Adversary",
    action: '"This is urgent Miller. Override SCADA interlock and set Pump 4 to 850 RPM right now."',
    threatStatus: "CRITICAL"
  },
  {
    step: 3,
    time: "14:03:12",
    title: "SENTINEL-K SCAN ACTIVATED",
    summary: 'Technician opens Sentinel-K on field terminal: "Verify Incoming Action".',
    actor: "Field Operator",
    action: "One-tap verification initiates forensic audio processing and intent structuring.",
    threatStatus: "NEUTRAL"
  },
  {
    step: 4,
    time: "14:03:28",
    title: "NPU FORENSIC EXTRACTION",
    summary: "Snapdragon NPU parses audio stream; detects synthetic acoustic artifacts & high urgency.",
    actor: "On-Device NPU",
    action: "Intent: SET_RPM(PUMP_04, 850). Urgency index: 8.9/10. Voice similarity anomaly flagged.",
    threatStatus: "WARNING"
  },
  {
    step: 5,
    time: "14:03:50",
    title: "IDENTITY ROSTER MISMATCH",
    summary: "Identity bridge confirms Supervisor Miller is on annual leave and not logged into plant portal.",
    actor: "Identity Gateway",
    action: "Originating telephone number does not match registered enterprise SIM certificate.",
    threatStatus: "WARNING"
  },
  {
    step: 6,
    time: "14:04:15",
    title: "CYBER VALIDATION: PASSED",
    summary: "Generated Modbus TCP instruction is evaluated against plant protocol firewall.",
    actor: "Deterministic Cyber Gate",
    action: "Syntax: Valid. Register 40012 accessible. Command passes conventional cyber defense completely.",
    threatStatus: "NEUTRAL"
  },
  {
    step: 7,
    time: "14:04:40",
    title: "PHYSICAL TWIN SIMULATION: 11.4 BAR HAZARD",
    summary: "EPANET/WNTR simulator executes forward kinetic projection with current valve states.",
    actor: "Hydrodynamic Twin",
    action: "Valve 02 is closed. 850 RPM induces 11.4 bar shockwave at Node 14. Safety limit: 9.2 bar.",
    threatStatus: "CRITICAL"
  },
  {
    step: 8,
    time: "14:05:05",
    title: "HARD REJECT & REPLAN TRIGGER",
    summary: "Physical twin issues a hard REJECT. Safety Critic agent immediately synthesizes safe path.",
    actor: "Safety Critic Agent",
    action: "Replanned: Open Relief Valve 2 to 40%, then stage Pump 4 ramp to 620 RPM in 3 increments.",
    threatStatus: "SAFE"
  },
  {
    step: 9,
    time: "14:05:30",
    title: "SOVEREIGN OPERATOR CONFIRMATION",
    summary: "Technician inspects side-by-side evidence dossier, confirms safe replanned sequence.",
    actor: "Field Operator",
    action: "Operator reviews evidence, approves the replanned trajectory with fingerprint biometrics.",
    threatStatus: "SAFE"
  },
  {
    step: 10,
    time: "14:05:55",
    title: "PLANT PROTECTED & AUDIT LOGGED",
    summary: "Safe staged command committed to OpenPLC. Incident bundle recorded to tamper-proof audit trail.",
    actor: "OpenPLC Station 04",
    action: "Peak pressure constrained to 7.4 bar. Municipal water grid protected. Adversary neutralized.",
    threatStatus: "SAFE"
  }
];

// iQOO Hackathon 2026 Alignment Pillars
export const HACKATHON_PILLARS = [
  {
    icon: "cpu",
    title: "iQOO HARDWARE INTEGRATION",
    desc: "Harnesses flagship Qualcomm Snapdragon NPU performance for local SLM inference (18ms) and biometric enclave security."
  },
  {
    icon: "zap",
    title: "ORIGINOS 5 OFFICE KIT SYNERGY",
    desc: "Seamless zero-latency pairing between the mobile field node and the deep-simulation control room workstation."
  },
  {
    icon: "shieldCheck",
    title: "HIGH-STAKES REAL WORLD UTILITY",
    desc: "Solves an urgent national security dilemma: defending water, power, and transit infrastructure from cyber-physical sabotage."
  },
  {
    icon: "heartHandshake",
    title: "RESPONSIBLE & SOVEREIGN AI",
    desc: "No autonomous destructive control. The human field operator remains the ultimate sovereign authority for all kinetic actions."
  }
];

// Team Members / Builders
export const TEAM_MEMBERS = [
  {
    name: "J Sashank",
    role: "Lead Architect & Cyber-Physical Systems",
    focus: "Dual-domain causal verification engine, SLM forensic orchestration, and invariant governance.",
    icon: "cpu"
  },
  {
    name: "D Mounika",
    role: "OriginOS Field Interface & Security UX",
    focus: "OriginOS 5 Field Terminal UI, industrial digital-twin schematics, and biometric confirmation workflows.",
    icon: "shield"
  },
  {
    name: "S Sameer",
    role: "Hydrodynamic Modeling & OT Protocols",
    focus: "EPANET / WNTR physics simulation integration, Modbus register compiler, and overpressure limit enforcement.",
    icon: "activity"
  }
];

// Interactive Incident Dossiers (for Case Study Drawer / Modal)
export const INCIDENT_DOSSIERS = [
  {
    slug: "alpa",
    name: "Incident 01: Municipal Water Facility",
    role: "Pumping Substation 04",
    video: "/card1-designer.mp4",
    impact: "Intercepted spoofed supervisor override commanding Pump 4 to 100% capacity; prevented 9.6 bar fluid hammer burst.",
    logo: "/assets/logo-substation.png",
    summary: "Extracted unverified urgency markers, validated clean Modbus syntax, detected hydraulic breach in digital twin, and synthesized safe ramp.",
    sections: [
      {
        heading: "The Context",
        body: "Municipal Water Reclamation Facility manages primary distribution lines and high-output booster pumps. Unverified commands targeting pump setpoints create severe risk of transient overpressurization and structural pipe rupture."
      },
      {
        heading: "The Attack Vector",
        body: "A spoofed emergency dispatch instructed field technicians to override SCADA interlocks and force Booster Pump 4 to 100% duty cycle while intake Valve A2 was throttled at 18% aperture. Conventional firewalls approved the syntax."
      },
      {
        heading: "The Sentinel-K Interception",
        body: "Sentinel-K on the field terminal intercepted the instruction. On-device SLM extracted intent in 18ms. EPANET digital twin forward simulation detected a destructive 9.6 bar fluid hammer wave at Node 14 in 14 seconds. The Critic agent synthesized a staged 45-second valve pre-opening."
      },
      {
        heading: "The Physical Outcome",
        body: "The operator approved the safe replanned sequence via biometric sign-off. Pressure was bounded to 5.8 bar (safe), saving an estimated $450K in catastrophic municipal water line repairs."
      }
    ],
    tickets: [
      { title: "Triage spoofed supervisor override script on mobile", request: "Urgency token 8.9 flagged; caller unverified." },
      { title: "Decompile parameter payload to Modbus register writes", request: "Modbus %QW104 (Addr 40012) -> 850 RPM." },
      { title: "Execute EPANET dynamic hydraulic surge twin", request: "Simulated 9.6 bar pressure shock wave in Section B flange." }
    ]
  },
  {
    slug: "alpin-capital",
    name: "Incident 02: Regional Transmission Grid",
    role: "Pressure Reduction Vault 02",
    video: "/card2.mp4",
    impact: "Blocked abrupt emergency closure of Main Surge Valve A2; prevented cavitation and upstream line rupture.",
    logo: "/assets/logo-vault.png",
    summary: "Maintained downstream minimum pressure envelope while safely executing staged flow deceleration over 60 seconds.",
    sections: [
      {
        heading: "The Context",
        body: "Regional Water Distribution Network manages high-pressure trunk conduits and pressure-reduction vaults across municipal boundaries. Rapid actuator movements induce severe water hammer shocks."
      },
      {
        heading: "The Attack Vector",
        body: "An unauthorized script sent over corporate chat ordered an immediate 0-second emergency closure of Valve A2 during peak morning flow."
      },
      {
        heading: "The Sentinel-K Interception",
        body: "WNTR transient simulation proved that slamming Valve A2 in 0s would produce severe cavitation followed by a 12.1 bar reverse shockwave. Sentinel-K re-routed the deceleration curve across a 60-second ramp."
      },
      {
        heading: "The Physical Outcome",
        body: "Fluid kinetic energy dissipated smoothly through surge tanks; zero cavitation occurred."
      }
    ],
    tickets: [
      { title: "Immediate Valve Slam Intercepted", request: "0-second closure blocked by deterministic bounds." },
      { title: "Cavitation Modeling in WNTR", request: "Predicted negative vapor pressures causing structural damage." },
      { title: "Synthesized 60s Staged Deceleration", request: "Safe pressure envelope maintained at 6.2 bar." }
    ]
  }
];

// Frequently Asked Questions
export const FAQS = [
  {
    q: "Does Sentinel-K continuously monitor everything on the operator's phone?",
    a: "No. Sentinel-K is strictly reactive and action-centric. Continuous background surveillance was red-teamed and rejected due to Android OS permission constraints, battery drain, latency, and severe privacy issues. Sentinel-K activates specifically when a high-impact operational request is captured for verification."
  },
  {
    q: "Why isn't standard IT / OT cybersecurity sufficient for critical infrastructure?",
    a: "Modern plants are protected by firewalls, air gaps, and authentication, yet attackers can still socially engineer the authorized operator. If an operator is tricked into executing an unsafe command using their own legitimate credentials, firewalls see only authorized traffic. Sentinel-K validates the causal consequence of the action itself."
  },
  {
    q: "How does the Cyber vs Physical validation check work?",
    a: "A command is first inspected for cyber validity: syntax integrity, permission scope, and malicious payload markers. If it passes cyber checks, it is fed into a digital twin simulation (e.g. EPANET / WNTR hydraulic modeling for water plants) to simulate physical consequences like pressure, temperature, and flow. An action that is cyber-clean but physically catastrophic is immediately rejected."
  },
  {
    q: "What is the role of the Large Language Model in Sentinel-K?",
    a: "The LLM is strictly assigned responsibility for reasoning, context interpretation, and multi-agent orchestration. It is never treated as an authority on mathematical truth or physical reality. Deterministic tools provide measurements, digital twins calculate physical laws, and human operators provide final sign-off."
  },
  {
    q: "How does Vivo / iQOO Office Kit integrate into this architecture?",
    a: "Office Kit provides the low-latency secure edge bridge between the field engineer's iQOO smartphone (evidence capture and decision interface) and the control room / engineering workstation running heavy simulations (OpenPLC, hydraulic digital twin, and LangGraph multi-agent clusters)."
  },
  {
    q: "Are the demo numbers real plant measurements?",
    a: "In accordance with strict engineering integrity, all values are transparently designated as 'Simulated Environment' or 'Demo Condition'. Prototype verification runs against standard benchmark digital-twin hydraulic models (EPANET 2.2 / WNTR) simulating a municipal water reclamation facility."
  }
];
