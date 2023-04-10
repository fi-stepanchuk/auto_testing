const {objectContainsField, person} = require('../object_utils');

describe('objectContainsField', () => {
    let obj;
  
    beforeAll(() => {
        obj = {
        name: 'Andrii',
        age: 22,
        city: 'New York',
        skills: {
            backEnd: ['php'],
            frontEnd: ['js']
        }
        };
    });

    test('returns true if object contains specified field', () => {
        expect(objectContainsField(obj, 'name')).toBe(true);
    });

    test('returns false if object does not contain specified field', () => {
        expect(objectContainsField(obj, 'email')).toBe(false);
    });

    test('returns true if object contains specified field with null value', () => {
        obj.email = null;
        expect(objectContainsField(obj, 'email')).toBe(true);
    });

    test('returns true if object contains specified field in children object', () => {
        expect(objectContainsField(obj, 'frontEnd')).toBe(true);
    });
});

describe('person object', () => {
  test('introduce method', () => {
    const spy = jest.spyOn(console, 'log');
    person.introduce();
    expect(spy).toHaveBeenCalledWith(`Hello, I'm ${person.firstName} ${person.lastName}`);
    spy.mockRestore();
  });
});