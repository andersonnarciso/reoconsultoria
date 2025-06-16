
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Target, Award } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100vh] w-full bg-cover bg-center flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Modern restaurant kitchen"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent/70 rounded-full animate-pulse delay-1000 opacity-40"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-accent rounded-full animate-pulse delay-500 opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Award className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium">Metodologia Proprietária Comprovada</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
          <span className="block">DIAGNÓSTICO ANALÍTICO</span>
          <span className="block text-accent text-lime-500">DE OPERAÇÃO EM 90 DIAS</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto mb-8 animate-fade-in-up opacity-90">
          Especialistas em A&B que desvendam o potencial máximo da sua operação, 
          entregando <span className="font-semibold text-accent text-lime-500">clareza e ferramentas</span> para 
          decisões inteligentes e crescimento sustentável.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-accent text-lime-500" />
              <span className="text-2xl font-bold">90</span>
            </div>
            <p className="text-sm opacity-80">Dias para Resultados</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Target className="w-5 h-5 text-accent text-lime-500" />
              <span className="text-2xl font-bold">360°</span>
            </div>
            <p className="text-sm opacity-80">Análise Completa</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="w-5 h-5 text-accent text-lime-500" />
              <span className="text-2xl font-bold">100%</span>
            </div>
            <p className="text-sm opacity-80">Metodologia Própria</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-primary text-lime-500 font-semibold px-6 py-3 text-base rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            onClick={() => scrollToSection('contato')}
          >
            Agende sua análise gratuita
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-medium px-6 py-3 text-base rounded-full transition-all duration-300"
            onClick={() => scrollToSection('metodo')}
          >
            <Play className="mr-2 w-4 h-4" />
            Conheça o método R&O 360
          </Button>
        </div>
      </div>

      {/* Scroll Indicator - Positioned to not overlap with buttons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
