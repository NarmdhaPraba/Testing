import { test, expect } from '@playwright/test';

test('Test view profile', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/login');
  await page.fill('input[name="username"]', 'User1'); 
  await page.fill('input[name="password"]', 'password123'); 
  await page.click('button[type="submit"]'); 
  await page.click('text=Profile'); 

  
  const profileDetails = page.locator('.profile-details'); 
  await expect(profileDetails).toBeVisible();
});
