import { test, expect } from '@stylexswc-toss/playwright';

test.describe('StyleX Visual Regression', () => {
  test('should render styling correctly', async ({ page, screenshotOptions }) => {
    await page.goto('/');

    await page.waitForSelector('body', { state: 'visible' });

    await expect(page).toHaveScreenshot('full-page.png', screenshotOptions);
  });
});
