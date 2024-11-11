/**
 * Exercise 10
 *
 * Vehicles maintained by the application are not stored in memory, but in a database.
 * The database is accessed through a `VehicleRepository`.
 *
 * We will impelement a simplified version of the `VehicleRepository` that accepts a static array of available vehicles and use that as the data source.
 *
 * For now, the only functionality we need from the repository is to retrieve all vehicles with a tare weight smaller than a given value.
 *
 * Define the `VehicleRepository` interface and a `SimplifiedVehicleRepository` class, where:
 *   - The `VehicleRepository` interface should have a method `getVehiclesWithMaxTareWeight` that given a maxTareWeight returns an array of vehicles.
 *   - The `SimplifiedVehicleRepository` class should have a constructor that accepts an array of vehicles and stores it internally.
 *   - The `SimplifiedVehicleRepository` class should implement the `VehicleRepository` interface
 *        (the actual implementation of the `getVehiclesWithMaxTareWeight` is not important for this exercise. Returning an empty array is sufficient).
 *   - It should not be possible to access the array of vehicles from outside the class.
 *   - It should also not be possible to re-assign the array of vehicles. Even not from inside the class.
 */

import { logText } from "../lib/log-utils";

interface Vehicle {
  id: string;
  licensePlate: string;
  tareWeight: number;
}

interface VehicleRepository {
  getVehiclesWithMaxTareWeight(maxTareWeight: number): Vehicle[];
}

class SimplifiedVehicleRepository {
  constructor(private readonly vehicles: Vehicle[]) {}

  getVehiclesWithMaxTareWeight(maxTareWeight: number): Vehicle[] {
    return this.vehicles.filter(vehicle => vehicle.tareWeight < maxTareWeight);
  }
}


const vehicles: Vehicle[] = [
  { id: '1', licensePlate: 'AA-123-BB', tareWeight: 1500 },
  { id: '2', licensePlate: 'BB-123-CC', tareWeight: 2000 },
  { id: '3', licensePlate: 'CC-123-DD', tareWeight: 2500 },
]

const vehicleRepository: VehicleRepository = new SimplifiedVehicleRepository(vehicles);
const suitableVehicles = vehicleRepository.getVehiclesWithMaxTareWeight(2000);
logText(`Suitable vehicles: ${suitableVehicles.join('\n')}`);
