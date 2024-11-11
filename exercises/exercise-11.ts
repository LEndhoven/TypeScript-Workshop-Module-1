/**
 * Exercise 11
 *
 * Vehicles sometimes need maintenance. When a vehicle is in maintenance, it should not be available for use.
 * To keep track of which vehicles are in maintenance, we will extend the `Vehicle` interface with a new property `status`.
 *
 * The value of the `status` property should indicate whether the vehicle is available, whether it is in maintenance, or whether it is written off.
 * We will use an enum for this purpose.
 */


// Can you implement the `VehicleStatus` enum?

// enum VehicleStatus

// Can you extend the `Vehicle` interface with the `status` property?
interface Vehicle {
  id: string;
  licensePlate: string;
  tareWeight: number;
}


const vehicle: Vehicle = {
  id: '1',
  licensePlate: 'AA-123-BB',
  tareWeight: 1500,
  status: VehicleStatus.Available
}

console.log(`Vehicle status: ${vehicle.status}`);
