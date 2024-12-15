import { test, expect } from '@playwright/test';

test('Test filter', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');
  await page.click('text=Subjects'); 

  
  const filterResults = page.locator('.filter-results'); 
  await expect(filterResults).toBeVisible();
});
