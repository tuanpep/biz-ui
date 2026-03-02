/**
 * Internal utilities for Biz UI components.
 * Following Carbon's internal utility patterns.
 *
 * These utilities are intended for internal use within the component library.
 * They may change without notice between versions.
 */

// Keyboard utilities
export * from './keyboard';

// Warning utilities
export {
  warning,
  deprecateProp,
  deprecateComponent,
  deprecateFunction,
  warnRequiredProp,
  warnInvalidPropCombination,
  resetWarningCache,
} from './warn';

// Focus utilities
export {
  getFocusableElements,
  getFirstFocusableElement,
  getLastFocusableElement,
  focusFirstElement,
  focusLastElement,
  trapFocus,
  useFocusTrap,
  useSavedFocus,
  useReturnFocus,
} from './focus';

// ID utilities
export {
  generateId,
  generateRandomId,
  resetIdCounter,
  getIdCounter,
} from './id';
