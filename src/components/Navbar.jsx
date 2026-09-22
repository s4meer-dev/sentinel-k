import React, { useState, useEffect } from "react";

export default function Navbar({ onBookCall }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("how-it-works");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 300);

      const sections = ["how-it-works", "client-stories", "pricing"];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 24,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 1000,
        pointerEvents: "none"
      }}
    >
      <nav
        style={{
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          gap: 28,
          background: "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          padding: "8px 12px 8px 24px",
          borderRadius: "var(--radius-full)",
          boxShadow: "var(--shadow-lg), 0 0 0 1px rgba(0, 0, 0, 0.06)",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
            color: "var(--color-text-primary)",
            fontWeight: 700,
            fontSize: 16
          }}
        >
          <span style={{ fontFamily: "'AM Le Cygne', serif", fontWeight: 700, fontSize: 18, color: "var(--color-text-primary)" }}>
            SENTINEL-K
          </span>
        </a>

        {!scrolled ? (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--color-brand)",
                  cursor: "default"
                }}
              >
                Field Copilot
              </span>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--color-text-secondary)",
                  cursor: "pointer"
                }}
                onClick={() => scrollTo("client-stories")}
              >
                Verification Hub
              </span>
            </div>

            <button
              onClick={onBookCall}
              style={{
                background: "var(--color-text-primary)",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "var(--radius-full)",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                transition: "opacity 0.2s"
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Explore
            </button>
          </>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <button
                onClick={() => scrollTo("how-it-works")}
                style={{
                  fontSize: 14,
                  fontWeight: activeSection === "how-it-works" ? 600 : 500,
                  color:
                    activeSection === "how-it-works"
                      ? "var(--color-brand)"
                      : "var(--color-text-secondary)",
                  cursor: "pointer"
                }}
              >
                Pipeline
              </button>
              <button
                onClick={() => scrollTo("client-stories")}
                style={{
                  fontSize: 14,
                  fontWeight: activeSection === "client-stories" ? 600 : 500,
                  color:
                    activeSection === "client-stories"
                      ? "var(--color-brand)"
                      : "var(--color-text-secondary)",
                  cursor: "pointer"
                }}
              >
                Scenarios
              </button>
              <button
                onClick={() => scrollTo("pricing")}
                style={{
                  fontSize: 14,
                  fontWeight: activeSection === "pricing" ? 600 : 500,
                  color:
                    activeSection === "pricing"
                      ? "var(--color-brand)"
                      : "var(--color-text-secondary)",
                  cursor: "pointer"
                }}
              >
                Architecture
              </button>
            </div>

            <button
              onClick={onBookCall}
              style={{
                background: "var(--color-brand)",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "var(--radius-full)",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "var(--shadow-skeuomorphic)",
                transition: "background-color 0.2s"
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "var(--color-brand-hover)")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "var(--color-brand)")}
            >
              Verify Action
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
