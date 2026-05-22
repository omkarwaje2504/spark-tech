import Link from 'next/link';
import { isArchivedServiceSlug } from '@/lib/serviceVisibility';

const featuredServices = [
  {
    title: 'Continuous Solvent Extraction Plants',
    href: '/services/solvent-extraction',
    description: 'Efficient recovery systems for oil-bearing materials with engineering focused on throughput, consistency, and maintainability.',
    useCase: 'Best fit for new extraction lines and upstream expansion projects.',
  },
  {
    title: 'Vegetable Oil Refineries',
    href: '/services/oil-refinery',
    description: 'Chemical and physical refining systems covering degumming, neutralization, bleaching, deodorization, and downstream process needs.',
    useCase: 'Best fit for crude oil refining, modernization, and quality improvement programs.',
  },
  {
    title: 'Specialty Fats and Value-Added Processing',
    href: '/services/hydrogenation',
    description: 'Hydrogenation, fractionation, interesterification, and related systems for specialized edible oil and fat applications.',
    useCase: 'Best fit for product diversification and specialty fat capacity.',
  },
];

const additionalServices = [
  { name: 'Deodorization Plants', href: '/services/deodorization', slug: 'deodorization' },
  { name: 'Bleaching Plants', href: '/services/bleaching', slug: 'bleaching' },
  { name: 'De-waxing / Winterization', href: '/services/dewaxing', slug: 'dewaxing' },
  { name: 'Lecithin Plants', href: '/services/lecithin', slug: 'lecithin' },
  { name: 'Bakery Shortening and Margarine Plants', href: '/services/bakery-shortening', slug: 'bakery-shortening' },
  { name: 'Filtration Systems', href: '/technologies', slug: 'filtration' },
  { name: 'Fractionation Plants', href: '/services/fractionation', slug: 'fractionation' },
  { name: 'Interesterification Plants', href: '/services/interesterification', slug: 'interesterification' },
];

export default function Services() {
  return (
    <section className="bg-gray-950 py-12 text-white lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Lead with the three services buyers search for first
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-300">
              Instead of presenting every service with the same weight, the homepage now highlights the
              core systems most buyers evaluate first and keeps the rest accessible without overload.
            </p>
          </div>
          <Link href="/services" className="inline-flex items-center gap-3 self-start rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-sky-400 hover:text-sky-300">
            View All Services
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <Link key={service.title} href={service.href} className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-sky-400/50 hover:bg-white/[0.06]">
              <h3 className="text-xl lg:text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">{service.description}</p>
              <div className="mt-6 rounded-2xl border border-white/8 bg-black/20 px-4 py-4 text-sm leading-6 text-gray-200">
                {service.useCase}
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-300 transition group-hover:gap-3">
                Learn more
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">Additional capabilities</p>
            <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {additionalServices.filter((service) => !isArchivedServiceSlug(service.slug)).map((service, index) => (
                <Link key={service.name} href={service.href} className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/10 px-4 py-4 text-sm text-gray-200 transition hover:border-sky-400/40 hover:text-white">
                  <span>{service.name}</span>
                  <span className="text-sky-300">{String(index + 1).padStart(2, '0')}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
