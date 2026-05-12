import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { archivedServiceBackupContent } from '@/lib/serviceBackupContent';

export const metadata: Metadata = {
    title: 'Service Backup | Sparktech Processes LLP',
    description: 'Backup copies of archived service pages.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function ServiceBackupIndexPage() {
    return (
        <>
            <Header />

            <section className="bg-gray-950 pt-40 pb-20 text-white">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Backup Pages</p>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Archived service content</h1>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                        These pages preserve the previous content for services removed from the public-facing services listings.
                    </p>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="mx-auto grid max-w-5xl gap-6 px-6 lg:px-8 md:grid-cols-2">
                    {Object.entries(archivedServiceBackupContent).map(([slug, service]) => (
                        <Link
                            key={slug}
                            href={`/service-backup/${slug}`}
                            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Archived service</p>
                            <h2 className="mt-4 text-2xl font-bold text-gray-900">{service.title}</h2>
                            <p className="mt-3 text-sm text-gray-500">{service.subtitle}</p>
                            <p className="mt-5 leading-7 text-gray-600">{service.description}</p>
                            <span className="mt-6 inline-flex items-center text-sm font-semibold text-sky-600">
                                Open backup page
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}
