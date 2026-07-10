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
      <PageBanner
        title="About Us"
        subtitle="Your trusted partner in edible oil processing solutions since 2007"
        backgroundImage="/images/About Us/About Us Banner.jpg"
        breadcrumbs={[{ name: "About Us", href: "/about" }]}
      />

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/About Us/About Us Thumbnail Image.jpg"
                  alt="Sparktech Engineering Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#3CAAE5] to-[#99C71E]"></div>
              </div>
              {/* Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 hidden md:block">
                <div className="flex gap-8">
                  <div className="text-center">
                    <p className="text-3xl font-bold bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-transparent">
                      17+
                    </p>
                    <p className="text-sm text-gray-500">Years Experience</p>
                  </div>
                  <div className="text-center border-l border-gray-200 pl-8">
                    <p className="text-3xl font-bold bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-transparent">
                      100+
                    </p>
                    <p className="text-sm text-gray-500">Projects</p>
                  </div>
                  <div className="text-center border-l border-gray-200 pl-8">
                    <p className="text-3xl font-bold bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-transparent">
                      15+
                    </p>
                    <p className="text-sm text-gray-500">Countries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:pl-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A Perfect{" "}
                <span className="bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] bg-clip-text text-transparent">
                  EPC Project Partner
                </span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sparktech Processes LLP was established in 2007 by{" "}
                <strong>Amit Waghmare</strong>, a visionary leader with deep
                expertise in the edible oil and food-processing industries.
                Based in Mumbai, we have grown to become a leading manufacturer
                and exporter of industrial machinery.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We specialize in designing, manufacturing, and exporting
                equipment such as oil solvent extraction plants, vegetable oil
                refineries, hydrogenation units, pressure leaf filters,
                deodorizing plants, and related machinery. Our commitment to
                quality and innovation has earned us a reputation as a trusted
                partner for turnkey project solutions.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With an annual turnover between 5–25 crore INR, we continue to
                expand our global footprint, serving clients in USA, Nepal,
                Bangladesh, Sri Lanka, and many other countries.
              </p>
            </div>
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
