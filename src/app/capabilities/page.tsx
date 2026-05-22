import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import StickyCTA from '@/components/StickyCTA';

export const metadata: Metadata = {
    title: 'Capabilities | Sparktech Processes LLP',
    description: 'Explore our engineering capabilities - Design & Development, Manufacturing, Quality Testing, and Certification. End-to-end EPC solutions.',
};

const capabilities = [
    {
        id: 'design',
        title: 'Design & Development',
        icon: '📐',
        description: 'Our experienced engineering team designs customized solutions using the latest CAD/CAM software and simulation tools.',
        features: [
            'Custom plant design and engineering',
            '3D modeling and simulation',
            'Process flow optimization',
            'Equipment sizing and selection',
            'P&ID and GA drawing preparation',
            'Structural and civil design integration',
        ],
        image: '/images/About Us/About Us Thumbnail Image.jpg',
    },
    {
        id: 'manufacturing',
        title: 'Manufacturing Excellence',
        icon: '🏭',
        description: 'State-of-the-art manufacturing facility equipped with modern machinery for precision fabrication.',
        features: [
            'CNC machining centers',
            'Automated welding systems',
            'Precision bending and rolling',
            'Surface treatment and coating',
            'Assembly and integration',
            'Factory acceptance testing',
        ],
        image: '/images/Technologies/Technologies Thumnail Images/Oil Extraction.jpg',
    },
    {
        id: 'quality',
        title: 'Quality & Testing',
        icon: '✅',
        description: 'Rigorous quality control processes ensure every product meets international standards.',
        features: [
            'Incoming material inspection',
            'In-process quality checks',
            'NDT testing (UT, RT, MPT, DPT)',
            'Hydrostatic pressure testing',
            'Performance validation',
            'Documentation and traceability',
        ],
        image: '/images/Services/Services Thumnail Images/Vegetable Oil Refinery.jpg',
    },
    {
        id: 'certification',
        title: 'Certification & Standards',
        icon: '📜',
        description: 'Our products and processes are certified to meet global quality and safety standards.',
        features: [
            'ISO 9001:2015 certified',
            'CE marking compliant',
            'ASME standards adherence',
            'Food safety compliance',
            'Environmental standards',
            'Export documentation',
        ],
        image: '/images/Services/Services Thumnail Images/Fractionation.jpg',
    },
];

const services = [
    {
        title: 'Installation Supervision',
        description: 'Expert guidance during equipment installation to ensure proper setup and alignment.',
        icon: '🔧',
    },
    {
        title: 'Commissioning Support',
        description: 'Hands-on support during plant commissioning to achieve optimal performance.',
        icon: '⚡',
    },
    {
        title: 'After Sales Support',
        description: 'Comprehensive post-installation support including spare parts and technical assistance.',
        icon: '🛠️',
    },
    {
        title: 'Training Programs',
        description: 'Operator training programs to ensure safe and efficient plant operation.',
        icon: '📚',
    },
];

export default function CapabilitiesPage() {
    return (
        <>
            <Header />
            <StickyCTA />

            <PageBanner
                title="Our Capabilities"
                subtitle="End-to-end engineering, manufacturing, and project execution"
                breadcrumbs={[{ name: 'Capabilities', href: '/capabilities' }]}
                backgroundImage="/images/Home Page/Home Page Banner-Advanced Refinery Plants.jpg"
            />

            {/* Main Capabilities */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-[#3CAAE5] font-semibold tracking-wider uppercase mb-2">What We Can Do</p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Engineering <span className="bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-transparent">Capabilities</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            From concept to commissioning, we deliver comprehensive solutions backed by decades of expertise.
                        </p>
                    </div>

                    {/* Capability Cards */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {capabilities.map((cap, index) => (
                            <div key={cap.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 group">
                                {/* Header Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={cap.image}
                                        alt={cap.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                                        <span className="text-4xl">{cap.icon}</span>
                                        <h3 className="text-2xl font-bold text-white">{cap.title}</h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-gray-600 mb-6">{cap.description}</p>
                                    <ul className="grid grid-cols-2 gap-3">
                                        {cap.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                <svg className="w-4 h-4 text-[#99C71E] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-[#3CAAE5] font-semibold tracking-wider uppercase mb-2">Support Services</p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Complete <span className="bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-transparent">Service Support</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center group hover:-translate-y-2">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Infrastructure */}
            <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-[#B8D809] font-semibold tracking-wider uppercase mb-2">Our Infrastructure</p>
                            <h2 className="text-4xl font-bold mb-6">World-Class Manufacturing Facility</h2>
                            <p className="text-gray-300 mb-8">
                                Our manufacturing facility in India is equipped with the latest machinery and technology to deliver precision-engineered products that meet international standards.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { value: '50,000+', label: 'Sq. Ft. Factory Area' },
                                    { value: '100+', label: 'Skilled Workers' },
                                    { value: '50+', label: 'CNC Machines' },
                                    { value: '24/7', label: 'Operations' },
                                ].map((stat, index) => (
                                    <div key={index} className="bg-white/10 rounded-xl p-4 text-center">
                                        <p className="text-2xl font-bold bg-gradient-to-r from-[#77C6F1] to-[#B8D809] bg-clip-text text-transparent">
                                            {stat.value}
                                        </p>
                                        <p className="text-gray-400 text-sm">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative h-[400px] rounded-2xl overflow-hidden">
                            <Image
                                src="/images/Home Page/Home Page Banner-Turnkey Solutions.jpg"
                                alt="Manufacturing Facility"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
                        Let our engineering team help you design the perfect solution for your requirements.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
                        >
                            Get Started
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            href="/gallery"
                            className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all"
                        >
                            View Our Projects
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
