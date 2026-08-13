import { closing, profile } from "../data/content";
import Reveal from "./Reveal";

export default function Closing() {
  return (
    <section
      id="conclusao"
      className="scroll-mt-10 border-t border-line px-6 py-24 md:px-16 lg:px-24"
    >
      <p className="mb-8 font-mono text-xs uppercase tracking-[0.35em] text-ochre">
        {closing.eyebrow}
      </p>

      <Reveal className="max-w-2xl space-y-5">
        {closing.paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className="font-display text-2xl leading-snug text-paper sm:text-3xl"
          >
            {paragraph}
          </p>
        ))}
      </Reveal>

      <div id="contato" className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8 font-mono text-sm text-paper-dim">
        {profile.social.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel={link.url.startsWith("http") ? "noreferrer" : undefined}
            className="transition-colors hover:text-paper"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}
