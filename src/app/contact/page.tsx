import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import ContactForm from './ContactForm';

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

            {/* Contact Info Cards */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-20">
                        {[
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                ),
                                title: 'Corporate Office',
                                info: 'Santacruz West, Mumbai, Maharashtra, India',
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                ),
                                title: 'Phone Number',
                                info: '+91 98765 43210',
                                link: 'tel:+919876543210',
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                ),
                                title: 'Email Address',
                                info: 'info@sparktechprocesses.com',
                                link: 'mailto:info@sparktechprocesses.com',
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                ),
                                title: 'Working Hours',
                                info: 'Mon - Sat: 9:00 AM - 6:00 PM',
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow text-center border border-gray-100">
                                <div className="w-16 h-16 bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                {item.link ? (
                                    <a href={item.link} className="text-gray-600 hover:text-[#3CAAE5] transition-colors">
                                        {item.info}
                                    </a>
                                ) : (
                                    <p className="text-gray-600">{item.info}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and our team will get back to you within 24 hours.
                            </p>
                            <ContactForm />
                        </div>

                        {/* Map & Factory Addresses */}
                        <div className="space-y-8">
                            {/* Map */}
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

                            {/* Factory Addresses */}
                            <div className="grid gap-4">
                                {[
                                    {
                                        name: 'Factory 1',
                                        address: 'Industrial Area, Kolkata, West Bengal',
                                    },
                                    {
                                        name: 'Factory 2',
                                        address: 'MIDC Industrial Area, Pune, Maharashtra',
                                    },
                                ].map((factory, index) => (
                                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[#3CAAE5] to-[#99C71E] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{factory.name}</h4>
                                            <p className="text-gray-600">{factory.address}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Connect */}
            <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Quick Connect</h2>
                        <p className="text-gray-400">Reach out to us through your preferred channel</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#25D366]/30 transition-all"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp
                        </a>
                        <a
                            href="mailto:info@sparktechprocesses.com"
                            className="flex items-center gap-3 bg-[#EA4335] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#EA4335]/30 transition-all"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            Email Us
                        </a>
                        <a
                            href="tel:+919876543210"
                            className="flex items-center gap-3 bg-[#3CAAE5] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#3CAAE5]/30 transition-all"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            Call Now
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
