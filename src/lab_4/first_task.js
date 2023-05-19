const { By } = require("selenium-webdriver");
const { authorize } = require("./helpers");

async function authorizeTask(login, password){
    const driver = await authorize(login, password);
    try{
        return await driver.findElement(By.xpath('//i[@class="fa fa-user"]/following-sibling::b[1]')).getText();
    }
    catch(erro){
        console.error(erro);
    }
    finally{
        driver.quit();
    }
}

module.exports = {authorizeTask};