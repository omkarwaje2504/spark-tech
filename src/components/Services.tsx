'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const services = [
    {
        title: 'Continuous Solvent Extraction Plant',
        href: '/services/solvent-extraction',
        description: 'Modern oil recovery from oil bearing materials with horizontal band conveyor assembly.'
    },
    {
        title: 'Chemical/Physical Vegetable Oil Refineries',
        href: '/services/oil-refinery',
        description: 'Complete refining with degumming, neutralizing, bleaching, and deodorization.'
    },
    {
        title: 'Fractionation',
        href: '/services/fractionation',
        description: 'Dry fractionation for separating fats into different melting point components.'
    },
    {
        title: 'Hydrogenation',
        href: '/services/hydrogenation',
        description: 'Converting liquid oils into solid fats for margarine and shortening production.'
    },
    {
        title: 'Interesterification',
        href: '/services/interesterification',
        description: 'Chemical and enzymatic modification of fat properties.'
    },
    {
        title: 'Vegetable Oil Filtration',
        href: '/services/filtration',
        description: 'Horizontal, vertical pressure leaf filters, cartridge and polish filters.'
    },
    {
        title: 'Cocoa Butter Deodorizer',
        href: '/services/deodorization',
        description: 'Specialized deodorization with continuous countercurrent principle.'
    },
    {
        title: 'Bakery Shortening & Margarine Plant',
        href: '/services/bakery-shortening',
        description: 'Complete plant producing up to 1,000 kg/hour with Essessprocessor system.'
    },
    {
        title: 'Rice Bran & Soya Lecithin',
        href: '/services/lecithin',
        description: 'High performance plants for gentle dehydration of wet gums.'
    },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const ref = useRef<HTMLAnchorElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Link
            ref={ref}
            href={service.href}
            className={`group bg-white rounded-xl p-8 border border-gray-200 hover:border-sky-500 hover:shadow-xl transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="flex justify-between items-start mb-6">
                <span className="text-5xl font-bold text-gray-100 group-hover:text-sky-100 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-sky-600 transition-colors mb-3 leading-relaxed">
                {service.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
            </p>
        </Link>
    );
}

export default function Services() {
    return (
        <section className="py-24 lg:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <p className="text-sky-600 font-semibold tracking-widest uppercase text-sm mb-4">
                        What We Offer
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Project Management & Engineering Services
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Comprehensive turnkey solutions for the edible oil processing industry — from solvent extraction to refining, fractionation, and specialized processing equipment.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>

                {/* View All */}
                <div className="text-center mt-16">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors"
                    >
                        View All Services
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
