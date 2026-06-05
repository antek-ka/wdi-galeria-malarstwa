import { expect, test } from '@playwright/test';

test.describe('Gallery', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/gallery');
    await expect(page.getByRole('heading', { name: 'Galeria' })).toBeVisible();
  });

  test('filter by Oil shows only oil works', async ({ page }) => {
    await page.getByRole('button', { name: 'Olej', pressed: false }).click();
    const countText = await page.getByTestId('works-count').textContent();
    const count = Number.parseInt(countText?.match(/\d+/)?.[0] ?? '0', 10);
    expect(count).toBeGreaterThan(0);
    await expect(page.getByTestId('gallery-card')).toHaveCount(count);
  });

  test('filter by Semester 2 shows only semester 2 works', async ({ page }) => {
    await page.getByRole('button', { name: 'Semestr 2', pressed: false }).click();
    const countText = await page.getByTestId('works-count').textContent();
    const count = Number.parseInt(countText?.match(/\d+/)?.[0] ?? '0', 10);
    expect(count).toBeGreaterThan(0);
    await expect(page.getByTestId('gallery-card')).toHaveCount(count);
  });

  test('clicking a card opens modal and Escape closes it', async ({ page }) => {
    await page
      .getByRole('button', { name: /Zobacz:/ })
      .first()
      .click();
    await expect(page.getByTestId('work-modal')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByTestId('work-modal')).not.toBeVisible();
  });

  test('modal shows artwork image on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/gallery');
    await page
      .getByRole('button', { name: /Zobacz:/ })
      .first()
      .click();
    const modal = page.getByTestId('work-modal');
    await expect(modal).toBeVisible();
    const image = modal.locator('img').first();
    await expect(image).toBeVisible();
    const box = await image.boundingBox();
    expect(box?.height ?? 0).toBeGreaterThan(80);
  });
});
