const { automationCreds } = require("../../../config/settings");
const { authorizeTask } = require("../first_task");

describe('First task testing', () => {
    it('login action', async () => {
        const loginActionResult = await authorizeTask(automationCreds.login, automationCreds.password);

        expect(loginActionResult).toBe(automationCreds.userName);
    }, 60000);
});