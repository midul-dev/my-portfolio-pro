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
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Bar / Back Button */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/40 transition-all duration-200 text-sm font-medium min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 text-sky-400" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs">
            <span>Featured Case Study</span>
            <span>•</span>
            <span>{project.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
            {project.tagline}
          </p>

          {/* Action CTAs: Live Demo & GitHub */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 min-h-[44px]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Project Demo</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-sky-500/40 font-semibold text-sm transition-all duration-200 min-h-[44px]"
            >
              <SiGithub className="w-4 h-4" />
              <span>GitHub Client Repo</span>
            </a>

            {project.githubServerUrl && (
              <a
                href={project.githubServerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 font-semibold text-sm transition-all duration-200 min-h-[44px]"
              >
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>GitHub Server Repo</span>
              </a>
            )}
          </div>
        </div>

        {/* High-Resolution Banner Preview */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
          <Image
            src={project.image}
            alt={`${project.title} Preview Banner`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-top"
          />
        </div>

        {/* Tech Stack Badges */}
        <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm space-y-3">
          <div className="flex items-center gap-2 text-slate-200 font-semibold text-sm">
            <Layers className="w-4 h-4 text-sky-400" />
            <span>Technology Stack &amp; Libraries</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-sky-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Architectural Narrative & Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl font-bold text-slate-100">
              Architectural Overview
            </h2>
            <p className="text-slate-300 leading-relaxed text-base">
              {project.fullDescription}
            </p>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Key Features</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-mono text-xs mt-0.5">
                    ✓
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dedicated Card: Challenges Faced While Developing */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-amber-500/20 backdrop-blur-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-xs text-amber-400 uppercase tracking-wider">
                Engineering Resilience
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
                Challenges Faced While Developing the Project
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2.5"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 text-amber-400">
                    Challenge {idx + 1}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-100">
                  {challenge.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Card: Potential Improvements & Future Plans */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-sky-500/20 backdrop-blur-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-xs text-sky-400 uppercase tracking-wider">
                Roadmap &amp; Scalability
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
                Potential Improvements &amp; Future Plans
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.futurePlans.map((plan, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2.5"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-sky-950/60 border border-sky-500/30 text-sky-400">
                    Phase {idx + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {plan}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors font-medium min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors font-semibold min-h-[44px]"
          >
            <span>Launch Live Experience</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  );
}
