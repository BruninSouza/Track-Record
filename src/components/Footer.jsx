import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 md:px-16 lg:px-24">
      <div className="flex flex-col gap-2 font-mono text-xs text-paper-dim sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Feito com React + Tailwind CSS</span>
      </div>
    </footer>
  );
}
