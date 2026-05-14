import { useState } from "react";
import { site, waLink } from "@/content/site";
import { IconWhatsApp, IconPhone, IconMail, IconPin } from "./Icons";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);

    const msg = `طلب ترجمة جديد:
الاسم: ${f.get("name")}
الهاتف: ${f.get("phone")}
الخدمة: ${f.get("service")}
التفاصيل: ${f.get("message")}`;

    window.open(waLink(msg), "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="border-t border-border bg-[var(--color-surface)]/40">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            تواصل معنا
          </h2>

          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[var(--color-gold)]" />

          <p className="mt-4 text-muted-foreground">
            جاهزون لخدمتك على مدار الساعة — اختر الطريقة الأنسب لك.
          </p>
        </div>

        {/* WHATSAPP CTA */}
        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          className="group mb-6 flex w-full items-center justify-center gap-4 rounded-2xl bg-[var(--color-whatsapp)] px-6 py-6 text-xl font-extrabold text-white shadow-2xl transition-transform hover:-translate-y-0.5 md:text-2xl"
        >
          <IconWhatsApp className="h-8 w-8" />
          تواصل عبر واتساب الآن
          <span className="hidden text-sm font-medium opacity-90 md:inline">
            — رد فوري
          </span>
        </a>

        {/* CALL BUTTON */}
        <a
          href={`tel:${site.phone}`}
          className="group mb-10 flex w-full items-center justify-center gap-4 rounded-2xl bg-[var(--color-primary)] px-6 py-6 text-xl font-extrabold text-white shadow-2xl transition-transform hover:-translate-y-0.5 md:text-2xl"
        >
          <IconPhone className="h-8 w-8" />
          اتصل بنا الآن
          <span className="hidden text-sm font-medium opacity-90 md:inline">
            — مكالمة فورية
          </span>
        </a>

        {/* GRID */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">

          {/* FORM */}
          <form onSubmit={onSubmit} className="glass-card rounded-2xl p-6 md:p-8">

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="الاسم" name="name" required />
              <Field label="رقم الهاتف" name="phone" type="tel" required />
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-sm text-muted-foreground">
                نوع الخدمة
              </label>

              <select
                name="service"
                required
                className="w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-foreground outline-none focus:border-primary"
              >
                <option>ترجمة قانونية</option>
                <option>ترجمة طبية</option>
                <option>ترجمة أكاديمية</option>
                <option>ترجمة تجارية</option>
                <option>أخرى</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-sm text-muted-foreground">
                تفاصيل الطلب
              </label>

              <textarea
                name="message"
                rows={4}
                className="w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-foreground outline-none focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-[var(--color-gold)] px-6 py-4 text-base font-bold text-[oklch(0.22_0.06_264)] shadow-lg transition-transform hover:-translate-y-0.5"
            >
              إرسال الطلب
            </button>

            {sent && (
              <p className="mt-3 text-sm text-[var(--color-gold)]">
                تم فتح واتساب لإكمال الطلب.
              </p>
            )}
          </form>

          {/* INFO */}
          <div className="flex flex-col gap-3">
            <InfoCard
              icon={<IconPhone />}
              title="اتصل بنا"
              value={site.phone}
              href={site.phoneHref}
            />

            <InfoCard
              icon={<IconMail />}
              title="البريد الإلكتروني"
              value={site.email}
              href={`mailto:${site.email}`}
            />

            <InfoCard
              icon={<IconPin />}
              title="العنوان"
              value={site.address}
              href={https://www.google.com/maps/q=29.344009399414062,48.0207405090332&z=17&}
            />

            <InfoCard
              icon={<IconWhatsApp />}
              title="واتساب"
              value={site.phone}
              href={waLink()}
              accent
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   FIELD COMPONENT
========================= */

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm text-muted-foreground">
        {label}
      </label>

      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-foreground outline-none focus:border-primary"
      />
    </div>
  );
}

/* =========================
   INFO CARD
========================= */

function InfoCard({
  icon,
  title,
  value,
  href,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  accent?: boolean;
}) {
  const content = (
    <div
      className={`glass-card flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-0.5 ${
        accent ? "ring-1 ring-[var(--color-whatsapp)]/40" : ""
      }`}
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
          accent
            ? "bg-[var(--color-whatsapp)]/20 text-[var(--color-whatsapp)]"
            : "bg-primary/15 text-primary"
        }`}
      >
        {icon}
      </div>

      <div className="text-right">
        <div className="text-xs text-muted-foreground">{title}</div>
        <div className="text-base font-semibold text-foreground" dir="ltr">
          {value}
        </div>
      </div>
    </div>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
    >
      {content}
    </a>
  ) : (
    content
  );
}
