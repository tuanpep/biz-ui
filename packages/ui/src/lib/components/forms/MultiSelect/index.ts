/**
 * MultiSelect Component Module
 *
 * Following Carbon's component export pattern:
 * - Main components as named exports
 * - Variants utilities
 * - Type exports
 */

// Main components
export { MultiSelect, MultiSelectTag } from './MultiSelect';

// Variants
export {
  multiSelectVariants,
  multiSelectTriggerVariants,
  multiSelectMenuVariants,
  multiSelectItemVariants,
  multiSelectTagVariants,
} from './MultiSelect.variants';

// Types
export type {
  MultiSelectProps,
  MultiSelectTagProps,
  MultiSelectSize,
  MultiSelectOption,
} from './MultiSelect.types';
