const {asyncSecondTask} = require('../async_second_task')

describe('Testing async function of second task', () => {
    it('Test if promise of function resolve "hello world"', ()=>{
        expect(asyncSecondTask('hello world')).resolves.toBe('hello world');
    });

    it('Test if promise of function no resolve "hello world"', ()=>{
        expect(asyncSecondTask('hello Ukraine')).resolves.not.toBe('hello world');
    });
});