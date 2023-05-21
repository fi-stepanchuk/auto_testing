const { getDriver } = require("../helper");


async function moveToHotlineMainPage(){
    const driver = await getDriver();

    driver.get("https:/hotline.ua");

    return driver;
}


module.exports = { moveToHotlineMainPage };