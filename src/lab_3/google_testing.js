const {Builder, By} = require('selenium-webdriver');
const { settings } = require('../../config/settings');
const { isElementExist } = require('./helper');



async function googleAlgo() {
    const driver = await new Builder().forBrowser(settings.seleniumDriver).build();
    const testingResult = {
        title: '',
        exists: {
            logo: false,
            searchInput: false,
            searchButton: false,
            gmailLink: false
        }
    }
    try{
        await driver.get('https://www.google.com/');
        testingResult.title = await driver.getTitle();
        testingResult.exists.logo = await isElementExist(driver, By.xpath("//img[@alt='Google']"));
        testingResult.exists.searchInput = await isElementExist(driver, By.xpath("//textarea[@type='search']"));
        testingResult.exists.searchButton = await isElementExist(driver, By.xpath("//input[@name='btnK']"));
        testingResult.exists.gmailLink = await isElementExist(driver, By.xpath("//a[.='Gmail']"));
    }
    catch (noSuchElementError){
        // console.error(noSuchElementError);
    }
    finally{
        await driver.quit();
    }

    return testingResult;

};


module.exports = {googleAlgo}