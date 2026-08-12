# Aprenda Python — Estudo de Caso (Track Record)

Página one-page em formato de **case/track record**, construída com **React**, **Vite** e **Tailwind CSS**, contando a história da construção da plataforma "Aprenda Python": problema → virada de chave → resultados → conclusão.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Personalizando o conteúdo

Todo o texto, os links e os espaços de imagem ficam em um único arquivo:

```
src/data/content.js
```

Procure por `TODO` dentro dele — são exatamente os pontos que você precisa preencher:

- Seus links reais (GitHub do projeto, LinkedIn, e-mail, currículo)
- Os espaços de imagem (`image.src` / `gallery`)

## Como adicionar as imagens

1. Coloque o arquivo de imagem dentro da pasta `public/` (ex: `public/hero.jpg`).
2. Em `src/data/content.js`, troque `src: null` por `src: "/hero.jpg"`.
3. A imagem substitui automaticamente o placeholder tracejado.

Existem espaços de imagem em:
- **Hero** — sua foto ou um mockup da plataforma no celular (`hero.image`)
- **O Problema** — print ou diagrama do contexto (`problem.image`)
- **Resultados** — galeria com até 3 evidências: telas do sistema, gráfico do formulário, foto da apresentação (`results.gallery`)

## Estrutura do projeto

```
src/
├── components/
│   ├── Hero.jsx          Seção 1 — abertura
│   ├── Problem.jsx        Seção 2 — contexto e desafio
│   ├── TurningPoint.jsx    Seção 3 — obstáculo e virada de chave
│   ├── Results.jsx        Seção 4 — resultados e impacto
│   ├── Closing.jsx        Seção 5 — conclusão e contato
│   ├── ImageSlot.jsx      Placeholder de imagem reutilizável
│   ├── IndexRail.jsx      Navegação lateral fixa (índice das seções)
│   └── Footer.jsx
├── data/
│   └── content.js         ⭐ único arquivo que você edita
├── App.jsx                Monta as seções e controla o índice ativo
├── main.jsx                Ponto de entrada do React
└── index.css                Tema (cores e fontes) via Tailwind CSS v4
```

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/` pronta para deploy.

## Deploy no Vercel

1. Suba este projeto para um repositório no GitHub.
2. Acesse [vercel.com](https://vercel.com) e faça login com sua conta do GitHub.
3. Clique em **Add New → Project** e selecione o repositório.
4. O Vercel detecta automaticamente que é um projeto Vite — não é necessário alterar nada.
5. Clique em **Deploy**.

A cada `git push` na branch principal, o Vercel gera um novo deploy automaticamente.
