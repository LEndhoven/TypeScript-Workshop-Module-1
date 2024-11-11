/**
 * Exercise 14
 *
 * When using the vehicle repository, we need to be able to handle the case where the repository returns an error message.
 * An initial attempt to do this was written below, but it is not working correctly.
 * The author didn't really get the concept of union types and type guards
 *
 * Can you fix the code below?
 */

import { logText, logError } from "../lib/log-utils";
import { vehicleRepository, Truck, Car, Vehicle } from '../exercise-helpers/helper-14'

const suitableVehicles = vehicleRepository.getVehiclesWithMaxTareWeight(2000);

if ('error' in suitableVehicles) {
  logError(suitableVehicles.error);
} else {
  showVehicles(suitableVehicles);
}

function showVehicles(vehicles: Vehicle[]): void {
  for (const vehicle of vehicles) {
    if ('capacity' in vehicle) {
      logText(`Truck ${vehicle.licensePlate}: Tare weight of ${vehicle.tareWeight} kg, capacity of ${vehicle.capacity} kg and ${vehicle.numberOfAxles} axles`);
    } else{
      logText(`Car ${vehicle.licensePlate}: Tare weight of ${vehicle.tareWeight} kg, ${vehicle.numberOfSeats} seats and fuel type ${vehicle.fuelType}`);
    }
  }
}
