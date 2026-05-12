import { IconLock, IconMedal, IconClock } from "./Icons";

const items = [
  { icon: IconLock, title: "سرية تامة", desc: "لحماية بياناتك ومستنداتك" },
  { icon: IconMedal, title: "جودة مطابقة", desc: "للمعايير الدولية المعتمدة" },
  { icon: IconClock, title: "تسليم سريع", desc: "خلال 24 ساعة" },
];

export function Features() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="glass-card flex items-center justify-between gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
            <div className="text-right">
              <div className="text-base font-bold text-foreground">{it.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{it.desc}</div>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <it.icon className="h-6 w-6" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
