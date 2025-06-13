
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show proactive tooltip after 10 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5547992062877";
    const message = "Olá! Gostaria de saber mais sobre a consultoria R&O 360 e solicitar minha análise gratuita.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setShowTooltip(false);
  };

  const closeTooltip = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Proactive Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-20 left-0 bg-white rounded-2xl shadow-xl p-4 max-w-xs mb-4 animate-fade-in">
          <button 
            onClick={closeTooltip}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="pr-6">
            <p className="font-semibold text-primary mb-2">👋 Olá!</p>
            <p className="text-sm text-muted-foreground mb-3">
              Precisa de ajuda? Converse conosco no WhatsApp e tire suas dúvidas sobre o método R&O 360!
            </p>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-accent text-white text-sm px-4 py-2 rounded-full hover:bg-accent/90 transition-colors"
            >
              Iniciar conversa
            </button>
          </div>
          {/* Arrow */}
          <div className="absolute bottom-[-8px] left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-accent hover:bg-accent/90 text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 whatsapp-float group"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
