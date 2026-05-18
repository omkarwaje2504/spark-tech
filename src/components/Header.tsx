'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteContact } from '@/lib/site';
import { isArchivedServiceSlug } from '@/lib/serviceVisibility';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    const servicesList = [
        { name: 'Solvent Extraction', href: '/services/solvent-extraction', slug: 'solvent-extraction' },
        { name: 'Oil Refinery', href: '/services/oil-refinery', slug: 'oil-refinery' },
        { name: 'Fractionation', href: '/services/fractionation', slug: 'fractionation' },
        { name: 'Deodorization', href: '/services/deodorization', slug: 'deodorization' },
        { name: 'Bleaching Plant', href: '/services/bleaching', slug: 'bleaching' },
        { name: 'De-Waxing / Winterization', href: '/services/dewaxing', slug: 'dewaxing' },
        { name: 'Lecithin Plant', href: '/services/lecithin', slug: 'lecithin' },
        { name: 'Bakery Shortening & Margarine', href: '/services/bakery-shortening', slug: 'bakery-shortening' },
        { name: 'Hydrogenation', href: '/services/hydrogenation', slug: 'hydrogenation' },
    ];

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Technologies', href: '/technologies' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg py-0' : 'bg-white shadow-sm py-2'}`}>
            <div className={`h-[2px] bg-gradient-to-r from-sky-500 via-lime-500 to-sky-500 transition-all duration-1000 ${isScrolled ? 'opacity-100' : 'opacity-50'}`} />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative overflow-hidden">
                            <Image
                                src="/images/Sparktech logo.png"
                                alt="Sparktech Processes LLP"
                                width={160}
                                height={50}
                                className="h-10 lg:h-12 w-auto transition-transform duration-500 group-hover:scale-105"
                                priority
                            />
                        </div>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.slice(0, 2).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-semibold tracking-wide transition-all duration-300 bloom-hover py-2 px-1 ${isActive(link.href) ? 'text-sky-600' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div
                            className="relative"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button className={`text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-1 bloom-hover py-2 px-1 ${isActive('/services') ? 'text-sky-600' : 'text-gray-600 hover:text-gray-900'}`}>
                                Services
                                <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isServicesOpen && (
                                <div className="absolute top-full left-0 pt-2 w-72 animate-scale-in">
                                    <div className="bg-white shadow-2xl rounded-xl border border-gray-100 py-3 overflow-hidden">
                                        <div className="grid grid-cols-1 gap-1">
                                            {servicesList
                                                .filter((service) => !isArchivedServiceSlug(service.slug))
                                                .map((service) => (
                                                <Link
                                                    key={service.name}
                                                    href={service.href}
                                                    className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                                                >
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="border-t border-gray-100 mt-2 pt-2 px-2">
                                            <Link href="/services" className="flex items-center justify-between px-3 py-2.5 text-sm font-bold text-sky-600 hover:bg-sky-50 rounded-lg transition-colors group">
                                                View All Services
                                                <span className="transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {navLinks.slice(2).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-semibold tracking-wide transition-all duration-300 bloom-hover py-2 px-1 ${isActive(link.href) ? 'text-sky-600' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-8">
                        <a href={siteContact.officePhoneHref} className="text-sm font-medium text-gray-600 hover:text-sky-600 flex items-center gap-2.5 transition-colors group">
                            <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center group-hover:bg-sky-100 transition-colors">
                                <svg className="w-4 h-4 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            </div>
                            <span className="tracking-tight">{siteContact.officePhoneDisplay}</span>
                        </a>
                        <Link
                            href="/contact"
                            className="relative px-7 py-3 bg-gray-900 text-white text-sm font-bold tracking-wider rounded-full hover:bg-sky-600 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20 shine-effect group overflow-hidden"
                        >
                            <span className="relative z-10">SEND YOUR ENQUIRY</span>
                        </Link>
                    </div>

                    <button className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-full h-0.5 bg-gray-900 rounded-full transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                        </div>
                    </button>
                </div>

                <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0'}`}>
                    <nav className="flex flex-col gap-2">
                        {[...navLinks.slice(0, 2), { name: 'Services', href: '/services' }, ...navLinks.slice(2)].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-lg font-semibold px-4 py-3 rounded-xl transition-all ${isActive(link.href) ? 'bg-sky-50 text-sky-600' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 mx-4 px-6 py-4 bg-gray-900 text-white text-center font-bold rounded-xl shadow-lg active:scale-95 transition-all">
                            SEND YOUR ENQUIRY
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}


