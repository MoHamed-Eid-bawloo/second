import { IconGlobe } from "./Icons";

const langs = [
  "العربية", "English", "Français", "Español", "Deutsch", "Türkçe",
  "Italiano", "中文", "日本語", "Русский", "Português", "اردو",
];

export function Languages() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="mb-10 text-center">
        <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
          <IconGlobe />
        </div>
        <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">اللغات التي نترجم منها وإليها</h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[var(--color-gold)]" />
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {langs.map((l) => (
          <span key={l} className="rounded-full border border-border bg-card/60 px-5 py-2 text-sm text-foreground">
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}
