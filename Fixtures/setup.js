import { test as base, expect } from '@playwright/test'

export const test = base.extend({

    loginPage: async ({ page }, use) => {

        await page.goto('https://adactinhotelapp.com/')

        await page.locator('//input[@id="username"]').fill('harishr97')

        await page.locator('//input[@name="password"]').fill('12345')

        await page.locator('//input[@id="login"]').click()
        await use(page)
        await page.close()
    }
})

export { expect } from '@playwright/test'