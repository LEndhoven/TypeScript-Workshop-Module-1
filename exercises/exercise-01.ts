/**
 * Exercise 01
 *
 * This exercise is about setting the correct type annotations for the variables and function parameters and return types.
 * For now, the `unknown` type is used as a placeholder.
 * Replace it with the correct primitive type (`number`, `string` and `boolean`) to pass this exercise.
 */

import { logText } from "../lib/log-utils";

const FAVORITE_FOOD: unknown = 'Pizza';
const SEVEN: unknown = parseInt('7');

const THIS_SENTENCE_HAS_SIX_WORDS: unknown = 'This sentence has six words'.length === 6;

function multiply(a: unknown, b: unknown): unknown {
  return a * b;
}

function isPrime(value: unknown): unknown {
  if (value <= 1) {
      return false;
  }

  if (value <= 3) {
      return true;
  }

  if (value % 2 === 0) {
      return false;
  }

  const squareRoot = Math.ceil(Math.sqrt(value));
  for (let i = 3; i <= squareRoot; i+=2) {
      if (value % i === 0) {
          return false;
      }
  }

  return true;
}

logText(`Is ${SEVEN} prime? ${isPrime(SEVEN)}`);
logText(`Is 23 prime? ${isPrime(23)}`);
logText(`Is 33 prime? ${isPrime(33)}`);
logText(`23 times 33 is ${multiply(23, 33)}`);
