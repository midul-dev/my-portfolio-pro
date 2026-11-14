import React from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { EducationExperience } from "@/components/EducationExperience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <EducationExperience />
      <Projects />
      <Contact />
    </div>
  );
}
