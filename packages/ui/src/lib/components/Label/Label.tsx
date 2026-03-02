/**
 * Label Component
 *
 * Design Principles:
 * - Consistent sizing with Input and other form elements
 * - Clear visual hierarchy
 * - Accessible form labeling
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { labelVariants } from './Label.variants';
import type { LabelProps } from './Label.types';

// ============================================================================
// Label Component
// ============================================================================

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, size, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(labelVariants({ size }), className)}
      {...props}
    />
  )
);
Label.displayName = 'Label';

// ============================================================================
// Exports
// ============================================================================

export { Label };
