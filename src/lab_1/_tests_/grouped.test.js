const {sumArray, filterNegativeNumbers, filterPositiveNumbers} = require('../array_utils');
const {palindrome, isAnagram} = require('../string_operations');


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

describe('String Operations', () => {
    describe('palindrome function', () => {
        it('returns true for palindrome string', () => {
            expect(palindrome('racecar')).toBe(true);
        });
    
        it('returns false for non-palindrome string', () => {
            expect(palindrome('hello')).toBe(false);
        });
    
        it('ignores whitespace and capitalization', () => {
            expect(palindrome('A man a plan a canal Panama')).toBe(true);
        });
    });
    
    describe('isAnagram function', () => {
        it('returns true for anagram strings', () => {
            expect(isAnagram('listen', 'silent')).toBe(true);
        });
    
        it('returns false for non-anagram strings', () => {
            expect(isAnagram('hello', 'world')).toBe(false);
        });
    
        it('ignores whitespace and capitalization', () => {
            expect(isAnagram('Eleven plus two', 'Twelve plus one')).toBe(true);
        });
    });
});