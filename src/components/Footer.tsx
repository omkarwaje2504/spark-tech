import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

                    {/* Company */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-lime-500 flex items-center justify-center shadow-lg shadow-sky-500/20 transition-transform duration-500 group-hover:scale-110">
                                <span className="text-white font-black text-xl font-outfit">S</span>
                            </div>
                            <div>
                                <span className="block text-xl font-bold text-white font-outfit tracking-tight">Sparktech</span>
                                <span className="block text-[10px] text-sky-400 font-black tracking-[0.2em] uppercase">Processes LLP</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed font-light text-sm">
                            A Perfect EPC Project Partner. Pioneering industrial machinery solutions for the global edible oil industry since 2007. Built on excellence, delivered with precision.
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                                { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                            ].map((social) => (
                                <a key={social.name} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sky-500 hover:border-sky-400 transition-all duration-300 group">
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Technologies */}
                    <div>
                        <h4 className="text-white font-bold mb-8 font-outfit uppercase tracking-widest text-xs">Technologies</h4>
                        <ul className="space-y-4">
                            {['Oil Seed Preparation', 'Oil Extraction', 'Oil & Fats Refining', 'Oil Processing', 'Filtration', 'Value Added Projects'].map((item) => (
                                <li key={item}>
                                    <Link href="/technologies" className="text-gray-400 hover:text-sky-400 transition-all duration-300 text-sm font-light flex items-center gap-2 group">
                                        <div className="w-1 h-1 rounded-full bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Capabilities */}
                    <div>
                        <h4 className="text-white font-bold mb-8 font-outfit uppercase tracking-widest text-xs">Capabilities</h4>
                        <ul className="space-y-4">
                            {['Design & Development', 'Manufacturing', 'Quality & Testing', 'Certification', 'Installation Support', 'After Sales Service'].map((item) => (
                                <li key={item}>
                                    <Link href="/capabilities" className="text-gray-400 hover:text-sky-400 transition-all duration-300 text-sm font-light flex items-center gap-2 group">
                                        <div className="w-1 h-1 rounded-full bg-lime-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-8 font-outfit uppercase tracking-widest text-xs">Get In Touch</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4 group">
                                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:bg-sky-500/10 group-hover:border-sky-500/20 transition-all">
                                    <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-400 text-sm leading-relaxed font-light">Santacruz West, Mumbai, <br />Maharashtra, India</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:bg-sky-500/10 group-hover:border-sky-500/20 transition-all">
                                    <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors text-sm font-light">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:bg-sky-500/10 group-hover:border-sky-500/20 transition-all">
                                    <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <a href="mailto:info@sparktechprocesses.com" className="text-gray-400 hover:text-white transition-colors text-sm font-light truncate">info@sparktechprocesses.com</a>
                            </li>
                        </ul>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-sky-500 hover:border-sky-400 transition-all duration-500 shadow-xl hover:shadow-sky-500/20 active:scale-95 group overflow-hidden"
                        >
                            <span className="relative z-10 text-[10px] tracking-[0.2em]">SEND INQUIRY</span>
                            <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 bg-gray-950/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-gray-500 text-xs font-light tracking-wide">
                            © {new Date().getFullYear()} <span className="text-gray-400 font-medium">Sparktech Processes LLP</span>. All rights reserved. Built with precision.
                        </p>
                        <div className="flex items-center gap-8">
                            <Link href="/privacy" className="text-gray-500 hover:text-white text-xs transition-colors font-light">Privacy Policy</Link>
                            <Link href="/terms" className="text-gray-500 hover:text-white text-xs transition-colors font-light">Terms of Service</Link>
                            <div className="w-px h-4 bg-white/10" />
                            <span className="text-gray-500 text-xs font-light">Global Presence</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
