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

//Le Résultat devrait etre 12 mais etant donné que la valeur de 3 est 5, le résultat est 20
test('simple multiplication', async ({ page }) => {
    const screen = await page.locator("#screen");
    const firstValue = await page.locator("#num-3");
    await firstValue.click();
    const buttonToMul = await page.locator("#multiplication");
    await buttonToMul.click();
    const secondValue = await page.locator("#num-4");
    await secondValue.click();
    await page.locator(".btnEqual").click();
    await expect(screen).toHaveText('12');
});

//Le résultat devrait etre 12 mais comme l'addition fait une soustraction, le résultat est -2
test('combinaison addition et multiplication', async ({ page }) => {
    const screen = await page.locator("#screen");
    const firstValue = await page.locator("#num-2");
    await firstValue.click();
    const buttonToAdd = await page.locator("#sum");
    await buttonToAdd.click();
    const secondValue = await page.locator("#num-4");
    await secondValue.click();
    await page.locator(".btnEqual").click();
    await expect(screen).toHaveText('6');
    const buttonToMul = await page.locator("#multiplication");
    await buttonToMul.click();
    const thirdValue = await page.locator("#num-2");
    await thirdValue.click();
    await page.locator(".btnEqual").click();
    await expect(screen).toHaveText('12');
});

//On vérifie si la couleur du bouton est rouge
test('verification de la couleur rouge du bouton égal', async ({ page }) => {
    const btnEqual = await page.locator(".btnEqual");
    const color = await btnEqual.evaluate((element) => {
        return window.getComputedStyle(element).backgroundColor;
    });
    expect(color).toBe('rgb(255, 0, 0)');
});


//Le Résultat devrait etre 0 pour toute multiplication avec 0
test('multiplication par 0', async ({ page }) => {
    const screen = await page.locator("#screen");
    const firstValue = await page.locator("#num-0");
    await firstValue.click();
    const buttonToMul = await page.locator("#multiplication");
    await buttonToMul.click();
    const secondValue = await page.locator("#num-4");
    await secondValue.click();
    await page.locator(".btnEqual").click();
    await expect(screen).toHaveText('0');
});