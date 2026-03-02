/**
 * RadioGroup Component
 *
 * Design Principles:
 * - Clear selected/unselected states
 * - Accessible keyboard navigation
 * - Consistent sizing with other form elements
 * - Support for labels and descriptions
 */

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import { cn } from '../../utils/cn';
import { radioGroupItemVariants, radioIndicatorVariants } from './RadioGroup.variants';
import type { RadioGroupProps, RadioGroupItemProps } from './RadioGroup.types';

// ============================================================================
// RadioGroup Component
// ============================================================================

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, orientation = 'vertical', ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(
        'grid gap-2',
        orientation === 'horizontal' && 'flex flex-row gap-4',
        className
      )}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = 'RadioGroup';

// ============================================================================
// RadioGroupItem Component
// ============================================================================

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, variant, size, label, description, ...props }, ref) => {
  const innerRef = React.useRef<React.ElementRef<typeof RadioGroupPrimitive.Item>>(null);
  const generatedId = React.useId();
  const itemId = props.id || generatedId;

  // Expose the inner radio element to the parent ref
  React.useImperativeHandle(ref, () => innerRef.current as React.ElementRef<typeof RadioGroupPrimitive.Item>);

  const radio = (
    <RadioGroupPrimitive.Item
      ref={innerRef}
      id={itemId}
      className={cn(radioGroupItemVariants({ variant, size }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className={cn(radioIndicatorVariants({ size }))}>
        <Circle className="h-full w-full fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );

  if (!label && !description) {
    return radio;
  }

  return (
    <div className="flex items-start space-x-2">
      <div className="pt-0.5">
        {radio}
      </div>
      <div className="grid gap-1.5 leading-none">
        {label && (
          <label
            htmlFor={itemId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            {label}
          </label>
        )}
        {description && (
          <p className="text-sm text-muted-foreground leading-normal">{description}</p>
        )}
      </div>
    </div>
  );
});
RadioGroupItem.displayName = 'RadioGroupItem';

// ============================================================================
// Exports
// ============================================================================

export { RadioGroup, RadioGroupItem };
export { radioGroupItemVariants, radioIndicatorVariants } from './RadioGroup.variants';
export type { RadioGroupProps, RadioGroupItemProps, RadioGroupSkeletonProps, RadioGroupVariant, RadioGroupSize } from './RadioGroup.types';
