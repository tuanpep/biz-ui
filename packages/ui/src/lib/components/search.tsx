import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';
import { Search as SearchIcon, X } from 'lucide-react';

/**
 * Search Component
 *
 * Biz UI aligned search input with:
 * - Search icon prefix
 * - Clear button
 * - Expandable variant
 * - Loading state
 */

const searchVariants = cva(
  'relative flex items-center',
  {
    variants: {
      size: {
        sm: 'h-8',
        md: 'h-10',
        lg: 'h-12',
      },
      expandable: {
        true: '',
        false: 'w-full',
      },
    },
    defaultVariants: {
      size: 'md',
      expandable: false,
    },
  }
);

const searchInputVariants = cva(
  'flex w-full border bg-background pl-10 pr-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-150',
  {
    variants: {
      variant: {
        default: 'border-input',
        filled: 'border-transparent bg-muted',
        unstyled: 'border-none bg-transparent shadow-none focus-visible:ring-0',
      },
      size: {
        sm: 'h-8 text-xs rounded-none pl-8 pr-8',
        md: 'h-10 text-sm rounded-none pl-10 pr-10',
        lg: 'h-12 text-base rounded-none pl-12 pr-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

const searchIconVariants = cva(
  'absolute left-0 text-muted-foreground pointer-events-none',
  {
    variants: {
      size: {
        sm: 'left-2.5 h-3.5 w-3.5',
        md: 'left-3 h-4 w-4',
        lg: 'left-4 h-5 w-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const clearButtonVariants = cva(
  'absolute right-0 inline-flex items-center justify-center rounded-none text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors',
  {
    variants: {
      size: {
        sm: 'right-2 h-4 w-4',
        md: 'right-3 h-4 w-4',
        lg: 'right-4 h-5 w-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface SearchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
  VariantProps<typeof searchVariants>,
  VariantProps<typeof searchInputVariants> {
  /** Label text for accessibility */
  label?: string;
  /** Description text shown below the search */
  description?: string;
  /** Error message to display */
  error?: string;
  /** Show loading spinner */
  loading?: boolean;
  /** Controlled value for clear button visibility */
  value?: string;
  /** Default value for uncontrolled input */
  defaultValue?: string;
  /** Callback when value changes */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Callback when clear button is clicked */
  onClear?: () => void;
  /** Callback when search is submitted (Enter key) */
  onSearch?: (value: string) => void;
  /** Additional wrapper className */
  wrapperClassName?: string;
  /** Hide clear button */
  hideClear?: boolean;
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      className,
      wrapperClassName,
      variant,
      size = 'md',
      expandable,
      label = 'Search',
      description,
      error,
      loading = false,
      value: controlledValue,
      defaultValue,
      onChange,
      onClear,
      onSearch,
      hideClear = false,
      disabled,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue ?? '');
    const value = controlledValue ?? uncontrolledValue;
    const hasValue = Boolean(value);
    const hasError = !!error;

    const generatedId = React.useId();
    const inputId = props.id || generatedId;
    const descriptionId = `${inputId}-description`;
    const errorId = `${inputId}-error`;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUncontrolledValue(event.target.value);
      onChange?.(event);
    };

    const handleClear = () => {
      setUncontrolledValue('');
      onClear?.();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        onSearch?.(value as string);
      }
      onKeyDown?.(event);
    };

    // Build aria-describedby
    const ariaDescribedBy = [
      description && !error ? descriptionId : null,
      error ? errorId : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    const searchInput = (
      <div className={cn(searchVariants({ size, expandable }), wrapperClassName)}>
        <SearchIcon className={cn(searchIconVariants({ size }))} aria-hidden="true" />
        <input
          ref={ref}
          type="search"
          id={inputId}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={cn(
            searchInputVariants({ variant, size }),
            hasError && 'border-destructive focus-visible:ring-destructive',
            className
          )}
          disabled={disabled || loading}
          aria-label={label}
          aria-invalid={hasError}
          aria-describedby={ariaDescribedBy}
          {...props}
        />
        {loading && (
          <span className={cn(clearButtonVariants({ size }), 'animate-spin')}>
            <svg
              className="h-full w-full"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        )}
        {!loading && hasValue && !hideClear && (
          <button
            type="button"
            className={cn(clearButtonVariants({ size }))}
            onClick={handleClear}
            aria-label="Clear search"
            tabIndex={-1}
          >
            <X className="h-full w-full" aria-hidden="true" />
          </button>
        )}
      </div>
    );

    if (!description && !error) {
      return searchInput;
    }

    return (
      <div className="grid w-full gap-1.5">
        {searchInput}
        <div>
          {description && !error && (
            <p id={descriptionId} className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
          {error && (
            <p id={errorId} className="text-xs text-destructive" role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Search.displayName = 'Search';

// Expandable Search - pre-configured with expandable prop
export type ExpandableSearchProps = Omit<SearchProps, 'expandable'>;

const ExpandableSearch = React.forwardRef<HTMLInputElement, ExpandableSearchProps>(
  (props, ref) => {
    const [expanded, setExpanded] = React.useState(false);

    return (
      <Search
        ref={ref}
        expandable
        className={cn(
          'transition-all duration-200',
          expanded ? 'w-64' : 'w-10'
        )}
        onFocus={() => setExpanded(true)}
        onBlur={(e) => {
          if (!e.target.value) {
            setExpanded(false);
          }
          props.onBlur?.(e);
        }}
        {...props}
      />
    );
  }
);

ExpandableSearch.displayName = 'ExpandableSearch';

export { Search, ExpandableSearch, searchVariants };
