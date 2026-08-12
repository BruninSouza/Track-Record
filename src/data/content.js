// ─────────────────────────────────────────────────────────────
// TODO: Edite este arquivo com as suas informações reais.
// Procure por "TODO" para achar rápido onde trocar imagens e links.
// Nenhum outro arquivo precisa ser tocado para trocar o conteúdo.
// ─────────────────────────────────────────────────────────────

export const sections = [
  { id: "inicio", label: "Início" },
  { id: "problema", label: "O Problema" },
  { id: "obstaculo", label: "A Virada" },
  { id: "resultados", label: "Resultados" },
  { id: "conclusao", label: "Conclusão" },
];

export const profile = {
  name: "Seu Nome",
  email: "seuemail@email.com",
  // TODO: troque pelos seus links reais
  social: [
    { label: "GitHub do projeto", url: "https://github.com/seu-usuario/aprenda-python" },
    { label: "LinkedIn", url: "https://linkedin.com/in/seu-usuario" },
    { label: "E-mail", url: "mailto:seuemail@email.com" },
  ],
  // TODO: link para o PDF do currículo
  resumeUrl: "#",
};

export const hero = {
  eyebrow: "Track Record — Estudo de Caso",
  title: "Tirando a tecnologia do papel: a construção da plataforma Aprenda Python",
  subtitle:
    "Como transformei meu Trabalho de Conclusão de Curso em um produto real, mobile-first, focado em democratizar o acesso à programação e validado por pessoas reais na internet.",
  // TODO: troque pela sua foto ou por um mockup da plataforma no celular
  // Coloque o arquivo em /public (ex: /public/hero.jpg) e referencie como "/hero.jpg"
  image: {
    src: null, // ex: "/hero.jpg"
    alt: "Foto do autor apresentando a plataforma Aprenda Python, ou mockup da interface no celular",
  },
  links: [
    { label: "Ver repositório no GitHub", url: "https://github.com/seu-usuario/aprenda-python" },
    { label: "LinkedIn", url: "https://linkedin.com/in/seu-usuario" },
  ],
};

export const problem = {
  eyebrow: "O Contexto e o Desafio",
  title: "O Problema: a barreira de entrada na tecnologia",
  paragraphs: [
    "Sempre acreditei que a tecnologia deve ser uma alavanca para democratizar oportunidades. Durante minha graduação em Sistemas de Informação na UFPB, percebi um gargalo claro: o ensino de programação é quase sempre pensado para quem já possui um computador. Mas como ensinar tecnologia para quem só tem acesso a um celular?",
    "Eu não queria entregar apenas um documento acadêmico teórico para concluir minha graduação. Meu objetivo era construir uma solução prática. O desafio que abracei foi desenvolver do zero uma plataforma educacional inteiramente focada na experiência móvel, garantindo fluidez e acessibilidade.",
  ],
  // Cards de apoio — edite ou remova conforme o que quiser destacar
  highlights: [
    { label: "Contexto", value: "TCC em Sistemas de Informação — UFPB" },
    { label: "Gargalo identificado", value: "Ensino de programação pensado só para desktop" },
    { label: "Direção escolhida", value: "Plataforma mobile-first, do zero" },
  ],
  // TODO: imagem do problema/contexto (ex: print de pesquisa, diagrama do gargalo)
  image: {
    src: null, // ex: "/problema.jpg"
    alt: "Print ou diagrama ilustrando o problema de acesso à programação via celular",
  },
};

export const turningPoint = {
  eyebrow: "O Obstáculo e a Virada de Chave",
  title: "O Obstáculo: código rodando não significa problema resolvido",
  paragraphs: [
    "Após estruturar a arquitetura e desenvolver a interface, cheguei à fase mais crítica: a validação. No ambiente acadêmico tradicional, o caminho padrão seria medir a eficiência do sistema através de análises técnicas de servidor ou tempo de resposta.",
    "Foi aí que mudei a estratégia. Eu precisava saber se a ferramenta funcionava para as pessoas, e não apenas no laboratório. Abandonei os testes sistêmicos e foquei 100% no cliente final.",
    "Para testar o engajamento de forma orgânica, recusei a ideia de ir atrás de um grupo de testes pré-selecionado e controlado. Postei o questionário abertamente online e liberei o acesso para voluntários na internet. Toda a validação da plataforma foi baseada exclusivamente em pesquisas de usabilidade e feedbacks reais desses usuários. Eu precisava da prova de fogo do mundo real.",
  ],
  // TODO: link para o questionário/formulário de validação, se ainda estiver acessível
  links: [
    { label: "Ver questionário de validação", url: "#" },
  ],
};

export const results = {
  eyebrow: "Os Resultados e o Impacto",
  title: "Resultados: o impacto provado na prática",
  paragraphs: [
    "A validação orgânica provou que a plataforma atendia ao seu propósito de acessibilidade e usabilidade. Essa abordagem orientada ao usuário final me permitiu concluir a graduação entregando um produto funcional e validado.",
  ],
  stats: [
    {
      value: "9,5",
      label: "Nota na apresentação final",
      detail: "O projeto foi muito bem recebido pela banca examinadora.",
    },
    {
      value: "100%",
      label: "Validação com usuários reais",
      detail: "Dados coletados via formulário aberto ao público, sem grupo controlado.",
    },
    {
      value: "0 → 1",
      label: "De TCC teórico a produto",
      detail: "Da ideia até uma plataforma mobile-first funcional e testada.",
    },
  ],
  learning:
    "O maior aprendizado: o desenvolvimento do Aprenda Python forjou minha mentalidade orientada a produto. Aprendi que assumir a responsabilidade de ponta a ponta significa garantir que a tecnologia entregue valor prático na ponta da linha.",
  // TODO: evidências visuais — fotos da apresentação, gráficos de respostas do formulário, telas do sistema
  // Adicione quantas quiser; cada item vira um card na galeria
  gallery: [
    { src: null, alt: "Tela principal da plataforma Aprenda Python" }, // ex: "/prints/tela-1.jpg"
    { src: null, alt: "Gráfico com respostas do formulário de validação" }, // ex: "/prints/grafico-1.jpg"
    { src: null, alt: "Foto da apresentação do TCC para a banca" }, // ex: "/prints/apresentacao.jpg"
  ],
};

export const closing = {
  eyebrow: "Por que isso importa hoje?",
  title: "Por que isso importa hoje?",
  paragraphs: [
    "Levo essa mesma mentalidade de dono e resiliência para o meu dia a dia corporativo. Seja mapeando processos logísticos de alta escala ou estruturando automações de Inteligência Artificial, meu foco é sempre construir soluções que resolvem gargalos do mundo real, sem depender de ambientes controlados.",
    "É essa energia de execução e foco no cliente que quero levar para a linha de frente da Tractian.",
  ],
  cta: {
    label: "Ver currículo completo",
    url: "#", // TODO: link para o PDF do currículo ou página de contato
  },
};
