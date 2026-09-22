import React, { useState } from "react";
import { PRICING_PLANS } from "../data/content";

export default function Pricing({ onOpenBrief }) {
  return (
    <section
      id="pricing"
      style={{
        padding: "120px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        textAlign: "center"
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto 64px" }}>
        <h2
          style={{
            fontFamily: "'AM Le Cygne', serif",
            fontSize: "clamp(40px, 5.5vw, 68px)",
            letterSpacing: "-0.03em",
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: 16
          }}
        >
          Simple, transparent pricing.
        </h2>
        <p style={{ fontSize: 18, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
          A dedicated senior designer embedded in your team. Unlimited requests, rapid 4-day delivery, pause or cancel anytime.
        </p>
      </div>

      {/* Pricing Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 32,
          textAlign: "left"
        }}
      >
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.id}
            data-cursor="card"
            data-cursor-radius="28"
            style={{
              background: plan.popular ? "linear-gradient(180deg, #ffffff 0%, #fff8f5 100%)" : "#ffffff",
              borderRadius: 28,
              padding: "44px 36px",
              border: plan.popular ? "2px solid var(--color-brand)" : "1px solid var(--color-border-primary)",
              boxShadow: plan.popular ? "var(--shadow-lg)" : "var(--shadow-sm)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative"
            }}
          >
            {plan.popular && (
              <div
                style={{
                  position: "absolute",
                  top: -14,
                  right: 32,
                  background: "var(--color-brand)",
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "4px 14px",
                  borderRadius: "var(--radius-full)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}
              >
                Most Popular
              </div>
            )}

            <div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{plan.name}</h3>
              <p style={{ fontSize: 14, color: "var(--color-text-tertiary)", marginBottom: 28 }}>
                {plan.subtitle}
              </p>

              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 32 }}>
                <span
                  style={{
                    fontFamily: "'AM Le Cygne', serif",
                    fontSize: 48,
                    fontWeight: 700,
                    color: "var(--color-text-primary)"
                  }}
                >
                  {plan.price}
                </span>
                <span style={{ fontSize: 16, color: "var(--color-text-quaternary)" }}>
                  {plan.period}
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
                {plan.features.map((feat, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "var(--color-success-bg)",
                        color: "var(--color-success-text)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        fontWeight: 700,
                        flexShrink: 0
                      }}
                    >
                      ✓
                    </div>
                    <span style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenBrief}
              style={{
                width: "100%",
                padding: "14px 24px",
                borderRadius: "var(--radius-full)",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                textAlign: "center",
                background: plan.popular ? "var(--color-brand)" : "var(--color-text-primary)",
                color: "#ffffff",
                boxShadow: plan.popular ? "var(--shadow-skeuomorphic)" : "none",
                transition: "opacity 0.2s"
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
