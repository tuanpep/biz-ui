# RFC-0002: Official Website for Biz UI

| Status   | Implemented  |
| -------- | ------------ |
| Author   | AI Agent     |
| Created  | 2026-03-08   |
| Updated  | 2026-03-08   |
| Priority | High         |
| Scope    | apps/website |

## Summary

This RFC proposes a comprehensive refactoring and enhancement of the Biz UI website to create a professional, production-ready official website. The website will serve as the primary documentation and showcase platform for the Biz UI component library, following industry best practices observed in leading React component library websites.

## Motivation

### Problem Statement

The current website implementation has several limitations:

1. **Monolithic Structure**: All components are in a single `App.tsx` file (~400 lines), making maintenance difficult.

2. **No Routing**: Despite having `react-router-dom` as a dependency, there's no routing setup for documentation pages.

3. **Missing Documentation**: No component documentation pages, API references, or usage guides.

4. **Limited Component Showcase**: Static component preview without interactive code examples or copy functionality.

5. **No Search**: Missing search functionality for finding components and documentation.

6. **Incomplete Navigation**: Navigation links are placeholders without actual pages.

### Goals

1. **Professional Documentation Site**: Create a comprehensive documentation site with component pages, guides, and API references.

2. **Interactive Component Showcase**: Enable users to see, interact with, and copy code for all components.

3. **Better Developer Experience**: Provide search, dark/light mode, and responsive design.

4. **Scalable Architecture**: Modular component structure for easy maintenance and expansion.

### Non-Goals

- Building a full-featured CMS or blog
- User authentication or accounts
- Paid/premium content tiers
- Real-time collaboration features

## Technical Design

### Phase 1: Project Structure Reorganization

#### Current Structure

```
apps/website/
├── src/
│   ├── App.tsx              # All components in one file
│   ├── main.tsx
│   ├── index.css
│   └── components/
│       ├── theme-provider.tsx
│       └── theme-toggle.tsx
├── package.json
└── ...
```

#### Proposed Structure

```
apps/website/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── index.ts
│   │   ├── ui/
│   │   │   ├── CodeBlock.tsx
│   │   │   ├── ComponentCard.tsx
│   │   │   ├── SearchDialog.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── index.ts
│   │   ├── marketing/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── ComponentShowcase.tsx
│   │   │   ├── Installation.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── index.ts
│   │   ├── docs/
│   │   │   ├── DocsLayout.tsx
│   │   │   ├── DocsSidebar.tsx
│   │   │   ├── ComponentDocs.tsx
│   │   │   ├── APIReference.tsx
│   │   │   └── index.ts
│   │   └── providers/
│   │       ├── ThemeProvider.tsx
│   │       └── index.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Docs.tsx
│   │   ├── Components.tsx
│   │   ├── GettingStarted.tsx
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useCopyToClipboard.ts
│   │   ├── useSearch.ts
│   │   └── index.ts
│   ├── lib/
│   │   ├── component-data.ts
│   │   ├── navigation.ts
│   │   └── utils.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── public/
│   └── ...
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

### Phase 2: Routing Architecture

#### Route Structure

```tsx
// Route configuration
const routes = [
  { path: "/", element: <Home /> },
  { path: "/docs", element: <DocsLayout /> },
  { path: "/docs/getting-started", element: <GettingStarted /> },
  { path: "/docs/installation", element: <Installation /> },
  { path: "/docs/theming", element: <Theming /> },
  { path: "/components", element: <Components /> },
  { path: "/components/:category", element: <ComponentCategory /> },
  { path: "/components/:category/:name", element: <ComponentDocs /> },
];
```

#### Navigation Data Structure

```typescript
// lib/navigation.ts
export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    title: "Getting Started",
    href: "/docs/getting-started",
    children: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
      { title: "Theming", href: "/docs/theming" },
    ],
  },
  {
    title: "Components",
    href: "/components",
    children: [
      { title: "Forms", href: "/components/forms", badge: "16" },
      { title: "Layout", href: "/components/layout", badge: "13" },
      { title: "Navigation", href: "/components/navigation", badge: "7" },
      { title: "Data Display", href: "/components/data-display", badge: "11" },
      { title: "Feedback", href: "/components/feedback", badge: "8" },
      { title: "Overlays", href: "/components/overlays", badge: "8" },
    ],
  },
];
```

### Phase 3: Component Documentation System

#### Component Data Structure

```typescript
// lib/component-data.ts
export interface ComponentMeta {
  name: string;
  title: string;
  description: string;
  category: ComponentCategory;
  status: "stable" | "beta" | "alpha" | "deprecated";
  since: string;
  examples: ComponentExample[];
  props: PropDefinition[];
}

export interface ComponentExample {
  name: string;
  description?: string;
  code: string;
  preview: React.ReactNode;
}

export interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
  required: boolean;
}

export type ComponentCategory =
  | "forms"
  | "layout"
  | "navigation"
  | "data-display"
  | "feedback"
  | "overlays";
```

#### Component Documentation Template

```tsx
// components/docs/ComponentDocs.tsx
interface ComponentDocsProps {
  meta: ComponentMeta;
}

export function ComponentDocs({ meta }: ComponentDocsProps) {
  return (
    <DocsLayout>
      <div className="space-y-8">
        {/* Header */}
        <header>
          <h1>{meta.title}</h1>
          <p>{meta.description}</p>
          <Badge>{meta.status}</Badge>
        </header>

        {/* Examples */}
        <section>
          <h2>Examples</h2>
          {meta.examples.map((example) => (
            <CodePreview
              key={example.name}
              code={example.code}
              preview={example.preview}
            />
          ))}
        </section>

        {/* API Reference */}
        <section>
          <h2>API Reference</h2>
          <PropsTable props={meta.props} />
        </section>
      </div>
    </DocsLayout>
  );
}
```

### Phase 4: Key Components

#### CodeBlock Component

```tsx
// Features:
// - Syntax highlighting
// - Copy to clipboard
// - Line numbers (optional)
// - File name display
// - Multiple language tabs
interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  showLineNumbers?: boolean;
  showCopyButton?: boolean;
}
```

#### SearchDialog Component

```tsx
// Features:
// - Cmd/Ctrl + K shortcut
// - Fuzzy search across components and docs
// - Keyboard navigation
// - Recent searches
interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
```

#### ComponentCard Component

```tsx
// Features:
// - Interactive preview
// - Code toggle
// - Copy code button
// - Link to full docs
interface ComponentCardProps {
  name: string;
  category: string;
  preview: React.ReactNode;
  code: string;
}
```

### Phase 5: Homepage Sections

Based on research of popular component library websites:

1. **Hero Section**
   - Clear headline and value proposition
   - Version badge
   - Primary and secondary CTAs
   - Interactive component preview

2. **Features Section**
   - 4 key features with icons
   - Accessibility, TypeScript, Theming, CSS Layers

3. **Component Showcase**
   - Grid of component categories
   - Preview cards with hover effects
   - Category counts

4. **Installation Section**
   - Package manager tabs (npm, yarn, pnpm)
   - Copy commands
   - Quick start code example

5. **Social Proof** (Optional)
   - GitHub stars
   - Download counts
   - Testimonials

6. **CTA Section**
   - Final call to action
   - Gradient background

### Phase 6: Styling Enhancements

#### Additional CSS Features

```css
/* Code syntax highlighting */
.highlight {
}

/* Sidebar styles */
.sidebar {
}
.sidebar-item {
}
.sidebar-section {
}

/* Docs content styles */
.prose {
}
.prose h1 {
}
.prose h2 {
}
.prose code {
}
.prose table {
}

/* Animation improvements */
.animate-fade-in {
}
.animate-slide-in {
}
```

## Implementation Plan

### Step 1: Setup Routing (Non-Breaking)

1. Install react-router-dom (already present)
2. Create basic route structure
3. Create Layout components
4. Test navigation

### Step 2: Extract Components

1. Create `components/marketing/` directory
2. Extract Hero, Features, Components, Installation, CTA from App.tsx
3. Create `components/layout/` directory
4. Extract Header, Footer components
5. Update imports in App.tsx

### Step 3: Create Documentation Pages

1. Create DocsLayout component
2. Create sidebar navigation
3. Create Getting Started pages
4. Create component documentation template

### Step 4: Implement Code Display

1. Create CodeBlock component
2. Implement copy to clipboard
3. Add syntax highlighting (optional: using Prism/Shiki)
4. Create CodePreview component

### Step 5: Add Search

1. Create SearchDialog component
2. Implement keyboard shortcut (Cmd+K)
3. Create search index from component data
4. Implement fuzzy search

### Step 6: Enhance Styling

1. Update CSS for documentation layout
2. Add prose styles for markdown content
3. Improve mobile responsiveness
4. Add print styles

## Test Strategy

### Unit Tests

- Test routing configuration
- Test component rendering
- Test copy to clipboard functionality
- Test search functionality

### Integration Tests

- Test navigation between pages
- Test theme switching persistence
- Test responsive layout

### E2E Tests

- Test complete user journeys
- Test component documentation viewing
- Test code copying workflow

## Risks and Mitigations

| Risk                             | Impact | Mitigation                                           |
| -------------------------------- | ------ | ---------------------------------------------------- |
| Large refactoring scope          | High   | Incremental migration, keep existing site functional |
| Performance impact               | Medium | Code splitting, lazy loading for routes              |
| Search implementation complexity | Medium | Start with simple client-side search                 |
| Syntax highlighting bundle size  | Low    | Use lightweight solution or lazy load                |

## Success Criteria

- [ ] All components extracted from App.tsx
- [ ] Routing working for all documentation pages
- [ ] Component documentation pages render correctly
- [ ] Code blocks with copy functionality work
- [ ] Search dialog opens with Cmd+K
- [ ] Dark/light mode works across all pages
- [ ] Mobile responsive design
- [ ] Lighthouse score ≥ 90 for performance

## References

- [Shadcn UI](https://ui.shadcn.com/) - Design and layout inspiration
- [Chakra UI](https://chakra-ui.com/) - Documentation structure
- [Radix UI](https://www.radix-ui.com/) - Component showcase patterns
- Existing RFC: RFC-0001 for codebase conventions

---

## Appendix: Component Categories

### Forms (16 components)

- Button, ButtonGroup, Checkbox, ComboBox, DatePicker, FileUploader, FormField, IconButton, Input, InputGroup, Label, MultiSelect, NumberInput, PinInput, RadioGroup, Search, Select, Slider, Switch, Textarea, TimePicker

### Layout (13 components)

- AspectRatio, Card, Center, Container, Flex, Grid, Portal, ScrollArea, Separator, SimpleGrid, Stack, VisuallyHidden

### Navigation (7 components)

- Breadcrumb, DropdownMenu, Link, Pagination, Stepper, Tabs, TreeView

### Data Display (11 components)

- Accordion, Avatar, Badge, Calendar, Icon, Kbd, List, Table, Tag, Typography

### Feedback (8 components)

- Alert, Banner, EmptyState, Loading, Progress, ProgressIndicator, Skeleton, Toast

### Overlays (8 components)

- AlertDialog, Collapsible, ComposedModal, Dialog, HoverCard, Popover, Sheet, Tooltip
