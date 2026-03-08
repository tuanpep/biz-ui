const { join } = require('path');
const bizUIPreset = require('./tailwind.preset.js');
const content = [join(__dirname, 'src/**/*.{js,ts,jsx,tsx,mdx}')];

/**
 * Local Tailwind config for Biz UI build and Storybook.
 * Theme and design tokens live in tailwind.preset.js (single source of truth).
 * To change colors, radius, spacing, etc., edit tailwind.preset.js only.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  presets: [bizUIPreset],
  content,
};
