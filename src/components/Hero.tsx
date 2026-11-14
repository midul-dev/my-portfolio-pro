"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Download, ArrowRight, Sparkles, Terminal } from "lucide-react";
import {
  SiGithub,
  SiX,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "motion/react";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/midul-dev",
    icon: SiGithub,
    color: "hover:text-black dark:hover:text-white hover:border-black/40 dark:hover:border-white/40",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/midul-mahmud/",
    icon: FaLinkedin,
    color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40",
  },
  {
    name: "CodeLab (Programming Hero)",
    href: "https://codelab.programming-hero.com/u/midul-dev",
    icon: Terminal,
    color: "hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-400/40",
  },
  {
    name: "Twitter / X",
    href: "https://x.com/midul_dev",
    icon: SiX,
    color: "hover:text-black dark:hover:text-white hover:border-black/40 dark:hover:border-white/40",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/mi.dul1",
    icon: FaFacebook,
    color: "hover:text-[#1877F2] hover:border-[#1877F2]/40",
  },
];

export const Hero = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-12 pb-15 md:pt-20 md:pb-32 overflow-hidden"
    >
      {/* Subtle background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Emerald Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 text-xs sm:text-sm font-medium backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Entry-Level MERN Stack & Frontend Roles</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 dark:from-sky-400 dark:via-sky-300 dark:to-indigo-400">
                  Midul Mahmud
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300">
                MERN Stack Developer{" "}
                <span className="text-sky-600 dark:text-sky-400 font-mono">|</span> Full-Stack Web
                Developer{" "}
                <span className="text-sky-600/90 dark:text-sky-400/90 font-mono text-base font-normal">
                  (Next.js &amp; TypeScript)
                </span>
              </p>
            </div>

            {/* Bio Hook */}
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              I build fast, accessible, and scalable full-stack web applications
              using React, Next.js, TypeScript, Node.js, Express, and
              MongoDB—turning complex business logic into clean user
              experiences.
            </p>

            {/* Action Buttons: Resume & Projects */}
            <div className="flex flex-wrap items-center gap-4 justify-center pt-2 w-full sm:w-auto">
              {/* Requirement 3: Resume Download */}
              <Link
                href="/Midul_Mahmud_Resume.pdf"
                download="Midul_Mahmud_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all duration-200 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 hover:-translate-y-0.5 min-h-[48px]"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </Link>

              {/* View Projects CTA */}
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold bg-white hover:bg-slate-100 text-slate-800 dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:text-slate-200 dark:hover:text-white border border-slate-300 dark:border-slate-700/80 hover:border-sky-500/40 transition-all duration-200 hover:-translate-y-0.5 min-h-[48px] shadow-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              </Link>
            </div>

            {/* Requirement 4: Social Links with Tooltips */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Connect with me:
              </span>
              <div className="flex items-center flex-wrap gap-2.5">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.name}
                      aria-label={item.name}
                      className={`p-2.5 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 shadow-sm transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center hover:-translate-y-0.5 ${item.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stylized Portrait Frame & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-64 sm:w-80 md:w-88 aspect-[4/5] rounded-3xl p-2.5 bg-gradient-to-b from-sky-400/20 via-slate-200/50 to-slate-100 border border-slate-200 shadow-2xl shadow-sky-500/5 dark:from-sky-500/20 dark:via-slate-800/40 dark:to-slate-900/80 dark:border-slate-800 group">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-emerald-500/20 blur-xl opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none -z-10" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                {!imgError ? (
                  <Image
                    src="/profile.jpg"
                    alt="Midul Mahmud - Developer Portrait"
                    fill
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 352px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 p-6 text-center space-y-3">
                    <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center border border-slate-300 dark:border-slate-700">
                      <Sparkles className="w-10 h-10 text-sky-500 dark:text-sky-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-200">Midul Mahmud</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Full-Stack Engineer</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Tech Badges */}
              {/* Badge 1: Next.js (Top Left) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:-left-6 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 backdrop-blur-md shadow-lg flex items-center gap-2 text-xs font-mono text-slate-800 dark:text-slate-200"
              >
                <SiNextdotjs className="w-4 h-4 text-black dark:text-white" />
                <span>Next.js</span>
              </motion.div>

              {/* Badge 2: TypeScript (Top Right) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-3 -right-4 sm:-right-5 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 backdrop-blur-md shadow-lg flex items-center gap-2 text-xs font-mono text-slate-800 dark:text-slate-200"
              >
                <SiTypescript className="w-4 h-4 text-[#3178C6]" />
                <span>TypeScript</span>
              </motion.div>

              {/* Badge 3: MongoDB (Bottom Right) */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-3 sm:-right-4 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 backdrop-blur-md shadow-lg flex items-center gap-2 text-xs font-mono text-slate-800 dark:text-slate-200"
              >
                <SiMongodb className="w-4 h-4 text-[#47A248]" />
                <span>MongoDB</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
