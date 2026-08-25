# Application Architecture Guide - SPARKTECH Processes LLP

This document outlines the software architecture, engineering design patterns, and codebase directory layout for the SPARKTECH Processes website.

---

## 1. Core Technology Stack

The application is built on modern, high-performance web standards prioritizing speed, SEO, and visual excellence:

* **Framework:** [Next.js 16.1.1 (App Router)](https://nextjs.org/)
* **Library:** [React 19.2.3](https://react.dev/)
* **Language:** [TypeScript 5](https://www.typescriptlang.org/)
* **Styling:** [TailwindCSS 4](https://tailwindcss.com/) & PostCSS
* **Target Environment:** Node.js (v18+ or v20+)

---

## 2. Directory Layout & Key Components

Below is the annotated file structure of the workspace, detailing the role of each directory and system module:

```
SPARKTECH-website/
├── docs/                      # Onboarding & Knowledge Transfer documentation (This folder)
├── public/                    # Static assets (compressed images, videos, vector logos)
│   └── images/
│       ├── About Us/          # Imagery for the About page
│       ├── Services/          # Service thumbnails and diagrams
│       ├── Technologies/      # Technical diagrams & capability graphics
│       └── SPARKTECH logo.png # Primary company branding logo
├── src/                       # Main application source directory
│   ├── app/                   # Next.js App Router page routes & layouts
│   │   ├── about/             # "About Us" page component (Company Story, Core Values)
│   │   ├── capabilities/      # "Capabilities" page component (EPC solutions overview)
│   │   ├── contact/           # "Contact Us" page featuring qualifying forms
│   │   ├── gallery/           # "Gallery" references showcasing global footprint
│   │   ├── services/          # "Services" page & [slug] dynamic service page template
│   │   │   ├── [slug]/        # Dynamic route for each of the 11 major services
│   │   │   └── page.tsx       # Main services directory list page
│   │   ├── service-backup/    # Backups for archived/hidden pages (e.g. Bleaching, Deodorization)
│   │   ├── technologies/      # "Technologies" page showcasing specialized technical fields
│   │   ├── favicon.ico        # Site branding browser favicon
│   │   ├── globals.css        # Global CSS stylesheet (Tailwind v4 imports + custom classes)
│   │   ├── layout.tsx         # App-wide root layout (meta configurations, global headers/footers)
│   │   └── page.tsx           # Interactive main homepage entrypoint
│   ├── components/            # Reusable UI layout elements
│   │   ├── Header.tsx         # Navigation bar with active state & CTA route pre-fills
│   │   ├── Footer.tsx         # Multi-column descriptive footer and CTA links
│   │   ├── Hero.tsx           # Prominent landing section with buyer trust stats
│   │   ├── About.tsx          # Homepage "Why SPARKTECH" differentiator overview
│   │   ├── Services.tsx       # Main services grid blocks
│   │   ├── ProcessFlow.tsx    # Step-by-step EPC execution roadmap
│   │   ├── QuickInquiry.tsx   # Inline mid-page lead capture form
│   │   ├── Gallery.tsx        # Project highlights & execution proofs carousel
│   │   ├── StickyCTA.tsx      # Persistent scrolling CTA for high-conversion phone/inquiry
│   │   ├── WhatsAppFloat.tsx  # Floating quick chat integration
│   │   ├── ServiceCookieTracker.tsx # Client-side interest persistence helper
│   │   └── index.ts           # Component unified exports map
│   ├── hooks/                 # Custom React utility hooks
│   │   └── useAnimations.ts   # IntersectionObserver API animations on scroll
│   └── lib/                   # Internal business data configurations and utilities
│       ├── serviceBackupContent.ts # Static details for backup/archived services
│       ├── serviceVisibility.ts     # Slugs config to separate visible vs archived services
│       └── site.ts            # Global company contact, phone, social & display data
├── package.json               # Dependencies list & compilation scripts map
├── tsconfig.json              # TypeScript compilation rules
└── next.config.ts             # Next.js optimization and allowed origin properties
```

---

## 3. Engineering & Design Patterns

### High-Performance Static Site Generation (SSG)
For dynamic routes under `/services/[slug]`, Next.js compiles the pages at build time using `generateStaticParams`.
* **Benefit:** Eliminates database queries during page-loads.
* **Latency:** Zero latency page delivery from the Edge CDN.
* **Fallback Behavior:** Invalid slugs render a standard React `notFound()` page state.

### Scroll-Driven Animations via Intersection Observer
Instead of loading resource-heavy libraries like Framer Motion or GSAP, the site implements scroll animations natively via a custom hook (`useAnimations.ts`) utilizing the browser's native `IntersectionObserver` API.
* **Custom Styles:** Combined with utility classes inside `src/app/globals.css` (e.g., `.animate-fade-in-up`, `.animate-on-scroll`).
* **Performance:** Extremely low memory consumption and high frame rates on both mobile and desktop.

### State Persistence via Cookie Memory
To smooth the B2B purchasing funnel, the system integrates a cookie-based interest memory:
1. A user visits a specialized service page (e.g., `continuous-solvent-extraction`).
2. The `<ServiceCookieTracker />` registers this interest inside client cookies.
3. When the user navigates to the `/contact` form page, the "Service Required" dropdown automatically pre-fills with that specific service.
4. This increases conversion by cutting down user inputs.

---

## 4. Search Engine Optimization (SEO) & Semantics

The website is optimized for organic industrial search rankings:
* **Unique Titles & Meta Descriptions:** Configured individually in page layouts and dynamically generated in `services/[slug]/page.tsx` based on active content.
* **Descriptive Metadata Tags:** Integrated keywords such as "edible oil extraction plant", "solvent extraction Mumbai", and "EPC turnkey vegetable oil processing India".
* **Single Heading Hierarchy:** Each page strict-enforces one major `<h1>` tag followed by logical `<h2>` and `<h3>` tags.
* **Semantic HTML5 Elements:** Heavy utilization of `<header>`, `<footer>`, `<main>`, `<section>`, and `<nav>` to facilitate clean web crawling by Google, Bing, and other search engines.
