import React from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturedKnowledge from "@/components/home/FeaturedKnowledge";
import PersonalEcosystem from "@/components/home/PersonalEcosystem";
import ToolsGrid from "@/components/home/ToolsGrid";
import AuthorBio from "@/components/home/AuthorBio";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Knowledge Section */}
      <FeaturedKnowledge />

      {/* 3. Personal Ecosystem Bento Grid (YHCT, Software/AI, Marketing) */}
      <PersonalEcosystem />

      {/* 4. Tools Grid Section (30+ Mini Tools) */}
      <ToolsGrid />

      {/* 5. Author & Clinic Bio Section */}
      <AuthorBio />
    </div>
  );
}
