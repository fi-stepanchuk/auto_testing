const { By } = require("selenium-webdriver");
const { isElementExist } = require("../helper");
const { moveToLoginPage } = require("./helpers");


async function isEmailRequired(){
    const driver = await moveToLoginPage();
    let isEmailRequire = false;
    try{
        isEmailRequire = await isElementExist(driver, By.xpath('//input[@data-qa="login-email" and @required]'));
    }
    catch(error){
        console.log(error)
    }
    finally{
        driver.quit();
    }

    return isEmailRequire;
}

module.exports = { isEmailRequired };