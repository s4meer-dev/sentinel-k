import React, { useState } from "react";

export default function BriefModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    needs: "",
    budget: "5,490€/mo"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "rgba(10, 13, 18, 0.6)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: 28,
          maxWidth: 540,
          width: "100%",
          padding: "44px 36px",
          boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
          position: "relative"
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "var(--color-bg-secondary)",
            border: "1px solid var(--color-border-secondary)",
            fontSize: 18,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          ✕
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <h2
                style={{
                  fontFamily: "'AM Le Cygne', serif",
                  fontSize: 32,
                  fontWeight: 700,
                  marginBottom: 8
                }}
              >
                Submit a brief
              </h2>
              <p style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>
                Tell us about your project and we'll match you with your senior designer.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label htmlFor="brief-name" style={{ fontSize: 13, fontWeight: 600 }}>Your name</label>
              <input
                id="brief-name"
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Sophie Marchand"
                style={{
                  padding: "12px 14px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-border-primary)",
                  fontSize: 14
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label htmlFor="brief-email" style={{ fontSize: 13, fontWeight: 600 }}>Work email</label>
              <input
                id="brief-email"
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sophie@company.com"
                style={{
                  padding: "12px 14px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-border-primary)",
                  fontSize: 14
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label htmlFor="brief-needs" style={{ fontSize: 13, fontWeight: 600 }}>What are you building?</label>
              <textarea
                id="brief-needs"
                required
                rows={3}
                value={formData.needs}
                onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                placeholder="Mobile app redesign, new SaaS dashboard, design system..."
                style={{
                  padding: "12px 14px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-border-primary)",
                  fontSize: 14,
                  resize: "vertical"
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                marginTop: 10,
                padding: "14px 24px",
                borderRadius: "var(--radius-full)",
                background: "var(--color-brand)",
                color: "#ffffff",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "var(--shadow-skeuomorphic)"
              }}
            >
              Send Request
            </button>
          </form>
        ) : (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 10 }}>Thank you!</h3>
            <p style={{ fontSize: 15, color: "var(--color-text-secondary)" }}>
              We've received your request and will get in touch within 24 hours.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
