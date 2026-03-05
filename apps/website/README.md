# Biz UI Website

Official marketing and documentation site for [Biz UI](https://github.com/biz-ui/biz-ui), built with [Astro](https://astro.build).

## Setup

From the repository root:

```bash
bun install
```

Then build the UI package (required for the website to use it):

```bash
bun run build --filter=biz-ui
```

## Development

From the repository root:

```bash
bun run dev:website
```

Or from this directory:

```bash
bun run dev
```

The site will be available at `http://localhost:4321`.

## Build

From the repository root:

```bash
bun run build:website
```

Or from this directory:

```bash
bun run build
```

Static output is written to `dist/`.

## Structure

- `src/pages/` — Routes (landing, docs, playground)
- `src/layouts/` — BaseLayout (marketing), DocsLayout (docs with sidebar)
- `src/components/` — Header, Footer, Sidebar, and React preview components
- `src/components/preview/` — Wrappers that render Biz UI components with ThemeWrapper

The site uses the local `biz-ui` package from the monorepo. Ensure `packages/ui` is built before running or building the website.
