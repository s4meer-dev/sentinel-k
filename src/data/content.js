export const PARTNER_LOGOS = [
  { name: "GoPro", src: "/assets/504005ac7071697bbdfd9ee4625ed5dff8ee529a.svg" },
  { name: "Gillette", src: "/assets/bbce9ed952a7420976ed2c9f616ed1df87bdb9aa.svg" },
  { name: "Nespresso", src: "/assets/c711fe9ebd777477bb6d7ed5d01bcceba139f212.svg" },
  { name: "Alan", src: "/assets/7b95b73d9de4dcf48f3ddcb20e754ae7f424ef4a.svg" }
];

export const TOOL_STACK = Array.from({ length: 12 }, (_, i) => `/stack/tool-${i}.png`);

export const FAQS = [
  {
    q: "We already have a design team. Can you still help?",
    a: "Absolutely. We integrate into your existing workflow and tools: Jira, Notion, Figma, Slack, Linear. Think of us as an extension of your team, not a replacement."
  },
  {
    q: "Who will be my designer?",
    a: "A dedicated senior product designer with experience shipping products at startups and scale-ups. They own your project end to end. No handoffs, no junior rotations."
  },
  {
    q: "What can you design?",
    a: "Everything a founding designer would handle. Mobile apps, SaaS products, websites, landing pages, design systems, dashboards, and more. UX research, UI design, prototyping, all the way to developer handoff."
  },
  {
    q: "How fast can you start?",
    a: "Most engagements kick off within a few days. Book a call, tell us what you need, and we'll match you with the right designer."
  }
];

export const CASE_STUDIES = [
  {
    slug: "alpa",
    title: "Alpa Financial OS",
    name: "Mickael B.",
    role: "CEO",
    months: 3,
    tasks: 40,
    impact: "Structured and designed the product from MVP to commercial launch, supporting the company in raising $4M",
    logo: "/assets/logo-alpa.png",
    summary: "Rebuilt P&L and Cash Flow experiences, structured financial data into actionable layers, and redesigned onboarding flows.",
    images: [
      "/assets/alpa-dashboard-today.webp",
      "/assets/alpa-cashflow-notifications.webp",
      "/assets/alpa-onboarding-flow.webp"
    ],
    tags: ["Financial OS", "SaaS Dashboard", "Design System"]
  },
  {
    slug: "klintt",
    title: "Klintt Wealth Management",
    name: "Franck",
    role: "Co-Founder",
    months: 4,
    tasks: 55,
    impact: "Complete mobile & web overhaul for European investment ecosystem",
    logo: "/assets/logo-klintt.png",
    summary: "End-to-end design of investment portfolio screens, mobile applications, and investor onboarding journeys.",
    images: [
      "/assets/alpin-klintt-app.webp",
      "/assets/alpin-klintt-flows.webp",
      "/assets/alpin-klintt-site.webp"
    ],
    tags: ["Mobile App", "Fintech", "Web Platform"]
  },
  {
    slug: "winter",
    title: "Winter Energy Platform",
    name: "Camille",
    role: "Product Lead",
    months: 2,
    tasks: 28,
    impact: "Accelerated user engagement by 3.2x through clear energy audit visualizations",
    logo: "/assets/logo-winter.png",
    summary: "Created interactive renovation roadmap, consumption breakdown metrics, and instant audit wizards.",
    images: [
      "/assets/winter-actions.webp",
      "/assets/winter-consumption-detailed-view.webp",
      "/assets/winter-energy-dashboard-dpe.webp",
      "/assets/winter-renovation-journey-flow.webp"
    ],
    tags: ["CleanTech", "Mobile & Web", "Energy Audit"]
  }
];

export const PRICING_PLANS = [
  {
    id: "monthly",
    name: "Dedicated Senior Designer",
    subtitle: "One request at a time. Pause or cancel anytime.",
    price: "5,490€",
    period: "/month",
    features: [
      "One request at a time",
      "Average 4-day delivery per sprint",
      "Direct Slack & Figma communication",
      "Unlimited revisions & requests",
      "Pause or cancel anytime with no fee",
      "Full IP ownership of all design files"
    ],
    popular: true,
    cta: "Start today"
  },
  {
    id: "quarterly",
    name: "Full Team Acceleration",
    subtitle: "Two requests simultaneously. Double throughput.",
    price: "9,900€",
    period: "/month",
    features: [
      "Two active requests at a time",
      "Daily syncs & priority queue",
      "Senior Product Designer + Design Lead",
      "Design systems & complex prototypes",
      "Pause or cancel anytime",
      "Complete design operations handoff"
    ],
    popular: false,
    cta: "Book an introduction"
  }
];
