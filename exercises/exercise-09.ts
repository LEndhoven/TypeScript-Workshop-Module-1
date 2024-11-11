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
  id: string;
  licensePlate: string;
  tareWeight: number;
}

interface VehicleLocation {
  vehicleId: string;
  location: {
    latitude: number;
    longitude: number;
  }
}

const vehicles: Vehicle[] = [
  { id: '001', licensePlate: 'A-001-BC', tareWeight: 1200 },
  { id: '002', licensePlate: 'B-002-CD', tareWeight: 1500 },
  { id: '003', licensePlate: 'C-003-DE', tareWeight: 2000 },
]

const vehicleLocations: VehicleLocation[] = [
  { vehicleId: '001', location: { latitude: 40.7128, longitude:  -74.0060 }},
  { vehicleId: '002', location: { latitude: 51.5074, longitude:  -0.1278 }},
]

function getHumanFriendlyVehicleLocations(vehicles: Vehicle[], vehicleLocations: VehicleLocation[]): string[] {
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
