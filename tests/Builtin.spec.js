import{test, expect } from '@playwright/test';

test('Built-in Locators', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    await page.getByRole('button',{ name: "Primary Action"}).click()
    await page.getByText('Submit Form').click()
    await page.getByLabel('Email Address:').fill('QA Tester')
    await page.getByPlaceholder('Enter your full name').fill('Automate')
    const logo = await page.getByAltText('logo image')
    await expect(logo).toBeVisible()
    await page.getByTitle('Home page link').click()
    await page.getByTestId('edit-profile-btn').click()

})


//getByRole() - Button, Checkbox, Textbox, Link, Ratio button
//getByText() - Button, Link 
//getByLabel() - Represent the visible text in  ---- <Label> tag
//getByPlaceHolder() - Textbox, Button
//getByAltText() - Icon or Logo
//getByTestId() - Button, Link
//getByTitle() - Button, Link 