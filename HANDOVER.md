# Project Handover Documentation - Sparktech Processes LLP

This document outlines the current state, deployment context, and technical recommendations for the **Sparktech Processes website** repository handover.

---

## 1. Current Project Status

* **Stability:** Fully functional B2B portal using React 19 and Next.js 16 (App Router).
* **Git Configuration:** Local settings successfully updated to:
  * **User Name:** `DeveloperOfNitya`
  * **User Email:** `nityamaketingmanagement@gmail.com`
* **Cleanliness:**
  * All `.env`, `.agent`, `.cursor`, `.vscode`, build directories, and temporary resource files are properly excluded in `.gitignore`.
  * Verified that no credentials, private `.env` files, or personal items are committed in the repository history.
  * Static service data matches client requirements, with dynamic indexing for all 11 major processing units.

---

## 2. Important Business Rules

### A. The Conversion Funnel
The site is built as a high-conversion instrument for industrial B2B project engineering.
1. The **homepage** establishes credibility and services.
2. The **inner pages** present deep technological specs.
3. The **cookie-pre-fill memory** links these together so that visitors clicking "Get Proposal" have their service choice automatically set.

### B. Hidden/Archived Pages Filtering
Slugs listed in `archivedServiceSlugs` (currently `deodorization` and `bleaching` inside [serviceVisibility.ts](file:///c:/Nitya%20Marketing%20projects/Sparktech%20Nextjs/sparktech-website/src/lib/serviceVisibility.ts)) are:
* Excluded from primary menus and services list to avoid choice overload.
* Kept fully active and indexable by search engine crawlers so direct traffic can discover them.

---

## 3. Pending & Future Tasks

1. **Connect Live Email Forms:**
   * *Status:* Currently contact form submissions run a high-fidelity client simulation.
   * *Required Action:* Connect a mailing client (e.g. EmailJS, SMTP, or Resend) to route leads directly to `info@sparktechprocesses.com`.
   * *Instruction:* Step-by-step guidance is available in [Integrations.md](file:///c:/Nitya%20Marketing%20projects/Sparktech%20Nextjs/sparktech-website/docs/Integrations.md).
2. **Setup SSL & Custodian Domain:**
   * Configure the premium URL `https://sparktechprocesses.com` as the primary address inside the hosting provider, redirecting non-www traffic properly to ensure high SEO integrity.

---

## 4. Maintenance & Support Notes

### Modifying Services or Adding New Ones:
To add or modify details for a service (e.g. updating extraction capacity range):
1. Open [page.tsx](file:///c:/Nitya%20Marketing%20projects/Sparktech%20Nextjs/sparktech-website/src/app/services/%5Bslug%5D/page.tsx).
2. Edit the corresponding entry inside the `servicesData` constant.
3. Commit and push. The CI/CD pipeline (e.g. Vercel) will auto-compile and statically publish changes within seconds.

---

## 5. Deployment & Technical Checklist

* **Vercel Deployment:** Highly recommended. Supports automatic static regeneration and simple integration with zero server configuration.
* **Manual Server Deployment:** Run a PM2 wrapper on your target Node virtual private server (details in [Deployment.md](file:///c:/Nitya%20Marketing%20projects/Sparktech%20Nextjs/sparktech-website/docs/Deployment.md)).

---

## 6. Recommendations for Future Developers

1. **Keep it Static-First:** Do not add heavy backend databases unless you build a client management dashboard. The zero-latency and low-overhead model is extremely efficient.
2. **Compress Assets:** When uploading new project galleries, compress the images (convert to WebP format) to maintain top-tier Google PageSpeed scores.
3. **Continuous Integration:** Keep the main branch synchronized with Vercel/Netlify for automatic branch preview builds.
