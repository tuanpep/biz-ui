/**
 * BizUIThemeProvider
 *
 * Provides theme context to biz-ui components.
 * Based on Biz UI principles:
 * - Modular and flexible
 * - Puts users first
 * - Builds consistency
 *
 * @example
 * ```tsx
 * import { BizUIThemeProvider, defaultTheme } from 'biz-ui';
 *
 * function App() {
 *   return (
 *     <BizUIThemeProvider theme={defaultTheme}>
 *       <div className="biz-ui">
 *         <Button>Click me</Button>
 *       </div>
 *     </BizUIThemeProvider>
 *   );
 * }
 * ```
 */

import * as React from "react";
import type { BizUITheme, BizUIThemeContextValue } from "./theme-types";
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
}: BizUIThemeProviderProps): React.JSX.Element {
  // Merge custom theme with default theme
  const theme = React.useMemo(() => {
    if (!customTheme) return defaultTheme;
    return deepMerge(defaultTheme, customTheme);
  }, [customTheme]);

  // Inject CSS variables if enabled
  React.useEffect(() => {
    if (injectCssVariables && typeof document !== "undefined") {
      injectThemeStyles(theme, theme.cssVariablesSelector);
    }
  }, [theme, injectCssVariables]);

  // Context value - color scheme is always 'light' for now (dark mode not implemented)
  const contextValue = React.useMemo<BizUIThemeContextValue>(
    () => ({
      theme,
      colorScheme: "light",
      setColorScheme: () => {
        console.warn("Dark mode is not implemented yet");
      },
      toggleColorScheme: () => {
        console.warn("Dark mode is not implemented yet");
      },
    }),
    [theme],
  );

  return (
    <BizUIThemeContext.Provider value={contextValue}>
      {children}
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
