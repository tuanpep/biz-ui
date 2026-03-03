/**
 * Event handling utilities for Biz UI components.
 * Following Carbon's event composition patterns.
 */

import type { SyntheticEvent } from 'react';

/**
 * Compose multiple event handlers into a single handler.
 * Handlers are called in order until `event.preventDefault()` is called.
 *
 * @example
 * ```tsx
 * <Button
 *   onClick={composeEventHandlers([
 *     props.onClick,
 *     handleClick,
 *   ])}
 * >
 *   Click me
 * </Button>
 * ```
 */
export const composeEventHandlers =
  <E extends SyntheticEvent = SyntheticEvent>(
    handlers: (((event: E, ...args: unknown[]) => void) | undefined)[]
  ) =>
  (event: E, ...args: unknown[]) => {
    for (const handler of handlers) {
      if (event.defaultPrevented) {
        break;
      }
      if (typeof handler === 'function') {
        handler(event, ...args);
      }
    }
  };

/**
 * Type-safe event handler composer for specific event types.
 *
 * @example
 * ```tsx
 * const handleClick = composeHandlers<React.MouseEvent<HTMLButtonElement>>(
 *   props.onClick,
 *   (e) => {
 *     // Custom logic
 *   }
 * );
 * ```
 */
export function composeHandlers<E extends SyntheticEvent>(
  ...handlers: (((event: E) => void) | undefined)[]
): (event: E) => void {
  return (event: E) => {
    for (const handler of handlers) {
      if (event.defaultPrevented) break;
      handler?.(event);
    }
  };
}

/**
 * Stop event propagation and prevent default.
 * Useful for modal overlays and dropdowns.
 *
 * @example
 * ```tsx
 * <Overlay onClick={stopPropagation} />
 * ```
 */
export const stopPropagation = <E extends SyntheticEvent>(event: E): void => {
  event.stopPropagation();
};

/**
 * Prevent default behavior.
 *
 * @example
 * ```tsx
 * <form onSubmit={preventDefault}>
 * ```
 */
export const preventDefault = <E extends SyntheticEvent>(event: E): void => {
  event.preventDefault();
};

/**
 * Stop propagation and prevent default.
 *
 * @example
 * ```tsx
 * <Dropdown onClick={stopEvent}>
 * ```
 */
export const stopEvent = <E extends SyntheticEvent>(event: E): void => {
  event.stopPropagation();
  event.preventDefault();
};
