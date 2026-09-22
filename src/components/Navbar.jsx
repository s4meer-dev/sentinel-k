import React, { useState, useEffect } from "react";
import { Terminal, Shield, Menu, X } from "lucide-react";

export default function Navbar({ onOpenTestbed }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("pipeline");

  const NAV_LINKS = [
    { label: "PIPELINE", id: "pipeline" },
    { label: "DIGITAL TWIN", id: "digital-twin" },
    { label: "AGENTS", id: "agents" },
    { label: "PLAYBOOK", id: "playbook" },
    { label: "TEAM", id: "team" },
    { label: "FAQ", id: "faq" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 200);

      const sectionIds = ["pipeline", "digital-twin", "agents", "playbook", "team", "faq"];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 20,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 1000,
          pointerEvents: "none",
          padding: "0 16px"
        }}
      >
        <nav
          style={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            gap: 20,
            background: "rgba(240, 240, 240, 0.95)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            padding: "8px 12px 8px 22px",
            borderRadius: 999,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.06)",
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
              cursor: "pointer"
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 7,
                background: "#ff4405",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff"
              }}
            >
              <Shield style={{ width: 14, height: 14 }} />
            </div>
            <span
              className="font-cygne"
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: "#140906",
                letterSpacing: "-0.02em"
              }}
            >
              SENTINEL-K
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4
            }}
            className="hidden md:flex"
          >
            {NAV_LINKS.map((link) => {
              const isCurrent = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  style={{
                    padding: "8px 12px",
                    fontSize: 12,
                    fontWeight: 700,
                    fontFamily: "Inter, sans-serif",
                    color: isCurrent ? "#ff4405" : "#140906",
                    cursor: "pointer",
                    borderRadius: 8,
                    transition: "color 0.2s ease"
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Action CTA Button */}
          <button
            onClick={onOpenTestbed}
            style={{
              background: "#140906",
              color: "#ffffff",
              padding: "9px 18px",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              boxShadow: "0 4px 12px rgba(20, 9, 6, 0.15)",
              transition: "transform 0.15s ease, background 0.2s ease"
            }}
          >
            <Terminal style={{ width: 13, height: 13, color: "#ff692e" }} />
            <span>VALIDATE ACTION</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              padding: 6,
              cursor: "pointer",
              display: "flex",
              alignItems: "center"
            }}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X style={{ width: 20, height: 20 }} /> : <Menu style={{ width: 20, height: 20 }} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "rgba(10, 13, 18, 0.95)",
            backdropFilter: "blur(16px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 24,
            padding: 24
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-cygne"
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#ffffff",
                cursor: "pointer"
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTestbed();
            }}
            style={{
              marginTop: 20,
              padding: "16px 32px",
              borderRadius: 30,
              background: "#ff4405",
              color: "#fff",
              fontSize: 16,
              fontWeight: 800,
              cursor: "pointer"
            }}
          >
            VALIDATE ACTION
          </button>
        </div>
      )}
    </>
  );
}
