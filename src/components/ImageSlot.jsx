import { useEffect, useState } from "react";

// Placeholder de imagem: mostra um retângulo tracejado com instrução
// enquanto `src` for null. Assim que houver uma imagem real, ela é
// exibida com um leve zoom no hover e pode ser aberta em tela cheia.
export default function ImageSlot({ src, alt, caption, className = "", ratio = "aspect-[4/3]" }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line bg-ink-soft px-6 text-center ${ratio} ${className}`}
      >
        <span className="font-mono text-[11px] uppercase tracking-widest text-paper-dim">
          Espaço para imagem
        </span>
        <span className="max-w-xs text-xs text-paper-dim/80">{alt}</span>
      </div>
    );
  }

  return (
    <>
      <figure className={className}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`group relative block w-full overflow-hidden rounded-lg bg-paper ${ratio} focus-visible:outline-2 focus-visible:outline-ochre`}
          aria-label={`Ampliar imagem: ${alt}`}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <span className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-ink/60 via-transparent to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="rounded-full bg-ink/80 px-3 py-1 font-mono text-[11px] text-paper">
              Ampliar ↗
            </span>
          </span>
        </button>
        {caption && (
          <figcaption className="mt-3 font-mono text-xs text-paper-dim">
            {caption}
          </figcaption>
        )}
      </figure>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-full border border-line px-4 py-2 font-mono text-xs text-paper transition-colors hover:border-paper-dim sm:right-8 sm:top-8"
            aria-label="Fechar"
          >
            Fechar ✕
          </button>
          <img
            src={src}
            alt={alt}
            className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
