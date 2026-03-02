/**
 * Shared variant types for biz-ui components
 * These types ensure consistency across all components
 */

/** Standard size variants */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** Standard radius variants */
export type Radius = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

/** Standard color variants */
export type Color = 'primary' | 'secondary' | 'destructive' | 'success' | 'warning' | 'info';

/**
 * Default size mappings.
 * @deprecated Not used internally by biz-ui components. Each component defines its own sizes via CVA. Will be removed in a future version.
 */
export const defaultSizes: Record<Size, string> = {
  xs: 'h-6 px-2 text-xs',
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
  xl: 'h-14 px-6 text-lg',
} as const;

/**
 * Default radius mappings.
 * @deprecated Not used internally by biz-ui components. Each component defines its own radius via CVA. Will be removed in a future version.
 */
export const defaultRadius: Record<Radius, string> = {
  xs: 'rounded-sm',
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
} as const;

