import { LoginPage } from "./01-loginPage";


export class WelcomePage extends LoginPage{ // We are exteding to get the page reference which is a property of parent class "LoginPage"

async clickCRM(){

    await this.page.locator('//a[contains(text(),"CRM")]').click()
}


}
