# Biz UI

A comprehensive React UI component library built on Radix UI and Tailwind CSS.

## Features

- **60+ Components**: A wide range of components including buttons, forms, dialogs, navigation, and more
- **Radix UI Primitives**: Built on top of Radix UI for accessibility and interaction patterns
- **Tailwind CSS**: Utility-first styling with a customizable design system
- **TypeScript**: Full TypeScript support with comprehensive types
- **Storybook**: Interactive component documentation and development
- **Tree-shakeable**: Only import the components you need

## Installation

```bash
npm install biz-ui
# or
yarn add biz-ui
# or
pnpm add biz-ui
# or
bun add biz-ui
```

## Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom class-variance-authority clsx tailwind-merge lucide-react date-fns tailwindcss-animate
```

And the Radix UI primitives your components need:

```bash
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-tooltip
```

## Usage

1. Import the CSS in your app:

```tsx
import "biz-ui/styles";
```

2. Wrap your components with the Biz UI provider:

```tsx
import { ThemeProvider } from "biz-ui";

function App() {
  return (
    <ThemeProvider>
      <div className="biz-ui">{/* Your app components */}</div>
    </ThemeProvider>
  );
}
```

3. Use the components:

```tsx
import { Button, Card, Input } from "biz-ui";

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter your email" />
      <Button>Subscribe</Button>
    </Card>
  );
}
```

## Repository

This repository is a Turborepo monorepo:

- **`packages/ui`** – Biz UI component library
- **`apps/website`** – Documentation site and enterprise demo (at `/examples/enterprise-demo`)

## Development

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Run development mode
npm run dev

# Run the website (docs + examples)
npm run dev:website

# Run Storybook (from repo root)
npm run storybook

# Run linting
npm run lint

# Type checking
npm run check-types
```

## Components

### Layout & Display

- Avatar, Badge, Breadcrumb, Button, Card, Flex, Grid, Icon, IconButton, Link, Loading, Progress, ProgressIndicator, Stack, Table, Tag

### Overlays & Modals

- Dialog, AlertDialog, Popover

### Form Components

- Checkbox, ComboBox, DatePicker, Input, Label, MultiSelect, RadioGroup, Search, Select, Slider, Switch, Textarea, FormField, TimePicker, Calendar

### Feedback

- Alert, Skeleton, Toast, Tooltip

### Navigation

- DropdownMenu, Pagination, Tabs

### Data Display

- Accordion, ScrollArea, Separator, Collapsible, TreeView

### Typography

- Text components with various sizes and styles

## License

MIT
