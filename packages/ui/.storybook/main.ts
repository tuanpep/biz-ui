import type { StorybookConfig } from "@storybook/react-vite";

import { join } from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
  ],
  framework: "@storybook/react-vite",
  viteFinal: async (config) => {
    // Add Tailwind CSS support using @tailwindcss/postcss
    const tailwindcss = (await import("@tailwindcss/postcss")).default;
    const autoprefixer = (await import("autoprefixer")).default;

    // Get the path to the tailwind config
    const tailwindConfigPath = join(
      process.cwd(),
      "packages/ui/tailwind.config.js",
    );

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
