/**
 * Table Component Module
 *
 * Following Carbon's component export pattern:
 * - Main components as named exports
 * - Variants utility
 * - Type exports
 */

// Main components
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from './table';

// Variants
export { tableVariants } from './table.variants';

// Types
export type { TableProps, TableSize } from './table.types';
