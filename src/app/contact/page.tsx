import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import ContactForm from './ContactForm';
import { siteContact } from '@/lib/site';

export const metadata: Metadata = {
    title: 'Contact Us | Sparktech Processes LLP',
    description: 'Get in touch with Sparktech Processes LLP for inquiries about oil extraction plants, refineries, and processing equipment. Mumbai, India.',
};

export default function ContactPage() {
    return (
        <>
            <Header />

            <PageBanner
                title="Contact Us"
                subtitle="Get in touch with our team for inquiries and project discussions"
                breadcrumbs={[{ name: 'Contact Us', href: '/contact' }]}
                backgroundImage="/images/Contact Us/Contact Us Banner.jpg"
            />

            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-32 lg:-mt-40 relative z-20">
                        {[
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                ),
                                title: 'Corporate Office',
                                info: `${siteContact.addressTitle}, ${siteContact.addressLines[0]} ${siteContact.addressLines[1]}`,
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                ),
                                title: 'Phone Number',
                                info: siteContact.officePhoneDisplay,
                                link: siteContact.officePhoneHref,
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                ),
                                title: 'Email Address',
                                info: siteContact.emailDisplay,
                                link: siteContact.emailHref,
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                ),
                                title: 'Working Hours',
                                info: 'Mon - Sat: 9 AM - 6 PM',
                            },
                        ].map((item, index) => (
                            <div key={index} className="group bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-700 text-center border border-gray-100/50 hover:-translate-y-2 relative overflow-hidden backdrop-blur-md">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-lime-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center text-sky-500 mx-auto mb-6 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-inner">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3 font-outfit uppercase tracking-wider">{item.title}</h3>
                                {item.link ? (
                                    <a href={item.link} className="text-gray-500 hover:text-sky-600 transition-colors font-light text-sm">
                                        {item.info}
                                    </a>
                                ) : (
                                    <p className="text-gray-500 font-light text-sm leading-relaxed">{item.info}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and our team will get back to you within 24 hours.
                            </p>
                            <ContactForm />
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-80">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8954843685883!2d72.83534507486867!3d19.082283182118693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b888b8a5c7%3A0x5e3d2d4c8d8d8d8d!2sSantacruz%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704300000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Sparktech Location"
                                ></iframe>
                            </div>

                            <div className="grid gap-4">
                                {[
                                    {
                                        name: 'Office Address',
                                        address: `${siteContact.addressTitle}, ${siteContact.addressLines[0]} ${siteContact.addressLines[1]}`,
                                    },
                                    {
                                        name: 'Primary Contact',
                                        address: `${siteContact.officePhoneDisplay} | ${siteContact.emailDisplay}`,
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.name}</h4>
                                            <p className="text-gray-600">{item.address}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Quick Connect</h2>
                        <p className="text-gray-400">Reach out to us through your preferred channel</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href={siteContact.emailHref}
                            className="flex items-center gap-3 bg-[#EA4335] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#EA4335]/30 transition-all"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            Email Us
                        </a>
                        <a
                            href={siteContact.officePhoneHref}
                            className="flex items-center gap-3 bg-[#3CAAE5] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#3CAAE5]/30 transition-all"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            Call Office
                        </a>
                        <a
                            href="https://www.linkedin.com/company/sparktech-processes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-[#0A66C2] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#0A66C2]/30 transition-all"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

