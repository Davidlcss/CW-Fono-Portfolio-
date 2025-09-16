import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specializations from "@/components/Specializations";
import Services from "@/components/Services";
import Activities from "@/components/Activities";
import Orientations from "@/components/Orientations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Specializations />
      <Services />
      <Activities />
      <Orientations />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
