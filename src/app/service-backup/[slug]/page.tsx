import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { archivedServiceBackupContent } from '@/lib/serviceBackupContent';

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return Object.keys(archivedServiceBackupContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = archivedServiceBackupContent[slug];

    if (!service) {
        return {
            title: 'Service Backup',
            robots: { index: false, follow: false },
        };
    }

    return {
        title: `${service.title} Backup | Sparktech Processes LLP`,
        description: service.description,
        robots: {
            index: false,
            follow: false,
        },
    };
}

export default async function ServiceBackupDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = archivedServiceBackupContent[slug];

    if (!service) {
        notFound();
    }

    return (
        <>
            <Header />

            <section className="relative overflow-hidden bg-gray-950 pt-36 pb-24 text-white">
                <div className="absolute inset-0 opacity-20">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/90 to-sky-950/80" />

                <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
                    <Link href="/service-backup" className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300 transition hover:text-white">
                        Service backup
                    </Link>
                    <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-lime-300">Archived content copy</p>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{service.title}</h1>
                    <p className="mt-4 text-lg text-sky-200">{service.subtitle}</p>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">{service.description}</p>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="grid gap-4 md:grid-cols-5">
                        {service.process.map((step, index) => (
                            <div key={step} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">Step {index + 1}</p>
                                <p className="mt-3 font-semibold text-gray-900">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.9fr)]">
                        <div className="space-y-8">
                            {service.sections.map((section) => (
                                <div key={section.heading} className="rounded-3xl bg-white p-8 shadow-sm">
                                    <h2 className="text-2xl font-bold text-gray-900">{section.heading}</h2>
                                    <div className="mt-5 space-y-4 text-gray-600">
                                        {section.content.map((paragraph) => (
                                            <p key={paragraph} className="leading-7">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-8">
                            <div className="rounded-3xl bg-white p-8 shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
                                <ul className="mt-5 space-y-3 text-gray-600">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-lime-400" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-3xl bg-white p-8 shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-900">Applications</h2>
                                <div className="mt-5 flex flex-wrap gap-3">
                                    {service.applications.map((application) => (
                                        <span key={application} className="rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
                                            {application}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-3xl bg-white p-8 shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-900">Specifications</h2>
                                <div className="mt-5 space-y-4">
                                    {service.specs.map((spec) => (
                                        <div key={spec.label} className="flex items-center justify-between gap-4 border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                                            <span className="text-sm font-medium text-gray-500">{spec.label}</span>
                                            <span className="text-sm font-semibold text-gray-900">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
