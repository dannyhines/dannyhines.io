<h1>
  <img alt="logo" src="/public/favicon/favicon-32x32.png" height="27" width="27">
  DannyHines.io
</h1>

![GitHub branch checks state](https://img.shields.io/github/checks-status/danielchines/dannyhines.io/main)
![GitHub repo size](https://img.shields.io/github/repo-size/danielchines/dannyhines.io)
![GitHub](https://img.shields.io/github/license/danielchines/dannyhines.io)
![GitHub issues](https://img.shields.io/github/issues/danielchines/dannyhines.io)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/danielchines/dannyhines.io)

My personal website written in Typescript, which includes a blog and library of code
snippets.

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

## Getting Started

### Use create-next-app with the template

You can clone this repo, but I recommend starting with
[the template](https://www.codefactor.io/repository/github/theodorusclarence/ts-nextjs-tailwind-starter)
so it's easier to replace the starter code. You can use the Github UI using that link, or
with the `create-next-app` template:

```bash
   npx create-next-app -e https://github.com/theodorusclarence/ts-nextjs-tailwind-starter project-name
```

Then you'll need to change the name in package.json and search for "!STARTERCONF" to
configure it for your website.

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

## Performance

I take pride in making my websites performant and accessible, so I had to do the same for my
personal website. Check out the
[Page Speed Insights](https://pagespeed.web.dev/report?url=https%3A%2F%2Fdannyhines.io%2F&form_factor=desktop).

![Website Performance](https://res.cloudinary.com/dannyhines/image/upload/v1667869441/dannyhines.io/website-performance.png)
