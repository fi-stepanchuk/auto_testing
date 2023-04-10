function sumArray(array) {
    return array.reduce((sum, currentValue) => sum + currentValue, 0);
}

function filterPositiveNumbers(array) {
    return array.filter((num) => num > 0);
}

function filterNegativeNumbers(array) {
    return array.filter((number) => number < 0);
}

function arrayContainsObject(arr, obj) {
    return arr.some(item => item === obj);
}

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

module.exports = {
    sumArray, 
    filterPositiveNumbers, 
    filterNegativeNumbers, 
    arrayContainsObject, 
    forEach
};
  