import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';
import { Loader2 } from 'lucide-react';

/**
 * Loading Component
 *
 * Biz UI aligned loading indicators with:
 * - Spinner component for full-page loading
 * - InlineLoading for inline loading states with text
 * - Multiple sizes
 * - Overlay mode
 * - Progress percentage support
 */

// Spinner variants
const spinnerVariants = cva(
  'animate-spin text-primary',
  {
    variants: {
      size: {
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
        xl: 'h-12 w-12',
        '2xl': 'h-16 w-16',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerVariants> {
  /** Accessible label for screen readers */
  label?: string;
}

const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size, label = 'Loading', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('inline-flex items-center justify-center', className)}
        role="status"
        aria-label={label}
        {...props}
      >
        <Loader2 className={cn(spinnerVariants({ size }))} aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </span>
    );
  }
);

Spinner.displayName = 'Spinner';

// Full-page loading overlay
const loadingOverlayVariants = cva(
  'fixed inset-0 z-50 flex flex-col items-center justify-center gap-4',
  {
    variants: {
      variant: {
        default: 'bg-background/80 backdrop-blur-sm',
        opaque: 'bg-background',
        transparent: 'bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface LoadingOverlayProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingOverlayVariants> {
  /** Loading spinner size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Text to display below spinner */
  text?: string;
  /** Show overlay (controlled) */
  show?: boolean;
}

const LoadingOverlay = React.forwardRef<HTMLDivElement, LoadingOverlayProps>(
  ({ className, variant, size = 'xl', text, show = true, ...props }, ref) => {
    if (!show) return null;

    return (
      <div
        ref={ref}
        className={cn(loadingOverlayVariants({ variant }), className)}
        aria-live="polite"
        aria-busy="true"
        {...props}
      >
        <Spinner size={size} />
        {text && (
          <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
        )}
      </div>
    );
  }
);

LoadingOverlay.displayName = 'LoadingOverlay';

// Inline loading status types
type InlineLoadingStatus = 'inactive' | 'active' | 'finished' | 'error';

const inlineLoadingVariants = cva(
  'inline-flex items-center gap-2 text-sm',
  {
    variants: {
      status: {
        inactive: 'text-muted-foreground',
        active: 'text-foreground',
        finished: 'text-success',
        error: 'text-destructive',
      },
    },
    defaultVariants: {
      status: 'active',
    },
  }
);

export interface InlineLoadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inlineLoadingVariants> {
  /** Loading status */
  status?: InlineLoadingStatus;
  /** Status text to display */
  text?: string;
  /** Show loading spinner */
  showSpinner?: boolean;
  /** Progress percentage (0-100) */
  progress?: number;
  /** Success icon when finished */
  successIcon?: React.ReactNode;
  /** Error icon when error */
  errorIcon?: React.ReactNode;
}

const InlineLoading = React.forwardRef<HTMLDivElement, InlineLoadingProps>(
  (
    {
      className,
      status = 'active',
      text,
      showSpinner = true,
      progress,
      successIcon,
      errorIcon,
      ...props
    },
    ref
  ) => {
    const defaultSuccessIcon = (
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    );

    const defaultErrorIcon = (
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );

    const renderIcon = () => {
      switch (status) {
        case 'finished':
          return successIcon || defaultSuccessIcon;
        case 'error':
          return errorIcon || defaultErrorIcon;
        case 'active':
        case 'inactive':
        default:
          if (showSpinner) {
            return <Spinner size="sm" />;
          }
          return null;
      }
    };

    return (
      <div
        ref={ref}
        className={cn(inlineLoadingVariants({ status }), className)}
        role="status"
        aria-live="polite"
        aria-busy={status === 'active'}
        {...props}
      >
        {renderIcon()}
        {text && <span>{text}</span>}
        {progress !== undefined && status === 'active' && (
          <span className="text-xs text-muted-foreground">({progress}%)</span>
        )}
      </div>
    );
  }
);

InlineLoading.displayName = 'InlineLoading';

// Loading Skeleton - alias for existing Skeleton component
// Re-exported from skeleton.tsx for convenience

export { Spinner, LoadingOverlay, InlineLoading, spinnerVariants };
