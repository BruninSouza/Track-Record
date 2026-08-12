import { skills } from "../data/content";

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="scroll-mt-10 border-t border-line px-6 py-24 md:px-16 lg:px-24"
    >
      <p className="mb-12 font-mono text-xs uppercase tracking-[0.35em] text-ochre">
        Habilidades
      </p>

      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-line px-4 py-2 font-mono text-sm text-paper-dim transition-colors hover:border-paper-dim hover:text-paper"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
