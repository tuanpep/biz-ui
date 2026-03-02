/**
 * Switch Component
 *
 * Design Principles:
 * - Clear on/off visual states
 * - Smooth transition animation
 * - Accessible keyboard navigation
 * - Support for labels and descriptions
 */

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '../../utils/cn';
import { switchVariants, switchThumbVariants } from './Switch.variants';
import type { SwitchProps } from './Switch.types';

// ============================================================================
// Switch Component
// ============================================================================

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, variant, size, label, description, ...props }, ref) => {
  const generatedId = React.useId();
  const switchId = props.id || generatedId;

  const switchElement = (
    <SwitchPrimitive.Root
      className={cn(switchVariants({ variant, size }), className)}
      id={switchId}
      {...props}
      ref={ref}
    >
      <SwitchPrimitive.Thumb className={cn(switchThumbVariants({ size }))} />
    </SwitchPrimitive.Root>
  );

  if (!label && !description) {
    return switchElement;
  }

  return (
    <div className="flex items-center space-x-2">
      {switchElement}
      <div className="grid gap-1 leading-none">
        {label && (
          <label
            htmlFor={switchId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
});

Switch.displayName = 'Switch';

// ============================================================================
// Exports
// ============================================================================

export { Switch };
export { switchVariants, switchThumbVariants } from './Switch.variants';
export type { SwitchProps, SwitchSkeletonProps, SwitchVariant, SwitchSize } from './Switch.types';
