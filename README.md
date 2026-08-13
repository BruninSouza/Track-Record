# Aprenda Python — Estudo de Caso (Track Record)

Página one-page em formato de **case/track record**, construída com **React**, **Vite** e **Tailwind CSS**, contando a história da construção do guia interativo "Aprenda Python" (TCC de Bruno S. Costa, UFPB): problema → virada de chave → resultados → conclusão.

> Conteúdo baseado no TCC original. O link do LinkedIn ainda precisa ser preenchido por você — veja o `TODO` em `src/data/content.js`.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Navegação

- **Desktop:** rail fixo à esquerda, com a seção ativa destacada.
- **Celular:** barra fixa no topo mostrando a seção atual; tocar em "Índice" abre a lista completa de seções em tela cheia.

O conteúdo também é revelado com uma animação suave ao rolar a página (respeitando configurações de acessibilidade do sistema, como "reduzir movimento").

## Personalizando o conteúdo

Todo o texto e os links ficam em um único arquivo:

```
src/data/content.js
```

Procure por `TODO` dentro dele — são exatamente os pontos que ainda faltam:

- Confirmar/ajustar o link do repositório no GitHub
- Adicionar seu LinkedIn

## Estrutura do projeto

```
src/
├── components/
│   ├── Hero.jsx          Seção 1 — abertura
│   ├── Problem.jsx        Seção 2 — contexto e desafio
│   ├── TurningPoint.jsx    Seção 3 — obstáculo e virada de chave
│   ├── Results.jsx        Seção 4 — resultados e impacto
│   ├── Closing.jsx        Seção 5 — conclusão e contato
│   ├── IndexRail.jsx      Navegação lateral fixa (desktop)
│   ├── MobileNav.jsx      Navegação em barra fixa + overlay (celular)
│   ├── Reveal.jsx          Animação de entrada ao rolar a página
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
