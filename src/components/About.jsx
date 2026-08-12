import { about } from "../data/content";

export default function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-10 border-t border-line px-6 py-24 md:px-16 lg:px-24"
    >
      <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-ochre">
          Sobre
        </p>

        <div className="max-w-2xl">
          {about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="mb-5 text-lg leading-relaxed text-paper-dim last:mb-0"
            >
              {paragraph}
            </p>
          ))}

          <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs uppercase tracking-widest text-paper-dim">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-paper">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
