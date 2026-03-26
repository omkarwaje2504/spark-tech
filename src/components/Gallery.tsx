'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useAnimations';

const projects = [
    { id: 1, title: 'Refinery Plant', location: 'Bangladesh', image: '/images/Gallery/Gallery Thumnail Images/Refinery/200 TPD Oil Refinery - Bangladesh.jpg' },
    { id: 2, title: 'Solvent Extraction', location: 'Nepal', image: '/images/Gallery/Gallery Thumnail Images/Solvent Extraction/500 TPD Solvent Extraction - Nepal.jpg' },
    { id: 3, title: 'Fractionation', location: 'Sri Lanka', image: '/images/Gallery/Gallery Thumnail Images/Fractionation/Palm Oil Fractionation - Sri Lanka.jpg' },
    { id: 4, title: 'Bakery Shortening', location: 'India', image: '/images/Gallery/Gallery Thumnail Images/Bakery/1000 kghr Bakery Shortening - India.jpg' },
];

export default function Gallery() {
    const { ref: sectionRef, isVisible } = useScrollAnimation();

    return (
        <section ref={sectionRef} className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="h-px w-8 bg-sky-500" />
                            <p className="text-sky-600 font-bold tracking-[0.2em] uppercase text-[10px]">
                                OUR GLOBAL FOOTPRINT
                            </p>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight font-outfit">
                            Engineering Excellence <br />
                            <span className="text-sky-600">Across Borders</span>
                        </h2>
                    </div>
                    <Link
                        href="/gallery"
                        className="group flex items-center gap-3 px-6 py-3 rounded-full border border-gray-200 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300 active:scale-95"
                    >
                        <span className="text-gray-900 font-bold text-sm tracking-wide group-hover:text-sky-600">VIEW ALL PROJECTS</span>
                        <div className="w-8 h-px bg-gray-300 group-hover:w-10 group-hover:bg-sky-500 transition-all duration-300" />
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                    {projects.map((project, index) => (
                        <Link
                            key={project.id}
                            href="/gallery"
                            className={`group relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 shadow-xl transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            
                            {/* Sophisticated overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent transition-opacity duration-500 opacity-60 group-hover:opacity-80" />
                            <div className="absolute inset-0 bg-sky-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-white font-bold text-2xl mb-2 font-outfit">{project.title}</h3>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sky-300 font-medium flex items-center gap-2 text-sm tracking-wide">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {project.location}
                                        </p>
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2/5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Border reflection */}
                            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
