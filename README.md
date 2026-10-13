# portfolio

A personal developer portfolio, built as a static single-page React + TypeScript app.

- **Main page**: a vertically scrolling page about me as a developer — Hero, Work Experience, Education, Projects, Tech Stack.
- **Side panels**: two optional panels, reachable via the vertical tabs docked to the left (Language Learning) and right (Cybersecurity) edges of the screen. They slide in on click/swipe and never interrupt the main scroll for someone who ignores them.

## Stack

Vite + React + TypeScript, plain CSS (no component library). No backend — deployed as a static site via GitHub Pages.

Note: this currently requires JavaScript to render (it's a client-side SPA, not statically prerendered).

## Local development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Filling in your content

All real content lives in two files — everything else is layout/behavior:

- `src/data/developer.ts` — name, role, tagline, contact links, work experience, education, projects, tech stack.
- `src/data/sidePanels.ts` — Language Learning and Cybersecurity panel content.

Replace the placeholder strings there; you don't need to touch any component code.

## Deployment

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys automatically on every push to `main`.

One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**. After that, pushes to `main` will publish to `https://nandor.pro/`.
