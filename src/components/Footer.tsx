import Link from "next/link";
import { siteContact } from "@/lib/site";
import Image from "next/image";

const FOOTER_LINKS = {
  Technologies: [
    "Oil Seed Preparation",
    "Oil Extraction",
    "Oil & Fats Refining",
    "Oil Processing",
    "Filtration",
    "Value Added Projects",
  ],
  Capabilities: [
    "Design & Development",
    "Manufacturing",
    "Quality & Testing",
    "Certification",
    "Installation Support",
    "After Sales Service",
  ],
  Company: ["About", "Projects", "Gallery", "Contact", "Careers"],
} as const;

const LINK_HREFS: Record<string, string> = {
  Technologies: "/technologies",
  Capabilities: "/capabilities",
  Company: "/about",
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-950 text-white">
      {/* Antigravity-style floating gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-lime-400/15 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      {/* Top hairline */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
        {/* ── Top: CTA row ─────────────────────────────── */}
        <div className="flex flex-col gap-10 border-b border-white/10 lg:flex-row lg:items-end lg:justify-between py-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold leading-[1.05] sm:text-5xl">
              Let&apos;s engineer your
              <span className="block bg-gradient-to-r from-sky-300 via-white to-lime-300 bg-clip-text text-transparent pb-3">
                next plant together.
              </span>
            </h2>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-white px-5 py-4 text-sm font-bold uppercase  text-gray-950 transition-all duration-300 hover:bg-sky-400 hover:text-white"
          >
            Send Your Enquiry
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* ── Middle: links + contact ──────────────────── */}
        <div className="grid gap-12 pt-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-16">
          {/* Brand + contact */}
          <div className="space-y-8">
            <Link href="/">
              <Image
                src="/images/Sparktech logo.png"
                alt="Sparktech Processes LLP"
                width={1000}
                height={1000}
                className={`w-auto transition-all duration-500 group-hover:scale-105 -ml-5`}
                priority
              />
            </Link>

            <div className="space-y-3 text-sm font-light text-gray-400">
              <p className="leading-relaxed">
                {siteContact.addressTitle}, {siteContact.addressLines[0]}{" "}
                {siteContact.addressLines[1]}
              </p>
              <a
                href={siteContact.officePhoneHref}
                className="block transition-colors hover:text-white"
              >
                {siteContact.officePhoneDisplay}
              </a>
              <a
                href={siteContact.emailHref}
                className="block transition-colors hover:text-white"
              >
                {siteContact.emailDisplay}
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                {
                  name: "Facebook",
                  icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
                {
                  name: "LinkedIn",
                  icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-sky-400 hover:bg-sky-500"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {(Object.keys(FOOTER_LINKS) as Array<keyof typeof FOOTER_LINKS>).map(
            (heading) => (
              <div key={heading}>
                <h4 className="mb-2 md:mb-6 text-sm font-bold uppercase text-lime-300">
                  {heading}
                </h4>
                <ul className="space-y-1 md:space-y-2">
                  {FOOTER_LINKS[heading].map((item) => (
                    <li key={item}>
                      <Link
                        href={LINK_HREFS[heading]}
                        className="group inline-flex items-center gap-2 text-sm font-light text-gray-400 transition-colors duration-300 hover:text-white"
                      >
                        <span className="h-px w-0 bg-sky-400 transition-all duration-300 group-hover:w-4" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>

        {/* ── Oversized wordmark (Antigravity signature) ── */}
        <div className="relative select-none overflow-hidden mt-4 md:mt-0">
          <h1 className="bg-linear-to-b from-white/10 to-white/0 bg-clip-text text-center text-[15vw] font-black leading-none text-transparent lg:text-[13vw]">
            SPARKTECH
          </h1>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────── */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 md:flex-row lg:px-8">
          <p className="text-xs font-light text-gray-500">
            © {new Date().getFullYear()} Sparktech Processes LLP. All rights
            reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-xs font-light text-gray-500 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs font-light text-gray-500 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
            <span className="text-xs font-light text-gray-500">
              Global Presence
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
