/**
 * Exercise 03
 *
 * Below is a function that generates a congestion matrix for a given number of locations.
 * The function is working correctly, but it is using the `unknown` type for the function parameters and return values.
 *
 * Replace the `unknown` type with the appropriate type for the function parameters and return values.
 */

import { logText } from "../lib/log-utils";
import { range } from "./utilities";

function getCongestionMatrix(numberOfLocations: unknown): unknown {
  const locationIndices = range(numberOfLocations);

  return locationIndices.map((locationRowIndex) => {
    return locationIndices.map((locationColumnIndex) => {
      if (locationRowIndex === locationColumnIndex) {
        return 0;
      }

      return Math.random();
    })
  })
}

function getCongestionMatrixColumn(matrix: unknown, columnIndex: unknown): unknown {
  return matrix.map((row) => row[columnIndex] ?? NaN);
}

const congestionMatrix = getCongestionMatrix(5);
logText('Congestion matrix:');
console.table(congestionMatrix);

const congestionMatrixColumn = getCongestionMatrixColumn(congestionMatrix, 2);
logText('Congestion matrix column with index 2:');
console.table(congestionMatrixColumn);
