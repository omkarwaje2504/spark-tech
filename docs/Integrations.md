# System Integrations Guide - Sparktech Processes LLP

This document details the third-party integrations, cookie systems, and communication channels built into the Sparktech Processes website.

---

## 1. WhatsApp floating Contact Integration

To minimize B2B sales cycles, the site integrates an interactive floating WhatsApp chat bubble that follows the user during their scroll experience.

* **Component:** `src/components/WhatsAppFloat.tsx`
* **Trigger:** Floating button positioned at the bottom right corner of all viewport resolutions (hidden under heavy mobile headers/keyboards where necessary).
* **Business Parameter Mapping:**
  * **Phone Number:** `+919820513136` (Configured in [site.ts](file:///c:/Nitya%20Marketing%20projects/Sparktech%20Nextjs/sparktech-website/src/lib/site.ts)).
  * **Predefined Pitch Text:** `"Hello Sparktech Processes, I am interested in your project engineering solutions and would like to discuss our requirements."`
* **Conversion Impact:** Allows immediate mobile engagement for high-intent visitors who want to chat with engineers directly rather than wait for email replies.

---

## 2. Cookie Interest Memory (`ServiceCookieTracker`)

The application tracks service interest to increase qualifying B2B leads.

* **Component:** `src/components/ServiceCookieTracker.tsx`
* **Workflow:**
  1. A prospective client lands on a specific service page (e.g., `/services/solvent-extraction`).
  2. The page loads the client component `<ServiceCookieTracker slug={slug} />`.
  3. The component writes a standard cookie `selected_service=solvent-extraction` with a 7-day expiration date.
  4. If the client clicks "Get Proposal" or navigates to `/contact`, the contact form checks for this cookie.
  5. The "Service Required" select input pre-fills automatically, matching the client's current research interest.

---

## 3. Inquiry & Email Handlers (Current Simulated Setup & Upgrades)

### Current Implementation:
The contact form at `src/app/contact/ContactForm.tsx` currently operates a high-fidelity simulator.
1. When a user submits the inquiry form, the system prevents standard page reload.
2. It transitions the button state to a loading animation.
3. After a 1.5-second artificial network delay, it displays a success modal without leaving the page.
4. **Benefit:** Validates form inputs and provides immediate client-side visual feedback.

### Live Production Email Setup (Recommended Upgrade):
To convert the simulation into live email delivery, implement one of the following methods:

#### Option A: Direct API Integration (e.g. EmailJS / Resend)
EmailJS allows sending emails directly from the client code using client-side keys:
1. Sign up on [EmailJS](https://www.emailjs.com/).
2. Replace simulated submit handler with:
   ```typescript
   import emailjs from '@emailjs/browser';

   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setLoading(true);
     
     try {
       await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.currentTarget, 'YOUR_PUBLIC_KEY');
       setSuccess(true);
     } catch (err) {
       console.error("Failed to send inquiry:", err);
     } finally {
       setLoading(false);
     }
   };
   ```

#### Option B: Serverless Route Handler (Next.js Node SMTP)
Deploy a Next.js Server Action or route API endpoint at `/api/contact/route.ts` using `nodemailer`:

1. Install Nodemailer:
   ```bash
   npm install nodemailer @types/nodemailer
   ```
2. Create `/src/app/api/contact/route.ts`:
   ```typescript
   import { NextResponse } from 'next/server';
   import nodemailer from 'nodemailer';

   export async function POST(request: Request) {
     const body = await request.json();
     
     const transporter = nodemailer.createTransport({
       host: 'smtp.gmail.com',
       port: 465,
       secure: true,
       auth: {
         user: 'nityamaketingmanagement@gmail.com',
         pass: process.env.SMTP_PASSWORD // App password
       }
     });

     try {
       await transporter.sendMail({
         from: '"Sparktech Web Lead" <nityamaketingmanagement@gmail.com>',
         to: 'info@sparktechprocesses.com',
         subject: `New B2B Lead: ${body.service} from ${body.company || body.name}`,
         text: `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone}\nCompany: ${body.company}\nMessage: ${body.message}`,
       });
       return NextResponse.json({ success: true });
     } catch (err) {
       return NextResponse.json({ success: false }, { status: 500 });
     }
   }
   ```

---

## 4. Google Maps & Office Geolocation

The `/contact` page includes a highly detailed geolocation block:
* **Target Address:** Santacruz Railway Station, Mumbai, India.
* **Implementation:** An embedded iframe mapping the location coordinates for Sparktech's physical offices.
* **Fallback:** A vector card mapping the directions is integrated, along with primary contact numbers for direct calling.
