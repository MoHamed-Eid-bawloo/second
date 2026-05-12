import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { site, waLink } from "@/content/site";
import { IconWhatsApp } from "./Icons";

const links = [
  { href: "#services", label: "خدماتنا" },
  { href: "#about", label: "من نحن" },
  { href: "#why", label: "لماذا تبيان" },
  { href: "#contact", label: "تواصل" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition-colors ${scrolled ? "bg-background/85 backdrop-blur border-b border-border" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt={`${site.nameEn} logo`} width={44} height={44} className="h-11 w-11 rounded-full bg-white p-1" />
          <div className="leading-tight">
            <div className="text-lg font-bold text-foreground">{site.nameAr}</div>
            <div className="text-[11px] text-muted-foreground">للترجمة المعتمدة</div>
          </div>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={waLink()} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-[var(--color-whatsapp)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] sm:inline-flex">
            <IconWhatsApp className="h-4 w-4" /> واتساب
          </a>
          <button aria-label="القائمة" onClick={() => setOpen(!open)} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden">
            <span className="block h-0.5 w-5 bg-foreground" />
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 p-4">
            {links.map((l) => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
