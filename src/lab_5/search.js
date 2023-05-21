const { By, Key } = require("selenium-webdriver");
const { moveToHotlineMainPage } = require("./helpers");
const { isElementExist } = require("../helper");


async function searchResult(searchText){
    const driver = await moveToHotlineMainPage();
    const searchInput = await driver.findElement(By.className("search")).findElement(By.xpath("//input"));

    await searchInput.sendKeys(searchText);
    await driver.executeScript('document.querySelector(".search__btn").click()');
    await driver.sleep(2000);

    if((await driver.getCurrentUrl()).includes("/sr/?q=") && await isElementExist(driver, By.className("search__no-items"))){
        driver.quit();
        return null;
    }

    return driver;
    
}

module.exports = {searchResult};