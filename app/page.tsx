"use client";
import { useState } from "react";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import HowItWorksSection from "./components/HowItWorksSection";
import DashboardSection from "./components/DashboardSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default function Home() {
  const [modal, setModal] = useState<{ open: boolean; type: "demo" | "trial" }>(
    { open: false, type: "demo" },
  );

  const openDemo = () => setModal({ open: true, type: "demo" });
  const openTrial = () => setModal({ open: true, type: "trial" });
  const closeModal = () => setModal((m) => ({ ...m, open: false }));

  return (
    <>
      <Nav onDemo={openDemo} onTrial={openTrial} />
      <HeroSection onDemo={openDemo} onTrial={openTrial} />
      <ProblemSection />
      <HowItWorksSection />
      <DashboardSection />
      <FeaturesSection />
      {/* <TestimonialsSection /> */}
      {/* <PricingSection onTrial={openTrial} /> */}
      <CtaSection onDemo={openDemo} onTrial={openTrial} />
      <Footer />
      <Modal isOpen={modal.open} onClose={closeModal} type={modal.type} />
    </>
  );
}
