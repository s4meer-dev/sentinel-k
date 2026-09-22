import React, { useState } from "react";
import { CASE_STUDIES } from "../data/content";

export default function ClientStories() {
  const [activeSlug, setActiveSlug] = useState("alpa");
  const activeCase = CASE_STUDIES.find((c) => c.slug === activeSlug) || CASE_STUDIES[0];

  return (
    <section
      id="client-stories"
      style={{
        padding: "120px 24px",
        background: "#0f1216",
        color: "#ffffff"
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: "'AM Le Cygne', serif",
              fontSize: "clamp(42px, 6vw, 80px)",
              letterSpacing: "-0.03em",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 20
            }}
          >
            Field Verification Scenarios.
          </h2>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "rgba(255,255,255,0.7)",
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.5
            }}
          >
            Benchmarked against real-world attack vectors on simulated municipal water reclamation and distribution networks.
          </p>

          {/* Client Tabs */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.06)",
              padding: 6,
              borderRadius: "var(--radius-full)",
              marginTop: 40,
              border: "1px solid rgba(255,255,255,0.1)"
            }}
          >
            {CASE_STUDIES.map((c) => (
              <button
                key={c.slug}
                onClick={() => setActiveSlug(c.slug)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "var(--radius-full)",
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  color: activeSlug === c.slug ? "#ffffff" : "rgba(255,255,255,0.6)",
                  background: activeSlug === c.slug ? "var(--color-brand)" : "transparent",
                  transition: "all 0.2s ease"
                }}
              >
                {c.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Card */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            borderRadius: 36,
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "clamp(24px, 4vw, 56px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 48,
            alignItems: "center"
          }}
        >
          {/* Details */}
          <div>
            <img
              src={activeCase.logo}
              alt={activeCase.title}
              style={{
                height: 36,
                width: "auto",
                marginBottom: 28,
                filter: "brightness(0) invert(1)"
              }}
            />

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ fontWeight: 700, fontSize: 16 }}>{activeCase.name}</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>•</span>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>{activeCase.role}</span>
            </div>

            <h3
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: 20
              }}
            >
              {activeCase.impact}
            </h3>

            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
                marginBottom: 36
              }}
            >
              {activeCase.summary}
            </p>

            {/* Metrics */}
            <div
              style={{
                display: "flex",
                gap: 40,
                paddingTop: 28,
                borderTop: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'AM Le Cygne', serif",
                    fontSize: 40,
                    fontWeight: 700,
                    color: "var(--color-brand)"
                  }}
                >
                  {activeCase.months} mos
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Incident Phase</div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'AM Le Cygne', serif",
                    fontSize: 40,
                    fontWeight: 700,
                    color: "var(--color-brand)"
                  }}
                >
                  {activeCase.tasks}+
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Checks Executed</div>
              </div>
            </div>
          </div>

          {/* Screenshot Display */}
          <div
            style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 24px 48px rgba(0,0,0,0.4)"
            }}
          >
            <img
              src={activeCase.images[0]}
              alt={activeCase.title}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
