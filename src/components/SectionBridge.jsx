import React from "react";

export default function SectionBridge({ label, tag }) {
  return (
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "20px 24px 10px", userSelect: "none" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 10,
          fontFamily: "JetBrains Mono, monospace",
          color: "#717680",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          borderTop: "1px solid rgba(20, 9, 6, 0.08)",
          paddingTop: 14
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff4405" }} />
          <span style={{ fontWeight: 800, color: "#140906" }}>{label}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span>{tag}</span>
          <span style={{ color: "#067647", fontWeight: 700 }}>AIR-GAP PROTOCOL ACTIVE</span>
        </div>
      </div>
    </div>
  );
}
