/**
 * BizUIThemeProvider
 *
 * Provides theme context to biz-ui components.
 * Based on Biz UI principles:
 * - Modular and flexible
 * - Puts users first
 * - Builds consistency
 *
 * Features:
 * - Light/Dark mode support with system preference detection
 * - Runtime CSS variable injection
 * - Deep theme customization
 *
 * @example
 * ```tsx
 * import { BizUIThemeProvider, defaultTheme } from 'biz-ui';
 *
 * function App() {
 *   return (
 *     <BizUIThemeProvider defaultColorScheme="auto">
 *       <Button>Click me</Button>
 *     </BizUIThemeProvider>
 *   );
 * }
 * ```
 */

import * as React from "react";
import type {
  BizUITheme,
  BizUIThemeContextValue,
  ColorScheme,
} from "./theme-types";
import { defaultTheme } from "./default-theme";

// ============================================================================
// Context
// ============================================================================

const BizUIThemeContext = React.createContext<BizUIThemeContextValue | null>(
  null,
);

// ============================================================================
// Hook
// ============================================================================

/**
 * Hook to access the biz-ui theme context.
 * Must be used within a BizUIThemeProvider.
 */
export function useBizUITheme(): BizUIThemeContextValue {
  const context = React.useContext(BizUIThemeContext);
  if (!context) {
    throw new Error("useBizUITheme must be used within a BizUIThemeProvider");
  }
  return context;
}

// ============================================================================
// Provider Props
// ============================================================================

export interface BizUIThemeProviderProps {
  /** Custom theme to merge with default theme */
  theme?: Partial<BizUITheme>;
  /** Child components */
  children: React.ReactNode;
  /** Whether to inject CSS variables into the DOM */
  injectCssVariables?: boolean;
  /** Default color scheme: 'light', 'dark', or 'auto' (follows system) */
  defaultColorScheme?: ColorScheme;
  /** Custom class name for the wrapper */
  className?: string;
  /** Custom wrapper element type */
  as?: React.ElementType;
}

// ============================================================================
// Deep Merge Utility
// ============================================================================

function deepMerge<T extends object>(target: T, source: Partial<T>): T {
  const result = { ...target } as T;

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const sourceValue = source[key];
      const targetValue = target[key];

      if (
        sourceValue !== undefined &&
        sourceValue !== null &&
        typeof sourceValue === "object" &&
        !Array.isArray(sourceValue) &&
        targetValue !== undefined &&
        targetValue !== null &&
        typeof targetValue === "object" &&
        !Array.isArray(targetValue)
      ) {
        (result as Record<string, unknown>)[key] = deepMerge(
          targetValue as object,
          sourceValue as object,
        );
      } else if (sourceValue !== undefined) {
        (result as Record<string, unknown>)[key] = sourceValue;
      }
    }
  }

  return result;
}

// ============================================================================
// System Color Scheme Detection
// ============================================================================

function getSystemColorScheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// ============================================================================
// CSS Variable Injection
// ============================================================================

function generateCssVariables(theme: BizUITheme): string {
  const vars: string[] = [];

  // Colors
  const colorNames = [
    "primary",
    "secondary",
    "destructive",
    "success",
    "warning",
    "info",
    "gray",
  ] as const;

  colorNames.forEach((colorName) => {
    const scale = theme.colors[colorName];
    if (scale) {
      scale.forEach((value, index) => {
        // Map index 0-9 to Biz UI-style 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
        const bizIndex = index === 0 ? 50 : index * 100;
        // Wrap bare HSL triplets (e.g. "214 100% 97%") in hsl() for valid CSS
        const cssValue =
          value.startsWith("#") ||
          value.startsWith("hsl") ||
          value.startsWith("rgb")
            ? value
            : `hsl(${value})`;
        vars.push(`--biz-${colorName}-${bizIndex}: ${cssValue};`);
      });
    }
  });

  // Typography
  vars.push(`--font-family-sans: ${theme.typography.fontFamily};`);
  vars.push(`--font-family-mono: ${theme.typography.fontFamilyMonospace};`);

  // Spacing
  const spacingKeys = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
  ] as const;
  spacingKeys.forEach((key) => {
    vars.push(`--spacing-${key}: ${theme.spacing[key]};`);
  });

  // Shadows
  const shadowKeys = ["xs", "sm", "md", "lg", "xl"] as const;
  shadowKeys.forEach((key) => {
    vars.push(`--shadow-${key}: ${theme.shadows[key]};`);
  });

  // Radius
  const radiusKeys = ["xs", "sm", "md", "lg", "xl", "full"] as const;
  radiusKeys.forEach((key) => {
    vars.push(`--radius-${key}: ${theme.radius[key]};`);
  });

  return vars.join("\n  ");
}

function injectThemeStyles(theme: BizUITheme, selector: string): void {
  const cssVariables = generateCssVariables(theme);

  const styleId = "biz-ui-theme-variables";
  let styleElement = document.getElementById(styleId);

  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = styleId;
    document.head.appendChild(styleElement);
  }

  styleElement.textContent = `
${selector} {
  ${cssVariables}
}
`;
}

// ============================================================================
// Provider Component
// ============================================================================

export function BizUIThemeProvider({
  theme: customTheme,
  children,
  injectCssVariables = false,
  defaultColorScheme = "light",
  className,
  as: Component = "div",
}: BizUIThemeProviderProps): React.JSX.Element {
  // Merge custom theme with default theme
  const theme = React.useMemo(() => {
    if (!customTheme) return defaultTheme;
    return deepMerge(defaultTheme, customTheme);
  }, [customTheme]);

  // Color scheme state
  const [colorScheme, setColorSchemeState] = React.useState<"light" | "dark">(
    () => {
      if (defaultColorScheme === "auto") {
        return getSystemColorScheme();
      }
      return defaultColorScheme;
    },
  );

  // Listen for system color scheme changes when in auto mode
  React.useEffect(() => {
    if (defaultColorScheme !== "auto") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setColorSchemeState(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [defaultColorScheme]);

  // Set color scheme function
  const setColorScheme = React.useCallback((scheme: "light" | "dark") => {
    setColorSchemeState(scheme);
  }, []);

  // Toggle color scheme function
  const toggleColorScheme = React.useCallback(() => {
    setColorSchemeState((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  // Inject CSS variables if enabled
  React.useEffect(() => {
    if (injectCssVariables && typeof document !== "undefined") {
      injectThemeStyles(theme, theme.cssVariablesSelector);
    }
  }, [theme, injectCssVariables]);

  // Context value
  const contextValue = React.useMemo<BizUIThemeContextValue>(
    () => ({
      theme,
      colorScheme,
      setColorScheme,
      toggleColorScheme,
      isDark: colorScheme === "dark",
    }),
    [theme, colorScheme, setColorScheme, toggleColorScheme],
  );

  // Compute wrapper class names
  const wrapperClassName = React.useMemo(() => {
    const classes = ["biz-ui"];
    if (colorScheme === "dark") {
      classes.push("dark");
    }
    if (className) {
      classes.push(className);
    }
    return classes.join(" ");
  }, [colorScheme, className]);

  return (
    <BizUIThemeContext.Provider value={contextValue}>
      <Component className={wrapperClassName} data-color-scheme={colorScheme}>
        {children}
      </Component>
    </BizUIThemeContext.Provider>
  );
}

// ============================================================================
// Exports
// ============================================================================

export { BizUIThemeContext };

// ============================================================================
// Backwards Compatibility Exports
// ============================================================================

/** @deprecated Use BizUIThemeProvider instead */
export const OceanThemeProvider = BizUIThemeProvider;

/** @deprecated Use BizUIThemeProviderProps instead */
export type OceanThemeProviderProps = BizUIThemeProviderProps;

/** @deprecated Use BizUIThemeContext instead */
export const OceanThemeContext = BizUIThemeContext;

/** @deprecated Use useBizUITheme instead */
export const useOceanTheme = useBizUITheme;
