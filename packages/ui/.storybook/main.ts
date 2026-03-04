import type { StorybookConfig } from '@storybook/react-vite';

import { dirname, join } from "path"

import { fileURLToPath } from "url"

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  "addons": [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-links")
  ],
  "framework": getAbsolutePath('@storybook/react-vite'),
  "viteFinal": async (config) => {
    // Add Tailwind CSS support using dynamic imports for ESM compatibility
    const tailwindcss = (await import('tailwindcss')).default;
    const autoprefixer = (await import('autoprefixer')).default;

    // Get the path to the tailwind config
    const tailwindConfigPath = join(dirname(fileURLToPath(import.meta.url)), '../tailwind.config.js');

    return {
      ...config,
      css: {
        ...config.css,
        postcss: {
          plugins: [
            tailwindcss({ config: tailwindConfigPath }),
            autoprefixer(),
          ],
        },
      },
    };
  },
};
export default config;