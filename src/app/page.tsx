import React from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { EducationExperience } from "@/components/EducationExperience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-sky-500/30 selection:text-sky-400">
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <EducationExperience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
