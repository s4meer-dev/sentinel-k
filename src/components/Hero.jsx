import React, { useState, useEffect } from "react";

const DELIVERABLES = ["Intake Pumps", "Modbus Logic", "Surge Valves", "Digital Twins"];
const SCREENS = [
  "/assets/alpa-dashboard-today.webp",
  "/assets/alpin-klintt-app.webp",
  "/assets/winter-actions.webp"
];

export default function Hero() {
  const [deliverableIndex, setDeliverableIndex] = useState(0);
  const [screenIndex, setScreenIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setDeliverableIndex((prev) => (prev + 1) % DELIVERABLES.length);
        setScreenIndex((prev) => (prev + 1) % SCREENS.length);
        setFade(true);
      }, 300);
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #ff4e00 0%, #ff5e1a 60%, #ff6b2b 100%)",
        color: "#ffffff",
        paddingTop: 140,
        paddingBottom: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      {/* Background clouds */}
      <img
        src="/assets/cloud1.webp"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          opacity: 0.25,
          pointerEvents: "none"
        }}
      />
      <img
        src="/assets/cloud2.webp"
        alt=""
        style={{
          position: "absolute",
          top: "10%",
          right: 0,
          width: "55%",
          opacity: 0.25,
          pointerEvents: "none"
        }}
      />

      {/* Main Headline */}
      <div style={{ maxWidth: 960, padding: "0 24px", position: "relative", zIndex: 2 }}>
        <h1
          style={{
            fontFamily: "'AM Le Cygne', serif",
            fontSize: "clamp(48px, 8vw, 96px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            fontWeight: 700,
            marginBottom: 24,
            textShadow: "0 4px 20px rgba(0,0,0,0.15)"
          }}
        >
          The command isn’t trusted.<br />
          The consequence is verified.
        </h1>

        <p
          style={{
            fontSize: "clamp(18px, 2.5vw, 24px)",
            fontWeight: 500,
            opacity: 0.95,
            minHeight: 36
          }}
        >
          We protect your{" "}
          <strong
            style={{
              fontWeight: 700,
              textDecoration: "underline",
              textUnderlineOffset: 6,
              transition: "opacity 0.3s ease",
              opacity: fade ? 1 : 0
            }}
          >
            {DELIVERABLES[deliverableIndex]}
          </strong>{" "}
          before execution, for verified physical safety.
        </p>
      </div>

      {/* Hero Phone Showcase */}
      <div
        style={{
          position: "relative",
          marginTop: 48,
          width: "100%",
          maxWidth: 620,
          height: 600,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end"
        }}
      >
        {/* Hand holding phone image */}
        <div
          style={{
            position: "relative",
            width: 380,
            height: 560
          }}
        >
          {/* Mockup Frame / Hand */}
          <img
            src="/assets/mission-phone.webp"
            alt="Product Mockup"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              zIndex: 3,
              pointerEvents: "none"
            }}
          />

          {/* Screen Content */}
          <div
            style={{
              position: "absolute",
              top: 56,
              left: 54,
              right: 54,
              bottom: 120,
              borderRadius: 32,
              overflow: "hidden",
              background: "#181d27",
              zIndex: 2
            }}
          >
            {/* Dynamic island */}
            <div
              style={{
                position: "absolute",
                top: 10,
                left: "50%",
                transform: "translateX(-50%)",
                width: 72,
                height: 18,
                background: "#000",
                borderRadius: 12,
                zIndex: 10
              }}
            />

            {/* Notification Pill */}
            <div
              style={{
                position: "absolute",
                top: 36,
                left: 12,
                right: 12,
                background: "#fff",
                borderRadius: 16,
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                boxShadow: "0 8px 16px rgba(0,0,0,0.18)",
                zIndex: 8
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: "var(--color-brand)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img src="/favicon.png" alt="" style={{ width: 16, height: 16 }} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 10, color: "#717680", fontWeight: 600 }}>Field Security Node</div>
                <div style={{ fontSize: 12, color: "#181d27", fontWeight: 700 }}>Hydraulic boundary verified</div>
              </div>
            </div>

            {/* Cycling screen mockups */}
            <img
              src={SCREENS[screenIndex]}
              alt="Design screen"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                transition: "opacity 0.5s ease",
                opacity: fade ? 1 : 0.4
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
