"use client";

import React from "react";
import {
  Code,
  Compass,
  Gamepad2,
  Sparkles,
  UtensilsCrossed,
  Layers,
  Cpu,
} from "lucide-react";
import { motion } from "motion/react";

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center md:items-start mb-14">
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-sky-600 dark:text-sky-400 mb-2">
            <span>01.</span>
            <span className="uppercase tracking-widest">Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Bento Grid Storytelling */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1: My Programming Journey (Col 8) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="md:col-span-8 p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 backdrop-blur-sm transition-all duration-300 relative group overflow-hidden shadow-sm hover:shadow-md"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Compass className="w-24 h-24 text-sky-500 dark:text-sky-400" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                My Programming Journey
              </h3>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                My fascination with software began with curiosity about how the web
                functions behind the browser canvas. That curiosity transformed into
                a rigorous commitment when I joined the{" "}
                <span className="text-sky-600 dark:text-sky-400 font-medium">
                  Computer Science and Engineering (CSE)
                </span>{" "}
                program at Presidency University, Dhaka, where I maintain a{" "}
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
                  3.88 / 4.00 CGPA
                </span>
                .
              </p>
              <p>
                Through intensive technical engineering and full-stack training at{" "}
                <span className="text-sky-600 dark:text-sky-400 font-medium">Programming Hero</span>,
                I evolved from crafting simple static layouts to architecting
                end-to-end web applications. I immersed myself in real-world
                challenges—building decoupled Next.js App Router architectures,
                implementing stateless JWT token security, and engineering atomic
                MongoDB queries that eliminate data race conditions under load.
              </p>
            </div>
          </motion.div>

          {/* Bento Card 2: Key Numbers / Metrics (Col 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white to-slate-50 dark:from-slate-900/90 dark:to-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                  Engineering Foundations
                </h4>
              </div>
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                  <div className="font-mono text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    3.88<span className="text-xs text-slate-500 dark:text-slate-400 font-sans"> / 4.00</span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    CSE CGPA at Presidency University
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                  <div className="font-mono text-2xl font-bold text-sky-600 dark:text-sky-400">
                    3+
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Flagship Full-Stack MERN &amp; Next.js Apps
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                  <div className="font-mono text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    100+
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Problem-Solving Challenges on CodeLab
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: The Work I Enjoy (Col 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="md:col-span-7 p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 backdrop-blur-sm transition-all duration-300 relative group shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                The Work I Truly Enjoy
              </h3>
            </div>

            <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I thrive at the intersection of polished frontend design and solid
                backend systems:
              </p>
              <ul className="space-y-2.5 pt-1">
                <li className="flex items-start gap-2.5">
                  <span className="text-sky-600 dark:text-sky-400 font-mono text-sm mt-0.5">▸</span>
                  <span>
                    <strong className="text-slate-800 dark:text-slate-100">Frontend UI/UX:</strong> Crafting
                    responsive, fluid, accessible interfaces using React, Next.js, and
                    Tailwind CSS with thoughtful micro-interactions and zero layout shift.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-sky-600 dark:text-sky-400 font-mono text-sm mt-0.5">▸</span>
                  <span>
                    <strong className="text-slate-800 dark:text-slate-100">Backend Engineering:</strong> Building
                    clean RESTful endpoints in Node.js/Express with regex search,
                    proper HTTP status contracts, and stateless JWT authorization.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-sky-600 dark:text-sky-400 font-mono text-sm mt-0.5">▸</span>
                  <span>
                    <strong className="text-slate-800 dark:text-slate-100">Data Integrity:</strong> Writing
                    atomic MongoDB updates, designing normalized collections, and
                    protecting inventory against concurrent race conditions.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Bento Card 4: Life & Hobbies Outside Coding (Col 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-5 p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 backdrop-blur-sm transition-all duration-300 relative group shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Beyond the Terminal
              </h3>
            </div>

            <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                When my IDE is closed, I recharge through activities that keep my
                mind sharp and grounded:
              </p>
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                  <Gamepad2 className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Strategic Gaming:
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Building tactical formations, analyzing player playstyles, and competing in fast-paced matches in eFootball.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                  <UtensilsCrossed className="w-5 h-5 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Dhaka Food Walks:
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Exploring local street food hubs, late-night tea stalls, and traditional culinary spots with friends.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                  <Cpu className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Algorithm Puzzles:
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Tackling logic teasers and competitive challenges on CodeLab.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
