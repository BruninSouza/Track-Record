# Portfólio Pessoal

Site de portfólio construído com **React**, **Vite** e **Tailwind CSS**.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Personalizando o conteúdo

Todo o conteúdo do site (nome, sobre, projetos, habilidades, contato) fica em um único arquivo:

```
src/data/content.js
```

Edite esse arquivo com as suas informações — não é necessário mexer em nenhum componente.

## Estrutura do projeto

```
src/
├── components/     # Componentes visuais (Hero, About, Work, Skills, Contact...)
├── data/
│   └── content.js  # Único arquivo que você precisa editar
├── App.jsx         # Monta as seções da página
├── main.jsx        # Ponto de entrada do React
└── index.css       # Tema (cores e fontes) via Tailwind CSS v4
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
# Track-Record
