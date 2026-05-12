import Image from 'next/image';

const differentiators = [
  {
    title: 'One EPC partner',
    description: 'Concept development, detailed engineering, procurement support, installation guidance, and handover under one team.',
  },
  {
    title: 'Process-first engineering',
    description: 'Solutions are scoped around feedstock, target products, utilities, and the operating realities of edible oil plants.',
  },
  {
    title: 'Global project exposure',
    description: 'References across India, Bangladesh, Nepal, Sri Lanka, the USA, and other international markets.',
  },
  {
    title: 'Commissioning and training',
    description: 'Support continues after delivery so operators can reach steady, reliable production faster.',
  },
];

const buyerTypes = [
  'Oil manufacturers',
  'Refinery operators',
  'Food processing companies',
  'Specialty fat producers',
];

export default function About() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="relative">
            <div className="absolute -left-6 top-8 h-40 w-40 rounded-full bg-sky-100 blur-3xl" />
            <div className="absolute -bottom-8 right-4 h-48 w-48 rounded-full bg-lime-100 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-gray-100 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <Image 
                src="/images/About Us/About Us Thumbnail Image.jpg" 
                alt="Sparktech edible oil plant engineering" 
                width={1200} 
                height={900} 
                className="h-full w-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/65 via-gray-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Value proposition</p>
                <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
                  Leading the future of edible oil processing
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-200 md:text-base">
                  Sparktech combines engineering depth with execution discipline so buyers can move from
                  idea to production with less friction and more clarity.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Why Sparktech</p>
            <h3 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
              Clear differentiation for industrial buyers
            </h3>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              The homepage now needs to answer a practical B2B question quickly: why should a buyer trust
              Sparktech with a new plant, a capacity expansion, or a process upgrade?
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {differentiators.map((item) => (
                <div key={item.title} className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                  <h4 className="text-lg font-semibold text-gray-950">{item.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] border border-sky-100 bg-sky-50 px-6 py-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">Built for</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {buyerTypes.map((item) => (
                  <span key={item} className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

