/**
 * Stack component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * Stack gap types.
 */
export type StackGap = VariantProps<typeof import('./Stack.variants').stackVariants>['gap'];

/**
 * Stack align types.
 */
export type StackAlign = VariantProps<typeof import('./Stack.variants').stackVariants>['align'];

/**
 * Stack justify types.
 */
export type StackJustify = VariantProps<typeof import('./Stack.variants').stackVariants>['justify'];

/**
 * Stack direction types.
 */
export type StackDirection = VariantProps<typeof import('./Stack.variants').stackVariants>['direction'];

/**
 * Stack component props.
 */
export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof import('./Stack.variants').stackVariants> {
  /** Map to child element */
  asChild?: boolean;
  /** Reverse the order of items */
  reverse?: boolean;
}

/**
 * HStack component props.
 */
export type HStackProps = Omit<StackProps, 'direction'>;

/**
 * VStack component props.
 */
export type VStackProps = Omit<StackProps, 'direction'>;
