"use client";

import React from "react";
import {
  GraduationCap,
  Briefcase,
  Calendar,
  ExternalLink,
  Award,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export const EducationExperience = () => {
  return (
    <section id="education" className="py-15 md:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center md:items-start mb-14">
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-sky-600 dark:text-sky-400 mb-2">
            <span>03.</span>
            <span className="uppercase tracking-widest">Academic &amp; Practical Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Education &amp; Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Two-Column Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Column 1: Educational Qualification */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl p-6 sm:p-8 bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 backdrop-blur-sm transition-all duration-300 relative flex flex-col justify-between group shadow-sm hover:shadow-md"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                    Degree Program
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    Educational Qualification
                  </h3>
                </div>
              </div>

              {/* Institution Card */}
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    B.Sc. in Computer Science and Engineering (CSE)
                  </h4>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 font-mono text-xs font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    <span>CGPA: 3.88 / 4.00</span>
                  </div>
                </div>

                <p className="text-sm font-medium text-sky-600 dark:text-sky-400 mb-2">
                  Presidency University, Dhaka
                </p>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-4">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  <span>2025 – Expected 2029</span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Rigorous academic curriculum grounded in computer science theory,
                  computational logic, and software engineering principles.
                </p>
              </div>

              {/* Key Coursework Focus */}
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>Core Academic Focus:</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Object-Oriented Programming (OOP)",
                    "Database Management Systems",
                    "Web Engineering & Architecture",
                    "Discrete Mathematics & Logic",
                    "Software Design Patterns",
                  ].map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/60 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Technical Training & Practical Engineering */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl p-6 sm:p-8 bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 backdrop-blur-sm transition-all duration-300 relative flex flex-col justify-between group shadow-sm hover:shadow-md"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    Hands-On Experience
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    Technical Training &amp; Engineering
                  </h3>
                </div>
              </div>

              {/* Training Program Card */}
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    Full-Stack Web Engineering &amp; Problem Solving
                  </h4>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-300 dark:border-sky-500/30 text-sky-800 dark:text-sky-400 font-mono text-xs font-semibold">
                    <span>Active Practicum</span>
                  </div>
                </div>

                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                  Programming Hero &amp; CodeLab
                </p>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-4">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  <span>2025 – Present</span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Intensive engineering program focused on production MERN architectures,
                  stateless authentication systems, real-time database indexing, and
                  competitive algorithmic problem solving.
                </p>

                {/* CodeLab Profile Link */}
                <Link
                  href="https://codelab.programming-hero.com/u/midul-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/10 dark:hover:bg-indigo-500/20 dark:text-indigo-300 dark:hover:text-white dark:border-indigo-500/30 transition-colors text-xs font-semibold min-h-[44px]"
                >
                  <span>Verify CodeLab Profile (midul-dev)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Core Engineering Accomplishments */}
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Key Milestones &amp; Output:</span>
                </h5>
                <div className="space-y-2">
                  {[
                    "Architected 3+ production full-stack MERN & Next.js applications.",
                    "Solved 100+ algorithmic and data structure exercises on CodeLab.",
                    "Engineered stateless JWT authentication workflows with middleware protection.",
                    "Implemented atomic MongoDB operations preventing inventory race conditions.",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/60 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
