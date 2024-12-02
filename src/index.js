#!/usr/bin/env node

export function capitalize(word) {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverseString(str) {
  return str.split("").reverse().join("");
}

export function calculate(a, b, operation) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      return b !== 0 ? a / b : null; // Prevent division by zero
    case "multiply":
      return a * b;
    default:
      throw new Error("Invalid operation");
  }
}

export function caesarCipher(str, shift) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const start = char >= "a" ? 97 : 65; // ASCII value for 'a' or 'A'
    return String.fromCharCode(
      ((char.charCodeAt(0) - start + shift) % 26) + start
    );
  });
}

export function analyzeArray(arr) {
  const sum = arr.reduce((total, num) => total + num, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return { average, min, max, length };
}
