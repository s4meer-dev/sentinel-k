import React, { useState, useEffect } from "react";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 20) + 10;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setFade(true);
          setTimeout(() => {
            onComplete();
          }, 600);
        }, 300);
      } else {
        setProgress(current);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        background: "#e7e8e6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fade ? 0 : 1,
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: fade ? "none" : "auto"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <img
          src="/assets/logo-nav.svg"
          alt="UMANO"
          style={{ height: 28, width: "auto" }}
        />
        <div
          style={{
            width: 180,
            height: 3,
            background: "rgba(0, 0, 0, 0.1)",
            borderRadius: 2,
            overflow: "hidden"
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "var(--color-brand)",
              transition: "width 0.15s ease"
            }}
          />
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-secondary)" }}>
          {progress}%
        </div>
      </div>
    </div>
  );
}
