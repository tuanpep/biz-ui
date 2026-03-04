/**
 * Tabs variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from 'class-variance-authority';

/**
 * TabsList variant styles.
 */
export const tabsListVariants = cva(
  'inline-flex items-center text-text-02 w-full border-b border-border p-0',
  {
    variants: {
      variant: {
        line: 'border-b border-border bg-transparent h-10',
        contained: 'border-none bg-layer-02 h-10',
      },
      size: {
        sm: 'h-8 text-xs',
        md: 'h-10 text-sm',
        lg: 'h-12 text-base',
      },
    },
    defaultVariants: {
      variant: 'line',
      size: 'md',
    },
  }
);

/**
 * TabsTrigger variant styles.
 */
export const tabsTriggerVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative rounded-none',
  {
    variants: {
      variant: {
        line: 'px-4 h-full border-b-2 border-transparent data-[state=active]:border-interactive-01 data-[state=active]:text-text-01 hover:text-text-01 hover:bg-layer-hover/10',
        contained: 'px-6 h-full border-r border-border bg-layer-02 data-[state=active]:bg-layer-01 data-[state=active]:text-text-01 data-[state=active]:border-t-2 data-[state=active]:border-t-interactive-01 hover:bg-layer-hover/20',
      },
      size: {
        sm: 'text-xs px-3',
        md: 'text-sm px-4',
        lg: 'text-base px-6',
      },
    },
    defaultVariants: {
      variant: 'line',
      size: 'md',
    },
  }
);
