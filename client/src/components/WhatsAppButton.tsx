import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5547992062877";
    const message = "Olá! Gostaria de saber mais sobre a consultoria R&O 360 e solicitar minha análise gratuita.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/90 text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse hover:animate-none group"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale conosco no WhatsApp
      </span>
    </button>
  );
};

export default WhatsAppButton;