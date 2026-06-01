# Sparktech Processes Website - Project Handover & Onboarding Guide

Welcome to the official Next.js codebase for the **Sparktech Processes LLP** corporate web application. This portal is a high-performance marketing and lead-generation instrument tailored to industrial B2B project engineering.

---

## 1. Project Overview & Business Purpose

### Business Purpose:
The primary commercial objective of this website is to guide high-value industrial buyers from initial discovery to active sales qualification. It does this by immediately establishing Sparktech's credibility as an **EPC (Engineering, Procurement, and Construction)** partner for edible oil plants, rather than a generic machinery distributor.

### Core User Flow (Conversion Funnel):
1. **Curiosity to Clarity (Hero Section):** A visitor lands on the site and immediately identifies that Sparktech designs, fabricates, and installs entire oil seed processing plants.
2. **Clarity to Trust (About & Gallery):** The client scans the global execution footprint (India, Bangladesh, USA, Sri Lanka) and verified B2B credentials.
3. **Interest to Action (Interactive Components):** The cookie-based interest memory (`ServiceCookieTracker`) pre-fills custom query cards on the contact form, optimizing conversion rates.

---

## 2. Technology Stack

* **Core Framework:** Next.js 16.1.1 (App Router Layouts)
* **View Library:** React 19.2.3
* **Static Typing:** TypeScript 5
* **Styling Engine:** TailwindCSS 4 (utilizing standard native CSS variables under PostCSS)
* **Custom Scroll Animations:** IntersectionObserver API wrapper (`useAnimations.ts`)
* **Local Developer Server:** Node.js v18.x or v20.x

---

## 3. Getting Started & Installation

To launch a local development server or execute build procedures, complete the following steps:

### A. Environment Prerequisites
Ensure [Node.js (v18.x or v20.x)](https://nodejs.org/) is installed on your local OS.

### B. Core Setup Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/DeveloperOfNitya/sparktech-webiste-.git
   cd sparktech-website
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Start Development Server:**
   ```bash
   npm run dev
   ```
4. **Access the Site:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## 4. Environment Configuration & Variables

Currently, the site executes as a zero-dependency static application. If adding external tracking engines (e.g. Google Analytics) or CRM triggers (e.g. HubSpot forms), create a `.env.local` inside the root folder:

```ini
# Production Domain
NEXT_PUBLIC_APP_URL=https://sparktechprocesses.com

# Third Party Trackers
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 5. Folder Structure Layout

```
sparktech-website/
├── docs/                      # Onboarding architecture and integrations guides
├── public/                    # Compressed web assets, images, and brand assets
└── src/
    ├── app/                   # Next.js App Router layouts & route folders
    │   ├── services/          # Services directory directory & [slug] pages
    │   └── service-backup/    # Backups for hidden/archived service pages
    ├── components/            # Reusable UI elements (Headers, footers, CTAs)
    ├── hooks/                 # Native React scroll animations hooks
    └── lib/                   # Global configuration constants & metadata maps
```

*For a highly detailed, component-level breakdown, refer to [Architecture.md](file:///c:/Nitya%20Marketing%20projects/Sparktech%20Nextjs/sparktech-website/docs/Architecture.md).*

---

## 6. Build and Compilation Instructions

Before deployment, verify the project builds error-free:

### Compile Production Asset Bundle:
```bash
npm run build
```

### Start Production Local Server:
```bash
npm run start
```

---

## 7. Troubleshooting & Known Issues

### Common Scenarios:
1. **Hydration Warning / Class Mismatches:**
   * *Cause:* Browser extensions modifying HTML before hydration is finished.
   * *Resolution:* Run the browser in incognito mode to confirm output.
2. **Tailwind v4 Compile Error:**
   * *Cause:* Old postcss configuration caching conflicting styles.
   * *Resolution:* Run `npm run build` with caching disabled or delete the `.next` folder manually and rebuild.

### Maintenance Recommendations:
* **Archived Services:** Slugs inside `src/lib/serviceVisibility.ts` (e.g., `deodorization`, `bleaching`) are filtered from primary user-facing directories but remain fully active as dynamic detail templates. Add new slugs to this array if they need to be hidden from standard menus.
* **Lead Capturing:** Currently, contact forms operate in high-fidelity simulation mode. Review [Integrations.md](file:///c:/Nitya%20Marketing%20projects/Sparktech%20Nextjs/sparktech-website/docs/Integrations.md) to link Nodemailer or dynamic CRM forms.
