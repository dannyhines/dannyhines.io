<div align="center">
<img alt="logo" src="/public/favicon/favicon-96x96.png">
  <h1>DannyHines.io</h1>
  <p>My personal website and blog, written in Typescript with Next.js.</p>
  <p></p>
</div>

## Features

This repo was created using Theodorus Clarence's
[NextJS + TailwindCSS starter](https://www.codefactor.io/repository/github/theodorusclarence/ts-nextjs-tailwind-starter),
which includes a bunch of features you'd normally copy + paste from previous projects,
including:

- 💨 Tailwind CSS 3 — My new favorite UI framework, with included CSS Variables for colors
- 💎 Pre-built Components — Components that will **automatically adapt** with your brand
  color, [check here for the demo](https://tsnext-tw.thcl.dev/components)
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- 📏 ESLint + Prettier — Automated with Github Actions, with added rules to **auto sort**
  your imports
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- 🤖 Conventional Commit Lint — Forces conventional commit messages to properly document
  every change you make (feat, fix, docs, chore, style, refactor, ci, test, perf, revert,
  vercel)
- 👀 Default Open Graph — Awesome open graph generated using
  [og.thcl.dev](https://github.com/theodorusclarence/og), fork it and deploy!
- 🗺 Site Map — Automatically generate sitemap.xml

See the 👉
[feature details and changelog](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter/blob/main/CHANGELOG.md)
👈 for more.

## Getting Started

### 1. Clone this template using one of the three ways:

```bash
   npx create-next-app -e https://github.com/theodorusclarence/ts-nextjs-tailwind-starter project-name
```

### 2. Install dependencies

It is encouraged to use **yarn** so the husky hooks can work properly.

```bash
yarn install
```

### 3. Run the development server

You can start the server using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You
can start editing the page by modifying `src/pages/index.tsx`.

### 4. Change defaults

There are some things you need to change including title, urls, favicons, etc.

Find all comments with !STARTERCONF, then follow the guide.

Don't forget to change the package name in package.json

### 5. Commit Message Convention

This starter is using
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to
use it to commit changes.
