"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { motion } from "motion/react";
import { projectsData } from "@/data/projects";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center md:items-start mb-14">
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-sky-400 mb-2">
            <span>04.</span>
            <span className="uppercase tracking-widest">Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Flagship Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-3" />
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Real-world full-stack web applications architected for performance,
            data integrity, and responsive user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Category Pill */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/60 font-mono text-[11px] text-sky-400">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} GitHub repository`}
                        className="p-2 text-slate-400 hover:text-white transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg hover:bg-slate-800"
                      >
                        <SiGithub className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live demo`}
                        className="p-2 text-slate-400 hover:text-sky-400 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg hover:bg-slate-800"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <p className="text-xs text-sky-400/90 font-medium">
                    {project.tagline}
                  </p>

                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="space-y-4 pt-2 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 font-mono text-[10px] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 font-mono text-[10px] text-sky-400">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-slate-800/90 hover:bg-sky-500 text-slate-200 hover:text-slate-950 border border-slate-700/80 hover:border-sky-400 transition-all duration-200 group/btn min-h-[44px]"
                  >
                    <span>View More / Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
