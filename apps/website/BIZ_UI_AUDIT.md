# Biz UI Website – Component Audit

## Goal

Ensure all UI in `apps/website` uses components from the `biz-ui` library.

## Current State

### Already using biz-ui

| File              | Components used                                                          |
| ----------------- | ------------------------------------------------------------------------ |
| `LandingPage.tsx` | Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge |
| `Header.tsx`      | Button, IconButton                                                       |
| `Footer.tsx`      | Separator                                                                |
| `Sidebar.tsx`     | ScrollArea                                                               |

### Gaps (native HTML / custom UI)

| File                | Element                                                     | Replace with (biz-ui)                     |
| ------------------- | ----------------------------------------------------------- | ----------------------------------------- |
| **LandingPage.tsx** | Copy install command `<button>` + inline SVG                | `IconButton`                              |
| **LandingPage.tsx** | Component category links: plain `<a>` + custom card styling | `Card` + `Link` (optional)                |
| **Header.tsx**      | Search trigger: `<button>` + `<kbd>`                        | `Button` + `Kbd`                          |
| **SearchModal.tsx** | Entire modal (backdrop + content div)                       | `Dialog`, `DialogContent`                 |
| **SearchModal.tsx** | Search `<input>`                                            | `Input`                                   |
| **SearchModal.tsx** | Loading SVG spinner                                         | `Spinner` (from Loading)                  |
| **SearchModal.tsx** | `<kbd>` hints                                               | `Kbd`                                     |
| **Playground.tsx**  | View mode toggle `<button>`s                                | `Button` or `ButtonGroup`                 |
| **Playground.tsx**  | Reset / Copy `<button>`s + SVGs                             | `IconButton`                              |
| **Playground.tsx**  | Code `<textarea>`                                           | `Textarea`                                |
| **Playground.tsx**  | Error state `<div>`s                                        | `Alert`, `AlertTitle`, `AlertDescription` |

### Unused / alternate implementations

- _(Removed)_ Static `Header.astro`, `Footer.astro`, `Sidebar.astro` were removed; the app uses the React `.tsx` layout components only.

## Biz UI components to use

- **Layout:** Card, Separator, ScrollArea
- **Forms:** Button, IconButton, Input, Textarea
- **Navigation:** Link
- **Feedback:** Alert, AlertTitle, AlertDescription, Spinner (from Loading)
- **Data display:** Kbd
- **Overlays:** Dialog, DialogContent, DialogHeader, DialogTitle (optional), DialogDescription (optional)

## Implementation order

1. LandingPage – copy button → IconButton
2. Header – search button → Button + Kbd
3. SearchModal – Dialog, Input, Kbd, Spinner
4. Playground – Button/ButtonGroup, IconButton, Textarea, Alert

## Build note

The website’s `astro.config.mjs` resolves `biz-ui` to `packages/ui/src/index.ts` so that Vite/Rollup can resolve ESM re-exports correctly. Without this alias, the built package’s CJS-style `.mjs` output can cause “X is not exported” errors. For production or published builds you may want to fix the biz-ui Rollup config to output real ESM in `.mjs` and remove this alias.
