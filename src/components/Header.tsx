'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
        { name: 'Solvent Extraction', href: '/services/solvent-extraction' },
        { name: 'Oil Refinery', href: '/services/oil-refinery' },
        { name: 'Fractionation', href: '/services/fractionation' },
        { name: 'Deodorization', href: '/services/deodorization' },
        { name: 'Bleaching Plant', href: '/services/bleaching' },
        { name: 'De-Waxing / Winterization', href: '/services/dewaxing' },
        { name: 'Lecithin Plant', href: '/services/lecithin' },
        { name: 'Bakery Shortening & Margarine', href: '/services/bakery-shortening' },
        { name: 'Hydrogenation', href: '/services/hydrogenation' },
        { name: 'Interesterification', href: '/services/interesterification' },
    ];

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Technologies', href: '/technologies' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>

            {/* Accent Line */}
            <div className="h-1 bg-gradient-to-r from-sky-500 to-lime-500" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-lime-500 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">S</span>
                        </div>
                        <div>
                            <span className="block text-xl font-bold text-gray-900 leading-tight">Sparktech</span>
                            <span className="block text-xs text-gray-500 tracking-widest uppercase">Processes LLP</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.slice(0, 2).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium tracking-wide transition-colors ${isActive(link.href) ? 'text-sky-600' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button className={`text-sm font-medium tracking-wide transition-colors flex items-center gap-1 ${isActive('/services') ? 'text-sky-600' : 'text-gray-600 hover:text-gray-900'}`}>
                                Services
                                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isServicesOpen && (
                                <div className="absolute top-full left-0 pt-2 w-64">
                                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                                        {servicesList.map((service) => (
                                            <Link
                                                key={service.name}
                                                href={service.href}
                                                className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-sky-600 transition-colors"
                                            >
                                                {service.name}
                                            </Link>
                                        ))}
                                        <div className="border-t border-gray-100 mt-2 pt-2">
                                            <Link href="/services" className="block px-4 py-3 text-sm font-medium text-sky-600 hover:bg-gray-50">
                                                View All Services →
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
                                className={`text-sm font-medium tracking-wide transition-colors ${isActive(link.href) ? 'text-sky-600' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-6">
                        <a href="tel:+919876543210" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            +91 98765 43210
                        </a>
                        <Link
                            href="/contact"
                            className="px-6 py-3 bg-gray-900 text-white text-sm font-medium tracking-wide rounded-lg hover:bg-sky-600 transition-colors"
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Nav */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-6 border-t border-gray-100">
                        <nav className="flex flex-col gap-4">
                            {[...navLinks.slice(0, 2), { name: 'Services', href: '/services' }, ...navLinks.slice(2)].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-700 hover:text-sky-600 font-medium py-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-6 py-3 bg-gray-900 text-white text-center font-medium rounded-lg">
                                Get Quote
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
