import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import GalleryGrid from './GalleryGrid';

export const metadata: Metadata = {
    title: 'Project Gallery | Sparktech Processes LLP',
    description: 'Explore our completed projects worldwide - Oil refineries, extraction plants, and processing facilities in India, Bangladesh, Nepal, Sri Lanka and more.',
};

export default function GalleryPage() {
    return (
        <>
         
      

            <PageBanner
                title="Our Projects"
                subtitle="Explore our successfully completed projects across the globe"
                breadcrumbs={[{ name: 'Gallery', href: '/gallery' }]}
                backgroundImage="/images/Gallery/Gallery Banner/Gallery Banner.jpg"
            />

            <GalleryGrid />

        
        </>
    );
}
