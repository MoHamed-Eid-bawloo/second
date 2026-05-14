import { site, waLink } from "@/content/site";
import { IconEdit, IconWhatsApp } from "./Icons";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">

        <div className="order-2 flex flex-col gap-3 md:order-1">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-gold)] px-6 py-4 text-base font-bold text-[oklch(0.22_0.06_264)] shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <IconEdit className="h-5 w-5" />
            اطلب ترجمتك الآن
          </a>

          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-whatsapp)] px-6 py-4 text-base font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <IconWhatsApp className="h-5 w-5" />
            تحدث معنا على واتساب
          </a>
        </div>

        <div className="order-1 text-right md:order-2">
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            من نحن
          </h2>

          <div className="mr-0 mt-3 h-1 w-16 rounded-full bg-[var(--color-gold)]" />

          <p className="mt-6 text-base leading-loose text-muted-foreground md:text-lg">
            في <strong className="text-foreground">{site.nameAr}</strong> نؤمن أن الترجمة ليست مجرد كلمات،
            بل هي نقل للمعنى بدقة واحتراف يعكس قيمة المحتوى الأصلي.
          </p>

          <p className="mt-4 text-base leading-loose text-muted-foreground md:text-lg">
            نقدم خدمات الترجمة المعتمدة تغطي المجالات القانونية والطبية والأكاديمية والتجارية،
            مع الالتزام الكامل بالجودة، السرعة، والسرية التامة في كل مشروع.
          </p>
          <p className="mt-4 text-base font-semibold text-foreground">
            الجودة ليست خيارًا لدينا… بل معيار ثابت في كل عمل نقدمه.
          </p>
        </div>

      </div>
    </section>
  );
}
