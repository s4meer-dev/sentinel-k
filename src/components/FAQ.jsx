import React, { useState } from "react";
import { FAQS } from "../data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      style={{
        padding: "100px 24px",
        maxWidth: 860,
        margin: "0 auto"
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <h2
          style={{
            fontFamily: "'AM Le Cygne', serif",
            fontSize: "clamp(36px, 5vw, 56px)",
            letterSpacing: "-0.03em",
            fontWeight: 700,
            marginBottom: 16
          }}
        >
          Frequently Asked Questions
        </h2>
        <p style={{ fontSize: 16, color: "var(--color-text-tertiary)" }}>
          Everything you need to know about working with Umano Design Studio.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              style={{
                border: "1px solid var(--color-border-secondary)",
                borderRadius: 18,
                background: "#ffffff",
                overflow: "hidden",
                transition: "border-color 0.2s"
              }}
            >
              <button
                onClick={() => toggle(idx)}
                style={{
                  width: "100%",
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textAlign: "left",
                  cursor: "pointer"
                }}
              >
                <span
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "var(--color-text-primary)"
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: isOpen ? "var(--color-brand)" : "var(--color-bg-secondary)",
                    color: isOpen ? "#ffffff" : "var(--color-text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    fontWeight: 500,
                    transition: "all 0.2s"
                  }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div
                  style={{
                    padding: "0 28px 24px",
                    fontSize: 15,
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.6
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
