/**
 * Table Component
 *
 * Biz UI aligned table with:
 * - Clear horizontal rules, ample padding, typographic hierarchy
 * - Support for sticky headers
 * - Zebra striping option (Biz UI pattern)
 * - Size variants (sm, md, lg)
 * - Consistent styling with card components
 * - Accessible table structure (WCAG 2.1 AA)
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { tableVariants } from './table.variants';
import type { TableProps } from './table.types';

// ============================================================================
// Table Component
// ============================================================================

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, stickyHeader, useZebraStyles, size, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={cn(tableVariants({ stickyHeader, useZebraStyles, size }), className)}
        {...props}
      />
    </div>
  )
);
Table.displayName = 'Table';

// ============================================================================
// Table Header
// ============================================================================

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

// ============================================================================
// Table Body
// ============================================================================

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn('[&_tr:last-child]:border-0', className)} {...props} />
));
TableBody.displayName = 'TableBody';

// ============================================================================
// Table Footer
// ============================================================================

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

// ============================================================================
// Table Row
// ============================================================================

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-primary/10',
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

// ============================================================================
// Table Head
// ============================================================================

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'text-left align-middle font-semibold text-muted-foreground [&:has([role=checkbox])]:pr-0',
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

// ============================================================================
// Table Cell
// ============================================================================

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn('align-middle [&:has([role=checkbox])]:pr-0', className)}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

// ============================================================================
// Table Caption
// ============================================================================

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-muted-foreground', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';

// ============================================================================
// Exports
// ============================================================================

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
};
