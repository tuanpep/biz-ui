# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- **RFC-0001 Codebase Refactoring**: Reorganized component structure following SDD+TDD patterns
  - Split component files into separate concerns: `Component.tsx`, `Component.types.ts`, `Component.variants.ts`
  - Colocated tests alongside components (`Component.test.tsx`)
  - Standardized Storybook stories structure (`Component.stories.tsx`)
  - Added automatic test cleanup in setup.ts to prevent test pollution
  - Fixed all component tests to work with Radix UI primitives (data-disabled attributes)
  - Added missing Storybook stories for Icon, DatePicker, TimePicker, and TreeView components

### Fixed

- Test suite now properly handles Radix UI's `data-disabled` attribute instead of native `disabled`
- TimePicker tests use correct query methods for `input[type="time"]` elements
- Skeleton component tests use class substring selectors for Tailwind classes
- FormField tests use case-insensitive regex for label matching
- MultiSelect hideLabel tests correctly verify label absence

### Added

- Initial open-source release
- 50+ React components built on Radix UI primitives
- Comprehensive design token system with CSS variables
- i18n support with `I18nProvider` and `useTranslation` hook
- 10 custom hooks for common UI patterns
- Feature flag and CSS prefix providers
- Storybook documentation for all components
- Unit tests with Vitest and Testing Library
- ESLint + Prettier code quality tooling
- Turborepo monorepo build system with Rollup

## [0.1.0] - 2026-03-04

### Added

- Initial component library with 50 components across 6 categories:
  - **Layout**: Card, Flex, Grid, ScrollArea, Separator, Stack
  - **Forms**: Button, Checkbox, ComboBox, DatePicker, FileUploader, FormField, IconButton, Input, Label, MultiSelect, NumberInput, RadioGroup, Search, Select, Slider, Switch, Textarea, TimePicker
  - **Navigation**: Breadcrumb, DropdownMenu, Link, Pagination, Tabs, TreeView
  - **Data Display**: Accordion, Avatar, Badge, Calendar, Icon, Table, Tag, Typography
  - **Feedback**: Alert, Loading, Progress, ProgressIndicator, Skeleton, Toast
  - **Overlays**: AlertDialog, Collapsible, ComposedModal, Dialog, Popover, Tooltip
