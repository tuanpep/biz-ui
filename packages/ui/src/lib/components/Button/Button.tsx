/**
 * Button Component
 *
 * Biz UI aligned button with:
 * - Clear visual feedback on hover/active states
 * - Accessible focus states (WCAG 2.1 AA)
 * - Consistent spacing and sizing (8px baseline)
 * - Loading state with spinner
 * - Biz UI-aligned variant aliases (primary, secondary, tertiary)
 */

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../utils/cn';
import { buttonVariants } from './Button.variants';
import type { ButtonProps } from './Button.types';

// ============================================================================
// Loading Spinner Component
// ============================================================================

const LoadingSpinner = () => (
  <svg
    className="animate-spin -ml-1 mr-2 h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

// ============================================================================
// Button Component
// ============================================================================

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      loadingText,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const isDisabled = disabled || loading;

    // When asChild is true, Radix Slot requires exactly one child element.
    // We cannot pass loading spinner or loadingText as siblings.
    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size }), className)}
          ref={ref}
          disabled={isDisabled}
          aria-busy={loading}
          aria-live="polite"
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading}
        aria-live="polite"
        {...props}
      >
        {loading && <LoadingSpinner />}
        {loading && loadingText ? (
          <span className="sr-only">{loadingText}</span>
        ) : null}
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

// ============================================================================
// Exports
// ============================================================================

export { Button };
export { buttonVariants } from './Button.variants';
export type { ButtonProps, ButtonSkeletonProps, ButtonVariant, ButtonSize } from './Button.types';
