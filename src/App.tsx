import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Features } from "@/components/Features";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Languages } from "@/components/Languages";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";

export default function App() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <About />
        <WhyUs />
        <Languages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
