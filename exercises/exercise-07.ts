/**
 * Exercise 07
 *
 * Now that we have played with the basics of Typescript, let's continue to some more extensive exercises.
 * We are going to start implementing an application that manages a list of vehicles.
 *
 * This exercise uses tuples to define data structures. In the next exercise we will use the more preferred method of using interfaces.
 */

import { logText } from "../lib/log-utils";

// First, we need to define the vehicles themselves. Each Vehicle has a globally unique identifier, a license plate and a tare weight.
// Can you define the type for the vehicles?
const vehicles: unknown = [
  ['001', 'A-001-BC', 1200],
  ['002', 'B-002-CD', 1500],
  ['003', 'C-003-DE', 2000],
  ['004', 'D-004-EF', 1800],
  ['005', 'E-005-FG', 1600],
  ['006', 'F-006-GH', 1400],
  ['007', 'G-007-HI', 1900],
  ['008', 'H-008-IJ', 1700],
  ['009', 'I-009-JK', 1300],
  ['010', 'J-010-KL', 1100]
]

// Some of our vehicles are on the road. They contain a device that sends the current location once in a while.
// Below is a list of last known locations of vehicles.
// Can you define the type for the vehicle locations?
const vehicleLocations: unknown = [
  ['001', [40.7128, -74.0060]],
  ['005', [37.7749, -122.4194]],
  ['002', [51.5074, -0.1278]],
  ['007', [48.8566, 2.3522]]
]

// Now we want to implement a human friendly way of showing the vehicle license plates with their last known locations.
// If a vehicle has no known location, we should display a message saying that the location is unknown.
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
