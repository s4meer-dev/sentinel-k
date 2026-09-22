import React from "react";
import PhysicsCanvas from "./PhysicsCanvas";

export default function BentoGrid({ onOpenBrief }) {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "80px 24px 120px",
        maxWidth: 1240,
        margin: "0 auto"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 28
        }}
      >
        {/* Card 1: Senior Designer (Video / 3D Avatar) */}
        <div
          data-cursor="card"
          data-cursor-radius="28"
          style={{
            background: "#ffffff",
            borderRadius: 28,
            overflow: "hidden",
            boxShadow: "var(--shadow-md), 0 0 0 1px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.3s ease, box-shadow 0.3s ease"
          }}
        >
          <div
            style={{
              position: "relative",
              height: 400,
              background: "#ecece6",
              overflow: "hidden"
            }}
          >
            <video
              src="/card1-designer.mp4"
              autoPlay
              loop
              muted
              playsInline
              poster="/assets/105e7cd3a106296d90d081af3766923516632143.webp"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>
          <div style={{ padding: "32px 28px" }}>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 10,
                color: "var(--color-text-primary)"
              }}
            >
              Field Copilot on iQOO Hardware
            </h3>
            <p style={{ fontSize: 15, color: "var(--color-text-tertiary)", lineHeight: 1.5 }}>
              Dedicated on-device security intelligence for the critical-infrastructure field operator. Extracts observable evidence from urgency tokens, direct messages, and spoofed authority.
            </p>
          </div>
        </div>

        {/* Card 2: Unlimited Requests */}
        <div
          data-cursor="card"
          data-cursor-radius="28"
          style={{
            background: "#ffffff",
            borderRadius: 28,
            overflow: "hidden",
            boxShadow: "var(--shadow-md), 0 0 0 1px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              position: "relative",
              height: 400,
              background: "#f4f3f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24
            }}
          >
            <img
              src="/assets/alpa-onboarding-flow.webp"
              alt="Design Requests"
              style={{
                width: "90%",
                height: "auto",
                maxHeight: "90%",
                objectFit: "contain",
                borderRadius: 16,
                boxShadow: "var(--shadow-lg)"
              }}
            />
          </div>
          <div style={{ padding: "32px 28px" }}>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 10,
                color: "var(--color-text-primary)"
              }}
            >
              Deterministic Verification Pipeline
            </h3>
            <p style={{ fontSize: 15, color: "var(--color-text-tertiary)", lineHeight: 1.5 }}>
              Every operational instruction passes through an 8-stage verification barrier. Decompiles intent into Modbus registers, checks syntax, and invokes dynamic twin simulation.
            </p>
          </div>
        </div>

        {/* Card 3: Delivered in 4 days */}
        <div
          data-cursor="card"
          data-cursor-radius="28"
          style={{
            background: "#ffffff",
            borderRadius: 28,
            overflow: "hidden",
            boxShadow: "var(--shadow-md), 0 0 0 1px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              position: "relative",
              height: 400,
              background: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 32
            }}
          >
            <div
              style={{
                fontFamily: "'AM Le Cygne', serif",
                fontSize: 80,
                fontWeight: 700,
                color: "var(--color-brand)",
                lineHeight: 1
              }}
            >
              1.8s
            </div>
            <div
              style={{
                marginTop: 16,
                fontSize: 16,
                fontWeight: 600,
                color: "var(--color-text-secondary)"
              }}
            >
              Cross-domain triage
            </div>
          </div>
          <div style={{ padding: "32px 28px" }}>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 10,
                color: "var(--color-text-primary)"
              }}
            >
              Triage in under 2 seconds
            </h3>
            <p style={{ fontSize: 15, color: "var(--color-text-tertiary)", lineHeight: 1.5 }}>
              Extracts human-side evidence, verifies cyber integrity, and executes hydraulic boundary checks before any physical valve or pump actuates.
            </p>
          </div>
        </div>

        {/* Card 4: Interactive Physics Tool Stack */}
        <div
          data-cursor="card"
          data-cursor-radius="28"
          style={{
            background: "#ffffff",
            borderRadius: 28,
            overflow: "hidden",
            boxShadow: "var(--shadow-md), 0 0 0 1px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
            gridColumn: "span 1"
          }}
        >
          <div
            style={{
              position: "relative",
              height: 400,
              background: "#f0f2f5",
              overflow: "hidden"
            }}
          >
            <PhysicsCanvas width={380} height={400} />
          </div>
          <div style={{ padding: "32px 28px" }}>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 10,
                color: "var(--color-text-primary)"
              }}
            >
              Industrial Stack. Zero Bypass.
            </h3>
            <p style={{ fontSize: 15, color: "var(--color-text-tertiary)", lineHeight: 1.5 }}>
              Connects seamlessly with OpenPLC, EPANET, WNTR, Modbus protocols, and the Vivo Office Kit edge bridge.
            </p>
          </div>
        </div>

        {/* Card 5: Pause or cancel anytime (Video) */}
        <div
          data-cursor="card"
          data-cursor-radius="28"
          style={{
            background: "#ffffff",
            borderRadius: 28,
            overflow: "hidden",
            boxShadow: "var(--shadow-md), 0 0 0 1px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              position: "relative",
              height: 400,
              background: "#ecece6",
              overflow: "hidden"
            }}
          >
            <video
              src="/card2.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>
          <div style={{ padding: "32px 28px" }}>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 10,
                color: "var(--color-text-primary)"
              }}
            >
              Autonomous Rejection &amp; Replanning
            </h3>
            <p style={{ fontSize: 15, color: "var(--color-text-tertiary)", lineHeight: 1.5 }}>
              A secure patch is not necessarily a safe patch. When hydraulic limits are breached, Sentinel-K automatically synthesizes a gradual, safe ramp trajectory.
            </p>
          </div>
        </div>

        {/* Card 6: Full Design Ownership */}
        <div
          data-cursor="card"
          data-cursor-radius="28"
          style={{
            background: "#ffffff",
            borderRadius: 28,
            overflow: "hidden",
            boxShadow: "var(--shadow-md), 0 0 0 1px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              position: "relative",
              height: 400,
              background: "#fbfbfa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 32
            }}
          >
            <img
              src="/assets/alpin-klintt-site.webp"
              alt="Design Ownership"
              style={{
                width: "90%",
                height: "auto",
                maxHeight: "90%",
                objectFit: "contain",
                borderRadius: 16,
                boxShadow: "var(--shadow-lg)"
              }}
            />
          </div>
          <div style={{ padding: "32px 28px" }}>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 10,
                color: "var(--color-text-primary)"
              }}
            >
              100% Operator Authority Retained
            </h3>
            <p style={{ fontSize: 15, color: "var(--color-text-tertiary)", lineHeight: 1.5 }}>
              Zero autonomous actuation without operator sign-off. Field engineers inspect side-by-side simulation plots and retain final execution authority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
