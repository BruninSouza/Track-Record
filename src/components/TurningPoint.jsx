import { turningPoint } from "../data/content";
import Reveal from "./Reveal";

export default function TurningPoint() {
  return (
    <section
      id="obstaculo"
      className="scroll-mt-10 border-t border-line bg-ink-soft px-6 py-24 md:px-16 lg:px-24"
    >
      <Reveal className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-ochre">
          {turningPoint.eyebrow}
        </p>

        <div className="max-w-3xl border-l-2 border-indigo pl-6 sm:pl-10">
          <h2 className="font-display text-3xl italic leading-tight text-paper sm:text-4xl">
            {turningPoint.title}
          </h2>

          <div className="mt-6 space-y-5">
            {turningPoint.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-paper-dim">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
