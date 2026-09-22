import React, { useState } from "react";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import BentoGrid from "./components/BentoGrid";
import ClientStories from "./components/ClientStories";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import BriefModal from "./components/BriefModal";
import CookieBanner from "./components/CookieBanner";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [briefOpen, setBriefOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <Navbar onBookCall={() => setBriefOpen(true)} />

      <main>
        <Hero />
        <SocialProof />
        <BentoGrid onOpenBrief={() => setBriefOpen(true)} />
        <ClientStories />
        <Pricing onOpenBrief={() => setBriefOpen(true)} />
        <FAQ />
      </main>

      <Footer onOpenBrief={() => setBriefOpen(true)} />
      {briefOpen && <BriefModal onClose={() => setBriefOpen(false)} />}
      <CookieBanner />
    </div>
  );
}
