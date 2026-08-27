"use client";
// import { Metadata } from "next";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

// ============================================================================
// ANIMATION HELPERS
// ============================================================================

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const VIEWPORT = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -12% 0px",
} as const;

/** Single element reveal on scroll */
const Reveal = ({
  children,
  className = "",
  variant = fadeUp,
}: {
  children: ReactNode;
  className?: string;
  variant?: Variants;
}) => (
  <motion.div
    className={className}
    variants={variant}
    initial="hidden"
    whileInView="show"
    viewport={VIEWPORT}
  >
    {children}
  </motion.div>
);

/** Stagger container — children should be <motion.* variants={fadeUp}> */
const RevealGroup = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    className={className}
    variants={stagger}
    initial="hidden"
    whileInView="show"
    viewport={VIEWPORT}
  >
    {children}
  </motion.div>
);

// ============================================================================
// DATA
// ============================================================================

const CARDS = [
  {
    num: "01",
    title: "Engineering",
    gradient: "from-sky-500 to-sky-400",
    points: [
      "Process Engineering",
      "Plant Layout & Design",
      "Engineering Documentation",
    ],
    d: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
  },
  {
    num: "02",
    title: "Procurement",
    gradient: "from-cyan-500 to-teal-400",
    points: [
      "Strategic Vendor Management",
      "Material Sourcing & Planning",
      "Cost & Supply Optimization",
    ],
    d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
  },
  {
    num: "03",
    title: "Manufacturing",
    gradient: "from-lime-500 to-green-400",
    points: [
      "Precision Equipment Fabrication",
      "Quality Assurance & Inspection",
      "Modern Manufacturing Facilities",
    ],
    d: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
  },
  {
    num: "04",
    title: "Consultancy",
    gradient: "from-lime-400 to-emerald-500",
    points: [
      "Technical,Process & Plant Consulting",
      "Project Planning & Technical Advisory",
      "Commissioning & Operational Support",
    ],
    d: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z",
  },
] as const;

const STEP_GLYPHS = [
  <g key="1">
    <rect x="11" y="6" width="18" height="28" rx="2" />
    <path d="M15 6V4h10v2M15 14h10M15 20h10M15 26h6" />
  </g>,
  <g key="2">
    <circle cx="20" cy="10" r="3" />
    <path d="M18.5 12.5L12 32M21.5 12.5L28 32M15 25h10" />
  </g>,
  <g key="3">
    <path d="M20 6l12 6v16l-12 6-12-6V12z" />
    <path d="M8 12l12 6 12-6M20 18v18" />
  </g>,
  <g key="4">
    <circle cx="20" cy="20" r="5" />
    <path d="M20 5v5M20 30v5M5 20h5M30 20h5M9 9l3.5 3.5M27.5 27.5L31 31M31 9l-3.5 3.5M12.5 27.5L9 31" />
  </g>,
  <g key="5">
    <path d="M27 9a6 6 0 01-8 8L9 27l4 4 10-10a6 6 0 018-8l-4 4-3-1-1-3z" />
  </g>,
  <g key="6">
    <path d="M6 28a14 14 0 0128 0" />
    <path d="M20 28l7-8" />
    <circle cx="20" cy="28" r="1.5" />
  </g>,
  <g key="7">
    <circle cx="20" cy="20" r="13" />
    <path d="M14 20l4 4 8-9" />
  </g>,
  <g key="8">
    <path d="M8 22v-2a12 12 0 0124 0v2" />
    <rect x="6" y="22" width="5" height="9" rx="2" />
    <rect x="29" y="22" width="5" height="9" rx="2" />
    <path d="M31 31v1a4 4 0 01-4 4h-5" />
  </g>,
];

const QS_GLYPHS = [
  <g key="1">
    <circle cx="20" cy="15" r="9" />
    <path d="M14 22l-2 12 8-4 8 4-2-12M20 11v4M17 15h6" />
  </g>,
  <g key="2">
    <circle cx="17" cy="17" r="9" />
    <path d="M23.5 23.5L32 32M13 17l3 3 5-6" />
  </g>,
  <g key="3">
    <path d="M10 12v16M15 12v16M20 12v16M25 12v16M30 12v16" />
  </g>,
  <g key="4">
    <path d="M6 28a14 14 0 0128 0" />
    <path d="M20 28l7-8" />
  </g>,
  <g key="5">
    <path d="M20 5l12 4v9c0 8-5 13-12 16-7-3-12-8-12-16V9z" />
    <path d="M14 18l4 4 8-8" />
  </g>,
  <g key="6">
    <circle cx="20" cy="20" r="14" />
    <path d="M6 20h28M20 6c5 4 5 24 0 28M20 6c-5 4-5 24 0 28" />
  </g>,
];

const STATS = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 30, suffix: "+", label: "Industries Served" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 40, suffix: "+", label: "Engineers" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 18, suffix: "+", label: "States Served" },
];

const JOURNEY = [
  { year: "2007", title: "Company Founded" },
  { year: "2016", title: "Steady Operations" },
  { year: "2018", title: "Manufacturing Expansion", growth: true },
  { year: "2020", title: "Large Scale EPC Projects" },
  { year: "2023", title: "Automation Integration" },
  { year: "2026", title: "Serving Industries Across India" },
];

const SERVICES = [
  {
    title: "Engineering Design",
    desc: "CAD modelling, 3D design and stress analysis for optimized plant layouts.",
    img: "/images/about-us/what-we-do/engineering-design.webp",
  },
  {
    title: "Plant Manufacturing",
    desc: "Complete industrial plants built to precise process specifications.",
    img: "/images/about-us/what-we-do/plant-manufacturing.webp",
  },
  {
    title: "Equipment Fabrication",
    desc: "Precision fabrication of process equipment and pressure vessels.",
    img: "/images/about-us/what-we-do/equipment-fabrication.webp",
  },
  {
    title: "Turnkey EPC Projects",
    desc: "Single-partner delivery from concept through commissioning.",
    img: "/images/about-us/what-we-do/turnkey-epc-projects.webp",
  },
  {
    title: "Industrial Automation",
    desc: "PLC, SCADA and control systems for smarter, safer operations.",
    img: "/images/about-us/what-we-do/industrial-automation.webp",
  },
  {
    title: "Installation & Commissioning",
    desc: "On-site erection, startup and performance stabilization.",
    img: "/images/about-us/what-we-do/installation-commissioning.webp",
  },
  {
    title: "Maintenance & AMC",
    desc: "Scheduled upkeep and annual contracts for reliable uptime.",
    img: "/images/about-us/what-we-do/maintenance-amc.webp",
  },
  {
    title: "Project Consultancy",
    desc: "Feasibility, process scoping and engineering advisory support.",
    img: "/images/about-us/what-we-do/project-consultancy.webp",
  },
];

const INDUSTRIES = [
  {
    title: "Oil Industries",
    img: "/images/about-us/industries-we-serve/oil-and-gas.webp",
  },
  {
    title: "Fats Industries",
    img: "/images/about-us/industries-we-serve/chemicals.webp",
  },
  {
    title: "Derivatives Industries",
    img: "/images/about-us/industries-we-serve/pharmaceutical.webp",
  },
];

const EPC_STEPS = [
  { step: "01", title: "Requirement Analysis" },
  { step: "02", title: "Engineering Design" },
  { step: "03", title: "Procurement" },
  { step: "04", title: "Manufacturing" },
  { step: "05", title: "Installation" },
  { step: "06", title: "Testing" },
  { step: "07", title: "Commissioning" },
  { step: "08", title: "Support" },
];

const WHY_REASONS = [
  "Complete Turnkey Solutions",
  "Experienced Engineering Team",
  "Precision Manufacturing",
  "Quality Assurance",
  "On-time Project Delivery",
  "Transparent Communication",
  "Dedicated Project Managers",
  "Cost-effective Execution",
  "Nationwide Support",
];

const FACILITY = [
  {
    title: "Factory",
    img: "/images/about-us/manufacturing-facility/factory.webp",
    span: "col-span-2 row-span-2",
  },
  {
    title: "CNC Machines",
    img: "/images/about-us/manufacturing-facility/cnc-machines.webp",
    span: "",
  },
  {
    title: "Fabrication",
    img: "/images/about-us/manufacturing-facility/fabrication.webp",
    span: "",
  },
  {
    title: "Assembly",
    img: "/images/about-us/manufacturing-facility/assembly.webp",
    span: "col-span-2",
  },
  {
    title: "Inspection",
    img: "/images/about-us/manufacturing-facility/inspection.webp",
    span: "",
  },
  {
    title: "Testing",
    img: "/images/about-us/manufacturing-facility/testing.webp",
    span: "",
  },
  {
    title: "Warehouse",
    img: "/images/about-us/manufacturing-facility/warehouse.webp",
    span: "col-span-2",
  },
];

const QUALITY = [
  {
    title: "Quality Assurance Systems",
    desc: "Structured quality processes and inspection controls ensure consistent workmanship and compliance with project requirements.",
  },
  {
    title: "Fabrication Quality Control",
    desc: "Controlled fabrication and dimensional inspections help maintain accuracy, consistency and required workmanship standards.",
  },
  {
    title: "Material & Documentation Control",
    desc: "Systematic control of materials, specifications, certificates and records ensures complete project traceability.",
  },
  {
    title: "Testing & Inspection",
    desc: "Inspection and testing at defined stages verify equipment quality, performance and compliance before dispatch.",
  },
  {
    title: "Safety Compliance",
    desc: "Established safety procedures support safe fabrication, assembly, testing and site activities throughout the project.",
  },
  {
    title: "Standards & Compliance",
    desc: "Project activities follow applicable industry standards, technical specifications and client-defined quality requirements.",
  },
];

const VM = [
  {
    label: "Vision",
    accent: "#3CAAE5",
    wash: "from-sky-50",
    text: "To become India's most trusted EPC engineering partner by delivering innovative, efficient and sustainable industrial solutions.",
  },
  {
    label: "Mission",
    accent: "#99C71E",
    wash: "from-lime-50",
    text: "To empower industries through engineering excellence, advanced manufacturing and reliable project execution while maintaining the highest standards of quality and customer satisfaction.",
  },
];

// ============================================================================
// COUNTER
// ============================================================================

function Counter({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value]);
  return (
    <span className="bg-gradient-to-r from-sky-300 to-lime-300 bg-clip-text text-transparent">
      {n}
      {suffix}
    </span>
  );
}

// ============================================================================
// JOURNEY LINE (curved, rises toward the end, arrowhead tip)
// ============================================================================

/**
 * Vertical position of each timeline point, as a fraction of the track's
 * height (0 = top, 1 = bottom/baseline). This single source of truth drives
 * BOTH the SVG curve and the dot placement, so they always line up exactly
 * regardless of viewport width or height.
 * First points sit flat near the baseline, then ease upward toward the end.
 */
const JOURNEY_Y_FRACTIONS = [0.86, 0.8, 0.7, 0.48, 0.24, 0.04];

/**
 * Measures a container's actual rendered box (via ResizeObserver) and builds
 * a smooth cubic-bezier SVG path across N evenly spaced x positions in REAL
 * PIXELS matching that box. Authoring the path in real pixels — rather than
 * a 0–100 viewBox stretched with preserveAspectRatio="none" — avoids the
 * non-uniform X/Y squish that breaks a wide-short box into disjointed-looking
 * curve segments. The path and the dot positions (computed the same way from
 * the same fractions) always land on the same points because both read off
 * this one measured box.
 */
function useJourneyPath(count: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () =>
      setSize({ width: el.clientWidth, height: el.clientHeight });
    update();
    const obs = new ResizeObserver(update);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const { width, height } = size;
  // Horizontal inset must be large enough that a card (fixed w-48 = 192px,
  // centered on its dot) never overflows the track's left/right edge at the
  // first/last points. Scale with width but never drop below the half-card
  // width + a little breathing room, and cap it so the curve keeps a
  // reasonable amount of travel on smaller laptop screens.
  const CARD_HALF_WIDTH = 96; // px, half of w-48
  const padX = Math.min(
    Math.max(CARD_HALF_WIDTH + 8, width * 0.09),
    width * 0.16,
  );
  const padY = Math.max(12, height * 0.06);
  const usableW = Math.max(0, width - padX * 2);
  const usableH = Math.max(0, height - padY * 2);

  const points = Array.from({ length: count }, (_, i) => {
    const x = padX + (usableW * i) / (count - 1);
    const frac =
      JOURNEY_Y_FRACTIONS[i] ?? JOURNEY_Y_FRACTIONS[JOURNEY_Y_FRACTIONS.length - 1];
    const y = padY + usableH * frac;
    return { x, y };
  });

  let d =
    width > 0 && points.length > 0 ? `M ${points[0].x} ${points[0].y}` : "";
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cx1 = prev.x + (curr.x - prev.x) * 0.5;
    const cy1 = prev.y;
    const cx2 = prev.x + (curr.x - prev.x) * 0.5;
    const cy2 = curr.y;
    d += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${curr.x} ${curr.y}`;
  }

  return { containerRef, d, points, width, height };
}

// ============================================================================
// PAGE
// ============================================================================

export default function AboutPage() {
  const ref = useRef<HTMLElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref2.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "40%"]);

  const journeyPath = useJourneyPath(JOURNEY.length);

  return (
    <>
      {/* HERO */}
      <section
        id="about-hero"
        className="relative w-full overflow-hidden bg-gray-950 text-white"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/about-us/banner.png"
            alt="SPARKTECH industrial project"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/70 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(60,170,229,0.18),transparent_45%)]" />
        </div>

        <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-sky-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-lime-400/10 blur-[120px]" />

        <div className="container relative z-10 mx-auto flex items-center px-4 pb-10 pt-32 lg:pt-36 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: content (staggered) */}
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.span
                variants={fadeUp}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[9px] lg:text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-200 backdrop-blur-sm"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
                </span>
                EPC Project Partner Since 2007
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="text-3xl font-bold leading-[1.08] md:text-4xl lg:text-5xl 2xl:text-6xl"
              >
                Engineering Industrial Growth Through
                <span className="block bg-gradient-to-r from-sky-300 via-white to-lime-300 bg-clip-text text-transparent">
                  Complete EPC Solutions
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-2 lg:mt-6 max-w-3xl text-sm leading-relaxed text-gray-300 lg:text-md 2xl:text-lg"
              >
                From concept and engineering to procurement, manufacturing,
                installation and commissioning — we deliver integrated
                industrial solutions that maximize productivity, quality and
                long-term value.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-5 lg:mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-sky-500 px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
                >
                  Discuss Your Project
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="/gallery"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md transition hover:border-white/50 hover:bg-white/10"
                >
                  View Projects
                </a>
              </motion.div>
            </motion.div>

            {/* Right: plant image */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] [animation:float_6s_ease-in-out_infinite]">
                <Image
                  src="/images/about-us/banner.png"
                  alt="SPARKTECH manufacturing plant"
                  width={900}
                  height={1100}
                  className="lg:h-[23rem] 2xl:h-[30rem] w-full object-cover"
                  priority
                  sizes="45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 to-lime-400" />
              </div>

              <motion.div
                className="absolute -left-6 bottom-10 rounded-2xl border border-white/10 bg-gray-900/80 px-5 py-4 backdrop-blur-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
              >
                <p className="bg-gradient-to-r from-sky-300 to-lime-300 bg-clip-text text-3xl font-bold text-transparent">
                  15+
                </p>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Countries Served
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

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
      </section>

      {/* ABOUT SPARKTECH */}
      <section
        id="about-SPARKTECH"
        className="relative overflow-hidden bg-gray-50 py-10"
      >
        <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-sky-100 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-lime-100 blur-3xl" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-6 md:mb-12 max-w-3xl text-center">
            <span className="mb-1 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-600">
              About SPARKTECH
            </span>
            <h2 className="flex-1 text-2xl font-bold leading-7 text-gray-800 md:text-4xl md:leading-8 lg:leading-none">
              Engineering Beyond{" "}
              <span className="bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-transparent">
                Construction
              </span>
            </h2>
          </Reveal>

          <div className="grid items-stretch gap-8 lg:grid-cols-12">
            <Reveal variant={fadeLeft} className="relative lg:col-span-7">
              <div className="relative md:h-[15rem] lg:h-[23rem] 2xl:h-[24rem] h-[15rem] overflow-hidden rounded-[2rem] border border-gray-100 shadow-[0_30px_80px_rgba(15,23,42,0.12)] lg:h-full">
                <Image
                  src="/images/about-us/who-we-are.png"
                  alt="SPARKTECH industrial manufacturing plant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
              </div>
            </Reveal>

            <Reveal
              variant={fadeRight}
              className="flex flex-col justify-center lg:col-span-5"
            >
              <p className="text-base leading-relaxed text-gray-600">
                SPARKTECH is a trusted Engineering, Procurement and Consultants
                (EPC) project partner specializing in designing, manufacturing
                and delivering complete industrial plants and process solutions.
                We combine engineering expertise, modern manufacturing
                capabilities and project management excellence to execute
                projects from concept to commissioning.
              </p>
              <div className="mt-8 space-y-6">
                <div className="border-l-2 border-sky-400 pl-4">
                  <p className="text-sm leading-relaxed text-gray-600">
                    Our integrated approach enables clients to work with a
                    single reliable partner throughout the project lifecycle —
                    reducing risks, improving coordination and ensuring timely
                    completion.
                  </p>
                </div>
                <div className="border-l-2 border-lime-400 pl-4">
                  <p className="text-sm leading-relaxed text-gray-600">
                    From plant development and process optimization to
                    integrated industrial solutions, SPARKTECH provides
                    comprehensive engineering expertise and project execution
                    capabilities focused on efficiency, reliability and
                    long-term operational performance.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <RevealGroup className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-gray-100 bg-gray-100 md:grid-cols-4">
            {[
              { value: "17+", label: "Years Experience" },
              { value: "100+", label: "Projects Delivered" },
              { value: "15+", label: "Countries Served" },
              { value: "Turnkey", label: "EPC Solutions" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="bg-white px-6 py-8 text-center"
              >
                <p className="bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section
        id="our-journey"
        className="relative overflow-hidden bg-white py-10 overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-10 max-w-3xl text-center">
            <span className="mb-1 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-600">
              Our Journey
            </span>
            <h2 className="flex-1 text-2xl font-bold leading-7 text-gray-800 md:text-4xl md:leading-8 lg:leading-none">
              A decade of{" "}
              <span className="bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-transparent">
                engineering growth
              </span>
            </h2>
          </Reveal>

          {/* Desktop timeline — curved rising path with arrowhead */}
          {/*
            The SVG track and the dots share ONE coordinate system, measured
            in real pixels via ResizeObserver (see useJourneyPath):
            - the track div is a fixed-height box whose actual pixel
              width/height is measured on mount and on resize
            - the SVG viewBox uses those exact pixel dimensions (no 0–100
              percentage box, no preserveAspectRatio="none"), so the curve
              is never non-uniformly stretched and stays one continuous line
            - each dot is placed at the SAME pixel point the path was drawn
              through (journeyPath.points[i]), so line and dots never drift
            - padX (inset) reserves enough room that a card, centered on its
              dot, never overflows the track's left/right edge — this keeps
              the first (2007) and last (2026) cards fully on-screen on
              laptop-width viewports, not just large desktops
            my-20/my-24 on the wrapper reserves vertical room for the cards
            that extend above/below the track itself.
          */}
          <div className="relative hidden lg:block my-16 xl:my-20 lg:py-10">
            <div
              ref={journeyPath.containerRef}
              className="relative h-64 xl:h-72 2xl:h-80"
            >
              {journeyPath.width > 0 && (
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                  viewBox={`0 0 ${journeyPath.width} ${journeyPath.height}`}
                  fill="none"
                >
                  <defs>
                    <linearGradient
                      id="journeyLineGradient"
                      x1="0"
                      y1="0"
                      x2={journeyPath.width}
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#3CAAE5" />
                      <stop offset="55%" stopColor="#3CAAE5" />
                      <stop offset="100%" stopColor="#99C71E" />
                    </linearGradient>
                    <marker
                      id="journeyArrowhead"
                      viewBox="0 0 10 10"
                      refX="6"
                      refY="5"
                      markerWidth="8"
                      markerHeight="8"
                      orient="auto-start-reverse"
                    >
                      <path d="M0 0L10 5L0 10Z" fill="#99C71E" />
                    </marker>
                  </defs>
                  <motion.path
                    d={journeyPath.d}
                    stroke="url(#journeyLineGradient)"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    markerEnd="url(#journeyArrowhead)"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.2, ease: EASE }}
                  />
                </svg>
              )}

              <RevealGroup className="absolute inset-0">
                {JOURNEY.map((item, i) => {
                  const isTop = i % 2 === 0;
                  const color = i % 2 === 0 ? "#3CAAE5" : "#99C71E";
                  // Use the exact same pixel point the path was drawn
                  // through, so the dot always sits precisely on the curve
                  // (including the horizontal inset reserved for card width).
                  const point = journeyPath.points[i];
                  if (!point) return null;
                  return (
                    <motion.div
                      key={item.year}
                      variants={fadeUp}
                      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                      style={{ left: `${point.x}px`, top: `${point.y}px` }}
                    >
                      {/* growth pill, sits just above the dot */}
                      <div className="absolute bottom-full mb-2 flex justify-center">
                        {item.growth && (
                          <motion.span
                            initial={{ opacity: 0, y: 6 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.5,
                              delay: 0.4,
                              ease: EASE,
                            }}
                            className="flex items-center gap-1 whitespace-nowrap rounded-full border border-lime-300 bg-lime-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-lime-600 shadow-sm"
                          >
                            <svg
                              className="h-3 w-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M4.5 19.5l6-6 4 4L19.5 8.5M19.5 8.5H14M19.5 8.5V14"
                              />
                            </svg>
                            Growth
                          </motion.span>
                        )}
                      </div>

                      {/* dot, centered exactly on the path point */}
                      <span
                        className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white shadow-md"
                        style={{ background: color }}
                      >
                        <span className="h-2 w-2 rounded-full bg-white" />
                      </span>

                      {/* card, alternating above/below the dot */}
                      <div
                        className={`absolute w-40 xl:w-48 ${
                          isTop
                            ? "bottom-full mb-6 xl:mb-8"
                            : "top-full mt-6 xl:mt-8"
                        }`}
                      >
                        <div
                          className={`w-full rounded-2xl border border-gray-200 bg-white p-4 xl:p-5 text-center shadow-lg transition-transform duration-300 ${
                            isTop
                              ? "hover:-translate-y-1"
                              : "hover:translate-y-1"
                          }`}
                        >
                          <p className="text-xl xl:text-2xl font-bold" style={{ color }}>
                            {item.year}
                          </p>
                          <p className="mt-1 text-sm font-semibold text-gray-800">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </RevealGroup>
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="relative lg:hidden">
            <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-[#3CAAE5] to-[#99C71E]" />
            <RevealGroup className="relative">
              {JOURNEY.map((item, i) => {
                const color = i % 2 === 0 ? "#3CAAE5" : "#99C71E";
                return (
                  <motion.div
                    key={item.year}
                    variants={fadeUp}
                    className="relative pl-8 md:pl-12 mb-4"
                  >
                    <span
                      className="absolute left-[9px] top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white shadow"
                      style={{ background: color }}
                    />
                    <div className="rounded-2xl border border-gray-200 bg-white p-2 pl-4 md:p-5 shadow-md">
                      <div className="flex items-center gap-2">
                        <p className="text-xl font-bold" style={{ color }}>
                          {item.year}
                        </p>
                        {item.growth && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-lime-300 bg-lime-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-lime-600">
                            <svg
                              className="h-3 w-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M4.5 19.5l6-6 4 4L19.5 8.5M19.5 8.5H14M19.5 8.5V14"
                              />
                            </svg>
                            Growth
                          </span>
                        )}
                      </div>
                      <p className="md:mt-1 text-sm md:text-lg font-semibold text-gray-800">
                        {item.title}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* ENGINEERING EXCELLENCE — dark + parallax */}
      <section
        ref={ref}
        id="engineering-excellence"
        className="relative overflow-hidden bg-gray-950 py-10 overflow-hidden text-white"
      >
        <motion.div
          style={{ y }}
          className="pointer-events-none absolute inset-0 -z-0 h-[124%] -top-[12%]"
        >
          <img
            src="/images/about-us/banner.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gray-950/60" />
        <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-lime-400/10 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(60,170,229,0.08),transparent_50%)]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="text-2xl font-bold leading-7 text-white md:text-4xl md:leading-8 lg:leading-none">
              Integrated{" "}
              <span className="bg-gradient-to-r from-sky-300 via-white to-lime-300 bg-clip-text text-transparent">
                Project Capabilities
              </span>
            </h2>
          </Reveal>

          <RevealGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CARDS.map((card) => (
              <motion.div
                key={card.num}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10"
              >
                <span className="absolute -right-2 -top-3 text-7xl font-black text-white/10 transition-colors duration-500 group-hover:text-white/10">
                  {card.num}
                </span>
                <div
                  className={`relative mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <svg
                    className="h-7 w-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d={card.d}
                    />
                  </svg>
                </div>
                <h3 className="relative text-xl font-bold text-white">
                  {card.title}
                </h3>
                <div
                  className={`relative mt-1 h-0.5 w-10 rounded-full bg-gradient-to-r ${card.gradient} transition-all duration-500 group-hover:w-16`}
                />
                <ul className="relative mt-2 space-y-1">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-md text-gray-300"
                    >
                      <svg
                        className="h-4 w-4 shrink-0 text-sky-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section id="industries" className="bg-white py-10 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 md:text-4xl md:leading-8 lg:leading-none">
              Industries{" "}
              <span className="bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-transparent">
                We Serve
              </span>
            </h2>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-1 sm:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <motion.div
                key={industry.title}
                variants={fadeUp}
                className="group relative aspect-[5/5] md:h-[20rem] md:w-full overflow-hidden rounded-2xl border border-gray-200 shadow-md"
              >
                <Image
                  src={industry.img}
                  alt={industry.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="mb-2 block h-0.5 w-6 rounded-full bg-[#99C71E] transition-all duration-500 group-hover:w-10" />
                  <h3 className="text-sm font-bold leading-tight text-white lg:text-2xl">
                    {industry.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>


      {/* OUR EPC PROCESS */}
      <section
        id="epc-process"
        className="relative overflow-hidden bg-gray-950 py-10 overflow-hidden text-white"
      >
        <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-lime-400/10 blur-[120px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-8 max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-200 backdrop-blur-sm">
              Our Project Delivery Process
            </span>
            <h2 className="flex-1 text-2xl font-bold leading-7 text-white md:text-4xl md:leading-8 lg:leading-none">
              From initial requirements to{" "}
              <span className="bg-gradient-to-r from-sky-300 via-white to-lime-300 bg-clip-text text-transparent">
                commissioning and ongoing support
              </span>
            </h2>
          </Reveal>

          <div className="relative">
            <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-sky-500/40 via-white/20 to-lime-400/40 lg:block" />
            <RevealGroup className="flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-8 lg:gap-3 lg:overflow-visible">
              {EPC_STEPS.map((item, i) => {
                const isSky = i % 2 === 0;
                const ring = isSky
                  ? "group-hover:border-sky-400/60"
                  : "group-hover:border-lime-400/60";
                const glow = isSky
                  ? "group-hover:shadow-sky-500/25"
                  : "group-hover:shadow-lime-400/25";
                const accent = isSky ? "#3CAAE5" : "#99C71E";
                return (
                  <motion.div
                    key={item.step}
                    variants={fadeUp}
                    className="group relative flex w-36 shrink-0 flex-col items-center text-center lg:w-auto"
                  >
                    <div
                      className={`relative z-10 flex h-[104px] w-[104px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg transition-all duration-500 group-hover:-translate-y-1.5 group-hover:bg-white/10 ${ring} ${glow}`}
                    >
                      <span
                        className="absolute inset-1 rounded-xl border border-dashed opacity-0 transition-opacity duration-500 group-hover:opacity-40 group-hover:[animation:spin_8s_linear_infinite]"
                        style={{ borderColor: accent }}
                      />
                      <svg
                        className="h-10 w-10 transition-transform duration-500 group-hover:scale-110"
                        viewBox="0 0 40 40"
                        fill="none"
                        stroke={accent}
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {STEP_GLYPHS[i]}
                      </svg>
                    </div>
                    <span
                      className="mt-5 text-xs font-bold tracking-[0.2em]"
                      style={{ color: accent }}
                    >
                      STEP {item.step}
                    </span>
                    <h3 className="mt-1 px-1 text-lg font-semibold leading-tight text-white">
                      {item.title}
                    </h3>
                    {i < 7 && (
                      <svg
                        className="absolute -right-3 top-[46px] h-4 w-4 text-white/20 lg:hidden"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </motion.div>
                );
              })}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* MANUFACTURING FACILITY */}
      <section
        id="manufacturing-facility"
        className="relative overflow-hidden  py-10 text-white"
      >
        <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-lime-400/10 blur-[120px]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 md:text-4xl md:leading-8 lg:leading-none">
              Our Inhouse{" "}
              <span className="bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-transparent">
                Facilities
              </span>
            </h2>
          </Reveal>

          <RevealGroup className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4">
            {FACILITY.map((item) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 ${item.span}`}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-colors duration-500 group-hover:from-black/60" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="mb-1.5 block h-0.5 w-6 rounded-full bg-[#99C71E] transition-all duration-500 group-hover:w-10" />
                  <h3 className="text-sm font-bold text-white lg:text-base">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* QUALITY & SAFETY */}
      <section
        id="quality-safety"
        className="relative overflow-hidden bg-gray-950 py-10 overflow-hidden text-white"
      >
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-lime-400/10 blur-[120px]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="flex-1 text-2xl font-bold leading-7 text-white md:text-4xl md:leading-8 lg:leading-none">
              Quality, Safety &{" "}
              <span className="bg-gradient-to-r from-sky-300 via-white to-lime-300 bg-clip-text text-transparent">
                Compliance
              </span>
            </h2>
          </Reveal>

          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {QUALITY.map((item, i) => {
              const accent = i % 2 === 0 ? "#3CAAE5" : "#99C71E";
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10"
                >
                  <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-transform duration-500 group-hover:scale-110">
                    <svg
                      className="h-8 w-8"
                      viewBox="0 0 40 40"
                      fill="none"
                      stroke={accent}
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {QS_GLYPHS[i]}
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <span
                    className="mt-3 block h-0.5 w-8 rounded-full transition-all duration-500 group-hover:w-44"
                    style={{ background: accent }}
                  />
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* VISION & MISSION */}
      {/* <section
        id="vision-mission"
        className="relative overflow-hidden bg-white py-10 overflow-hidden"
      >
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-sky-100 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-lime-100 blur-3xl" />

        <div className="container relative mx-auto px-6 lg:px-8">
          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {VM.map((card) => (
              <motion.div
                key={card.label}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-3 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(15,23,42,0.1)] lg:p-5 lg:px-6"
              >
                <span
                  className="absolute left-0 top-0 h-full w-1.5 transition-all duration-500 group-hover:w-2.5"
                  style={{ background: card.accent }}
                />
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.wash} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <span className="pointer-events-none absolute -right-4 -top-6 select-none text-8xl font-black text-gray-900/[0.1] transition-colors duration-500 group-hover:text-gray-900/[0.2]">
                  {card.label}
                </span>
                <div className="relative">
                  <h3 className="text-3xl font-bold text-gray-900">
                    Our {card.label}
                  </h3>
                  <span
                    className="mt-1 block h-0.5 w-10 rounded-full transition-all duration-500 group-hover:w-16"
                    style={{ background: card.accent }}
                  />
                  <p className="mt-5 text-lg font-light leading-relaxed text-gray-600">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section> */}

      {/* LEADERSHIP */}
      <section id="leadership" className="bg-white py-10 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.45fr] lg:gap-1">
            <Reveal
              variant={fadeLeft}
              className="relative mx-auto max-w-sm lg:mx-0"
            >
              <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-lime-100 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 shadow-[0_30px_80px_rgba(15,23,42,0.15)]">
                <Image
                  src="/images/amit-waghmare.png"
                  alt="Amit Waghmare, Managing Director"
                  width={600}
                  height={720}
                  className="h-[27rem] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-6">
                  <p className="text-lg font-bold text-white">Amit Waghmare</p>
                  <p className="text-sm text-sky-300">
                    Founder &amp; Managing Director
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal variant={fadeRight}>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-600">
                Message from the Founder
              </span>
              <svg
                className="mb-4 h-10 w-10 text-sky-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
              <p className="text-xl font-light leading-relaxed text-gray-700 lg:text-2xl">
                At SPARKTECH, engineering is more than construction — it&apos;s
                a commitment to precision, reliability and long-term
                partnership. Every project we deliver reflects our belief that
                industrial growth is built on trust, quality and relentless
                attention to detail.
              </p>
              <p className="mt-6 text-base leading-relaxed text-gray-600">
                Since 2007 we&apos;ve grown alongside our clients, and our
                promise remains the same: to be the dependable partner
                industries can build their future on.
              </p>
              <div className="mt-8">
                <p className="font-bold text-gray-900">Amit Waghmare</p>
                <p className="text-sm text-gray-500">
                  Founder &amp; Managing Director, SPARKTECH Processes LLP
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMPANY NUMBERS */}
      <section
        id="company-numbers"
        className="relative overflow-hidden bg-gray-950 py-10 overflow-hidden text-white"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(60,170,229,0.1),transparent_60%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div
          ref={ref2}
          className="container relative mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal variant={fadeLeft}>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-200 backdrop-blur-sm">
                By the Numbers
              </span>
              <h2 className="text-2xl font-bold leading-tight text-white md:text-4xl">
                A track record you can{" "}
                <span className="bg-gradient-to-r from-sky-300 via-white to-lime-300 bg-clip-text text-transparent">
                  build on
                </span>
              </h2>
              <div className="mt-8 flex items-end gap-4">
                <p className="text-7xl font-black leading-none lg:text-8xl">
                  <Counter
                    value={STATS[0].value}
                    suffix={STATS[0].suffix}
                    active={active}
                  />
                </p>
                <div className="mb-2">
                  <span className="block h-0.5 w-10 rounded-full bg-gradient-to-r from-sky-400 to-lime-400" />
                  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-400">
                    {STATS[0].label}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal
              variant={fadeRight}
              className="grid grid-cols-2 divide-x divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm sm:grid-cols-3"
            >
              {STATS.slice(1).map((stat, i) => {
                const accent = i % 2 === 0 ? "#3CAAE5" : "#99C71E";
                return (
                  <div
                    key={stat.label}
                    className="group relative p-7 transition-colors duration-300 hover:bg-white/[0.06]"
                  >
                    <span
                      className="absolute left-7 top-0 h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-8"
                      style={{ background: accent }}
                    />
                    <p className="text-4xl font-bold lg:text-5xl">
                      <Counter
                        value={stat.value}
                        suffix={stat.suffix}
                        active={active}
                      />
                    </p>
                    <p className="mt-2 text-xs font-medium uppercase tracking-wide text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="bg-white py-10 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal
            variant={scaleIn}
            className="relative overflow-hidden rounded-[2.5rem] bg-gray-950 px-8 py-5 text-center shadow-[0_40px_100px_rgba(15,23,42,0.25)] lg:px-16"
          >
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sky-500/30 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-lime-400/25 blur-[100px]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-sky-500/10 to-transparent" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

            <div className="relative">
              <span className="mb-1 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-200 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
                </span>
                Let&apos;s Build Together
              </span>

              <h2 className="text-2xl font-bold leading-7 text-white md:text-4xl md:leading-8 lg:leading-none">
                Ready to build your next{" "}
                <span className="bg-gradient-to-r from-sky-300 via-white to-lime-300 bg-clip-text text-transparent">
                  industrial project?
                </span>
              </h2>
              <p className="mx-auto mt-1 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
                Let&apos;s discuss your engineering requirements and create a
                solution tailored to your business.
              </p>

              <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-sky-500/30 transition hover:shadow-xl hover:shadow-sky-500/40"
                >
                  Start Your Project
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="tel:"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md transition hover:border-white/40 hover:bg-white/10"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}