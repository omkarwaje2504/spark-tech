import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { isArchivedServiceSlug } from '@/lib/serviceVisibility';

export const metadata: Metadata = {
    title: 'Services | Sparktech Processes LLP',
    description: 'Complete range of edible oil processing equipment - Solvent Extraction, Refinery, Fractionation, Lecithin Plants, and Bakery Shortening.',
};

const services = [
    {
        id: 'solvent-extraction',
        title: 'Continuous Solvent Extraction Plant',
        shortDesc: 'Advanced horizontal model with articulated band conveyor assembly for efficient oil extraction.',
        fullDesc: 'Horizontal model comprising of articulated band conveyor assembly, which receives the material from the Feed Hopper and transports it at a very slow predetermined speed from the feed to the discharge end.',
        image: '/images/Services/Services Thumnail Images/Continuous Solvent Extraction Plant.jpg',
        icon: 'ðŸ­',
        features: [
            'Single piece Hollow shaft gear box with 0.05 rpm output',
            'Variable frequency drive for finite speed adjustment',
            'Single piece miscella hoppers with no joints',
            'Sandblasted and zinc base epoxy primer coating',
            'Factory pre-fabrication for quality assurance',
            'Bed height limited to 1.5m for reduced channelling',
        ],
        applications: ['Soyabeans', 'Rice Bran', 'Sunflower Seeds', 'Groundnut', 'Cotton Seeds'],
    },
    {
        id: 'oil-refinery',
        title: 'Vegetable Oil Refinery',
        shortDesc: 'Complete chemical and physical refining solutions for crude edible oils.',
        fullDesc: 'In refining, physical and chemical processes are combined to remove undesirable natural as well as environmental-related components from the crude oil including phosphatides, free fatty acids, pigments, odors and waxes.',
        image: '/images/Services/Services Thumnail Images/Vegetable Oil Refinery.jpg',
        icon: 'âš—ï¸',
        features: [
            'Degumming for phosphatides removal',
            'Neutralization for free fatty acids removal',
            'Bleaching for color removal',
            'Deodorization for odor removal',
            'Winterization for wax separation',
            'Continuous and batch processing options',
        ],
        applications: ['Palm Oil', 'Soybean Oil', 'Sunflower Oil', 'Corn Oil', 'Groundnut Oil'],
    },
    {
        id: 'fractionation',
        title: 'Fractionation Plant',
        shortDesc: 'Dry fractionation process for separating fats into different melting point fractions.',
        fullDesc: 'Natural edible oils are multi-component mixtures consisting of various triglycerides. Through fractionation, different components can be separated for various applications in food technology.',
        image: '/images/Services/Services Thumnail Images/Fractionation.jpg',
        icon: 'ðŸ”¬',
        features: [
            'Dry fractionation from melt - no additives',
            'Physiologically neutral products',
            'No explosion hazards - safe operation',
            'No wastewater or exhaust air contamination',
            'Fully automatic operation',
            'High flexibility in cooling profile design',
        ],
        applications: ['Palm Oil', 'Hardened Fish Oil', 'Rape Oil', 'Soybean Oil', 'Butter Fat'],
    },
    {
        id: 'deodorization',
        title: 'Deodorization Plant',
        shortDesc: 'Continuous deodorizer for quality-defining process in refining oils and fats.',
        fullDesc: 'Deodorization is the quality-defining process step in refining oils and fats. Free and low-boiling substances are distilled at higher temperatures in a high vacuum with steam stripping.',
        image: '/images/Services/Services Thumnail Images/Deodorizing Plant.jpg',
        icon: 'ðŸ’¨',
        features: [
            'Continuous countercurrent deodorizer',
            'Gentle cooling under deodorizing conditions',
            'Integrated countercurrent heat transfer (>80% recovery)',
            'No moving parts for long service life',
            'Automatic product change system',
            'Integrated vapor scrubber',
        ],
        applications: ['All Edible Oils', 'Specialty Fats', 'Industrial Oils'],
    },
    {
        id: 'bleaching',
        title: 'Bleaching Plant',
        shortDesc: 'Continuous bleaching process with loop reactor for intensive mixture and contact.',
        fullDesc: 'Continuous bleaching process characterized by the loop reactor enabling operation without agitator tanks with simultaneous intensive mixture and contact of bleaching earth with the oil.',
        image: '/images/Services/Services Thumnail Images/Bleaching Plant.jpg',
        icon: 'âœ¨',
        features: [
            'Loop reactor technology',
            'Operation under vacuum',
            'Optimized temperature control',
            'Intensive decoloration',
            'Energy efficient heat recovery',
            'Easy filter emptying',
        ],
        applications: ['Degummed Oil', 'Chemically Neutralized Oil', 'Hydrogenated Oils'],
    },
    {
        id: 'dewaxing',
        title: 'De-Waxing / Winterization',
        shortDesc: 'Winterization process to achieve necessary cold stability for bottled edible oils.',
        fullDesc: 'For refining products to be bottled as edible oils, winterization is required to achieve the necessary cold stability. This prevents crystallization & clouding of waxes at ambient temperature.',
        image: '/images/Services/Services Thumnail Images/De-Waxing.jpg',
        icon: 'â„ï¸',
        features: [
            'Cooling by heat exchange with cold water',
            'Temperature range 5-10Â°C',
            'Maturation period up to 24 hours',
            'Horizontal filtration systems',
            'Continuous filtering aid addition',
            'Crystal separation technology',
        ],
        applications: ['Sunflower Oil', 'Corn Oil', 'Rice Bran Oil'],
    },
    {
        id: 'lecithin',
        title: 'Lecithin Plant',
        shortDesc: 'High performance plants for dehydration of wet gums from soybean and rice bran.',
        fullDesc: 'SPARKTECH are experts in manufacturing high performance Lecithin Plants for dehydration of wet gums. Our plants feature unique design for gentle drying process without any burn.',
        image: '/images/Services/Services Thumnail Images/Vegetable Oil Refinery.jpg',
        icon: 'ðŸŒ¿',
        features: [
            'Rice Bran Lecithin processing',
            'Soya Lecithin dehydration',
            'Gentle drying without burn',
            'High flow rate operation',
            'Continuous operation',
            'Low energy consumption',
        ],
        applications: ['Soybean Processing', 'Rice Bran Processing'],
    },
    {
        id: 'bakery-shortening',
        title: 'Bakery Shortening & Margarine Plant',
        shortDesc: 'Complete plant for producing bakery shortening up to 1,000 kgs/hour.',
        fullDesc: 'Process equipment for bakery shortening processing, capable of producing up to 1,000 kgs/hour when cooling from inlet temperature of 45Â°C to 23-25Â°C suitable for semi-liquid filling.',
        image: '/images/Services/Services Thumnail Images/Bakery.jpg',
        icon: 'ðŸ¥',
        features: [
            'Essess processor heat transfer cylinders',
            'Crystal distribution cum stabilizer',
            'Triplex plunger reciprocating pump',
            'Nitrogen gas purging system',
            'Stainless steel product contact parts',
            'Glycol cooling system',
        ],
        applications: ['Bakery Shortening', 'Margarine', 'Vegetable Ghee'],
    },
    {
        id: 'hydrogenation',
        title: 'Hydrogenation Plant',
        shortDesc: 'State-of-the-art hydrogenation units for converting liquid oils into solid fats.',
        fullDesc: 'Advanced hydrogenation plants for the conversion of liquid vegetable oils into semi-solid or solid fats through the addition of hydrogen.',
        image: '/images/Services/Services Thumnail Images/Hydrogenation.jpg',
        icon: 'âš¡',
        features: [
            'Batch and continuous options',
            'Precise temperature control',
            'Catalyst handling systems',
            'Safety interlock systems',
            'Quality monitoring',
            'High conversion efficiency',
        ],
        applications: ['Vanaspati', 'Shortening', 'Industrial Fats'],
    },
    {
        id: 'interesterification',
        title: 'Interesterification Plant',
        shortDesc: 'Advanced fat modification process for producing zero-trans fats.',
        fullDesc: 'Interesterification is an advanced process used to modify the physical properties of oils and fats by rearranging the fatty acids within the triglyceride molecule.',
        image: '/images/Services/Services Thumnail Images/Fractionation.jpg',
        icon: 'ðŸ”„',
        features: [
            'Zero-trans fat production',
            'Chemical & enzymatic options',
            'Flexible feedstock handling',
            'Precise reaction control',
            'Advanced separation technology',
            'Nutritional profile optimization',
        ],
        applications: ['Trans-free Margarine', 'Healthy Shortenings', 'Confectionery Fats'],
    },
];

export default function ServicesPage() {
    return (
        <>
            <Header />

            <PageBanner
                title="Our Services"
                subtitle="Complete range of edible oil processing equipment and solutions"
                breadcrumbs={[{ name: 'Services', href: '/services' }]}
                backgroundImage="/images/Services/Services Banner.jpg"
            />

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-[#3CAAE5] font-semibold tracking-wider uppercase mb-2">What We Offer</p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Project Management &{' '}
                            <span className="bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-transparent">
                                Engineering Services
                            </span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Complete solutions for edible oil extraction, refining, and processing with cutting-edge technology and turnkey project execution.
                        </p>
                    </div>

                    {/* Services Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.filter((service) => !isArchivedServiceSlug(service.id)).map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 group"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-4xl">{service.icon}</div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#3CAAE5] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">{service.shortDesc}</p>

                                    {/* Applications */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {service.applications.slice(0, 3).map((app, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                                {app}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/services/${service.id}`}
                                        className="inline-flex items-center gap-2 text-[#3CAAE5] font-semibold hover:gap-3 transition-all"
                                    >
                                        Learn More
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-[#3CAAE5] font-semibold tracking-wider uppercase mb-2">Why Sparktech</p>
                        <h2 className="text-4xl font-bold text-gray-900">Why Choose Our Services?</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: 'ðŸŽ¯', title: 'Expertise', desc: '17+ years of industry experience' },
                            { icon: 'ðŸ”§', title: 'Turnkey Solutions', desc: 'Complete EPC project delivery' },
                            { icon: 'ðŸŒ', title: 'Global Reach', desc: 'Serving clients in 15+ countries' },
                            { icon: 'ðŸ“ž', title: '24/7 Support', desc: 'Round-the-clock technical assistance' },
                        ].map((item, index) => (
                            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-[#3CAAE5] to-[#99C71E]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                        Get in touch with our engineering team to discuss your requirements and get a customized solution.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white text-[#3CAAE5] px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
                        >
                            Send Your Enquiry
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <a
                            href="tel:+912226465920"
                            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            Ask Our Experts
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}


