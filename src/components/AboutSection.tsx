
import { Users, Award, Target, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="quem-somos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Nossa Expertise</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-6">
            Quem somos: sua parceria estratégica no setor de A&B
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Somos a <span className="font-semibold text-primary">R&O Estratégica</span>, uma equipe de especialistas 
            apaixonados por otimizar e impulsionar negócios no setor de alimentos e bebidas. 
            Nosso diferencial reside na aplicação de uma metodologia proprietária que vai além do convencional.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="w-12 h-12 text-accent mx-auto mb-6" />
            <p className="text-lg md:text-xl leading-relaxed text-primary font-medium">
              "Acreditamos que todo restaurante, bar ou café possui oportunidades de melhoria que, 
              quando identificadas e trabalhadas estrategicamente, transformam resultados. É com essa visão 
              que atuamos, unindo <span className="text-accent font-semibold">análise detalhada</span>, 
              <span className="text-accent font-semibold">experiência prática</span> e um 
              <span className="text-accent font-semibold">olhar estratégico</span> para entregar 
              soluções personalizadas e acionáveis."
            </p>
          </div>
        </div>

        {/* Founders Profiles */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Rodrigo Rafaeli */}
          <div className="group">
            <div className="bg-card rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex flex-col h-full text-center">
                {/* Profile Header */}
                <div className="mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">RR</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-2">Rodrigo Rafaeli</h3>
                  <div className="flex items-center justify-center gap-2 text-accent">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-medium">Gastronomia & MBA Gestão</span>
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1 text-center">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Com formação em <span className="font-semibold text-primary">Gastronomia e MBA em Gestão de Negócios</span>, 
                    Rodrigo integra uma visão prática e profunda de processos. Sua expertise abrange a estruturação e 
                    organização de setores, da padronização operacional à reestruturação de processos internos.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Como <span className="font-semibold text-accent">catalisador de resultados</span>, é especializado em 
                    análise de dados para encontrar oportunidades de melhoria, validando sua capacidade de gerar resultados 
                    sustentáveis com vivência como proprietário de restaurante e chefe operacional de eventos gastronômicos.
                  </p>
                </div>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Processos Operacionais</span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">Análise de Dados</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Padronização</span>
                </div>
              </div>
            </div>
          </div>

          {/* Otavio de Brito */}
          <div className="group">
            <div className="bg-card rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex flex-col h-full text-center">
                {/* Profile Header */}
                <div className="mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">OB</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-2">Otavio de Brito</h3>
                  <div className="flex items-center justify-center gap-2 text-accent">
                    <Award className="w-4 h-4" />
                    <span className="font-medium">20+ Anos de Experiência</span>
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1 text-center">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Empresário com mais de <span className="font-semibold text-primary">20 anos de experiência</span> em 
                    gestão de Alimentos e Bebidas. Otavio foi professor universitário por 7 anos e Chef Executivo em 
                    grandes redes como <span className="font-semibold text-accent">Hard Rock Café Brasil e Mercure Hotéis</span>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Desenvolveu campanhas para marcas renomadas como Eletrolux, Frimesa e Madalosso. Atualmente, atua como 
                    <span className="font-semibold text-accent"> analista de dados e desenvolvedor de oportunidades</span>, 
                    trazendo uma perspectiva única e abrangente para cada desafio.
                  </p>
                </div>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">Gestão A&B</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Chef Executivo</span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">Análise Estratégica</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
