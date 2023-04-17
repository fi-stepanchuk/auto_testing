const {testAsyncFunction} = require("../third_task");

describe('Third task', () => {
    it('testAsyncFunction should return expected value', async () => {
        const result = await testAsyncFunction();
        expect(result).toBe(84);
    });

    // it('', () => {
    //     expect(testAsyncFunction).toBe(84);
    // });
})