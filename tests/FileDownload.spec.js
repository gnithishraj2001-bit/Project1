import { test } from '@playwright/test'

test('file download', async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://the-internet.herokuapp.com/download')

    const [download] = await Promise.all([
        context.waitForEvent('download'),
        page.click("//a[@href='download/sample.txt']")
    ])

    const path = await download.path()
    console.log(path)

    await download.saveAs('downloads/some-file.txt')

})