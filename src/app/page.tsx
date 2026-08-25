"use client";

import Link from "next/link";
import Image from "next/image";
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
  type ChangeEvent,
} from "react";
import { motion, type Variants } from "framer-motion";
import { siteContact } from "@/lib/site";

// ============================================================================
// ANIMATION HELPERS
// ============================================================================

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const VIEWPORT = { once: true, amount: 0.3, margin: "0px 0px -15% 0px" } as const;

// Scroll-triggered wrapper: animates in once when it enters view
const Reveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={className}
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={VIEWPORT}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

// ============================================================================
// DATA
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
    image: "/images/Services/solvent-extraction.webp",
  },
  {
    id: "oil-refinery",
    title: "Oil Refineries",
    description:
      "Complete chemical and physical refining solutions removing phosphatides, free fatty acids, pigments, odors, and waxes for premium edible oil.",
    href: "/services/oil-refinery",
    image: "/images/Services/oil-refinery.webp",
  },
  {
    id: "fractionation",
    title: "Fractionation Plant",
    description:
      "Custom-designed dry fractionation technology separating triglycerides into components with precise melting ranges for diverse food applications.",
    href: "/services/fractionation",
    image: "/images/Services/fractionation.webp",
  },
  {
    id: "dewaxing",
    title: "De-Waxing / Winterization",
    description:
      "Cold stability solutions preventing crystallization and clouding of waxes in bottled edible oils for long-term clarity and shelf appeal.",
    href: "/services/dewaxing",
    image: "/images/Services/dewaxing.webp",
  },
  {
    id: "lecithin",
    title: "Lecithin Plant",
    description:
      "High-performance lecithin recovery for rice bran and soybean processing with unique gentle drying design preventing gum burn.",
    href: "/services/lecithin",
    image: "/images/Services/lecithin.webp",
  },
  {
    id: "bakery-shortening",
    title: "Bakery Shortening & Margarine Plant",
    description:
      "Complete processing systems with Essessprocessor technology, glycol cooling, and crystal distribution for premium bakery fats.",
    href: "/services/bakery-shortening",
    image: "/images/Services/bakery-shortening.webp",
  },
  {
    id: "hydrogenation",
    title: "Hydrogenation Plant",
    description:
      "Advanced fat modification converting liquid vegetable oils into solid or semi-solid fats for margarine, shortening, and industrial fats.",
    href: "/services/hydrogenation",
    image: "/images/Services/hydrogenation.webp",
  },
  {
    id: "interesterification",
    title: "Interesterification Plant",
    description:
      "Zero-trans fat modification technology rearranging fatty acids within triglycerides — available in both chemical and enzymatic options.",
    href: "/services/interesterification",
    image: "/images/Services/interesterification.webp",
  },
] as const;

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation and plant brief",
    description:
      "Capture capacity targets, feedstock, product mix, utilities, and expansion goals before engineering starts.",
  },
  {
    number: "02",
    title: "Process design and detailed engineering",
    description:
      "Translate business requirements into practical process flow, equipment scope, and execution-ready planning.",
  },
  {
    number: "03",
    title: "Procurement and fabrication",
    description:
      "Align materials, equipment, and fabrication decisions with the approved process and delivery schedule.",
  },
  {
    number: "04",
    title: "Installation and commissioning",
    description:
      "Coordinate site execution, startup, and performance stabilization with fewer handoff gaps.",
  },
  {
    number: "05",
    title: "Training and post-handover support",
    description:
      "Equip operators and maintenance teams to run the plant with confidence after commissioning.",
  },
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

const SPECIALIZATIONS = [
  "Oil Extraction Plants",
  "Refinery Setup & Upgrades",
  "Food Processing Units",
] as const;

const TECHNOLOGIES = [
  {
    number: "01",
    title: "Oil Seed Preparation",
    href: "/technologies#seed-preparation",
    image: "/images/Technologies/seed-preparation.webp",
  },
  {
    number: "02",
    title: "Oil Extraction",
    href: "/technologies#oil-extraction",
    image: "/images/Technologies/oil-extraction.webp",
  },
  {
    number: "03",
    title: "Oil & Fats Refining",
    href: "/technologies#oil-refining",
    image: "/images/Technologies/oil-refining.webp",
  },
  {
    number: "04",
    title: "Oil Processing",
    href: "/technologies#oil-processing",
    image: "/images/Technologies/oil-processing.webp",
  },
  {
    number: "05",
    title: "Filtration",
    href: "/technologies#filtration",
    image: "/images/Technologies/filtration.webp",
  },
  {
    number: "06",
    title: "Value Added Projects",
    href: "/technologies#value-added",
    image: "/images/Technologies/value-added.webp",
  },
] as const;

const CARD_SIZES = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

// ============================================================================
// SHARED UI
// ============================================================================

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

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const CTAButton = ({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) => {
  const base =
    "inline-flex items-center justify-center gap-3 rounded-full text-xs font-semibold uppercase transition";
  const style =
    variant === "primary"
      ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400"
      : "border border-white/25 bg-white/5 text-white backdrop-blur-md hover:border-white/50 hover:bg-white/10";

  return (
    <Link href={href} className={`${base} ${style} ${className}`}>
      {children}
      <ArrowIcon />
    </Link>
  );
};

const Pill = ({ label, index }: { label: string; index?: number }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-[#B0D10E] px-4 py-2 text-sm md:text-xl lg:text-sm font-bold text-black">
    {index !== undefined && (
      <span className=" text-sm md:text-xl lg:text-sm font-semibold text-black">0{index + 1}</span>
    )}
    {label}
  </span>
);

// ============================================================================
// HERO
// ============================================================================

const HeroSection = () => (
  <section
    id="hero-section"
    className="relative min-h-screen w-full overflow-hidden bg-black text-white"
  >
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
          src="/images/Home-banner/SPARKTECH_video_compressed.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-black/0" />
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_45%)]" />
    </div>

    <div className="relative z-10 mx-auto flex min-h-screen container flex-col justify-between px-6 lg:px-8">
      <motion.div
        className="pb-16 lg:pb-48 pt-32 md:pt-40 xl:pt-52 2xl:pt-72"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={fadeUp}
          className="flex items-center gap-2 mb-3 w-fit rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase  text-sky-200 backdrop-blur-sm"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
          </span>
          Concept to Commissioning
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold leading-[1.05] md:text-6xl lg:text-6xl 2xl:text-7xl"
        >
          Processing Oil, Fats
          <span className="block bg-gradient-to-r from-sky-300 via-white to-lime-300 bg-clip-text text-transparent">
            &amp; Derivatives
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="md:mt-6 lg:mt-4 2xl:mt-6 max-w-xl text-base leading-relaxed text-gray-200  md:text-xl lg:text-lg"
        >
          Specialized in the supply and initialization of oil extraction,
          refinery &amp; food processing units — engineered from concept to
          commissioning.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-1.5 md:gap-2.5">
          {SPECIALIZATIONS.map((item, i) => (
            <Pill key={item} label={item} index={i} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-10 md:mt-20 lg:mt-10 flex flex-col gap-2 md:gap-4 sm:flex-row sm:items-center"
        >
          <CTAButton
            href="/contact"
            className="inline-flex items-center gap-3 self-start rounded-full border border-sky-400 px-4 py-2 md:px-6 md:py-3 text-xs md:text-lg lg:text-sm  font-semibold uppercase text-sky-600 transition hover:bg-sky-50"
          >
            Send Your Enquiry
          </CTAButton>
          <a
            href={siteContact.officePhoneHref}
            className="inline-flex w-fit items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-7 py-2 md:py-3 text-xs md:text-lg lg:text-sm font-semibold uppercase text-white backdrop-blur-md transition hover:border-white/50 hover:bg-white/10"
          >
            Ask Our Experts
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 lg:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
        </span>
      </motion.div>
    </div>
  </section>
);

// ============================================================================
// ABOUT
// ============================================================================

const AboutSection = () => (
  <section id="about-section" className="bg-slate-100 py-10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-6 2xl:gap-16">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="absolute -left-6 top-8 h-40 w-40 rounded-full bg-sky-100 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-100 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
            <Image
              src="/images/about-us/About Us Thumbnail Image.jpg"
              alt="SPARKTECH edible oil plant engineering"
              width={1200}
              height={900}
              className="w-full object-cover md:h-64 lg:h-full"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-950/65 via-gray-950/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 md:px-6 2xl:px-8">
              <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                Leading the future of edible oil processing
              </h2>
              <p className="text-xs text-gray-100 md:text-sm">
                SPARKTECH combines engineering depth with execution discipline
                so buyers can move from idea to production with less friction
                and more clarity.
              </p>
            </div>
          </div>
        </motion.div>

        <div>
          <Reveal>
            <h2 className="text-2xl font-bold leading-7 text-gray-800 md:text-4xl md:leading-8 lg:leading-none">
              Proven EPC expertise across 6 countries —
              <br />
              <span className="text-lg font-light leading-5 md:text-2xl md:leading-none 2xl:text-3xl">
                From Concept to Commissioning, We deliver Reliability.
              </span>
            </h2>
          </Reveal>

          <motion.div
            className="mt-6 grid gap-3 md:grid-cols-2 lg:mt-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
           viewport={VIEWPORT}
          >
            {DIFFERENTIATORS.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-4"
              >
                <h3 className="text-lg font-bold text-gray-800 lg:text-xl">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-600 2xl:text-sm">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-500 hover:text-sky-400"
                >
                  Read more
                  <ArrowIcon />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

// ============================================================================
// SERVICES
// ============================================================================

const ServiceCard = ({
  title,
  description,
  href,
  image,
}: {
  title: string;
  description: string;
  href: string;
  image: string;
}) => (
  <Link
    href={href}
    className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:border-sky-300 hover:shadow-xl"
  >
    <div className="relative h-40 md:h-64 w-full overflow-hidden bg-gray-200">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes={CARD_SIZES}
      />
      <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/80 via-black/40 to-transparent p-6 transition-all duration-300 group-hover:opacity-0">
        <h3 className="text-lg font-bold leading-tight text-white lg:text-xl">
          {title}
        </h3>
      </div>
    </div>

    <div className="absolute inset-0 flex flex-col items-start justify-end bg-linear-to-t from-black/95 via-black/70 to-black/0 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <h3 className="mb-1 text-lg font-bold leading-tight text-white lg:text-xl">
        {title}
      </h3>
      <p className="mb-4 text-sm leading-tight text-gray-100">{description}</p>
      <div className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
        Learn more
        <ArrowIcon className="h-4 w-4" />
      </div>
    </div>
  </Link>
);

const ServicesSection = () => (
  <section id="services-section" className="py-10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <h2 className="flex-1 text-2xl font-bold leading-7 text-gray-800 md:text-4xl md:leading-8 lg:leading-none">
          Our Solutions
        </h2>
        <Link
          href="/services"
          className="inline-flex items-center gap-3 self-start rounded-full border border-sky-400 px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-semibold uppercase text-sky-600 transition hover:bg-sky-50"
        >
          View All Services
          <ArrowIcon className="h-4 w-4" />
        </Link>
      </Reveal>

      <motion.div
        className="grid gap-2 md:grid-cols-3 lg:grid-cols-4"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        {SERVICES.map((service) => (
          <motion.div key={service.id} variants={fadeUp}>
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ============================================================================
// PROCESS (static timeline)
// ============================================================================

const STEP_COLORS = ["#B0D10E", "#6EC0EF"] as const;

const StepIcon = ({ index, color }: { index: number; color: string }) => (
  <Image
    src={`/images/processes/process-${index + 1}.webp`}
    alt={`Step ${index + 1} icon`}
    width={400}
    height={400}
    style={{ color }}
  />
);

const ProcessSection = () => {
  const [active, setActive] = useState(2); // highlighted step (middle by default)

  return (
    <section
      id="process-section"
      className="bg-linear-to-r from-[#6EC0EF]/20 to-[#B0D10E]/20 py-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="mb-12 text-center">
          <h2 className="text-2xl font-bold leading-tight text-gray-800 md:text-4xl">
            Process clarity reduces buying friction
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-base text-gray-600 sm:text-lg">
            A visible process builds confidence before the first call — from
            discussion to delivery.
          </p>
        </Reveal>

        {/* Timeline row (horizontal scroll on mobile, grid on desktop) */}
        <motion.div
          className="flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 2xl:gap-16 lg:overflow-visible"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {PROCESS_STEPS.map((step, index) => {
            const isActive = active === index;
            const color = STEP_COLORS[index % STEP_COLORS.length];
            return (
              <motion.button
                key={step.number}
                variants={fadeUp}
                onClick={() => setActive(index)}
                className="group relative flex w-64 shrink-0 flex-col items-center text-center lg:w-auto"
              >
                {/* Connector line + number badge */}
                <div className="relative flex w-full items-center justify-center">
                  {index < PROCESS_STEPS.length - 1 && (
                    <span className="absolute left-1/2 top-1/2 hidden h-0.5 w-full -translate-y-1/2 border-t-2 border-dashed border-gray-300 lg:block" />
                  )}
                  <span
                    className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full text-xs font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110"
                    style={{ background: color }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Icon tile */}
                <div className="mt-6 flex h-28 w-28 md:h-40 md:w-40 items-center justify-center rounded-full transition-all duration-300">
                  <StepIcon
                    index={index}
                    color={isActive ? "#ffffff" : color}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-xl lg:text-2xl font-semibold leading-tight text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 px-1 text-sm md:text-md leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// ============================================================================
// TECHNOLOGIES + ENQUIRY (merged)
// ============================================================================

const INPUT_CLASS =
  "rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-sky-400";

interface TechCardProps {
  number: string;
  title: string;
  href: string;
  image: string;
  isActive: boolean;
  onHover: () => void;
  onEnquire: () => void;
}

const TechCard = ({
  number,
  title,
  href,
  image,
  isActive,
  onHover,
  onEnquire,
}: TechCardProps) => (
  <div
    onMouseEnter={onHover}
    className="group relative h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-md"
  >
    <div className="relative h-[16rem] w-full overflow-hidden bg-gray-800">
      <Image
        src={image}
        alt={title}
        fill
        className={`object-cover transition-transform duration-700 ${
          isActive ? "scale-105" : "scale-100"
        }`}
        sizes="(max-width: 768px) 100vw, 60vw"
      />
      <Link
        href={href}
        aria-label={title}
        className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent"
      />
      <span className="absolute left-3 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#B0D10E] text-xs font-bold text-gray-950 shadow-lg">
        {number}
      </span>
      <span
        className={`absolute left-0 top-0 h-full w-1 bg-[#B0D10E] transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>

    <div
      className={`absolute inset-0 flex items-end justify-center pb-6 transition-opacity duration-300 ${
        isActive ? "opacity-0" : "opacity-100"
      }`}
    >
      <h3 className="whitespace-nowrap text-base font-bold uppercase tracking-wide text-white [writing-mode:vertical-rl] rotate-180">
        {title}
      </h3>
    </div>

    <div
      className={`absolute inset-x-0 bottom-0 p-6 transition-opacity duration-500 ${
        isActive ? "opacity-100 delay-150" : "pointer-events-none opacity-0"
      }`}
    >
      <h3 className="text-xl font-bold leading-tight text-white lg:text-2xl">
        {title}
      </h3>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          onClick={onEnquire}
          className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-xs font-semibold uppercase text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
        >
          Send Enquiry
          <ArrowIcon className="h-4 w-4" />
        </button>
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-xs font-semibold uppercase text-white backdrop-blur-md transition hover:border-white/50 hover:bg-white/10"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
);

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  technology: "",
  message: "",
};

const TechnologiesCTASection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [form, setForm] = useState(INITIAL_FORM);
  const formRef = useRef<HTMLDivElement>(null);

  const handleEnquire = useCallback((technology: string) => {
    setForm((prev) => ({
      ...prev,
      technology,
      message: `I'm interested in your ${technology} technology. Please share more details.`,
    }));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(() => {
    // TODO: wire to your API / mailto / form handler
    console.log("Enquiry:", form);
  }, [form]);

  return (
    <section
      id="technologies-section"
      className="relative overflow-hidden bg-slate-800 py-10"
    >
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-6">
          <h2 className="text-2xl font-bold leading-tight text-white md:text-4xl">
            Our Technologies
          </h2>
          <p className="mt-2 max-w-4xl text-base text-gray-300 sm:text-lg">
            SPARKTECH have, after a long experience, developed a complete range
            of equipment suited for each type of raw material and processing
            requirement.
          </p>
        </Reveal>

        {/* Desktop: expanding accordion */}
        <motion.div
          className="hidden gap-3 md:flex"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {TECHNOLOGIES.map((tech, index) => (
            <motion.div
              key={tech.number}
              variants={fadeUp}
              className={`flex ${
                activeIndex === index ? "flex-[6] lg:flex-[5]" : "flex-[1]"
              } transition-all duration-500 ease-in-out`}
              style={{ minWidth: 0 }}
            >
              <TechCard
                {...tech}
                isActive={activeIndex === index}
                onHover={() => setActiveIndex(index)}
                onEnquire={() => handleEnquire(tech.title)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: stacked grid */}
        <motion.div
          className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:hidden"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {TECHNOLOGIES.map((tech) => (
            <motion.div
              key={tech.number}
              variants={fadeUp}
              className="group relative h-32 overflow-hidden rounded-2xl border border-white/10 shadow-md"
            >
              <Image
                src={tech.image}
                alt={tech.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent" />

              <div className="absolute bottom-0 p-2">
                <div className="flex items-center gap-1">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6EC0EF] text-xs font-bold text-white shadow-lg">
                    {tech.number}
                  </span>
                  <h3 className="text-lg font-bold text-white">{tech.title}</h3>
                </div>
                <button
                  onClick={() => handleEnquire(tech.title)}
                  className="mt-1 inline-flex items-center gap-2 rounded-full bg-sky-500 px-3 py-1.5 text-xs font-semibold uppercase text-white"
                >
                  Send Enquiry
                  <ArrowIcon className="h-4 w-4" />
                </button>
                <Link
                  href={tech.href}
                  className="ml-1 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition hover:border-white/50 hover:bg-white/10"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enquiry form */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <div className="h-1.5 w-full bg-linear-to-r from-[#6EC0EF] via-sky-400 to-[#B0D10E]" />
          <div className="grid gap-8 p-3 lg:grid-cols-[1fr_1.2fr] lg:gap-10 lg:px-6 lg:py-3">
            <div>
              <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold leading-tight text-white">
                Planning a new plant, Expanding capacity, or Improving refining
                performance?
              </h3>
              <p className="mt-2 text-xs md:text-sm leading-relaxed text-gray-300 sm:text-base">
                Share your capacity target, feedstock, and output goals.
                SPARKTECH can help scope the right engineering path before you
                commit to execution.
              </p>
              <a
                href={siteContact.officePhoneHref}
                className="mt-1 md:mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                <span className="text-sm md:text-lg uppercase text-gray-400">
                  Or call :
                </span>
                <span className="text-sm md:text-lg text-sky-200">
                  {siteContact.officePhoneDisplay}
                </span>
              </a>
            </div>

            <div className="grid gap-1">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={INPUT_CLASS}
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className={INPUT_CLASS}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className={INPUT_CLASS}
                />
                <input
                  name="technology"
                  value={form.technology}
                  onChange={handleChange}
                  placeholder="Technology of interest"
                  className={`${INPUT_CLASS} border-sky-400/40 bg-sky-500/10`}
                />
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us about your project — capacity, feedstock, output goals…"
                className={`${INPUT_CLASS} resize-none`}
              />
              <button
                onClick={handleSubmit}
                className="mt-1 inline-flex items-center justify-center gap-3 rounded-full bg-sky-500 px-7 py-4 text-xs font-semibold uppercase text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
              >
                Send Your Enquiry
                <ArrowIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================================================
// GALLERY (autoplay + draggable carousel)
// ============================================================================

const ProjectCard = ({
  title,
  location,
  image,
  proof,
}: {
  title: string;
  location: string;
  image: string;
  proof: string;
}) => (
  <div className="group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
    <div className="relative aspect-[16/10] overflow-hidden">
      <Image
        src={image}
        alt={`${title} in ${location}`}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
        sizes={CARD_SIZES}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/10 to-transparent" />
    </div>
    <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
      <div className="inline-flex items-center rounded-xl border border-white/15 bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase text-sky-200 backdrop-blur-sm">
        {proof}
      </div>
      <h3 className="mt-3 text-xl font-semibold text-white lg:text-2xl">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-200">{location}</p>
    </div>
  </div>
);

const AUTOPLAY_MS = 3500;

const GallerySection = () => {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, PROJECTS.length - perView);
  const clampedIndex = Math.min(index, maxIndex);
  const slideW = 100 / perView;

  const prev = useCallback(
    () => setIndex((i) => (i <= 0 ? maxIndex : i - 1)),
    [maxIndex],
  );
  const next = useCallback(
    () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
    [maxIndex],
  );

  // Autoplay (paused while dragging)
  useEffect(() => {
    if (isDragging) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isDragging, next]);

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (isDragging) setDragOffset(e.clientX - dragStartX.current);
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    const width = containerRef.current?.clientWidth ?? 1;
    const threshold = width / perView / 3;
    if (dragOffset > threshold) prev();
    else if (dragOffset < -threshold) next();
    setDragOffset(0);
    setIsDragging(false);
  };

  return (
    <section id="gallery-section" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold leading-7 text-gray-800 md:text-4xl md:leading-8 lg:leading-none">
              Our Projects Gallery
            </h2>
            <p className="mt-2 text-base text-gray-600 sm:text-lg">
              Explore our successfully completed projects across the globe.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 self-start rounded-full border border-sky-400 px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-semibold uppercase text-sky-600 transition hover:bg-sky-50"
          >
            Review Project Gallery
            <ArrowIcon />
          </Link>
        </Reveal>

        <motion.div
          className="relative mt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 z-20 flex h-8 w-8 md:h-12 md:w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-lg transition hover:border-sky-500 hover:bg-sky-500 hover:text-white"
          >
            <ArrowIcon className="h-5 w-5 rotate-180" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-0 top-1/2 z-20 flex h-8 w-8 md:h-12 md:w-12 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-lg transition hover:border-sky-500 hover:bg-sky-500 hover:text-white"
          >
            <ArrowIcon className="h-5 w-5" />
          </button>

          <div ref={containerRef} className="overflow-hidden">
            <div
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
              className={`flex touch-pan-y select-none ${
                isDragging
                  ? "cursor-grabbing"
                  : "cursor-grab transition-transform duration-500 ease-in-out"
              }`}
              style={{
                transform: `translateX(calc(-${clampedIndex * slideW}% + ${dragOffset}px))`,
              }}
            >
              {PROJECTS.map((project) => (
                <div
                  key={project.title}
                  className="shrink-0 px-3"
                  style={{ width: `${slideW}%` }}
                >
                  <div className={isDragging ? "pointer-events-none" : ""}>
                    <ProjectCard {...project} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-3 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === clampedIndex ? "w-8 bg-sky-500" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// PAGE
// ============================================================================

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <TechnologiesCTASection />
      <GallerySection />
    </>
  );
}
