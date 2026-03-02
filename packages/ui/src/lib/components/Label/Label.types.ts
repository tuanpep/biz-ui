/**
 * Label component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * Label size type.
 */
export type LabelSize = VariantProps<typeof import('./Label.variants').labelVariants>['size'];

/**
 * Label component props.
 */
export interface LabelProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'size'>,
    VariantProps<typeof import('./Label.variants').labelVariants> {}
