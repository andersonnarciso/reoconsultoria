
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, MessageCircle } from "lucide-react";

const ThankYou = () => {
  useEffect(() => {
    // Redirect to home after 5 seconds
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/10 via-background to-primary/5 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-accent" />
          </div>

          {/* Header */}
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Obrigado pelo seu contato!
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Sua mensagem foi enviada com sucesso. Nossa equipe entrará em contato em breve 
            para agendar sua <span className="font-semibold text-primary">análise gratuita</span> e 
            discutir como o método R&O 360 pode transformar seu negócio.
          </p>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-primary/5 rounded-2xl p-6">
              <h3 className="font-semibold text-primary mb-2">Próximos passos</h3>
              <p className="text-sm text-muted-foreground">
                Analisaremos suas informações e entraremos em contato em até 24 horas 
                para agendar sua consultoria gratuita.
              </p>
            </div>
            
            <div className="bg-accent/10 rounded-2xl p-6">
              <h3 className="font-semibold text-primary mb-2">Tem pressa?</h3>
              <p className="text-sm text-muted-foreground">
                Fale diretamente conosco pelo WhatsApp e tire suas dúvidas 
                imediatamente.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = '/'}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Voltar ao início
            </Button>
            
            <a
              href="https://wa.me/5547992062877?text=Olá! Acabei de enviar o formulário de contato e gostaria de conversar sobre a consultoria R&O 360."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-accent hover:bg-accent/90 text-white flex items-center gap-2 w-full">
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </Button>
            </a>
          </div>

          {/* Auto redirect notice */}
          <p className="text-xs text-muted-foreground mt-6">
            Você será redirecionado automaticamente para a página inicial em alguns segundos.
          </p>
        </div>

        {/* Company Info */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="font-bold text-white text-xs">R&O</span>
            </div>
            <span className="font-display font-bold text-primary">R&O Consultoria Estratégica</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Especialistas em transformar negócios de alimentos e bebidas
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
