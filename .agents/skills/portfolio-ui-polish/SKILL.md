---
name: portfolio-ui-polish
description: Audits and upgrades developer portfolio UI/UX across component spacing, WCAG color contrast, typographic hierarchy, responsive breakpoints, and Framer Motion animations in Next.js, React, and Tailwind CSS projects. Use when the user asks to polish portfolio UI/UX, audit spacing or contrast, refine animations, fix mobile layout overflow, or run /portfolio-ui-polish.
---
# Portfolio UI Polish

Audits and upgrades developer portfolio components for consistent spatial rhythm, accessible contrast, responsive layout stability, and smooth animations in React, Next.js, and Tailwind CSS codebases.

## When to Use

- Auditing a developer portfolio or landing page for visual hierarchy, spacing, or alignment defects
- Upgrading raw Tailwind CSS components to a cohesive dark or light design system with WCAG-compliant contrast
- Adding or refining scroll-reveal animations, hover micro-interactions, and interactive focus states
- Fixing mobile responsiveness, sticky navbar overlap, image cropping, or horizontal overflow issues

## Steps

### 1. Audit Spatial Rhythm and Layout Grid

Establish a predictable 8px spacing scale across all page sections and cards so macro-whitespace (between sections) is visibly larger than micro-whitespace (inside cards):

- **Section vertical padding**: Apply `py-16 md:py-24` on top-level sections and set `scroll-padding-top: 5rem` (`scroll-mt-20` on section anchors) so sticky navbars never obscure section headings during anchor jumps.
- **Container alignment**: Wrap section content in a unified container (`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`) so all horizontal edges align on a single vertical axis.
- **Grid and card spacing**: Use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8` for project and skill grids, and keep internal card padding uniform (`p-6` or `p-6 sm:p-8`).
- **Flex and badge gaps**: Separate inline tech badges with `flex flex-wrap gap-2` and action button groups with `flex flex-wrap items-center gap-4`.

### 2. Enforce Color Contrast and Surface Hierarchy

Structure backgrounds, borders, and text tokens so interactive elements stand out and all text meets WCAG AA contrast thresholds (at least 4.5:1 for body copy and 3:1 for large headings and UI boundaries):

- **Three-tier surface depth**: Separate the base canvas (for example, `bg-slate-950`), elevated cards (`bg-slate-900/70 backdrop-blur-sm`), and interactive pills or inputs (`bg-slate-800/80`).
- **Text hierarchy**: Use high-contrast primary tokens (`text-slate-100`) for headings, balanced secondary tokens (`text-slate-300` or `text-slate-400`, never low-contrast `text-slate-600` on dark backgrounds) for body copy, and monospace accent tokens (`text-sky-400` or `text-emerald-400`) for section indices and technical metadata.
- **Border luminescence**: Apply subtle resting borders (`border border-slate-800`) that transition cleanly on hover (`hover:border-sky-500/40`) and keyboard focus (`focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none`).
- **CTA visual weight**: Give each viewport at most one primary solid CTA button (such as Resume Download or Live Demo) paired with secondary ghost or outlined buttons (such as GitHub Repo) so actions do not compete visually.

### 3. Standardize Typography and Media Aspect Ratios

Prevent layout shift and awkward truncation across screen sizes:

- **Typographic scale**: Scale hero titles responsively (`text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight`), section titles (`text-2xl sm:text-3xl font-bold`), and card headings (`text-xl font-semibold`).
- **Readable line lengths**: Constrain long-form bio and project case-study paragraphs to `max-w-prose` (`60ch` to `75ch`) with `leading-relaxed`.
- **Media containers**: Wrap project thumbnails in fixed-ratio containers (`relative aspect-video overflow-hidden rounded-t-xl bg-slate-950`) and portrait photos in `aspect-square` or `aspect-[4/5]` frames with `object-cover` or padded `object-contain` so images never stretch or clip key details.

### 4. Upgrade Animations and Micro-Interactions

Keep motion purposeful, fast, and hardware-accelerated using `motion/react` (Framer Motion) or CSS transitions:

- **Viewport scroll reveal**: Animate sections and cards into view using small vertical offsets (`initial={{ opacity: 0, y: 16 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-60px" }}`) with a crisp duration (`0.35s` to `0.45s`, `easeOut`).
- **Staggered lists**: Stagger sibling project cards or skill badges by `0.06s` to `0.1s` so grids populate smoothly without delaying the user.
- **Card and button hover states**: Pair a subtle card lift (`hover:-translate-y-1 transition-all duration-200`) with a slight thumbnail zoom (`group-hover:scale-105 transition-transform duration-300`) and icon translation on links (`group-hover:translate-x-0.5`).
- **Reduced motion compliance**: Respect user accessibility settings by enabling `reducedMotion="user"` on `MotionConfig` or pairing CSS transitions with `motion-reduce:transition-none motion-reduce:transform-none`.

### 5. Verify Build Integrity and Responsive Viewports

Confirm every polish pass with automated build checks and multi-viewport inspection:

1. Run `npm run build` (or `npx tsc --noEmit`) to verify that added motion props, icon imports, and Tailwind classes introduce zero TypeScript or SSR hydration errors.
2. Inspect the live page across three target widths: mobile (`375px`), tablet (`768px`), and desktop (`1280px`).
3. Confirm that `document.documentElement.scrollWidth <= document.documentElement.clientWidth` at `375px` width (zero unintended horizontal scrollbar) and that all interactive buttons and icon links have a minimum `44x44px` tap target (`min-h-11 min-w-11` or equivalent padding).

## Gotchas

- **Client directive for Framer Motion in Next.js App Router**: Components importing `motion` from `motion/react` or `framer-motion` require `"use client"` at the top of the file. Keep page-level routes (such as `app/page.tsx` and `app/projects/[slug]/page.tsx`) as Server Components for SEO metadata, and extract animated sections into client components.
- **Horizontal overflow from animations or decorative blurs**: Decorative background glow elements (`blur-3xl`) or horizontal entrance animations (`x: 40`) often cause horizontal scrollbars on mobile. Always apply `overflow-x-hidden` on the parent section or root wrapper and prefer vertical (`y`) entrance animations.
- **Low-contrast muted text on dark themes**: Avoid `text-slate-500` or `text-gray-500` for primary descriptions on `bg-slate-900` cards, as they fail WCAG 4.5:1 contrast. Use `text-slate-300` for primary descriptions and `text-slate-400` for secondary captions.
- **Over-animating navbar and modal elements**: Never put slow entrance delays on sticky navbars, mobile drawer menus, or route back-buttons; navigation controls must respond in under `150ms`.