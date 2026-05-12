import { waLink } from "@/content/site";
import { IconWhatsApp } from "./Icons";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-5 left-5 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-whatsapp)] text-white shadow-2xl transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-whatsapp)] opacity-30" />
      <IconWhatsApp className="relative h-8 w-8" />
    </a>
  );
}
