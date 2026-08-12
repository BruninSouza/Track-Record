// ─────────────────────────────────────────────────────────────
// TODO: Edite este arquivo com as suas informações reais.
// Nenhum outro arquivo precisa ser tocado para trocar o conteúdo.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Ana Duarte",
  role: "Desenvolvedora Front-end",
  tagline:
    "Construo interfaces rápidas, acessíveis e bem cuidadas nos detalhes — do primeiro esboço ao deploy.",
  location: "João Pessoa, PB — Brasil",
  email: "ana.duarte@email.com",
  resumeUrl: "#", // coloque o link do seu currículo (PDF) aqui
  social: [
    { label: "GitHub", url: "https://github.com/seu-usuario" },
    { label: "LinkedIn", url: "https://linkedin.com/in/seu-usuario" },
    { label: "E-mail", url: "mailto:ana.duarte@email.com" },
  ],
};

export const about = {
  paragraphs: [
    "Comecei a programar tentando entender por que um menu não fechava do jeito certo — e nunca mais parei de investigar como pequenas decisões de interface mudam a forma como as pessoas usam um produto.",
    "Hoje trabalho principalmente com React e TypeScript, com atenção especial a performance, acessibilidade e a experiência de quem vai manter o código depois de mim.",
  ],
  facts: [
    { label: "Baseada em", value: "João Pessoa, PB" },
    { label: "Foco atual", value: "Interfaces de produto" },
    { label: "Disponibilidade", value: "Projetos freelance" },
  ],
};

// Cada projeto vira uma "entrada de catálogo" na seção de trabalhos.
export const projects = [
  {
    number: "01",
    year: "2026",
    title: "Nome do Projeto 1",
    description:
      "Uma frase curta explicando o problema que o projeto resolve e o seu papel nele.",
    tags: ["React", "Vite", "Tailwind"],
    url: "#",
  },
  {
    number: "02",
    year: "2025",
    title: "Nome do Projeto 2",
    description:
      "Outra descrição objetiva: o contexto, a decisão técnica mais interessante, o resultado.",
    tags: ["Next.js", "Node", "PostgreSQL"],
    url: "#",
  },
  {
    number: "03",
    year: "2025",
    title: "Nome do Projeto 3",
    description:
      "Projetos pessoais também contam — mostre o que você construiu por curiosidade.",
    tags: ["TypeScript", "API"],
    url: "#",
  },
];

export const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Git & GitHub",
  "Vite",
  "Figma",
];

export const sections = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "trabalhos", label: "Trabalhos" },
  { id: "habilidades", label: "Habilidades" },
  { id: "contato", label: "Contato" },
];
