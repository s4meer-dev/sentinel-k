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
              Your designer, from day one
            </h3>
            <p style={{ fontSize: 15, color: "var(--color-text-tertiary)", lineHeight: 1.5 }}>
              Senior product designer fully dedicated to your company. Working like a founding designer, without the hiring process.
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
              Unlimited design requests
            </h3>
            <p style={{ fontSize: 15, color: "var(--color-text-tertiary)", lineHeight: 1.5 }}>
              Submit as many tasks as you need. No per-task billing, no cap, no waiting list. Just continuous output.
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
                fontSize: 100,
                fontWeight: 700,
                color: "var(--color-brand)",
                lineHeight: 1
              }}
            >
              4d
            </div>
            <div
              style={{
                marginTop: 16,
                fontSize: 16,
                fontWeight: 600,
                color: "var(--color-text-secondary)"
              }}
            >
              Average turnaround
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
              Delivered in 4 days
            </h3>
            <p style={{ fontSize: 15, color: "var(--color-text-tertiary)", lineHeight: 1.5 }}>
              Every task broken down into focused sprints. Work keeps moving forward, every single week.
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
              Your stack. No friction.
            </h3>
            <p style={{ fontSize: 15, color: "var(--color-text-tertiary)", lineHeight: 1.5 }}>
              We integrate directly into Figma, Notion, Linear, Slack, and your current workflow.
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
              Pause or cancel anytime
            </h3>
            <p style={{ fontSize: 15, color: "var(--color-text-tertiary)", lineHeight: 1.5 }}>
              Scale up during heavy sprints, pause between milestones. Pay only when you have active design needs.
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
              100% intellectual property
            </h3>
            <p style={{ fontSize: 15, color: "var(--color-text-tertiary)", lineHeight: 1.5 }}>
              Every Figma file, vector asset, and design system component is 100% yours forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
