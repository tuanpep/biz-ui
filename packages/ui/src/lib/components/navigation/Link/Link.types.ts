/**
 * Link component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * Link variant types.
 */
export type LinkVariant = VariantProps<typeof import('./Link.variants').linkVariants>['variant'];

/**
 * Link underline types.
 */
export type LinkUnderline = VariantProps<typeof import('./Link.variants').linkVariants>['underline'];

/**
 * Link size types.
 */
export type LinkSize = VariantProps<typeof import('./Link.variants').linkVariants>['size'];

/**
 * Link component props.
 */
export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'size'>,
    VariantProps<typeof import('./Link.variants').linkVariants> {
  /** Show external link icon */
  external?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Render as a span instead of anchor (for non-interactive links) */
  asSpan?: boolean;
}
