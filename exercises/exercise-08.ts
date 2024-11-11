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
const vehicles: { id: string; licensePlate: string; tareWeight: number }[] = [
  { id: '001', licensePlate: 'A-001-BC', tareWeight: 1200 },
  { id: '002', licensePlate: 'B-002-CD', tareWeight: 1500 },
  { id: '003', licensePlate: 'C-003-DE', tareWeight: 2000 },
]

// The vehicle locations should also be converted from tuples to objects.
// Each vehicle location should have a `vehicleId` and a `location` property. The `location` should consist of a `latitude` and a `longitude` property.
const vehicleLocations: { vehicleId: string, location: { latitude: number, longitude: number }}[] = [
  { vehicleId: '001', location: { latitude: 40.7128, longitude:  -74.0060 }},
  { vehicleId: '002', location: { latitude: 51.5074, longitude:  -0.1278 }},
]

// Changing the data types of the vehicles and vehicleLocations also has an impact on the implementation of the `getHumanFriendlyVehicleLocations` function.
// Update the function to work with the new data types.
function getHumanFriendlyVehicleLocations(vehicles: { id: string; licensePlate: string; tareWeight: number }[], vehicleLocations: { vehicleId: string, location: { latitude: number, longitude: number }}[]): string[] {
  return vehicles.map((vehicle) => {
    const vehicleId = vehicle.id;
    const licensePlate = vehicle.licensePlate;
    const lastKnownLocation = vehicleLocations.find((vehicleLocation) => vehicleLocation.vehicleId === vehicleId);

    if (!lastKnownLocation) {
      return `Vehicle "${licensePlate}" has no known location`;
    }

    const location = lastKnownLocation.location;
    const latitude = location.latitude;
    const longitude = location.longitude;
    return `Vehicle "${licensePlate}" was last seen at (${latitude}, ${longitude})`;
  })
}

const humanFriendlyVehicleLocations = getHumanFriendlyVehicleLocations(vehicles, vehicleLocations);
logText(humanFriendlyVehicleLocations.join('\n'));
