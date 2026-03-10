import { test, expect } from "@playwright/test";

test.describe("Storybook smoke", () => {
  test("loads Storybook", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/storybook/i, { timeout: 15_000 });
    await expect(page.locator("body")).toBeVisible();
  });

  test("Button story loads", async ({ page }) => {
    await page.goto("/?path=/story/components-forms-button--default");
    await expect(page).toHaveTitle(/storybook/i, { timeout: 10_000 });
    const iframe = page.locator('iframe[title="storybook-preview-iframe"]');
    await expect(iframe).toBeVisible({ timeout: 10_000 });
  });
});
