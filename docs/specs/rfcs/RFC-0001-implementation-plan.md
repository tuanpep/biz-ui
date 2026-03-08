# RFC-0001 Implementation Plan

## Analysis Summary

### Current State

| Metric                         | Value          | Target       |
| ------------------------------ | -------------- | ------------ |
| Total Components               | 68             | 68           |
| Components with `.types.ts`    | 44 (64.7%)     | 68 (100%)    |
| Components with `.variants.ts` | 36 (52.9%)     | As needed    |
| Components with `.test.tsx`    | 23 (33.8%)     | 68 (100%)    |
| Components with `.stories.tsx` | 61 (89.7%)     | 68 (100%)    |
| Hooks tested                   | 11/16 (68.75%) | 16/16 (100%) |
| Utils tested                   | 0/2 (0%)       | 2/2 (100%)   |

### Identified Inconsistencies

1. **Test file location**: Some in root, some in `__tests__/` subdirectory
2. **Test file naming**: 2 files use kebab-case (`multi-select.test.tsx`)
3. **Duplicate test**: Checkbox has tests in both locations
4. **Missing types**: 24 components without `.types.ts`
5. **Missing tests**: 45 components without tests
6. **Missing stories**: 7 components without `.stories.tsx`

---

## Implementation Tasks

### Task 1: Standardize Test File Location

**Decision**: All tests should be in component root (not `__tests__/` subdirectory)

**Actions**:

1. Move tests from `__tests__/` to root for:
   - [ ] `FileUploader`
   - [ ] `NumberInput`
   - [ ] `RadioGroup`
   - [ ] `Search`
   - [ ] `Select`
   - [ ] `Slider`
2. Remove duplicate: `Checkbox/Checkbox.test.tsx` (keep `__tests__` version or merge)
3. Rename kebab-case tests:
   - [ ] `multi-select.test.tsx` → `MultiSelect.test.tsx`
   - [ ] `time-picker.test.tsx` → `TimePicker.test.tsx`

### Task 2: Add Missing `.types.ts` Files

**24 components need types files**:

| Category     | Components                                                         |
| ------------ | ------------------------------------------------------------------ |
| data-display | Kbd, List, Icon                                                    |
| feedback     | Banner, EmptyState, Spinner                                        |
| forms        | ButtonGroup, InputGroup, PinInput                                  |
| layout       | AspectRatio, Center, Container, Portal, SimpleGrid, VisuallyHidden |
| navigation   | Stepper                                                            |
| overlays     | Collapsible, HoverCard, Sheet                                      |

**Template**:

```typescript
// ComponentName.types.ts
import type { HTMLAttributes, ReactNode } from "react";

export interface ComponentNameProps extends HTMLAttributes<HTMLElement> {
  /** Description */
  children?: ReactNode;
}
```

### Task 3: Add Missing Tests

**45 components need tests** (by priority):

#### High Priority (Forms & Interactive Components)

- [ ] IconButton
- [ ] Label
- [ ] Textarea
- [ ] DatePicker
- [ ] PinInput
- [ ] ButtonGroup
- [ ] InputGroup

#### Medium Priority (Navigation & Overlays)

- [ ] Link
- [ ] Pagination
- [ ] DropdownMenu
- [ ] Breadcrumb
- [ ] Popover
- [ ] Tooltip
- [ ] AlertDialog (has test, verify coverage)
- [ ] Dialog (has test, verify coverage)
- [ ] ComposedModal
- [ ] Collapsible
- [ ] HoverCard
- [ ] Sheet
- [ ] Stepper
- [ ] TreeView

#### Lower Priority (Layout & Display)

- [ ] Accordion
- [ ] Avatar (has test, verify coverage)
- [ ] Badge (has test, verify coverage)
- [ ] Calendar
- [ ] Icon
- [ ] Kbd
- [ ] List
- [ ] Table (has test, verify coverage)
- [ ] Tag
- [ ] Typography
- [ ] Banner
- [ ] EmptyState
- [ ] Loading
- [ ] Progress
- [ ] ProgressIndicator
- [ ] Skeleton
- [ ] Spinner
- [ ] Toast
- [ ] AspectRatio
- [ ] Card
- [ ] Center
- [ ] Container
- [ ] Flex
- [ ] Grid
- [ ] Portal
- [ ] ScrollArea
- [ ] Separator
- [ ] SimpleGrid
- [ ] Stack

### Task 4: Add Missing Stories

**7 components need stories**:

- [ ] Icon (data-display)
- [ ] TreeView (navigation)
- [ ] DatePicker (forms)
- [ ] TimePicker (forms) - has stories? verify

### Task 5: Add Hook/Utils Tests

**Missing hook tests** (5 hooks):

- [ ] `useOutsideClick`
- [ ] `useId`
- [ ] `useIsomorphicLayoutEffect`
- [ ] `useMount`/`useUnmount`
- [ ] `useFormField`

**Missing utils tests** (2 utils):

- [ ] `cn`
- [ ] `createContext`

**Missing internal tests** (4 files):

- [ ] `events.ts`
- [ ] `polymorphic.ts` (partial)
- [ ] `component-utils.ts`
- [ ] `use-normalized-input-props.tsx`

### Task 6: Add Missing `.variants.ts` Files

**32 components may need variants** (evaluate each):

Components without variants that might benefit:

- Layout components (AspectRatio, Center, Container, etc.) - likely don't need variants
- Overlay components (AlertDialog, Dialog, Popover, etc.) - evaluate for size/position variants

---

## Execution Order

### Phase 4A: Foundation (Do First)

1. Standardize test file locations (Task 1)
2. Add missing `.types.ts` files (Task 2)
3. Add hook/utils tests (Task 5)

### Phase 4B: Component Tests

4. Add high-priority component tests (Task 3 - High Priority)
5. Add medium-priority component tests (Task 3 - Medium Priority)
6. Add lower-priority component tests (Task 3 - Lower Priority)

### Phase 4C: Polish

7. Add missing stories (Task 4)
8. Evaluate and add variants (Task 6)

---

## Test Template

```tsx
// ComponentName.test.tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "../../test/utils";
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

    it("spreads additional props", () => {
      render(<ComponentName data-testid="test">Content</ComponentName>);
      expect(screen.getByTestId("test")).toBeInTheDocument();
    });
  });

  describe("variants", () => {
    // Add variant tests if component has variants
  });

  describe("accessibility", () => {
    it("has no accessibility violations", () => {
      // Add a11y tests
    });
  });

  describe("ref forwarding", () => {
    it("forwards ref to the underlying element", () => {
      const ref = { current: null };
      render(<ComponentName ref={ref}>Content</ComponentName>);
      expect(ref.current).toBeInstanceOf(HTMLElement);
    });
  });
});
```

---

## Progress Tracking

| Task                      | Total  | Done  | Progress |
| ------------------------- | ------ | ----- | -------- |
| Standardize test location | 8      | 0     | 0%       |
| Add missing types         | 24     | 0     | 0%       |
| Add missing tests         | 45     | 0     | 0%       |
| Add missing stories       | 7      | 0     | 0%       |
| Add hook/utils tests      | 11     | 0     | 0%       |
| **Total**                 | **95** | **0** | **0%**   |

---

## Risk Assessment

| Risk                      | Probability | Impact | Mitigation                          |
| ------------------------- | ----------- | ------ | ----------------------------------- |
| Breaking existing imports | Low         | High   | Keep existing exports, add new ones |
| Test complexity           | Medium      | Medium | Start with simple rendering tests   |
| Time overrun              | Medium      | Medium | Prioritize by component importance  |
| Missing edge cases        | Medium      | Low    | Iteratively improve coverage        |

---

## Definition of Done

For each component:

- [ ] Has `.tsx` main file
- [ ] Has `.types.ts` file
- [ ] Has `.variants.ts` file (if applicable)
- [ ] Has `.test.tsx` file with ≥80% coverage
- [ ] Has `.stories.tsx` file
- [ ] Has `index.ts` exporting all public APIs
- [ ] Uses `forwardRef` and `memo`
- [ ] Has `displayName` set
- [ ] All tests pass
