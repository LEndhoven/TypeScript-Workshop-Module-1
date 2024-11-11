/**
 * Exercise 15
 *
 * The application has grown a bit and unevitably some bugs have been introduced.
 * During the course of time, several more interfaces have been added to the application.
 * The application is now throwing runtime errors and it is your job to fix them.
 *
 * Unfortunately, for backwards compatibility reasons, you cannot change the existing interfaces.
 */
import { Vehicle, Bike, Driveable } from '../exercise-helpers/helper-16';
import { logText } from "../lib/log-utils";

// This function is throwing a runtime error, but no compile time error. Can you fix it?
function getMaximumWheelPressure(driveables: Driveable[]): number {
  return Math.max(
    ...driveables.map((driveable) => {
      if (isBike(driveable)) {
        return Math.max(driveable.wheelPressure.front, driveable.wheelPressure.back);
      }

      return 0;
    })
  );
}

function isBike(item: unknown): item is Bike {
  return !!item && typeof item === 'object' && 'brand' in item;
}

const allDriveables: Driveable[] = [
  { brand: 'Toyota', id: '1', licensePlate: 'ABC-123', tareWeight: 1000 },
  { brand: 'Trek', wheelPressure: { front: 2.5, back: 2.7 }, id: '5' },
  { brand: 'Volvo', id: '2', licensePlate: 'DEF-456', tareWeight: 1500 },
  { brand: 'Yamaha', id: '4', wheelPressure: { front: 2.0, back: 2.3 } },
  { brand: 'Giant', wheelPressure: { front: 2.3, back: 2.6 }, id: '6' },
  { brand: 'Kawasaki', id: '3', wheelPressure: { front: 2.2, back: 2.5 } },
]

logText('Finding the maximum wheel pressure...');
const maximumWheelPressure = getMaximumWheelPressure(allDriveables);
logText(`The maximum wheel pressure is ${maximumWheelPressure}`);
