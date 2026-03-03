# Biz-UI Gap Implementation Plan

This document outlines the plan to close all identified gaps between Biz-UI and Carbon React.

## Overview

| Category | Components/Features | Priority | Estimated Effort |
|----------|---------------------|----------|------------------|
| DataTable | 22 sub-components | P0 | 2-3 weeks |
| UIShell | 20 components | P0 | 1-2 weeks |
| Internal Hooks | 12 hooks | P1 | 3-5 days |
| Form Enhancements | 15 features | P1 | 1 week |
| Fluid Components | 7 components | P2 | 3-5 days |
| Missing Components | 10 components | P2 | 1-2 weeks |
| AI Components | 5 components | P3 | 3-5 days |
| Theme System | Dark mode, RTL | P2 | 1 week |

---

## Phase 1: Foundation (Week 1-2)

### 1.1 Internal Hooks

**Files to create:**

```
packages/ui/src/lib/internal/
├── usePrefix.ts              # CSS class prefix hook
├── useMergedRefs.ts          # Merge multiple refs
├── useControllableState.ts   # Controlled/uncontrolled state
├── useOutsideClick.ts        # Detect outside clicks
├── useResizeObserver.ts      # Observe element resize
├── useAttachedMenu.ts        # Menu attachment logic
├── useDelayedState.ts        # Delayed state updates
├── useMatchMedia.ts          # Media query matching
├── useOverflowItems.ts       # Overflow item detection
├── usePresence.ts            # Animation presence
├── useNormalizedInputProps.tsx # Normalized form props
└── usePreviousValue.ts       # Previous value tracking
```

**Implementation Details:**

#### useMergedRefs
```typescript
// Following Carbon's pattern
export function useMergedRefs<T>(...refs: Array<React.Ref<T> | undefined>): React.RefCallback<T> {
  return React.useCallback((node: T) => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<T>).current = node;
      }
    });
  }, refs);
}
```

#### useControllableState
```typescript
// Following Carbon's pattern
export function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: {
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
}): [T, (value: T | ((prev: T) => T)) => void] {
  const [state, setState] = React.useState(defaultValue ?? value);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : state;

  const setValue = React.useCallback(
    (newValue: T | ((prev: T) => T)) => {
      const resolvedValue = typeof newValue === 'function'
        ? (newValue as (prev: T) => T)(currentValue)
        : newValue;

      if (!isControlled) {
        setState(resolvedValue);
      }
      onChange?.(resolvedValue);
    },
    [isControlled, currentValue, onChange]
  );

  return [currentValue, setValue];
}
```

#### usePrefix
```typescript
// Following Carbon's pattern
import { createContext, useContext } from 'react';

const PrefixContext = createContext('biz-ui');

export function usePrefix(): string {
  return useContext(PrefixContext);
}

export const PrefixProvider = PrefixContext.Provider;
```

#### useOutsideClick
```typescript
// Following Carbon's pattern
export function useOutsideClick(
  refs: React.RefObject<HTMLElement>[],
  callback: (event: MouseEvent | PointerEvent) => void
) {
  React.useEffect(() => {
    const handleClick = (event: MouseEvent | PointerEvent) => {
      const target = event.target as Node;
      const isOutside = refs.every(
        ref => ref.current && !ref.current.contains(target)
      );
      if (isOutside) {
        callback(event);
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('pointerdown', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('pointerdown', handleClick);
    };
  }, [refs, callback]);
}
```

---

### 1.2 Form Component Enhancements

**Components to update:** Checkbox, Input, Select, TextArea, ComboBox, RadioGroup, Switch

**New props to add:**

```typescript
// Common form props (following Carbon's pattern)
interface FormComponentProps {
  // Existing props...

  // New props
  warn?: boolean;           // Warning state
  warnText?: ReactNode;     // Warning message
  hideLabel?: boolean;      // Visually hide label
  readOnly?: boolean;       // Read-only state
  helperText?: ReactNode;   // Helper text below input
  decorator?: ReactNode;    // Decorator element (AI label, etc.)
}
```

**Example Checkbox update:**

```typescript
// Checkbox.types.ts
export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: ReactNode;
  description?: ReactNode;  // Renamed from helperText for consistency
  helperText?: ReactNode;   // Alias for description
  error?: ReactNode;        // Invalid text
  warn?: boolean;           // NEW: Warning state
  warnText?: ReactNode;     // NEW: Warning message
  hideLabel?: boolean;      // NEW: Hide label visually
  readOnly?: boolean;       // NEW: Read-only state
  decorator?: ReactNode;    // NEW: Decorator element
  variant?: 'default' | 'destructive' | 'success';
  size?: 'sm' | 'md' | 'lg';
}
```

---

## Phase 2: DataTable (Week 3-4)

### 2.1 DataTable Sub-components

**Current state:** 8 basic components (Table, TableHeader, TableBody, etc.)

**Target state:** 30+ components with full functionality

**New components to add:**

```
packages/ui/src/lib/components/data-table/
├── DataTable.tsx              # Main container with state management
├── Table.tsx                  # Base table (existing, move here)
├── TableHeader.tsx            # Header row (existing, move here)
├── TableBody.tsx              # Body rows (existing, move here)
├── TableRow.tsx               # Row (existing, move here)
├── TableHead.tsx              # Header cell (existing, move here)
├── TableCell.tsx              # Body cell (existing, move here)
├── TableContainer.tsx         # NEW: Wrapper with title/description
├── TableToolbar.tsx           # NEW: Toolbar container
├── TableToolbarContent.tsx    # NEW: Toolbar content wrapper
├── TableToolbarSearch.tsx     # NEW: Search input
├── TableToolbarMenu.tsx       # NEW: Toolbar dropdown menu
├── TableToolbarAction.tsx     # NEW: Toolbar action button
├── TableBatchActions.tsx      # NEW: Batch action bar
├── TableBatchAction.tsx       # NEW: Batch action button
├── TableSelectAll.tsx         # NEW: Select all checkbox
├── TableSelectRow.tsx         # NEW: Row selection checkbox
├── TableExpandHeader.tsx      # NEW: Expand all header
├── TableExpandRow.tsx         # NEW: Expandable row
├── TableExpandedRow.tsx       # NEW: Expanded content row
├── TableDecoratorRow.tsx      # NEW: Decorator row
├── TableActionList.tsx        # NEW: Action list container
└── index.ts                   # Exports
```

**DataTable Props:**

```typescript
interface DataTableProps<RowType, ColTypes extends any[]> {
  headers: DataTableHeader[];
  rows: DataTableRow<ColTypes>[];
  children: (renderProps: DataTableRenderProps) => ReactElement;

  // Features
  isSortable?: boolean;
  sortRow?: SortRowFn;
  filterRows?: FilterRowsFn;
  stickyHeader?: boolean;
  useZebraStyles?: boolean;
  useStaticWidth?: boolean;
  overflowMenuOnHover?: boolean;
  radio?: boolean;  // Radio selection vs checkbox

  // Size
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  // i18n
  translateWithId?: (id: string) => string;
}

interface DataTableHeader {
  key: string;
  header: ReactNode;
  isSortable?: boolean;
  decorator?: ReactElement;
}

interface DataTableRow<T extends any[]> {
  id: string;
  cells: DataTableCell<T>[];
  disabled?: boolean;
  isExpanded?: boolean;
  isSelected?: boolean;
}
```

**DataTable Render Props:**

```typescript
interface DataTableRenderProps {
  // Data
  rows: DataTableRow[];
  headers: DataTableHeader[];
  selectedRows: DataTableRow[];

  // Prop getters
  getHeaderProps: (options) => object;
  getRowProps: (options) => object;
  getSelectionProps: (options) => object;
  getBatchActionProps: (options) => object;
  getTableProps: () => object;
  getCellProps: (options) => object;

  // Actions
  onInputChange: (event) => void;
  sortBy: (headerKey: string) => void;
  selectAll: () => void;
  selectRow: (rowId: string) => void;
  expandRow: (rowId: string) => void;
  expandAll: () => void;
}
```

---

## Phase 3: UIShell (Week 5-6)

### 3.1 Header Components

```
packages/ui/src/lib/components/ui-shell/
├── Header/
│   ├── Header.tsx             # Main header container
│   ├── HeaderContainer.tsx    # State management wrapper
│   ├── HeaderName.tsx         # Product/app name
│   ├── HeaderNavigation.tsx   # Navigation container
│   ├── HeaderMenu.tsx         # Dropdown menu
│   ├── HeaderMenuItem.tsx     # Menu item
│   ├── HeaderMenuButton.tsx   # Mobile menu toggle
│   ├── HeaderGlobalBar.tsx    # Global actions container
│   ├── HeaderGlobalAction.tsx # Action button
│   └── HeaderPanel.tsx        # Slide-out panel
```

**Header Props:**

```typescript
interface HeaderProps {
  children?: ReactNode;
  className?: string;
  isFixed?: boolean;
  ariaLabel?: string;
}

interface HeaderNameProps {
  children?: ReactNode;
  prefix?: string;  // e.g., "IBM"
  href?: string;
}

interface HeaderGlobalActionProps {
  children?: ReactNode;
  'aria-label': string;
  onClick?: () => void;
  isActive?: boolean;
}
```

### 3.2 SideNav Components

```
packages/ui/src/lib/components/ui-shell/
├── SideNav/
│   ├── SideNav.tsx            # Main side nav
│   ├── SideNavItems.tsx       # Items container
│   ├── SideNavItem.tsx        # Nav item
│   ├── SideNavLink.tsx        # Nav link
│   ├── SideNavMenu.tsx        # Expandable menu
│   ├── SideNavMenuItem.tsx    # Menu item
│   ├── SideNavFooter.tsx      # Footer with toggle
│   ├── SideNavDivider.tsx     # Divider
│   ├── SideNavHeader.tsx      # Header section
│   ├── SideNavIcon.tsx        # Icon wrapper
│   └── SideNavSwitcher.tsx    # Platform switcher
```

**SideNav Props:**

```typescript
interface SideNavProps {
  children?: ReactNode;
  className?: string;
  isFixed?: boolean;
  isRail?: boolean;
  expanded?: boolean;
  onToggle?: (expanded: boolean) => void;
  ariaLabel?: string;
}

interface SideNavLinkProps {
  children?: ReactNode;
  href?: string;
  icon?: ReactNode;
  isActive?: boolean;
  large?: boolean;
}
```

### 3.3 Additional UIShell Components

```
packages/ui/src/lib/components/ui-shell/
├── Content.ts                 # Main content wrapper
├── SkipToContent.tsx          # Skip link for accessibility
├── Switcher/
│   ├── Switcher.tsx           # Platform switcher container
│   ├── SwitcherItem.tsx       # Switcher item
│   └── SwitcherDivider.tsx    # Divider
└── index.ts                   # Exports
```

---

## Phase 4: Fluid Components (Week 7)

### 4.1 Fluid Form Components

Fluid components remove field spacing for denser forms.

```
packages/ui/src/lib/components/fluid/
├── FluidTextInput.tsx
├── FluidTextArea.tsx
├── FluidSelect.tsx
├── FluidComboBox.tsx
├── FluidMultiSelect.tsx
├── FluidDatePicker.tsx
├── FluidTimePicker.tsx
├── FluidSearch.tsx
├── FluidNumberInput.tsx
└── index.ts
```

**Fluid Component Pattern:**

```typescript
interface FluidTextInputProps extends TextInputProps {
  // Inherits all TextInput props
  // Removes default spacing/margins
  // Inline error/warning messages
}

// Styling differences:
// - No margin between label and input
// - No margin between input and helper/error text
// - Compact layout for dense forms
```

---

## Phase 5: Missing Components (Week 8-9)

### 5.1 Feedback Components

```
packages/ui/src/lib/components/
├── InlineLoading/
│   ├── InlineLoading.tsx      # Inline loading indicator
│   ├── InlineLoading.types.ts
│   └── InlineLoading.variants.ts
└── ErrorBoundary/
    ├── ErrorBoundary.tsx      # React error boundary
    └── ErrorBoundary.types.ts
```

**InlineLoading Props:**

```typescript
interface InlineLoadingProps {
  status?: 'inactive' | 'active' | 'finished' | 'error';
  description?: string;
  successDelay?: number;  // Time to show success before onComplete
  onSuccess?: () => void;
  className?: string;
}
```

### 5.2 Overlay Components

```
packages/ui/src/lib/components/
├── Toggletip/
│   ├── Toggletip.tsx          # Interactive tooltip
│   ├── ToggletipContent.tsx   # Content wrapper
│   ├── ToggletipAction.tsx    # Action button
│   └── Toggletip.types.ts
├── Menu/
│   ├── Menu.tsx               # Dropdown menu (Carbon-style)
│   ├── MenuItem.tsx
│   ├── MenuGroup.tsx
│   ├── MenuDivider.tsx
│   └── Menu.types.ts
└── MenuButton/
    ├── MenuButton.tsx         # Menu trigger button
    └── MenuButton.types.ts
```

### 5.3 Data Display Components

```
packages/ui/src/lib/components/
├── StructuredList/
│   ├── StructuredList.tsx     # Structured list
│   ├── StructuredListItem.tsx
│   ├── StructuredListCell.tsx
│   ├── StructuredListHead.tsx
│   ├── StructuredListRow.tsx
│   └── StructuredList.types.ts
├── ContainedList/
│   ├── ContainedList.tsx      # Contained list
│   ├── ContainedListItem.tsx
│   └── ContainedList.types.ts
└── PaginationNav/
    ├── PaginationNav.tsx      # Page navigation
    └── PaginationNav.types.ts
```

### 5.4 Typography Components

```
packages/ui/src/lib/components/
├── Text/
│   ├── Text.tsx               # Text component (Carbon-style)
│   └── Text.types.ts
├── Heading/
│   ├── Heading.tsx            # Heading component
│   └── Heading.types.ts
└── List/
    ├── OrderedList.tsx
    ├── UnorderedList.tsx
    └── ListItem.tsx
```

---

## Phase 6: Theme System (Week 10)

### 6.1 Dark Mode Support

```
packages/ui/src/lib/core/
├── theme/
│   ├── themes.ts              # Theme definitions
│   ├── ThemeProvider.tsx      # Theme context provider
│   ├── useTheme.ts            # Theme hook
│   └── index.ts
```

**Theme Configuration:**

```typescript
interface ThemeConfig {
  theme: 'white' | 'g10' | 'g90' | 'g100';
  prefix?: string;
  rtl?: boolean;
}

// CSS Custom Properties approach
const themes = {
  white: {
    '--biz-ui-background': '#ffffff',
    '--biz-ui-text-01': '#161616',
    '--biz-ui-text-02': '#525252',
    // ...
  },
  g10: { /* Gray 10 theme */ },
  g90: { /* Gray 90 theme - dark */ },
  g100: { /* Gray 100 theme - darker */ },
};
```

### 6.2 RTL Support

```typescript
// RTL provider
interface RTLConfig {
  dir: 'ltr' | 'rtl';
}

// Usage
<ThemeProvider theme="g90" rtl>
  <App />
</ThemeProvider>
```

---

## Phase 7: AI Components (Week 11)

### 7.1 AI Label Components

```
packages/ui/src/lib/components/ai/
├── AILabel/
│   ├── AILabel.tsx            # AI indicator label
│   ├── AILabel.types.ts
│   └── AILabel.variants.ts
├── AISkeleton/
│   ├── AISkeleton.tsx         # AI skeleton loader
│   ├── AISkeletonText.tsx
│   └── AISkeletonPlaceholder.tsx
└── ChatButton/
    ├── ChatButton.tsx         # AI chat button
    └── ChatButton.types.ts
```

**AILabel Props:**

```typescript
interface AILabelProps {
  kind?: 'inline' | 'corner';
  size?: 'mini' | 'md' | 'lg';
  children?: ReactNode;
  className?: string;
}
```

---

## Phase 8: Testing & Documentation (Week 12)

### 8.1 Test Coverage

- Unit tests for all new components
- Integration tests for complex components (DataTable, UIShell)
- Accessibility tests using @storybook/addon-a11y
- Visual regression tests

### 8.2 Documentation

- Storybook stories for all components
- MDX documentation files
- Migration guides from Carbon
- API reference documentation

---

## Implementation Order (Priority)

### Sprint 1 (Week 1-2): Foundation
1. ✅ useMergedRefs hook
2. ✅ useControllableState hook
3. ✅ usePrefix hook + PrefixProvider
4. ✅ useOutsideClick hook
5. ✅ useResizeObserver hook
6. ✅ Update Checkbox with warn/warnText/hideLabel/readOnly
7. ✅ Update Input with warn/warnText/hideLabel
8. ✅ Update Select with warn/warnText/hideLabel
9. ✅ Update TextArea with warn/warnText/hideLabel

### Sprint 2 (Week 3-4): DataTable
1. Create DataTable component with state management
2. Add sorting functionality
3. Add filtering functionality
4. Add row selection
5. Add batch actions
6. Add toolbar components
7. Add expandable rows

### Sprint 3 (Week 5-6): UIShell
1. Create Header components
2. Create SideNav components
3. Add SkipToContent
4. Add Switcher components
5. Integration testing

### Sprint 4 (Week 7-8): Fluid & Missing Components
1. Fluid form components
2. InlineLoading
3. ErrorBoundary
4. Toggletip
5. Menu components
6. StructuredList

### Sprint 5 (Week 9-10): Theme System
1. Theme definitions
2. ThemeProvider
3. Dark mode support
4. RTL support

### Sprint 6 (Week 11-12): AI & Polish
1. AI components
2. Testing
3. Documentation
4. Performance optimization

---

## File Structure After Implementation

```
packages/ui/src/lib/
├── components/
│   ├── ai/
│   │   ├── AILabel/
│   │   ├── AISkeleton/
│   │   └── ChatButton/
│   ├── data-table/
│   │   ├── DataTable.tsx
│   │   ├── Table.tsx
│   │   ├── TableHeader.tsx
│   │   ├── TableBody.tsx
│   │   ├── TableRow.tsx
│   │   ├── TableCell.tsx
│   │   ├── TableContainer.tsx
│   │   ├── TableToolbar.tsx
│   │   ├── TableToolbarSearch.tsx
│   │   ├── TableBatchActions.tsx
│   │   ├── TableSelectAll.tsx
│   │   ├── TableSelectRow.tsx
│   │   ├── TableExpandRow.tsx
│   │   └── ... (20+ files)
│   ├── fluid/
│   │   ├── FluidTextInput.tsx
│   │   ├── FluidTextArea.tsx
│   │   └── ... (10 files)
│   ├── ui-shell/
│   │   ├── Header/
│   │   ├── SideNav/
│   │   ├── Content.ts
│   │   └── SkipToContent.tsx
│   ├── feedback/
│   │   ├── InlineLoading/
│   │   └── ErrorBoundary/
│   ├── overlays/
│   │   ├── Toggletip/
│   │   └── Menu/
│   └── ... (existing components)
├── internal/
│   ├── usePrefix.ts
│   ├── useMergedRefs.ts
│   ├── useControllableState.ts
│   ├── useOutsideClick.ts
│   ├── useResizeObserver.ts
│   ├── useAttachedMenu.ts
│   ├── useDelayedState.ts
│   ├── useMatchMedia.ts
│   ├── useOverflowItems.ts
│   ├── usePresence.ts
│   ├── useNormalizedInputProps.tsx
│   └── usePreviousValue.ts
├── core/
│   └── theme/
│       ├── themes.ts
│       ├── ThemeProvider.tsx
│       └── useTheme.ts
└── index.ts
```

---

## Success Criteria

1. **Feature Parity:** All Carbon React components have equivalent in Biz-UI
2. **API Compatibility:** Similar prop names and patterns to Carbon
3. **Accessibility:** WCAG 2.1 AA compliance for all components
4. **Performance:** No significant performance regression
5. **Documentation:** Full Storybook coverage
6. **Testing:** >80% test coverage

---

## Notes

- Keep Carbon patterns where they make sense
- Use Radix UI primitives for accessibility
- Use Tailwind + CVA for styling
- Maintain TypeScript strict mode
- Follow existing code conventions
