
async function isElementExist(driver, by){
    try{
        await driver.findElement(by);
        return true;
    }
    catch(noFound){
        return false;
    }
}


module.exports = { isElementExist }