/**
 * Feature Flags Provider for Biz UI components.
 * Allows enabling/disabling features at runtime.
 * Following Carbon's feature flags pattern.
 *
 * @example
 * ```tsx
 * import { FeatureFlagsProvider, useFeatureFlag } from '@repo/ui';
 *
 * function App() {
 *   return (
 *     <FeatureFlagsProvider flags={{ enableExperimentalFeatures: true }}>
 *       <MyComponent />
 *     </FeatureFlagsProvider>
 *   );
 * }
 *
 * function MyComponent() {
 *   const isEnabled = useFeatureFlag('enableExperimentalFeatures');
 *   return isEnabled ? <NewFeature /> : <OldFeature />;
 * }
 * ```
 */

import * as React from "react";
import { createContext } from "../utils/create-context";

// ============================================================================
// Feature Flag Types
// ============================================================================

/**
 * Available feature flags for Biz UI.
 */
export interface FeatureFlags {
  /** Enable experimental features */
  "enable-experimental-features": boolean;
  /** Enable dark mode support */
  "enable-dark-mode": boolean;
  /** Enable CSS custom properties for theming */
  "enable-css-custom-properties": boolean;
  /** Enable CSS Grid layout */
  "enable-css-grid": boolean;
  /** Enable new tile contrast styles */
  "enable-tile-contrast": boolean;
  /** Enable v12 dynamic floating styles */
  "enable-dynamic-floating-styles": boolean;
  /** Enable ai features */
  "enable-ai-features": boolean;
  /** Enable async loading for icons */
  "enable-async-icon-loading": boolean;
}

/**
 * Feature flag keys.
 */
export type FeatureFlag = keyof FeatureFlags;

// ============================================================================
// Default Feature Flags
// ============================================================================

export const defaultFeatureFlags: FeatureFlags = {
  "enable-experimental-features": false,
  "enable-dark-mode": false,
  "enable-css-custom-properties": true,
  "enable-css-grid": true,
  "enable-tile-contrast": false,
  "enable-dynamic-floating-styles": false,
  "enable-ai-features": false,
  "enable-async-icon-loading": false,
};

// ============================================================================
// Context
// ============================================================================

const [
  FeatureFlagsContextProvider,
  useFeatureFlagsContext,
  FeatureFlagsContext,
] = createContext<{
  flags: FeatureFlags;
  setFlag: <K extends FeatureFlag>(flag: K, value: FeatureFlags[K]) => void;
}>({
  name: "FeatureFlags",
  defaultValue: {
    flags: defaultFeatureFlags,
    setFlag: () => {
      console.warn("FeatureFlagsProvider not found. Using default flags.");
    },
  },
});

// ============================================================================
// Provider Props
// ============================================================================

export interface FeatureFlagsProviderProps {
  /** Initial feature flags */
  flags?: Partial<FeatureFlags>;
  /** Child components */
  children: React.ReactNode;
}

// ============================================================================
// Provider Component
// ============================================================================

export function FeatureFlagsProvider({
  flags: initialFlags,
  children,
}: FeatureFlagsProviderProps): React.JSX.Element {
  const [flags, setFlags] = React.useState<FeatureFlags>(() => ({
    ...defaultFeatureFlags,
    ...initialFlags,
  }));

  const setFlag = React.useCallback(
    <K extends FeatureFlag>(flag: K, value: FeatureFlags[K]) => {
      setFlags((prev) => ({ ...prev, [flag]: value }));
    },
    [],
  );

  const value = React.useMemo(() => ({ flags, setFlag }), [flags, setFlag]);

  return (
    <FeatureFlagsContextProvider value={value}>
      {children}
    </FeatureFlagsContextProvider>
  );
}

// ============================================================================
// Hooks
// ============================================================================

/**
 * Check if a feature flag is enabled.
 *
 * @example
 * ```tsx
 * const isEnabled = useFeatureFlag('enable-experimental-features');
 * ```
 */
export function useFeatureFlag<K extends FeatureFlag>(
  flag: K,
): FeatureFlags[K] {
  const { flags } = useFeatureFlagsContext();
  return flags[flag];
}

/**
 * Get all feature flags.
 *
 * @example
 * ```tsx
 * const flags = useFeatureFlags();
 * console.log(flags['enable-experimental-features']);
 * ```
 */
export function useFeatureFlags(): FeatureFlags {
  const { flags } = useFeatureFlagsContext();
  return flags;
}

/**
 * Set a feature flag at runtime.
 *
 * @example
 * ```tsx
 * const setFlag = useSetFeatureFlag();
 * setFlag('enable-experimental-features', true);
 * ```
 */
export function useSetFeatureFlag(): <K extends FeatureFlag>(
  flag: K,
  value: FeatureFlags[K],
) => void {
  const { setFlag } = useFeatureFlagsContext();
  return setFlag;
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Merge feature flags with defaults.
 * Useful for testing or partial configuration.
 */
export function mergeFeatureFlags(flags: Partial<FeatureFlags>): FeatureFlags {
  return { ...defaultFeatureFlags, ...flags };
}

// ============================================================================
// Exports
// ============================================================================

export { FeatureFlagsContext };
