# Workspace Rules for Midul Mahmud's Developer Portfolio

## Tech Stack & Architecture
- Framework: Next.js (App Router) with TypeScript (`src/app` or `app` directory).
- Styling: Tailwind CSS + Shadcn UI components + `lucide-react` + `react-icons`.
- Animations: Use `motion/react` (Framer Motion) for subtle fade-up scroll reveals, hover card elevations, and mobile menu transitions.
- OS Environment: Windows (use cross-platform npm scripts and standard forward-slash imports).

## UI/UX & Design System Standards
- Theme: High-contrast Dark Slate & Sky/Emerald aesthetic (`bg-slate-950` main canvas, `bg-slate-900/70` glassmorphic cards with `border-slate-800` and hover `border-sky-500/40`, `text-slate-100` headings, `text-slate-400` body text, `sky-400` primary accent, `emerald-400` availability badge).
- Typography: Use `Plus Jakarta Sans` or `Inter` for headings/body and `JetBrains Mono` for section numbers (`01.`, `02.`), tech badges, and code labels.
- Smooth Navigation: Always set `scroll-behavior: smooth` and `scroll-padding-top: 5rem` on `html` so sticky navbar links never cover section headers.
- Responsiveness: Mobile-first Tailwind design (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`). Touch targets must be at least 44x44px, and images must use `next/image` with proper aspect ratios (`aspect-video` for project cards, `aspect-square` or `aspect-[4/5]` for the hero portrait) so nothing stretches or crops awkwardly.
- Code Quality: Zero dummy "Lorem Ipsum" text. All project data must live in a strongly typed `data/projects.ts` file consumed by both the homepage project cards and the dynamic `/projects/[slug]/page.tsx` route.