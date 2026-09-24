export class LoginPage{
    constructor(page){
        this.page = page
        this.username = page.locator('//input[@id="username"]')
        this.password = page.locator('//input[@id="password"]')
        this.button = page.locator('//input[@id="login"]')
    }

    async visitUrl() {
        await this.page.goto('https://adactinhotelapp.com/')
    }
    async enterUserName(uname){
        await this.username.fill(uname)
    }
    async enterPassword(pword){
        await this.password.fill(pword)
    }
    async clickLoginButton(){
        await this.button.click()
    }
}