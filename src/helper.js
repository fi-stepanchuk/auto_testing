const { Builder } = require("selenium-webdriver");
const { settings } = require("../config/settings");

async function getDriver(){
    const driver = new Builder().forBrowser(settings.seleniumDriver).build();
    return driver
}

async function isElementExist(driver, by){
    try{
        await driver.findElement(by);
        return true;
    }
    catch(noFound){
        return false;
    }
}


module.exports = { isElementExist, getDriver}