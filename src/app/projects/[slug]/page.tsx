import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Rocket,
  Layers,
  Code2,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projectsData } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Midul Mahmud",
    };
  }

  return {
    title: `${project.title} | Midul Mahmud Portfolio`,
    description: project.summary,
    openGraph: {
      title: `${project.title} - ${project.tagline}`,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-8 sm:py-12 md:py-20 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 md:space-y-12">
        {/* Navigation Bar / Back Button */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-sky-500/40 shadow-sm transition-all duration-200 text-sm font-medium min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-sky-700 dark:text-sky-400 font-mono text-xs max-w-full">
            <span className="truncate">Featured Case Study</span>
            <span>•</span>
            <span className="truncate">{project.category}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 break-words">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed break-words">
            {project.tagline}
          </p>

          {/* Action CTAs: Live Demo & GitHub */}
          <div className="hidden md:flex flex-col sm:flex-row flex-wrap sm:items-center gap-3 pt-2">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 min-h-[44px]"
            >
              <ExternalLink className="w-4 h-4 shrink-0" />
              <span>Live Project Demo</span>
            </Link>

            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-slate-700 hover:border-sky-500/40 font-semibold text-sm transition-all duration-200 min-h-[44px] shadow-sm"
            >
              <SiGithub className="w-4 h-4 shrink-0" />
              <span>GitHub Client Repo</span>
            </Link>

            {project.githubServerUrl && (
              <Link
                href={project.githubServerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 font-semibold text-sm transition-all duration-200 min-h-[44px] shadow-sm"
              >
                <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>GitHub Server Repo</span>
              </Link>
            )}
          </div>
        </div>

        {/* High-Resolution Banner Preview */}
        <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl sm:shadow-2xl">
          <Image
            src={project.image}
            alt={`${project.title} Preview Banner`}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1024px"
            className="object-cover object-top"
          />
        </div>

        {/* Tech Stack Badges */}
        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 backdrop-blur-sm space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold text-sm">
            <Layers className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
            <span>Technology Stack &amp; Libraries</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 sm:px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-[11px] sm:text-xs text-sky-700 dark:text-sky-300 break-words"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

          {/* Action CTAs: Live Demo & GitHub for Mobile Only*/}
          <div className="md:hidden flex flex-col sm:flex-row flex-wrap sm:items-center gap-3 pt-2">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 min-h-[44px]"
            >
              <ExternalLink className="w-4 h-4 shrink-0" />
              <span>Live Project Demo</span>
            </Link>

            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-slate-700 hover:border-sky-500/40 font-semibold text-sm transition-all duration-200 min-h-[44px] shadow-sm"
            >
              <SiGithub className="w-4 h-4 shrink-0" />
              <span>GitHub Client Repo</span>
            </Link>

            {project.githubServerUrl && (
              <Link
                href={project.githubServerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 font-semibold text-sm transition-all duration-200 min-h-[44px] shadow-sm"
              >
                <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>GitHub Server Repo</span>
              </Link>
            )}
          </div>

        {/* Architectural Narrative & Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              Architectural Overview
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base break-words">
              {project.fullDescription}
            </p>
          </div>

          <div className="lg:col-span-5 p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 backdrop-blur-sm space-y-4 shadow-sm">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Key Features</span>
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs mt-0.5 shrink-0">
                    ✓
                  </span>
                  <span className="break-words leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dedicated Card: Challenges Faced While Developing */}
        <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-amber-200 dark:border-amber-500/20 backdrop-blur-sm space-y-5 sm:space-y-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 shrink-0">
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="font-mono text-[11px] sm:text-xs text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                Engineering Resilience
              </span>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 break-words">
                Challenges Faced While Developing the Project
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {project.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] sm:text-xs px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-500/30 text-amber-800 dark:text-amber-400">
                      Challenge {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 break-words">
                    {challenge.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed break-words pt-1">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Card: Potential Improvements & Future Plans */}
        <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-sky-200 dark:border-sky-500/20 backdrop-blur-sm space-y-5 sm:space-y-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-600 dark:text-sky-400 shrink-0">
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="font-mono text-[11px] sm:text-xs text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
                Roadmap &amp; Scalability
              </span>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 break-words">
                Potential Improvements &amp; Future Plans
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {project.futurePlans.map((plan, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 space-y-2.5 flex flex-col justify-start"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] sm:text-xs px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950/60 border border-sky-300 dark:border-sky-500/30 text-sky-800 dark:text-sky-400">
                    Phase {idx + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed break-words">
                  {plan}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Controls */}
        <div className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center sm:justify-start gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium min-h-[44px] px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900/60"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span>Return to Portfolio Home</span>
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center sm:justify-end gap-2 text-sm text-sky-600 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 transition-colors font-semibold min-h-[44px] px-3 py-2 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950/40"
          >
            <span>Launch Live Experience</span>
            <ExternalLink className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
}
