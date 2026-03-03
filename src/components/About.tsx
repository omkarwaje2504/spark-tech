'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [isVisible, end]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
    return (
        <section className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <p className="text-sky-600 font-semibold tracking-widest uppercase text-sm mb-4">
                        Established 2007
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Welcome to Sparktech Processes LLP
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

                    {/* Image */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/About Us/About Us Thumbnail Image.jpg"
                                alt="Sparktech Engineering"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Stats Card */}
                        <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-2xl p-8 hidden md:block border border-gray-100">
                            <div className="flex gap-10">
                                <div className="text-center">
                                    <span className="block text-4xl font-bold text-sky-600">
                                        <CountUp end={17} suffix="+" />
                                    </span>
                                    <span className="text-sm text-gray-500 font-medium">Years</span>
                                </div>
                                <div className="text-center border-l border-gray-200 pl-10">
                                    <span className="block text-4xl font-bold text-lime-600">
                                        <CountUp end={100} suffix="+" />
                                    </span>
                                    <span className="text-sm text-gray-500 font-medium">Projects</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-sky-500/20 to-lime-500/20 rounded-xl -z-10" />
                    </div>

                    {/* Text */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Innovative Engineering Solutions
                        </h3>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Sparktech Processes LLP was founded by <strong className="text-gray-900">Amit Waghmare</strong> in 2007. Based in Santacruz West, Mumbai, we are a leading manufacturer and exporter of industrial machinery for the edible oil and food-processing industries.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            We design, manufacture, and export equipment including Oil Solvent Extraction Plants, Vegetable Oil Refineries, Hydrogenation Units, Pressure Leaf Filters, Deodorizing Plants, and related machinery. Our turnkey project solutions serve international markets including USA, Nepal, Bangladesh, Sri Lanka, and more.
                        </p>

                        {/* Capabilities */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {[
                                'Design & Development',
                                'Manufacturing Excellence',
                                'Quality & Testing',
                                'Global Certification',
                                'Installation Support',
                                'After Sales Service'
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-lime-500" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors"
                        >
                            Learn More About Us
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Activities Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-24">
                    {[
                        { title: 'Research & Engineering', icon: '🔬' },
                        { title: 'Design & Consultant', icon: '📐' },
                        { title: 'Consulting & Planning', icon: '📋' },
                        { title: 'Staff Training', icon: '👥' },
                    ].map((item, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-white hover:shadow-lg transition-all border border-gray-100">
                            <span className="text-4xl mb-4 block">{item.icon}</span>
                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                        </div>
                    ))}
                </div>

                {/* EPC Banner */}
                <div className="bg-gray-900 rounded-2xl p-12 lg:p-16 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-lime-500" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-lime-500" />
                    <div className="relative z-10">
                        <p className="text-lime-400 text-sm font-semibold tracking-widest uppercase mb-4">
                            We Are
                        </p>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            A Perfect <span className="text-sky-400">EPC</span> Project Partner
                        </h3>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Engineering • Procurement • Consultant — Delivering complete turnkey solutions for the edible oil industry
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
