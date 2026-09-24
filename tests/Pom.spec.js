import{test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test('Page Object Model', async({page})=>{
    const login = new LoginPage(page)
    await login.visitUrl()
    await login.enterUserName('Ashwin99')
    await login.enterPassword('12345678')
    await login.clickLoginButton() 
})