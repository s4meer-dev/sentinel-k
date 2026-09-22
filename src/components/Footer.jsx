import React from "react";
import { Terminal, Shield, ArrowUp } from "lucide-react";

export default function Footer({ onOpenTestbed }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        position: "relative",
        padding: "80px 24px 120px",
        maxWidth: 1240,
        margin: "0 auto",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 28,
          position: "relative",
          zIndex: 2
        }}
      >
        {/* Orange Brand Card */}
        <div
          className="glass-sheen"
          style={{
            background: "linear-gradient(135deg, #ff4405 0%, #ff6e26 100%)",
            color: "#ffffff",
            borderRadius: 32,
            padding: "48px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: 280,
            boxShadow: "0 20px 40px -10px rgba(255, 68, 5, 0.3)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Shield style={{ width: 16, height: 16, color: "#fff" }} />
            </div>
            <span
              className="font-cygne"
              style={{
                fontWeight: 700,
                fontSize: 22,
                color: "#ffffff",
                letterSpacing: "0.04em"
              }}
            >
              SENTINEL-K
            </span>
          </div>

          <div>
            <h3
              className="font-cygne"
              style={{
                fontSize: "clamp(26px, 3.2vw, 36px)",
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: 8
              }}
            >
              The command isn’t trusted.
              <br />
              The consequence is verified.
            </h3>
            <p style={{ fontSize: 13, opacity: 0.9, margin: 0 }}>
              Sovereign Field Security Copilot for Cyber-Physical Infrastructure · iQOO Hackathon 2026
            </p>
          </div>
        </div>

        {/* Links & Directory Card */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: 32,
            padding: "44px 36px",
            border: "1px solid rgba(20, 9, 6, 0.08)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: 280,
            boxShadow: "0 10px 30px -10px rgba(20, 9, 6, 0.05)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontFamily: "JetBrains Mono",
                  fontWeight: 800,
                  color: "#717680",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 14
                }}
              >
                Verification Loop
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 13 }}>
                <a href="#pipeline" style={{ color: "#140906", textDecoration: "none", fontWeight: 600 }}>
                  8-Stage Pipeline
                </a>
                <a href="#digital-twin" style={{ color: "#140906", textDecoration: "none", fontWeight: 600 }}>
                  EPANET 2.2 Twin
                </a>
                <a href="#agents" style={{ color: "#140906", textDecoration: "none", fontWeight: 600 }}>
                  5-Agent Architecture
                </a>
                <a href="#playbook" style={{ color: "#140906", textDecoration: "none", fontWeight: 600 }}>
                  10-Step Playbook
                </a>
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: 11,
                  fontFamily: "JetBrains Mono",
                  fontWeight: 800,
                  color: "#717680",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 14
                }}
              >
                Ecosystem
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 13 }}>
                <a href="#team" style={{ color: "#140906", textDecoration: "none", fontWeight: 600 }}>
                  The Builders
                </a>
                <a href="#scenarios" style={{ color: "#140906", textDecoration: "none", fontWeight: 600 }}>
                  Incident Benchmarks
                </a>
                <a href="#faq" style={{ color: "#140906", textDecoration: "none", fontWeight: 600 }}>
                  FAQ
                </a>
                <span style={{ color: "#067647", fontWeight: 700 }}>
                  Air-Gap Protocol: Active
                </span>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenTestbed}
                style={{
                  padding: "12px 20px",
                  borderRadius: 24,
                  background: "#140906",
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 800,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6
                }}
              >
                <Terminal style={{ width: 14, height: 14, color: "#ff692e" }} />
                <span>TEST TESTBED</span>
              </button>
            </div>
          </div>

          <div
            style={{
              paddingTop: 24,
              marginTop: 24,
              borderTop: "1px solid rgba(20, 9, 6, 0.06)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 12,
              color: "#717680"
            }}
          >
            <span>© 2026 Sentinel-K Team. Developed for iQOO Hackathon 2026.</span>
            <button
              onClick={scrollToTop}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                color: "#140906",
                fontWeight: 700,
                fontSize: 11,
                cursor: "pointer"
              }}
            >
              <span>TOP</span>
              <ArrowUp style={{ width: 12, height: 12 }} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
