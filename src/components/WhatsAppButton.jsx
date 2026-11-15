import { CONTACT, whatsappLink } from "../data/contact";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(CONTACT.whatsappRetail, "Olá! Vim pelo site e gostaria de mais informações.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      title="Falar pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-[9999px] bg-[#25D366] text-white shadow-[0_6px_24px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <span className="absolute inset-0 rounded-[9999px] bg-[#25D366] opacity-60 animate-ping motion-reduce:hidden" aria-hidden="true" />
      <svg viewBox="0 0 32 32" className="relative h-8 w-8 md:h-9 md:w-9" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3C8.82 3 3 8.82 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.66-1.74A12.94 12.94 0 0 0 16.004 29C23.18 29 29 23.18 29 16S23.18 3 16.004 3Zm0 23.62c-1.98 0-3.92-.53-5.61-1.54l-.4-.24-3.95 1.03 1.05-3.85-.26-.4A10.6 10.6 0 0 1 5.38 16c0-5.86 4.77-10.62 10.63-10.62S26.62 10.14 26.62 16s-4.76 10.62-10.62 10.62Zm5.83-7.95c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
