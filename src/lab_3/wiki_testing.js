const {Builder, By} = require('selenium-webdriver');
const { settings } = require('../../config/settings');
const { isElementExist } = require('../helper');


async function getWikiTableAttribute(driver, attribute_name){
    const attributeValue = await driver.findElement(By.xpath(`//a[.='${attribute_name}']/following::td`)).getText();

    return attributeValue;
}

async function wikiAlgo() {
    const driver = await new Builder().forBrowser(settings.seleniumDriver).build();
    const testingResult = {
        population: 0,
        populationDensity: 0,
        avgTempApril: null,
        exists: {
            emblem: false,
            coronovirusPart: false,
        },
        numberArthiMonumentsInList: 0,

        
    }
    try{
        await driver.get('https://uk.wikipedia.org/');
        const searchInput = driver.findElement(By.id('searchInput'));
        await searchInput.sendKeys('Київ');
        await searchInput.submit();
        await driver.getTitle();
        const populationAttributeValue = await getWikiTableAttribute(driver, 'Населення');
        const populationDensity = await getWikiTableAttribute(driver, 'Густота населення');
        const avgTempApril = await driver.findElement(By.xpath('//table[@id="collapsibleTable0"]/tbody/tr[5]/th[5]')).getText();
        testingResult.population = parseInt(populationAttributeValue.match(/^.\s([0-9 ]+)\(.+/)[1].replaceAll(/\s/g, ''), 10);
        testingResult.populationDensity = parseFloat(populationDensity.split(' ')[0].replace(',', '.'));
        testingResult.avgTempApril = parseFloat(avgTempApril.replace(',', '.'));
        testingResult.exists.emblem = await isElementExist(driver, By.xpath("//img[contains(@alt, 'COA of Kyiv')]"));
        testingResult.exists.coronovirusPart = await isElementExist(driver, By.id('Епідемія_коронавірусу'));

        const textForSearch = "До найвизначніших архітектурних пам";

        const monumentsList = await driver.findElements(By.xpath(`//p[contains(., '${textForSearch}')]/following::ul[1]/li`));
        testingResult.numberArthiMonumentsInList = monumentsList.length;
    }
    catch (noSuchElementError){
        // console.error(noSuchElementError);
    }
    finally{
        await driver.quit();
    }

    return testingResult;

};


module.exports = {wikiAlgo}