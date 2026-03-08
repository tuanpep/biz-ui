---
title: Installation
description: Learn how to install and configure Biz UI in your React project.
category: getting-started
order: 2
---

# Installation

Get started with Biz UI by installing the package and configuring your project.

## Requirements

- React 18 or later
- Node.js 18 or later
- Tailwind CSS 3.4 or later

## Install Package

Choose your preferred package manager:

```bash
# npm
npm install biz-ui

# yarn
yarn add biz-ui

# pnpm
pnpm add biz-ui
```

## Configure Tailwind CSS

Biz UI is built with Tailwind CSS. You need to configure your `tailwind.config.js` to include Biz UI's paths:

```js
// tailwind.config.js
const bizUIConfig = require("biz-ui/tailwind.config");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/biz-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [bizUIConfig],
  // Your custom config...
};
```

## Import Styles

Import the required styles in your main CSS file or entry point:

```css
/* globals.css */
@import "biz-ui/styles";
```

Or in your JavaScript/TypeScript entry file:

```tsx
// main.tsx
import "biz-ui/styles";
```

## Setup Theme Provider (Optional)

For custom theme overrides, wrap your app with `BizUIThemeProvider`:

```tsx
import { BizUIThemeProvider, defaultTheme } from "biz-ui";

function App({ children }) {
  return (
    <BizUIThemeProvider theme={defaultTheme}>{children}</BizUIThemeProvider>
  );
}
```

Components also work without the provider when you define the same CSS variables (e.g. `--primary`, `--background`) in your own styles.

## Verify Installation

Create a simple component to verify everything is working:

```tsx
import { Button } from "biz-ui";

function App() {
  return (
    <div className="p-8">
      <Button>Hello, Biz UI!</Button>
    </div>
  );
}

export default App;
```

## Next Steps

- [Theming](/docs/getting-started/theming) - Learn how to customize the theme
- [Accessibility](/docs/getting-started/accessibility) - Understanding accessibility features
- [Components](/docs/components) - Explore available components
