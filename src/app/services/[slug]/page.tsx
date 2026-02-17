import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Complete service data from client content
const servicesData: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    sections: { heading: string; content: string[] }[];
    image: string;
    features: string[];
    applications: string[];
    specs?: { label: string; value: string }[];
    process?: string[];
}> = {
    'solvent-extraction': {
        title: 'Continuous Solvent Extraction Plant',
        subtitle: 'Modern Oil Recovery Technology',
        description: 'Continuous Solvent Extraction is the most modern way of recovery of oil from oil bearing materials. Based on the chemical principle that "like dissolves like," used to selectively dissolve and separate compounds.',
        sections: [
            {
                heading: 'Preparatory Section',
                content: [
                    'Preparation of oil bearing material prior to its Extraction is often underestimated by many processors. To achieve the best results in solvent Extraction, the way in which the raw material is prepared is almost as important as Extraction Equipment itself.',
                    'The feed stock should have a particle size small enough to enable the solvent to reach right up to the core, but at the same time not so small as to constitute "fines". It should have fairly uniform particle size in order to "pack well" in the Extractor and form a homogenous bed with good percolation characteristics.',
                    'For SOYABEANS, SUNFLOWER, RAPESEED, SALSEED, RICEBRAN - the Expander system with the squeezomatic attachment ensures even direct extraction of high oil content material, producing the best quality crude oil and completely eliminating prepressing operations.'
                ]
            },
            {
                heading: 'Extraction Process',
                content: [
                    'Horizontal model comprising of articulated band conveyor assembly, which receives the material from the Feed Hopper and transports it at a very slow predetermined speed from the feed to the discharge end.',
                    'The conveyor moves over rails suitably located inside the Extractor and rides on specially constructed sprocket at either end. Adjustable damper for regulation of the height of the bed of material on the chain conveyor.',
                    'Band Conveyor Assembly designed to act as filter bed for eliminating fines, complete with rotary brushes & mesh cleaning system for effective cleaning of mesh.'
                ]
            },
            {
                heading: 'Distillation & Recovery',
                content: [
                    'Distillation is a multi-stage process that separates the solvent (like hexane) from the extracted oil using heat, followed by condensation to recover and reuse the solvent.',
                    'The process involves heating the miscella (solution of oil in solvent) in evaporators, sometimes under vacuum, to vaporize the solvent, which is then condensed back into liquid and recycled.',
                    'Recuperation ensures economic viability by recovering the solvent, minimizes waste disposal, and conserves natural resources and energy.'
                ]
            }
        ],
        image: '/images/Services/Services Thumnail Images/Continuous Solvent Extraction Plant.jpg',
        features: [
            'Single piece Hollow shaft gear box with 0.05 rpm output',
            'Variable frequency drive for finite speed adjustment with data-logging',
            'Single piece miscella hoppers - no joints, reduces leakage',
            'All body plates sandblasted and Zinc base epoxy primer coated',
            'Factory pre-fabrication ensures quality and quick installation',
            'Bed height limited to 1.5m reducing miscella channeling',
            'Additional two hoppers for improved hexane drainage',
            'Vapor tight construction in carbon steel'
        ],
        applications: ['Soyabeans', 'Rice Bran', 'Sunflower Seeds', 'Rapeseed', 'Cotton Seeds', 'Salseed'],
        specs: [
            { label: 'Capacity Range', value: '100 - 500 TPD' },
            { label: 'Solvent', value: 'Food Grade Hexane' },
            { label: 'Residual Oil in Meal', value: '< 1%' },
            { label: 'Extractor Drive', value: '0.05 rpm output' },
        ],
        process: ['Preparatory Section', 'Extraction', 'Distillation', 'Meal Desolventising', 'Recuperation', 'Meal Conditioning']
    },
    'oil-refinery': {
        title: 'Chemical/Physical Vegetable Oil Refineries',
        subtitle: 'Complete Refining Solutions',
        description: 'In refining, physical and chemical processes are combined to remove undesirable natural as well as environmental-related components from crude oil including phosphatides, free fatty acids, pigments, odors, waxes, heavy metals and pesticides.',
        sections: [
            {
                heading: 'Degumming Process',
                content: [
                    'Water Degumming: A large part of the phosphatides (gums) can be hydrated quickly and easily. Water is added to the oil, and after reaction period the hydrated phosphatides are separated by centrifuges.',
                    'Dry Acid Degumming: Particularly suitable for processing oils with low gum contents such as palm oil, coconut oil, palm kernel oil. Intensive mixing follows acid addition, conditioned gums are absorbed into bleaching earth.',
                    'Wet Acid Degumming: For oils with higher gum contents (e.g. corn oil), water is added following acid apportioning to achieve gum hydration.'
                ]
            },
            {
                heading: 'Continuous Bleaching',
                content: [
                    'The process is characterized by the loop reactor enabling operation without agitator tanks as well as simultaneous intensive mixture and contact of the bleaching earth with the oil.',
                    'The bleaching earth adsorbs color pigments, oxidation-supporting metal ions, complex compounds, residual soaps and traces of catalyst from hydrogenation.',
                    'Benefits include enhanced product quality under vacuum, gentle heating through optimized temperature control, and intensive decoloration of the oil.'
                ]
            },
            {
                heading: 'Deodorization',
                content: [
                    'Deodorization is the quality-defining process step in refining oils and fats. Free and low-boiling substances are distilled at higher temperatures in a high vacuum with steam stripping.',
                    'The continuous deodorizer operates according to the countercurrent principle. Product and strip steam are directed in countercurrent during entire processing time.',
                    'Features integrated countercurrent heat transfer with high heat recovery (>80%), long service life due to no moving parts, and automatic product change system.'
                ]
            }
        ],
        image: '/images/Services/Services Thumnail Images/Vegetable Oil Refinery.jpg',
        features: [
            'Fully automated handling of various crude oil qualities',
            'Short downtime for raw material changeover',
            'Best centrifugal separators for high yields',
            'Centralized control system operation',
            'Loop reactor for continuous bleaching',
            'High vacuum deodorization system',
            'Heat recovery exceeding 80%',
            'Continuous and semi-continuous operation'
        ],
        applications: ['Palm Oil', 'Soybean Oil', 'Sunflower Oil', 'Coconut Oil', 'Corn Oil', 'Rice Bran Oil', 'Cottonseed Oil'],
        specs: [
            { label: 'Capacity Range', value: '5 - 500 TPD' },
            { label: 'Heat Recovery', value: '> 80%' },
            { label: 'Steam Consumption', value: '70-100 kg/MT oil' },
            { label: 'Phosphorus Content', value: '2-3 PPM max' },
        ],
        process: ['Degumming', 'Neutralization', 'Bleaching', 'De-waxing', 'Deodorization', 'Filtration']
    },
    'fractionation': {
        title: 'Fractionation Plant',
        subtitle: 'Dry Fractionation Technology',
        description: 'Natural edible oils are multi-component mixtures of triglycerides. Through fractionation, components with smaller melting temperature ranges can be separated for various food technology applications.',
        sections: [
            {
                heading: 'Fractionation Applications',
                content: [
                    'The low melting fraction of an edible fat can be used as an adequate substitute for conventional salad oils.',
                    'The higher-melting fraction can be used for production of margarine or shortening.',
                    'Mid-fractions can be used as substitutes for expensive cocoa butter.',
                    'Special fats such as deep frying oil, diet margarine, shortening or mayonnaise are preferably made from fat fractions.'
                ]
            },
            {
                heading: 'Dry Fractionation Process',
                content: [
                    'We recommend the "dry" fractionation process from the melt because this process operates without any additives.',
                    'Results in physiologically neutral products as additives do not cause contamination.',
                    'High operational safety as solvents do not present explosion hazards.',
                    'No contamination of wastewater or exhaust air as completely free of additives.'
                ]
            }
        ],
        image: '/images/Services/Services Thumnail Images/Fractionation.jpg',
        features: [
            'Dry fractionation - no additives required',
            'Physiologically neutral products',
            'No explosion hazards - safe operation',
            'No wastewater contamination',
            'Fully automatic operation',
            'Computerized distributed control system',
            'Membrane filter press separation',
            'High flexibility in cooling profile design'
        ],
        applications: ['Palm Oil', 'Palm Kernel Oil', 'Hardened Fish Oil', 'Rape Oil', 'Soybean Oil', 'Butter Fat'],
        specs: [
            { label: 'Process Type', value: 'Dry Fractionation' },
            { label: 'Crystallization', value: 'Fully Automatic' },
            { label: 'Filtration', value: 'Membrane Filter Press' },
            { label: 'Control', value: 'Computerized DCS' },
        ],
        process: ['Oil Heating', 'Controlled Crystallization', 'Crystal Maturation', 'Membrane Filtration', 'Olein/Stearin Separation']
    },
    'bakery-shortening': {
        title: 'Bakery Shortening & Margarine Plant',
        subtitle: 'Premium Processing Equipment',
        description: 'Complete processing equipment for bakery shortening, capable of producing up to 1,000 kgs/hour when cooling from inlet temperature of 45°C to 23-25°C suitable for semi-liquid filling into cans.',
        sections: [
            {
                heading: 'Essessprocessor System',
                content: [
                    'Two interconnected Essessprocessor units consisting of single horizontal heat transfer cylinder assembly mounted on open frame.',
                    'Cylinder is jacketed and lagged for use with glycol solution. Removable heat transfer cylinder internally hard chrome plated.',
                    'Shaft has four diametrically opposed rows of floating type scraper blades driven by suitable motor hoseproof to IP55 standard.',
                    'All product contact parts are SS304. Chilling jacket suitably insulated and cladded with stainless steel for utmost hygiene.'
                ]
            },
            {
                heading: 'Crystal Distribution & Stabilizer',
                content: [
                    'Horizontally mounted and sequentially connected to Essessprocessors.',
                    'Cylinder has two rows of fixed pins at 180° with concentric shaft carrying pins in helical arrangement.',
                    'Two heaters provided for product heating in case of solidification during power failure.'
                ]
            },
            {
                heading: 'Control & Safety System',
                content: [
                    'The control panel enables smooth and trouble-free handling with safe operation.',
                    'Unit does not start unless temperature at specified locations is below the specified limit.',
                    'Safety features prevent damage to equipment when product inside is solid due to power failure or changeover.'
                ]
            }
        ],
        image: '/images/Services/Services Thumnail Images/Bakery.jpg',
        features: [
            'Essessprocessor with glycol cooling system',
            'Internal hard chrome plated cylinders',
            'SS 304 product contact parts throughout',
            'Crystal distribution stabilizer',
            'Nitrogen gas purging system',
            'Emergency heating provision',
            'Triplex plunger reciprocating pump (1,690 L/hr)',
            'Complete control panel with safety interlocks'
        ],
        applications: ['Bakery Shortening', 'Margarine', 'Vegetable Ghee', 'Pastry Fat', 'Puff Pastry Margarine'],
        specs: [
            { label: 'Production Capacity', value: 'Up to 1000 kg/hr' },
            { label: 'Inlet Temperature', value: '45°C' },
            { label: 'Outlet Temperature', value: '23 - 25°C' },
            { label: 'Pump Capacity', value: '1,690 L/hr' },
            { label: 'Construction', value: 'SS 304/316' },
        ],
        process: ['Fat Blending', 'Pump Feeding', 'Scraped Surface Cooling', 'Crystal Distribution', 'Stabilization', 'Filling']
    },
    'lecithin': {
        title: 'Rice Bran & Soya Lecithin Plant',
        subtitle: 'High Performance Lecithin Recovery',
        description: 'SPARKTECH are experts in manufacturing high performance Lecithin Plants for dehydration of wet gums from soybean and rice bran with unique gentle drying design.',
        sections: [
            {
                heading: 'Rice Bran Lecithin',
                content: [
                    'Rice bran oil contains phospholipids, protein, carbohydrates, mucilages and resins as gummy substances which impart colour, turbidity and odour to the oil.',
                    'Phospholipids are the major component of gum which increases refining losses, creates foaming problems and generates more colour.',
                    'The extracted rice bran oil is dewaxed then prepared for degumming. Degumming agents are used for recovery of oil and gums from dewaxed rice bran.'
                ]
            },
            {
                heading: 'Soya Lecithin Processing',
                content: [
                    'Soybeans are conveyed in the plant where screening and cracking to appropriate dimensions are conducted.',
                    'Our plants feature unique design which makes the drying process of the feed gentle without any burn.',
                    'The Lecithin Plant requires easy cleaning and minimum maintenance.'
                ]
            },
            {
                heading: 'Phosphatidylcholine',
                content: [
                    'Phosphatidylcholine is a natural phospholipid that is biocompatible, biodegradable, and has cleaning action.',
                    'It is obtained from a by-product in the manufacturing process of soybean oil and rice bran oil.',
                    'Raw material comprises mixture of fatty acids, lipids, proteins, phospholipids with phosphatidylcholine between 10-20%.'
                ]
            }
        ],
        image: '/images/Services/Services Thumnail Images/Vegetable Oil Refinery.jpg',
        features: [
            'Gentle drying process without burn',
            'High flow rate operation',
            'Continuous processing capability',
            'Low energy consumption design',
            'Low power consumption',
            'Easy cleaning and maintenance',
            'Food grade lecithin output',
            'Minimum downtime required'
        ],
        applications: ['Soybean Processing', 'Rice Bran Processing', 'Sunflower Processing'],
        specs: [
            { label: 'Process Type', value: 'Continuous' },
            { label: 'Drying', value: 'Gentle without burn' },
            { label: 'Energy', value: 'Low consumption' },
            { label: 'Maintenance', value: 'Minimum required' },
        ],
        process: ['Wet Gum Collection', 'Degumming', 'Gentle Drying', 'Cooling', 'Purification', 'Packaging']
    },
    'filtration': {
        title: 'Vegetable Oil Filtration Equipment',
        subtitle: 'Complete Filtration Solutions',
        description: 'Filtration constitutes an important part in the oil refining process. SPARKTECH with vast experience in filtration of various slurries offers the best feasible solution to any filtration problem.',
        sections: [
            {
                heading: 'Horizontal Pressure Leaf Filter',
                content: [
                    'Consists of horizontally mounted leaves, pneumatic vibrator assembly, hydraulic power pack for dismantling of shell side.',
                    'Shell can be separated from dish end by hydraulic system and leaves are easily accessible for cleaning.',
                    'More suitable where deposits are more. Filtration area ranges from 2m² to 100m².'
                ]
            },
            {
                heading: 'Vertical Pressure Leaf Filter',
                content: [
                    'Consists of vertical pressure vessel with conical bottom, vertically arranged filter leaves, pneumatic vibrator assembly.',
                    'Features automatic discharge of cake. Stainless steel filter leaves eliminate use of filter cloth.',
                    'Filtration area ranges from 10m² to 50m².'
                ]
            },
            {
                heading: 'Cartridge & Polish Filters',
                content: [
                    'Cartridge filters designed for standard cartridges in 1 to 5 microns - wound, pleated, activated, ceramic types.',
                    'Polish filter available in 1 to 5 microns with single or multi bag system.',
                    'Ideal for solvent liquid, vegetable oil, syrup with low-medium solid content.'
                ]
            }
        ],
        image: '/images/Technologies/Technologies Thumnail Images/Filtration.jpg',
        features: [
            'Horizontal pressure leaf filter (2-100 m²)',
            'Vertical pressure leaf filter (10-50 m²)',
            'Automatic cake discharge',
            'Stainless steel filter leaves',
            'Pneumatic vibrator assembly',
            'Hydraulic power pack',
            'Cartridge filter options (1-5 microns)',
            'Polish filter with bag system'
        ],
        applications: ['Vegetable Oil', 'Solvent Extraction', 'Syrup Filtration', 'Bleaching Earth Separation'],
        specs: [
            { label: 'Horizontal Filter Area', value: '2 - 100 m²' },
            { label: 'Vertical Filter Area', value: '10 - 50 m²' },
            { label: 'Micron Rating', value: '1 - 5 microns' },
            { label: 'Discharge', value: 'Automatic' },
        ],
        process: ['Pre-filtration', 'Main Filtration', 'Cake Formation', 'Discharge', 'Filter Cleaning']
    },
    'deodorization': {
        title: 'Deodorization Plant',
        subtitle: 'Continuous High-Vacuum Distillation',
        description: 'Deodorization is the quality-defining process step in refining oils and fats. Free and low-boiling substances are distilled at higher temperatures in a high vacuum with steam stripping.',
        sections: [
            {
                heading: 'Process Principle',
                content: [
                    'The continuous deodorizer operates according to the countercurrent principle. Product and strip steam are directed in countercurrent during entire processing time.',
                    'Free and low-boiling substances like fatty acids, odors, and flavors are distilled at higher temperatures in a high vacuum with steam stripping.',
                    'The process includes gentle cooling under deodorizing conditions to ensure maximum product quality and stability.'
                ]
            },
            {
                heading: 'Energy Efficiency',
                content: [
                    'Features integrated countercurrent heat transfer with high heat recovery (>80%), significantly reducing operational costs.',
                    'The system is designed with no moving parts, ensuring a long service life and minimal maintenance requirements.',
                    'Equipped with an automatic product change system to minimize downtime and prevent cross-contamination.'
                ]
            }
        ],
        image: '/images/Services/Services Thumnail Images/Deodorizing Plant.jpg',
        features: [
            'Continuous countercurrent principle',
            'Heat recovery exceeding 80%',
            'Integrated vapor scrubber',
            'No moving parts design',
            'Automatic product change system',
            'High vacuum operation',
            'Stainless steel construction',
            'Centralized control system'
        ],
        applications: ['Palm Oil', 'Soybean Oil', 'Sunflower Oil', 'Coconut Oil', 'Specialty Fats'],
        specs: [
            { label: 'Vacuum Level', value: '1-3 mbar' },
            { label: 'Operating Temp', value: '230-260°C' },
            { label: 'Heat Recovery', value: '> 80%' },
            { label: 'Steam Consumption', value: 'Low' },
        ],
        process: ['Heating', 'Distillation', 'De-aeration', 'Cooling', 'Polishing']
    },
    'bleaching': {
        title: 'Continuous Bleaching Plant',
        subtitle: 'Loop Reactor Technology',
        description: 'Continuous bleaching process characterized by the loop reactor enabling operation without agitator tanks with simultaneous intensive mixture and contact of bleaching earth with the oil.',
        sections: [
            {
                heading: 'Loop Reactor System',
                content: [
                    'The process is characterized by the loop reactor enabling operation without agitator tanks as well as simultaneous intensive mixture and contact of the bleaching earth with the oil.',
                    'The bleaching earth adsorbs color pigments, oxidation-supporting metal ions, complex compounds, residual soaps and traces of catalyst from hydrogenation.'
                ]
            },
            {
                heading: 'Quality Features',
                content: [
                    'Operation under vacuum ensures no oxidation of oil during the process.',
                    'Gentle heating through optimized temperature control preserves the nutritional value of the oil.',
                    'Highly effective decoloration of the oil with minimal bleaching earth consumption.'
                ]
            }
        ],
        image: '/images/Services/Services Thumnail Images/Bleaching Plant.jpg',
        features: [
            'Loop reactor technology',
            'Agitator-free operation',
            'Vacuum processing',
            'Optimized temperature control',
            'High decoloration efficiency',
            'Low earth consumption',
            'Automatic earth dosing',
            'Continuous flow design'
        ],
        applications: ['Degummed Oil', 'Neutralized Oil', 'Hydrogenated Oil'],
        specs: [
            { label: 'Operation', value: 'Continuous' },
            { label: 'Condition', value: 'Vacuum' },
            { label: 'Mixing', value: 'Loop Reactor' },
        ],
        process: ['Oil Heating', 'Earth Dosing', 'Intensive Mixing', 'Vacuum Bleaching', 'Filtration']
    },
    'dewaxing': {
        title: 'De-Waxing / Winterization',
        subtitle: 'Cold Stability Solutions',
        description: 'Winterization is required to achieve necessary cold stability for bottled edible oils, preventing crystallization and clouding of waxes at ambient temperature.',
        sections: [
            {
                heading: 'Winterization Process',
                content: [
                    'For refining products to be bottled as edible oils, winterization is required to achieve the necessary cold stability.',
                    'The process involves cooling the oil by heat exchange with cold water to temperatures between 5-10°C.',
                    'A maturation period of up to 24 hours ensures proper crystal growth for effective separation.'
                ]
            },
            {
                heading: 'Crystal Separation',
                content: [
                    'Horizontal filtration systems are used for the separation of crystals.',
                    'Continuous filtering aid addition ensures efficiency and consistency in wax removal.',
                    'Advanced technology prevents clouding of oil even in cold climates.'
                ]
            }
        ],
        image: '/images/Services/Services Thumnail Images/De-Waxing.jpg',
        features: [
            'Precise temperature control',
            'Extended maturation period',
            'Horizontal filtration systems',
            'Continuous filter aid dosing',
            'Crystal separation technology',
            'High cold stability output',
            'Automated process control',
            'Energy efficient cooling'
        ],
        applications: ['Sunflower Oil', 'Corn Oil', 'Rice Bran Oil', 'Cottonseed Oil'],
        specs: [
            { label: 'Cooling Temp', value: '5-10°C' },
            { label: 'Maturation Time', value: '12-24 hours' },
            { label: 'Filter Type', value: 'Horizontal Leaf' },
        ],
        process: ['Cooling', 'Crystallization', 'Maturation', 'Filtration', 'Wax Discharge']
    },
    'hydrogenation': {
        title: 'Hydrogenation Plant',
        subtitle: 'Fat Modification Technology',
        description: 'Advanced hydrogenation plants for the conversion of liquid vegetable oils into semi-solid or solid fats through the addition of hydrogen, suitable for vanaspati and shortening production.',
        sections: [
            {
                heading: 'Hydrogenation Process',
                content: [
                    'Conversion of liquid vegetable oils into semi-solid or solid fats by adding hydrogen under pressure and temperature in the presence of a catalyst.',
                    'Precise control of the degree of saturation allows for the production of products with specific melting points and textures.',
                    'The process is essential for producing stable frying oils and base fats for margarine and bakery shortening.'
                ]
            },
            {
                heading: 'System Features',
                content: [
                    'Available in both batch and continuous options depending on production requirements.',
                    'Features sophisticated catalyst handling and recovery systems to minimize waste and cost.',
                    'Integrated safety interlock systems ensure safe operation under pressure.'
                ]
            }
        ],
        image: '/images/Services/Services Thumnail Images/Hydrogenation.jpg',
        features: [
            'Batch and continuous options',
            'Precise temperature control',
            'Catalyst handling systems',
            'Safety interlock systems',
            'High conversion efficiency',
            'Quality monitoring units',
            'Pressure control systems',
            'Automated dosing'
        ],
        applications: ['Vanaspati', 'Shortening base', 'Industrial Fats', 'Margarine base'],
        specs: [
            { label: 'Process', value: 'High Pressure' },
            { label: 'Catalyst', value: 'Nickel based' },
            { label: 'Control', value: 'PLC Based' },
        ],
        process: ['Oil Preparation', 'Catalyst Addition', 'Hydrogenation', 'Filtration', 'Cooling']
    },
    'interesterification': {
        title: 'Interesterification Plant',
        subtitle: 'Chemical & Enzymatic Modification',
        description: 'Interesterification is a advanced process used to modify the physical properties of oils and fats by rearranging the fatty acids within the triglyceride molecule, offering a zero-trans alternative to hydrogenation.',
        sections: [
            {
                heading: 'Process Overview',
                content: [
                    'Unlike hydrogenation, interesterification does not change the degree of saturation or isomerize the fatty acids, thus creating zero-trans fats.',
                    'The process involves the rearrangement of fatty acid chains between and within the triglycerides to achieve desired melting characteristics and nutritional profiles.',
                    'Both chemical and enzymatic interesterification options are available to meet various regulatory and functional requirements.'
                ]
            },
            {
                heading: 'Technological Advantages',
                content: [
                    'Produces fats with excellent plasticity and melting properties for margarine and shortening.',
                    'Capable of processing a wide variety of feedstock oils including palm, soy, and sunflower.',
                    'Modern plants feature low-impact processing to maintain the natural antioxidants in the oil.'
                ]
            }
        ],
        image: '/images/Services/Services Thumnail Images/Fractionation.jpg',
        features: [
            'Zero-trans fat production',
            'Chemical & Enzymatic options',
            'Flexible feedstock handling',
            'Precise reaction control',
            'Advanced separation technology',
            'Nutritional profile optimization',
            'Low process losses',
            'Automated control system'
        ],
        applications: ['Trans-free Margarine', 'Healthy Shortenings', 'Confectionery Fats', 'Specialty Bio-lipids'],
        specs: [
            { label: 'Type', value: 'Batch / Continuous' },
            { label: 'Method', value: 'Chemical/Enzymatic' },
            { label: 'Trans-fat', value: '0%' },
        ],
        process: ['Oil Preparation', 'Reaction', 'Catalyst Neutralization', 'Washing', 'Drying', 'Polishing']
    },
};

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        return { title: 'Service Not Found | Sparktech Processes LLP' };
    }

    return {
        title: `${service.title} | Sparktech Processes LLP`,
        description: service.description,
    };
}

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    return (
        <>
            <Header />

            {/* Hero Banner */}
            <section className="relative pt-32 pb-24 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src={service.image} alt={service.title} fill className="object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-gray-900" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm mb-8">
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                        <span className="text-gray-600">/</span>
                        <Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
                        <span className="text-gray-600">/</span>
                        <span className="text-lime-400">{service.title}</span>
                    </nav>
                    <p className="text-sky-400 font-semibold tracking-widest uppercase text-sm mb-4">{service.subtitle}</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">{service.title}</h1>
                    <p className="text-gray-300 text-xl max-w-3xl leading-relaxed">{service.description}</p>
                </div>
            </section>

            {/* Process Flow */}
            {service.process && (
                <section className="py-12 bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            {service.process.map((step, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="px-5 py-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                                        <span className="text-sky-600 font-bold mr-2">{i + 1}.</span>
                                        <span className="text-gray-700 font-medium">{step}</span>
                                    </div>
                                    {i < service.process!.length - 1 && (
                                        <svg className="w-6 h-6 text-gray-400 mx-2 hidden md:block" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-16">

                        {/* Content */}
                        <div className="lg:col-span-2 space-y-16">

                            {/* Content Sections */}
                            {service.sections.map((section, idx) => (
                                <div key={idx} className="scroll-mt-24" id={section.heading.toLowerCase().replace(/\s+/g, '-')}>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <span className="w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-lg">
                                            {idx + 1}
                                        </span>
                                        {section.heading}
                                    </h2>
                                    <div className="space-y-4 pl-13">
                                        {section.content.map((para, i) => (
                                            <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* Image */}
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                <Image src={service.image} alt={service.title} fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                            </div>

                            {/* Features */}
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Features & Benefits</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                                            <svg className="w-6 h-6 text-lime-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">

                            {/* Quick Nav */}
                            <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Jump to Section</h3>
                                <nav className="space-y-2">
                                    {service.sections.map((section, i) => (
                                        <a
                                            key={i}
                                            href={`#${section.heading.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="block px-4 py-2 text-gray-600 hover:text-sky-600 hover:bg-white rounded-lg transition-colors"
                                        >
                                            {section.heading}
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            {/* Specs */}
                            {service.specs && (
                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Technical Specifications</h3>
                                    <div className="space-y-3">
                                        {service.specs.map((spec, i) => (
                                            <div key={i} className="flex justify-between py-3 border-b border-gray-200 last:border-0">
                                                <span className="text-gray-600">{spec.label}</span>
                                                <span className="font-semibold text-gray-900">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Applications */}
                            <div className="bg-gray-50 rounded-2xl p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Applications</h3>
                                <div className="flex flex-wrap gap-2">
                                    {service.applications.map((app, i) => (
                                        <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 font-medium">
                                            {app}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Card */}
                            <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-8 text-white">
                                <h3 className="text-xl font-bold mb-4">Get a Quote</h3>
                                <p className="text-sky-100 mb-6 leading-relaxed">
                                    Interested in this solution? Contact our engineering team for a customized proposal.
                                </p>
                                <Link href="/contact" className="block w-full text-center py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                                    Request Quote
                                </Link>
                                <div className="mt-6 pt-6 border-t border-sky-400 space-y-3">
                                    <a href="tel:+919876543210" className="flex items-center gap-3 text-sky-100 hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        +91 98765 43210
                                    </a>
                                    <a href="mailto:info@sparktechprocesses.com" className="flex items-center gap-3 text-sky-100 hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        info@sparktechprocesses.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Related Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {Object.entries(servicesData)
                            .filter(([key]) => key !== slug)
                            .slice(0, 3)
                            .map(([key, s]) => (
                                <Link key={key} href={`/services/${key}`} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                                    <div className="relative h-48">
                                        <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sky-600 text-sm font-semibold mb-2">{s.subtitle}</p>
                                        <h3 className="font-bold text-gray-900 group-hover:text-sky-600 transition-colors">{s.title}</h3>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
