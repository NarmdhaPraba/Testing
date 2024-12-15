import { test, expect, devices } from '@playwright/test';

test.use({
  viewport: { width: 375, height: 812 }, 
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
});
test('Test responsiveness', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/', { waitUntil: 'domcontentloaded', timeout: 120000 });
  const header = page.locator('.mobile-header'); 
  await expect(header).toBeVisible();
});
