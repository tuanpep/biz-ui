/**
 * Theme types for biz-ui components.
 * These types define the structure of the theme object.
 */

import type { Radius, Size } from "../../types/variants";

/** Color scale with multiple shades */
export type ColorScale = string[];

/** Named colors in the theme */
export type BizUIColors = {
  primary: ColorScale;
  secondary: ColorScale;
  destructive: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  info: ColorScale;
  gray: ColorScale;
} & Record<string, ColorScale | undefined>;

/** Typography settings */
export interface BizUITypography {
  fontFamily: string;
  fontFamilyMonospace: string;
  fontSizes: Record<Size, string>;
  lineHeights: Record<Size, string>;
}

/** Spacing scale */
export interface BizUISpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
}

/** Shadow scale */
export interface BizUIShadows {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

/** Radius scale */
export interface BizUIRadius {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
}

/** Component theme override */
export interface ComponentThemeOverride {
  /** Default props for the component */
  defaultProps?: Record<string, unknown>;
  /** Default class names for component parts */
  classNames?: Record<string, string>;
  /** Default styles for component parts */
  styles?: Record<string, React.CSSProperties>;
}

/** Complete theme object */
export interface BizUITheme {
  /** Color palette */
  colors: BizUIColors;
  /** Primary color name */
  primaryColor: string;
  /** Typography settings */
  typography: BizUITypography;
  /** Spacing scale */
  spacing: BizUISpacing;
  /** Shadow scale */
  shadows: BizUIShadows;
  /** Border radius scale */
  radius: BizUIRadius;
  /** Default radius to use */
  defaultRadius: Radius;
  /** Focus ring style: 'auto' | 'always' | 'never' */
  focusRing: "auto" | "always" | "never";
  /** Component-specific overrides */
  components: Record<string, ComponentThemeOverride>;
  /** CSS selector for theme */
  cssVariablesSelector: string;
  /** Whether to respect prefers-reduced-motion */
  respectReducedMotion: boolean;
}

/** Color scheme options */
export type ColorScheme = "light" | "dark" | "auto";

/** Theme context value */
export interface BizUIThemeContextValue {
  theme: BizUITheme;
  /** Current color scheme */
  colorScheme: "light" | "dark";
  /** Set color scheme */
  setColorScheme: (scheme: "light" | "dark") => void;
  /** Toggle color scheme */
  toggleColorScheme: () => void;
  /** Whether dark mode is enabled */
  isDark: boolean;
}

// ============================================================================
// Backwards Compatibility Type Aliases
// ============================================================================

/** @deprecated Use BizUIColors instead */
export type OceanColors = BizUIColors;

/** @deprecated Use BizUITypography instead */
export type OceanTypography = BizUITypography;

/** @deprecated Use BizUISpacing instead */
export type OceanSpacing = BizUISpacing;

/** @deprecated Use BizUIShadows instead */
export type OceanShadows = BizUIShadows;

/** @deprecated Use BizUIRadius instead */
export type OceanRadius = BizUIRadius;

/** @deprecated Use BizUITheme instead */
export type OceanTheme = BizUITheme;

/** @deprecated Use BizUIThemeContextValue instead */
export type OceanThemeContextValue = BizUIThemeContextValue;
