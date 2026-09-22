import React, { useState } from "react";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionBridge from "./components/SectionBridge";
import OperationalCarousel from "./components/OperationalCarousel";
import SocialProof from "./components/SocialProof";
import ProblemSection from "./components/ProblemSection";
import PipelineSection from "./components/PipelineSection";
import CardSwapStack from "./components/CardSwapStack";
import DigitalTwinSandbox from "./components/DigitalTwinSandbox";
import AgentBento from "./components/AgentBento";
import IncidentTimeline from "./components/IncidentTimeline";
import HackathonTeam from "./components/HackathonTeam";
import ClientStories from "./components/ClientStories";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import BriefModal from "./components/BriefModal";
import CookieBanner from "./components/CookieBanner";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [briefOpen, setBriefOpen] = useState(false);
  const [selectedDossier, setSelectedDossier] = useState(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenDossier = (dossier) => {
    setSelectedDossier(dossier);
    setBriefOpen(true);
  };

  const handleOpenTestbed = () => {
    setSelectedDossier(null);
    setBriefOpen(true);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#fafafa" }}>
      {/* Organic Grain Texture Overlay */}
      <div className="subscrr-grain" aria-hidden="true" />

      {/* Preloader with progress count */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Custom physics cursor */}
      <CustomCursor />

      {/* Floating morphing navigation */}
      <Navbar onOpenTestbed={handleOpenTestbed} />

      <main>
        {/* 1. Cinematic Hero with Interactive Phone Terminal */}
        <Hero
          onExplorePipeline={() => scrollTo("pipeline")}
          onOpenSandbox={() => scrollTo("digital-twin")}
        />

        {/* 2. 5 Signature Operational Moments Carousel */}
        <SectionBridge label="01 // OPERATIONAL SIGNATURES" tag="5 MOMENTS CAROUSEL" />
        <OperationalCarousel />

        {/* Industrial Interoperability Protocol Strip */}
        <SocialProof />

        {/* 3. The Vulnerability Gap: Traditional SCADA vs Dual-Domain */}
        <SectionBridge label="02 // THREAT SURFACE" tag="THE CYBER-PHYSICAL BLINDSPOT" />
        <ProblemSection />

        {/* 4. 8-Stage Autonomous Verification Pipeline */}
        <SectionBridge label="03 // VERIFICATION PIPELINE" tag="8-STAGE AUTONOMOUS PIPELINE" />
        <PipelineSection />

        {/* 5. 3D Tangible Verification Stack (GSAP CardSwap) */}
        <SectionBridge label="04 // TANGIBLE VERIFICATION" tag="3D INTERACTIVE STACK" />
        <CardSwapStack />

        {/* 6. Physical Twin Simulation: EPANET 2.2 / WNTR Hydrodynamics */}
        <SectionBridge label="05 // HYDRODYNAMIC SIMULATION" tag="EPANET 2.2 / WNTR" />
        <DigitalTwinSandbox />

        {/* 7. Multi-Agent Coordination (5 Specialized Roles) */}
        <SectionBridge label="06 // DISTRIBUTED AGENTS" tag="SNAPDRAGON NPU ORCHESTRATION" />
        <AgentBento />

        {/* 8. 10-Step Incident Chronicle: The Friday Surge Walkthrough */}
        <SectionBridge label="07 // INCIDENT PLAYBOOK" tag="THE FRIDAY SURGE WALKTHROUGH" />
        <IncidentTimeline />

        {/* 9. iQOO Hackathon Alignment & The Builders */}
        <SectionBridge label="08 // SUBMISSION PROFILE & TEAM" tag="HACKATHON ALIGNMENT" />
        <HackathonTeam />

        {/* 10. Field Benchmarks & Incident Case Studies */}
        <SectionBridge label="09 // FIELD BENCHMARKS" tag="INCIDENT DOSSIERS" />
        <ClientStories onOpenDossier={handleOpenDossier} />

        {/* 11. Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* 12. Engineering Footer */}
      <Footer onOpenTestbed={handleOpenTestbed} />

      {/* Interactive Modal (Dossier / Testbed) */}
      {briefOpen && (
        <BriefModal
          dossier={selectedDossier}
          onClose={() => {
            setBriefOpen(false);
            setSelectedDossier(null);
          }}
        />
      )}

      {/* Cookie Consent Banner */}
      <CookieBanner />
    </div>
  );
}
