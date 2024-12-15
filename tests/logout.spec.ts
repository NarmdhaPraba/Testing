import { test, expect } from '@playwright/test';

test('Test logout', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/login');
  await page.fill('input[name="username"]', 'User1'); 
  await page.fill('input[name="password"]', 'password123'); 
  await page.click('button[type="submit"]'); 
  await page.click('text=Logout'); 
  await expect(page).toHaveURL('https://onlinelibrary.wiley.com/');
});
