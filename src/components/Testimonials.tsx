const items = [
  { name: "أحمد العلي", role: "مدير شركة", text: "خدمة ممتازة، تسليم سريع وترجمة دقيقة جداً. أنصح بالتعامل مع تبيان بشدة." },
  { name: "د. فاطمة", role: "باحثة أكاديمية", text: "ترجمة احترافية لأبحاثي العلمية بدقة عالية وأسلوب أكاديمي راقٍ." },
  { name: "خالد منصور", role: "محامٍ", text: "وثائق قانونية مترجمة باحترافية ومعتمدة لدى جميع الجهات. تجربة موفّقة." },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">آراء عملائنا</h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[var(--color-gold)]" />
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <figure key={t.name} className="glass-card flex flex-col rounded-2xl p-6">
            <div className="text-2xl text-[var(--color-gold)]">”</div>
            <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{t.text}</blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <div className="font-bold text-foreground">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
