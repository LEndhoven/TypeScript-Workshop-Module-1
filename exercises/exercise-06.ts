/**
 * Exercise 06
 *
 * Below is a simple calculation to determine the number of remaining leave days an employee has.
 * Refactor the function to use the `const` keyword instead of `var`.
 */

import { logText } from "../lib/log-utils";

function getEmployeeRemainingLeaveDays(age: number, spentDays: number): number {
  const leaveDays = age <= 35 ? 25 :27;
  const remainingLeaveDays = leaveDays - spentDays;
  if (remainingLeaveDays <= 0) {
    return 0;
  }

  return remainingLeaveDays;
}

logText(getEmployeeRemainingLeaveDays(27, 3).toString()); // 22
logText(getEmployeeRemainingLeaveDays(37, 10).toString()); // 17
logText(getEmployeeRemainingLeaveDays(50, 15).toString()); // 12

