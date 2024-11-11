/**
 * Exercise 12
 *
 * The application needs to be extended to support vehicles of different types.
 * We should support cars and trucks.
 * Both vehicle types share some properties, like `id`, `licensePlate` and `tareWeight`.
 * But for each vehicle type, there are also properties specific for that type:
 *
 * Truck:
 *  * capacity
 *  * numberOfAxles
 *
 * Car:
 *  * numberOfSeats
 *  * fuelType
 *
 * Can you define the interfaces for the `Truck` and `Car` types?
 */

import { logText } from "../lib/log-utils";

interface VehicleBase {
  id: string;
  licensePlate: string;
  tareWeight: number;
}

interface Truck extends VehicleBase {
  capacity: number;
  numberOfAxles: number;
}

interface Car extends VehicleBase {
  numberOfSeats: number;
  fuelType: string;
}

const vehicles: (Truck | Car)[] = [
  { id: '1', licensePlate: 'AA-123-BB', tareWeight: 1500, capacity: 1000, numberOfAxles: 2 },
  { id: '2', licensePlate: 'BB-123-CC', tareWeight: 2000, numberOfSeats: 5, fuelType: 'diesel' },
];

for(const vehicle of vehicles) {
  logText(`Vehicle: ${JSON.stringify(vehicle)}`);
}
