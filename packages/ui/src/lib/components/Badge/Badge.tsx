/**
 * Badge Component
 *
 * Design Principles:
 * - Semantic colors for different states
 * - Clear contrast for readability
 * - Consistent sizing and spacing
 * - Solid colors - no opacity
 *
 * @example
 * ```tsx
 * <Badge variant="success">Active</Badge>
 * <Badge variant="accent">New Item</Badge>
 * ```
 */

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../utils/cn';
import { badgeVariants } from './Badge.variants';
import type { BadgeProps, BadgeVariant, BadgeSize } from './Badge.types';

// ============================================================================
// Badge Component
// ============================================================================

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

// ============================================================================
// Exports
// ============================================================================

export { Badge };
export { badgeVariants } from './Badge.variants';
export type { BadgeProps, BadgeVariant, BadgeSize } from './Badge.types';
