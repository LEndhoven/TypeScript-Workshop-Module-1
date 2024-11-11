export interface Vehicle {
  id: string;
  licensePlate: string;
}

export interface VehicleLocation {
  vehicleId: string;
  location: {
    latitude: number;
    longitude: number;
  }
}
