
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MethodSection from "@/components/MethodSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <AboutSection />
        <MethodSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
