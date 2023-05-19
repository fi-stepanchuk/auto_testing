const { By, until, Key } = require("selenium-webdriver");
const { automationCreds } = require("../../config/settings");
const { isElementExist } = require("../helper");
const { authorize } = require("./helpers");

function getNumberFromString(string){
    return parseFloat(string.split(' ')[1], 10);
}

async function buyGoods(goodsName, count){
    const driver = await authorize(automationCreds.login, automationCreds.password);
    const goodsInfo = {
        price: null,
        total: null,
    }
    
    try {
        await driver.findElement(By.xpath('//a[@href="#Men"]')).click();
        let link = await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath('//a[contains(., "Tshirts")]'))), 6000);
        await link.click();
        const iframeLocator = By.xpath("//iframe[contains(@style, 'height: 100vh !important;')]")
        const isbannerIframe = await isElementExist(driver, iframeLocator);

        if(isbannerIframe){
            const bannerIframe = await driver.wait(until.elementIsVisible(await driver.findElement(iframeLocator)), 30000);

            if(await bannerIframe.isEnabled()){
                await driver.switchTo().frame(bannerIframe);
                await driver.executeScript(`document.querySelector('style+#ad_position_box').click()`);
                await driver.switchTo().defaultContent();
            }
            
        }
        
        await driver.wait(until.elementIsVisible(await driver.findElement(iframeLocator)), 10000);
        await driver.wait(until.stalenessOf(await driver.findElement(By.xpath(`//p[contains(., "${goodsName}")]/following::a[3]`))), 10000);
       
        await driver.findElement(By.xpath(`//p[contains(., "${goodsName}")]/following::a[3]`)).click();

        await driver.executeScript(`document.querySelector("#quantity").value = "${count}"`);
        await driver.findElement(By.xpath("//button[contains(@class, 'cart')]")).click();
        await driver.findElement(By.css("a[href='/view_cart']")).click();

        goodsInfo.price = getNumberFromString(await driver.findElement(By.xpath('//td[@class="cart_price"]')).getText());
        goodsInfo.total = getNumberFromString(await driver.findElement(By.xpath('//td[@class="cart_total"]')).getText());

        await driver.findElement(By.className('cart_quantity_delete')).click();



    } catch (error) {
        console.log(error);
    }
    finally{
        driver.quit();
    }

    return goodsInfo;


}

module.exports = {buyGoods}