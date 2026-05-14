import hero from "@/assets/hero.jpg";
import { site, waLink } from "@/content/site";
import { IconWhatsApp, IconEdit } from "./Icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:gap-12 md:px-8 md:py-24">
        <div className="order-2 md:order-1">
          <img
            src={hero}
            alt="مستندات ترجمة معتمدة بختم رسمي"
            width={1280}
            height={896}
            fetchPriority="high"
            className="h-auto w-full rounded-2xl border border-border object-cover shadow-2xl"
          />
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-flex items-center rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            معتمدة لدى الجهات الرسمية في الكويت
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            ترجمة معتمدة لجميع الجهات والهيئات الحكومية والسفارات.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
نقدم ترجمة معتمدة دقيقة وسريعة في مختلف المجالات مع جودة عالية تناسب الأفراد والشركات.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-gold)] px-6 py-4 text-base font-bold text-[oklch(0.22_0.06_264)] shadow-lg transition-transform hover:-translate-y-0.5">
              <IconEdit className="h-5 w-5" /> اضغط هنا لطلب ترجمة
            </a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-whatsapp)] px-6 py-4 text-base font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5">
              <IconWhatsApp className="h-5 w-5" /> تواصل معنا واتساب
            </a>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">{site.hours}</p>
        </div>
      </div>
    </section>
  );
}
