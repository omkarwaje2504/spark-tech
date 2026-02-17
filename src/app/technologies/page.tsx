import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
    title: 'Technologies | Sparktech Processes LLP',
    description: 'Explore our advanced technologies for oil seed preparation, extraction, refining, and processing. State-of-the-art solutions for edible oil industry.',
};

const technologies = [
    {
        id: 'seed-preparation',
        title: 'Oil Seed Preparation',
        description: 'Preparation of oil bearing material prior to its Extraction is often under estimated by many processors. To achieve the best results in solvent Extraction, proper preparation is essential.',
        image: '/images/Technologies/Technologies Thumnail Images/Oil Seed Preparation.jpg',
        features: [
            'Cracking, cooking and flaking operations',
            'Multi-stage vertical vessel cookers',
            'Steam heated bottom plates',
            'Specially designed live steam injection',
            'Pelletizing machines for rice bran',
        ],
        details: 'The feed stock should have a particle size small enough to enable the solvent to reach right up to the core, but at the same time not so small as to constitute "fines". It should have fairly uniform particle size in order to "pack well" in the Extractor and form a homogenous bed with good percolation characteristics.',
    },
    {
        id: 'oil-extraction',
        title: 'Oil Extraction',
        description: 'Our continuous solvent extraction plants are designed for maximum efficiency with horizontal model comprising of articulated band conveyor assembly.',
        image: '/images/Technologies/Technologies Thumnail Images/Oil Extraction.jpg',
        features: [
            'Horizontal band conveyor system',
            'Single piece hollow shaft gear box',
            'Variable frequency drive control',
            'Sandblasted and epoxy coated internals',
            'Factory pre-fabrication for quality assurance',
        ],
        details: 'The extractor receives material from the Feed Hopper and transports it at a very slow predetermined speed from the feed to the discharge end. Band Conveyor Assembly designed to act as filter bed for eliminating fines, complete with rotary brushes & mesh cleaning system.',
    },
    {
        id: 'oil-refining',
        title: 'Oil & Fats Refining',
        description: 'Complete refining solutions combining physical and chemical processes to remove undesirable components from crude oil.',
        image: '/images/Technologies/Technologies Thumnail Images/Oil & ats Refining.jpg',
        features: [
            'Degumming for removal of phosphatides',
            'Neutralization for free fatty acids removal',
            'Bleaching for color removal',
            'Deodorization to distill odors and flavors',
            'Winterization for wax separation',
        ],
        details: 'Refined edible oils are either directly used for human nutrition or serve as feed stock for further processing for example, for mayonnaise, margarine, shortening and for the production of biodiesel.',
    },
    {
        id: 'oil-processing',
        title: 'Oil Processing',
        description: 'Advanced processing techniques including fractionation, hardening and interesterification for specialized applications.',
        image: '/images/Technologies/Technologies Thumnail Images/Fractionation.jpg',
        features: [
            'Dry fractionation process',
            'No additives required',
            'Fully automatic operation',
            'High flexibility in cooling profile',
            'Safe operation without explosion hazards',
        ],
        details: 'Natural edible oils are multi-component mixtures consisting of various triglycerides. Through fractionation, different melting point components can be separated for various food technology applications.',
    },
    {
        id: 'filtration',
        title: 'Filtration',
        description: 'High-performance filtration systems including pressure leaf filters and specialized equipment for oil clarification.',
        image: '/images/Technologies/Technologies Thumnail Images/Filtration.jpg',
        features: [
            'Pressure leaf filters',
            'High efficiency cleaning',
            'Trouble-free heat exchangers',
            'Automatic operation systems',
            'Low maintenance design',
        ],
        details: 'Our advanced filtration processes ensure purity, clarity, and quality across a range of industries and applications.',
    },
    {
        id: 'value-added',
        title: 'Value Added Projects',
        description: 'Specialized plants for lecithin production, bakery shortening, margarine, and other value-added products.',
        image: '/images/Services/Services Thumnail Images/Bakery.jpg',
        features: [
            'Rice Bran Lecithin Plant',
            'Soya Lecithin Plant',
            'Bakery Shortening Plant',
            'Margarine Plant',
            'Hydrogenation Units',
        ],
        details: 'Our value-added plants feature unique design which makes processing gentle without any burn. High flow rate, continuous operation with low energy consumption.',
    },
];

export default function TechnologiesPage() {
    return (
        <>
            <Header />

            <PageBanner
                title="Technologies"
                subtitle="Cutting-edge solutions for oil seed processing and refining"
                breadcrumbs={[{ name: 'Technologies', href: '/technologies' }]}
                backgroundImage="/images/Technologies/Technologies Banner.jpg"
            />

            {/* Technologies Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-[#3CAAE5] font-semibold tracking-wider uppercase mb-2">Our Expertise</p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Advanced <span className="bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-transparent">Processing Technologies</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            SPARKTECH have, after a long experience, developed a complete range of equipment suited for each type of raw material and processing requirement.
                        </p>
                    </div>

                    {/* Technology Cards */}
                    <div className="space-y-20">
                        {technologies.map((tech, index) => (
                            <div key={tech.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Image */}
                                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src={tech.image}
                                            alt={tech.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                                        <div className="absolute bottom-6 left-6">
                                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] text-white rounded-full text-sm font-semibold">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                                    <p className="text-gray-600 mb-6">{tech.description}</p>
                                    <p className="text-gray-500 text-sm mb-6">{tech.details}</p>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-8">
                                        {tech.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <svg className="w-5 h-5 text-[#99C71E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                                    >
                                        Get Quote
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#3CAAE5] to-[#99C71E]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Need Custom Technology Solutions?
                    </h2>
                    <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                        Our engineering team can design and develop customized solutions tailored to your specific requirements.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white text-[#3CAAE5] px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
                    >
                        Contact Our Engineers
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
