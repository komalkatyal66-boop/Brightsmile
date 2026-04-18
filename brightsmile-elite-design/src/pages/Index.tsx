import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import AppointmentForm from "@/components/AppointmentForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <About />
      <Stats />
      <Gallery />
      <Testimonials />
      <AppointmentForm />
      <FAQ />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
