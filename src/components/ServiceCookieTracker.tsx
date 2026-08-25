'use client';

import { useEffect } from 'react';

// Maps service slugs to the contact form service names
const slugToServiceName: Record<string, string> = {
    'solvent-extraction': 'Solvent Extraction Plant',
    'oil-refinery': 'Vegetable Oil Refinery',
    'fractionation': 'Fractionation Plant',
    'deodorization': 'Deodorization Plant',
    'bleaching': 'Bleaching Plant',
    'dewaxing': 'Winterization / De-Waxing',
    'lecithin': 'Lecithin Plant',
    'bakery-shortening': 'Bakery Shortening Plant',
    'hydrogenation': 'Hydrogenation Plant',
    'filtration': 'Other',
    'interesterification': 'Other',
};

export default function ServiceCookieTracker({ slug }: { slug: string }) {
    useEffect(() => {
        const serviceName = slugToServiceName[slug] || '';
        if (serviceName) {
            // Set cookie that expires in 30 days
            const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
            document.cookie = `SPARKTECH_service_interest=${encodeURIComponent(serviceName)}; path=/; expires=${expires}; SameSite=Lax`;
        }
    }, [slug]);

    return null; // This component only sets cookies, no UI
}
