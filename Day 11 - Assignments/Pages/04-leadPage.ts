import { LoginPage } from './01-loginPage';

export class LeadPage extends LoginPage {

    async inputLead(fname:string, lname:string) {
        await this.page.locator('input#createLeadForm_companyName').fill("TestLeaf");
        await this.page.locator('input#createLeadForm_firstName').fill(fname);
        await this.page.locator('input#createLeadForm_lastName').fill(lname);
        // await this.page.locator('select#createLeadForm_dataSourceId').selectOption({ label: "Employee" });
        await this.page.getByRole('button', { name: 'Create Lead' }).click();
    }

}
