/**
 * Providers for Biz UI components.
 * Following Carbon's provider patterns.
 */

// Prefix Provider
export {
  PrefixProvider,
  usePrefix,
  addPrefix,
  createPrefixedClass,
  PrefixContext,
  type PrefixProviderProps,
} from './prefix-provider';

// Feature Flags Provider
export {
  FeatureFlagsProvider,
  useFeatureFlag,
  useFeatureFlags,
  useSetFeatureFlag,
  mergeFeatureFlags,
  FeatureFlagsContext,
  defaultFeatureFlags,
  type FeatureFlags,
  type FeatureFlag,
  type FeatureFlagsProviderProps,
} from './feature-flags-provider';
