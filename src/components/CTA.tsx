import Link from 'next/link';
import { siteContact } from '@/lib/site';

const triggers = [
  'Planning a new plant',
  'Expanding capacity',
  'Improving refining performance',
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.10),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(132,204,22,0.12),_transparent_32%)]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-gray-950 px-8 py-12 text-center text-white shadow-[0_40px_100px_rgba(15,23,42,0.18)] lg:px-16 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-sky-300">Next step</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Planning a new plant, upgrade, or expansion?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Share your capacity target, feedstock, and output goals. Sparktech can help scope the right
            engineering path before you commit to execution.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {triggers.map((trigger) => (
              <span key={trigger} className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-gray-200">
                {trigger}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-sky-500 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-sky-400">
              Send Your Enquiry
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href={siteContact.officePhoneHref} className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/6 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/30 hover:bg-white/10">
              Ask Our Experts
              <span className="normal-case tracking-normal text-sky-200">{siteContact.officePhoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
