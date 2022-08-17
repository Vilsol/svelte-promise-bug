import { expect, test } from '@playwright/test';

test('index page "a" element has expected content', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('#a')).toBe('"bar"');
});

test('index page "b" element has expected content', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('#b')).toBe('"bar"');
});
