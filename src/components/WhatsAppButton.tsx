import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/your-number"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
    </a>
  );
}