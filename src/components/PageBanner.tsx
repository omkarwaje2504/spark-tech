import Image from 'next/image';

interface PageBannerProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    breadcrumbs?: { name: string; href: string }[];
}

export default function PageBanner({
    title,
    subtitle,
    backgroundImage = '/images/hero.png',
    breadcrumbs = [],
}: PageBannerProps) {
    return (
        <section className="relative h-[300px] mt-[120px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
                {/* Breadcrumbs */}
                {breadcrumbs.length > 0 && (
                    <nav className="flex items-center gap-2 text-sm mb-4">
                        <a href="/" className="text-gray-300 hover:text-white transition-colors">
                            Home
                        </a>
                        {breadcrumbs.map((crumb, index) => (
                            <span key={index} className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                                <a href={crumb.href} className="text-[#B8D809] hover:text-white transition-colors">
                                    {crumb.name}
                                </a>
                            </span>
                        ))}
                    </nav>
                )}

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
                {subtitle && (
                    <p className="text-xl text-gray-300 max-w-2xl">{subtitle}</p>
                )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
        </section>
    );
}
