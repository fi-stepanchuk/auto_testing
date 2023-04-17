const {rejectFunction} = require("../fourth_task")

describe('Fourth task', () => {
    it('Function rejects "Hello" string', () => {
        expect(rejectFunction).rejects.toBe('Hello');
    });

    it('Function not rejects "Task" string', () => {
        expect(rejectFunction).rejects.not.toBe('Task');
    });
});;