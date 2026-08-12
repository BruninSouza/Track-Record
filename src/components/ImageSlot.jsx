// Placeholder de imagem: mostra um retângulo tracejado com instrução
// enquanto `src` for null. Assim que você adicionar a imagem em
// content.js (ex: "/hero.jpg", com o arquivo em /public), ela aparece
// automaticamente aqui no lugar do placeholder.
export default function ImageSlot({ src, alt, className = "", ratio = "aspect-[4/3]" }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full rounded-lg object-cover ${ratio} ${className}`}
      />
    );
  }

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
