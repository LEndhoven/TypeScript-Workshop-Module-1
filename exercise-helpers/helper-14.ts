interface VehicleRepository {
  getVehiclesWithMaxTareWeight(maxTareWeight: number): Vehicle[] | { error: string };
}

export type Vehicle = Truck | Car;

interface VehicleBase {
  id: string;
  licensePlate: string;
  tareWeight: number;
}

export interface Truck extends VehicleBase {
  capacity: number;
  numberOfAxles: number;
}

export interface Car extends VehicleBase {
  numberOfSeats: number;
  fuelType: string;
}

class SimplifiedVehicleRepository implements VehicleRepository {
  constructor(private readonly vehicles: Vehicle[]) {}

  public getVehiclesWithMaxTareWeight(maxTareWeight: number): Vehicle[] | { error: string; } {
    if (Math.random() < 0.5) {
      return { error: 'Could not fetch vehicles' };
    }

    return this.vehicles.filter(({tareWeight}) => tareWeight <= maxTareWeight);
  }
}

const vehicles: Vehicle[] = [
  { id: '1', licensePlate: 'ABC-123', tareWeight: 1000, numberOfSeats: 5, fuelType: 'gasoline' },
  { id: '2', licensePlate: 'DEF-456', tareWeight: 1500, capacity: 5000, numberOfAxles: 2 },
  { id: '3', licensePlate: 'GHI-789', tareWeight: 2000, numberOfSeats: 2, fuelType: 'diesel' },
]

export const vehicleRepository = new SimplifiedVehicleRepository(vehicles);
