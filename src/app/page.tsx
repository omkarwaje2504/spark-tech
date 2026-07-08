import Link from "next/dist/client/link";
import Image from "next/image";
import { siteContact } from "@/lib/site";
import { isArchivedServiceSlug } from "@/lib/serviceVisibility";

// ============================================================================
// EXTRACTED CONSTANTS - Cleaner separation of concerns
// ============================================================================

const DIFFERENTIATORS = [
  {
    title: "One EPC partner",
    description:
      "Concept development, detailed engineering, procurement support, installation guidance, and handover under one team.",
    href: "/services",
  },
  {
    title: "Process-first engineering",
    description:
      "Solutions are scoped around feedstock, target products, utilities, and the operating realities of edible oil plants.",
    href: "/services",
  },
  {
    title: "Global project exposure",
    description:
      "References across India, Bangladesh, Nepal, Sri Lanka, the USA, and other international markets.",
    href: "/gallery",
  },
  {
    title: "Commissioning and training",
    description:
      "Support continues after delivery so operators can reach steady, reliable production faster.",
    href: "/services",
  },
] as const;

const SERVICES = [
  {
    id: "solvent-extraction",
    title: "Solvent Extraction",
    description:
      "Modern oil recovery technology for maximum yield from oil-bearing materials with controlled extraction, effective desolventizing, and solvent recovery.",
    href: "/services/solvent-extraction",
    image: "/images/services/thumbnails/solvent-extraction.png",
  },
  {
    id: "oil-refinery",
    title: "Oil Refineries",
    description:
      "Complete chemical and physical refining solutions removing phosphatides, free fatty acids, pigments, odors, and waxes for premium edible oil.",
    href: "/services/oil-refinery",
    image: "/images/services/thumbnails/oil-refinery.png",
  },
  {
    id: "fractionation",
    title: "Fractionation Plant",
    description:
      "Custom-designed dry fractionation technology separating triglycerides into components with precise melting ranges for diverse food applications.",
    href: "/services/fractionation",
    image: "/images/services/thumbnails/fractionation.png",
  },
  {
    id: "dewaxing",
    title: "De-Waxing / Winterization",
    description:
      "Cold stability solutions preventing crystallization and clouding of waxes in bottled edible oils for long-term clarity and shelf appeal.",
    href: "/services/dewaxing",
    image: "/images/services/thumbnails/dewaxing.png",
  },
  {
    id: "lecithin",
    title: "Lecithin Plant",
    description:
      "High-performance lecithin recovery for rice bran and soybean processing with unique gentle drying design preventing gum burn.",
    href: "/services/lecithin",
    image: "/images/services/thumbnails/lecithin.png",
  },
  {
    id: "bakery-shortening",
    title: "Bakery Shortening & Margarine Plant",
    description:
      "Complete processing systems with Essessprocessor technology, glycol cooling, and crystal distribution for premium bakery fats.",
    href: "/services/bakery-shortening",
    image: "/images/services/thumbnails/bakery-shortening.png",
  },
  {
    id: "hydrogenation",
    title: "Hydrogenation Plant",
    description:
      "Advanced fat modification converting liquid vegetable oils into solid or semi-solid fats for margarine, shortening, and industrial fats.",
    href: "/services/hydrogenation",
    image: "/images/services/thumbnails/hydrogenation.png",
  },
  
  {
    id: "interesterification",
    title: "Interesterification Plant",
    description:
      "Zero-trans fat modification technology rearranging fatty acids within triglycerides — available in both chemical and enzymatic options.",
    href: "/services/interesterification",
    image: "/images/services/thumbnails/interesterification.png",
  },
] as const;

const PROCESS_STEPS = [
  {
    title: "Consultation and plant brief",
    description:
      "Capture capacity targets, feedstock, product mix, utilities, and expansion goals before engineering starts.",
  },
  {
    title: "Process design and detailed engineering",
    description:
      "Translate business requirements into practical process flow, equipment scope, and execution-ready planning.",
  },
  {
    title: "Procurement and fabrication",
    description:
      "Align materials, equipment, and fabrication decisions with the approved process and delivery schedule.",
  },
  {
    title: "Installation and commissioning",
    description:
      "Coordinate site execution, startup, and performance stabilization with fewer handoff gaps.",
  },
  {
    title: "Training and post-handover support",
    description:
      "Equip operators and maintenance teams to run the plant with confidence after commissioning.",
  },
] as const;

const PROCESS_TRIGGERS = [
  "Planning a new edible oil plant",
  "Increasing throughput or product range",
  "Upgrading an existing refinery line",
] as const;

const PROJECTS = [
  {
    title: "200 TPD Oil Refinery",
    location: "Bangladesh",
    image:
      "/images/Gallery/Gallery Thumnail Images/Refinery/200 TPD Oil Refinery - Bangladesh.jpg",
    proof: "Refinery reference",
  },
  {
    title: "500 TPD Solvent Extraction",
    location: "Nepal",
    image:
      "/images/Gallery/Gallery Thumnail Images/Solvent Extraction/500 TPD Solvent Extraction - Nepal.jpg",
    proof: "Extraction reference",
  },
  {
    title: "Palm Oil Fractionation",
    location: "Sri Lanka",
    image:
      "/images/Gallery/Gallery Thumnail Images/Fractionation/Palm Oil Fractionation - Sri Lanka.jpg",
    proof: "Value-added processing reference",
  },
  {
    title: "1000 kg/hr Bakery Shortening",
    location: "India",
    image:
      "/images/Gallery/Gallery Thumnail Images/Bakery/1000 kghr Bakery Shortening - India.jpg",
    proof: "Specialty fats reference",
  },
] as const;

const CTA_TRIGGERS = [
  "Planning a new plant",
  "Expanding capacity",
  "Improving refining performance",
] as const;

const SPECIALIZATIONS = [
  "Oil Extraction Plants",
  "Refinery Setup & Upgrades",
  "Food Processing Units",
] as const;

// ============================================================================
// REUSABLE COMPONENTS - Extract repeated patterns
// ============================================================================

/**
 * Arrow icon used across buttons and links
 */
const ArrowIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);
/**
 * Primary CTA button with consistent styling
 */
interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const CTAButton = ({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) => {
  const isPrimary = variant === "primary";
  const baseClass =
    "inline-flex items-center justify-center gap-3 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition";
  const variantClass = isPrimary
    ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400"
    : "border border-white/25 bg-white/5 text-white backdrop-blur-md hover:border-white/50 hover:bg-white/10";

  return (
    <Link href={href} className={`${baseClass} ${variantClass} ${className}`}>
      {children}
      <ArrowIcon />
    </Link>
  );
};

/**
 * Numbered step card for process flow
 */
interface StepCardProps {
  index: number;
  title: string;
  description: string;
}

const StepCard = ({ index, title, description }: StepCardProps) => (
  <div className="grid gap-4 rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-[72px_minmax(0,1fr)] md:items-start">
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-lg font-semibold text-sky-700">
      {String(index + 1).padStart(2, "0")}
    </div>
    <div>
      <h3 className="text-lg lg:text-xl font-semibold text-gray-950">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  </div>
);

/**
 * Featured service card with hover state
 */
interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
}

const ServiceCard = ({ title, description, href, image }: ServiceCardProps) => (
  <Link
    href={href}
    className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:border-sky-300"
  >
    {/* Image Container */}
    <div className="relative h-64 w-full overflow-hidden bg-gray-200">
      <Image
        src={image}
        alt={title}
        fill
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Title Overlay - Always Visible */}
      <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/80 via-black/40 to-transparent p-6 transition-all duration-300 group-hover:opacity-0">
        <h3 className="text-lg lg:text-xl text-white font-bold leading-tight">
          {title}
        </h3>
      </div>
    </div>

    {/* Description Overlay - Revealed on Hover */}
    <div className="absolute inset-0 flex flex-col items-start justify-end bg-linear-to-t from-black/95 via-black/70 to-black/0 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      {/* Title (on hover) */}
      <h3 className="text-lg lg:text-xl font-bold text-white mb-1 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-tight text-gray-100 mb-4">{description}</p>

      {/* Learn More Link */}
      <div className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 group-hover/link:gap-3 transition-all">
        Learn more
        <ArrowIcon className="h-4 w-4" />
      </div>
    </div>
  </Link>
);

/**
 * Project gallery card with image
 */
interface ProjectCardProps {
  title: string;
  location: string;
  image: string;
  proof: string;
}

const ProjectCard = ({ title, location, image, proof }: ProjectCardProps) => (
  <Link
    href="/gallery"
    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
  >
    <div className="relative aspect-[16/10]">
      <Image
        src={image}
        alt={`${title} in ${location}`}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/10 to-transparent" />
    </div>
    <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
      <div className="inline-flex items-center rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-200 backdrop-blur-sm">
        {proof}
      </div>
      <h3 className="mt-3 text-xl lg:text-2xl font-semibold text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-200">{location}</p>
    </div>
  </Link>
);

/**
 * Badge/pill component for specializations and triggers
 */
interface PillProps {
  label: string;
  index?: number;
  variant?: "primary" | "secondary" | "trigger";
  className?: string;
}

const Pill = ({
  label,
  index,
  variant = "primary",
  className = "",
}: PillProps) => {
  const variants = {
    primary: "border border-white/15 bg-white/10 text-white backdrop-blur-md",
    secondary:
      "border border-white/15 bg-white/5 text-sky-200 backdrop-blur-sm",
    trigger: "border border-white/12 bg-white/6 text-gray-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${variants[variant]} ${className}`}
    >
      {index !== undefined && (
        <span className="text-xs font-semibold text-sky-300">0{index + 1}</span>
      )}
      {label}
    </span>
  );
};

// ============================================================================
// HERO SECTION
// ============================================================================

const HeroSection = () => (
  <section
    id="hero-section"
    className="relative min-h-screen w-full overflow-hidden bg-black text-white"
  >
    {/* Full-bleed video background */}
    <div className="absolute inset-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/Home Page/Home Page Banner-Project Engineering Services.jpg"
        className="h-full w-full object-cover"
      >
        <source
          src="/images/Home-banner/pc-size_compressed.mp4"
          type="video/mp4"
        />
      </video>

      {/* Layered overlays for readability with subtle branding */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/0" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.18),_transparent_45%)]" />
    </div>

    {/* Content */}
    <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 lg:px-8">
      {/* Top eyebrow bar */}
      <div className="flex items-center gap-3 pt-28 lg:pt-32">
        <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-200 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
          </span>
          Concept to Commissioning
        </span>
      </div>

      {/* Main content pinned to bottom */}
      <div className="max-w-3xl pb-16 lg:pb-24">
        <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-7xl">
          Processing Oil, Fats
          <span className="block bg-gradient-to-r from-sky-300 via-white to-lime-300 bg-clip-text text-transparent">
            &amp; Derivatives
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg">
          Specialized in the supply and initialization of oil extraction,
          refinery &amp; food processing units — engineered from concept to
          commissioning.
        </p>

        {/* Specialization pills */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {SPECIALIZATIONS.map((item, i) => (
            <Pill key={item} label={item} index={i} variant="secondary" />
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <CTAButton href="/contact" variant="primary">
            Send Your Enquiry
          </CTAButton>
          <a
            href={siteContact.officePhoneHref}
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:border-white/50 hover:bg-white/10"
          >
            Ask Our Experts
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 lg:flex absolute bottom-6 left-1/2">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
        </span>
      </div>
    </div>
  </section>
);

// ============================================================================
// ABOUT SECTION
// ============================================================================

const AboutSection = () => (
  <section id="about-section" className="bg-slate-100 py-10">
    <div className="mx-auto container px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 lg:gap-6 2xl:gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        {/* Image with blurred background shapes */}
        <div className="relative">
          <div className="absolute -left-6 top-8 h-40 w-40 rounded-full bg-sky-100 blur-3xl" />
          {/* <div className="absolute -bottom-8 right-4 h-48 w-48 rounded-full bg-lime-100 blur-3xl" /> */}
          <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-100 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
            <Image
              src="/images/About Us/About Us Thumbnail Image.jpg"
              alt="Sparktech edible oil plant engineering"
              width={1200}
              height={900}
              className="md:h-64 lg:h-full w-full object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-950/65 via-gray-950/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:px-6 2xl:px-8">
              <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                Leading the future of edible oil processing
              </h2>
              <p className=" text-xs md:text-sm text-gray-100">
                Sparktech combines engineering depth with execution discipline
                so buyers can move from idea to production with less friction
                and more clarity.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-7 md:leading-8 lg:leading-none">
            Proven EPC expertise across 6 countries — <br></br>
            <span className="text-lg md:text-2xl 2xl:text-3xl font-light leading-5 md:leading-none">
              From Concept to Commissioning, We deliver Reliability.
            </span>
          </h2>

          <div className="mt-6 lg:mt-8 grid gap-3 md:grid-cols-2">
            {DIFFERENTIATORS.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-4"
              >
                <h3 className="text-lg lg:text-xl text-gray-800 font-bold">
                  {item.title}
                </h3>
                <p className="text-[13px] 2xl:text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-500 hover:text-sky-400"
                >
                  Read more
                  <ArrowIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ============================================================================
// SERVICES SECTION
// ============================================================================

const ServicesSection = () => {
  return (
    <section id="services-section" className=" py-12 lg:py-16">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-7 md:leading-8 lg:leading-none">
              Our Solutions
            </h2>
          </div>

          {/* View All Services Link */}
          <Link
            href="/services"
            className="inline-flex items-center gap-3 rounded-full border border-sky-400 bg-sky-50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700 transition hover:bg-sky-100 hover:border-sky-500"
          >
            View All Services
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* Services Grid - Image Cards */}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              href={service.href}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// PROCESS SECTION
// ============================================================================

const ProcessSection = () => (
  <section id="process-flow-section" className="bg-[#f6f8fb] py-12 lg:py-16">
    <div className="mx-auto container px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px] lg:items-start">
        {/* Steps */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950">
            Process clarity reduces buying friction
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600">
            B2B buyers want to understand how a project moves from discussion to
            delivery. A visible process builds confidence before the first call.
          </p>

          <div className="mt-8 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <StepCard
                key={step.title}
                index={index}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>

        {/* Sidebar with triggers and benefits */}
        <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
            Typical triggers
          </p>
          <div className="mt-4 space-y-3">
            {PROCESS_TRIGGERS.map((trigger) => (
              <div
                key={trigger}
                className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm font-medium text-gray-700"
              >
                {trigger}
              </div>
            ))}
          </div>

          {/* Benefits box */}
          <div className="mt-6 rounded-[1.75rem] bg-gray-950 px-5 py-5 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
              What buyers get
            </p>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-gray-200">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                <span>Clearer scope before procurement decisions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                <span>
                  Fewer execution handoffs across the project lifecycle
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                <span>
                  One accountable engineering partner through commissioning
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ============================================================================
// GALLERY SECTION
// ============================================================================

const GallerySection = () => (
  <section
    id="gallery-section"
    className="bg-gray-950 py-12 text-white lg:py-16"
  >
    <div className="mx-auto container px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Project references add the credibility the homepage was missing
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-300">
            When buyers evaluate an EPC partner, they look for context, scale,
            and relevance. The gallery now works harder as a proof section
            instead of a purely visual showcase.
          </p>
        </div>
        <Link
          href="/gallery"
          className="inline-flex items-center gap-3 self-start rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-sky-400 hover:text-sky-300"
        >
          Review Project Gallery
          <ArrowIcon />
        </Link>
      </div>

      {/* Project grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            location={project.location}
            image={project.image}
            proof={project.proof}
          />
        ))}
      </div>
    </div>
  </section>
);

// ============================================================================
// CTA SECTION
// ============================================================================

const CTASection = () => (
  <section
    id="cta-section"
    className="relative overflow-hidden bg-white py-12 lg:py-16"
  >
    {/* Radial gradient backgrounds */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.10),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(132,204,22,0.12),_transparent_32%)]" />

    <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
      <div className="rounded-[2.5rem] bg-gray-950 px-8 py-10 text-center text-white shadow-[0_40px_100px_rgba(15,23,42,0.18)] lg:px-16 lg:py-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Planning a new plant, upgrade, or expansion?
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-gray-300">
          Share your capacity target, feedstock, and output goals. Sparktech can
          help scope the right engineering path before you commit to execution.
        </p>

        {/* Trigger pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {CTA_TRIGGERS.map((trigger) => (
            <Pill key={trigger} label={trigger} variant="trigger" />
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton href="/contact" variant="primary">
            Send Your Enquiry
          </CTAButton>
          <a
            href={siteContact.officePhoneHref}
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/6 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/30 hover:bg-white/10"
          >
            Ask Our Experts
            <span className="normal-case tracking-normal text-sky-200">
              {siteContact.officePhoneDisplay}
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <GallerySection />
      <CTASection />
    </>
  );
}
