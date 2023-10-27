import {
  capitalize,
  analyzeArray,
  reverseString,
  caesarCipher,
  calculator,
} from "./script";

test("Caplitalize 'testing' will become 'Testing'", () => {
  expect(capitalize("testing")).toBe("Testing");
});

test("Reverse 'Testing2' to be '2gnitseT'", () => {
  expect(reverseString("Testing2")).toBe("2gnitseT");
});

test("Calculater add 5 + 6 is 11", () => {
  expect(calculator.add(5, 6)).toBe(11);
});

test("Calculater subtract 20 - 3 is 17", () => {
  expect(calculator.substract(20, 3)).toBe(17);
});

test("Calculater divide 30 / 4 is 7.5", () => {
  expect(calculator.divide(30, 4)).toBeCloseTo(7.5);
});

test("Calculater multiply 23 * 2 is 46", () => {
  expect(calculator.multiply(23, 2)).toBeCloseTo(46);
});

test("Ceasar cipher 'This is a test zZ' with shift 1 should be 'Uijt jt b uftu aA' ", () => {
  expect(caesarCipher("This is a test zZ", 1)).toBe("Uijt jt b uftu aA");
});

test("Analyze array [2, 4, 12, 6, -2] to have {average: 4.4, min: -2, max: 12, length: 5}", () => {
  expect(analyzeArray([2, 4, 12, 6, -2]).average).toBeCloseTo(4.4);
  expect(analyzeArray([2, 4, 12, 6, -2]).min).toBe(-2);
  expect(analyzeArray([2, 4, 12, 6, -2]).max).toBe(12);
  expect(analyzeArray([2, 4, 12, 6, -2]).length).toBe(5);
});
