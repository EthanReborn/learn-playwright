import { expect, test } from "@playwright/test";
import { TestContext } from "node:test";

test("basic interaction test", async ({page}) => {

    //go to page and find first input and assert that the placeholder text is "Please enter your Message" before typing in new value
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded(); 
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    await messageInput.fill("something something")

    console.log(await messageInput.inputValue());

})

test("Sum", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const input1 = page.locator("input#sum1");
    const input2 = page.locator("input#sum2");
    const button = page.locator(`//*[@id="gettotal"]/button`);

    const num1 = 346;
    const num2 = 234;

    //fill replaces existing text, type does not
    await input1.fill("" + num1);
    await input2.fill("" + num2);

    await button.click();
    const result = page.locator("#addmessage");
    let expectedResult = num1 + num2
    expect(result).toHaveText("" + expectedResult);

    console.log(expectedResult)
    console.log(await result.textContent())

})