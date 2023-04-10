function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "Division by zero is impossible";
    } else {
        return a / b;
    }
}

module.exports = {add, sub, multiplication, division};