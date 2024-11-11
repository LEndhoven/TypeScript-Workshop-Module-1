/**
 * Exercise 04
 */

import { logItalic } from "../lib/log-utils";

// Fix the compile errors by correcting the employee data such that it matches the `employees` parameter in the `storeEmployeeData` function
storeEmployeeData([
  ['Alice', 25],
  ['Bob', 30],
  ['Charles', 35],
  ['David', 40, 41],
  [45, 'Eve'],
  ['Frank'],
  []
])


function storeEmployeeData(employees: [string, number][]) {
  logItalic(' ✔️ Employee data stored successfully');
}

type Greeting = 'Hello' | 'Howdie';

function greet(greeting: Greeting): void {
  logItalic(greeting);
}

// Fix the compile error by correctly defining the `possibleGreetings` array.
const possibleGreetings = ['Hello', 'Hello', 'Howdie'];
for(const greeting of possibleGreetings) {
  greet(greeting);
}

