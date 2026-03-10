#!/usr/bin/env node

/**
 * Generate CSS Layer Version
 *
 * This script generates a CSS layer version of the main styles.css file.
 * The layer version wraps all styles in @layer biz-ui for cascade isolation.
 *
 * Usage: node scripts/generate-css-layer.js
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distDir = join(__dirname, "..", "dist");
const stylesPath = join(distDir, "styles.css");
const layerPath = join(distDir, "styles.layer.css");

const banner = `/**
 * Biz UI Styles (CSS Layer Version)
 *
 * This file wraps all biz-ui styles in a CSS layer for better cascade control.
 * Use this version when you need to manage specificity with other CSS frameworks.
 *
 * Usage:
 *   import 'biz-ui/styles/layer';
 *
 * Or in CSS:
 *   @import 'biz-ui/styles/layer';
 *
 * The @layer biz-ui allows you to control the order of cascade:
 *   @layer base, biz-ui, components, utilities;
 */

`;

async function generateCssLayer() {
  // Check if styles.css exists
  if (!existsSync(stylesPath)) {
    console.error("Error: styles.css not found. Run build first.");
    process.exit(1);
  }

  try {
    const css = readFileSync(stylesPath, "utf-8");

    // Wrap CSS in layer
    const layerCss = `${banner}@layer biz-ui {
${css
  .split("\n")
  .map((line) => "  " + line)
  .join("\n")}
}
`;

    writeFileSync(layerPath, layerCss);
    console.log("✓ Generated styles.layer.css");
  } catch (error) {
    console.error("Error generating CSS layer:", error.message);
    process.exit(1);
  }
}

generateCssLayer();
