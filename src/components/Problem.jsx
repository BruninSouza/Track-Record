import { problem } from "../data/content";
import Reveal from "./Reveal";

export default function Problem() {
  return (
    <section
      id="problema"
      className="scroll-mt-10 border-t border-line px-6 py-24 md:px-16 lg:px-24"
    >
      <p className="mb-10 font-mono text-xs uppercase tracking-[0.35em] text-ochre">
        {problem.eyebrow}
      </p>

      <Reveal>
        <h2 className="max-w-2xl font-display text-3xl leading-tight text-paper sm:text-4xl">
          {problem.title}
        </h2>

        <div className="mt-6 max-w-2xl space-y-5">
          {problem.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-paper-dim">
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="mt-10 grid max-w-2xl gap-6 border-t border-line pt-8 sm:grid-cols-3">
          {problem.highlights.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-xs uppercase tracking-widest text-paper-dim">
                {item.label}
              </dt>
              <dd className="mt-1 text-paper">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
