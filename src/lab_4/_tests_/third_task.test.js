const { isPasswordRequired } = require("../third_task");


describe('Second task', () => {
    it('Password is required', async () => {
        expect(await isPasswordRequired()).toBe(true);
    }, 60000);
});