function palindrome(text) {
    const textLetters = text.toLowerCase().replace(/[\W_]/g, '');

    return textLetters === textLetters.split('').reverse().join('');
}

function isAnagram(text1, text2) {
    const text1Letters = text1.toLowerCase().replace(/[\W_]/g, '');
    const text2Letters = text2.toLowerCase().replace(/[\W_]/g, '');

    return text1Letters.split('').sort().join('') === text2Letters.split('').sort().join('');
}
function textContainsWord(text, word) {
    return text.toLowerCase().includes(word.toLowerCase());
}
function splitString(string, callback) {
    const words = string.split(' ');
    callback(words);
}
  

module.exports = { palindrome, isAnagram, textContainsWord, splitString};
  