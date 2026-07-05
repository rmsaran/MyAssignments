import {test} from '@playwright/test';

test("Learning CSS Selectors", async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator("#username").fill("demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();

    await page.locator("//a[contains(text(),'CRM/SFA')]").click();

    await page.locator("//a[text() = 'Leads']").click();
    await page.locator("//a[text() = 'Create Lead']").click();

    await page.locator("input[name='companyName']").fill("TestLeaf");
    await page.locator("#createLeadForm_firstName").fill("Saran");
    await page.locator("#createLeadForm_lastName").fill("R M");
    await page.locator("#createLeadForm_personalTitle").fill("Mr");
    await page.locator("#createLeadForm_generalProfTitle").fill("Playwright Test Analyst");
    await page.locator("#createLeadForm_annualRevenue").fill("1200000");
    await page.locator("#createLeadForm_departmentName").fill("QA");
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9876543210");

    await page.locator("input[class='smallSubmit']").click();

    const title = await page.title();
    console.log(`Page title: ${title}`);


})
