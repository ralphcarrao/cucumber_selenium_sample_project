import {Given, When, Then, setDefaultTimeout} from 'cucumber'
import {Builder, By, until} from 'selenium-webdriver'
import {assert} from 'chai';


setDefaultTimeout(60 * 1000);
Given('I visit the quad x website', async function (): Promise<void> {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.get('https://quadx.xyz');
    this.driver = driver;
});

When('I click {string} button', async function (button): Promise<void> {
    let buttonName = button.toLowerCase();
    switch (buttonName) {
        case "careers":
            await this.driver.findElement(By.css('#menu-item-181 > a')).click();
            break;
        case "qa analyst":
            await this.driver.findElement(By.css('#jobs-tab > li > a[aria-controls="QA Analyst"]')).click();
            break;
        case "apply":
            await this.driver.sleep(2000);
            await this.driver.findElement(By.css
            ('#job-174 > div.job-item-btn > a[href="https://quadx.xyz/jobs/qa-analyst/"]')).click();
            break;
        default:
            console.log("Button name not supported");
    }
});

Then('I should be redirected to the application form', async function () {
    let applicationUrl = 'https://quadx.xyz/jobs/qa-analyst/';
    await this.driver.getCurrentUrl();
    assert.deepEqual(await this.driver.getCurrentUrl(),applicationUrl);
    this.driver.quit();
});