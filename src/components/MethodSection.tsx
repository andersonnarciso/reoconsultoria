
import { Eye, Search, FileText, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const MethodSection = () => {
  const phases = [
    {
      number: "01",
      title: "Imersão e Diagnóstico Inicial",
      icon: Eye,
      description: "Nesta fase, empregamos técnicas como o cliente oculto para entender a experiência sob a ótica do consumidor. Simultaneamente, realizamos uma operacionalização completa das rotinas, mapeando cada processo interno do seu estabelecimento.",
      highlights: ["Cliente Oculto", "Mapeamento de Processos", "Análise da Experiência", "Diagnóstico Inicial"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02", 
      title: "Análise Detalhada e Identificação de Oportunidades",
      icon: Search,
      description: "Nossos especialistas realizam uma análise minuciosa de aspectos cruciais como ficha técnica, fluxo operacional, gestão de sistemas e controle de estoque. É aqui que identificamos gargalos, ineficiências e oportunidades de otimização.",
      highlights: ["Ficha Técnica", "Fluxo Operacional", "Gestão de Sistemas", "Controle de Estoque"],
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      title: "Relatório Estratégico e Plano de Ação", 
      icon: FileText,
      description: "A conclusão de todo esse trabalho é materializada em um documento/relatório final detalhado, pronto para guiar suas próximas decisões. Este relatório inclui um plano de ação claro e acionável para implementar as melhorias e impulsionar seus resultados.",
      highlights: ["Relatório Detalhado", "Plano de Ação", "Estratégias Personalizadas", "Implementação Prática"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="metodo" className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Search className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Metodologia Proprietária</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-6">
            O Método R&O 360: Análise Operacional Completa para o Seu Negócio
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Nosso serviço principal é construído em torno da nossa metodologia proprietária de análise operacional, 
            o <span className="font-semibold text-primary">Método R&O 360</span>. Nosso objetivo é fornecer uma 
            visão completa e aprofundada do seu negócio, identificando pontos de melhoria e oportunidades de 
            crescimento em apenas <span className="font-bold text-accent">90 dias</span>.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-24 bottom-24 w-px bg-gradient-to-b from-primary/20 via-accent/40 to-primary/20"></div>
          
          <div className="space-y-16 lg:space-y-24">
            {phases.map((phase, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Phase Content */}
                <div className="flex-1 group">
                  <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                    {/* Phase Number */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${phase.color} flex items-center justify-center`}>
                        <span className="text-white font-bold text-xl">{phase.number}</span>
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-primary mb-1">{phase.title}</h3>
                        <p className="text-accent font-medium">Fase {phase.number}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {phase.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      {phase.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-primary font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Phase Icon */}
                <div className="relative">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <phase.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Connecting Dots */}
                  {index < phases.length - 1 && (
                    <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2">
                      <ArrowRight className="w-6 h-6 text-accent animate-pulse" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 lg:mt-24">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white">
            <h3 className="font-display text-2xl md:text-4xl font-bold mb-4">
              Pronto para Transformar Seu Negócio?
            </h3>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Descubra como o Método R&O 360 pode revolucionar sua operação e impulsionar seus resultados em apenas 90 dias.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={scrollToContact}
            >
              Comece Sua Transformação Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
