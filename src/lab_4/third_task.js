const { By } = require("selenium-webdriver");
const { isElementExist } = require("../helper");
const { moveToLoginPage } = require("./helpers");


async function isPasswordRequired(){
    const driver = await moveToLoginPage();
    let isEmailRequire = false;
    try{
        isEmailRequire = await isElementExist(driver, By.xpath('//input[@data-qa="login-password" and @required]'));
    }
    catch(error){
        // console.log(error);
    }
    finally{
        driver.quit();
    }

    return isEmailRequire;
}

module.exports = { isPasswordRequired };