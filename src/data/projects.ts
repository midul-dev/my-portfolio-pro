export interface Project {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  githubServerUrl?: string;
  category: string;
  featured: boolean;
  fullDescription: string;
  keyFeatures: string[];
  challenges: {
    title: string;
    description: string;
  }[];
  futurePlans: string[];
}

export const projectsData: Project[] = [
  {
    slug: "booknook",
    title: "BookNook",
    tagline: "Full-Stack Online Library Management System with Atomic Borrowing & JWT Route Protection",
    summary:
      "A modern library management platform featuring real-time cataloging, category and regex search, modal-driven book borrowing with atomic inventory decrement, and stateless JWT route protection.",
    image: "/booknook.png",
    technologies: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "MongoDB Native",
      "jose JWT"
    ],
    liveUrl: "https://book-nook-a8.vercel.app",
    githubUrl: "https://github.com/midul-dev/book_nook",
    githubServerUrl: "https://github.com/midul-dev/book_nook_backend",
    category: "Full-Stack / MERN",
    featured: true,
    fullDescription:
      "BookNook is an enterprise-grade library management application engineered to solve real-world book circulation and borrowing workflows. Built on the Next.js App Router and a modular Express backend, it provides seamless catalog navigation, instant regex-powered book discovery, and strict state management. The borrowing lifecycle ensures zero stock inconsistencies by applying atomic MongoDB filter updates. Protected routes leverage stateless JWT verification using the `jose` library across both client-side middleware and server endpoints.",
    keyFeatures: [
      "Dynamic Book Cataloging: Comprehensive category navigation, genre grouping, and real-time regex search filtering.",
      "Atomic Borrowing Engine: Ensures race-condition prevention when stock reaches 0 using atomic MongoDB queries (`$inc: { copies: -1 }` with `{ copies: { $gt: 0 } }`).",
      "Interactive Borrow Modal: Custom modal dialogs with borrower verification, automated return date calculation, and instant UI state updates.",
      "Stateless JWT Authentication: Secure user sessions authenticated via `jose` across Next.js middleware and protected Express endpoints.",
      "Book Return & Replenishment: Clean return workflows that atomically increment available inventory and record borrowing histories."
    ],
    challenges: [
      {
        title: "Preventing Inventory Race Conditions During Simultaneous Borrowing",
        description:
          "High concurrent borrow attempts on books with 1 copy remaining risked negative inventory counts. Resolved this by swapping read-then-write updates with single atomic MongoDB operations combining an increment filter (`$inc: { copies: -1 }`) and query predicate (`copies: { $gt: 0 }`), ensuring safe and consistent concurrency."
      },
      {
        title: "Next.js App Router Prerender ECONNREFUSED Errors",
        description:
          "During production static build runs, dynamic pages attempted fetching from backend APIs before the server was up. Resolved this by implementing dynamic runtime segment configs (`export const dynamic = 'force-dynamic'`) and graceful fallback skeletons on SSR boundaries."
      },
      {
        title: "Desktop Book Cover Aspect Ratio Distortion",
        description:
          "Varying user-uploaded book cover dimensions caused erratic card heights and cropped artwork. Solved using standardized Next.js Image containers with fixed `aspect-[3/4]` ratios and CSS object-cover with padded backdrop blur."
      }
    ],
    futurePlans: [
      "Automated Due-Date Notifications: Integration with nodemailer and cron workers for 48-hour return reminders.",
      "Admin Analytics Dashboard: Real-time circulation charts, overdue tracking, and most-read genre metrics.",
      "AI-Powered Book Recommendations: Vector embeddings or genre-similarity algorithms recommending next reads based on user borrowing history."
    ]
  },
  {
    slug: "bazardar",
    title: "BazarDar",
    tagline: "Daily Local Market Commodity Price Tracker & Multi-Market Comparison Platform",
    summary:
      "A consumer price transparency web application tracking daily essential grocery and commodity prices across local markets in Bangladesh with category filters and historical price comparisons.",
    image: "/bazardar.png",
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB Native",
      "RESTful APIs"
    ],
    liveUrl: "https://bazardar-a07.vercel.app",
    githubUrl: "https://github.com/midul-dev/bazardor-a07",
    githubServerUrl: "",
    category: "Frontend Web App",
    featured: true,
    fullDescription:
      "BazarDar empowers consumers in Bangladesh to monitor, compare, and forecast daily essential commodity prices across neighborhood kitchen markets (kacha bazars). Designed with high performance and accessibility in mind, the platform aggregates price data for vegetables, meat, fish, grains, and spices, allowing shoppers to identify market variations and spot inflationary trends before heading out to shop.",
    keyFeatures: [
      "Daily Commodity Price Feed: Real-time price updates categorized by produce, poultry, fish, and pantry staples.",
      "Multi-Market Price Comparison: Side-by-side market comparison tools highlighting price discrepancies across Dhaka's key markets.",
      "Fast Debounced Search & Filter: Instant filtering by commodity name, market location, and price ranges without lag.",
      "Historical Price Tendency: Tracking weekly and monthly price fluctuations to help consumers budget efficiently.",
      "Responsive Mobile-First UI: Optimized for budget shoppers on mobile devices with high-contrast readable typography."
    ],
    challenges: [
      {
        title: "High-Frequency Search Debouncing & Fluid UX",
        description:
          "Rapid keystrokes across hundreds of commodity items triggered excessive DOM re-renders and unnecessary network requests. Engineered custom debounce hooks (300ms) with client-side memoized fuzzy filtering that provides instant UI feedback with zero stutter."
      },
      {
        title: "Normalized Schemas for Multi-Market Daily Price Logs",
        description:
          "Daily price fluctuations across dozens of localized markets created nested data complexity. Designed a normalized MongoDB document model separating market metadata from daily price logs with composite indexing on `marketId` and `date`."
      },
      {
        title: "Multi-Column Price Comparison on Small Mobile Viewports (375px)",
        description:
          "Comparing 3 to 4 markets side-by-side caused severe horizontal truncation on small mobile devices. Engineered a dual-mode card view with an intuitive toggle between horizontal comparison cards and compact expandable item drawers."
      }
    ],
    futurePlans: [
      "Crowdsourced Community Price Submissions: Verified buyer receipt uploads and crowdsourced price flagging with moderation.",
      "Interactive Historical Trend Visualizations: Embedded Chart.js / Recharts interactive visual graphs showing seasonal price cycles.",
      "District-Wise Price Alerts: Push notifications and Telegram/WhatsApp bot alerts when essential goods drop below target thresholds."
    ]
  },
  {
    slug: "bangla-news-24",
    title: "Bangla News 24",
    tagline: "Dynamic Online News Portal with Category Feeds, Breaking Ticker & Firebase Authentication",
    summary:
      "A fast, responsive Bengali and English news portal featuring real-time category filtering, breaking news ticker headlines, bookmarking capability, and persistent user authentication.",
    image: "/bangla-news-24.png",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Firebase Auth",
      "Node.js",
      "Express.js",
      "RESTful APIs"
    ],
    liveUrl: "https://bangla-news-24-midul.vercel.app/",
    githubUrl: "https://github.com/midul-dev/-bangla-news-24",
    category: "Frontend & Full-Stack",
    featured: true,
    fullDescription:
      "Bangla News 24 is a modern news aggregation and publishing platform designed to deliver fast, reliable, and legible news articles to readers across Bangladesh and the diaspora. With dedicated sections for National, International, Sports, Technology, and Business journalism, the application combines high-speed article delivery with secure user authentication and personalized reading lists.",
    keyFeatures: [
      "Dynamic Breaking News Ticker: Smooth-scrolling real-time breaking news banner delivering urgent updates.",
      "Categorized News Feeds: One-click topic browsing with seamless URL query synchronization and instant filtering.",
      "Firebase Authentication: Multi-provider login (Email/Password, Google OAuth) with protected bookmarking routes.",
      "Personal Reading Bookmark List: Allows authenticated readers to save articles for later reading across sessions.",
      "Editorial Detail Layout: Optimized typography, clean line heights, and social sharing links for long-form news reading."
    ],
    challenges: [
      {
        title: "Eliminating Layout Shift During Asynchronous Category Swaps",
        description:
          "Switching between news categories loaded articles with varying image ratios, triggering cumulative layout shift (CLS). Engineered skeleton loader cards matching exact visual proportions to achieve zero CLS during network fetching."
      },
      {
        title: "Persistent Authentication State Across Page Refreshes",
        description:
          "Firebase auth token hydration briefly flashed unauthenticated UI states on protected bookmark pages. Implemented an `AuthProvider` context with an explicit `authLoading` state listener, rendering a sleek pulse loader until session resolution."
      },
      {
        title: "Typography & Line-Height Optimization for Dual-Script Readability",
        description:
          "Bangla Unicode fonts often clash with default Latin font line heights, causing overlapping diacritics. Tuned custom font leading (`leading-relaxed` and `leading-loose`) and balanced font metrics for both Bengali and English text."
      }
    ],
    futurePlans: [
      "Dark & Light Reading Mode Toggle: Dedicated high-contrast e-reader theme optimized for prolonged night-time reading.",
      "Interactive Reader Comments & Reactions: Real-time discussion threads with nested replies and emoji reactions.",
      "Dynamic OpenGraph Social Previews: Server-side meta tag generation so shared articles display rich social media cards."
    ]
  }
];
