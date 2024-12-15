import { test, expect } from '@playwright/test';

test('Test forgot password', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/login');
  await page.click('text=Forgot Password'); 
  await page.fill('input[name="email"]', 'testuser@example.com'); 
  await page.click('button[type="submit"]'); 

  
  const confirmationMessage = page.locator('.confirmation-message'); 
  await expect(confirmationMessage).toBeVisible();
});
