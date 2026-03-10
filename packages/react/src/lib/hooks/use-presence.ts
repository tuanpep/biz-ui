import * as React from "react";

/**
 * Copyright (c) 2024 Biz UI Contributors
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Based on Carbon's usePresence hook.
 */

/**
 * Hook for managing presence animations (enter/exit).
 * Useful for animating elements in and out of the DOM.
 *
 * This hook tracks whether an element should be rendered and whether
 * it's currently exiting. It handles CSS animations that start with
 * the presence prefix (`biz--presence`).
 *
 * @param ref - React ref to the element being animated
 * @param isOpen - Whether the element should be visible
 * @param options - Optional configuration
 * @returns Object with presence state
 *
 * @example
 * ```tsx
 * const Modal = ({ isOpen, onClose }) => {
 *   const ref = React.useRef<HTMLDivElement>(null);
 *   const { isPresent, isExiting } = usePresence(ref, isOpen);
 *
 *   if (!isPresent) return null;
 *
 *   return (
 *     <div
 *       ref={ref}
 *       className={cn('modal', isExiting && 'modal--exiting')}
 *     >
 *       Modal content
 *     </div>
 *   );
 * };
 * ```
 *
 * @example
 * ```tsx
 * // With CSS animations
 * const Toast = ({ visible, message }) => {
 *   const ref = React.useRef<HTMLDivElement>(null);
 *   const { isPresent } = usePresence(ref, visible);
 *
 *   if (!isPresent) return null;
 *
 *   return (
 *     <div ref={ref} className="toast">
 *       {message}
 *     </div>
 *   );
 * };
 *
 * // CSS
 * .toast {
 *   animation: biz--presence-enter 300ms ease-out;
 * }
 * .toast--exiting {
 *   animation: biz--presence-exit 200ms ease-in;
 * }
 * ```
 */
export function usePresence(
  ref: React.RefObject<HTMLElement | null>,
  isOpen: boolean,
  options?: {
    /** Prefix for CSS animation names (default: 'biz') */
    prefix?: string;
    /** Custom callback when exit animation completes */
    onExitComplete?: () => void;
  },
): {
  /** Whether the element should be rendered in the DOM */
  isPresent: boolean;
  /** Whether the element is currently playing exit animation */
  isExiting: boolean;
} {
  const { prefix = "biz", onExitComplete } = options || {};
  const [exitState, setExitState] = React.useState<
    "idle" | "active" | "finished"
  >(isOpen ? "idle" : "finished");

  const isExiting = exitState === "active";

  // Element is exiting
  if (!isOpen && exitState === "idle") {
    setExitState("active");
  }

  // Element exit was interrupted (reopened while exiting)
  if (isOpen && exitState !== "idle") {
    setExitState("idle");
  }

  const handleAnimationEnd = React.useCallback(() => {
    setExitState("finished");
    onExitComplete?.();
  }, [onExitComplete]);

  React.useLayoutEffect(() => {
    if (!ref.current || !isExiting) return;

    // Fallback for JSDOM environments without getAnimations
    if (!("getAnimations" in ref.current)) {
      handleAnimationEnd();
      return;
    }

    // Find all animations that start with the presence prefix
    const animations = (
      ref.current as HTMLElement & {
        getAnimations: (options?: { subtree: boolean }) => Animation[];
      }
    )
      .getAnimations({ subtree: true })
      .filter(
        (animation) =>
          animation instanceof CSSAnimation &&
          animation.animationName.startsWith(`${prefix}--presence`),
      );

    // No presence animations found, complete immediately
    if (!animations.length) {
      handleAnimationEnd();
      return;
    }

    let cancelled = false;

    // Wait for all presence animations to complete
    Promise.all(
      animations.map((animation) =>
        animation.finished.catch(() => {
          // Animation was cancelled, ignore
        }),
      ),
    ).finally(() => {
      if (cancelled) return;
      handleAnimationEnd();
    });

    return () => {
      cancelled = true;
    };
  }, [ref, isExiting, prefix, handleAnimationEnd]);

  return {
    /**
     * Indicates whether the ref object is supposed to be mounted
     */
    isPresent: isOpen || exitState !== "finished",

    /**
     * Indicates whether the ref object is currently exiting
     */
    isExiting,
  };
}
