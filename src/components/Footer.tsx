
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/20 to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="font-display text-2xl font-bold mb-4">
                R&O Consultoria Estratégica
              </h3>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                Especialistas em transformar negócios de alimentos e bebidas através de nossa 
                metodologia proprietária R&O 360. Resultados comprovados em 90 dias.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <span className="font-bold text-primary">R&O</span>
                </div>
                <div>
                  <p className="font-semibold">Método R&O 360</p>
                  <p className="text-sm text-white/70">Metodologia Proprietária</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Navegação</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('quem-somos')}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Quem Somos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('metodo')}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Método R&O 360
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contato')}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Nossos Serviços</h4>
              <ul className="space-y-3 text-white/80">
                <li>Diagnóstico Operacional</li>
                <li>Análise de Processos</li>
                <li>Otimização de Estoque</li>
                <li>Consultoria Estratégica</li>
                <li>Relatórios Detalhados</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/70">
                <p>© {currentYear} R&O Consultoria Estratégica. Todos os direitos reservados.</p>
                <div className="flex gap-4">
                  <button className="hover:text-white transition-colors">
                    Política de Privacidade
                  </button>
                  <span>|</span>
                  <button className="hover:text-white transition-colors">
                    Termos de Uso
                  </button>
                </div>
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="bg-accent hover:bg-accent/90 text-primary p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
