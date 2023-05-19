const { isEmailRequired } = require("../second_task");


describe('Second task', () => {
    it('Email is required', async () => {
        expect(await isEmailRequired()).toBe(true);
    }, 60000);
});