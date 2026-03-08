# RFC-0001: Codebase Refactoring and Organization

| Status   | Draft       |
| -------- | ----------- |
| Author   | AI Agent    |
| Created  | 2026-03-08  |
| Updated  | 2026-03-08  |
| Priority | High        |
| Scope    | packages/ui |

## Summary

This RFC proposes a comprehensive refactoring of the Biz UI codebase to improve code organization, standardize component patterns, enhance test coverage, and simplify the API surface. The refactoring addresses inconsistencies in file structure, scattered related files, verbose import paths, and testing difficulties.

## Motivation

### Problem Statement

The current codebase has several issues affecting developer productivity and code maintainability:

1. **Inconsistent File Structure**: Not all components follow the same file pattern. Some have `.types.ts`, `.variants.ts` files while others don't.

2. **Scattered Related Files**: Related files (component, types, variants, tests, stories) are sometimes hard to locate within the directory structure.

3. **Verbose Import Paths**: Importing utilities requires long paths like `import { cn } from '../../../utils/cn'`.

4. **Low Test Coverage**: Only 28 test files exist for 77 components (~36% coverage), making refactoring risky.

5. **Inconsistent Export Patterns**: Some components export from barrel files, others export directly.

### Goals

1. **Improve Test Coverage**: Achieve ≥80% test coverage for all components
2. **Reorganize Directory Structure**: Create a predictable, scalable structure
3. **Standardize Patterns**: Ensure all components follow consistent conventions
4. **Improve Exports/API**: Simplify imports with clear, intuitive paths

### Non-Goals

- Changing component APIs or behavior (only internal organization)
- Adding new components or features
- Changing the build system or bundler
- Modifying the design system or tokens

## Technical Design

### Phase 1: Directory Structure Reorganization

#### Current Structure

```
src/lib/
├── components/
│   ├── data-display/
│   │   └── Button/           # Inconsistent: Button is in forms, not data-display
│   ├── forms/
│   │   └── Button/
│   ├── feedback/
│   ├── layout/
│   ├── navigation/
│   └── overlays/
├── core/
├── hooks/
├── providers/
├── i18n/
├── utils/
├── internal/
├── variants/
├── types/
└── styles/
```

#### Proposed Structure

```
src/
├── components/              # All components, flattened with co-location
│   ├── accordion/
│   │   ├── Accordion.tsx
│   │   ├── Accordion.types.ts
│   │   ├── Accordion.variants.ts
│   │   ├── Accordion.test.tsx
│   │   ├── Accordion.stories.tsx
│   │   └── index.ts
│   ├── alert/
│   ├── alert-dialog/
│   ├── avatar/
│   ├── ... (all 77 components)
│   └── index.ts             # Barrel export for all components
│
├── hooks/                   # All custom hooks
│   ├── use-controllable-state.ts
│   ├── use-controllable-state.test.ts
│   ├── use-outside-click.ts
│   ├── ... (all hooks)
│   └── index.ts
│
├── providers/               # Context providers
│   ├── prefix-provider.tsx
│   ├── feature-flags-provider.tsx
│   ├── theme-provider.tsx
│   └── index.ts
│
├── utils/                   # Utility functions
│   ├── cn.ts
│   ├── cn.test.ts
│   ├── create-context.tsx
│   └── index.ts
│
├── internal/                # Internal utilities (not exported)
│   ├── keyboard/
│   ├── focus/
│   ├── events/
│   ├── ids/
│   ├── warnings/
│   └── index.ts
│
├── styles/                  # CSS and theming
│   ├── theme.css
│   └── index.ts
│
├── types/                   # Shared TypeScript types
│   └── index.ts
│
├── test/                    # Test utilities
│   ├── utils.tsx
│   ├── mocks/
│   └── index.ts
│
└── index.ts                 # Main package export
```

#### Key Changes

1. **Flatten Component Categories**: Remove category subdirectories (data-display, forms, etc.) in favor of a flat structure with consistent naming.

2. **Co-locate Related Files**: All files for a component live in the same directory:
   - `Component.tsx` - Implementation
   - `Component.types.ts` - Type definitions
   - `Component.variants.ts` - CVA variants (if applicable)
   - `Component.test.tsx` - Unit tests
   - `Component.stories.tsx` - Storybook stories
   - `index.ts` - Exports

3. **kebab-case Directories**: Use kebab-case for directory names (`alert-dialog/` not `AlertDialog/`)

4. **Centralized Hooks**: Move all hooks to `/hooks` with co-located tests

5. **Clear Internal Boundary**: Keep `/internal` for non-public utilities

### Phase 2: Standardized Component Pattern

#### Required Files (Every Component)

```
component-name/
├── ComponentName.tsx        # REQUIRED: Main implementation
├── ComponentName.types.ts   # REQUIRED: Type definitions
├── index.ts                 # REQUIRED: Public exports
└── ComponentName.test.tsx   # REQUIRED: Unit tests
```

#### Optional Files (When Applicable)

```
├── ComponentName.variants.ts  # If using CVA variants
├── ComponentName.stories.tsx  # For Storybook documentation
├── ComponentName.context.tsx  # If component has context
├── ComponentName.utils.ts     # If component has helper functions
```

#### Component Template

```tsx
// ComponentName.tsx
import { forwardRef, memo } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils";
import type { ComponentNameProps } from "./ComponentName.types";
import { componentNameVariants } from "./ComponentName.variants";

const displayName = "ComponentName";

export const ComponentName = memo(
  forwardRef<HTMLDivElement, ComponentNameProps>(
    ({ className, asChild, ...props }, ref) => {
      const Component = asChild ? Slot : "div";

      return (
        <Component
          ref={ref}
          className={cn(componentNameVariants(), className)}
          {...props}
        />
      );
    },
  ),
);

ComponentName.displayName = displayName;
```

```tsx
// ComponentName.types.ts
import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { componentNameVariants } from "./ComponentName.variants";

export interface ComponentNameProps
  extends
    HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentNameVariants> {
  /** Child elements */
  children?: ReactNode;
  /** Render as a different element */
  asChild?: boolean;
}
```

```ts
// index.ts
export { ComponentName } from "./ComponentName";
export type { ComponentNameProps } from "./ComponentName.types";
export { componentNameVariants } from "./ComponentName.variants";
```

### Phase 3: Test Coverage Strategy

#### Test File Requirements

1. **Every component must have a test file**: `ComponentName.test.tsx`
2. **Every hook must have a test file**: `use-hook-name.test.ts`
3. **Every utility must have a test file**: `utility-name.test.ts`

#### Test Structure

```tsx
// ComponentName.test.tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "../../test/utils";
import { ComponentName } from "./ComponentName";

describe("ComponentName", () => {
  describe("rendering", () => {
    it("renders correctly", () => {
      render(<ComponentName>Content</ComponentName>);
      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("applies custom className", () => {
      render(<ComponentName className="custom">Content</ComponentName>);
      expect(screen.getByText("Content")).toHaveClass("custom");
    });
  });

  describe("variants", () => {
    it.each([
      ["size", "sm", "class-sm"],
      ["size", "md", "class-md"],
      ["size", "lg", "class-lg"],
    ])("applies %s=%s variant", (prop, value, expectedClass) => {
      render(<ComponentName {...{ [prop]: value }}>Content</ComponentName>);
      expect(screen.getByText("Content")).toHaveClass(expectedClass);
    });
  });

  describe("accessibility", () => {
    it("has correct ARIA attributes", () => {
      render(<ComponentName>Content</ComponentName>);
      // Assert ARIA
    });
  });

  describe("ref forwarding", () => {
    it("forwards ref correctly", () => {
      const ref = { current: null };
      render(<ComponentName ref={ref}>Content</ComponentName>);
      expect(ref.current).toBeInstanceOf(HTMLElement);
    });
  });
});
```

#### Coverage Targets

| Category   | Target Coverage |
| ---------- | --------------- |
| Components | 80%             |
| Hooks      | 90%             |
| Utils      | 90%             |
| Internal   | 70%             |

### Phase 4: Export/API Improvements

#### Package Exports (package.json)

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    },
    "./components": {
      "types": "./dist/components/index.d.ts",
      "import": "./dist/components/index.mjs",
      "require": "./dist/components/index.js"
    },
    "./hooks": {
      "types": "./dist/hooks/index.d.ts",
      "import": "./dist/hooks/index.mjs",
      "require": "./dist/hooks/index.js"
    },
    "./utils": {
      "types": "./dist/utils/index.d.ts",
      "import": "./dist/utils/index.mjs",
      "require": "./dist/utils/index.js"
    },
    "./providers": {
      "types": "./dist/providers/index.d.ts",
      "import": "./dist/providers/index.mjs",
      "require": "./dist/providers/index.js"
    },
    "./styles": "./dist/styles.css",
    "./styles.layer": "./dist/styles.layer.css",
    "./tailwind": "./tailwind.preset.js"
  }
}
```

#### Import Examples (After)

```tsx
// Components
import { Button, Input, Select } from "biz-ui";

// Or from subpath
import { Button } from "biz-ui/components";

// Hooks
import { useControllableState, useOutsideClick } from "biz-ui/hooks";

// Utils
import { cn, createContext } from "biz-ui/utils";

// Providers
import { BizUIProvider, ThemeProvider } from "biz-ui/providers";
```

## Implementation Plan

### Step 1: Create New Directory Structure (Non-Breaking)

1. Create new `/src/components/` flat structure
2. Create `/src/hooks/` with all hooks
3. Update barrel exports
4. **No changes to existing imports yet**

### Step 2: Migrate Components (Incremental)

1. Pick one component category (e.g., forms)
2. For each component:
   - Create new directory structure
   - Add missing `.types.ts` or `.variants.ts` files
   - Add/update test file
   - Update exports
3. Run tests to verify
4. Commit category

### Step 3: Update Internal Imports

1. Update all `import` statements to use new paths
2. Update `rollup.config.js` if needed
3. Run full test suite

### Step 4: Update Package Exports

1. Add new export paths to `package.json`
2. Update TypeScript paths in `tsconfig.json`
3. Build and verify output

### Step 5: Update Documentation

1. Update `CONTRIBUTING.md` with new structure
2. Update Storybook stories if paths changed
3. Update internal documentation

### Step 6: Remove Old Structure

1. Remove old category directories
2. Clean up empty directories
3. Final verification

## Test Strategy

### Unit Tests

- Every component must have test coverage ≥80%
- Every hook must have test coverage ≥90%
- Every utility must have test coverage ≥90%

### Integration Tests

- Verify imports work from all export paths
- Verify tree-shaking still works
- Verify TypeScript types resolve correctly

### Manual Verification

- Run Storybook and verify all stories work
- Run example app and verify components render
- Check bundle size hasn't increased significantly

## Risks and Mitigations

| Risk                      | Impact | Mitigation                                       |
| ------------------------- | ------ | ------------------------------------------------ |
| Breaking existing imports | High   | Maintain backward compatibility during migration |
| Missing test coverage     | Medium | Add tests before moving components               |
| Build system changes      | Medium | Test build after each phase                      |
| Large diff for review     | Low    | Commit by category for easier review             |

## Success Criteria

- [ ] All components follow standardized file structure
- [ ] Test coverage ≥80% for components
- [ ] Test coverage ≥90% for hooks and utils
- [ ] All imports work from new paths
- [ ] No breaking changes to public API
- [ ] Documentation updated
- [ ] CI/CD pipeline passes

## References

- Current component structure: `/packages/ui/src/lib/components/`
- Current hooks: `/packages/ui/src/lib/hooks/`
- Build config: `/packages/ui/rollup.config.js`
- Test config: `/packages/ui/vitest.config.ts`

---

## Appendix: Component Migration Checklist

For each component, verify:

- [ ] Directory uses kebab-case
- [ ] `ComponentName.tsx` exists
- [ ] `ComponentName.types.ts` exists
- [ ] `ComponentName.variants.ts` exists (if applicable)
- [ ] `ComponentName.test.tsx` exists with ≥80% coverage
- [ ] `ComponentName.stories.tsx` exists
- [ ] `index.ts` exports component, types, and variants
- [ ] Component uses `forwardRef` and `memo`
- [ ] `displayName` is set
- [ ] All imports updated to relative paths
