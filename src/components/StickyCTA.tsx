"use client";

import Link from "next/link";
import { useState } from "react";
import { siteContact } from "@/lib/site";

export default function StickyCTA() {
  const [open, setOpen] = useState(true);

  return (
    <div className="pointer-events-none fixed inset-x-4 bottom-4 z-40 flex justify-end md:inset-x-auto md:right-6">
      {open ? (
        <div className="pointer-events-auto relative w-full max-w-md  border-l-4 border-l-sky-500  rounded-2xl border border-slate-200/80 bg-white/90 shadow-[0_24px_60px_rgba(15,23,42,0.16)] backdrop-blur-md">
          {/* accent rail */}

          <button
            onClick={() => setOpen(false)}
            aria-label="Close quick action"
            className="absolute z-50 bg-white border -left-3 -top-3 flex h-6 w-6 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div className="flex flex-col gap-1 p-2 pl-5 sm:items-center">
            <div className="min-w-0 flex-1 pr-6">
              <p className="mt-1 text-md text-slate-800">
                New <span className="font-bold">plant</span> or <span className="font-bold">capacity</span> upgrade?
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm transition hover:bg-sky-400"
              >
                Send enquiry
              </Link>
              <a
                href={siteContact.officePhoneHref}
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
              >
                Ask experts
              </a>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open quick action"
          className="group pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-white shadow-[0_18px_40px_rgba(14,165,233,0.45)] transition hover:scale-105 hover:bg-sky-400 active:scale-95"
        >
          {/* ambient ping */}
          <span className="absolute inline-flex h-14 w-14 animate-ping rounded-full bg-sky-400/40" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </button>
      )}
    </div>
  );
}
