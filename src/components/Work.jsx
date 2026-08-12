import { projects } from "../data/content";

export default function Work() {
  return (
    <section
      id="trabalhos"
      className="scroll-mt-10 border-t border-line px-6 py-24 md:px-16 lg:px-24"
    >
      <p className="mb-12 font-mono text-xs uppercase tracking-[0.35em] text-ochre">
        Trabalhos
      </p>

      <ul>
        {projects.map((project) => (
          <li key={project.number} className="group border-t border-line py-8 first:border-t-0">
            <a
              href={project.url}
              className="grid gap-3 sm:grid-cols-[3rem_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span className="font-mono text-sm text-paper-dim">
                {project.number}
              </span>

              <div>
                <h3 className="font-display text-2xl text-paper transition-colors group-hover:text-ochre sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-lg text-paper-dim">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-indigo-soft">
                  {project.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>
              </div>

              <span className="font-mono text-sm text-paper-dim sm:text-right">
                {project.year}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
