/**
 * Exercise 09
 *
 * In the previous exercise, we had to repeat the type definitions for the vehicles and vehicleLocations.
 * That is unfortunate because it is easy to make mistakes, harder to maintain and makes the code more verbose.
 *
 * By using interfaces, we can define the structure of the data once and reuse it in multiple places.
 * Below an empty interface is defined for both models. Update the code to use these interfaces.
 */

import { logText } from "../lib/log-utils";

interface Vehicle {
  // Implement the Vehicle interface
}

interface VehicleLocation {
  // Implement the VehicleLocation interface
}

const vehicles: unknown = [
  ['001', 'A-001-BC', 1200],
  ['002', 'B-002-CD', 1500],
  ['003', 'C-003-DE', 2000],
]

const vehicleLocations: unknown = [
  ['001', [40.7128, -74.0060]],
  ['002', [51.5074, -0.1278]],
]

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
