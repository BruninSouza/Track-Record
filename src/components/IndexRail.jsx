import { sections } from "../data/content";

export default function IndexRail({ activeId }) {
  return (
    <nav
      aria-label="Índice de seções"
      className="fixed left-0 top-0 z-40 hidden h-screen w-14 flex-col items-center justify-center border-r border-line/70 bg-ink/90 backdrop-blur md:flex lg:w-16"
    >
      <ol className="flex flex-col items-center gap-7">
        {sections.map((section, i) => {
          const active = section.id === activeId;
          return (
            <li key={section.id} className="group relative flex items-center">
              <a
                href={`#${section.id}`}
                aria-current={active ? "true" : undefined}
                className="flex flex-col items-center gap-2 font-mono text-[11px] tracking-widest"
              >
                <span
                  className={`transition-colors ${
                    active ? "text-ochre" : "text-paper-dim group-hover:text-paper"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`h-6 w-px transition-colors ${
                    active ? "bg-ochre" : "bg-line group-hover:bg-paper-dim"
                  }`}
                  aria-hidden="true"
                />
              </a>
              <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded bg-ink-soft px-2 py-1 font-mono text-[11px] text-paper opacity-0 shadow-lg ring-1 ring-line transition-opacity group-hover:opacity-100">
                {section.label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
