import { profile } from "../data/content";

export default function Contact() {
  return (
    <section
      id="contato"
      className="scroll-mt-10 border-t border-line px-6 py-24 md:px-16 lg:px-24"
    >
      <p className="mb-8 font-mono text-xs uppercase tracking-[0.35em] text-ochre">
        Contato
      </p>

      <h2 className="max-w-2xl font-display text-4xl leading-tight text-paper sm:text-5xl">
        Tem um projeto em mente? Vamos conversar.
      </h2>

      <a
        href={profile.social.find((s) => s.label === "E-mail")?.url}
        className="mt-8 inline-block font-display text-2xl italic text-indigo-soft underline decoration-line underline-offset-8 transition-colors hover:text-ochre sm:text-3xl"
      >
        {profile.email}
      </a>

      <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm text-paper-dim">
        {profile.social.map((link) => (
          <a
            key={link.label}
            href={link.url}
            className="transition-colors hover:text-paper"
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel={link.url.startsWith("http") ? "noreferrer" : undefined}
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}
