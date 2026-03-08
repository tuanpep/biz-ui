---
title: Introduction
description: Get started with Biz UI, a comprehensive React component library built with Radix UI and Tailwind CSS.
category: getting-started
order: 1
---

# Introduction

Biz UI is a comprehensive React component library built with **Radix UI** and **Tailwind CSS**. It provides a set of accessible, customizable, and production-ready components for building modern web applications.

## Why Biz UI?

### Accessibility First

Built on top of Radix UI primitives, Biz UI ensures WCAG 2.1 AA compliance out of the box. All components are keyboard navigable, screen reader friendly, and follow WAI-ARIA best practices.

### Developer Experience

- **TypeScript Support**: Full TypeScript support with comprehensive type definitions
- **Tree-shakeable**: Import only what you need for optimal bundle size
- **Customizable**: Built with Tailwind CSS for easy styling and theming

### Production Ready

- **60+ Components**: A comprehensive collection of components for any use case
- **20+ Hooks**: Utility hooks for common patterns
- **Theme Support**: Powerful theming system with light and dark modes

## Quick Start

```bash
# npm
npm install biz-ui

# yarn
yarn add biz-ui

# pnpm
pnpm add biz-ui
```

## Basic Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "biz-ui";
import "biz-ui/styles";

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Biz UI</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## What's Next?

- [Installation](/docs/getting-started/installation) - Learn how to install and configure Biz UI
- [Theming](/docs/getting-started/theming) - Customize the look and feel of your components
- [Components](/docs/components) - Explore all available components
