import{test} from '@playwright/test';

test('Frame Handling', async({page})=>{

    await page.goto('https://demo.automationtesting.in/Frames.html')                        //Single Frame
    const SingleFrame = await page.frameLocator('//iframe[@id="singleframe"]')
    await SingleFrame.locator('//input[@type="text"]').fill("Hii Tester")
    await page.waitForTimeout(3000)

    await page.locator('//a[@href="#Multiple"]').click()          //iframe with an iframe
    const OuterFrame = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const InnerFrame = await OuterFrame.frameLocator('//iframe[@src="SingleFrame.html"]')
    await InnerFrame.locator('//input[@type="text"]').fill("QA Tester")
    await page.waitForTimeout(3000)

})