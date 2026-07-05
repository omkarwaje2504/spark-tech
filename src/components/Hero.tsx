import Link from 'next/link';
import { siteContact } from '@/lib/site';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Full-bleed video — the star of the section */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/Home Page/Home Page Banner-Project Engineering Services.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/images/Home-banner/pc-size_compressed.mp4" type="video/mp4" />
        </video>

        {/* Cinematic grade: keep the footage readable but let it breathe.
            Lighter than the old flat 70% wash — gradients pool contrast only
            where the text sits (bottom + left), leaving the plant visible. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/0" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
        {/* subtle brand tint in the corners */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.18),_transparent_45%)]" />
      </div>

      {/* Top eyebrow bar */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center gap-3 px-6 pt-28 lg:px-8 lg:pt-32">
        <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-200 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
          </span>
          Concept to Commissioning
        </span>
      </div>

      {/* Content pinned to the lower-left so the video reads through the top */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-end px-6 pb-16 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            Processing Oil, Fats
            <span className="block bg-gradient-to-r from-sky-300 via-white to-lime-300 bg-clip-text text-transparent">
              &amp; Derivatives
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg">
            Specialized in the supply and initialization of oil extraction, refinery
            &amp; food processing units — engineered from concept to commissioning.
          </p>

          {/* Inline specialization pills — light, doesn't cover the footage */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {['Oil Extraction Plants', 'Refinery Setup & Upgrades', 'Food Processing Units'].map(
              (item, i) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
                >
                  <span className="text-xs font-semibold text-sky-300">0{i + 1}</span>
                  {item}
                </span>
              )
            )}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-sky-500 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
            >
              Send Your Enquiry
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={siteContact.officePhoneHref}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:border-white/50 hover:bg-white/10"
            >
              Ask Our Experts
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 lg:flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
        </span>
      </div>
    </section>
  );
}