import { test } from '@playwright/test';

test('File Upload', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForLoadState()

    await page.screenshot({ path: 'Screenshots/file.png'})

    const fileupload = await page.locator('//input[@id="singleFileInput"]')
    await fileupload.scrollIntoViewIfNeeded()

    await fileupload.setInputFiles('Screenshots/file.png')
    await page.waitForTimeout(3000)
    

    //Multiple file upload
    const multiplefileupload = await page.locator('//input[@id="multipleFileInput"]')
    //await multiplefileupload.scrollIntoViewIfNeeded()
    await page.screenshot({ path: 'Screenshots/file1.png'})
    await multiplefileupload.setInputFiles(['Screenshots/file.png', 'Screenshots/file1.png'])
    await page.waitForTimeout(3000)

})
