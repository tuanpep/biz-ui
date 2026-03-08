# Theming Reference

Guide to customizing and theming Biz UI components.

## Setup

```tsx
import { BizUIThemeProvider, defaultTheme } from "biz-ui";
import "biz-ui/styles";

function App() {
  return (
    <BizUIThemeProvider theme={defaultTheme}>
      <div className="biz-ui">
        <Button>Themed Button</Button>
      </div>
    </BizUIThemeProvider>
  );
}
```

## Theme Structure

```typescript
interface Theme {
  colors: {
    // Brand colors
    brand: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    // Background colors
    background: {
      primary: string;
      secondary: string;
      subtle: string;
    };
    // Text colors
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      inverse: string;
    };
    // Border colors
    border: {
      default: string;
      subtle: string;
    };
    // Semantic colors
    success: string;
    warning: string;
    error: string;
    info: string;
  };
  spacing: {
    // Spacing scale
  };
  typography: {
    // Font families, sizes, weights
  };
  borderRadius: {
    // Border radius values
  };
  shadows: {
    // Shadow values
  };
}
```

## Creating Custom Theme

```tsx
import { BizUIThemeProvider, defaultTheme } from "biz-ui";

const customTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    brand: {
      primary: "#6366f1", // Custom brand color
      secondary: "#8b5cf6",
      tertiary: "#a855f7",
    },
  },
};

function App() {
  return (
    <BizUIThemeProvider theme={customTheme}>
      <div className="biz-ui">
        <Button>Custom Themed</Button>
      </div>
    </BizUIThemeProvider>
  );
}
```

## CSS Variables

Biz UI uses CSS variables for theming. The `biz-ui` className scope provides:

```css
:root {
  /* Brand */
  --biz-color-brand-primary: #0f172a;
  --biz-color-brand-secondary: #334155;
  --biz-color-brand-tertiary: #475569;

  /* Backgrounds */
  --biz-color-bg-primary: #ffffff;
  --biz-color-bg-secondary: #f8fafc;
  --biz-color-bg-subtle: #f1f5f9;

  /* Text */
  --biz-color-text-primary: #0f172a;
  --biz-color-text-secondary: #475569;
  --biz-color-text-disabled: #94a3b8;

  /* Semantic */
  --biz-color-success: #16a34a;
  --biz-color-warning: #ca8a04;
  --biz-color-error: #dc2626;
  --biz-color-info: #2563eb;

  /* Border */
  --biz-color-border-default: #e2e8f0;
  --biz-color-border-subtle: #f1f5f9;

  /* Spacing */
  --biz-spacing-1: 0.25rem;
  --biz-spacing-2: 0.5rem;
  /* ... */

  /* Border Radius */
  --biz-radius-sm: 0.125rem;
  --biz-radius-md: 0.375rem;
  --biz-radius-lg: 0.5rem;
  --biz-radius-full: 9999px;
}
```

## Using Theme in Components

Components automatically use theme values. Access theme programmatically:

```tsx
import { useBizUITheme } from "biz-ui";

function Component() {
  const { theme, prefix } = useBizUITheme();

  return <div style={{ color: theme.colors.text.primary }}>Themed content</div>;
}
```

## Providers

### PrefixProvider

CSS class prefix for isolation:

```tsx
import { PrefixProvider } from "biz-ui";

<PrefixProvider prefix="custom">
  <Button className="custom-Button">Themed</Button>
</PrefixProvider>;
```

### FeatureFlagsProvider

Enable/disable features:

```tsx
import { FeatureFlagsProvider, defaultFeatureFlags } from "biz-ui";

<FeatureFlagsProvider
  flags={{
    ...defaultFeatureFlags,
    newDesign: true,
  }}
>
  <App />
</FeatureFlagsProvider>;
```

## Dark Mode

The theme supports dark mode via CSS variables:

```css
.dark {
  --biz-color-bg-primary: #0f172a;
  --biz-color-text-primary: #f8fafc;
  --biz-color-border-default: #334155;
}
```

Wrap your app in `BizUIThemeProvider` and use the `dark` class on html/body.
