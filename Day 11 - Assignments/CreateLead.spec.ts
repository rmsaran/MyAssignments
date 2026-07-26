import dotenv from "dotenv"
import {LoginPage  } from "../pages/01-loginPage";
import { test } from "@playwright/test";
import credentials from "../Data/login.json"
import { WelcomePage } from "../pages/02-welcomePage";
import { HomePage } from "../pages/03-homePage";
import { LeadPage } from "../pages/04-leadPage";
import { ViewLead } from "../pages/06-viewLeadPage";

dotenv.config({path:"Data/prod.env"})


test("Login page functionality check using POM",async ({page}) => {

    const obj = new LoginPage(page) // created an object to invoke th special method called constructor and apss the arguments

    await obj.loadUrl(process.env.BaseUrl as string)
    await obj.enterCrdentials(credentials[0].username,credentials[0].password);
    await obj.clickLogin();
  
    const wp = new WelcomePage(page)
    await wp.clickCRM()

    const hp = new HomePage(page)
    await hp.clickLeads()
    await hp.clickCreateLead()

    const lp = new LeadPage(page)
    await lp.inputLead(process.env.Lead_FirstName as string, process.env.Lead_LastName as string)

    const vp = new ViewLead(page)
    await vp.verifyLead(process.env.Lead_FirstName as string, process.env.Lead_LastName as string)

    

})


/* LoginPage -> WelcomePage -> HonePage -> LeadPage -> CreateLeadPage->ViewLead */

