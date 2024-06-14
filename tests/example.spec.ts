import { test, expect } from '@playwright/test';

test.beforeEach('Open start URL', async ({ page }) => {
    console.log(`Running ${test.info().title}`);
    await page.goto('http://localhost:3000/');
});

//La réponse devrait être 3 pour 2 + 1 mais ca retourne 1 a cause du fait que sum fasse une soustraction
test('simple addition', async ({ page }) => {
    const screen = await page.locator("#screen");
    const firstValue = await page.locator("#num-2");
    await firstValue.click();
    const buttonToAdd = await page.locator("#sum");
    await buttonToAdd.click();
    const secondValue = await page.locator("#num-1");
    await secondValue.click();

    await page.locator(".btnEqual").click();

    await expect(screen).toHaveText('3');
});

//La réponse devrait être 4 pour 6 - 2 mais ca retourne 8 a cause du fait que soustraction fasse une addition
test('simple soustraction', async ({ page }) => {
    const screen = await page.locator("#screen");
    const firstValue = await page.locator("#num-6");
    await firstValue.click();
    const buttonToAdd = await page.locator("#soustraction");
    await buttonToAdd.click();
    const secondValue = await page.locator("#num-2");
    await secondValue.click();

    await page.locator(".btnEqual").click();

    await expect(screen).toHaveText('4');
});

//Le bouton clear fait passer tout le calcul à 0
test('clear la value du résultat', async ({ page }) => {
    const screen = await page.locator("#screen");
    const firstValue = await page.locator("#num-6");
    await firstValue.click();
    const buttonToAdd = await page.locator("#soustraction");
    await buttonToAdd.click();
    const secondValue = await page.locator("#num-2");
    await secondValue.click();
    const buttonClear = await page.locator("#btn-clear");
    await buttonClear.click();

    await page.locator(".btnEqual").click();

    await expect(screen).toHaveText('0');
});
