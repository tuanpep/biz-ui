# @biz-ui/react

A comprehensive React UI component library built on Radix UI and Tailwind CSS.

## Features

- **60+ Components**: A wide range of components including buttons, forms, dialogs, navigation, and more
- **Radix UI Primitives**: Built on top of Radix UI for accessibility and interaction patterns
- **Tailwind CSS**: Utility-first styling with a customizable design system
- **TypeScript**: Full TypeScript support with comprehensive types
- **Tree-shakeable**: Only import the components you need
- **SSR-friendly**: Zero runtime overhead, perfect for server-side rendering
- **Dark mode**: Built-in dark mode support

## Installation

```bash
npm install @biz-ui/react
# or
yarn add @biz-ui/react
# or
pnpm add @biz-ui/react
```

## Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom class-variance-authority clsx tailwind-merge lucide-react date-fns tailwindcss-animate tailwindcss
```

And the Radix UI primitives your components need:

```bash
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-tooltip
```

## Usage

### 1. Import Styles

```tsx
import "@biz-ui/react/styles";
```

### 2. Wrap with Theme Provider (Optional)

```tsx
import { ThemeProvider } from "@biz-ui/react";

function App() {
  return (
    <ThemeProvider>
      <div className="biz-ui">{/* Your app components */}</div>
    </ThemeProvider>
  );
}
```

### 3. Use Components

```tsx
import { Button, Card, Input } from "@biz-ui/react";

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter your email" />
      <Button variant="primary">Subscribe</Button>
    </Card>
  );
}
```

## Tailwind Configuration

Add the Biz UI preset to your `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  presets: [require("@biz-ui/react/tailwind.preset")],
  // Your custom config
};
```

## Dark Mode

Toggle dark mode by adding the `dark` class to your container:

```tsx
<div className="biz-ui dark">{/* Dark mode components */}</div>
```

## CSS Variables

Biz UI uses CSS variables for theming. Override them to customize the look:

```css
/* In your CSS */
.biz-ui {
  --primary: #your-color;
  --radius: 8px;
  /* ... more variables */
}
```

## Component Variants

Import component variants to create custom components:

```tsx
import { buttonVariants, cn } from "@biz-ui/react/variants";

function CustomButton({ variant, size, className, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
```

## Components

### Form Components

Button, IconButton, ButtonGroup, Input, Textarea, Search, Checkbox, RadioGroup, Switch, Select, MultiSelect, ComboBox, DatePicker, TimePicker, Calendar, Slider, FileUploader, NumberInput, PinInput, FormField, Label

### Layout Components

Card, Flex, Grid, Stack, Container, Center, AspectRatio, ScrollArea, Separator, Portal, SimpleGrid, VisuallyHidden

### Data Display Components

Avatar, Badge, Tag, Table, List, Icon, Typography, Accordion, Kbd

### Feedback Components

Alert, Toast, Tooltip, Progress, Loading, Skeleton, ProgressIndicator, EmptyState, Banner

### Navigation Components

Tabs, Pagination, Breadcrumb, DropdownMenu, Link, TreeView, Stepper

### Overlay Components

Dialog, AlertDialog, Sheet, Popover, HoverCard, Tooltip, Collapsible, ComposedModal

## Documentation

For comprehensive documentation, see:

- [CSS Styling Guide](./docs/CSS_STYLING_GUIDE.md)
- [Build Summary](./docs/BUILD_SUMMARY.md)
- [CSS Audit Report](./docs/CSS_AUDIT_REPORT.md)

## TypeScript

Full TypeScript support is included. Type definitions are automatically available.

## License

MIT

## Contributing

Contributions are welcome! Please read our contributing guidelines for more information.

## Links

- [GitHub Repository](https://github.com/biz-ui/biz-ui)
- [Issue Tracker](https://github.com/biz-ui/biz-ui/issues)
- [Changelog](https://github.com/biz-ui/biz-ui/blob/main/CHANGELOG.md)
