const { addItem, getComparedGoodsId } = require("../compare");
const { searchResult } = require("../search");
const { WebDriver } = require("selenium-webdriver");

describe('Search component test', () => {
    it('Search request have result', async () => {
        const driver = await searchResult("Пральна машина автоматична Bosch WAN28263UA");
        expect(driver).toBeInstanceOf(WebDriver);
        driver.quit();
    }, 60000);

    it('Search request without result', async () => {
        expect(await searchResult("rferf kefr lrf")).toBeNull();
    }, 60000);
});

describe('Compare component test', () => {
    it('Add to compare the exists product', async () => {
        const productName = "Пральна машина автоматична Bosch WAN28263UA";
        const productCategory = "Пральні та сушильні машини";
        expect(await addItem(productName)).toBe(true);
    }, 60000);

    it('No add to compare the exists product', async () => {
        const productName = "Пральна машина автоматична Bosch Вигадана назва";
        const productCategory = "Пральні та сушильні машини";
        expect(await addItem(productName)).toBe(false);
    }, 60000);
});

