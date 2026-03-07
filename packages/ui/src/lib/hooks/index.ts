/**
 * Custom hooks for Biz UI components.
 * Following Carbon's internal hooks patterns.
 */

// ID generation
export { useId } from "./use-id";

// Ref utilities
export { useMergedRefs, assignRef } from "./use-merged-refs";

// Event handling
export { useOutsideClick, useOutsideClickMultiple } from "./use-outside-click";
export { useEvent, useWindowEvent } from "./use-event";

// Responsive utilities
export {
  useMatchMedia,
  useBreakpoint,
  usePrefersReducedMotion,
  usePrefersDarkMode,
} from "./use-match-media";

// Resize observation
export { useResizeObserver } from "./use-resize-observer";

// State management
export {
  useControllableState,
  type ControllableStateProps,
} from "./use-controllable-state";
export { useDelayedState, type DispatchWithDelay } from "./use-delayed-state";

// Callback utilities
export { useCallbackRef, useStableCallback } from "./use-callback-ref";

// Lifecycle utilities
export { useMount, useUnmount } from "./use-unmount";

// Effect utilities
export { useIsomorphicLayoutEffect } from "./use-layout-effect";

// Value tracking
export { usePrevious, usePreviousOrCurrent } from "./use-previous";

// Animation utilities
export { usePresence } from "./use-presence";

// Form field utilities
export {
  useFormField,
  useFormFieldIds,
  useFormFieldStates,
  type UseFormFieldOptions,
  type UseFormFieldReturn,
  type FormFieldIds,
  type FormFieldStates,
} from "./use-form-field";

// Misc utilities
export { useForceUpdate } from "./use-force-update";
