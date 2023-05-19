const { By } = require("selenium-webdriver");
const { getDriver } = require("../helper");

async function moveToLoginPage(){
    const driver = await getDriver();
    try{
        await driver.get('https://automationexercise.com/');
        const loginLink = await driver.findElement(By.xpath('//a[@href="/login"]'));
        await loginLink.click();

        return driver;
    }
    catch(error){
        // console.error(error);
    }

    
}

async function authorize(login, password){
    const driver = await moveToLoginPage();
    try{
        await driver.findElement(By.xpath('//input[@data-qa="login-email"]')).sendKeys(login);
        await driver.findElement(By.xpath('//input[@data-qa="login-password"]')).sendKeys(password);
        await driver.findElement(By.xpath('//button[@data-qa="login-button"]')).click();

        return driver;
    }
    catch(error){
        // console.error(error);
    }
}

module.exports = { moveToLoginPage, authorize }