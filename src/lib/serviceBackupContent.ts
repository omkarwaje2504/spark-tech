export type ArchivedServiceBackup = {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    sections: { heading: string; content: string[] }[];
    features: string[];
    applications: string[];
    specs: { label: string; value: string }[];
    process: string[];
};

export const archivedServiceBackupContent: Record<string, ArchivedServiceBackup> = {
    deodorization: {
        title: 'Deodorization Plant',
        subtitle: 'Continuous High-Vacuum Distillation',
        description: 'Deodorization is the quality-defining process step in refining oils and fats. Free and low-boiling substances are distilled at higher temperatures in a high vacuum with steam stripping.',
        image: '/images/Services/thumbnails/Deodorizing Plant.jpg',
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
            { label: 'Operating Temp', value: '230-260 deg C' },
            { label: 'Heat Recovery', value: '> 80%' },
            { label: 'Steam Consumption', value: 'Low' }
        ],
        process: ['Heating', 'Distillation', 'De-aeration', 'Cooling', 'Polishing']
    },
    bleaching: {
        title: 'Continuous Bleaching Plant',
        subtitle: 'Loop Reactor Technology',
        description: 'Continuous bleaching process characterized by the loop reactor enabling operation without agitator tanks with simultaneous intensive mixture and contact of bleaching earth with the oil.',
        image: '/images/Services/thumbnails/Bleaching Plant.jpg',
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
            { label: 'Mixing', value: 'Loop Reactor' }
        ],
        process: ['Oil Heating', 'Earth Dosing', 'Intensive Mixing', 'Vacuum Bleaching', 'Filtration']
    }
};
