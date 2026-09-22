import React, { useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    try {
      return !localStorage.getItem("cookie_consent");
    } catch {
      return true;
    }
  });

  if (!visible) return null;

  const handleChoice = (accepted) => {
    try {
      localStorage.setItem("cookie_consent", accepted ? "accepted" : "rejected");
    } catch {}
    setVisible(false);
  };

  return (
    <aside
      aria-label="Cookie consent banner"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        maxWidth: 380,
        background: "#181d27",
        color: "#ffffff",
        borderRadius: 20,
        padding: "24px 20px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        zIndex: 9000,
        display: "flex",
        flexDirection: "column",
        gap: 14
      }}
    >
      <div style={{ fontSize: 14, fontWeight: 700 }}>Good design starts with understanding</div>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
        We use cookies to understand how you browse this site and deliver the best possible experience. Nothing more.
      </p>
      <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
        <button
          onClick={() => handleChoice(false)}
          style={{
            flex: 1,
            padding: "9px 16px",
            borderRadius: "var(--radius-md)",
            background: "rgba(255,255,255,0.12)",
            color: "#ffffff",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          Reject
        </button>
        <button
          onClick={() => handleChoice(true)}
          style={{
            flex: 1,
            padding: "9px 16px",
            borderRadius: "var(--radius-md)",
            background: "var(--color-brand)",
            color: "#ffffff",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          Accept
        </button>
      </div>
    </aside>
  );
}
