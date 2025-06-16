import { Users, TrendingUp, Eye, FileText, Wrench, Share2, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Método 306°",
    description: "Análise completa e detalhada de todos os aspectos operacionais do seu negócio para identificar oportunidades de melhoria.",
    sectionId: "servico-metodo-306",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Método 180° - Coach",
    description: "Acompanhamento personalizado e orientação estratégica para implementação das melhorias identificadas.",
    sectionId: "servico-metodo-180",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Cliente oculto",
    description: "Avaliação discreta da experiência do cliente em seu estabelecimento para identificar pontos críticos.",
    sectionId: "servico-cliente-oculto",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Administrativo e planilha de controle",
    description: "Estruturação de processos administrativos e implementação de ferramentas de controle financeiro.",
    sectionId: "servico-administrativo",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Reforma estrutural e operacional",
    description: "Planejamento e execução de reformas para otimizar o fluxo operacional e experiência do cliente.",
    sectionId: "servico-reforma",
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Marketing e redes sociais",
    description: "Estratégias de marketing digital e gestão de redes sociais para aumentar sua visibilidade e vendas.",
    sectionId: "servico-marketing",
  },
  {
    icon: <Store className="w-8 h-8" />,
    title: "Abertura de empreendimento A&B",
    description: "Consultoria completa para abertura de novos negócios no setor de alimentos e bebidas.",
    sectionId: "servico-abertura",
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-gradient-to-br from-background via-muted/20 to-accent/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Store className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Nossos serviços</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-6">
            Método R&O 360: Visão completa para o sucesso do seu negócio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Nosso Método R&O 360 é um serviço exclusivo de análise operacional, projetado para oferecer uma 
            visão completa e aprofundada do seu negócio. Nosso objetivo é identificar pontos de melhoria e 
            guiar suas próximas decisões.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dividimos nosso trabalho em <span className="font-semibold text-primary text-lime-500">7 serviços principais</span> para 
            garantir uma análise detalhada e resultados claros.
          </p>
        </div>
        
        {/* Primeira linha: 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.slice(0, 4).map((service, index) => (
            <div
              id={service.sectionId}
              key={index}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full min-h-[300px] flex flex-col"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="text-accent">{service.icon}</div>
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        {/* Segunda linha: 3 cards centralizados */}
        <div className="flex justify-center gap-8 mt-8 flex-wrap">
          {services.slice(4, 7).map((service, index) => (
            <div
              id={service.sectionId}
              key={index + 4}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full min-h-[300px] flex flex-col w-full md:w-[340px] max-w-xs"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="text-accent">{service.icon}</div>
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Pronto para transformar seu negócio?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Entre em contato agora e descubra como nossos serviços podem impulsionar seus resultados
            </p>
            <a
              href="https://wa.me/5547992062877?text=Olá! Gostaria de saber mais sobre o Método R&O 360 e solicitar minha análise gratuita."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white font-semibold px-8 py-4 rounded-full hover:bg-black/90 transition-all duration-300 transform hover:scale-105"
            >
              Fale conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
