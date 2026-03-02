import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

/**
 * Slider Component
 *
 * Biz UI aligned slider with:
 * - Single or range selection
 * - Multiple size variants
 * - Disabled state
 * - Custom formatting
 */

const sliderVariants = cva(
  'relative flex w-full touch-none select-none items-center',
  {
    variants: {
      size: {
        sm: 'h-4',
        md: 'h-5',
        lg: 'h-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const sliderTrackVariants = cva(
  'relative w-full grow overflow-hidden rounded-full bg-secondary',
  {
    variants: {
      size: {
        sm: 'h-1.5',
        md: 'h-2',
        lg: 'h-2.5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const sliderRangeVariants = cva(
  'absolute h-full bg-primary',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        primary: 'bg-interactive-01',
        secondary: 'bg-interactive-02',
        success: 'bg-success',
        warning: 'bg-warning',
        destructive: 'bg-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const sliderThumbVariants = cva(
  'block rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
      variant: {
        default: 'border-primary',
        primary: 'border-interactive-01',
        secondary: 'border-interactive-02',
        success: 'border-success',
        warning: 'border-warning',
        destructive: 'border-destructive',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

// Track sizes for thumb positioning
const trackSizes = {
  sm: 'h-1.5',
  md: 'h-2',
  lg: 'h-2.5',
} as const;

export interface SliderProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'size'> {
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Color variant */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'destructive';
  /** Label for accessibility */
  label?: string;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, size = 'md', variant, label, ...props }, ref) => {
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(sliderVariants({ size }), className)}
      {...props}
    >
      <SliderPrimitive.Track className={cn(sliderTrackVariants({ size }))}>
        <SliderPrimitive.Range className={cn(sliderRangeVariants({ variant }))} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(sliderThumbVariants({ size, variant }))}
        aria-label={label || 'Slider value'}
      />
    </SliderPrimitive.Root>
  );
});

Slider.displayName = 'Slider';

// Range Slider - slider with two thumbs
export interface RangeSliderProps extends SliderProps {
  /** Label for first thumb */
  startLabel?: string;
  /** Label for second thumb */
  endLabel?: string;
}

const RangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  RangeSliderProps
>(({ label, startLabel, endLabel, ...props }, ref) => {
  return (
    <SliderPrimitive.Root
      ref={ref}
      {...props}
    >
      <SliderPrimitive.Track className={cn(sliderTrackVariants({ size: props.size || 'md' }))}>
        <SliderPrimitive.Range className={cn(sliderRangeVariants({ variant: props.variant }))} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(sliderThumbVariants({ size: props.size || 'md', variant: props.variant }))}
        aria-label={startLabel || label || 'Minimum value'}
      />
      <SliderPrimitive.Thumb
        className={cn(sliderThumbVariants({ size: props.size || 'md', variant: props.variant }))}
        aria-label={endLabel || label || 'Maximum value'}
      />
    </SliderPrimitive.Root>
  );
});

RangeSlider.displayName = 'RangeSlider';

export { Slider, RangeSlider, sliderVariants };
