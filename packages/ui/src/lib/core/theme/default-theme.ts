import type { OceanTheme, ColorScale } from './theme-types';

/**
 * Default biz-ui theme.
 * Based on the RMS design system with Trust Blue primary.
 */

/** Trust Blue color scale (HSL values without hsl() wrapper for CSS variables) */
const primaryScale: ColorScale = [
  '214 100% 97%', // 50 - lightest
  '214 95% 93%', // 100
  '213 97% 87%', // 200
  '212 96% 78%', // 300
  '213 97% 68%', // 400
  '217 91% 60%', // 500 - base
  '221 83% 53%', // 600 - main
  '224 76% 48%', // 700 - hover
  '226 72% 40%', // 800
  '224 71% 33%', // 900 - darkest
];

const grayScale: ColorScale = [
  '220 20% 97%', // 50
  '220 15% 94%', // 100
  '215 20% 90%', // 200
  '215 16% 70%', // 300
  '215 16% 47%', // 400
  '215 16% 35%', // 500
  '215 16% 25%', // 600
  '215 16% 18%', // 700
  '222 47% 14%', // 800
  '222 47% 11%', // 900
];

const successScale: ColorScale = [
  '142 76% 96%', // 50
  '142 80% 90%', // 100
  '142 84% 80%', // 200
  '142 77% 70%', // 300
  '142 69% 58%', // 400
  '142 71% 45%', // 500
  '142 76% 38%', // 600
  '142 72% 32%', // 700
  '142 64% 26%', // 800
  '142 61% 21%', // 900
];

const warningScale: ColorScale = [
  '48 100% 96%', // 50
  '48 97% 88%', // 100
  '48 97% 77%', // 200
  '48 95% 66%', // 300
  '45 93% 54%', // 400
  '38 92% 50%', // 500
  '32 95% 44%', // 600
  '26 90% 37%', // 700
  '23 82% 31%', // 800
  '22 78% 26%', // 900
];

const destructiveScale: ColorScale = [
  '0 86% 97%', // 50
  '0 93% 94%', // 100
  '0 96% 89%', // 200
  '0 94% 82%', // 300
  '0 91% 71%', // 400
  '0 84% 60%', // 500
  '0 72% 50%', // 600
  '0 74% 42%', // 700
  '0 70% 35%', // 800
  '0 63% 28%', // 900
];

const infoScale: ColorScale = [
  '204 100% 97%', // 50
  '204 94% 94%', // 100
  '201 94% 86%', // 200
  '199 95% 74%', // 300
  '198 93% 60%', // 400
  '199 89% 48%', // 500
  '200 98% 39%', // 600
  '201 96% 32%', // 700
  '201 90% 27%', // 800
  '202 80% 24%', // 900
];

export const defaultTheme: OceanTheme = {
  colors: {
    primary: primaryScale,
    secondary: grayScale,
    destructive: destructiveScale,
    success: successScale,
    warning: warningScale,
    info: infoScale,
    gray: grayScale,
  },

  primaryColor: 'primary',

  typography: {
    fontFamily:
      '"IBM Plex Sans", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontFamilyMonospace:
      'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSizes: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      md: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
    },
    lineHeights: {
      xs: '1rem', // 16px
      sm: '1.25rem', // 20px
      md: '1.5rem', // 24px
      lg: '1.75rem', // 28px
      xl: '2rem', // 32px
    },
  },

  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '2.5rem', // 40px
    '3xl': '3rem', // 48px
    '4xl': '4rem', // 64px
  },

  shadows: {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.08)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.08)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.08)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.08)',
  },

  radius: {
    xs: '0.125rem', // 2px
    sm: '0.25rem', // 4px
    md: '0.375rem', // 6px
    lg: '0.5rem', // 8px
    xl: '0.75rem', // 12px
    full: '9999px',
  },

  defaultRadius: 'lg',

  focusRing: 'auto',

  components: {},

  cssVariablesSelector: '.biz-ui',

  respectReducedMotion: true,
};
