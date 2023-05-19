const { WebDriver } = require("selenium-webdriver");
const { automationCreds } = require("../../../config/settings");
const { moveToLoginPage, authorize } = require("../helpers");



describe('Helpers test', () => {
    it('Moving to login page', async() => {
        const driverWithLoginPage = await moveToLoginPage();

        expect(driverWithLoginPage).toBeInstanceOf(WebDriver);
        expect(await driverWithLoginPage.getTitle()).toBe('Automation Exercise - Signup / Login');
        driverWithLoginPage.quit();
    }, 60000);

    it('Autorize in login page', async() => {
        const authorizedDriver = await authorize(automationCreds.login, automationCreds.password);
        expect(authorizedDriver).toBeInstanceOf(WebDriver);
        authorizedDriver.quit();
    }, 60000);
});