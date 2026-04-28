import { MessageCircle } from 'lucide-react';
import { companyInfo, whatsappMessage } from '@/data/siteData';

export function WhatsAppButton() {
  const href = `https://wa.me/${companyInfo.whatsappPhone}?text=${whatsappMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-900/25 transition duration-300 hover:-translate-y-1 hover:bg-emerald-600"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
