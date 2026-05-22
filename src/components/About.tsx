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

export default function About() {
  return (
    <section className="bg-white py-12 lg:py-16">
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
                <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                  Leading the future of edible oil processing
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-200">
                  Sparktech combines engineering depth with execution discipline so buyers can move from
                  idea to production with less friction and more clarity.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950">
              Clear differentiation for industrial buyers
            </h2>
            <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-gray-600">
              The homepage now needs to answer a practical B2B question quickly: why should a buyer trust
              Sparktech with a new plant, a capacity expansion, or a process upgrade?
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {differentiators.map((item) => (
                <div key={item.title} className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

