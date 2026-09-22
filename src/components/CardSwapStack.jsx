import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./CardSwap.css";
import { Layers, ShieldCheck, Cpu, ShieldAlert, Fingerprint, Clock, Activity, Waves } from "lucide-react";

export default function CardSwapStack() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeCard, setActiveCard] = useState(0);

  const CARDS_DATA = [
    {
      tier: "TIER 01 // HUMAN SECURITY",
      badge: "8.9 URGENCY FLAG",
      badgeColor: "#fef0c7",
      badgeText: "#b54708",
      title: "Adversary Call Intercepted",
      lead: "Supervisor Reynolds impersonation ordering emergency bypass.",
      metric: "Caller Identity: UNVERIFIED (+1-800-442-FLOW)",
      subMetric: "Spectral Analysis: 71% Synthetic Voice Anomaly Flagged",
      icon: "alert"
    },
    {
      tier: "TIER 02 // EDGE COMPUTE",
      badge: "45 TOPS NPU · 18ms",
      badgeColor: "#eff8ff",
      badgeText: "#175cd3",
      title: "NPU Intent Structuring",
      lead: "Quantized 3B SLM translates natural language to Modbus register writes.",
      metric: "Target: SET_SPEED(PUMP_04, 850 RPM)",
      subMetric: "Compiled: WRITE_REG(40012, 0x0352) · 100% Air-Gapped",
      icon: "cpu"
    },
    {
      tier: "TIER 03 // CYBER GATE",
      badge: "SYNTAX: 100% VALID",
      badgeColor: "#fef0c7",
      badgeText: "#b54708",
      title: "Traditional Defenses Pass",
      lead: "Conventional firewalls verify Modbus TCP syntax and access control.",
      metric: "Modbus CRC-16 Checksum: 0x9B4E (Passed)",
      subMetric: "Firewall Verdict: ALL PERMISSIONS APPROVED (BLIND)",
      icon: "shield"
    },
    {
      tier: "TIER 04 // PHYSICAL TWIN",
      badge: "11.4 BAR SPIKE REJECTED",
      badgeColor: "#fee4e2",
      badgeText: "#b42318",
      title: "EPANET 2.2 Kinetic Twin",
      lead: "Simulates transient fluid shockwaves. Detects 11.4 bar spike at Node 14.",
      metric: "Predicted Peak: 11.4 bar vs 9.2 bar yield limit",
      subMetric: "Surge Outcome: CATASTROPHIC PIPE BLOWOUT BLOCKED",
      icon: "waves"
    },
    {
      tier: "TIER 05 // SOVEREIGN SIGN",
      badge: "SAFE PEAK 7.4 BAR",
      badgeColor: "#dcfae6",
      badgeText: "#067647",
      title: "Biometric Enclave Commit",
      lead: "Critic synthesizes Plan B: 40% valve relief + staged 620 RPM ramp.",
      metric: "Safety Margin: 1.8 bar below critical rupture envelope",
      subMetric: "Operator Commit: Ultrasonic Fingerprint Ed25519 Signed",
      icon: "fingerprint"
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length) return;

    const total = cards.length;
    const cardDistance = 40;
    const verticalDistance = 46;

    // Initial placement
    cards.forEach((card, i) => {
      gsap.set(card, {
        x: i * cardDistance,
        y: -i * verticalDistance,
        z: -i * cardDistance * 1.5,
        xPercent: -50,
        yPercent: -50,
        skewY: 3,
        transformOrigin: "center center",
        zIndex: total - i,
        force3D: true
      });
    });

    let currentOrder = Array.from({ length: total }, (_, i) => i);

    const swapCards = () => {
      const topIdx = currentOrder[0];
      const topCard = cards[topIdx];
      if (!topCard) return;

      setActiveCard((prev) => (prev + 1) % total);

      // Animation timeline
      const tl = gsap.timeline();

      // Drop top card down and out
      tl.to(topCard, {
        y: "+=160",
        z: "+=60",
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut"
      });

      // Shift other cards forward
      for (let i = 1; i < total; i++) {
        const cardIdx = currentOrder[i];
        const card = cards[cardIdx];
        const newSlotIdx = i - 1;
        tl.to(
          card,
          {
            x: newSlotIdx * cardDistance,
            y: -newSlotIdx * verticalDistance,
            z: -newSlotIdx * cardDistance * 1.5,
            zIndex: total - newSlotIdx,
            duration: 0.6,
            ease: "power2.inOut"
          },
          "-=0.45"
        );
      }

      // Return old top card to back of stack
      const backSlotIdx = total - 1;
      tl.set(topCard, {
        x: backSlotIdx * cardDistance,
        y: -backSlotIdx * verticalDistance,
        z: -backSlotIdx * cardDistance * 1.5,
        zIndex: 1
      });

      tl.to(topCard, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      });

      currentOrder.push(currentOrder.shift());
    };

    const interval = setInterval(swapCards, 4200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="stack"
      style={{
        padding: "100px 24px",
        maxWidth: 1240,
        margin: "0 auto",
        position: "relative"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 48,
          alignItems: "center"
        }}
      >
        {/* Left Column: Narrative */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 999,
              background: "#EDE7DB",
              color: "#140906",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.05em",
              marginBottom: 16
            }}
          >
            <Layers style={{ width: 14, height: 14, color: "#ff4405" }} />
            <span>04 // 3D VERIFICATION STACK</span>
          </div>

          <h2
            className="font-cygne"
            style={{
              fontSize: "clamp(32px, 4.5vw, 54px)",
              fontWeight: 700,
              color: "#140906",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 20
            }}
          >
            Tangible 3D Defense in Motion.
          </h2>

          <p className="font-sans-tight" style={{ fontSize: 16, color: "#535862", lineHeight: 1.6, marginBottom: 28 }}>
            Witness how Sentinel-K executes multi-stage verification in real time. Each card represents an autonomous defense tier running on sovereign field terminals and plant workstations.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              style={{
                background: "#ffffff",
                padding: "14px 18px",
                borderRadius: 18,
                border: "1px solid rgba(20, 9, 6, 0.08)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, color: "#717680" }}>On-Device NPU Execution:</span>
              <strong style={{ fontSize: 12, fontFamily: "JetBrains Mono", color: "#140906" }}>Snapdragon® 8 Elite (45 TOPS)</strong>
            </div>

            <div
              style={{
                background: "#ffffff",
                padding: "14px 18px",
                borderRadius: 18,
                border: "1px solid rgba(20, 9, 6, 0.08)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, color: "#717680" }}>Kinetic Co-Processor:</span>
              <strong style={{ fontSize: 12, fontFamily: "JetBrains Mono", color: "#140906" }}>EPANET 2.2 / WNTR Physics</strong>
            </div>

            <div
              style={{
                background: "#ffffff",
                padding: "14px 18px",
                borderRadius: 18,
                border: "1px solid rgba(20, 9, 6, 0.08)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, color: "#717680" }}>Sovereign Signing Enclave:</span>
              <strong style={{ fontSize: 12, fontFamily: "JetBrains Mono", color: "#067647" }}>Ultrasonic Biometric Ed25519</strong>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Stack Container */}
        <div
          style={{
            position: "relative",
            height: 480,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            ref={containerRef}
            className="card-swap-container"
            style={{ width: 360, height: 300, position: "relative" }}
          >
            {CARDS_DATA.map((card, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="card-swap-card"
                style={{
                  width: 340,
                  height: 270,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "#ffffff"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <span style={{ fontSize: 9.5, fontFamily: "JetBrains Mono", fontWeight: 800, color: "#717680" }}>
                      {card.tier}
                    </span>
                    <span
                      style={{
                        fontSize: 9,
                        fontFamily: "JetBrains Mono",
                        fontWeight: 800,
                        padding: "3px 8px",
                        borderRadius: 999,
                        background: card.badgeColor,
                        color: card.badgeText
                      }}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "#140906", marginBottom: 8 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: 12.5, color: "#535862", lineHeight: 1.4, margin: 0 }}>
                    {card.lead}
                  </p>
                </div>

                <div
                  style={{
                    background: "#EDE7DB",
                    borderRadius: 14,
                    padding: "10px 12px",
                    border: "1px solid rgba(20, 9, 6, 0.06)"
                  }}
                >
                  <div style={{ fontSize: 10.5, fontWeight: 700, color: "#140906", marginBottom: 3 }}>
                    {card.metric}
                  </div>
                  <div style={{ fontSize: 9.5, color: "#717680", fontFamily: "JetBrains Mono" }}>
                    {card.subMetric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
