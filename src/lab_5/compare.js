const { By, until } = require("selenium-webdriver");
const { moveToHotlineMainPage } = require("./helpers");
const { searchResult } = require("./search");
const { isElementExist } = require("../helper");

async function moveToComparePage(compareCategoryName){
    const driver = await moveToHotlineMainPage();
    try{
        await driver.findElement(
            By.xpath("//div[@data-dropdown-target='compare']")
        ).click();
        await driver.findElement(
            By.xpath(`//div[@data-dropdown-id="compare"]>//a[contains(., ${compareCategoryName})]`)
        ).click()
        return driver;
    }
    catch(e){
        console.error(e);
        driver.quit();
    }
}

async function addItem(goodsFullName){
    const driver = await searchResult(goodsFullName);
    let success = false;
    try{
        await driver.sleep(3000);
        const currentUrl = await driver.getCurrentUrl();
        console.log(currentUrl);
        if(currentUrl.includes("/sr/?q=")){
            await driver.wait(
                until.elementIsVisible(
                    driver.findElement(By.className("list-item__title"))
                ), 3000).click();
        }

        await driver.sleep(3000);

        await driver.wait(
            until.elementIsVisible(
                driver.findElement(By.className("action-button--compare"))
            ), 30000).click();

        await driver.sleep(2000);

        await driver.wait(
            until.elementIsEnabled(
                driver.findElement(By.className("modal-overlay"))
            ), 3000).click();
    
        success =  true;
    } catch (error) {
        console.log(error);
    }
    finally{
        if(driver){
            await driver.quit();
        }
        return success;
    }
}

async function removeItem(subcategoryName, itemId){
    const driver = await moveToComparePage(subcategoryName);
    let success = false;
    try {
        driver.findElement(
            By.xpath(`//i[@class='delete' and @data-compare-item='${itemId}']`)
        ).click();
        success =  true;
    } catch (error) {
        console.log(error);
    }
    finally{
        await driver.quit();
        return success;
    }
}

async function getComparedGoods(subcategoryName){
    const driver = await moveToComparePage(subcategoryName);
    if(await isElementExist(driver, By.xpath("//a[@class='item item-product']"))){
        const goodsElements = await driver.findElements("//a[@class='item item-product']");
        return Promise.all(goodsElements.map(async (element) => {
            return {
                item_id: await element.findElement(By.xpath("//i[@class='delete']")).getAttribute("data-compare-item"),
                name: await element.findElement(By.className("title-overflow")).getText()
            };
        }));
    }
    

    return {error: "Compare must have more two items"};
}
    

async function getComparedGoodsId(subcategoryName, goodsName){
    const allComparedGoods = await getComparedGoods(subcategoryName);
    if(Array.isArray(allComparedGoods)){
        const findedGoods = allComparedGoods.find(
            (goods) => goods.name.includes(goodsName) || goodsName.includes(goods.name)
        );
        if(findedGoods){
            return findedGoods.item_id;
        }
    }
    
    return allComparedGoods;
}



module.exports = {
    moveToComparePage,
    addItem,
    removeItem,
    getComparedGoods,
    getComparedGoodsId
}