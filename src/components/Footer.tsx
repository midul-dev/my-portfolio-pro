"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Code2, Terminal } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-950 pt-16 pb-12 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200 dark:border-slate-800/60">
          {/* Brand & Slogan (Col 6) */}
          <div className="md:col-span-6 space-y-4">
            <Link
              href="/#home"
              className="inline-flex items-center gap-2 text-slate-900 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              <div className="p-2 rounded-lg bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm">
                <Code2 className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              </div>
              <span className="font-mono font-bold text-lg tracking-tight">
                &lt;<span className="text-sky-600 dark:text-sky-400">Midul</span>.dev /&gt;
              </span>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              MERN Stack &amp; Full-Stack Web Developer passionate about building
              fast, scalable, and responsive web applications with Next.js,
              TypeScript, Node.js, and MongoDB.
            </p>
          </div>

          {/* Quick Links (Col 3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-800 dark:text-slate-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/#about" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  Skills &amp; Technologies
                </Link>
              </li>
              <li>
                <Link href="/#education" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  Education &amp; Experience
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  Flagship Projects
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Back to Top (Col 3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-800 dark:text-slate-300">
              Social Profiles
            </h4>
            <div className="flex items-center flex-wrap gap-2">
              <Link
                href="https://github.com/midul-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 rounded-lg bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shadow-sm"
              >
                <SiGithub className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/midul-mahmud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 rounded-lg bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shadow-sm"
              >
                <FaLinkedin className="w-4 h-4" />
              </Link>
              <Link
                href="https://codelab.programming-hero.com/u/midul-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Programming Hero CodeLab profile"
                className="p-2.5 rounded-lg bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-400/40 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shadow-sm"
              >
                <Terminal className="w-4 h-4" />
              </Link>
              <Link
                href="https://x.com/midul_dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X profile"
                className="p-2.5 rounded-lg bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shadow-sm"
              >
                <SiX className="w-4 h-4" />
              </Link>
              <Link
                href="https://facebook.com/mi.dul1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook profile"
                className="p-2.5 rounded-lg bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-[#1877F2] hover:border-[#1877F2]/40 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shadow-sm"
              >
                <FaFacebook className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors p-2 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-900 min-h-[44px]"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Midul Mahmud. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>remote, worldwide</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
