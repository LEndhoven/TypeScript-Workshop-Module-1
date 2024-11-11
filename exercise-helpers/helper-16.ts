
export interface Vehicle {
  brand: string;
  id: string;
  licensePlate: string;
  tareWeight: number;
}

export interface Bike {
  id: string;
  brand: string;
  wheelPressure: {
    front: number;
    back: number;
  };
}

export type Driveable = Vehicle | Bike;
