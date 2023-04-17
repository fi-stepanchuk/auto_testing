const { callInCall } = require("../six_task");


describe('Six Task', ()=>{
    it('', async() => {
        const called = await callInCall();

        expect(called).toEqual({
            message: 'Response from API'
        })
    })
})