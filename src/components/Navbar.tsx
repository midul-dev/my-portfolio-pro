"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { name: "About", href: "#about", number: "01" },
  { name: "Skills", href: "#skills", number: "02" },
  { name: "Education", href: "#education", number: "03" },
  { name: "Projects", href: "#projects", number: "04" },
  { name: "Contact", href: "#contact", number: "05" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-lg shadow-black/5 dark:shadow-black/20"
          : "bg-white/70 dark:bg-slate-950/70 backdrop-blur-sm border-b border-slate-200/60 dark:border-slate-800/60"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Monogram */}
          <Link
            href="/#home"
            className="group flex items-center gap-2 text-slate-900 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <div className="p-2 rounded-lg bg-slate-100 border border-slate-200 group-hover:border-sky-400 dark:bg-slate-900 dark:border-slate-800 dark:group-hover:border-sky-500/40 transition-colors">
              <Code2 className="w-5 h-5 text-sky-500 dark:text-sky-400" />
            </div>
            <span className="font-mono font-bold text-lg tracking-tight">
              &lt;<span className="text-sky-600 dark:text-sky-400">Midul</span>.dev /&gt;
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 transition-colors group flex items-center gap-1.5"
              >
                <span className="font-mono text-xs text-sky-600/80 dark:text-sky-400/80 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                  {link.number}.
                </span>
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions: Theme Toggle & Resume CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <a
              href="/Midul_Mahmud_Resume.pdf"
              download="Midul_Mahmud_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-300 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-sky-400 dark:border-sky-500/30 dark:hover:border-sky-400 transition-all shadow-sm hover:shadow-sky-500/10 min-h-[44px]"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 hover:border-slate-300 dark:text-slate-300 dark:hover:text-white dark:bg-slate-900 dark:border-slate-800 dark:hover:border-slate-700 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-sky-500 dark:text-sky-400" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-Over Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Slide Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-6 z-50 md:hidden shadow-2xl"
            >
              <nav className="flex flex-col gap-3">
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="flex items-center justify-between p-3 rounded-lg text-slate-800 hover:bg-slate-100 hover:text-sky-600 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-sky-400 transition-colors text-base font-medium min-h-[44px]"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-xs text-sky-600 dark:text-sky-400">00.</span>
                    Home
                  </span>
                </a>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between p-3 rounded-lg text-slate-800 hover:bg-slate-100 hover:text-sky-600 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-sky-400 transition-colors text-base font-medium min-h-[44px]"
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-mono text-xs text-sky-600 dark:text-sky-400">
                        {link.number}.
                      </span>
                      {link.name}
                    </span>
                  </a>
                ))}

                <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href="/Midul_Mahmud_Resume.pdf"
                    download="Midul_Mahmud_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 w-full p-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-white dark:text-slate-950 font-semibold text-base transition-colors min-h-[44px]"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
