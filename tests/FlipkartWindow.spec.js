import {test} from '@playwright/test';

test('Window Handling', async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.flipkart.com/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 17 pro')
    await page.keyboard.press('Enter')

    const [newPage] = await Promise.all([context.waitForEvent('page')], page.click('//h2[contains(@aria-label,"Sponsored Ad - iPhone Air 256 GB: Thinnest iPhone Ever, 16.63 cm (6.5″)")]'))

    await newPage.waitForLoadState()
    const title = await newPage.title()
    console.log(title)


})