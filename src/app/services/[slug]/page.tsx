import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCookieTracker from '@/components/ServiceCookieTracker';

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
        description: 'Continuous Solvent Extraction is the most modern method of recovering oil from oil-bearing materials. Proper preparation of the feed, controlled extraction, effective desolventizing, and solvent recovery together determine plant performance.',
        sections: [
            {
                heading: 'Preparatory Section',
                content: [
                    'Preparation of oil-bearing material prior to its extraction is often underestimated by many processors. To achieve the best results in solvent extraction, the way in which the raw material is prepared is almost as important as the extraction equipment itself.',
                    'The feed stock should have a particle size small enough to enable the solvent to reach right up to the core, but not so small as to constitute fines. It should have fairly uniform particle size to pack well in the extractor, form a homogenous bed, and possess good percolation characteristics.',
                    'Too-big pieces result in high residual oil content in meal. Too-small particles or fines lead to poor percolation and channelling, resulting in poor plant performance.',
                    'Fully conscious of the importance of proper preparation, SPARKTECH have developed a complete range of preparatory equipment suited for each type of raw material.'
                ]
            },
            {
                heading: 'Extruder \u2013 Expander \u2013 Drier Cooler',
                content: [
                    '<strong>For Soyabeans, Sunflower, Rapeseed, Salseed, Ricebran etc.</strong> SPARKTECH offers total expander system with squeezomatic cage, Drier Cooler, Conditioner, and Conveying Equipment.',
                    'Machine and internal components are highly rugged in construction due to quality workmanship and optimized metallurgy. Drier cooler of Horizontal type with M.S. fabricated body and S.S. Perforated Tray complete with hot air radiator and blowers.',
                    '<strong>Capacity:</strong> Expanders available in various models from 100 to 500 Tons with pulley as well as gear box driven system.',
                    '<strong>Advantages:</strong> Increases production of existing plants. Reduces solvent & steam consumptions. Consistent results of oil contact in D.O.C. Lower retention of solvent in meal due to high porosity. Can process high oil bearing materials without expellers. Elimination of fines.',
                    '<strong>Expeller Cakes:</strong> Handled by Cake Breaker and Roller Mill. Two pairs of spiked rolls in special alloy break large pieces, further broken in Roller Mill using special corrugated rolls.',
                    '<strong>Soyabeans:</strong> Requires cracking, cooking and flaking. SPARKTECH Cooker is a multistage vertical vessel with steam heated bottom plates. Hydraulic Flaker produces quality flakes of 0.25-0.3 mm thickness.',
                    '<strong>Ricebran:</strong> A powdery material requiring SPARKTECH pelletizing machine for producing porous pellets with good percolation characteristics.'
                ]
            },
            {
                heading: 'Extraction Process',
                content: [
                    'Horizontal model with articulated band conveyor assembly receiving material from the Feed Hopper at very slow predetermined speed. Conveyor moves over rails inside the Extractor on specially constructed sprockets.',
                    'Series of Spray breakers for perfect spray of solvent on the moving bed. Band Conveyor acts as filter bed for eliminating fines, complete with rotary brushes & mesh cleaning system.',
                    '<strong>Drive:</strong> Single piece Hollow shaft gear box with 0.05 rpm output, avoiding Big Gear and pinion arrangement. Variable frequency drive allows finite speed adjustment and data-logging.',
                    '<strong>Construction:</strong> Single piece miscella hoppers with no joints. All body plates sandblasted and Zinc base epoxy primer coated. Factory pre-fabrication ensures quality. Bed height limited to 1.5m reducing miscella channelling.'
                ]
            },
            {
                heading: 'Desolventizing, Distillation & Recovery',
                content: [
                    '<strong>Desolventiser Toaster:</strong> Vapor tight construction in carbon steel with stages having jacketed bottoms for indirect heating. Hollow shaft steam connections facilitate injection through moving blades ensuring highest contact ratio between sparge steam and meal.',
                    '<strong>Distillation:</strong> Miscella fed through vapour economizer to first Evaporator. The Economizer Unit effectively utilizes heat of vapours from the DT, reducing steam consumption. System operates under very high vacuum and lower temperatures ensuring good quality oil.',
                    '<strong>Recuperation:</strong> Uncondensed gases pass through fine spray of cold mineral oil absorbing traces of hexane vapour. SPARKTECH Recuperation system ensures practically NIL escape of hexane to atmosphere.',
                    '<strong>Conditioning:</strong> Extracted meal at around 100 deg. C is cooled in a ventilated conveyor. In the Humidification unit, desired quantity of water is metered and finely sprayed on the material.'
                ]
            }
        ],
        image: '/images/Services/solvent-extraction.webp',
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
        ]
    },
    'oil-refinery': {
        title: 'Chemical/Physical Vegetable Oil Refineries',
        subtitle: 'Complete Refining Solutions',
        description: 'Following extraction of crude edible oils by screw presses and solvent extraction, refining combines physical and chemical processes to remove phosphatides, free fatty acids, pigments, odors, waxes, heavy metals, pesticides, and other undesirable components.',
        sections: [
            {
                heading: 'Neutralizing & Refining',
                content: [
                    'A refining process is carried out following extraction of crude edible oils by means of screw presses and/or solvent extraction.',
                    'In refining, physical and chemical processes are combined to remove undesirable natural as well as environmental-related components from the crude oil including phosphatides, free fatty acids, pigments (such as chlorophyll), odors and flavors, waxes, heavy metals, pesticides etc.',
                    '<strong>Basic Processes:</strong> Degumming for removal of phosphatides, neutralization for removal of free fatty acids, bleaching for removal of color, deodorization to distill odors and flavors as well as free fatty acids, and winterization for separation of waxes.'
                ]
            },
            {
                heading: 'Degumming Process',
                content: [
                    '<strong>Water Degumming:</strong> A large part of the phosphatides (gums) can be hydrated quickly and easily. Water is added to the oil and after a certain reaction period the hydrated phosphatides can be separated either by decantation (settling) or continuously by means of centrifuges.',
                    'A large part of hydratable and even a small proportion of the non-hydratable phosphatides are removed. The extracted gums can be processed into lecithin for food, feed or technical purposes.',
                    '<strong>Chemical Refining:</strong> The free fatty acids are neutralized by caustic soda resulting in so-called soap stock which is separated. Simultaneously the non-hydratable phosphatides are also separated.',
                    '<strong>Physical Refining:</strong> The gum content can be further reduced by dry acid degumming or wet acid degumming processes.'
                ]
            },
            {
                heading: 'Dry & Wet Acid Degumming',
                content: [
                    '<strong>Dry Acid Degumming:</strong> Particularly suitable for oils with low gum contents such as palm oil, coconut oil, palm kernel oil or animal fats. Intensive mixing is implemented following addition of acid to pre-heated crude oil. Conditioned gums are absorbed into bleaching earth and separated by filtration.',
                    '<strong>Benefits:</strong> Low energy consumption, low operation and maintenance costs, minimum footprint, low investment costs, environmentally friendly as no wastewater or soap stock occur.',
                    '<strong>Wet Acid Degumming:</strong> Initially oils with higher gum contents (e.g. corn oil) are similarly processed. Water is added following acid apportioning to achieve gum hydration. Centrifuges enable easy separation of gums in oils with higher non-hydratable gum contents. Consumption of bleaching earth is reduced because the oil has already been extensively degummed.'
                ]
            },
            {
                heading: 'Bleaching',
                content: [
                    'Continuous bleaching process used for: bleaching degummed oil prior to physical neutralization and deodorization, bleaching wet-degummed and chemically neutralized oil prior to deodorization, and post-refining of hydrogenated and chemically interesterified oils and fats.',
                    'The loop reactor enables operation without agitator tanks as well as simultaneous intensive mixture and contact of the bleaching earth with the oil. The bleaching earth adsorbs color pigments as well as oxidation-supporting metal ions, complex compounds, residual soaps and traces of catalyst from hydrogenation.',
                    '<strong>Benefits:</strong> Enhanced product quality, gentle heating through optimized temperature control, intensive decoloration, increased efficiency through optimized utilization of bleaching earth in loop reactor, energy efficiency, and higher wear resistance through high quality materials.'
                ]
            },
            {
                heading: 'De-Waxing & Deodorization',
                content: [
                    '<strong>De-Waxing:</strong> For bottled edible oils (e.g. sunflower seed oil or corn oil), winterization prevents crystallization & clouding of waxes at ambient temperature. Oil is cooled by heat exchange with cold water to 5-10 degree C. Crystals are formed during maturation period of up to 24 hours & subsequently separated through horizontal filters.',
                    '<strong>Deodorization:</strong> The continuous deodorizer operates according to the counter current principle. In case of higher concentration of fatty acids, an upstream counter current column is connected. This ensures optimal absorbing capacity of stripping steam resulting in considerable savings.',
                    '<strong>Benefits:</strong> Gentle cooling under deodorizing conditions, uniform processing, integrated counter current heat transfer with high heat recovery (>80%), long service life, no moving parts, compact configuration with integrated vapour scrubber, easy inspection and product change.'
                ]
            }
        ],
        image: '/images/Services/oil-refinery.webp',
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
        process: []
    },
    'fractionation': {
        title: 'Fractionation Plant',
        subtitle: 'Dry Fractionation Technology',
        description: 'Natural edible oils are multi-component mixtures consisting of various triglycerides. Fractionation separates them into components with smaller melting temperature ranges for different food technology applications.',
        sections: [
            {
                heading: 'Dry Fractionation Process',
                content: [
                    'SPARKTECH dry fractionation plant is custom designed to allow you to achieve selective crystallisation of different triglycerides in edible oil. You can count on producing stable and filterable crystals giving you a product to fit your standards and quality requirements.',
                    'Dry Fractionation System is designed to process crude, pre-treated or RBD palm oil. This makes the entire process simpler with no environmentally hazardous waste products.',
                    '<strong>Process Stages:</strong> 1. Heating the feed oil, 2. Formation of crystal by controlled cooling, 3. Crystal growth, 4. Maturation of crystals, 5. Filtration to separate Olein and Stearin.',
                    'Crystallizers are fitted with double row of circular cooling and variable speed multi-stage agitator. Crystallizer designed with large cooling surface area ensuring no build-up of crystals. Variable speed agitator contributes to gentle agitation without stagnation close to the cooling coil.'
                ]
            },
            {
                heading: 'Applications in Nutrition',
                content: [
                    '<strong>Low Melting Fraction:</strong> Can be used as an adequate substitute for conventional salad oils.',
                    '<strong>Higher-Melting Fraction:</strong> Used for production of margarine or shortening.',
                    '<strong>Mid-Fractions:</strong> Can be used as substitutes for expensive cocoa butter.',
                    '<strong>Special Fats:</strong> Deep frying oil, diet margarine, shortening or mayonnaise are preferably made from fat fractions.',
                    'All common fats such as palm oil, hardened fish or rape oil, soybean oil and butter fat can be processed. No contamination of wastewater or exhaust air as products are completely free of additives.'
                ]
            },
            {
                heading: 'Filtration Equipment',
                content: [
                    '<strong>Horizontal Pressure Leaf Filter:</strong> Horizontally mounted leaves, pneumatic vibrator assembly, hydraulic power pack for dismantling. Shell can be separated by hydraulic system for easy cleaning. Filtration area from 2m\u00B2 to 100m\u00B2.',
                    '<strong>Vertical Pressure Leaf Filter:</strong> Vertical pressure vessel with conical bottom, pneumatic vibrator assembly for dry cake discharge. Stainless steel filter leaves eliminate use of filter cloth. Filtration area from 10m\u00B2 to 150m\u00B2.',
                    '<strong>Polish Filter:</strong> Available in 1 to 10 microns with single bag or multi bag system for efficient filtration of solvent liquid, vegetable oil, syrup.',
                    '<strong>Cartridge Filter:</strong> Designed for use with standard cartridges in various sizes from 1 to 5 microns including diamond wound, pleated, activated, ceramic and porous stainless steel cartridges.'
                ]
            }
        ],
        image: '/images/Services/fractionation.webp',
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
        process: []
    },
    'bakery-shortening': {
        title: 'Bakery Shortening & Margarine Plant',
        subtitle: 'Premium Processing Equipment',
        description: 'Complete plant for producing bakery shortening. Capacity is dependent upon product formulations and inlet temperature of the product to be processed.',
        sections: [
            {
                heading: 'Plant Overview',
                content: [
                    '<strong>The Plant Consists Of:</strong> 1. Essessprocessor - Heat transfer cylinder assembly, 2. Crystal distribution cum stabilizer, 3. Triplex plunger reciprocating pump, 4. Nitrogen gas purging system, 5. Interconnecting product pipeline.'
                ]
            },
            {
                heading: 'Essessprocessor',
                content: [
                    'Two numbers of interconnected Essessprocessor consisting of a single horizontal heat transfer cylinder assembly mounted on an open frame. The cylinder is jacketed and lagged for use with glycol solution. The removable heat transfer cylinder will be internally hard chrome plated.',
                    'The Essessprocessor shaft is concentrically mounted within the cylinder and has four diametrically opposed rows of floating type scraper blades driven by suitable motor. All product contact parts are made of stainless steel AISI 304 materials.',
                    'Two heaters are provided for heating of the product in case of product solidification inside the product cylinder during power failure or production stoppage. Chilling jacket is suitably insulated and cladded with stainless steel sheets for maintaining utmost hygiene.'
                ]
            },
            {
                heading: 'Crystal Distribution & Supporting Systems',
                content: [
                    '<strong>Crystal Distribution Cum Stabilizer:</strong> Horizontally mounted and sequentially connected to the Essessprocessors. The cylinder has two rows of fixed pins with a concentric shaft carrying pins in helical arrangement which intermesh with fixed pins while rotating.',
                    '<strong>Triplex Plunger Reciprocating Pump:</strong> Single acting reciprocating plunger pump for feeding the product to the system. All product contact parts are of stainless steel, suitably jacketed for hot water/steam circulation.',
                    '<strong>Nitrogen Purging System:</strong> Pressure regulating valve for regulating line pressure with gauges for reading line and cylinder pressure. Flow meter with flow regulating valve for adjusting required amount of gas.',
                    '<strong>Interconnecting Product Pipeline:</strong> Each section suitably interconnected for continuous flow of the entire length of the product pipeline.'
                ]
            }
        ],
        image: '/images/Services/bakery-shortening.webp',
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
            { label: 'Inlet Temperature', value: '45Â°C' },
            { label: 'Outlet Temperature', value: '23 - 25Â°C' },
            { label: 'Pump Capacity', value: '1,690 L/hr' },
            { label: 'Consultant', value: 'SS 304/316' },
        ],
        process: []
    },
    'lecithin': {
        title: 'Rice Bran & Soya Lecithin Plant',
        subtitle: 'High Performance Lecithin Recovery',
        description: 'SPARKTECH manufactures high-performance lecithin plants for rice bran and soybean processing, featuring unique design for gentle drying of wet gums without any burn.',
        sections: [
            {
                heading: 'Rice Bran Lecithin',
                content: [
                    'The rice bran oil contains phosphatides, protein, carbohydrates, mucilages and resins as gummy substances which impart colour, turbidity and odour to the oil.',
                    'Phosphatides are the major component of gum which increases refining losses, creates foaming problems and generates more colour.',
                    'The extracted rice bran oil is first dewaxed then prepared for degumming. In the degumming process, degumming agents are used for recovery of oil and gums from the dewaxed rice bran.'
                ]
            },
            {
                heading: 'Soya Lecithin Plant',
                content: [
                    'SPARKTECH are experts in manufacturing high performance Soya Lecithin Plants for dehydration of wet gums from soybean.',
                    'The soybeans are conveyed in the plant, where screening and cracking to appropriate dimensions are conducted. Beans pass through solid fractions developing a bow wave ahead of each blade.',
                    'Our Lecithin Plant requires easy cleaning and minimum maintenance. The plant features unique design making the drying process gentle without any burn.'
                ]
            },
            {
                heading: 'Plant Features',
                content: [
                    '<strong>Features:</strong> High flow rate, continuous operation, low energy consumption, low power consumption.',
                    'The plant is designed for gentle handling of the feed while maintaining efficient lecithin recovery from rice bran and soybean processing streams.'
                ]
            }
        ],
        image: '/images/Services/lecithin.webp',
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
        process: []
    },
    'filtration': {
        title: 'Vegetable Oil Filtration Equipment',
        subtitle: 'Complete Filtration Solutions',
        description: 'Filtration constitutes an important part in the oil refining process. SPARKTECH with vast experience in filtration of various slurries offers the best feasible solution to any filtration problem.',
        sections: [
            {
                heading: 'Horizontal Pressure Leaf Filter',
                content: [
                    'Consists of horizontally mounted leaves, pneumatic vibrator assembly, hydraulic power pack for dismantling of shell side. Shell can be separated from dish end by hydraulic system and leaves are easily accessible for cleaning.',
                    'More suitable where deposits are more. Filtration area ranges from 2m\u00B2 to 100m\u00B2.'
                ]
            },
            {
                heading: 'Vertical Pressure Leaf Filter',
                content: [
                    'Consists of vertical pressure vessel with conical bottom, vertically arranged filter leaves, pneumatic vibrator assembly. Features automatic discharge of cake.',
                    'Stainless steel filter leaves eliminate use of filter cloth. Filtration area ranges from 10m\u00B2 to 150m\u00B2.'
                ]
            },
            {
                heading: 'Polish & Cartridge Filter',
                content: [
                    '<strong>Polish Filter:</strong> Available in 1 to 10 microns with single bag or multi bag system for efficient filtration of solvent liquid, vegetable oil, syrup.',
                    '<strong>Cartridge Filter:</strong> Designed for use with standard cartridges in various sizes from 1 to 5 microns including diamond wound, pleated, activated, ceramic and porous stainless steel cartridges.'
                ]
            }
        ],
        image: '/images/Services/filtration.png',
        features: [
            'Horizontal pressure leaf filter (2-100 mÂ²)',
            'Vertical pressure leaf filter (10-50 mÂ²)',
            'Automatic cake discharge',
            'Stainless steel filter leaves',
            'Pneumatic vibrator assembly',
            'Hydraulic power pack',
            'Cartridge filter options (1-5 microns)',
            'Polish filter with bag system'
        ],
        applications: ['Vegetable Oil', 'Solvent Extraction', 'Syrup Filtration', 'Bleaching Earth Separation'],
        specs: [
            { label: 'Horizontal Filter Area', value: '2 - 100 mÂ²' },
            { label: 'Vertical Filter Area', value: '10 - 50 mÂ²' },
            { label: 'Micron Rating', value: '1 - 5 microns' },
            { label: 'Discharge', value: 'Automatic' },
        ],
        process: []
    },
    'deodorization': {
        title: 'Deodorization Plant',
        subtitle: 'Continuous High-Vacuum Distillation',
        description: 'Deodorization is the quality-defining process step in refining oils and fats. The continuous deodorizer operates according to the counter current principle ensuring optimal product quality and efficiency.',
        sections: [
            {
                heading: 'Process Principle',
                content: [
                    'Deodorization is the quality-defining process step in refining oils and fats. Undesired by-products remain in the oil following preceding refining processes. These can impair the odor, taste or shelf life and must therefore be removed.',
                    'Some by-products are still bound in fat molecules and are only released by chemical transformation provided the oil has been sufficiently retained in the deodorizer. Free and low-boiling substances are distilled at higher temperatures in a high vacuum with steam added for stripping.'
                ]
            },
            {
                heading: 'Continuous Counter Current Deodorizer',
                content: [
                    'The continuous deodorizer is an established distillation device. In case of higher concentration of fatty acids an upstream counter current column is connected. This combination is particularly economical.',
                    'This ensures optimal absorbing capacity of the stripping steam resulting in considerable savings of resources for vacuum generation.',
                    'The product and strip steam are directed in a counter current during the entire processing time. Continuous operation ensures low steam consumption and high degree of heat recovery.'
                ]
            },
            {
                heading: 'Operational Benefits',
                content: [
                    '<strong>Product Quality:</strong> Gentle cooling under deodorizing conditions, uniform processing, throughput and processing time infinitely adjustable to product properties.',
                    '<strong>High Efficiency:</strong> Integrated counter current heat transfer with high heat recovery (>80%), long service life, no moving parts, minor footprint through compact configuration with integrated vapour scrubber.',
                    '<strong>Operational Safety:</strong> Easy inspection of all trays through the central shaft, easy product change, simple product change through automatic system.'
                ]
            }
        ],
        image: '/images/Services/dewaxing.webp',
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
            { label: 'Operating Temp', value: '230-260Â°C' },
            { label: 'Heat Recovery', value: '> 80%' },
            { label: 'Steam Consumption', value: 'Low' },
        ],
        process: []
    },
    'bleaching': {
        title: 'Continuous Bleaching Plant',
        subtitle: 'Loop Reactor Technology',
        description: 'Continuous bleaching process characterized by the loop reactor enabling operation without agitator tanks, with simultaneous intensive mixture and contact of bleaching earth with the oil.',
        sections: [
            {
                heading: 'Bleaching Process',
                content: [
                    'Continuous bleaching process used for: bleaching degummed oil prior to physical neutralization and deodorization, bleaching wet-degummed and chemically neutralized oil, and post-refining of hydrogenated and chemically interesterified oils and fats.',
                    'A pre-defined quantity of activated earth, mixed with activated carbon, is continuously added to the oil. The loop reactor enables operation without agitator tanks with simultaneous intensive mixture and contact.',
                    'The bleaching earth adsorbs color pigments as well as oxidation-supporting metal ions, complex compounds, residual soaps and similar substances such as traces of catalyst from hydrogenation. It also serves as filter for impurities and gums precipitated by acid in dry degumming.'
                ]
            },
            {
                heading: 'Benefits',
                content: [
                    '<strong>Enhanced Product Quality:</strong> Gentle heating through optimized temperature control, intensive decoloration of the oil.',
                    '<strong>Increased Efficiency:</strong> Optimized utilization of bleaching earth through intensive reaction in the loop reactor, convenient operation through sturdy flow.',
                    '<strong>Energy Efficiency:</strong> Higher wear resistance through high quality materials, heat recovery system.'
                ]
            }
        ],
        image: '/images/Services/lecithin.webp',
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
        process: []
    },
    'dewaxing': {
        title: 'De-Waxing / Winterization',
        subtitle: 'Cold Stability Solutions',
        description: 'For refining products to be bottled as edible oils, winterization is required to achieve the necessary cold stability. Winterization prevents crystallization & clouding of the waxes contained in the oil at ambient temperature.',
        sections: [
            {
                heading: 'Winterization Process',
                content: [
                    'For refining products to be bottled as edible oils (e.g. sunflower seed oil or corn oil) winterization is required to achieve the necessary cold stability.',
                    'Winterization prevents crystallization & clouding of the waxes contained in the oil at ambient temperature.',
                    'In the winterization process the oil is cooled by heat exchange with cold water to a temperature between approx. 5 & 10 degree C. Crystals causing oil clouding are formed during a mature period of up to 24 hours & are subsequently separated.'
                ]
            },
            {
                heading: 'Crystal Separation',
                content: [
                    'This is implemented by continuously adding filtering aids & filtration via horizontal filters.',
                    'The process achieves clear, cold-stable oil suitable for bottling and long-term storage.'
                ]
            }
        ],
        image: '/images/Services/dewaxing.webp',
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
            { label: 'Cooling Temp', value: '5-10Â°C' },
            { label: 'Maturation Time', value: '12-24 hours' },
            { label: 'Filter Type', value: 'Horizontal Leaf' },
        ],
        process: []
    },
    'hydrogenation': {
        title: 'Hydrogenation Plant',
        subtitle: 'Fat Modification Technology',
        description: 'Hydrogenation is a chemical process used to convert liquid vegetable oils into solid or semi-solid fats. Through the process, oils are turned to solids by saturating carbon bonds with hydrogen using a metal catalyst.',
        sections: [
            {
                heading: 'Hydrogenation Process',
                content: [
                    'Vegetable oils are made from cottonseed, soybean, and rapeseed (canola oil); through the process of hydrogenation, oils are turned to solids. This is how margarine, shortening, and cake frosting are made, maintaining their solid state at room temperature.',
                    'Hydrogenating vegetable oil is done by raising a blend of vegetable oil and a metal catalyst, typically nickel, in near-vacuum to very high temperatures, and introducing hydrogen. This causes the carbon atoms of the oil to break double-bonds with other carbons.',
                    'The degree of hydrogenation is controlled by restricting the amount of hydrogen, reaction temperature and time, and the catalyst. Full hydrogenation results in conversion of all unsaturated fats into saturated fats.'
                ]
            },
            {
                heading: 'Applications & Benefits',
                content: [
                    '<strong>Texture Modification:</strong> Transforms liquid oils (unsaturated) into solid or semi-solid fats (saturated), creating solid shortenings or spreads that behave similarly to butter.',
                    '<strong>Extended Shelf Life:</strong> The process makes the oil more resistant to spoiling, allowing food products to remain fresh for longer.',
                    '<strong>High-Temperature Stability:</strong> Hydrogenated oils have a higher melting point, making them ideal for frying and cooking at high temperatures without breaking down.',
                    '<strong>Culinary Texture:</strong> Provides a creamy, solid texture for baking cakes, cookies, and pastries.'
                ]
            }
        ],
        image: '/images/Services/hydrogenation.webp',
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
        process: []
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
        image: '/images/Services/fractionation.webp',
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
         
          
            <ServiceCookieTracker slug={slug} />

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
                                            <p
                                                key={i}
                                                className="text-gray-600 leading-relaxed [&_strong]:font-bold [&_strong]:text-gray-900"
                                                dangerouslySetInnerHTML={{ __html: para }}
                                            />
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
                                <h3 className="text-xl font-bold mb-4">Send Your Enquiry</h3>
                                <p className="text-sky-100 mb-6 leading-relaxed">
                                    Interested in this solution? Send your enquiry to our engineering team for a customized proposal.
                                </p>
                                <Link href="/contact" className="block w-full text-center py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                                    Send Your Enquiry
                                </Link>
                                <div className="mt-6 pt-6 border-t border-sky-400 space-y-3">
                                    <a href="tel:+912226465920" className="flex items-center gap-3 text-sky-100 hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        (022) 2646 5920
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

         
        </>
    );
}


