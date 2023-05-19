const { buyGoods } = require("../fourth_task");


describe('Second task', () => {
    it('Check if ', async () => {
        const countOfGoods = 2;
        const cartSums = await buyGoods("Pure Cotton V-Neck T-Shirt", countOfGoods);
        expect(cartSums.price * countOfGoods).toBe(cartSums.total);
    }, 60000);
});