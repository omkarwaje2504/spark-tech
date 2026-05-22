import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import ProcessFlow from '@/components/ProcessFlow';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';
import StickyCTA from '@/components/StickyCTA';

export default function Home() {
  return (
    <>
      <Header />
      <StickyCTA />
      <main>
        <Hero />
        <About />
        <Services />
        <ProcessFlow />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

