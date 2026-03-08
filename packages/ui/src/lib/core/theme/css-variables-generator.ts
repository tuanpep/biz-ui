/**
 * CSS Variables Generator
 *
 * Generates CSS custom properties from theme configuration.
 * Similar to Mantine's approach for consistent theming.
 *
 * @example
 * ```ts
 * import { generateCssVariables } from './css-variables-generator';
 * import { defaultTheme } from './default-theme';
 *
 * const cssVariables = generateCssVariables(defaultTheme);
 * ```
 */

import type { BizUITheme } from "./theme-types";

/** Options for CSS variable generation */
export interface CssVariablesOptions {
  /** Color scheme to generate variables for */
  colorScheme?: "light" | "dark";
  /** Selector to scope variables (default: '.biz-ui') */
  selector?: string;
  /** Whether to include color palette variables */
  includeColorPalette?: boolean;
  /** Whether to include semantic color variables */
  includeSemanticColors?: boolean;
  /** Whether to include typography variables */
  includeTypography?: boolean;
  /** Whether to include spacing variables */
  includeSpacing?: boolean;
  /** Whether to include shadow variables */
  includeShadows?: boolean;
  /** Whether to include radius variables */
  includeRadius?: boolean;
  /** Whether to include z-index variables */
  includeZIndex?: boolean;
  /** Whether to include transition variables */
  includeTransitions?: boolean;
  /** Prefix for CSS variable names (default: 'biz') */
  prefix?: string;
}

/** Full color palette for Biz UI */
const colorPalette = {
  blue: [
    "#e7f5ff", // 0
    "#d0ebff", // 1
    "#a5d8ff", // 2
    "#74c0fc", // 3
    "#4dabf7", // 4
    "#339af0", // 5
    "#228be6", // 6
    "#1c7ed6", // 7
    "#1971c2", // 8
    "#1864ab", // 9
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285",
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b",
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e",
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d",
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700",
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f",
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d",
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4",
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7",
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c",
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a",
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529",
  ],
  dark: [
    "#c9c9c9",
    "#b8b8b8",
    "#828282",
    "#696969",
    "#424242",
    "#3b3b3b",
    "#2e2e2e",
    "#242424",
    "#1f1f1f",
    "#141414",
  ],
};

/** Semantic colors for light mode */
const semanticColorsLight = {
  primary: "var(--biz-blue-6)",
  primaryForeground: "#ffffff",
  primaryMuted: "var(--biz-blue-0)",

  secondary: "var(--biz-gray-6)",
  secondaryForeground: "#ffffff",

  destructive: "var(--biz-red-6)",
  destructiveForeground: "#ffffff",
  destructiveMuted: "var(--biz-red-0)",

  success: "var(--biz-green-6)",
  successForeground: "#ffffff",
  successMuted: "var(--biz-green-0)",

  warning: "var(--biz-yellow-6)",
  warningForeground: "#ffffff",
  warningMuted: "var(--biz-yellow-0)",

  info: "var(--biz-cyan-6)",
  infoForeground: "#ffffff",
  infoMuted: "var(--biz-cyan-0)",

  muted: "var(--biz-gray-1)",
  mutedForeground: "var(--biz-gray-6)",

  accent: "var(--biz-gray-1)",
  accentForeground: "var(--biz-gray-9)",

  popover: "#ffffff",
  popoverForeground: "var(--biz-gray-9)",

  card: "#ffffff",
  cardForeground: "var(--biz-gray-9)",

  background: "#f8f9fa",
  foreground: "var(--biz-gray-9)",

  border: "var(--biz-gray-3)",
  input: "var(--biz-gray-3)",
  ring: "var(--biz-blue-6)",

  overlay: "#525252",
};

/** Semantic colors for dark mode */
const semanticColorsDark = {
  primary: "var(--biz-blue-5)",
  primaryForeground: "#ffffff",
  primaryMuted: "#103b66",

  secondary: "var(--biz-dark-6)",
  secondaryForeground: "var(--biz-gray-1)",

  destructive: "var(--biz-red-7)",
  destructiveForeground: "#ffffff",
  destructiveMuted: "#451515",

  success: "var(--biz-green-6)",
  successForeground: "#ffffff",
  successMuted: "#133a1b",

  warning: "var(--biz-yellow-6)",
  warningForeground: "var(--biz-gray-9)",
  warningMuted: "#4d3300",

  info: "var(--biz-cyan-6)",
  infoForeground: "#ffffff",
  infoMuted: "#00363d",

  muted: "var(--biz-dark-7)",
  mutedForeground: "var(--biz-gray-4)",

  accent: "var(--biz-dark-7)",
  accentForeground: "var(--biz-gray-1)",

  popover: "var(--biz-dark-8)",
  popoverForeground: "var(--biz-gray-1)",

  card: "var(--biz-dark-8)",
  cardForeground: "var(--biz-gray-1)",

  background: "var(--biz-dark-9)",
  foreground: "var(--biz-gray-1)",

  border: "var(--biz-dark-6)",
  input: "var(--biz-dark-6)",
  ring: "var(--biz-blue-5)",

  overlay: "#3f3f46",
};

/**
 * Generates CSS variables from a color scale
 */
function generateColorScaleVariables(
  name: string,
  scale: string[],
  prefix: string,
): string[] {
  return scale.map(
    (color, index) => `  --${prefix}-${name}-${index}: ${color};`,
  );
}

/**
 * Generates CSS variables from theme configuration
 */
export function generateCssVariables(
  theme: BizUITheme,
  options: CssVariablesOptions = {},
): string {
  const {
    colorScheme = "light",
    prefix = "biz",
    includeColorPalette = true,
    includeSemanticColors = true,
    includeTypography = true,
    includeSpacing = true,
    includeShadows = true,
    includeRadius = true,
    includeZIndex = true,
    includeTransitions = true,
  } = options;

  const vars: string[] = [];

  // Color palette
  if (includeColorPalette) {
    Object.entries(colorPalette).forEach(([name, scale]) => {
      vars.push(...generateColorScaleVariables(name, scale, prefix));
    });
  }

  // Semantic colors
  if (includeSemanticColors) {
    const semanticColors =
      colorScheme === "dark" ? semanticColorsDark : semanticColorsLight;

    Object.entries(semanticColors).forEach(([name, value]) => {
      const varName = name.replace(/([A-Z])/g, "-$1").toLowerCase();
      vars.push(`  --${varName}: ${value};`);
    });
  }

  // Typography
  if (includeTypography) {
    vars.push(`  --font-family-sans: ${theme.typography.fontFamily};`);
    vars.push(`  --font-family-mono: ${theme.typography.fontFamilyMonospace};`);

    Object.entries(theme.typography.fontSizes).forEach(([size, value]) => {
      vars.push(`  --text-${size}: ${value};`);
    });
  }

  // Spacing
  if (includeSpacing) {
    Object.entries(theme.spacing).forEach(([size, value]) => {
      const varName = size === "2xl" ? "2xl" : size;
      vars.push(`  --${prefix}-space-${varName}: ${value};`);
    });
  }

  // Shadows
  if (includeShadows) {
    Object.entries(theme.shadows).forEach(([size, value]) => {
      vars.push(`  --shadow-${size}: ${value};`);
    });
  }

  // Radius
  if (includeRadius) {
    Object.entries(theme.radius).forEach(([size, value]) => {
      vars.push(`  --radius-${size}: ${value};`);
    });
  }

  // Z-index
  if (includeZIndex) {
    vars.push("  --z-dropdown: 50;");
    vars.push("  --z-sticky: 100;");
    vars.push("  --z-modal: 200;");
    vars.push("  --z-popover: 300;");
    vars.push("  --z-tooltip: 400;");
  }

  // Transitions
  if (includeTransitions) {
    vars.push("  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);");
    vars.push("  --transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);");
    vars.push("  --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);");
  }

  return vars.join("\n");
}

/**
 * Generates complete CSS for a theme
 */
export function generateThemeCss(
  theme: BizUITheme,
  options: CssVariablesOptions = {},
): string {
  const { selector = ".biz-ui" } = options;

  const lightVars = generateCssVariables(theme, {
    ...options,
    colorScheme: "light",
  });

  const darkVars = generateCssVariables(theme, {
    ...options,
    colorScheme: "dark",
  });

  return `/**
 * Biz UI Design System CSS Variables
 * Auto-generated from theme configuration
 */

${selector} {
${lightVars}
}

${selector}.dark {
${darkVars}
}
`;
}

/**
 * Generates CSS layer wrapper for styles
 */
export function wrapInCssLayer(css: string, layerName = "biz-ui"): string {
  return `@layer ${layerName} {
${css
  .split("\n")
  .map((line) => "  " + line)
  .join("\n")}
}
`;
}

// ============================================================================
// RUNTIME THEME INJECTION UTILITIES
// ============================================================================

/**
 * Injects CSS variables into a DOM element's style attribute.
 * Useful for runtime theming without CSS file regeneration.
 *
 * @example
 * ```tsx
 * useEffect(() => {
 *   const vars = generateCssVariablesObject(theme, { colorScheme: 'dark' });
 *   injectCssVariables(vars, containerRef.current);
 * }, [theme, colorScheme]);
 * ```
 */
export function injectCssVariables(
  variables: Record<string, string>,
  element: HTMLElement,
): void {
  Object.entries(variables).forEach(([name, value]) => {
    element.style.setProperty(name, value);
  });
}

/**
 * Removes CSS variables from a DOM element.
 */
export function removeCssVariables(
  variableNames: string[],
  element: HTMLElement,
): void {
  variableNames.forEach((name) => {
    element.style.removeProperty(name);
  });
}

/**
 * Generates CSS variables as a JavaScript object (for runtime use).
 * Variable names include the `--` prefix for use with style.setProperty().
 *
 * @example
 * ```tsx
 * const vars = generateCssVariablesObject(theme);
 * // { '--primary': 'var(--biz-blue-6)', '--primary-foreground': '#ffffff', ... }
 * ```
 */
export function generateCssVariablesObject(
  theme: BizUITheme,
  options: Omit<CssVariablesOptions, "selector"> = {},
): Record<string, string> {
  const cssString = generateCssVariables(theme, options);
  const vars: Record<string, string> = {};

  cssString.split("\n").forEach((line) => {
    const match = line.match(/^\s*--([^:]+):\s*([^;]+);$/);
    if (match && match[1] && match[2]) {
      vars[`--${match[1].trim()}`] = match[2].trim();
    }
  });

  return vars;
}

/**
 * Creates a style element with theme CSS and appends it to the document head.
 * Returns a cleanup function to remove the style element.
 *
 * @example
 * ```tsx
 * useEffect(() => {
 *   const css = generateThemeCss(theme);
 *   return injectThemeStyleSheet(css, 'biz-ui-theme');
 * }, [theme]);
 * ```
 */
export function injectThemeStyleSheet(
  css: string,
  id: string = "biz-ui-theme",
): () => void {
  // Remove existing style element if present
  const existing = document.getElementById(id);
  if (existing) {
    existing.remove();
  }

  // Create and inject new style element
  const styleElement = document.createElement("style");
  styleElement.id = id;
  styleElement.textContent = css;
  document.head.appendChild(styleElement);

  // Return cleanup function
  return () => {
    styleElement.remove();
  };
}

/**
 * Merges custom theme overrides with default theme variables.
 * Useful for allowing partial theme customization.
 *
 * @example
 * ```tsx
 * const customVars = { '--primary': 'var(--biz-violet-6)' };
 * const mergedVars = mergeThemeVariables(defaultVars, customVars);
 * ```
 */
export function mergeThemeVariables(
  defaultVars: Record<string, string>,
  customVars: Record<string, string>,
): Record<string, string> {
  return {
    ...defaultVars,
    ...customVars,
  };
}

/**
 * Converts a theme color name to CSS variable reference.
 *
 * @example
 * ```ts
 * themeColorToVar('primary') // 'var(--primary)'
 * themeColorToVar('blue', 6) // 'var(--biz-blue-6)'
 * ```
 */
export function themeColorToVar(color: string, shade?: number): string {
  if (shade !== undefined) {
    return `var(--biz-${color}-${shade})`;
  }
  return `var(--${color})`;
}
