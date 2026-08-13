import { hero } from "../data/content";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="scroll-mt-10 px-6 pb-20 pt-10 sm:pt-16 md:px-16 lg:px-24 lg:pb-28 lg:pt-32"
    >
      <p className="font-mono text-xs uppercase tracking-[0.35em] text-ochre">
        {hero.eyebrow}
      </p>

      <h1 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
        {hero.title}
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper-dim sm:text-lg">
        {hero.subtitle}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        {hero.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel={link.url.startsWith("http") ? "noreferrer" : undefined}
            className="rounded-full border border-line px-5 py-2.5 font-mono text-sm text-paper transition-colors hover:border-paper-dim"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}
