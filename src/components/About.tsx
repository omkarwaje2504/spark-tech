'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useAnimations';

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
    const { ref: sectionRef, isVisible } = useScrollAnimation();

    return (
        <section ref={sectionRef} className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="h-px w-8 bg-sky-500" />
                        <p className="text-sky-600 font-bold tracking-[0.2em] uppercase text-[10px]">
                            SINCE 2007
                        </p>
                        <div className="h-px w-8 bg-sky-500" />
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight font-outfit">
                        Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-lime-600">Industrial Innovation</span>
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">

                    {/* Image */}
                    <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group">
                            <Image
                                src="/images/About Us/About Us Thumbnail Image.jpg"
                                alt="Sparktech Engineering"
                                fill
                                className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-sky-900/10 group-hover:bg-transparent transition-colors duration-700" />
                        </div>

                        {/* Stats Card */}
                        <div className="absolute -bottom-10 -right-6 bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-10 hidden md:block border border-gray-100 backdrop-blur-md">
                            <div className="flex gap-12">
                                <div className="text-center group">
                                    <span className="block text-5xl font-bold text-sky-600 mb-1 font-outfit">
                                        <CountUp end={17} suffix="+" />
                                    </span>
                                    <span className="text-[10px] text-gray-400 font-black tracking-widest uppercase">YEARS OF EXPERTISE</span>
                                </div>
                                <div className="text-center border-l border-gray-100 pl-12 group">
                                    <span className="block text-5xl font-bold text-lime-600 mb-1 font-outfit">
                                        <CountUp end={100} suffix="+" />
                                    </span>
                                    <span className="text-[10px] text-gray-400 font-black tracking-widest uppercase">PROJECTS DELIVERED</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Background Element */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-sky-500/10 to-lime-500/10 rounded-full -z-10 animate-pulse" />
                        <div className="absolute -bottom-12 left-1/4 w-48 h-48 bg-sky-50/50 rounded-full -z-10 blur-3xl" />
                    </div>

                    {/* Text */}
                    <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 font-outfit">
                            Leading the Future of Edible Oil Processing
                        </h3>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                            Sparktech Processes LLP, founded by <strong className="text-gray-900 font-bold">Amit Waghmare</strong>, has evolved into a global leader in industrial machinery. From our base in Mumbai, we engineer solutions that power the edible oil and food-processing industries worldwide.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">
                            Our commitment to excellence drives us to deliver world-class EPC project solutions across the USA, Asia, and beyond. We don't just build machines; we engineer progress.
                        </p>

                        {/* Capabilities Grid */}
                        <div className="grid grid-cols-2 gap-y-5 gap-x-8 mb-12">
                            {[
                                'Design & Development',
                                'Manufacturing Excellence',
                                'Quality & Testing',
                                'Global Certification',
                                'Installation Support',
                                'After Sales Service'
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3 group">
                                    <div className="w-2 h-2 rounded-full bg-sky-500 transition-transform duration-300 group-hover:scale-150" />
                                    <span className="text-gray-800 font-semibold text-sm tracking-tight">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/about"
                            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white font-bold rounded-full hover:bg-sky-600 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/20 active:scale-95 overflow-hidden"
                        >
                            <span className="relative z-10 tracking-widest text-xs">LEARN MORE ABOUT US</span>
                            <svg className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Activities Grid */}
                <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-32 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    {[
                        { title: 'Research & Engineering', icon: '🔬', color: 'sky' },
                        { title: 'Design & Consultant', icon: '📐', color: 'lime' },
                        { title: 'Consulting & Planning', icon: '📋', color: 'sky' },
                        { title: 'Staff Training', icon: '👥', color: 'lime' },
                    ].map((item, i) => (
                        <div key={i} className="group bg-gray-50/50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-sky-100 hover:-translate-y-2">
                            <span className="text-5xl mb-6 block transition-transform duration-500 group-hover:scale-110">{item.icon}</span>
                            <h4 className="font-bold text-gray-900 font-outfit text-sm tracking-tight">{item.title}</h4>
                        </div>
                    ))}
                </div>

                {/* EPC Banner */}
                <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden group">
                        {/* Animated background elements */}
                        <div className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-30">
                            <div className="absolute top-0 -left-1/4 w-full h-full bg-sky-500/20 rounded-full blur-[120px] animate-pulse" />
                            <div className="absolute bottom-0 -right-1/4 w-full h-full bg-lime-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
                        </div>
                        
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                                <span className="text-lime-400 font-bold tracking-[0.3em] uppercase text-[10px]">
                                    OUR COMMITMENT
                                </span>
                            </div>
                            <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 font-outfit tracking-tighter">
                                A Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-300">EPC</span> Project Partner
                            </h3>
                            <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
                                Engineering • Procurement • Consultant <br />
                                <span className="text-white/60">Delivering complete turnkey solutions for the global industry</span>
                            </p>
                        </div>

                        {/* Border interaction */}
                        <div className="absolute inset-0 border-2 border-white/5 rounded-[3rem] transition-colors duration-700 group-hover:border-sky-500/20" />
                    </div>
                </div>
            </div>
        </section>
    );
}
