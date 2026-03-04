/**
 * Table component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * Table size type.
 */
export type TableSize = VariantProps<typeof import('./table.variants').tableVariants>['size'];

/**
 * Table component props.
 */
export interface TableProps
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof import('./table.variants').tableVariants> {}
