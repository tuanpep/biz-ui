import * as React from "react";

// Server-side rendering check
const canUseDOM = typeof window !== "undefined";

/**
 * Subscribe to a media query and return its match status.
 * Useful for responsive components.
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const isMobile = useMatchMedia('(max-width: 768px)');
 *   const prefersDark = useMatchMedia('(prefers-color-scheme: dark)');
 *
 *   return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
 * };
 * ```
 */
export function useMatchMedia(
  query: string,
  defaultValue: boolean = false,
): boolean {
  const [matches, setMatches] = React.useState(() => {
    if (!canUseDOM) return defaultValue;
    return window.matchMedia(query).matches;
  });

  React.useEffect(() => {
    if (!canUseDOM) return;

    const mediaQuery = window.matchMedia(query);

    // Set initial value
    setMatches(mediaQuery.matches);

    // Create event handler
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
    // Legacy browsers (Safari < 14)
    else {
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    }
  }, [query]);

  return matches;
}

/**
 * Predefined breakpoint hooks matching Biz UI's Tailwind config.
 * Breakpoints: sm: 320px, md: 672px, lg: 1056px, xlg: 1312px, max: 1584px
 */
export function useBreakpoint() {
  const isSm = useMatchMedia("(min-width: 320px)");
  const isMd = useMatchMedia("(min-width: 672px)");
  const isLg = useMatchMedia("(min-width: 1056px)");
  const isXlg = useMatchMedia("(min-width: 1312px)");
  const isMax = useMatchMedia("(min-width: 1584px)");

  return {
    isSm,
    isMd,
    isLg,
    isXlg,
    isMax,
    // Convenience aliases
    isMobile: !isMd,
    isTablet: isMd && !isLg,
    isDesktop: isLg,
  };
}

/**
 * Check if user prefers reduced motion.
 * Important for accessibility and animations.
 */
export function usePrefersReducedMotion(): boolean {
  return useMatchMedia("(prefers-reduced-motion: reduce)");
}

/**
 * Check if user prefers dark color scheme.
 */
export function usePrefersDarkMode(): boolean {
  return useMatchMedia("(prefers-color-scheme: dark)");
}
