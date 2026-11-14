import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { EducationExperience } from "@/components/EducationExperience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-sky-500/30 selection:text-sky-300">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <EducationExperience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
