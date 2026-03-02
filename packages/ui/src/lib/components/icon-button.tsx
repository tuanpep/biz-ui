import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';
import type { LucideIcon } from 'lucide-react';

/**
 * IconButton Component
 *
 * Biz UI aligned icon button with:
 * - Square aspect ratio for icons
 * - Accessible label (required)
 * - Multiple variants matching Button component
 * - Loading state with spinner
 */

// Loading spinner component
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

const iconButtonVariants = cva(
  'inline-flex items-center justify-center rounded-md ring-offset-2 ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        primary: 'bg-interactive-01 text-white hover:bg-interactive-01-hover',
        secondary: 'bg-interactive-02 text-white hover:bg-interactive-02-hover',
        tertiary: 'bg-transparent text-interactive-01 hover:bg-interactive-01-subtle',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:border-primary/50',
        ghost: 'border border-transparent bg-transparent text-foreground hover:bg-muted hover:border-border',
        success: 'bg-success text-success-foreground hover:bg-success/90',
        warning: 'bg-warning text-warning-foreground hover:bg-warning/90',
      },
      size: {
        xs: 'h-6 w-6',       // 24px
        sm: 'h-8 w-8',       // 32px - Biz UI small
        md: 'h-10 w-10',     // 40px - Biz UI default
        lg: 'h-12 w-12',     // 48px - Biz UI large
        xl: 'h-14 w-14',     // 56px
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

// Icon sizes to match button sizes
const iconSizes = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-7 w-7',
} as const;

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  /** The Lucide icon to render */
  icon: LucideIcon;
  /** Accessible label (required for screen readers) */
  label: string;
  /** Render as child component using Radix Slot */
  asChild?: boolean;
  /** Show loading spinner and disable button */
  loading?: boolean;
}

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

export { IconButton, iconButtonVariants };
