import { useEffect, useState } from "react";
import { sections } from "../data/content";

export default function MobileNav({ activeId }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const activeSection = sections.find((s) => s.id === activeId) ?? sections[0];
  const activeIndex = sections.findIndex((s) => s.id === activeId);

  return (
    <div className="md:hidden">
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-line/70 bg-ink/90 px-5 py-3 backdrop-blur">
        <span className="font-mono text-xs tracking-widest text-paper-dim">
          <span className="text-ochre">{String(activeIndex + 1).padStart(2, "0")}</span>
          {" / "}
          {String(sections.length).padStart(2, "0")} — {activeSection.label}
        </span>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-paper"
          aria-label="Abrir índice de seções"
          aria-expanded={open}
        >
          Índice
          <span aria-hidden="true" className="flex flex-col gap-[3px]">
            <span className="h-px w-4 bg-paper" />
            <span className="h-px w-4 bg-paper" />
            <span className="h-px w-4 bg-paper" />
          </span>
        </button>
      </div>

      {/* Espaçador para compensar a barra fixa */}
      <div className="h-[52px]" aria-hidden="true" />

      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-ink/98 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label="Índice de seções"
        >
          <div className="flex items-center justify-between border-b border-line/70 px-5 py-4">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-ochre">
              Índice
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-line px-4 py-2 font-mono text-xs text-paper"
              aria-label="Fechar índice"
            >
              Fechar ✕
            </button>
          </div>

          <ol className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-6 py-4">
            {sections.map((section, i) => {
              const active = section.id === activeId;
              return (
                <li key={section.id} className="border-b border-line/50 last:border-b-0">
                  <a
                    href={`#${section.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 py-5"
                  >
                    <span
                      className={`font-mono text-sm ${
                        active ? "text-ochre" : "text-paper-dim"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-2xl ${
                        active ? "text-paper" : "text-paper-dim"
                      }`}
                    >
                      {section.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
}
