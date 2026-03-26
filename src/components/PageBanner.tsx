import Image from 'next/image';
import Link from 'next/link';

interface PageBannerProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    breadcrumbs?: { name: string; href: string }[];
}

export default function PageBanner({
    title,
    subtitle,
    backgroundImage = '/images/Home Page/Home Page Banner-Advanced Refinery Plants.jpg',
    breadcrumbs = [],
}: PageBannerProps) {
    return (
        <section className="relative h-[450px] lg:h-[500px] mt-[80px] lg:mt-[95px] overflow-hidden group">
            {/* Background Image with subtle zoom */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    priority
                    className="object-cover transition-transform duration-[10000ms] scale-110 group-hover:scale-100"
                />
                {/* Sophisticated Gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col justify-center relative z-10">
                {/* Breadcrumbs */}
                {breadcrumbs.length > 0 && (
                    <nav className="flex items-center gap-3 text-[10px] font-black tracking-[0.2em] uppercase mb-6 animate-fade-in-up">
                        <Link href="/" className="text-white/60 hover:text-white transition-colors">
                            HOME
                        </Link>
                        {breadcrumbs.map((crumb, index) => (
                            <span key={index} className="flex items-center gap-3">
                                <span className="w-1 h-1 rounded-full bg-sky-500/50" />
                                <Link href={crumb.href} className="text-sky-400 hover:text-sky-300 transition-colors">
                                    {crumb.name}
                                </Link>
                            </span>
                        ))}
                    </nav>
                )}

                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tighter font-outfit animate-fade-in-up delay-100 uppercase">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed animate-fade-in-up delay-200">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {/* Bottom Glow Element */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent z-20"></div>
        </section>
    );
}
