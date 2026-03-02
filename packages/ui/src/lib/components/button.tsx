import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

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

// Loading spinner component
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

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-2 ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground border-0 hover:bg-primary/90',
        // Biz UI-aligned aliases
        primary:
          'bg-interactive-01 text-white border-0 hover:bg-interactive-01-hover',
        secondary:
          'bg-interactive-02 text-white border-0 hover:bg-interactive-02-hover',
        tertiary:
          'bg-transparent text-interactive-01 border-0 hover:bg-interactive-01-subtle',
        destructive:
          'bg-destructive text-destructive-foreground border-0 hover:bg-destructive/90',
        outline:
          'border border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:border-primary/50',
        ghost:
          'border border-transparent bg-transparent text-foreground hover:bg-muted hover:border-border',
        link:
          'border-0 text-primary underline-offset-4 hover:underline',
        success:
          'bg-success text-success-foreground border-0 hover:bg-success/90',
        warning:
          'bg-warning text-warning-foreground border-0 hover:bg-warning/90',
      },
      size: {
        md: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 text-xs',      // 32px - Biz UI small
        lg: 'h-12 px-6 text-base',    // 48px - Biz UI large
        xl: 'h-14 px-8 text-lg',      // 56px - Biz UI extra large
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  /** Render as child component using Radix Slot */
  asChild?: boolean;
  /** Show loading spinner and disable button */
  loading?: boolean;
  /** Text to show when loading (for screen readers) */
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, loadingText, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const isDisabled = disabled || loading

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
      )
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
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants };
