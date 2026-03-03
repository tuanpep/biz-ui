/**
 * ButtonSet Component
 *
 * A container for grouping related buttons with consistent spacing.
 * Following Carbon's ButtonSet pattern for button groupings.
 *
 * @example
 * ```tsx
 * <ButtonSet>
 *   <Button variant="secondary">Cancel</Button>
 *   <Button variant="primary">Submit</Button>
 * </ButtonSet>
 * ```
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import type { ButtonSetProps } from './Button.types';

// ============================================================================
// ButtonSet Component
// ============================================================================

const ButtonSet = React.forwardRef<HTMLDivElement, ButtonSetProps>(
  (
    {
      className,
      orientation = 'horizontal',
      stacked = false,
      children,
      ...props
    },
    ref
  ) => {
    const isStacked = stacked || orientation === 'vertical';

    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          isStacked ? 'flex-col gap-2' : 'flex-row gap-3',
          className
        )}
        role="group"
        {...props}
      >
        {children}
      </div>
    );
  }
);

ButtonSet.displayName = 'ButtonSet';

export { ButtonSet };
