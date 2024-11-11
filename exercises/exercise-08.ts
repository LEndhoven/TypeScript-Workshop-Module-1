/**
 * Exercise 08
 *
 * Tuples are useful but in general, objects are preferable.
 * They are more flexible and easier to read. Also with good semantic naming, they can be self-explanatory.
 */

import { logText } from "../lib/log-utils";

// The vehicle list should consist of objects with an `id`, `licensePlate` and `tareWeight` property.
// Make the necessary changes to the definition of the `vehicles` list below.
// Replace the `unknown` type with the correct data type for this list.
const vehicles: unknown = [
  ['001', 'A-001-BC', 1200],
  ['002', 'B-002-CD', 1500],
  ['003', 'C-003-DE', 2000],
]

// The vehicle locations should also be converted from tuples to objects.
// Each vehicle location should have a `vehicleId` and a `location` property. The `location` should consist of a `latitude` and a `longitude` property.
const vehicleLocations: unknown = [
  ['001', [40.7128, -74.0060]],
  ['002', [51.5074, -0.1278]],
]

// Changing the data types of the vehicles and vehicleLocations also has an impact on the implementation of the `getHumanFriendlyVehicleLocations` function.
// Update the function to work with the new data types.
function getHumanFriendlyVehicleLocations(vehicles: unknown, vehicleLocations: unknown): unknown {
  return vehicles.map((vehicle) => {
    const [vehicleId, licensePlate] = vehicle;
    const lastKnownLocation = vehicleLocations.find(([id]) => id === vehicleId);

    if (!lastKnownLocation) {
      return `Vehicle "${licensePlate}" has no known location`;
    }

    const [, location] = lastKnownLocation;
    const [latitude, longitude] = location;
    return `Vehicle "${licensePlate}" was last seen at (${latitude}, ${longitude})`;
  })
}

const humanFriendlyVehicleLocations = getHumanFriendlyVehicleLocations(vehicles, vehicleLocations);
logText(humanFriendlyVehicleLocations.join('\n'));
