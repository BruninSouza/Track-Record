import { profile } from "../data/content";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-screen scroll-mt-10 flex-col justify-center px-6 pt-24 md:px-16 lg:px-24"
    >
      <p className="font-mono text-xs uppercase tracking-[0.35em] text-ochre">
        Portfólio — {profile.location}
      </p>

      <h1 className="mt-6 max-w-4xl font-display text-[13vw] font-medium leading-[0.95] tracking-tight text-paper sm:text-7xl lg:text-8xl">
        {profile.name}
      </h1>

      <p className="mt-4 font-display text-2xl italic text-indigo-soft sm:text-3xl">
        {profile.role}
      </p>

      <p className="mt-8 max-w-xl text-base leading-relaxed text-paper-dim sm:text-lg">
        {profile.tagline}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#trabalhos"
          className="rounded-full bg-paper px-6 py-3 font-mono text-sm text-ink transition-colors hover:bg-ochre"
        >
          Ver trabalhos
        </a>
        <a
          href="#contato"
          className="rounded-full border border-line px-6 py-3 font-mono text-sm text-paper transition-colors hover:border-paper-dim"
        >
          Entrar em contato
        </a>
      </div>
    </section>
  );
}
