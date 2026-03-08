---
title: Theming
description: Learn how to customize the look and feel of Biz UI components with CSS variables and Tailwind CSS.
category: getting-started
order: 3
---

# Theming

Biz UI uses CSS variables for theming, making it easy to customize the look and feel of all components.

## CSS Variables

Biz UI defines a comprehensive set of CSS variables that control the appearance of components:

```css
:root {
  /* Colors */
  --background: 0 0% 100%;
  --foreground: 221 29% 10%;
  --primary: 221 83% 53%;
  --primary-foreground: 0 0% 100%;

  /* ... more variables */
}

.dark {
  --background: 221 29% 10%;
  --foreground: 0 0% 98%;
  --primary: 221 83% 60%;
  --primary-foreground: 0 0% 100%;
}
```

## Customizing Colors

Override the CSS variables in your global stylesheet:

```css
:root {
  --primary: 262 83% 58%; /* Purple instead of blue */
  --primary-foreground: 0 0% 100%;
}

.dark {
  --primary: 262 83% 65%;
  --primary-foreground: 0 0% 100%;
}
```

## Using BizUIThemeProvider (Optional)

For programmatic theme overrides (e.g. merging a custom theme object), use `BizUIThemeProvider`:

```tsx
import { BizUIThemeProvider, defaultTheme } from "biz-ui";

function App({ children }) {
  return (
    <BizUIThemeProvider theme={defaultTheme} injectCssVariables>
      {children}
    </BizUIThemeProvider>
  );
}
```

### Props

| Prop               | Type                  | Default | Description                                |
| ------------------ | --------------------- | ------- | ------------------------------------------ |
| theme              | `Partial<BizUITheme>` | -       | Custom theme to merge with default theme   |
| injectCssVariables | `boolean`             | `false` | Inject theme as CSS variables into the DOM |
| children           | `ReactNode`           | -       | Child components                           |

Theme switching (light/dark) is typically done in your app by toggling a `.dark` class on the root and defining `:root` and `.dark` CSS variables, as in the CSS Variables section above.

## Custom Color Palette

Biz UI includes a full color palette that you can customize:

```css
:root {
  /* Blue palette */
  --biz-blue-0: #edf5ff;
  --biz-blue-1: #dbeaff;
  --biz-blue-2: #c0daff;
  /* ... */

  /* Gray palette */
  --biz-gray-0: #f4f4f4;
  --biz-gray-1: #e8e8e8;
  /* ... */
}
```

## Component-Specific Styling

Each component accepts a `className` prop for additional styling:

```tsx
<Button className="bg-gradient-to-r from-purple-500 to-pink-500">
  Gradient Button
</Button>
```

## Next Steps

- [Accessibility](/docs/getting-started/accessibility) - Learn about accessibility features
- [Components](/docs/components) - Explore all components
