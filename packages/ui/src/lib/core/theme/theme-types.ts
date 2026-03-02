/**
 * Theme types for biz-ui components.
 * These types define the structure of the theme object.
 */

import type { Radius, Size } from '../../types/variants';

/** Color scale with multiple shades */
export type ColorScale = string[];

/** Named colors in the theme */
export type OceanColors = {
  primary: ColorScale;
  secondary: ColorScale;
  destructive: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  info: ColorScale;
  gray: ColorScale;
} & Record<string, ColorScale | undefined>;

/** Typography settings */
export interface OceanTypography {
  fontFamily: string;
  fontFamilyMonospace: string;
  fontSizes: Record<Size, string>;
  lineHeights: Record<Size, string>;
}

/** Spacing scale */
export interface OceanSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
}

/** Shadow scale */
export interface OceanShadows {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

/** Radius scale */
export interface OceanRadius {
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
export interface OceanTheme {
  /** Color palette */
  colors: OceanColors;
  /** Primary color name */
  primaryColor: string;
  /** Typography settings */
  typography: OceanTypography;
  /** Spacing scale */
  spacing: OceanSpacing;
  /** Shadow scale */
  shadows: OceanShadows;
  /** Border radius scale */
  radius: OceanRadius;
  /** Default radius to use */
  defaultRadius: Radius;
  /** Focus ring style: 'auto' | 'always' | 'never' */
  focusRing: 'auto' | 'always' | 'never';
  /** Component-specific overrides */
  components: Record<string, ComponentThemeOverride>;
  /** CSS selector for theme */
  cssVariablesSelector: string;
  /** Whether to respect prefers-reduced-motion */
  respectReducedMotion: boolean;
}

/** Theme context value */
export interface OceanThemeContextValue {
  theme: OceanTheme;
  /** Current color scheme */
  colorScheme: 'light' | 'dark';
  /** Set color scheme */
  setColorScheme: (scheme: 'light' | 'dark') => void;
  /** Toggle color scheme */
  toggleColorScheme: () => void;
}
