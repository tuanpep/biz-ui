/**
 * Internal utilities for Biz UI components.
 * Following Carbon's internal utility patterns.
 *
 * These utilities are intended for internal use within the component library.
 * They may change without notice between versions.
 */

// Keyboard utilities
export * from "./keyboard";

// Warning utilities
export {
  warning,
  deprecateProp,
  deprecateComponent,
  deprecateFunction,
  warnRequiredProp,
  warnInvalidPropCombination,
  resetWarningCache,
} from "./warn";

// Focus utilities
export {
  selectorTabbable,
  selectorFocusable,
  getFocusableElements,
  getFirstFocusableElement,
  getLastFocusableElement,
  focusFirstElement,
  focusLastElement,
  trapFocus,
  useFocusTrap,
  useSavedFocus,
  useReturnFocus,
  elementOrParentIsFloatingMenu,
  wrapFocus,
  wrapFocusWithoutSentinels,
  useWrapFocus,
} from "./focus";

// ID utilities
export {
  generateId,
  generateRandomId,
  resetIdCounter,
  getIdCounter,
} from "./id";

// Polymorphic component types
export type {
  PolymorphicComponentProp,
  PolymorphicComponentPropWithRef,
  PolymorphicForwardRefComponent,
  PolymorphicRef,
  ElementTypeFromProps,
  MergeElementProps,
  RefFromProps,
} from "./polymorphic";
export { isValidElementType } from "./polymorphic";

// Event handling utilities
export {
  composeEventHandlers,
  composeHandlers,
  stopPropagation,
  preventDefault,
  stopEvent,
} from "./events";

// Component utilities
export {
  isComponentElement,
  isComponentElementOf,
  findChildrenByType,
  findChildByType,
  hasChildOfType,
  cloneElementIfType,
} from "./component-utils";

// Normalized input props hook
export {
  useNormalizedInputProps,
  getValidationClassNames,
  type NormalizedInputPropsConfig,
  type NormalizedInputProps,
} from "./use-normalized-input-props";
