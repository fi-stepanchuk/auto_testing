const { palindrome, isAnagram, textContainsWord, splitString} = require('../string_operations');

describe('palindrome function', () => {
    test('returns true for palindrome string', () => {
        expect(palindrome('racecar')).toBe(true);
    });

    test('returns false for non-palindrome string', () => {
        expect(palindrome('hello')).toBe(false);
    });

    test('ignores whitespace and capitalization', () => {
        expect(palindrome('A man a plan a canal Panama')).toBe(true);
    });
});

describe('isAnagram function', () => {
    test('returns true for anagram strings', () => {
        expect(isAnagram('listen', 'silent')).toBe(true);
    });

    test('returns false for non-anagram strings', () => {
        expect(isAnagram('hello', 'world')).toBe(false);
    });

    test('ignores whitespace and capitalization', () => {
        expect(isAnagram('Eleven plus two', 'Twelve plus one')).toBe(true);
    });
});

describe('textContainsWord', () => {
    let text;
  
    beforeAll(() => {
        text = 'The quick brown fox jumps over the lazy dog';
    });

    test('returns true if text contains specified word', () => {
        expect(textContainsWord(text, 'fox')).toBe(true);
    });

    test('returns false if text does not contain specified word', () => {
        expect(textContainsWord(text, 'cat')).toBe(false);
    });
  
    test('returns true if text contains specified word regardless of case', () => {
        expect(textContainsWord(text, 'QUICK')).toBe(true);
    });
  
    test('returns false if text does not contain specified word regardless of case', () => {
        expect(textContainsWord(text, 'CAT')).toBe(false);
    });
});

describe('splitString', () => {
    it('should split string into words and pass them to the callback', () => {
        const string = 'hello world';
        const callback = jest.fn();
        splitString(string, callback);
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(['hello', 'world']);
    });
});