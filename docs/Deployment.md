# Deployment & Hosting Guide - Sparktech Processes LLP

This document provides complete instructions for building, running locally, and deploying the Sparktech Processes Next.js website to various hosting platforms.

---

## 1. Local Environment Setup

Before compiling or deploying, configure and test the local development server:

### Prerequisites:
* **Node.js:** version 18.x or 20.x (recommended)
* **Package Manager:** `npm` (v10+) or `yarn`

### Steps:
1. **Clone & Install Dependencies:**
   ```bash
   npm install
   ```
2. **Launch Development Server:**
   ```bash
   npm run dev
   ```
3. **Open Browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to review the live-reloaded site.

---

## 2. Compilation and Build Process

Next.js statically optimizes routes for maximum page speed. To compile the production-ready assets:

### Execution Command:
```bash
npm run build
```

### What Happens During the Build:
1. **Static Analysis & Linting:** ESLint runs checks to verify code cleanliness and type safety.
2. **TypeScript Compilation:** The code compiles to optimized JavaScript, using target definitions in `tsconfig.json`.
3. **Tailwind CSS Compilation:** Tailwind v4 utility styles are generated and purged (removing unused CSS).
4. **Static Route Pre-rendering:** Next.js crawls `generateStaticParams()` on the `/services/[slug]` route, pre-rendering HTML layouts for all 11 active processes.
5. **Asset Compression:** Static files are written to the `.next` directory and compressed for fast transfer.

### Test Production Build Locally:
```bash
npm run start
```
This serves the compiled production build from your local system.

---

## 3. Hosting & Deployment Environments

Next.js projects compile to standard node formats, allowing flexible deployment options.

### Option A: Vercel (Recommended, Zero-Config)
Vercel is the creator of Next.js and provides instant globally-distributed serverless delivery.

1. **GitHub Integration:** Commit and push this repository to your GitHub team account.
2. **Connect Project:** Log in to Vercel and import the `sparktech-website` repository.
3. **Deployment Settings:**
   * **Framework Preset:** `Next.js`
   * **Build Command:** `npm run build`
   * **Output Directory:** `.next`
4. **Deploy:** Click **Deploy**. Vercel will automatically configure cache invalidation, edge routing, and continuous integration (auto-building on every git push).

### Option B: Self-Hosted Node.js Server (AWS EC2, VPS, CPanel with Node)
For hosting environments using standalone Linux servers:

1. **Install Node.js & PM2:** Ensure Node.js is installed, along with `pm2` for process management.
   ```bash
   npm install -g pm2
   ```
2. **Build the Project:** Run `npm run build` on the server.
3. **Configure PM2 Process Manager:** Start the server using the compiled bundle.
   ```bash
   pm2 start npm --name "sparktech-website" -- start
   ```
4. **Setup Reverse Proxy:** Configure Nginx or Apache to proxy requests from port 80/443 to the Node port (usually `3000`).

---

## 4. Environment Configuration

The application operates without complex variables out-of-the-box. However, if third-party B2B services are added (such as Google Maps APIs or HubSpot trackers), define them inside a `.env.production` file:

```ini
# Sparktech Processes Website Configuration
NEXT_PUBLIC_APP_URL=https://sparktechprocesses.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

> [!CAUTION]
> **Git Protection:**
> Never commit `.env` or `.env.*` files containing secret keys to Git. Ensure they are listed in `.gitignore` to prevent leakage.
