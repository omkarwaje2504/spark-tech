import Link from 'next/link';
import { siteContact } from '@/lib/site';

export default function StickyCTA() {
  return (
    <div className="pointer-events-none fixed inset-x-4 bottom-4 z-40 md:inset-x-auto md:right-6">
      <div className="pointer-events-auto flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white/95 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.16)] backdrop-blur md:flex-row md:items-center">
        <div className="px-2 py-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-600">Quick action</p>
          <p className="mt-1 text-sm font-medium text-gray-700">New plant or capacity upgrade?</p>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-sky-400">
          Send Your Enquiry
        </Link>
        <a href={siteContact.officePhoneHref} className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-700 transition hover:border-sky-300 hover:text-sky-700">
          Ask Our Experts
        </a>
      </div>
    </div>
  );
}
