/**
 * Exercise 02
 *
 * This exercise is about setting the correct type annotations for the variables and function parameters and return types.
 * For now, the `unknown` type is used as a placeholder.
 * Replace it with the correct array types to pass this exercise.
 */

import { logText } from "../lib/log-utils";

const CAPITAL_CITIES: string[] = ['Amsterdam', 'Berlin', 'Bucarest'];

function planTravel(possibleLocations: string[]): string {
  const startLocationIndex = Math.floor(Math.random() * possibleLocations.length);
  const finishLocationIndex = Math.floor(Math.random() * possibleLocations.length);

  if (startLocationIndex === finishLocationIndex) {
    return 'Ahww, you are not going anywhere. Try again!';
  }

  return 'from ' + possibleLocations[startLocationIndex] + ' to ' + possibleLocations[finishLocationIndex];
}

logText('Travel planned: ' + planTravel(CAPITAL_CITIES));
