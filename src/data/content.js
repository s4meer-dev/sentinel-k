export const PARTNER_LOGOS = [
  { name: "Siemens S7", src: "/assets/logo-siemens.svg" },
  { name: "Schneider Modicon", src: "/assets/logo-schneider.svg" },
  { name: "OpenPLC", src: "/assets/logo-openplc.svg" },
  { name: "Modbus TCP", src: "/assets/logo-modbus.svg" },
  { name: "EPANET 2.2", src: "/assets/logo-epanet.svg" }
];

export const TOOL_STACK = Array.from({ length: 12 }, (_, i) => `/stack/tool-${i}.png`);

export const FAQS = [
  {
    q: "Does Sentinel-K continuously monitor everything on the operator's phone?",
    a: "No. Sentinel-K is strictly reactive and action-centric. Continuous background surveillance was explicitly rejected due to Android OS constraints, latency, battery drain, and privacy concerns. Sentinel-K activates specifically when a high-impact operational request is submitted for verification."
  },
  {
    q: "Why isn't standard IT / OT cybersecurity sufficient for critical infrastructure?",
    a: "Modern plants are protected by firewalls, air gaps, and authentication, yet attackers can still socially engineer the authorized operator. If an operator is tricked into executing an unsafe command using their own credentials, firewalls see only authorized traffic. Sentinel-K validates the causal physical consequence of the action itself."
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
    a: "No. In accordance with strict engineering integrity, all values are transparently designated as simulated environments or benchmark targets. Prototype verification runs against standard benchmark digital-twin hydraulic models (EPANET / WNTR) simulating a municipal water reclamation facility."
  }
];

export const CASE_STUDIES = [
  {
    slug: "intake-pump",
    title: "Intake Pump 4 Override",
    name: "Mark T.",
    role: "Lead Plant Operator",
    months: 1,
    tasks: 14,
    impact: "Predicted 9.6 bar hydraulic hammer rupture; autonomously replanned to safe 5.8 bar trajectory",
    logo: "/assets/logo-alpa.png",
    summary: "A spoofed emergency SMS commanded an immediate 3600 RPM override on Booster Pump 4. Sentinel-K intercepted the instruction, simulated the hydraulic shock wave, rejected the command, and synthesized a gradual 45-second valve modulation ramp.",
    images: [
      "/assets/alpa-dashboard-today.webp",
      "/assets/alpa-cashflow-notifications.webp",
      "/assets/alpa-onboarding-flow.webp"
    ],
    tags: ["Municipal Water", "Hydraulic Hammer", "Spoofed Command"]
  },
  {
    slug: "discharge-valve",
    title: "Discharge Valve Rapid Slam",
    name: "Elena R.",
    role: "SCADA Engineer",
    months: 2,
    tasks: 28,
    impact: "Zero-pressure cavitation cavity prevented; maintained 1.8 bar minimum operating margin",
    logo: "/assets/logo-klintt.png",
    summary: "A malicious maintenance routine attempted a sudden closure on Main Discharge Valve V-102. Sentinel-K identified the transient pressure wave risk, enforced physical flow invariants, and routed bypass relief flow through the surge tank.",
    images: [
      "/assets/alpin-klintt-app.webp",
      "/assets/alpin-klintt-flows.webp",
      "/assets/alpin-klintt-site.webp"
    ],
    tags: ["Distribution Network", "Valve Transient", "Twin Simulation"]
  },
  {
    slug: "chlorine-dosing",
    title: "Chemical Dosing Acceleration",
    name: "David K.",
    role: "Water Quality Officer",
    months: 1,
    tasks: 19,
    impact: "Prevented 360% chemical toxicity spike in municipal residential drinking supply",
    logo: "/assets/logo-winter.png",
    summary: "An urgent message claimed a biological outbreak requiring an immediate 18.5 mg/L chlorine dose. The cyber check passed syntax rules, but the physical quality twin caught the toxic threshold violation and constrained dosing to safe limits.",
    images: [
      "/assets/winter-actions.webp",
      "/assets/winter-consumption-detailed-view.webp",
      "/assets/winter-energy-dashboard-dpe.webp",
      "/assets/winter-renovation-journey-flow.webp"
    ],
    tags: ["Chemical Basin", "Potability Safety", "Multi-Agent Replan"]
  }
];

export const PRICING_PLANS = [
  {
    id: "field-node",
    name: "Mobile Field Node (iQOO)",
    subtitle: "On-device evidence triage and operator decision interface.",
    price: "Edge",
    period: "/node",
    features: [
      "On-device context & urgency parser",
      "Cryptographic command token binding",
      "Vivo Office Kit edge bridge connectivity",
      "Reactive activation (0 background battery drain)",
      "Direct tactile operator sign-off interface",
      "Offline emergency fallback boundary rules"
    ],
    popular: true,
    cta: "Deploy Field Node"
  },
  {
    id: "plant-cluster",
    name: "Plant Infrastructure Suite",
    subtitle: "Full multi-agent LangGraph orchestration with hydraulic twin.",
    price: "Plant",
    period: "/core",
    features: [
      "Real-time EPANET / WNTR hydraulic simulation",
      "OpenPLC Modbus register constraint validation",
      "Autonomous Rejection & Replanning loop",
      "LangGraph multi-agent coordination barrier",
      "Formal safety margin boundary enforcement",
      "Audit-grade causal decision telemetry logs"
    ],
    popular: false,
    cta: "Inspect Architecture"
  }
];
