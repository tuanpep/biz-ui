/**
 * IconButton Component
 *
 * Biz UI aligned icon button with:
 * - Square aspect ratio for icons
 * - Accessible label (required)
 * - Multiple variants matching Button component
 * - Loading state with spinner
 */

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../utils/cn';
import { iconButtonVariants, iconSizes } from './IconButton.variants';
import type { IconButtonProps, IconButtonVariant, IconButtonSize } from './IconButton.types';

// ============================================================================
// Loading Spinner Component
// ============================================================================

const LoadingSpinner = ({ className }: { className?: string }) => (
  <svg
    className={cn('animate-spin', className)}
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
// IconButton Component
// ============================================================================

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant,
      size = 'md',
      icon: Icon,
      label,
      asChild = false,
      loading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const isDisabled = disabled || loading;

    return (
      <Comp
        className={cn(iconButtonVariants({ variant, size }), className)}
        ref={ref}
        disabled={isDisabled}
        aria-label={label}
        aria-busy={loading}
        aria-live="polite"
        {...props}
      >
        {loading ? (
          <LoadingSpinner className={iconSizes[size || 'md']} />
        ) : (
          <Icon className={iconSizes[size || 'md']} aria-hidden="true" />
        )}
        <span className="sr-only">{loading ? `Loading: ${label}` : label}</span>
      </Comp>
    );
  }
);

IconButton.displayName = 'IconButton';

// ============================================================================
// Exports
// ============================================================================

export { IconButton };
export { iconButtonVariants, iconSizes } from './IconButton.variants';
export type { IconButtonProps, IconButtonVariant, IconButtonSize } from './IconButton.types';
