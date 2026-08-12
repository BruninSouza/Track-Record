import { problem } from "../data/content";
import ImageSlot from "./ImageSlot";

export default function Problem() {
  return (
    <section
      id="problema"
      className="scroll-mt-10 border-t border-line px-6 py-24 md:px-16 lg:px-24"
    >
      <p className="mb-10 font-mono text-xs uppercase tracking-[0.35em] text-ochre">
        {problem.eyebrow}
      </p>

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <h2 className="max-w-2xl font-display text-3xl leading-tight text-paper sm:text-4xl">
            {problem.title}
          </h2>

          <div className="mt-6 max-w-xl space-y-5">
            {problem.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-paper-dim">
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {problem.highlights.map((item) => (
              <div key={item.label}>
                <dt className="font-mono text-xs uppercase tracking-widest text-paper-dim">
                  {item.label}
                </dt>
                <dd className="mt-1 text-paper">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ImageSlot src={problem.image.src} alt={problem.image.alt} />
      </div>
    </section>
  );
}
