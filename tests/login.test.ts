
import { chromium, test } from "@playwright/test"


test("login test demo", async () => {

    const browser = await chromium.launch({
        headless: false,
    }); 
    const context = await browser.newContext(); 
    const page = await context.newPage(); 

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover(`//*[@id="widget-navbar-217834"]/ul/li[6]/a`)
    //await page.click(`//*[@id="widget-navbar-217834"]/ul/li[6]/ul/li[1]/a`)
    await page.click("text=Login")

    await page.fill("input[name='email']", "seven.swords.song@gmail.com")
    await page.fill("input[name='password']", "3rbXP!3Gix!wagY")
    await page.click("input[value='Login']")

    await page.waitForTimeout(5000)

});  