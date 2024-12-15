import { test, expect } from '@playwright/test';

test('Test search', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');
  await page.fill('input[name="search"]', 'Testing'); 
  await page.click('button[type="submit"]'); 

  
  const searchResults = page.locator('.search-results'); 
  await expect(searchResults).toBeVisible();
});
