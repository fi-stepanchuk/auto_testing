const {add, sub, multiplication, division} = require("../math_operations");

test("add works correctly", () => {
    expect(add(2, 3)).toBe(5);
});
  
test("add works with negative numbers", () => {
    expect(add(-2, 3)).toBe(1);
});

test("sub works correctly", () => {
    expect(sub(5, 3)).toBe(2);
});

test("sub works with negative numbers", () => {
    expect(sub(-2, -3)).toBe(1);
});

test("multiplication works correctly", () => {
    expect(multiplication(2, 3)).toBe(6);
});

test("multiplication працює з нулем", () => {
    expect(multiplication(2, 0)).toBe(0);
});


test("division works correctly", () => {
    expect(division(6, 3)).toBe(2);
});

test("division by zero return error message", () => {
    expect(division(6, 0)).toBe("Division by zero is impossible");
});
  