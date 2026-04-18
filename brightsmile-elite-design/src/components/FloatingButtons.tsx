import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+15551234567"
        className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
        aria-label="Call us"
      >
        <Phone size={22} className="text-primary-foreground" />
      </a>
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle size={22} className="text-primary-foreground" />
      </a>
    </div>
  );
};

export default FloatingButtons;
