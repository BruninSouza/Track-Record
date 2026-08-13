export const sections = [
  { id: "inicio", label: "Início" },
  { id: "problema", label: "O Problema" },
  { id: "obstaculo", label: "A Virada" },
  { id: "resultados", label: "Resultados" },
  { id: "conclusao", label: "Conclusão" },
];

export const profile = {
  name: "Bruno S. Costa",
  email: "brun.souz4@gmail.com",
  social: [
    { label: "Guia interativo", url: "https://bruninsouza.github.io/Aprenda-Python/intro.html" },
    { label: "GitHub do projeto", url: "https://github.com/bruninsouza/Aprenda-Python" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/bruno-souza-a74396214/" },
    { label: "E-mail", url: "mailto:brun.souz4@gmail.com" },
  ],
};

export const hero = {
  eyebrow: "Track Record — Estudo de Caso",
  title: "Tirando a tecnologia do papel: a construção do guia interativo Aprenda Python",
  subtitle:
    "Como transformei meu Trabalho de Conclusão de Curso, em Sistemas de Informação pela UFPB, em um guia interativo real, mobile-first, para ensinar Python a quem só tem acesso a um celular.",
  links: [
    { label: "Acessar o guia interativo", url: "https://bruninsouza.github.io/Aprenda-Python/intro.html" },
    { label: "Ver repositório no GitHub", url: "https://github.com/bruninsouza/Aprenda-Python" },
  ],
};

export const problem = {
  eyebrow: "O Contexto e o Desafio",
  title: "O Problema: a barreira de entrada na tecnologia",
  paragraphs: [
    "Durante minha graduação em Sistemas de Informação na UFPB (campus Rio Tinto), percebi um gargalo claro: o ensino de programação ainda é atrelado à posse de um computador pessoal e à complexidade de configurar um ambiente de desenvolvimento (IDE) local. Segundo o IBGE, 88,9% da população brasileira com 10 anos ou mais já possuía celular em 2024, essa é uma realidade que não se pode ignorar, caso contrário, fomentaria uma exclusão digital no ensino de programação.",
    "Com isso em mente, eu não queria entregar apenas um trabalho acadêmico teórico. Meu objetivo era construir uma solução prática: um guia interativo capaz de unir teoria e prática no mesmo ambiente, permitindo que o estudante lesse o conteúdo e executasse os códigos de exemplo diretamente no navegador do celular, sem instalar nenhum software.",
  ],
  highlights: [
    { label: "Contexto", value: "TCC em Sistemas de Informação — UFPB" },
    { label: "Gargalo identificado", value: "Dependência de computador e configuração de IDE" },
    { label: "Direção escolhida", value: "Guia interativo mobile-first, sem instalação local" },
  ],
};

export const turningPoint = {
  eyebrow: "O Obstáculo e a Virada de Chave",
  title: "O Obstáculo: guia no ar não significa problema resolvido",
  paragraphs: [
    "Depois de estruturar a arquitetura com Jupyter Book convertendo notebooks em páginas estáticas, publicação automatizada via GitHub Actions e GitHub Pages, e execução de código delegada ao Google Colab e ao Binder, eu cheguei à fase mais crítica: provar que o guia realmente funcionava para quem ele foi pensado.",
    "Testar apenas a responsividade técnica da interface em diferentes resoluções não seria suficiente. Eu precisava saber se o material realmente ensinava, então mudei a estratégia: em vez de restringir a validação a um grupo pequeno e controlado, abri um questionário via Google Forms para qualquer pessoa na internet.",
    "Divulguei o convite em LinkedIn, Twitter, e-mail e grupos de WhatsApp, sempre pedindo que a pessoa primeiro usasse o guia e só depois respondesse. O formulário, anônimo e voluntário, foi estruturado em cinco eixos: perfil inicial, experiência de uso, clareza do conteúdo, utilidade percebida e feedback aberto. Essa era a prova de fogo do mundo real.",
  ],
};

export const results = {
  eyebrow: "Os Resultados e o Impacto",
  title: "Resultados: o impacto provado na prática",
  paragraphs: [
    "A amostra final reuniu 17 voluntários, onde 58,8% vinculados a cursos de exatas e 41,2% de outras áreas, ambos com níveis de conhecimento prévio bem diversos, do iniciante ao avançado. Mesmo assim, os resultados de experiência de uso, clareza de conteúdo e utilidade percebida se concentraram nos níveis mais altos da escala de concordância.",
  ],
  stats: [
    {
      value: "17",
      label: "Voluntários na validação",
      detail: "Amostra recrutada abertamente via LinkedIn, Twitter, e-mail e WhatsApp, sem grupo controlado.",
    },
    {
      value: "94%",
      label: "Recomendariam o guia",
      detail: "15 de 17 concordaram totalmente e 1 concordou que recomendaria a plataforma a outra pessoa.",
    },
    {
      value: "9",
      label: "Etapas de conteúdo",
      detail: "De variáveis e constantes até Programação Orientada a Objetos, em progressão didática contínua.",
    },
  ],
  learning:
    "O maior aprendizado: o desenvolvimento do Aprenda Python forjou minha mentalidade orientada a produto. Aprendi que assumir a responsabilidade de ponta a ponta, desde a arquitetura à validação com usuários reais, é o que garante que a tecnologia entregue valor prático na ponta da linha.",
};

export const closing = {
  eyebrow: "Por que isso importa hoje?",
  title: "Por que isso importa hoje?",
  paragraphs: [
    "Levo essa mesma mentalidade de dono e resiliência para o meu dia a dia. Seja mapeando processos ou estruturando automações, meu foco é sempre construir soluções que resolvem gargalos do mundo real, validadas com quem de fato vai usá-las.",
    "É essa energia de execução e foco no usuário final que quero levar para o próximo desafio.",
  ],
};
