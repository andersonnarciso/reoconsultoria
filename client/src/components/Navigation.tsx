
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleCTAClick = () => {
    const phoneNumber = "5547992062877";
    const message = "Olá! Gostaria de solicitar minha análise gratuita do método R&O 360.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const navItems = [
    { label: "Início", sectionId: "hero" },
    { label: "Quem somos", sectionId: "quem-somos" },
    { label: "Nossos serviços", sectionId: "servicos" },
    { label: "Método R&O 360", sectionId: "metodo" },
    { label: "Contato", sectionId: "contato" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <span className="font-bold text-white text-sm">R&O</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-display font-bold text-lg transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                R&O Estratégica
              </h1>
              <p className={`text-xs transition-colors ${
                isScrolled ? 'text-muted-foreground' : 'text-white/80'
              }`}>
                Consultoria A&B
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className={`font-medium transition-colors hover:scale-105 transform duration-200 ${
                  isScrolled 
                    ? 'text-primary hover:text-accent' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              onClick={handleCTAClick}
              className={`hidden sm:flex items-center gap-2 font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-accent hover:bg-accent/90 text-white'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
            >
              Análise gratuita
              <ArrowRight className="w-4 h-4" />
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                isScrolled 
                  ? 'text-primary hover:bg-primary/10' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pb-6 pt-4 space-y-4 bg-white/95 backdrop-blur-lg rounded-2xl mt-4 p-6 shadow-xl">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="block w-full text-left text-primary font-medium py-3 hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={handleCTAClick}
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-full mt-6"
            >
              Solicitar análise gratuita
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
