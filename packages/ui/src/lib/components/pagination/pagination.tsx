/**
 * Pagination Component
 *
 * Biz UI aligned pagination with:
 * - Page numbers with ellipsis
 * - Previous/Next navigation
 * - First/Last page navigation
 * - Page size selector
 * - Total count display
 * - Keyboard navigation
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { paginationVariants, paginationButtonVariants, iconSizes } from './pagination.variants';
import type { PaginationProps, PaginationNavProps } from './pagination.types';

// ============================================================================
// Pagination Component
// ============================================================================

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      className,
      size = 'md',
      page,
      total,
      onChange,
      showFirstLast = false,
      showPageSize = false,
      pageSizes = [10, 20, 50, 100],
      pageSize = 10,
      onPageSizeChange,
      showTotal = false,
      totalItems,
      itemName = 'items',
      siblingsCount = 1,
      disabled = false,
      ...props
    },
    ref
  ) => {
    // Generate page numbers with ellipsis
    const getPageNumbers = (): (number | 'ellipsis')[] => {
      const pages: (number | 'ellipsis')[] = [];

      // Always show first page
      pages.push(1);

      // Calculate range around current page
      const leftSibling = Math.max(2, page - siblingsCount);
      const rightSibling = Math.min(total - 1, page + siblingsCount);

      // Add ellipsis on left if needed
      if (leftSibling > 2) {
        pages.push('ellipsis');
      }

      // Add pages in range
      for (let i = leftSibling; i <= rightSibling; i++) {
        pages.push(i);
      }

      // Add ellipsis on right if needed
      if (rightSibling < total - 1) {
        pages.push('ellipsis');
      }

      // Always show last page if more than 1 page
      if (total > 1) {
        pages.push(total);
      }

      return pages;
    };

    const handlePageChange = (newPage: number) => {
      if (disabled) return;
      if (newPage < 1 || newPage > total) return;
      if (newPage === page) return;
      onChange?.(newPage);
    };

    const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newPageSize = parseInt(event.target.value, 10);
      onPageSizeChange?.(newPageSize);
    };

    const canGoPrev = page > 1;
    const canGoNext = page < total;

    const pageNumbers = total > 0 ? getPageNumbers() : [];

    // Calculate display range
    const startItem = totalItems ? (page - 1) * pageSize + 1 : 0;
    const endItem = totalItems ? Math.min(page * pageSize, totalItems) : 0;

    return (
      <div
        ref={ref}
        className={cn(paginationVariants({ size }), className)}
        role="navigation"
        aria-label="Pagination"
        {...props}
      >
        {/* Page size selector */}
        {showPageSize && (
          <div className="flex items-center gap-2 mr-4">
            <span className="text-muted-foreground">Show:</span>
            <select
              value={pageSize}
              onChange={handlePageSizeChange}
              disabled={disabled}
              className={cn(
                'border rounded-none bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                size === 'sm' && 'h-7 px-2 text-xs',
                size === 'md' && 'h-9 px-2 text-sm',
                size === 'lg' && 'h-10 px-3 text-base'
              )}
              aria-label="Items per page"
            >
              {pageSizes.map((ps) => (
                <option key={ps} value={ps}>
                  {ps}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Total count */}
        {showTotal && totalItems !== undefined && (
          <span className="text-muted-foreground mr-4">
            {startItem}-{endItem} of {totalItems} {itemName}
          </span>
        )}

        {/* First page */}
        {showFirstLast && (
          <button
            type="button"
            className={cn(paginationButtonVariants({ size }))}
            onClick={() => handlePageChange(1)}
            disabled={disabled || !canGoPrev}
            aria-label="First page"
          >
            <ChevronsLeft className={iconSizes[size || 'md']} aria-hidden="true" />
          </button>
        )}

        {/* Previous page */}
        <button
          type="button"
          className={cn(paginationButtonVariants({ size }))}
          onClick={() => handlePageChange(page - 1)}
          disabled={disabled || !canGoPrev}
          aria-label="Previous page"
        >
          <ChevronLeft className={iconSizes[size || 'md']} aria-hidden="true" />
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {pageNumbers.map((pageNumber, index) => {
            if (pageNumber === 'ellipsis') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className={cn(paginationButtonVariants({ variant: 'ellipsis', size }))}
                  aria-hidden="true"
                >
                  ...
                </span>
              );
            }

            const isActive = pageNumber === page;

            return (
              <button
                key={pageNumber}
                type="button"
                className={cn(
                  paginationButtonVariants({ variant: isActive ? 'active' : 'default', size })
                )}
                onClick={() => handlePageChange(pageNumber)}
                disabled={disabled}
                aria-label={`Page ${pageNumber}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        {/* Next page */}
        <button
          type="button"
          className={cn(paginationButtonVariants({ size }))}
          onClick={() => handlePageChange(page + 1)}
          disabled={disabled || !canGoNext}
          aria-label="Next page"
        >
          <ChevronRight className={iconSizes[size || 'md']} aria-hidden="true" />
        </button>

        {/* Last page */}
        {showFirstLast && (
          <button
            type="button"
            className={cn(paginationButtonVariants({ size }))}
            onClick={() => handlePageChange(total)}
            disabled={disabled || !canGoNext}
            aria-label="Last page"
          >
            <ChevronsRight className={iconSizes[size || 'md']} aria-hidden="true" />
          </button>
        )}
      </div>
    );
  }
);

Pagination.displayName = 'Pagination';

// ============================================================================
// Pagination Nav Component
// ============================================================================

/**
 * Pagination Nav - simpler variant with just prev/next.
 */
const PaginationNav = React.forwardRef<HTMLDivElement, PaginationNavProps>(
  (
    {
      className,
      size = 'md',
      page,
      total,
      onChange,
      disabled = false,
      showIndicator = true,
      ...props
    },
    ref
  ) => {
    const canGoPrev = page > 1;
    const canGoNext = page < total;

    const handlePageChange = (newPage: number) => {
      if (disabled) return;
      if (newPage < 1 || newPage > total) return;
      onChange?.(newPage);
    };

    return (
      <div
        ref={ref}
        className={cn(paginationVariants({ size }), 'gap-2', className)}
        role="navigation"
        aria-label="Pagination"
        {...props}
      >
        <button
          type="button"
          className={cn(paginationButtonVariants({ size }), 'gap-1 px-3')}
          onClick={() => handlePageChange(page - 1)}
          disabled={disabled || !canGoPrev}
          aria-label="Previous page"
        >
          <ChevronLeft className={iconSizes[size || 'md']} aria-hidden="true" />
          <span>Previous</span>
        </button>

        {showIndicator && (
          <span className="text-muted-foreground px-2">
            {page} / {total}
          </span>
        )}

        <button
          type="button"
          className={cn(paginationButtonVariants({ size }), 'gap-1 px-3')}
          onClick={() => handlePageChange(page + 1)}
          disabled={disabled || !canGoNext}
          aria-label="Next page"
        >
          <span>Next</span>
          <ChevronRight className={iconSizes[size || 'md']} aria-hidden="true" />
        </button>
      </div>
    );
  }
);

PaginationNav.displayName = 'PaginationNav';

// ============================================================================
// Exports
// ============================================================================

export { Pagination, PaginationNav };
