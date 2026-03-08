---
title: Button
description: A versatile button component with multiple variants, sizes, and states.
category: components
componentType: forms
order: 1
---

# Button

Buttons are used to trigger actions or events, such as submitting forms, opening dialogs, or performing other actions.

## Import

```tsx
import { Button } from "biz-ui";
```

## Usage

```tsx
<Button>Click me</Button>
```

## Variants

Buttons come in several variants to indicate different types of actions:

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

## Sizes

Four sizes are available:

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

## With Icons

Buttons can include icons on either side:

```tsx
import { Mail, ChevronRight } from 'lucide-react';

<Button leftIcon={<Mail />}>Send Email</Button>
<Button rightIcon={<ChevronRight />}>Continue</Button>
```

## Loading State

Buttons can display a loading state:

```tsx
<Button loading>Saving...</Button>
<Button loading loadingText="Processing...">
  Submit
</Button>
```

## As Child

Use the `asChild` prop to render the button as a different element:

```tsx
import { Link } from "react-router-dom";

<Button asChild>
  <Link to="/dashboard">Go to Dashboard</Link>
</Button>;
```

## API Reference

### Props

| Prop          | Type                                                                                                                               | Default     | Description                                    |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------- |
| `variant`     | `'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'destructive' \| 'outline' \| 'ghost' \| 'link' \| 'success' \| 'warning'` | `'default'` | The visual style of the button                 |
| `size`        | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'icon'`                                                                                           | `'md'`      | The size of the button                         |
| `loading`     | `boolean`                                                                                                                          | `false`     | Shows loading state                            |
| `loadingText` | `string`                                                                                                                           | -           | Text to show when loading                      |
| `leftIcon`    | `ReactNode`                                                                                                                        | -           | Icon to display before the button text         |
| `rightIcon`   | `ReactNode`                                                                                                                        | -           | Icon to display after the button text          |
| `asChild`     | `boolean`                                                                                                                          | `false`     | Render as a different element using Radix Slot |
| `disabled`    | `boolean`                                                                                                                          | `false`     | Disables the button                            |
| `className`   | `string`                                                                                                                           | -           | Additional CSS classes                         |

## Accessibility

- Uses native `<button>` element by default
- Proper `aria-disabled` attribute when disabled
- Keyboard accessible with Tab and Enter/Space
- Focus visible styles

## Related Components

- [IconButton](/docs/components/forms/icon-button) - Button with only an icon
- [ButtonGroup](/docs/components/forms/button-group) - Group of buttons
- [Link](/docs/components/navigation/link) - For navigation actions
