'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        id: 1,
        title: '200 TPD Oil Refinery - Bangladesh',
        category: 'Refinery',
        location: 'Bangladesh',
        year: '2023',
        image: '/images/Gallery/Gallery Thumnail Images/Refinery/200 TPD Oil Refinery - Bangladesh.jpg',
        description: 'Complete vegetable oil refinery with degumming, neutralization, bleaching, and deodorization units.',
    },
    {
        id: 2,
        title: '500 TPD Solvent Extraction - Nepal',
        category: 'Extraction',
        location: 'Nepal',
        year: '2022',
        image: '/images/Gallery/Gallery Thumnail Images/Solvent Extraction/500 TPD Solvent Extraction - Nepal.jpg',
        description: 'Large-scale solvent extraction plant for soybean processing with advanced material handling.',
    },
    {
        id: 3,
        title: 'Palm Oil Fractionation - Sri Lanka',
        category: 'Fractionation',
        location: 'Sri Lanka',
        year: '2023',
        image: '/images/Gallery/Gallery Thumnail Images/Fractionation/Palm Oil Fractionation - Sri Lanka.jpg',
        description: 'Dry fractionation plant with crystallization technology for palm oil processing.',
    },
    {
        id: 4,
        title: '1000 kg/hr Bakery Shortening - India',
        category: 'Bakery',
        location: 'India',
        year: '2024',
        image: '/images/Gallery/Gallery Thumnail Images/Bakery/1000 kghr Bakery Shortening - India.jpg',
        description: 'High-capacity bakery shortening production facility with nitrogen purging system.',
    },
    {
        id: 5,
        title: 'Rice Bran Oil Refinery - India',
        category: 'Refinery',
        location: 'India',
        year: '2022',
        image: '/images/Gallery/Gallery Thumnail Images/Refinery/Rice Bran Oil Refinery - India.jpg',
        description: 'Complete rice bran oil refinery with winterization and lecithin recovery.',
    },
    {
        id: 6,
        title: 'Soybean Processing Complex - USA',
        category: 'Extraction',
        location: 'USA',
        year: '2021',
        image: '/images/Gallery/Gallery Thumnail Images/Solvent Extraction/Soybean Processing Complex - USA.jpg',
        description: 'Integrated soybean processing facility with extraction and meal conditioning.',
    },
    {
        id: 7,
        title: 'Continuous Deodorizer - Bangladesh',
        category: 'Refinery',
        location: 'Bangladesh',
        year: '2023',
        image: '/images/Gallery/Gallery Thumnail Images/Refinery/Deodorizing Plant.jpg',
        description: 'Advanced continuous countercurrent deodorizer with high heat recovery.',
    },
    {
        id: 8,
        title: 'Margarine Plant - India',
        category: 'Bakery',
        location: 'India',
        year: '2024',
        image: '/images/Gallery/Gallery Thumnail Images/Bakery/1000 kghr Bakery Shortening - India.jpg',
        description: 'State-of-the-art margarine production facility with cooling and crystallization.',
    },
];

const categories = ['All', 'Refinery', 'Extraction', 'Fractionation', 'Bakery'];
const locations = ['All Locations', 'India', 'Bangladesh', 'Nepal', 'Sri Lanka', 'USA'];

export default function GalleryGrid() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeLocation, setActiveLocation] = useState('All Locations');
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const filteredProjects = projects.filter((project) => {
        const categoryMatch = activeCategory === 'All' || project.category === activeCategory;
        const locationMatch = activeLocation === 'All Locations' || project.location === activeLocation;
        return categoryMatch && locationMatch;
    });

    return (
        <>
            {/* Filters */}
            <section className="py-12 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Category Filters */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-5 py-2 rounded-full font-medium transition-all ${activeCategory === category
                                        ? 'bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Location Filter */}
                        <select
                            value={activeLocation}
                            onChange={(e) => setActiveLocation(e.target.value)}
                            className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3CAAE5] focus:border-transparent"
                        >
                            {locations.map((location) => (
                                <option key={location} value={location}>
                                    {location}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative h-64 md:h-96">
                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                fill
                                className="object-cover"
                            />
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                            >
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-[#99C71E] text-white text-sm font-semibold rounded-full">
                                    {selectedProject.category}
                                </span>
                                <span className="text-gray-500 text-sm">
                                    {selectedProject.location} • {selectedProject.year}
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
                            <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                            >
                                Inquire About Similar Project
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Want to See More Projects?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Contact us to learn more about our completed projects and case studies.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                        Contact Us
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>
        </>
    );
}
