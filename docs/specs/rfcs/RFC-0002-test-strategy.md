# RFC-0002 Test Strategy

## Overview

This document defines the test cases derived from RFC-0002 specifications. Tests follow the Given-When-Then structure and cover unit, integration, and E2E scenarios.

## Unit Tests

### useCopyToClipboard Hook

```typescript
describe("useCopyToClipboard", () => {
  // Happy Path
  it("copies text to clipboard", async () => {
    // Given: hook is initialized and clipboard API is available
    // When: copy function is called with text
    // Then: text is copied to clipboard and success state is true
  });

  it("returns error state when clipboard API fails", async () => {
    // Given: clipboard API throws an error
    // When: copy function is called
    // Then: error state is set with error message
  });

  // Edge Cases
  it("handles empty string", async () => {
    // Given: hook is initialized
    // When: copy function is called with empty string
    // Then: operation completes without error
  });

  it("resets success state after timeout", async () => {
    // Given: text was successfully copied
    // When: timeout elapses
    // Then: success state resets to false
  });
});
```

### CodeBlock Component

```typescript
describe("CodeBlock", () => {
  // Rendering
  it("renders code content", () => {
    // Given: code prop is provided
    // When: component renders
    // Then: code content is displayed
  });

  it("renders with filename when provided", () => {
    // Given: filename prop is provided
    // When: component renders
    // Then: filename is displayed in header
  });

  it("renders with language badge when provided", () => {
    // Given: language prop is provided
    // When: component renders
    // Then: language badge is displayed
  });

  // Copy Functionality
  it("shows copy button", () => {
    // Given: showCopyButton is true (default)
    // When: component renders
    // Then: copy button is visible
  });

  it("copies code to clipboard on click", async () => {
    // Given: code content is displayed
    // When: user clicks copy button
    // Then: code is copied and success feedback is shown
  });

  it("hides copy button when showCopyButton is false", () => {
    // Given: showCopyButton is false
    // When: component renders
    // Then: copy button is not visible
  });

  // Accessibility
  it("has accessible copy button label", () => {
    // Given: copy button is rendered
    // When: examining button attributes
    // Then: aria-label describes the action
  });
});
```

### Header Component

```typescript
describe("Header", () => {
  // Rendering
  it("renders logo and navigation", () => {
    // Given: component is rendered
    // When: examining the header
    // Then: logo and nav links are present
  });

  it("renders theme toggle button", () => {
    // Given: component is rendered
    // When: examining the header
    // Then: theme toggle button is present
  });

  it("renders GitHub link", () => {
    // Given: component is rendered
    // When: examining the header
    // Then: GitHub link with correct href is present
  });

  // Mobile
  it("hides nav links on mobile", () => {
    // Given: viewport is mobile size
    // When: component renders
    // Then: desktop nav links are hidden
  });

  // Sticky Behavior
  it("has sticky positioning", () => {
    // Given: component is rendered
    // When: examining CSS classes
    // Then: sticky positioning classes are applied
  });
});
```

### Footer Component

```typescript
describe("Footer", () => {
  it("renders copyright with current year", () => {
    // Given: component is rendered
    // When: examining copyright text
    // Then: current year is included
  });

  it("renders logo", () => {
    // Given: component is rendered
    // When: examining the footer
    // Then: logo is present
  });
});
```

### ThemeToggle Component

```typescript
describe("ThemeToggle", () => {
  it("renders sun icon in dark mode", () => {
    // Given: theme is dark
    // When: component renders
    // Then: sun icon is displayed
  });

  it("renders moon icon in light mode", () => {
    // Given: theme is light
    // When: component renders
    // Then: moon icon is displayed
  });

  it("toggles theme on click", () => {
    // Given: theme is light
    // When: user clicks toggle button
    // Then: theme changes to dark
  });

  it("has accessible label", () => {
    // Given: component is rendered
    // When: examining button attributes
    // Then: aria-label describes the action
  });
});
```

## Integration Tests

### Routing

```typescript
describe("Routing", () => {
  it("navigates to home page", () => {
    // Given: app is loaded
    // When: user navigates to /
    // Then: home page is displayed
  });

  it("navigates to docs page", () => {
    // Given: app is loaded
    // When: user navigates to /docs
    // Then: docs page is displayed
  });

  it("navigates to getting started page", () => {
    // Given: app is loaded
    // When: user navigates to /docs/getting-started
    // Then: getting started page is displayed
  });

  it("navigates to component docs page", () => {
    // Given: app is loaded
    // When: user navigates to /components/forms/button
    // Then: button component docs page is displayed
  });

  it("shows 404 for unknown routes", () => {
    // Given: app is loaded
    // When: user navigates to /unknown
    // Then: 404 page is displayed
  });
});
```

### Theme Persistence

```typescript
describe("Theme Persistence", () => {
  it("persists theme selection", () => {
    // Given: user selects dark theme
    // When: page is reloaded
    // Then: dark theme is still applied
  });

  it("respects system preference by default", () => {
    // Given: no theme is stored and system prefers dark
    // When: app loads
    // Then: dark theme is applied
  });
});
```

### Navigation

```typescript
describe("Navigation", () => {
  it("highlights active nav item", () => {
    // Given: user is on /docs page
    // When: examining navigation
    // Then: Docs link is highlighted
  });

  it("updates sidebar on route change", () => {
    // Given: user navigates to different section
    // When: route changes
    // Then: sidebar reflects current section
  });
});
```

## E2E Tests

### Homepage Journey

```typescript
describe("Homepage", () => {
  it("displays hero section with CTAs", () => {
    // Given: user visits homepage
    // When: page loads
    // Then: hero section is visible with Get Started button
  });

  it("scrolls to components section", () => {
    // Given: user is on homepage
    // When: user clicks "View Components" link
    // Then: page scrolls to components section
  });

  it("copies installation command", () => {
    // Given: user is on homepage
    // When: user clicks copy button on npm command
    // Then: command is copied to clipboard
  });
});
```

### Documentation Journey

```typescript
describe("Documentation", () => {
  it("navigates via sidebar", () => {
    // Given: user is on docs page
    // When: user clicks sidebar link
    // Then: corresponding page loads
  });

  it("views component documentation", () => {
    // Given: user wants to learn about Button
    // When: user navigates to Button docs
    // Then: Button documentation with examples is shown
  });

  it("copies example code", () => {
    // Given: user is viewing component docs
    // When: user clicks copy on code example
    // Then: code is copied to clipboard
  });
});
```

### Theme Toggle Journey

```typescript
describe("Theme Toggle", () => {
  it("toggles between light and dark", () => {
    // Given: user is on any page in light mode
    // When: user clicks theme toggle
    // Then: page switches to dark mode
  });
});
```

## Test Coverage Targets

| Category   | Target | Current |
| ---------- | ------ | ------- |
| Components | 80%    | 0%      |
| Hooks      | 90%    | 0%      |
| Pages      | 70%    | 0%      |
| Utils      | 90%    | 0%      |

## Test File Structure

```
apps/website/src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Header.test.tsx
│   ├── ui/
│   │   ├── CodeBlock.tsx
│   │   └── CodeBlock.test.tsx
│   └── ...
├── hooks/
│   ├── useCopyToClipboard.ts
│   └── useCopyToClipboard.test.ts
└── pages/
    ├── Home.tsx
    └── Home.test.tsx
```

## Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## Test Setup Requirements

1. **Testing Library**: @testing-library/react, @testing-library/jest-dom
2. **User Event**: @testing-library/user-event
3. **MSW**: For API mocking (if needed)
4. **Vitest**: Test runner (configured in project)
5. **Playwright/Cypress**: For E2E tests (optional)
