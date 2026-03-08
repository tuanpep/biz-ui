---
name: biz-ui
description: Build React user interfaces using the Biz UI component library. Use when working with Biz UI, creating UI components, building dashboards, or implementing forms with Radix UI primitives and Tailwind CSS.
---

# Biz UI

A React component library with 70+ accessible components built on Radix UI primitives and Tailwind CSS.

## Quick Reference

### Setup

```tsx
import { BizUIThemeProvider, defaultTheme, Button } from "biz-ui";
import "biz-ui/styles";

function App() {
  return (
    <BizUIThemeProvider theme={defaultTheme}>
      <div className="biz-ui">
        <Button>Click me</Button>
      </div>
    </BizUIThemeProvider>
  );
}
```

### Component Categories

| Category         | Components                                                                                                                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Layout**       | Card, Flex, Grid, ScrollArea, Separator, Stack, AspectRatio, Center, Container, Divider, Portal, SimpleGrid, VisuallyHidden                                                                                              |
| **Forms**        | Button, Input, Select, Checkbox, RadioGroup, Switch, Slider, Textarea, DatePicker, TimePicker, FileUploader, ComboBox, MultiSelect, NumberInput, PinInput, Search, FormField, InputGroup, Label, IconButton, ButtonGroup |
| **Navigation**   | Tabs, Breadcrumb, DropdownMenu, Pagination, Link, Stepper, TreeView                                                                                                                                                      |
| **Feedback**     | Alert, Toast, Banner, EmptyState, Loading, Progress, ProgressIndicator, Skeleton                                                                                                                                         |
| **Data Display** | Avatar, Badge, Tag, Table, Accordion, Calendar, Typography, Icon, Kbd, List                                                                                                                                              |
| **Overlays**     | Dialog, Sheet, Popover, Tooltip, AlertDialog, HoverCard, Collapsible, ComposedModal                                                                                                                                      |

### Key Exports

- **Core**: `BizUIThemeProvider`, `defaultTheme`, `useBizUITheme()`
- **Providers**: `PrefixProvider`, `FeatureFlagsProvider`
- **Hooks**: `useToast()`, `usePrefix()`, `useFeatureFlag()`

### Common Props

```tsx
// Variant props
<Button variant="primary | secondary | tertiary | ghost | danger" />
<Alert variant="default | info | success | warning | destructive" />
<Badge variant="primary | secondary | success | warning | error | outline" />

// Size props
<Button size="sm | md | lg | icon" />
<Input size="sm | md | lg" />
<Checkbox size="sm | md | lg" />
```

### Key Patterns

**Card composition:**

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

**Dialog composition:**

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogTitle>Title</DialogTitle>
    <DialogDescription>Description</DialogDescription>
    <DialogClose />
  </DialogContent>
</Dialog>
```

## Detailed Reference

For complete component APIs, props, and advanced usage, see:

- [references/COMPONENTS.md](references/COMPONENTS.md) - Components index with quick import
- [references/layout.md](references/layout.md) - Layout components
- [references/forms.md](references/forms.md) - Forms components
- [references/navigation.md](references/navigation.md) - Navigation components
- [references/feedback.md](references/feedback.md) - Feedback components
- [references/data-display.md](references/data-display.md) - Data Display components
- [references/overlays.md](references/overlays.md) - Overlays components
- [references/THEMING.md](references/THEMING.md) - Custom themes, CSS variables, providers

## Available Resources

- [Biz UI Website](http://localhost:4321) - Docs and playground
- Storybook: `bun run storybook` from packages/ui
- Source: `packages/ui/src/lib/components/`
