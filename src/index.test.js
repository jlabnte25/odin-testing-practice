import {
  analyzeArray,
  capitalize,
  reverseString,
  calculate,
  caesarCipher,
} from "./index.js";

test("capitalize", () => {
  expect(capitalize("word")).toBe("Word");
});

test("reverse string", () => {
  expect(reverseString("word")).toBe("drow");
});

test("calculate add", () => {
  expect(calculate(2, 2, "add")).toBe(4);
});

test("calculate subtract", () => {
  expect(calculate(2, 2, "subtract")).toBe(0);
});

test("calculate divide", () => {
  expect(calculate(2, 2, "divide")).toBe(1);
});

test("calculate multiply", () => {
  expect(calculate(2, 2, "multiply")).toBe(4);
});

test("caesarCipher", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("caesarCipher", () => {
  expect(caesarCipher("abC", 4)).toBe("efG");
});

test("caesarCipher", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

describe("analyzeArray", () => {
  test("returns correct analysis for an array of numbers", () => {
    const input = [1, 8, 3, 4, 2, 6];
    const expected = {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    };

    const result = analyzeArray(input);

    expect(result).toEqual(expected);
  });
});
