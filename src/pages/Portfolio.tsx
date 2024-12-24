import React from "react";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsGrid from "@/components/portfolio/ProjectsGrid";
import SkillsGrid from "@/components/portfolio/SkillsGrid";
import ContactSection from "@/components/portfolio/ContactSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <ProjectsGrid />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 flex justify-center">
        <SkillsGrid />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <ContactSection />
      </section>

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#FF3333] opacity-5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#FF3333] opacity-5 blur-[100px] rounded-full" />
      </div>
    </div>
  );
};

export default Portfolio;
