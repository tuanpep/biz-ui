/**
 * Public API Snapshot Test
 *
 * This test captures the public API of the component library to detect
 * breaking changes. If this snapshot changes, it indicates that the API
 * has been modified and requires careful review.
 *
 * This follows Carbon's versioning policy:
 * - Major version: Breaking API changes
 * - Minor version: New features, non-breaking API additions
 * - Patch version: Bug fixes, no API changes
 *
 * If the snapshot fails:
 * 1. Review the changes to understand what API was modified
 * 2. Determine if this is a breaking change requiring a major version bump
 * 3. Update the snapshot if the change is intentional
 */

import { describe, it, expect } from 'vitest';
import * as BizUI from '../index';

// Components to exclude from API tracking (internal utilities)
const EXCLUDED_KEYS = new Set(['__esModule', 'default']);

// Keys that indicate React components
const isComponentKey = (key: string): boolean => {
  return key[0] === key[0].toUpperCase() && !EXCLUDED_KEYS.has(key);
};

// Get type information for a value
const getTypeInfo = (value: unknown): string => {
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';

  if (typeof value === 'function') {
    // Check if it's a component (has render, is forwardRef, etc.)
    if (value.$$typeof) {
      const typeSymbol = String(value.$$typeof);
      if (typeSymbol.includes('forwardRef')) return 'ForwardRefComponent';
      if (typeSymbol.includes('memo')) return 'MemoComponent';
    }
    // Check for context
    if (value.Provider && value.Consumer) return 'React.Context';
    // Regular function
    return 'function';
  }

  if (typeof value === 'object') {
    if (Array.isArray(value)) return 'array';
    if (value.$$typeof) {
      const typeSymbol = String(value.$$typeof);
      if (typeSymbol.includes('react.element')) return 'React.Element';
      if (typeSymbol.includes('react.context')) return 'React.Context';
    }
    return 'object';
  }

  return typeof value;
};

// Map a module's exports to their API structure
const mapExportsToAPI = (
  module: Record<string, unknown>,
  prefix = ''
): Record<string, unknown> => {
  const api: Record<string, unknown> = {};

  // Sort keys alphabetically for consistent snapshots
  const sortedKeys = Object.keys(module)
    .filter((key) => !EXCLUDED_KEYS.has(key))
    .sort();

  for (const key of sortedKeys) {
    const value = module[key];
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (value === null || value === undefined) {
      api[key] = getTypeInfo(value);
      continue;
    }

    // Handle React components with sub-components (e.g., Button.Group)
    if (
      typeof value === 'function' &&
      isComponentKey(key) &&
      value !== null &&
      typeof value === 'object'
    ) {
      const subKeys = Object.keys(value as object).filter(
        (k) => !EXCLUDED_KEYS.has(k) && isComponentKey(k)
      );

      if (subKeys.length > 0) {
        api[key] = {
          _type: getTypeInfo(value),
          ...mapExportsToAPI(value as Record<string, unknown>, fullKey),
        };
        continue;
      }
    }

    // Handle context objects
    if (
      typeof value === 'object' &&
      value !== null &&
      'Provider' in value &&
      'Consumer' in value
    ) {
      api[key] = 'React.Context';
      continue;
    }

    // Handle type exports (these will show as undefined at runtime but are in the module)
    if (value === undefined && key.endsWith('Props') || key.endsWith('Type') || key.endsWith('Ref')) {
      api[key] = 'TypeExport';
      continue;
    }

    api[key] = getTypeInfo(value);
  }

  return api;
};

describe('Public API', () => {
  it('should maintain consistent API (changes require semver review)', () => {
    const publicAPI = mapExportsToAPI(BizUI as Record<string, unknown>);

    // This snapshot should only change when intentionally modifying the public API
    expect(publicAPI).toMatchSnapshot();
  });

  it('should export all expected component categories', () => {
    const exports = Object.keys(BizUI);

    // Core components that should always be present
    const essentialComponents = [
      'Button',
      'Input',
      'Checkbox',
      'Select',
      'Dialog',
      'Alert',
      'Toast',
      'Tabs',
      'Accordion',
    ];

    for (const component of essentialComponents) {
      expect(exports).toContain(component);
    }
  });

  it('should export core utilities', () => {
    const exports = Object.keys(BizUI);

    // Core utilities that should always be present
    const essentialUtilities = ['cn', 'useControllableState', 'useMergedRefs', 'usePrefix'];

    for (const util of essentialUtilities) {
      expect(exports).toContain(util);
    }
  });

  it('should export providers', () => {
    const exports = Object.keys(BizUI);

    expect(exports).toContain('PrefixProvider');
    expect(exports).toContain('FeatureFlagsProvider');
  });
});
