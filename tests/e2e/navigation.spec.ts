import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test('nav links lead to correct pages', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Galeria Malarstwa WIT/i })).toBeVisible();

    const primaryNav = page.getByRole('navigation', { name: 'Menu główne' });
    await primaryNav.getByRole('link', { name: 'O przedmiocie' }).click();
    await expect(page).toHaveURL(/\/about/);
    await expect(page.getByRole('heading', { name: /Malarstwo w WIT/i })).toBeVisible();

    await primaryNav.getByRole('link', { name: 'Galeria' }).click();
    await expect(page).toHaveURL(/\/gallery/);

    await primaryNav.getByRole('link', { name: 'Prowadzący' }).click();
    await expect(page).toHaveURL(/\/instructors/);

    await primaryNav.getByRole('link', { name: 'Kontakt' }).click();
    await expect(page).toHaveURL(/\/contact/);
  });
});
