import {test} from '../Fixtures/dataSetup'

test('handling multiple users in fixture',async({page,users})=>{

    for(let user of users){

        await page.goto('https://adactinhotelapp.com/')

        await page.locator('//input[@id="username"]').fill(user.username)

        await page.locator('//input[@id="password"]').fill(user.password)

        await page.locator('//input[@id="login"]').click()
    }
})