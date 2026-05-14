import { services } from "@/content/services";
import { waLink } from "@/content/site";
import { IconChevron } from "./Icons";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">خدماتنا</h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[var(--color-gold)]" />
        <p className="mt-4 text-muted-foreground">ترجمة معتمدة في جميع المجالات لكافة الجهات الحكومية.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <article key={s.id} className="glass-card group grid grid-cols-1 overflow-hidden rounded-3xl sm:grid-cols-[1fr_1.1fr]">
            <img
              src={s.image}
              alt={s.title}
              loading="lazy"
              width={800}
              height={600}
              className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-full"
            />
            <div className="flex flex-col justify-center p-6 text-right md:p-8">
              <h3 className="text-2xl font-bold text-foreground">{s.title}</h3>
              <div className="mt-2 h-0.5 w-10 rounded bg-[var(--color-gold)]" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{s.desc}</p>
              <a
                href={waLink(`أرغب بطلب ${s.title}`)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl border border-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)] hover:text-[oklch(0.22_0.06_264)]"
              >
                اطلب ترجمة <IconChevron />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
