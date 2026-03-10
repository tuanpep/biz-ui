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
} from "./Table";

// Variants
export { tableVariants } from "./Table.variants";

// Types
export type { TableProps, TableSize } from "./Table.types";
