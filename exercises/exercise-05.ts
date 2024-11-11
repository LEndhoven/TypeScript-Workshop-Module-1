/**
 * Exercise 05
 *
 * Below is a recursive implementation of a function that calculates the factorial of a number.
 * The function is working correctly, but it is using the `var` keyword to declare the `result` variable.
 *
 * Refactor the function to use the `let` keyword instead of `var`.
 */

import { logText } from "../lib/log-utils";

function factorial(n: number): number {
  if (n < 0) {
    throw new Error('Factorial of negative numbers is not defined');
  }

  let result;
  if (n === 0) {
    result = 1;
  } else {
    result = n * factorial(n - 1);
  }

  return result;
}

logText(factorial(4).toString()); // 24
logText(factorial(5).toString()); // 120
logText(factorial(0).toString()); // 1

