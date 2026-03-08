# Contributing to Biz UI

Thank you for your interest in contributing to Biz UI! This guide will help you get started.

## Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [Bun](https://bun.sh/) >= 1.3 (package manager)

### Getting Started

```bash
# Clone the repository
git clone https://github.com/biz-ui/biz-ui.git
cd biz-ui

# Install dependencies
bun install

# Build all packages
bun run build

# Start Storybook (component development)
bun run storybook

# Run tests
bun run test

# Run linting
bun run lint

# Type checking
bun run check-types
```

## Project Structure

```
biz-ui/
├── packages/
│   └── ui/                          # Main UI component library
│       ├── src/
│       │   ├── lib/
│       │   │   ├── components/      # All React components
│       │   │   │   ├── data-display/
│       │   │   │   ├── feedback/
│       │   │   │   ├── forms/
│       │   │   │   ├── layout/
│       │   │   │   ├── navigation/
│       │   │   │   └── overlays/
│       │   │   ├── core/            # Theme system
│       │   │   ├── hooks/           # Custom React hooks
│       │   │   ├── i18n/            # Internationalization
│       │   │   ├── internal/        # Internal utilities
│       │   │   ├── providers/       # Context providers
│       │   │   ├── styles/          # CSS theme & tokens
│       │   │   ├── types/           # Shared TypeScript types
│       │   │   └── utils/           # Utility functions
│       │   └── index.ts             # Main entry point
│       ├── .storybook/              # Storybook configuration
│       ├── rollup.config.js         # Library build (ESM + CJS)
│       ├── tailwind.config.js       # Tailwind for build & Storybook
│       ├── tailwind.preset.js       # Preset for consumers
│       └── scripts/                 # CSS layer & build scripts
└── turbo.json                       # Turborepo configuration
```

## Build Configuration

The UI package uses **Rollup** (`rollup.config.js`), not tsup or Vite, for the library build:

- **Entry points**: All `src/**/*.{ts,tsx}` except tests, stories, and config.
- **Output**: ESM (`.mjs`) and CJS (`.js`) in `dist/`, with `preserveModules: true` so each component stays a separate file for tree-shaking.
- **Directives**: The `'use client'` directive is preserved for React Server Components.
- **CSS**: Built separately via `npm run build:css` (Tailwind → `dist/styles.css`) and `npm run build:layer` (→ `dist/styles.layer.css` in `@layer biz-ui`).

Scripts: `bun run build` runs clean, Rollup, then CSS steps. Use `bun run dev` for watch mode. Theme and design tokens (colors, radius, spacing, etc.) live in **tailwind.preset.js** only; the local `tailwind.config.js` uses that preset, so edit the preset when changing the design system.

## Creating a New Component

Each component follows a consistent file structure:

```
ComponentName/
├── ComponentName.tsx           # Main component implementation
├── ComponentName.types.ts      # TypeScript interfaces and types
├── ComponentName.variants.ts   # CVA variant definitions
├── ComponentName.stories.tsx   # Storybook stories
└── ComponentName.test.tsx      # Unit tests (or place in __tests__/)
```

### Step-by-Step Guide

1. **Create the component directory** under the appropriate category in `src/lib/components/`.

2. **Define types** (`ComponentName.types.ts`):

   ```tsx
   import type { VariantProps } from "class-variance-authority";
   import type { componentVariants } from "./ComponentName.variants";

   export interface ComponentNameProps
     extends
       React.HTMLAttributes<HTMLDivElement>,
       VariantProps<typeof componentVariants> {
     /** Description of the prop */
     customProp?: string;
   }
   ```

3. **Define variants** (`ComponentName.variants.ts`):

   ```tsx
   import { cva } from "class-variance-authority";

   export const componentVariants = cva("base-classes", {
     variants: {
       variant: {
         default: "default-classes",
         primary: "primary-classes",
       },
       size: {
         sm: "sm-classes",
         md: "md-classes",
         lg: "lg-classes",
       },
     },
     defaultVariants: {
       variant: "default",
       size: "md",
     },
   });
   ```

4. **Implement the component** (`ComponentName.tsx`):

   ```tsx
   import * as React from "react";
   import { cn } from "../../../utils/cn";
   import { componentVariants } from "./ComponentName.variants";
   import type { ComponentNameProps } from "./ComponentName.types";

   const ComponentName = React.forwardRef<HTMLDivElement, ComponentNameProps>(
     ({ className, variant, size, ...props }, ref) => (
       <div
         ref={ref}
         className={cn(componentVariants({ variant, size }), className)}
         {...props}
       />
     ),
   );
   ComponentName.displayName = "ComponentName";

   export { ComponentName };
   export type { ComponentNameProps } from "./ComponentName.types";
   ```

5. **Add Storybook stories** (`ComponentName.stories.tsx`):

   ```tsx
   import type { Meta, StoryObj } from "@storybook/react";
   import { ComponentName } from "./ComponentName";

   const meta: Meta<typeof ComponentName> = {
     title: "Category/ComponentName",
     component: ComponentName,
     tags: ["autodocs"],
   };
   export default meta;

   type Story = StoryObj<typeof ComponentName>;

   export const Default: Story = {
     args: {},
   };
   ```

6. **Write tests**: Prefer `ComponentName.test.tsx` next to the component (co-located). Tests in a `__tests__/` subfolder are also accepted; keep one style per component and document any new test file location in your PR.

   ```tsx
   import { render, screen } from "@testing-library/react";
   import { describe, it, expect } from "vitest";
   import { ComponentName } from "./ComponentName";

   describe("ComponentName", () => {
     it("renders correctly", () => {
       render(<ComponentName data-testid="test">Content</ComponentName>);
       expect(screen.getByTestId("test")).toBeInTheDocument();
     });
   });
   ```

7. **Export from index** — Add the component to `src/lib/components/index.ts`.

## Design Principles

- **Accessibility first**: All components must meet WCAG 2.1 AA standards
- **Radix UI primitives**: Use Radix UI for complex interaction patterns
- **CVA for variants**: Use `class-variance-authority` for component variants
- **Tailwind CSS**: Use Tailwind utility classes, composed via `cn()` helper
- **CSS variables**: Use the design token system in `theme.css`
- **forwardRef**: All components must forward refs
- **displayName**: All components must set `displayName`

## Testing & coverage

- **Run tests:** `bun run test` (or `npm run test` from repo root).
- **Run tests with coverage:** `bun run test:coverage` in `packages/ui` (or `npm run test:coverage`). Requires `@vitest/coverage-v8`; report is written to `coverage/` (text, JSON, HTML). Use this to spot untested code when adding or changing components.
- **Watch mode:** `bun run test:watch` for development.
- **E2E (Playwright):** From `packages/ui`, run `npm run build-storybook` once, then `npm run e2e`. Playwright starts a local server for the static Storybook build and runs smoke tests. For CI use `npm run e2e:ci` (builds Storybook, installs browser, then runs tests). Add new scenarios in `packages/ui/e2e/`.
- **API docs (TypeDoc):** From `packages/ui`, run `npm run docs:api` to generate API documentation from TypeScript types. Output is written to `packages/ui/docs/api/`. Useful for consumers who prefer static type docs alongside Storybook.

## Versioning & deprecation

- We follow [Semantic Versioning](https://semver.org/). See [CHANGELOG.md](../CHANGELOG.md) for release history.
- **Deprecated APIs** (e.g. `OceanThemeProvider`): They remain exported for backward compatibility and are marked with JSDoc `@deprecated`. Prefer the new names (`BizUIThemeProvider`, etc.). Deprecated exports may be removed in a future major version; we will announce any removal in the CHANGELOG and release notes.

## Code Style

- TypeScript strict mode
- ESLint + Prettier enforced (runs automatically on commit via husky)
- Conventional commit messages recommended

## Pull Request Guidelines

1. Create a feature branch from `main`
2. Ensure all tests pass: `bun run test`
3. Ensure no lint errors: `bun run lint`
4. Ensure types are correct: `bun run check-types`
5. Update Storybook stories if adding/modifying components
6. Write descriptive commit messages
7. Open a PR with a clear description of changes

## Release checklist

Before cutting a release, from the repo root:

1. Bump version in `packages/ui/package.json` (and root if applicable).
2. Update [CHANGELOG.md](../CHANGELOG.md): move items from `[Unreleased]` into a new version heading and add the release date.
3. Run `bun run ci` (or equivalent: build, lint, check-types, test).
4. Optionally run `bun run e2e:ci` and `npm run size -w biz-ui` (bundle size check in `packages/ui`).
5. Commit, tag (e.g. `v0.2.0`), push, and publish per your release process.

## Bundle size

From `packages/ui`, run `npm run size` after building to check ESM output size against the limit defined in `package.json` (`sizeLimit`). Adjust the limit there if the library grows intentionally.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).
