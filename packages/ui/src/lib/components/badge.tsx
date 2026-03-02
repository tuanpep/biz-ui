import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../utils/cn';

/**
 * Badge Component
 *
 * Design Principles:
 * - Semantic colors for different states
 * - Clear contrast for readability
 * - Consistent sizing and spacing
 * - Solid colors - no opacity
 */
const badgeVariants = cva(
  'inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground border-0',
        secondary: 'bg-secondary text-secondary-foreground border-0',
        destructive: 'bg-destructive text-destructive-foreground border-0',
        outline: 'bg-transparent text-foreground border-0',
        success: 'bg-success text-success-foreground border-0',
        warning: 'bg-warning text-warning-foreground border-0',
        info: 'bg-info-muted text-info border-0',
        accent: 'bg-accent text-accent-foreground border-0',
      },
      size: {
        sm: 'px-2 py-0 text-[10px]',
        md: 'px-2.5 py-0.5 text-xs',
        lg: 'px-3 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> {
  /** Map to a child component */
  asChild?: boolean;
}

/**
 * Badge component for displaying status indicators and labels.
 *
 * @example
 * ```tsx
 * <Badge variant="success">Active</Badge>
 * <Badge variant="accent">New Item</Badge>
 * ```
 *
 * @remarks
 * Supports multiple variants for different use cases including
 * semantic colors and status indicators.
 */
const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
