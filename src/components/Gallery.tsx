import Image from 'next/image';
import Link from 'next/link';

const projects = [
    { id: 1, title: 'Refinery Plant', location: 'Bangladesh', image: '/images/Gallery/Gallery Thumnail Images/Refinery/200 TPD Oil Refinery - Bangladesh.jpg' },
    { id: 2, title: 'Solvent Extraction', location: 'Nepal', image: '/images/Gallery/Gallery Thumnail Images/Solvent Extraction/500 TPD Solvent Extraction - Nepal.jpg' },
    { id: 3, title: 'Fractionation', location: 'Sri Lanka', image: '/images/Gallery/Gallery Thumnail Images/Fractionation/Palm Oil Fractionation - Sri Lanka.jpg' },
    { id: 4, title: 'Bakery Shortening', location: 'India', image: '/images/Gallery/Gallery Thumnail Images/Bakery/1000 kghr Bakery Shortening - India.jpg' },
];

export default function Gallery() {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                    <div>
                        <p className="text-sky-600 font-semibold tracking-widest uppercase text-sm mb-4">
                            Our Work
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Our Projects
                        </h2>
                    </div>
                    <Link
                        href="/gallery"
                        className="text-gray-900 font-semibold hover:text-sky-600 transition-colors flex items-center gap-2"
                    >
                        View All Projects
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href="/gallery"
                            className="group relative aspect-[3/4] rounded-xl overflow-hidden"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
