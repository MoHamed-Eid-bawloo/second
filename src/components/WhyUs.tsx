import { IconCheck } from "./Icons";

const reasons = [
  { t: "مترجمون معتمدون", d: "فريق متخصص بخبرة سنوات في الترجمة المعتمدة." },
  { t: "اعتماد رسمي", d: "ترجماتنا مقبولة لدى السفارات والوزارات والجهات الرسمية." },
  { t: "تسليم في الموعد", d: "نلتزم بالمواعيد دون أي تأخير، حتى للطلبات العاجلة." },
  { t: "أسعار تنافسية", d: "جودة عالية بأسعار شفّافة وبدون رسوم خفية." },
  { t: "مراجعة مزدوجة", d: "كل ملف يخضع لمراجعة لغوية وتدقيق نهائي." },
  { t: "دعم على مدار الساعة", d: "تواصل مباشر عبر واتساب لخدمتك متى احتجت." },
];

export function WhyUs() {
  return (
    <section id="why" className="border-y border-border bg-[var(--color-surface)]/40">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">لماذا تختار تبيان</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[var(--color-gold)]" />
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.t} className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <IconCheck className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-foreground">{r.t}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
