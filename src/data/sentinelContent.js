/**
 * SENTINEL-K — Field Security Copilot for Cyber-Physical Infrastructure
 * iQOO Hackathon 2026 Submission Data Store
 * 
 * Central Principle:
 * LLM = Reasoning and orchestration
 * Tools = Actual sensing/computation
 * Deterministic Validators = Source of truth
 * Human = Final authority for high-impact action
 */

export const BRAND = {
  name: "SENTINEL-K",
  tagline: "Field Security Copilot for Cyber-Physical Infrastructure",
  subTag: "iQOO Hackathon 2026 Submission",
  heroHeadlineTop: "THE COMMAND ISN'T TRUSTED.",
  heroHeadlineBottom: "THE CONSEQUENCE IS VERIFIED.",
  heroSubtitle: "Sentinel-K is a cyber-physical security copilot for critical-infrastructure field operators. It verifies the human-side evidence behind high-impact operational commands, then validates their cyber and physical consequences before execution.",
  primaryCta: "EXPLORE SENTINEL-K",
  secondaryCta: "SEE THE VALIDATION LOOP"
};

// Rotating deliverables / focus areas in Sentinel-K
export const CORE_FOCUS_AREAS = [
  "Evidence Extraction",
  "Cyber Constraint Checking",
  "Physical Digital Twins",
  "Autonomous Replanning",
  "Human Authority Handoff",
  "Edge Telemetry Bridge"
];

// Problem Layer comparison
export const PROBLEM_LAYERS = {
  human: {
    title: "HUMAN TRUST LAYER",
    subtitle: "Where social engineering and unauthorized operational instructions penetrate",
    items: [
      { label: "Supervisor Impersonation", desc: "Spoofed executive and dispatch identities commanding immediate manual bypasses." },
      { label: "Fabricated Urgency", desc: "Artificial operational emergencies created to rush operators past safety verification protocols." },
      { label: "External Diagnostic Scripts", desc: "Unvetted parameter scripts, USB snippets, or ad-hoc batch commands shared over chat." },
      { label: "Unverified Channels", desc: "Operational orders transmitted across informal messaging apps, SMS, or untracked voice calls." }
    ]
  },
  machine: {
    title: "MACHINE CONSEQUENCE LAYER",
    subtitle: "Where physical valves, pumps, and PLC control logic translate commands into reality",
    items: [
      { label: "PLC Ladder Logic", desc: "Actuator state registers and controller setpoints modified without causal sanity checks." },
      { label: "Pressure Transients", desc: "Water hammer, pipe ruptures, and hydraulic overpressurization caused by abrupt valve sequencing." },
      { label: "Flow & Temperature Excursions", desc: "Chemical dosing and thermal limits exceeded through desynchronized pump schedules." },
      { label: "Irreversible Damage", desc: "Physical destruction of high-capital municipal water pumps and chemical separation tanks." }
    ]
  },
  causalFlow: [
    { step: "01", label: "HUMAN DECISION", desc: "Operator receives and trusts spoofed instruction" },
    { step: "02", label: "MACHINE ACTION", desc: "PLC commands physical actuators and pumps" },
    { step: "03", label: "PHYSICAL CONSEQUENCE", desc: "Overpressure burst and structural system failure" }
  ]
};

// Core Architectural Principles (4-Quadrant)
export const CORE_PRINCIPLES = [
  {
    role: "LLM",
    title: "REASONING & ORCHESTRATION",
    badge: "Hypothesis & Intent",
    desc: "Extracts observable evidence, understands operator context, formulates action proposals, and synthesizes multi-step replanning strategies. Never treated as an infallible oracle of ground truth.",
    icon: "brain"
  },
  {
    role: "DOMAIN TOOLS",
    title: "MEASUREMENT & SENSING",
    badge: "Deterministic Computation",
    desc: "Specialized deterministic tools that execute OCR, cryptographic sender verification, PLC register parsing, and hydraulic calculations. Tools provide measured facts, not probability distributions.",
    icon: "tool"
  },
  {
    role: "VALIDATORS",
    title: "TRUTH CHECK & LAWS",
    badge: "Causal Security Kernel",
    desc: "Rigid cyber formal logic verifiers combined with dynamic digital-twin physical simulations. Evaluates mathematical bounds (pressure, flow, thermal, valency) to reject catastrophic states.",
    icon: "shield"
  },
  {
    role: "HUMAN",
    title: "FINAL APPROVAL AUTHORITY",
    badge: "Human-in-the-Loop",
    desc: "The field engineer maintains ultimate sign-off authority for high-impact physical actuation. Sentinel-K presents validated recommendations, evidence chains, and safety proofs—never silently executing unsafe commands.",
    icon: "user"
  }
];

// Sentinel-K 8-Stage Pipeline
export const PIPELINE_STAGES = [
  {
    id: "field-event",
    number: "01",
    name: "FIELD EVENT",
    summary: "Operator receives high-impact command via SMS, chat, or voice snippet.",
    details: "e.g., 'URGENT — I’m the plant supervisor. Override pump sequence 4 immediately. Use this diagnostic script.'"
  },
  {
    id: "evidence",
    number: "02",
    name: "EVIDENCE EXTRACTION",
    summary: "Multimodal extraction of observable signals on the iQOO field device.",
    details: "Identifies authority claims, urgency markers, target physical tags, and unverified sender credentials."
  },
  {
    id: "reasoning",
    number: "03",
    name: "REASONING & INTENT",
    summary: "Agent graph structures the operational hypothesis and isolates requested changes.",
    details: "Translates ambiguous human requests into a precise, machine-parsable action proposal."
  },
  {
    id: "proposal",
    number: "04",
    name: "ACTION PROPOSAL",
    summary: "Formalizes target PLC setpoints, valve states, and pump rpm rates.",
    details: "Packages exact registers for cyber and physical evaluation before any hardware touch."
  },
  {
    id: "cyber-val",
    number: "05",
    name: "CYBER VALIDATION",
    summary: "Checks logic integrity, permission scope, and formal security constraints.",
    details: "Verifies whether the command payload contains buffer overflows, unauthorized registers, or invalid ladder logic."
  },
  {
    id: "physical-val",
    number: "06",
    name: "PHYSICAL SIMULATION",
    summary: "Simulates consequences inside the digital twin hydraulic model.",
    details: "Computes dynamic line pressure, flow rates, and surge tank levels over a forward time horizon."
  },
  {
    id: "decision",
    number: "07",
    name: "DECISION & REPLAN",
    summary: "Detects unsafe physical state (pressure spike) -> Rejects patch -> Re-plans safe sequence.",
    details: "If physical constraints fail, an alternative ramped trajectory is generated that satisfies the mission safely."
  },
  {
    id: "execution",
    number: "08",
    name: "OPERATOR AUTHORIZATION",
    summary: "Presents transparent proof dossier to the engineer for final sign-off.",
    details: "Engineer reviews evidence summary, cyber confirmation, and verified safety envelope before execution."
  }
];

// Split-Screen Two Worlds Comparison
export const TWO_WORLDS = {
  humanWorld: {
    heading: "HUMAN SECURITY WORLD",
    tagline: "Observable Behavioral Evidence",
    features: [
      { name: "Voice & Audio Triage", desc: "Analyzes ambient acoustic stress and cadence anomalies without biometric overreach." },
      { name: "OCR & Document Parsing", desc: "Extracts script payloads, maintenance job IDs, and equipment serials from screen capture." },
      { name: "Sender Identity Attestation", desc: "Cross-references sender channels against plant authorization matrices." },
      { name: "Contextual Urgency Evaluation", desc: "Flags coercive urgency language designed to bypass mandatory control room verification." }
    ]
  },
  physicalWorld: {
    heading: "CYBER-PHYSICAL WORLD",
    tagline: "Deterministic Engineering Realities",
    features: [
      { name: "PLC Register Safety Bounds", desc: "Formal constraint verification on OpenPLC / Modbus write commands." },
      { name: "Hydraulic Dynamic Twin", desc: "Simulates transient pressure waves, cavitation risk, and tank overflow limits." },
      { name: "Process Co-Dependency Tracking", desc: "Ensures downstream valves are open prior to upstream pump acceleration." },
      { name: "Fail-Safe Envelope Enforcement", desc: "Inviolable boundary conditions programmed outside LLM control." }
    ]
  }
};

// Kinetic Validation Signature Demo
export const KINETIC_DEMO_CASE = {
  attackTitle: "Water Treatment Plant — Spoofed Booster Pump 4 Override",
  incomingMessage: "URGENT from Supervisor Mark: Main intake valve A2 is sticking. Force override Pump 4 to 100% capacity immediately via script override.sh to prevent backflow.",
  unverifiedEvidence: [
    "Authority claim: Supervisor Mark (Unverified phone number)",
    "Urgency level: CRITICAL / IMMEDIATE",
    "Action: Set Pump 4 to 3600 RPM (100% duty cycle)",
    "Condition: Valve A2 currently at 15% aperture (Restricted)"
  ],
  cyberCheck: {
    status: "PASSED",
    authorizedToken: "Valid operator session",
    logicIntegrity: "No malware signatures in script syntax",
    plcRegisterMatch: "Target address %QW104 mapped correctly",
    result: "CYBER CHECK: ✓ PASS (Authorized format & clean syntax)"
  },
  physicalCheck: {
    status: "FAILED",
    simulatedParameter: "Main Discharge Line Pressure",
    baselinePressure: "4.2 bar",
    safeThreshold: "7.5 bar",
    predictedPeak: "9.6 bar @ t+14s",
    consequence: "High probability of catastrophic rupture in Section B flange.",
    result: "PHYSICAL CHECK: ✕ REJECTED (Hydraulic limit exceeded)"
  },
  replanResult: {
    status: "VERIFIED SAFE",
    newAction: "Staged sequence: Modulate Valve A2 to 65% over 45s, then ramp Pump 4 to 55% capacity.",
    newPredictedPressure: "5.8 bar (Safe margin: 1.7 bar below threshold)",
    result: "CYBER ✓ | PHYSICAL ✓ | READY FOR OPERATOR APPROVAL"
  }
};

// Digital Twin Specifications
export const DIGITAL_TWIN_SYSTEM = {
  facility: "Simulated Municipal Water Reclamation Facility",
  disclaimer: "Prototype validation uses a simulated industrial environment (EPANET / WNTR dynamic simulation models). Demonstrations use simulated telemetry for evaluation.",
  components: [
    { id: "PUMP-01", name: "Primary Intake Pump", status: "RUNNING", rpm: 1750, flow: "420 m³/h", health: "98%" },
    { id: "PUMP-04", name: "High-Pressure Booster Pump 4", status: "STANDBY", rpm: 0, flow: "0 m³/h", health: "100%" },
    { id: "VALVE-A2", name: "Intake Throttling Valve", status: "PARTIAL", aperture: "18%", target: "65%", health: "NOMINAL" },
    { id: "TANK-03", name: "Chemical Separation Basin", status: "NOMINAL", level: "4.8m", capacity: "80%", pressure: "4.2 bar" }
  ],
  telemetryStream: [
    { metric: "Line Pressure", current: "4.2 bar", maxAllowed: "7.5 bar", unit: "bar", status: "SAFE" },
    { metric: "Discharge Flow", current: "385 L/s", maxAllowed: "600 L/s", unit: "L/s", status: "SAFE" },
    { metric: "Fluid Temp", current: "18.4 °C", maxAllowed: "45.0 °C", unit: "°C", status: "SAFE" },
    { metric: "Vibration Index", current: "0.14 mm/s", maxAllowed: "2.80 mm/s", unit: "mm/s", status: "SAFE" }
  ]
};

// Agent Architecture
export const AGENT_HIERARCHY = [
  {
    role: "Orchestrator Agent",
    spec: "Master Workflow Controller",
    responsibility: "Coordinates multi-agent context handoff, drives state transitions, and enforces the mandatory validation barrier before presenting actions to operators.",
    tools: ["LangGraph State Engine", "Session Blackboard"]
  },
  {
    role: "Evidence Agent",
    spec: "Field Signal Extractor",
    responsibility: "Extracts textual, audio, and visual evidence from incoming field communications on the iQOO smartphone node without persistent background surveillance.",
    tools: ["OCR Engine", "Acoustic Feature Triage", "Metadata Parser"]
  },
  {
    role: "Threat & Intent Agent",
    spec: "Causal Security Modeler",
    responsibility: "Identifies social engineering patterns, authority spoofing, and operational impact classes to classify the action risk tier.",
    tools: ["Social Engineering Taxonomy", "Intent Decompiler"]
  },
  {
    role: "Logic Agent",
    spec: "Control Code Translator",
    responsibility: "Decompiles high-level operator intents into discrete PLC ladder instructions and setpoint adjustment scripts for targeted verification.",
    tools: ["OpenPLC Decompiler", "Modbus Register Mapper"]
  },
  {
    role: "Validation Agent",
    spec: "Cyber-Physical Verification Kernel",
    responsibility: "Executes deterministic cyber security checks and invokes the digital-twin simulator to measure physical parameter violations.",
    tools: ["WNTR Hydraulic Twin", "EPANET Engine", "Formal Bounds Validator"]
  },
  {
    role: "Critic & Replanner",
    spec: "Adaptive Trajectory Synthesizer",
    responsibility: "Interrogates failed physical states, formulates alternative actuation ramps, and iterates until both cyber and physical criteria are verified.",
    tools: ["Gradient State Search", "Safety Margin Optimizer"]
  }
];

// Why Not Just An LLM? (3-Column Comparison)
export const LLM_COMPARISON = [
  {
    category: "A Pure Language Model",
    capabilities: [
      "Can generate persuasive explanations",
      "Can interpret messy natural language",
      "Can write plausible PLC control code",
      "CANNOT calculate hydraulic shock waves",
      "CANNOT verify physical pressure limits",
      "Prone to hallucinating safety guarantees"
    ],
    verdict: "PROPOSES THE ACTION",
    verdictColor: "#f59e0b"
  },
  {
    category: "Isolated Domain Engines",
    capabilities: [
      "Accurately calculate hydraulic flow equations",
      "Execute deterministic mathematical models",
      "Run industrial PLC ladder simulations",
      "CANNOT interpret chaotic field messages",
      "CANNOT extract evidence from human panic",
      "Blind to social engineering attacks"
    ],
    verdict: "PROVES THE CONSEQUENCE",
    verdictColor: "#00e5ff"
  },
  {
    category: "SENTINEL-K ARCHITECTURE",
    capabilities: [
      "Uses LLM strictly for reasoning & planning",
      "Uses domain engines for physical reality testing",
      "Connects phone evidence to digital twin models",
      "Autonomous Rejection -> Replanning loop",
      "Guaranteed formal boundary checks",
      "Human operator maintains final execution approval"
    ],
    verdict: "CONNECTS REASONING TO REALITY",
    verdictColor: "#10b981"
  }
];

// 10-Step Interactive Incident Timeline
export const INCIDENT_TIMELINE = [
  { step: "01", title: "Suspicious Instruction Received", actor: "Field Operator", desc: "Operator receives an urgent chat message claiming to be plant management, demanding an immediate bypass of Intake Pump 4." },
  { step: "02", title: "Evidence Extracted on iQOO Device", actor: "Sentinel-K Mobile Node", desc: "On-device evidence module extracts sender metadata, authority claims, high urgency tokens, and the raw parameter script." },
  { step: "03", title: "Operator Requests Verification", actor: "Field Operator", desc: "Operator triggers Sentinel-K verification rather than executing the unverified instruction blindly." },
  { step: "04", title: "Control Logic Analyzed", actor: "Logic Agent", desc: "System decompiles the requested parameter override into raw Modbus register writes targeting Pump 4 duty cycle." },
  { step: "05", title: "Cyber Validation Executed", actor: "Validation Agent", desc: "Confirms script syntax is well-formed, authorization tokens are authentic, and no memory exploits are present. (Cyber: PASS)" },
  { step: "06", title: "Physical Digital Twin Invoked", actor: "Digital Twin Engine", desc: "Simulation executes hydraulic flow equations for the requested 3600 RPM pump state against current valve positions." },
  { step: "07", title: "Catastrophic Overpressure Detected", actor: "Validation Kernel", desc: "Simulation predicts a 9.6 bar pressure spike in Section B within 14 seconds, exceeding pipe yield strength. (Physical: FAIL)" },
  { step: "08", title: "Critic Triggers Autonomous Replan", actor: "Replanner Agent", desc: "Sentinel-K automatically rejects the raw patch and computes a staged 45-second valve modulation ramp to prevent fluid hammer." },
  { step: "09", title: "Verified Action Proposal Produced", actor: "Orchestrator", desc: "New trajectory passes both cyber permissions and physical constraints with a safe 1.7 bar operating margin." },
  { step: "10", title: "Operator Authorizes Execution", actor: "Human Authority", desc: "Operator reviews the side-by-side evidence chain, rejects the spoofed command, and approves the safe replanned sequence." }
];

// Tech Stack Classification (Implemented vs Demonstrated vs Research)
export const TECH_STACK = [
  {
    tier: "IMPLEMENTED (Prototype Core)",
    status: "READY",
    color: "#10b981",
    items: [
      { name: "React 18 + Modular State Engine", desc: "High-contrast industrial interface, live pipeline telemetry, and responsive field layouts." },
      { name: "Reactive Verification State Machine", desc: "Deterministic state transitions managing evidence extraction through safety sign-off." },
      { name: "Interactive Kinetic Sandbox", desc: "Client-side hydraulic twin simulation modeling pressure, valve states, and overpressure triggers." },
      { name: "Evidence & Threat Parser", desc: "On-device observable evidence extraction logic targeting social engineering patterns." }
    ]
  },
  {
    tier: "DEMONSTRATED (Integration Targets)",
    status: "PROTOTYPE",
    color: "#00e5ff",
    items: [
      { name: "Android / iQOO Mobile Runtime", desc: "On-device evidence capture interface leveraging camera, voice, and contextual OCR." },
      { name: "LangGraph Multi-Agent Orchestration", desc: "Python-based asynchronous state graph for cross-agent collaboration and replanning." },
      { name: "EPANET / WNTR Hydraulic Simulator", desc: "Digital twin backend computing real-time water network hydraulics." },
      { name: "OpenPLC SoftPLC Testbed", desc: "Emulated industrial PLC environment testing Modbus register manipulation." }
    ]
  },
  {
    tier: "RESEARCH / FUTURE ROADMAP",
    status: "PLANNED",
    color: "#a855f7",
    items: [
      { name: "Hardware Security Module (HSM) Attestation", desc: "Cryptographic hardware binding between iQOO field device and plant control units." },
      { name: "Formal SMT Constraint Verification", desc: "Z3 theorem proving applied to combined ladder logic and physical invariant states." },
      { name: "Hardware-in-the-Loop Plant Testbed", desc: "Physical scale water pumping apparatus for live hardware fault injection." }
    ]
  }
];

// Validation Metrics (Honest Labels: Target / Demo Condition)
export const VALIDATION_METRICS = [
  {
    category: "Cyber Security Validation",
    metrics: [
      { label: "Spoofed Command Interception", value: "100%", tag: "DEMO CONDITION", desc: "Zero unverified commands passed directly to actuation without validation." },
      { label: "Payload Syntax Parsing", value: "< 240 ms", tag: "BENCHMARK TARGET", desc: "On-device decompilation of parameter scripts into structured Modbus registers." }
    ]
  },
  {
    category: "Physical Constraint Enforcement",
    metrics: [
      { label: "Overpressure Excursion Prevention", value: "0 Breaches", tag: "SIMULATED ENVIRONMENT", desc: "100% of hydraulic hammer pressure spikes above 7.5 bar successfully rejected." },
      { label: "Safe Margin Preservation", value: ">= 1.5 bar", tag: "VERIFIED SAFETY BOUND", desc: "Replanned trajectories maintain verified operating buffer below yield limits." }
    ]
  },
  {
    category: "Operational Latency & Usability",
    metrics: [
      { label: "Cross-Domain Triage Latency", value: "< 1.8 s", tag: "SIMULATED PIPELINE", desc: "End-to-end evidence extraction, cyber check, physical twin run, and decision." },
      { label: "Human Decision Transparency", value: "100% Traceable", tag: "DESIGN REQUIREMENT", desc: "Every recommendation backed by inspectable evidence and parameter plots." }
    ]
  }
];

// iQOO Hackathon Alignment Pillars
export const IQOO_ALIGNMENT = [
  {
    title: "PHONE-FIRST FIELD DEFENSE",
    desc: "The critical infrastructure operator is mobile. The iQOO device serves as the field security instrument capturing operational requests directly where human decisions occur."
  },
  {
    title: "ON-DEVICE CONTEXTUAL AI",
    desc: "Local AI extracts observable evidence from voice, screen, and text without streaming sensitive critical-infrastructure data to unvetted cloud providers."
  },
  {
    title: "OFFICE KIT EDGE BRIDGE",
    desc: "Seamless, secure handoff connects lightweight mobile field interaction with heavy verification lab compute (digital twin physics and formal SMT solvers)."
  },
  {
    title: "REAL TOOLS OVER PURE LANGUAGE",
    desc: "Replaces naive chatbot assumptions with deterministic cyber and physical tools. The language model reasons; physics determines the boundary."
  }
];

// FAQ Section
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
    a: "A command is first inspected for cyber validity: syntax integrity, permission scope, and malicious payload markers. If it passes cyber checks, it is fed into a digital twin simulation (e.g. hydraulic modeling for water plants) to simulate physical consequences like pressure, temperature, and flow. An action that is cyber-clean but physically catastrophic is immediately rejected."
  },
  {
    q: "What is the role of the Large Language Model in Sentinel-K?",
    a: "The LLM is strictly assigned responsibility for reasoning, context interpretation, and multi-agent orchestration. It is never treated as an authority on mathematical truth or physical reality. Deterministic tools provide measurements, digital twins calculate physical laws, and human operators provide final sign-off."
  },
  {
    q: "How does Office Kit integrate into this architecture?",
    a: "Office Kit provides the low-latency secure edge bridge between the field engineer's iQOO smartphone (evidence capture and decision interface) and the control room / engineering workstation running heavy simulations (OpenPLC, hydraulic digital twin, and LangGraph multi-agent clusters)."
  },
  {
    q: "Are the demo numbers real plant measurements?",
    a: "No. In accordance with strict engineering integrity, all values are transparently designated as 'Simulated Environment' or 'Demo Condition'. Prototype verification runs against standard benchmark digital-twin hydraulic models (EPANET / WNTR) simulating a municipal water reclamation facility."
  }
];
