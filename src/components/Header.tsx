"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteContact } from "@/lib/site";
import { isArchivedServiceSlug } from "@/lib/serviceVisibility";
import { FiPhone, FiMail } from "react-icons/fi";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const servicesList = [
    {
      name: "Solvent Extraction",
      href: "/services/solvent-extraction",
      slug: "solvent-extraction",
    },
    {
      name: "Oil Refinery",
      href: "/services/oil-refinery",
      slug: "oil-refinery",
    },
    {
      name: "Fractionation plant",
      href: "/services/fractionation",
      slug: "fractionation",
    },
    {
      name: "De-Waxing / Winterization",
      href: "/services/dewaxing",
      slug: "dewaxing",
    },
    { name: "Lecithin Plant", href: "/services/lecithin", slug: "lecithin" },
    {
      name: "Bakery Shortening & Margarine",
      href: "/services/bakery-shortening",
      slug: "bakery-shortening",
    },
    {
      name: "Hydrogenation Plant",
      href: "/services/hydrogenation",
      slug: "hydrogenation",
    },
    {
      name: "Interesterification Plant",
      href: "/services/interesterification",
      slug: "interesterification",
    },
    // { name: "Bleaching Plant", href: "/services/bleaching", slug: "bleaching" },
  ];

  const visibleServices = servicesList.filter(
    (s) => !isArchivedServiceSlug(s.slug),
  );

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Technologies", href: "/technologies" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const SOCIAL_LINKS = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/SPARKTECH",
      icon: FaLinkedinIn,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/SPARKTECH",
      icon: FaFacebookF,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/SPARKTECH",
      icon: FaTwitter,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/SPARKTECH",
      icon: FaInstagram,
    },
  ] as const;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="w-full bg-slate-200 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row w-full justify-end items-ends lg:items-center lg:gap-4 py-1 lg:py-0">
          <div className="flex justify-end items-center lg:py-1 ">
            <FiPhone className="text-slate-700" />
            <span className="text-slate-700 ml-2 text-xs lg:text-sm">
              {siteContact.officePhoneDisplay}
            </span>
            <div className="h-4 w-0.5 bg-slate-700 lg:hidden mx-3" />
            <div className="flex items-center gap-2 lg:hidden">
              {SOCIAL_LINKS.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-sky-600 transition-colors"
                    aria-label={link.name}
                  >
                    <IconComponent className="h-3 w-3" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="h-4 w-0.5 bg-slate-700 hidden lg:flex" />
          <div className="flex justify-end items-center lg:py-1 ">
            <FiMail className="text-slate-700" />
            <span className="text-slate-700  ml-2 text-xs lg:text-sm">
              amitw@sparktech.biz / sparktech@sparktech.biz
            </span>
          </div>
          <div className="h-4 w-0.5 bg-slate-700 hidden lg:flex" />
          <div className="items-center gap-4 hidden lg:flex">
            {SOCIAL_LINKS.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-sky-600 transition-colors"
                  aria-label={link.name}
                >
                  <IconComponent className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-500 py-1`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <Image
              src="/images/sparktech-logo.png"
              alt="SPARKTECH Processes LLP"
              width={1000}
              height={1000}
              className={`w-auto transition-all duration-500 group-hover:scale-105 ${
                isScrolled ? "h-13 lg:h-16" : "h-14 lg:h-18"
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 py-2 px-3 rounded-lg ${
                  isActive(link.href)
                    ? "text-sky-600"
                    : "text-gray-700 hover:text-sky-600"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`text-sm font-medium tracking-wide transition-colors duration-300 flex items-center gap-1 py-2 px-3 rounded-lg ${
                  isActive("/services")
                    ? "text-sky-600"
                    : "text-gray-700 hover:text-sky-600"
                }`}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 animate-scale-in">
                  <div className="bg-white shadow-2xl rounded-2xl border border-gray-100 p-2 overflow-hidden">
                    <div className="max-h-[70vh] overflow-y-auto">
                      {servicesList.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 rounded-lg hover:bg-sky-50 hover:text-sky-600 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <Link
                        href="/services"
                        className="flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-sky-600 hover:bg-sky-50 rounded-lg transition-colors group"
                      >
                        View All Services
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 py-2 px-3 rounded-lg ${
                  isActive(link.href)
                    ? "text-sky-600"
                    : "text-gray-700 hover:text-sky-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-3 px-6 py-2 bg-gray-900 text-white text-md font-bold  rounded-full hover:bg-sky-600 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20 whitespace-nowrap"
          >
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </span>

            <span className="flex flex-col">
              <span className="text-xs font-light">Send your Enquiry on</span>
              {siteContact.officePhoneDisplay}
            </span>
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-gray-900 rounded-full transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-[85vh] opacity-100 pb-6"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 overflow-y-auto max-h-[70vh]">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-medium px-4 py-3 rounded-xl transition-all ${
                  isActive(link.href)
                    ? "bg-sky-50 text-sky-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Services accordion */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className={`w-full flex items-center justify-between text-base font-medium px-4 py-3 rounded-xl transition-all ${
                  isActive("/services")
                    ? "bg-sky-50 text-sky-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                aria-expanded={isMobileServicesOpen}
              >
                Services
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isMobileServicesOpen ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="pl-4 py-1 flex flex-col gap-0.5">
                  {servicesList.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="text-sm text-gray-600 px-4 py-2.5 rounded-lg hover:bg-sky-50 hover:text-sky-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="text-sm font-semibold text-sky-600 px-4 py-2.5 rounded-lg hover:bg-sky-50 transition-colors"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-medium px-4 py-3 rounded-xl transition-all ${
                  isActive(link.href)
                    ? "bg-sky-50 text-sky-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <a
              href={siteContact.officePhoneHref}
              className="flex items-center gap-3 px-4 py-3 mt-2 text-gray-700 font-medium"
            >
              <span className="w-9 h-9 rounded-full bg-sky-50 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-sky-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              {siteContact.officePhoneDisplay}
            </a>

            <Link
              href="/contact"
              className="mt-2 mx-4 px-6 py-4 bg-gray-900 text-white text-center font-bold rounded-xl shadow-lg active:scale-95 transition-all"
            >
              SEND YOUR ENQUIRY
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
