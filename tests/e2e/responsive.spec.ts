import { expect, test } from '@playwright/test';

const viewports = [
  { width: 390, height: 844, label: 'mobile' },
  { width: 768, height: 1024, label: 'tablet' },
  { width: 1440, height: 900, label: 'desktop' },
];

for (const viewport of viewports) {
  test(`no horizontal overflow at ${viewport.label}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto('/gallery');
    await expect(page.getByRole('heading', { name: 'Galeria' })).toBeVisible();
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });
}

test('hamburger menu appears on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByTestId('mobile-menu-button').click();
  await expect(page.getByRole('dialog', { name: 'Nawigacja mobilna' })).toBeVisible();
});
