const {add, sub, multiplication, division} = require('../math_operations');

describe("test add", () => {
  test.each([
    [2, 3, 5],
    [5, 10, 15],
    [-2, 3, 1],
  ])("add %i + %i must be %i", (a, b, expected) => {
    expect(add(a, b)).toBe(expected);
  });
});
  
describe("test sub", () => {
  test.each([
    [5, 3, 2],
    [10, 5, 5],
    [-2, -3, 1],
  ])("sub %i - %i must be %i", (a, b, expected) => {
    expect(sub(a, b)).toBe(expected);
  });
});

describe("test multiplication", () => {
  test.each([
    [2, 3, 6],
    [5, 0, 0],
    [-2, -3, 6],
  ])("multiplication %i * %i must be %i", (a, b, expected) => {
    expect(multiplication(a, b)).toBe(expected);
  });
});

describe("test division", () => {
  test.each([
    [6, 3, 2],
    [-10, 5, -2],
    [0, 4, 0],
  ])("division %i / %i must be %i", (a, b, expected) => {
    if (b === 0) {
      expect(division(a, b)).toBe("Division by zero impossible");
    } else {
      expect(division(a, b)).toBe(expected);
    }
  });
});
  