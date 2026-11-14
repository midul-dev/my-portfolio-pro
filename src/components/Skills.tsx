"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiFigma,
  SiGooglechrome,
} from "react-icons/si";
import { Layout, Server, Wrench, ShieldCheck, Database, Layers } from "lucide-react";
import { motion } from "motion/react";

interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  level: string;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  badgeColor: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    subtitle: "Modern, reactive, and accessible user interfaces",
    icon: Layout,
    badgeColor: "text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/20",
    skills: [
      { name: "React.js", icon: SiReact, color: "text-[#61DAFB]", level: "Advanced" },
      { name: "Next.js (App Router)", icon: SiNextdotjs, color: "text-slate-900 dark:text-white", level: "Advanced" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", level: "Proficient" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "text-[#F7DF1E]", level: "Advanced" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38BDF8]", level: "Expert" },
      { name: "Shadcn UI", icon: Layers, color: "text-slate-900 dark:text-slate-100", level: "Proficient" },
      { name: "HeroUI", icon: Layout, color: "text-indigo-600 dark:text-indigo-400", level: "Proficient" },
      { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]", level: "Expert" },
      { name: "CSS3", icon: SiCss, color: "text-[#1572B6]", level: "Advanced" },
    ],
  },
  {
    title: "Backend & Database",
    subtitle: "Scalable REST APIs, atomic transactions & security",
    icon: Server,
    badgeColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#5FA04E]", level: "Proficient" },
      { name: "Express.js", icon: SiExpress, color: "text-slate-700 dark:text-slate-200", level: "Proficient" },
      { name: "MongoDB (Native Driver)", icon: SiMongodb, color: "text-[#47A248]", level: "Proficient" },
      { name: "RESTful APIs", icon: Database, color: "text-sky-600 dark:text-sky-400", level: "Advanced" },
      { name: "JWT Auth (jose)", icon: SiJsonwebtokens, color: "text-[#FB015B]", level: "Proficient" },
      { name: "Route Protection", icon: ShieldCheck, color: "text-emerald-600 dark:text-emerald-400", level: "Proficient" },
    ],
  },
  {
    title: "Tools & Deployment",
    subtitle: "Workflow, versioning, debugging and hosting ecosystem",
    icon: Wrench,
    badgeColor: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    skills: [
      { name: "Git", icon: SiGit, color: "text-[#F05032]", level: "Advanced" },
      { name: "GitHub", icon: SiGithub, color: "text-slate-900 dark:text-white", level: "Advanced" },
      { name: "Vercel", icon: SiVercel, color: "text-slate-900 dark:text-white", level: "Advanced" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]", level: "Proficient" },
      { name: "Chrome DevTools", icon: SiGooglechrome, color: "text-[#4285F4]", level: "Advanced" },
      { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]", level: "Intermediate" },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center md:items-start mb-14">
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-sky-600 dark:text-sky-400 mb-2">
            <span>02.</span>
            <span className="uppercase tracking-widest">My Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Skills &amp; Technologies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* 3 Structured Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => {
            const CatIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: catIdx * 0.1 }}
                className="rounded-2xl p-6 sm:p-7 bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl border ${category.badgeColor}`}>
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                    {category.subtitle}
                  </p>

                  {/* Skills Badges Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                    {category.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100/80 dark:hover:bg-slate-900/90 transition-all duration-200"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <Icon className={`w-4 h-4 shrink-0 ${skill.color}`} />
                            <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 truncate">
                              {skill.name}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-md bg-slate-200/70 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shrink-0">
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
