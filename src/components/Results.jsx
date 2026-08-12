import { results } from "../data/content";
import ImageSlot from "./ImageSlot";

export default function Results() {
  return (
    <section
      id="resultados"
      className="scroll-mt-10 border-t border-line px-6 py-24 md:px-16 lg:px-24"
    >
      <p className="mb-10 font-mono text-xs uppercase tracking-[0.35em] text-ochre">
        {results.eyebrow}
      </p>

      <h2 className="max-w-2xl font-display text-3xl leading-tight text-paper sm:text-4xl">
        {results.title}
      </h2>

      <div className="mt-6 max-w-2xl space-y-5">
        {results.paragraphs.map((paragraph, i) => (
          <p key={i} className="text-lg leading-relaxed text-paper-dim">
            {paragraph}
          </p>
        ))}
      </div>

      <dl className="mt-12 grid gap-8 border-y border-line py-10 sm:grid-cols-3">
        {results.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="font-display text-4xl text-ochre sm:text-5xl">
              {stat.value}
            </dt>
            <dd className="mt-3 font-mono text-xs uppercase tracking-widest text-paper">
              {stat.label}
            </dd>
            <dd className="mt-2 text-sm leading-relaxed text-paper-dim">
              {stat.detail}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-10 max-w-2xl border-l-2 border-indigo pl-6 font-display text-xl italic leading-snug text-paper-dim sm:text-2xl">
        {results.learning}
      </p>

      {/* Galeria de evidências: prints, gráficos, fotos da apresentação */}
      <div className="mt-14">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-paper-dim">
          Evidências
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {results.gallery.map((item, i) => (
            <ImageSlot key={i} src={item.src} alt={item.alt} ratio="aspect-[4/3]" />
          ))}
        </div>
      </div>
    </section>
  );
}
