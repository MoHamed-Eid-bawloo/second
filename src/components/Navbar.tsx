import { useEffect, useState } from "react";
import logo from "@/assets/logo2.png";
import flag from "@/assets/kuwait-flag.svg";
import { site, waLink } from "@/content/site";
import { IconWhatsApp } from "./Icons";

const links = [
  { href: "#contact", label: "تواصل" },
];

function FlagBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/5 px-2.5 py-1 backdrop-blur-sm transition-colors hover:bg-white/10 ${className}`}
      aria-label="الكويت"
      title="الكويت"
    >
      <img
        src={flag}
        alt="علم الكويت"
        width={60}
        height={45}
        loading="lazy"
        className="h-10 w-25 rounded-[4px] object-cover shadow-[0_1px_3px_rgba(0,0,0,0.45)] ring-1 ring-black/10"
      />
      <span className="hidden text-xs font-medium tracking-wide text-muted-foreground sm:inline">
        الكويت
      </span>
    </span>
  );
}

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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/70 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }`}
    >
      {/* Desktop */}
      <nav className="mx-auto hidden max-w-7xl items-center justify-between gap-6 px-6 py-3.5 md:flex lg:px-8">
        {/* Left: Kuwait flag */}
        <FlagBadge />

        {/* Center: Brand */}
        <a href="#top" className="group flex items-center gap-3">
          <img
            src={logo}
            alt={`${site.nameEn} logo`}
            width={64}
            height={64}
            className="h-16 w-16 rounded-full bg-white/95 p-1.5 ring-1 ring-border/60 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="leading-tight">
            <div className="text-lg font-bold tracking-tight text-foreground">
              {site.nameAr}
            </div>
            <div className="text-[11px] text-muted-foreground">للترجمة المعتمدة</div>
          </div>
        </a>

        {/* Right: Links + CTA */}
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:right-0 after:h-px after:w-0 after:bg-[var(--color-gold)] after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-whatsapp)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:scale-[1.03] hover:shadow-md"
          >
            <IconWhatsApp className="h-4 w-4" />
            واتساب
          </a>
        </div>
      </nav>

      {/* Mobile */}
      <nav className="mx-auto grid max-w-7xl grid-cols-3 items-center px-4 py-3 md:hidden">
        {/* Left: Kuwait flag */}
        <div className="flex justify-start">
          <FlagBadge />
        </div>

        {/* Center: Brand */}
        <a href="#top" className="flex flex-col items-center justify-center">
          <img
            src={logo}
            alt={`${site.nameEn} logo`}
            width={52}
            height={52}
            className="h-13 w-13 rounded-full bg-white/95 p-1 ring-1 ring-border/60"
            style={{ height: 52, width: 52 }}
          />
          <span className="mt-1 text-sm font-bold leading-none text-foreground">
            {site.nameAr}
          </span>
        </a>

        {/* Right: Menu */}
        <div className="flex justify-end">
          <button
            aria-label="القائمة"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md border border-border/70 bg-white/5 transition-colors hover:bg-white/10"
          >
            <span
              className={`block h-0.5 w-5 bg-foreground transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-border/70 bg-background/95 backdrop-blur-xl transition-[max-height,border] duration-300 md:hidden ${
          open ? "max-h-80 border-t" : "max-h-0"
        }`}
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1 p-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                onClick={() => setOpen(false)}
                href={l.href}
                className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-[var(--color-whatsapp)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              <IconWhatsApp className="h-4 w-4" />
              تواصل عبر واتساب
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
