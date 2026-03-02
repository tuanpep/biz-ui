import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

/**
 * Radio Group Component
 *
 * Design Principles:
 * - Clear selected/unselected states
 * - Accessible keyboard navigation
 * - Consistent sizing with other form elements
 * - Support for labels and descriptions
 */

const radioGroupItemVariants = cva(
  'flex items-center justify-center aspect-square rounded-full border border-primary text-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
  {
    variants: {
      variant: {
        default: '',
        destructive: 'border-destructive text-destructive',
        success: 'border-success text-success',
      },
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

const radioIndicatorVariants = cva('flex items-center justify-center', {
  variants: {
    size: {
      sm: 'h-2 w-2',
      md: 'h-2.5 w-2.5',
      lg: 'h-3 w-3',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = 'RadioGroup';

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  VariantProps<typeof radioGroupItemVariants> &
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    /** Label text for the radio item */
    label?: string;
    /** Description text shown below the label */
    description?: string;
  }
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
      <RadioGroupPrimitive.Indicator className={radioIndicatorVariants({ size })}>
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

export { RadioGroup, RadioGroupItem, radioGroupItemVariants };
