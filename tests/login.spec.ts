import { test, expect } from '@playwright/test';

test('Test login', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/login', { waitUntil: 'domcontentloaded', timeout: 120000 });
  await page.fill('input[name="username"]', 'User1'); 
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]'); 
  await expect(page).toHaveURL('https://onlinelibrary.wiley.com/home');
});
