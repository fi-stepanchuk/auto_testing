const {sumArray, filterNegativeNumbers, filterPositiveNumbers, forEach} = require('../array_utils.js');


describe('Array Utils', () => {
  let testArray;

  beforeAll(() => {
    testArray = [1, -2, 3, -4, 5];
  });

  describe('sumArray', () => {
    it('should return the sum of all elements in the array', () => {
      expect(sumArray(testArray)).toEqual(3);
    });
  });

  describe('filterPositiveNumbers', () => {
    it('should return a new array containing only positive numbers', () => {
      expect(filterPositiveNumbers(testArray)).toEqual([1, 3, 5]);
    });
  });

  describe('filterNegativeNumbers', () => {
    it('should return a new array containing only negative numbers', () => {
      expect(filterNegativeNumbers(testArray)).toEqual([-2, -4]);
    });
  });
});

describe('forEach', () => {
  it('should execute callback for each element of the array', () => {
    const array = [1, 2, 3];
    const callback = jest.fn();
    forEach(array, callback);
    expect(callback).toHaveBeenCalledTimes(3);
    expect(callback).toHaveBeenCalledWith(1, 0, array);
    expect(callback).toHaveBeenCalledWith(2, 1, array);
    expect(callback).toHaveBeenCalledWith(3, 2, array);
  });
});

