import { hero } from "../data/content";
import ImageSlot from "./ImageSlot";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="scroll-mt-10 px-6 pb-20 pt-28 md:px-16 lg:px-24 lg:pt-32"
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-ochre">
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-dim sm:text-lg">
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
        </div>

        <ImageSlot
          src={hero.image.src}
          alt={hero.image.alt}
          ratio="aspect-[3/4]"
        />
      </div>
    </section>
  );
}
