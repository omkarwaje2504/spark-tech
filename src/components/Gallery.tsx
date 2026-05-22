import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: '200 TPD Oil Refinery',
    location: 'Bangladesh',
    image: '/images/Gallery/Gallery Thumnail Images/Refinery/200 TPD Oil Refinery - Bangladesh.jpg',
    proof: 'Refinery reference',
  },
  {
    title: '500 TPD Solvent Extraction',
    location: 'Nepal',
    image: '/images/Gallery/Gallery Thumnail Images/Solvent Extraction/500 TPD Solvent Extraction - Nepal.jpg',
    proof: 'Extraction reference',
  },
  {
    title: 'Palm Oil Fractionation',
    location: 'Sri Lanka',
    image: '/images/Gallery/Gallery Thumnail Images/Fractionation/Palm Oil Fractionation - Sri Lanka.jpg',
    proof: 'Value-added processing reference',
  },
  {
    title: '1000 kg/hr Bakery Shortening',
    location: 'India',
    image: '/images/Gallery/Gallery Thumnail Images/Bakery/1000 kghr Bakery Shortening - India.jpg',
    proof: 'Specialty fats reference',
  },
];

export default function Gallery() {
  return (
    <section className="bg-gray-950 py-12 text-white lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Project references add the credibility the homepage was missing
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-300">
              When buyers evaluate an EPC partner, they look for context, scale, and relevance. The gallery now
              works harder as a proof section instead of a purely visual showcase.
            </p>
          </div>
          <Link href="/gallery" className="inline-flex items-center gap-3 self-start rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-sky-400 hover:text-sky-300">
            Review Project Gallery
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.title} href="/gallery" className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="relative aspect-[16/10]">
                <Image 
                  src={project.image} 
                  alt={`${project.title} in ${project.location}`} 
                  fill 
                  className="object-cover transition duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                <div className="inline-flex items-center rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-200 backdrop-blur-sm">
                  {project.proof}
                </div>
                <h3 className="mt-3 text-xl lg:text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

