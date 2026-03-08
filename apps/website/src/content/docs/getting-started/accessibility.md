---
title: Accessibility
description: Learn about Biz UI's commitment to accessibility and how to build inclusive applications.
category: getting-started
order: 4
---

# Accessibility

Biz UI is built with accessibility as a core principle. All components are designed to be accessible by default, following WAI-ARIA best practices and WCAG 2.1 guidelines.

## Foundation

Biz UI is built on top of **Radix UI** primitives, which provide:

- Full keyboard navigation support
- Screen reader compatibility
- Focus management
- ARIA attribute handling

## WCAG 2.1 Compliance

All components aim for **Level AA** compliance with the Web Content Accessibility Guidelines:

- **Perceivable**: Information and UI components must be presentable to users in ways they can perceive.
- **Operable**: UI components and navigation must be operable by all users.
- **Understandable**: Information and UI operation must be understandable.
- **Robust**: Content must be robust enough for a wide variety of user agents.

## Keyboard Navigation

All interactive components support keyboard navigation:

| Key               | Action                                                  |
| ----------------- | ------------------------------------------------------- |
| `Tab`             | Move focus to the next focusable element                |
| `Shift + Tab`     | Move focus to the previous focusable element            |
| `Enter` / `Space` | Activate buttons, links, and other interactive elements |
| `Arrow Keys`      | Navigate within menus, lists, and grids                 |
| `Escape`          | Close modals, popovers, and dropdowns                   |
| `Home` / `End`    | Jump to the first/last item in a list                   |

## Focus Management

Proper focus management is essential for accessibility:

### Focus Visibility

All interactive elements have visible focus indicators:

```css
/* Focus styles are applied automatically */
:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
```

### Focus Trapping

Modals and dialogs trap focus within the component:

```tsx
<Dialog>
  <DialogContent>
    {/* Focus is trapped here while dialog is open */}
    <Button>Close</Button>
  </DialogContent>
</Dialog>
```

## Screen Reader Support

### Labels

Always provide accessible labels for interactive elements:

```tsx
// Good - with visible label
<Button>Submit</Button>

// Good - with aria-label for icon buttons
<IconButton aria-label="Close dialog">
  <X />
</IconButton>

// Good - with aria-labelledby
<Dialog aria-labelledby="dialog-title">
  <DialogTitle id="dialog-title">Confirm Action</DialogTitle>
</Dialog>
```

### Live Regions

Use live regions to announce dynamic content changes:

```tsx
<Alert role="status" aria-live="polite">
  Your changes have been saved.
</Alert>
```

## Color Contrast

All default color combinations meet WCAG 2.1 AA contrast ratios:

- **Normal text**: Minimum 4.5:1
- **Large text**: Minimum 3:1
- **UI components**: Minimum 3:1

## Testing Accessibility

### Automated Testing

Use automated tools to catch common issues:

```bash
# Using axe-core
npm install --save-dev @axe-core/react
```

### Manual Testing

Always perform manual accessibility testing:

1. **Keyboard-only navigation**: Ensure all functionality is accessible without a mouse
2. **Screen reader testing**: Test with NVDA, VoiceOver, or JAWS
3. **Color contrast**: Verify contrast ratios with browser dev tools
4. **Zoom testing**: Test at 200% zoom level

## Best Practices

### 1. Use Semantic HTML

```tsx
// Good
<nav>
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

// Avoid
<div onClick={navigate}>Home</div>
```

### 2. Provide Text Alternatives

```tsx
// Images need alt text
<img src="chart.png" alt="Sales increased by 20% in Q4" />

// Icons need labels
<IconButton aria-label="Settings">
  <Settings />
</IconButton>
```

### 3. Don't Disable Focus

```tsx
// Avoid
<Button tabIndex={-1}>Cannot focus</Button>

// If you need to hide from keyboard, use aria-hidden
<span aria-hidden="true">Decorative content</span>
```

## Resources

- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM WCAG 2 Checklist](https://webaim.org/standards/wcag/checklist)
- [Radix UI Accessibility](https://www.radix-ui.com/docs/primitives/overview/accessibility)
