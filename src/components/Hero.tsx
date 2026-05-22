import Link from 'next/link';
import { siteContact } from '@/lib/site';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-950 min-h-screen py-32 lg:py-40 flex items-center text-white">
      <div className="absolute inset-0 bg-gray-900">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/images/Home Page/Home Page Banner-Project Engineering Services.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/images/Home-banner/Sparktech Video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gray-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(132,204,22,0.18),_transparent_34%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(300px,0.7fr)] lg:items-center">
          <div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Processing Oil Fats &amp; Derivatives
              <span className="block bg-gradient-to-r from-sky-300 via-white to-lime-300 bg-clip-text text-transparent">
                Oil Extraction, Refinery &amp; Food Processing Units
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-200">
              Specialized in supply and initialization of oil extraction, refinery
              &amp; food processing units — from concept to commissioning.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-sky-500 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-sky-400">
                Send Your Enquiry
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href={siteContact.officePhoneHref} className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/8 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/40 hover:bg-white/14">
                Ask Our Experts
              </a>
            </div>
          </div>

          <div className="hidden rounded-3xl border border-white/12 bg-white/8 p-6 shadow-2xl backdrop-blur-md lg:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-sky-200">Our Specialization</p>
            <div className="mt-4 space-y-3">
              {[
                'Oil Extraction Plants',
                'Refinery Setup & Upgrades',
                'Food Processing Units',
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/15 px-4 py-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-[10px] font-semibold text-sky-200">
                    0{index + 1}
                  </span>
                  <p className="text-sm font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
