import { expect } from '@playwright/test';
import { LoginPage } from './01-loginPage';

export class ViewLead extends LoginPage {

    async verifyLead(fname: string, lname: string) {
        const firstName = (await this.page.locator('#viewLead_firstName_sp').textContent())?.trim();
        const lastName = (await this.page.locator('#viewLead_lastName_sp').textContent())?.trim();

        expect(firstName).toBe(fname);
        expect(lastName).toBe(lname);
    }
}
