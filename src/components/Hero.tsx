'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
    {
        id: 1,
        title: 'Project Engineering',
        highlight: 'Edible Oil Extraction & Refining',
        description: 'Continuous Solvent Extraction is the most modern way of recovery of oil from oil bearing materials.',
    },
    {
        id: 2,
        title: 'Advanced Refinery Plants',
        highlight: 'Physical & Chemical Refining',
        description: 'Complete refining solutions including degumming, neutralizing, bleaching, dewaxing, and deodorization.',
    },
    {
        id: 3,
        title: 'Turnkey Solutions',
        highlight: 'A Perfect EPC Partner',
        description: 'Engineering, Procurement, and Consultant services for the edible oil and food-processing industries.',
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[calc(100vh-84px)] mt-[84px] flex flex-col justify-end overflow-hidden">

            {/* Video Background */}
            <div className="absolute inset-0 bg-gray-900">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/images/Home-banner/Sparktech Video.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Bottom gradient for text readability */}
            <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent z-[1]" />

            {/* Content - spread across bottom */}
            <div className="relative z-10 w-full px-8 lg:px-16 pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">

                    {/* Left - Title & Description */}
                    <div className={`transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-1">
                            {slides[current].title}
                        </h1>
                        <p className="text-sm md:text-base text-sky-400 font-light mb-2">
                            {slides[current].highlight}
                        </p>
                        <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
                            {slides[current].description}
                        </p>
                    </div>

                    {/* Center - Buttons */}
                    <div className={`flex flex-wrap justify-start lg:justify-center gap-3 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 text-white text-sm font-semibold rounded-lg hover:bg-sky-600 transition-all hover:shadow-lg hover:shadow-sky-500/25"
                        >
                            Explore Services
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white text-sm font-semibold rounded-lg border border-white/30 hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Right - Stats */}
                    <div className={`flex flex-wrap gap-6 lg:justify-end transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        {[
                            { value: '17+', label: 'Years Experience' },
                            { value: '100+', label: 'Projects Completed' },
                            { value: '10+', label: 'Countries Served' },
                        ].map((stat, i) => (
                            <div key={i} className="text-white">
                                <span className="text-2xl font-bold text-sky-400">{stat.value}</span>
                                <span className="block text-xs text-gray-400 mt-0.5">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1 rounded-full transition-all duration-500 ${i === current ? 'w-10 bg-sky-500' : 'w-5 bg-white/30 hover:bg-white/50'}`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/50">
                <span className="text-xs tracking-widest uppercase rotate-90 origin-center translate-x-4">Scroll</span>
                <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
            </div>
        </section>
    );
}

