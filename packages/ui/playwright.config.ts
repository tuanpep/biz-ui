import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright E2E tests run against the static Storybook build.
 * Run `npm run build-storybook` first, then `npm run e2e`.
 * Or use `npm run e2e:ci` to build Storybook, install Chromium, and run tests (for CI).
 * webServer serves storybook-static on port 6008 (avoids conflict with storybook dev on 6006).
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://127.0.0.1:6008",
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "npx serve ./storybook-static -p 6008",
    url: "http://127.0.0.1:6008",
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
