/**
 * i18n (Internationalization) utilities for Biz UI.
 * Following Carbon's translateWithId pattern.
 */

import * as React from "react";
import { createContext } from "../utils/create-context";

// ============================================================================
// Types
// ============================================================================

/**
 * Translation message ID type.
 */
export type MessageId = string;

/**
 * Translation function type.
 */
export type TranslateFn<MID = MessageId, ARGS = Record<string, unknown>> = (
  messageId: MID,
  args?: ARGS,
) => string;

/**
 * Translation context value.
 */
export interface TranslationContextValue<
  MID = MessageId,
  ARGS = Record<string, unknown>,
> {
  /** Translation function */
  t: TranslateFn<MID, ARGS>;
  /** Current locale */
  locale: string;
}

// ============================================================================
// Default Translations
// ============================================================================

export const defaultTranslations: Record<string, string> = {
  // Button
  "button.loading": "Loading...",
  "button.aria.close": "Close",

  // Input
  "input.required": "This field is required",
  "input.placeholder": "Enter value",
  "input.clear": "Clear",

  // Select
  "select.placeholder": "Select an option",
  "select.clear": "Clear selection",
  "select.noResults": "No results found",
  "select.loading": "Loading...",

  // Pagination
  "pagination.next": "Next",
  "pagination.previous": "Previous",
  "pagination.page": "Page",
  "pagination.of": "of",
  "pagination.itemsPerPage": "Items per page",

  // Modal
  "modal.close": "Close",
  "modal.aria.close": "Close modal",

  // Toast
  "toast.close": "Close notification",
  "toast.aria.close": "Close notification",

  // Accordion
  "accordion.open": "Open",
  "accordion.close": "Close",

  // Tabs
  "tabs.selected": "selected",
  "tabs.previous": "Previous tab",
  "tabs.next": "Next tab",

  // DatePicker
  "datePicker.previousMonth": "Previous month",
  "datePicker.nextMonth": "Next month",
  "datePicker.selectMonth": "Select month",
  "datePicker.selectYear": "Select year",
  "datePicker.clear": "Clear date",

  // FileUploader
  "fileUploader.browse": "Browse files",
  "fileUploader.clear": "Clear file",
  "fileUploader.remove": "Remove file",

  // Search
  "search.clear": "Clear search",
  "search.placeholder": "Search...",

  // Table
  "table.sort": "Sort",
  "table.sorted": "Sorted",
  "table.unsorted": "Unsorted",
  "table.expand": "Expand row",
  "table.collapse": "Collapse row",
  "table.noData": "No data available",
  "table.selectAll": "Select all",
  "table.selectAllRows": "Select all rows",
  "table.selectRow": "Select row",

  // TimePicker
  "timePicker.am": "AM",
  "timePicker.pm": "PM",
  "timePicker.clear": "Clear time",

  // Checkbox
  "checkbox.checked": "checked",
  "checkbox.unchecked": "unchecked",
  "checkbox.indeterminate": "indeterminate",

  // Radio
  "radio.selected": "selected",
  "radio.unselected": "not selected",

  // Switch
  "switch.on": "On",
  "switch.off": "Off",

  // Alert
  "alert.close": "Close alert",
  "alert.dismiss": "Dismiss",

  // Dialog
  "dialog.close": "Close",
  "dialog.cancel": "Cancel",
  "dialog.confirm": "Confirm",
};

// ============================================================================
// Context
// ============================================================================

const [TranslationProvider, useTranslationContext, TranslationContext] =
  createContext<TranslationContextValue>({
    name: "Translation",
    defaultValue: {
      t: (messageId) => defaultTranslations[messageId] || messageId,
      locale: "en",
    },
  });

// ============================================================================
// Provider Props
// ============================================================================

export interface I18nProviderProps {
  /** Custom translations */
  translations?: Record<string, string>;
  /** Current locale */
  locale?: string;
  /** Custom translation function */
  translateFn?: TranslateFn;
  /** Child components */
  children: React.ReactNode;
}

// ============================================================================
// Provider Component
// ============================================================================

export function I18nProvider({
  translations,
  locale = "en",
  translateFn,
  children,
}: I18nProviderProps): React.JSX.Element {
  const mergedTranslations = React.useMemo(
    () => ({ ...defaultTranslations, ...translations }),
    [translations],
  );

  const t = React.useCallback<TranslateFn>(
    (messageId, args) => {
      if (translateFn) {
        return translateFn(messageId, args);
      }

      let message = mergedTranslations[messageId] || messageId;

      // Replace placeholders like {count} with args
      if (args) {
        Object.entries(args).forEach(([key, value]) => {
          message = message.replace(new RegExp(`{${key}}`, "g"), String(value));
        });
      }

      return message;
    },
    [mergedTranslations, translateFn],
  );

  const value = React.useMemo(() => ({ t, locale }), [t, locale]);

  return <TranslationProvider value={value}>{children}</TranslationProvider>;
}

// ============================================================================
// Hook
// ============================================================================

/**
 * Hook to access translation function.
 *
 * @example
 * ```tsx
 * const { t } = useTranslation();
 * const label = t('button.loading');
 * ```
 */
export function useTranslation(): TranslationContextValue {
  return useTranslationContext();
}

/**
 * Hook to translate a specific message ID.
 * Convenience hook for components that only need translation.
 *
 * @example
 * ```tsx
 * const label = useTranslate('button.loading');
 * const withArgs = useTranslate('pagination.page', { current: 1, total: 10 });
 * ```
 */
export function useTranslate<
  MID extends MessageId,
  ARGS extends Record<string, unknown>,
>(messageId: MID, args?: ARGS): string {
  const { t } = useTranslationContext();
  return t(messageId, args);
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Create a translateWithId prop function for a component.
 * Useful for components that support custom translations.
 *
 * @example
 * ```tsx
 * interface MyComponentProps {
 *   translateWithId?: (id: string) => string;
 * }
 *
 * const MyComponent = ({ translateWithId }) => {
 *   const t = createTranslateWithId(translateWithId, defaultMessages);
 *   return <span>{t('myComponent.label')}</span>;
 * };
 * ```
 */
export function createTranslateWithId<
  MID extends string,
  ARGS extends Record<string, unknown>,
>(
  customTranslate: TranslateFn<MID, ARGS> | undefined,
  defaultMessages: Record<MID, string>,
): TranslateFn<MID, ARGS> {
  return (messageId: MID, args?: ARGS) => {
    if (customTranslate) {
      return customTranslate(messageId, args);
    }
    return defaultMessages[messageId] || messageId;
  };
}

// ============================================================================
// Exports
// ============================================================================

export { TranslationContext };
