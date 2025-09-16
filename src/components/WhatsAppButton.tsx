import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5583991069133";
    const message = "Olá! Gostaria de conhecer mais sobre o trabalho da fonoaudióloga Carolina Wanderley.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-transform" />
    </button>
  );
};

export default WhatsAppButton;