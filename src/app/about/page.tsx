import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
    title: 'About Us | Sparktech Processes LLP',
    description: 'Learn about Sparktech Processes LLP - Leading manufacturer of edible oil extraction and refinery equipment since 2007. Founded by Amit Waghmare in Mumbai.',
};

export default function AboutPage() {
    const milestones = [
        { year: '2007', title: 'Company Founded', description: 'Sparktech Processes LLP established in Mumbai by Amit Waghmare' },
        { year: '2010', title: 'First Export', description: 'Began exporting machinery to Nepal and Bangladesh' },
        { year: '2015', title: 'Global Expansion', description: 'Extended operations to USA, Sri Lanka and other countries' },
        { year: '2020', title: '100+ Projects', description: 'Completed over 100 successful turnkey projects worldwide' },
        { year: '2024', title: 'Industry Leader', description: 'Recognized as leading EPC partner in edible oil industry' },
    ];

    const team = [
        { name: 'Amit Waghmare', role: 'Founder & CEO', image: '/images/About Us/About Us Thumbnail Image.jpg' },
    ];

    return (
        <>
            <Header />

            <PageBanner
                title="About Us"
                subtitle="Your trusted partner in edible oil processing solutions since 2007"
                breadcrumbs={[{ name: 'About Us', href: '/about' }]}
            />

            {/* Main About Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/About Us/About Us Thumbnail Image.jpg"
                                    alt="Sparktech Engineering Team"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#3CAAE5] to-[#99C71E]"></div>
                            </div>
                            {/* Stats Card */}
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 hidden md:block">
                                <div className="flex gap-8">
                                    <div className="text-center">
                                        <p className="text-3xl font-bold bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-transparent">17+</p>
                                        <p className="text-sm text-gray-500">Years Experience</p>
                                    </div>
                                    <div className="text-center border-l border-gray-200 pl-8">
                                        <p className="text-3xl font-bold bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-transparent">100+</p>
                                        <p className="text-sm text-gray-500">Projects</p>
                                    </div>
                                    <div className="text-center border-l border-gray-200 pl-8">
                                        <p className="text-3xl font-bold bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-transparent">15+</p>
                                        <p className="text-sm text-gray-500">Countries</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:pl-8">
                            <p className="text-[#3CAAE5] font-semibold tracking-wider uppercase mb-2">Who We Are</p>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                A Perfect <span className="bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-transparent">EPC Project Partner</span>
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Sparktech Processes LLP was established in 2007 by <strong>Amit Waghmare</strong>, a visionary leader with deep expertise in the edible oil and food-processing industries. Based in Mumbai, we have grown to become a leading manufacturer and exporter of industrial machinery.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We specialize in designing, manufacturing, and exporting equipment such as oil solvent extraction plants, vegetable oil refineries, hydrogenation units, pressure leaf filters, deodorizing plants, and related machinery. Our commitment to quality and innovation has earned us a reputation as a trusted partner for turnkey project solutions.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                With an annual turnover between 5–25 crore INR, we continue to expand our global footprint, serving clients in USA, Nepal, Bangladesh, Sri Lanka, and many other countries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vision */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#3CAAE5] to-[#77C6F1] rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600">
                                To be the global leader in providing innovative, sustainable, and efficient solutions for the edible oil and food processing industries, setting new standards for quality and reliability.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#99C71E] to-[#B8D809] rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600">
                                To deliver cutting-edge technology and turnkey solutions that empower our clients to achieve maximum productivity, efficiency, and profitability while maintaining the highest standards of safety and environmental responsibility.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-[#3CAAE5] font-semibold tracking-wider uppercase mb-2">Our Journey</p>
                        <h2 className="text-4xl font-bold text-gray-900">Company Milestones</h2>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3CAAE5] to-[#99C71E] hidden md:block"></div>

                        {milestones.map((milestone, index) => (
                            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                                        <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] text-white rounded-full text-sm font-semibold mb-2">
                                            {milestone.year}
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                                        <p className="text-gray-600">{milestone.description}</p>
                                    </div>
                                </div>
                                {/* Center Dot */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#3CAAE5] rounded-full hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-[#B8D809] font-semibold tracking-wider uppercase mb-2">What Drives Us</p>
                        <h2 className="text-4xl font-bold">Our Core Values</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: '🎯', title: 'Quality', desc: 'Uncompromising quality in every product we deliver' },
                            { icon: '💡', title: 'Innovation', desc: 'Continuous improvement and technological advancement' },
                            { icon: '🤝', title: 'Integrity', desc: 'Honest and transparent in all our dealings' },
                            { icon: '🌍', title: 'Sustainability', desc: 'Environmentally responsible manufacturing practices' },
                        ].map((value, index) => (
                            <div key={index} className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-gray-400">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
