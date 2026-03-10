/* eslint-disable react/prop-types */
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

import * as React from "react";
import { cn } from "../../../utils/cn";
import { tableVariants } from "./Table.variants";
import type { TableProps } from "./Table.types";

// ============================================================================
// Table Component
// ============================================================================

const TableBase = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, stickyHeader, useZebraStyles, size, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={cn(
          tableVariants({ stickyHeader, useZebraStyles, size }),
          className,
        )}
        {...props}
      />
    </div>
  ),
);
TableBase.displayName = "Table";
const Table = React.memo(TableBase);

// ============================================================================
// Table Header
// ============================================================================

const TableHeaderBase = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeaderBase.displayName = "TableHeader";
const TableHeader = React.memo(TableHeaderBase);

// ============================================================================
// Table Body
// ============================================================================

const TableBodyBase = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBodyBase.displayName = "TableBody";
const TableBody = React.memo(TableBodyBase);

// ============================================================================
// Table Footer
// ============================================================================

const TableFooterBase = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className,
    )}
    {...props}
  />
));
TableFooterBase.displayName = "TableFooter";
const TableFooter = React.memo(TableFooterBase);

// ============================================================================
// Table Row - Memoized for performance in large tables
// ============================================================================

const TableRowBase = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-primary/10",
      className,
    )}
    {...props}
  />
));
TableRowBase.displayName = "TableRow";
const TableRow = React.memo(TableRowBase);

// ============================================================================
// Table Head - Memoized for performance in large tables
// ============================================================================

const TableHeadBase = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "text-left align-middle font-semibold text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
));
TableHeadBase.displayName = "TableHead";
const TableHead = React.memo(TableHeadBase);

// ============================================================================
// Table Cell - Memoized for performance in large tables
// ============================================================================

const TableCellBase = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
));
TableCellBase.displayName = "TableCell";
const TableCell = React.memo(TableCellBase);

// ============================================================================
// Table Caption
// ============================================================================

const TableCaptionBase = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaptionBase.displayName = "TableCaption";
const TableCaption = React.memo(TableCaptionBase);

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
