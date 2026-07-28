import { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
const coreValues = [
  {
    icon: "/images/About Us/Our Core Values Icon/Quality.png",
    title: "Quality",
    desc: "Uncompromising quality in every product we deliver",
  },
  {
    icon: "/images/About Us/Our Core Values Icon/Innovation.png",
    title: "Innovation",
    desc: "Continuous improvement and technological advancement",
  },
  {
    icon: "/images/About Us/Our Core Values Icon/Integrity.png",
    title: "Integrity",
    desc: "Honest and transparent in all our dealings",
  },
  {
    icon: "/images/About Us/Our Core Values Icon/Sustainability.png",
    title: "Sustainability",
    desc: "Environmentally responsible manufacturing practices",
  },
];

export const metadata: Metadata = {
  title: "About Us | Sparktech Processes LLP",
  description:
    "Learn about Sparktech Processes LLP - Leading manufacturer of edible oil extraction and refinery equipment since 2007. Founded by Amit Waghmare in Mumbai.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section
        id="about-hero"
        className="relative w-full overflow-hidden bg-gray-950 text-white"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about-us/banner.png"
            alt="Sparktech industrial project"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/70 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(60,170,229,0.18),transparent_45%)]" />
        </div>

        {/* Glow accents */}
        <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-sky-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-lime-400/10 blur-[120px]" />

        <div className="container relative z-10 mx-auto flex items-center px-4 pb-10 pt-32  lg:pt-36  sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: content */}
            <div>
              {/* Eyebrow */}
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[9px] lg:text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-200 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
                </span>
                EPC Project Partner Since 2007
              </span>

              {/* Headline */}
              <h1 className="text-3xl font-bold leading-[1.08] md:text-4xl lg:text-5xl 2xl:text-6xl">
                Engineering Industrial Growth Through
                <span className="block bg-gradient-to-r from-sky-300 via-white to-lime-300 bg-clip-text text-transparent">
                  Complete EPC Solutions
                </span>
              </h1>

              {/* Subheading */}
              <p className="mt-2 lg:mt-6 max-w-3xl text-sm leading-relaxed text-gray-300 lg:text-md 2xl:text-lg">
                From concept and engineering to procurement, manufacturing,
                installation and commissioning — we deliver integrated
                industrial solutions that maximize productivity, quality and
                long-term value.
              </p>

              {/* Buttons */}
              <div className="mt-5 lg:mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
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
              </div>
            </div>

            {/* Right: plant image */}
            <div className="relative hidden lg:block">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] [animation:float_6s_ease-in-out_infinite]">
                <Image
                  src="/images/about-us/banner.png"
                  alt="Sparktech manufacturing plant"
                  width={900}
                  height={1100}
                  className="lg:h-[23rem] 2xl:h-[30rem] w-full object-cover"
                  priority
                  sizes="45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                {/* accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 to-lime-400" />
              </div>

              {/* Floating stat chip */}
              <div className="absolute -left-6 bottom-10 rounded-2xl border border-white/10 bg-gray-900/80 px-5 py-4 backdrop-blur-md [animation:float_6s_ease-in-out_infinite_reverse]">
                <p className="bg-gradient-to-r from-sky-300 to-lime-300 bg-clip-text text-3xl font-bold text-transparent">
                  15+
                </p>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Countries Served
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 lg:flex">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
            Scroll
          </span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1">
            <span className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
          </span>
        </div>
      </section>
      {/* ABOUT SPARKTECH — offset composition */}
      <section
        id="about-sparktech"
        className="relative overflow-hidden bg-gray-50 py-10"
      >
        {/* subtle background accents */}
        <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-sky-100 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-lime-100 blur-3xl" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading — centered intro */}
          <div className="mx-auto mb-6 md:mb-12 max-w-3xl text-center">
            <span className="mb-1 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-600">
              About SparkTech
            </span>
            <h2 className="flex-1 text-2xl font-bold leading-7 text-gray-800 md:text-4xl md:leading-8 lg:leading-none">
              Engineering Beyond{" "}
              <span className="bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-transparent">
                Construction
              </span>
            </h2>
          </div>

          <div className="grid items-stretch gap-8 lg:grid-cols-12">
            {/* Left: image stack (spans 7) */}
            <div className="relative lg:col-span-7">
              <div className="relative md:h-[15rem] lg:h-[23rem] 2xl:h-[24rem] h-[15rem] overflow-hidden rounded-[2rem] border border-gray-100 shadow-[0_30px_80px_rgba(15,23,42,0.12)] lg:h-full">
                <Image
                  src="/images/about-us/who-we-are.png"
                  alt="SparkTech industrial manufacturing plant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right: content (spans 5) */}
            <div className="flex flex-col justify-center lg:col-span-5">
              <p className="text-base leading-relaxed text-gray-600">
                SparkTech is a trusted Engineering, Procurement and Construction
                (EPC) project partner specializing in designing, manufacturing
                and delivering complete industrial plants and process solutions.
                We combine engineering expertise, modern manufacturing
                capabilities and project management excellence to execute
                projects from concept to commissioning.
              </p>

              {/* Divider accents with supporting points */}
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
                    Whether it&apos;s a new plant installation, process
                    optimization or turnkey industrial solution, SparkTech
                    delivers engineering excellence that drives operational
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-gray-100 bg-gray-100 md:grid-cols-4">
            {[
              { value: "17+", label: "Years Experience" },
              { value: "100+", label: "Projects Delivered" },
              { value: "15+", label: "Countries Served" },
              { value: "Turnkey", label: "EPC Solutions" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white px-6 py-8 text-center">
                <p className="bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* OUR JOURNEY — horizontal timeline */}
      <section
        id="our-journey"
        className="relative overflow-hidden bg-white py-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="mb-1 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-600">
              Our Journey
            </span>
            <h2 className="flex-1 text-2xl font-bold leading-7 text-gray-800 md:text-4xl md:leading-8 lg:leading-none">
              A decade of{" "}
              <span className="bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-transparent">
                engineering growth
              </span>
            </h2>
          </div>

          {/* Desktop: horizontal zig-zag timeline */}
          <div className="relative hidden lg:block">
            {/* center line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-[#3CAAE5] to-[#99C71E]" />

            <div className="relative grid grid-cols-5">
              {[
                { year: "2016", title: "Company Founded" },
                { year: "2018", title: "Manufacturing Expansion" },
                { year: "2020", title: "Large Scale EPC Projects" },
                { year: "2023", title: "Automation Integration" },
                { year: "2026", title: "Serving Industries Across India" },
              ].map((item, i) => {
                const isTop = i % 2 === 0;
                const color = i % 2 === 0 ? "#3CAAE5" : "#99C71E";
                return (
                  <div
                    key={item.year}
                    className="relative flex flex-col items-center"
                  >
                    {/* grid: top card | node | bottom card */}
                    <div className="grid h-72 grid-rows-[1fr_auto_1fr] items-center">
                      {/* top card */}
                      <div className="flex items-end justify-center px-3 pb-6">
                        {isTop && (
                          <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
                            <p className="text-2xl font-bold" style={{ color }}>
                              {item.year}
                            </p>
                            <p className="mt-1 text-sm font-semibold text-gray-800">
                              {item.title}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* node */}
                      <div className="flex items-center justify-center">
                        <span
                          className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white shadow-md"
                          style={{ background: color }}
                        >
                          <span className="h-2 w-2 rounded-full bg-white" />
                        </span>
                      </div>

                      {/* bottom card */}
                      <div className="flex items-start justify-center px-3 md:pt-6">
                        {!isTop && (
                          <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-lg transition-transform duration-300 hover:translate-y-1">
                            <p className="text-2xl font-bold" style={{ color }}>
                              {item.year}
                            </p>
                            <p className="mt-1 text-sm font-semibold text-gray-800">
                              {item.title}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="relative lg:hidden">
            {/* vertical line */}
            <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-[#3CAAE5] to-[#99C71E]" />

            <div className="space-y-2 md:space-y-4">
              {[
                { year: "2016", title: "Company Founded" },
                { year: "2018", title: "Manufacturing Expansion" },
                { year: "2020", title: "Large Scale EPC Projects" },
                { year: "2023", title: "Automation Integration" },
                { year: "2026", title: "Serving Industries Across India" },
              ].map((item, i) => {
                const color = i % 2 === 0 ? "#3CAAE5" : "#99C71E";
                return (
                  <div key={item.year} className="relative pl-8 md:pl-12">
                    {/* node */}
                    <span
                      className="absolute left-[9px] top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white shadow"
                      style={{ background: color }}
                    />
                    <div className="rounded-2xl border border-gray-200 bg-white p-2 pl-4 md:p-5 shadow-md">
                      <p className="text-xl font-bold" style={{ color }}>
                        {item.year}
                      </p>
                      <p className="md:mt-1 text-sm md:text-lg font-semibold text-gray-800">
                        {item.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* ENGINEERING EXCELLENCE — dark */}
      <section
        id="engineering-excellence"
        className="relative overflow-hidden bg-gray-950 py-10 text-white"
      >
        {/* glow accents */}
        <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-lime-400/10 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(60,170,229,0.08),transparent_50%)]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-1 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-200 backdrop-blur-sm">
              Our Capabilities
            </span>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Engineering{" "}
              <span className="bg-gradient-to-r from-sky-300 via-white to-lime-300 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              Complete EPC capability under one roof — from design through
              commissioning and lifetime support.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "Engineering",
                gradient: "from-sky-500 to-sky-400",
                points: ["CAD", "3D Design", "Stress Analysis"],
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                ),
              },
              {
                num: "02",
                title: "Procurement",
                gradient: "from-cyan-500 to-teal-400",
                points: [
                  "Vendor Network",
                  "Material Planning",
                  "Cost Optimization",
                ],
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                ),
              },
              {
                num: "03",
                title: "Manufacturing",
                gradient: "from-lime-500 to-green-400",
                points: [
                  "Precision Fabrication",
                  "Quality Inspection",
                  "Advanced Machinery",
                ],
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                ),
              },
              {
                num: "04",
                title: "Construction",
                gradient: "from-lime-400 to-emerald-500",
                points: [
                  "Installation",
                  "Commissioning",
                  "After-sales Support",
                ],
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                ),
              },
            ].map((card) => (
              <div
                key={card.num}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10"
              >
                {/* faint number watermark */}
                <span className="absolute -right-2 -top-3 text-7xl font-black text-white/5 transition-colors duration-500 group-hover:text-white/10">
                  {card.num}
                </span>

                {/* icon */}
                <div
                  className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <svg
                    className="h-7 w-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {card.icon}
                  </svg>
                </div>

                <h3 className="relative text-xl font-bold text-white">
                  {card.title}
                </h3>

                {/* accent divider */}
                <div
                  className={`relative mt-4 h-0.5 w-10 rounded-full bg-gradient-to-r ${card.gradient} transition-all duration-500 group-hover:w-16`}
                />

                {/* points */}
                <ul className="relative mt-5 space-y-3">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-sm text-gray-300"
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
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Vision & Mission */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <div className="group bg-white rounded-[2rem] p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-sky-400 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-sky-500/20">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-outfit">
                Our Vision
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                To be the global leader in providing innovative, sustainable,
                and efficient solutions for the edible oil and food processing
                industries, setting new standards for quality and reliability.
              </p>
            </div>

            {/* Mission */}
            <div className="group bg-white rounded-[2rem] p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-lime-500 to-lime-400 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-lg shadow-lime-500/20">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-outfit">
                Our Mission
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                To deliver cutting-edge technology and turnkey solutions that
                empower our clients to achieve maximum productivity, efficiency,
                and profitability while maintaining safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-outfit">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 text-center"
              >
                <div className="flex justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={64}
                    height={64}
                    className="opacity-90 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 font-outfit text-sky-400">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
