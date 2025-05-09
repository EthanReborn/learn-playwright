import { expect, test } from "@playwright/test";



test("alert", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    //allows playwright to interact with alert dialogue pop-up
    // page.on("dialog", async (alert) => {
    //     //get text from alert box
    //     const alertText = alert.message(); 
    //     console.log(alertText);
    //     await alert.accept();
    // })

    // await page.locator("button:has-text('Click me')").nth(0).click();

    page.on("dialog", async (alert) => {
        //get text from alert box
        const alertText = alert.message(); 
        console.log(alertText);
        await alert.dismiss();
    })

    await page.locator("button:has-text('Click me')").nth(1).click();
    let result = page.locator("#confirm-demo"); 
    expect(result).toContainText("Cancel!")

})