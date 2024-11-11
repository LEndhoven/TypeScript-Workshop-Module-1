/**
 * Exercise 16
 *
 * One of the developers has found a 3rd party library that can help us with geocoding the locations.
 * It is a library that returns for a given location the address properties of that location.
 *
 * The library is great, but there is one problem. The library is not type safe and it is not always returning the address properties.
 * Depending on the location, not all address properties are always returned.
 * It could also be that a location has no matching address. In that case, the library returns other objects like if it is a park or a river.
 *
 * Since it is a 3rd party library, we cannot change the library. We need to work with what we have.
 * The previous developer didn't really know how to handle untyped libraries and used `any`.
 * It is your job to make the code more robust by defining the correct types and type guards.
 * Luckily, we can read the source code of the library and see what it is returning.
 *
 */

import { VehicleLocation, Vehicle } from "../exercise-helpers/helper-15";
import { logText } from "../lib/log-utils";

/// ---- Here starts the 3rd party library code. You cannot change this code ----
function geocodeLocation(location: any): any {
  if (Math.random() < 0.7) {
    return {
      address: {
        street: 'Main Street',
        city: Math.random() < 0.5 ? 'Metropolis' : undefined,
        postalCode: '12345'
      }
    }
  }


  return Math.random() < 0.5 ? {
    park: {
      name: 'Central Park',
      city: 'Metropolis'
    }
  } : {
    river: {
      name: 'Hudson River',
    }
  }
}
/// ---- Here stops the 3rd party library code. You can change code from this point on ----


// First we will need to define types for the library response

interface GeocodedAddress {
  address: {
    street: string;
    city: string | undefined;
    postalCode: string;
  }
}

interface GeocodedPark {
  park: {
    name: string;
    city: string;
  }
}

interface GeocodedRiver {
  river: {
    name: string;
  }
}

// Now define the correct union type `GeocodedLocation` for the different types of locations
// Remove `{}` and replace it with the correct union type
type GeocodedLocation = GeocodedAddress | GeocodedPark | GeocodedRiver;


/// Secondly, we need to define a custom type guard to check if a value is a GeocodedLocation
function isGeocodedLocation(location: unknown): location is GeocodedLocation {
  return typeof location === 'object' && location !== null &&
    (
      ('address' in location && typeof location.address === 'object' && location.address !== null &&
        'street' in location.address && typeof location.address.street === 'string' &&
        'postalCode' in location.address && typeof location.address.postalCode === 'string' &&
        ('city' in location.address && (typeof location.address.city === 'string' || typeof location.address.city === 'undefined'))
      )
      ||
      ('park' in location && typeof location.park === 'object' && location.park !== null &&
        'name' in location.park && typeof location.park.name === 'string' &&
        'city' in location.park && typeof location.park.city === 'string'
      )
      ||
      ('river' in location && typeof location.river === 'object' && location.river !== null &&
        'name' in location.river && typeof location.river.name === 'string'
      )
    );
}

/// Lastly, we need to get rid of `any` and implement the `formatGeocodedLocation` in a safe way.
// The format requirements are:
// - If the location is an address, return the street, postal code and the name of the city, if it exists, in upper casing
// - If the location is a park, return the name of the park and the name of the city in upper casing
// - If the location is a river, return the name of the river in upper casing
function formatGeocodedLocation(geocodedLocation: GeocodedLocation): string {
  if ('address' in geocodedLocation) {
    return `${geocodedLocation.address.street.toUpperCase()}, ${geocodedLocation.address.postalCode.toUpperCase()}, ${geocodedLocation.address.city?.toUpperCase()}`;
  } else if ('park' in geocodedLocation) {
    return `${geocodedLocation.park.name.toUpperCase()}, ${geocodedLocation.park.city.toUpperCase()}`;
  }

  return geocodedLocation.river.name.toUpperCase();
}

// Now adapt the `getHumanFriendlyVehicleLocations` function to use the new types and type guards and make it type safe
// such that it doesn't throw any runtime errors anymore
function getHumanFriendlyVehicleLocations(vehicles: Vehicle[], vehicleLocations: VehicleLocation[]): string[] {
  return vehicles.map((vehicle) => {
    const { id, licensePlate } = vehicle;
    const lastKnownLocation = vehicleLocations.find(({vehicleId}) => id === vehicleId);
    const geocodedAddress = geocodeLocation(lastKnownLocation);

    if (isGeocodedLocation(geocodedAddress)) {
      return `Vehicle "${licensePlate}" was last seen at ${formatGeocodedLocation(geocodedAddress)}`;
    } else {
      return '';
    }
  })
}


const vehicles: Vehicle[] = [
  { id: '001', licensePlate: 'A-001-BC' },
  { id: '002', licensePlate: 'B-002-CD' },
  { id: '003', licensePlate: 'C-003-DE' },
  { id: '004', licensePlate: 'D-004-EF' },
  { id: '005', licensePlate: 'E-005-FG' },
  { id: '006', licensePlate: 'F-006-GH' },
  { id: '007', licensePlate: 'G-007-HI' },
  { id: '008', licensePlate: 'H-008-IJ' },
  { id: '009', licensePlate: 'I-009-JK' },
  { id: '010', licensePlate: 'J-010-KL' }
]

// The vehicle locations should also be converted from tuples to objects.
// Each vehicle location should have a `vehicleId` and a `location` property. The `location` should consist of a `latitude` and a `longitude` property.
const vehicleLocations: VehicleLocation[] = [
  { vehicleId: '001', location: { latitude: 40.7128, longitude: -74.0060} },
  { vehicleId: '005', location: { latitude: 37.7749, longitude: -122.4194 } },
  { vehicleId: '002', location: { latitude: 51.5074, longitude: -0.1278 } },
  { vehicleId: '007', location: { latitude: 48.8566, longitude: 2.3522 } },
  { vehicleId: '008', location: { latitude: 52.3667, longitude: 4.8945 } },
  { vehicleId: '009', location: { latitude: 52.2297, longitude: 21.0122 } },
  { vehicleId: '010', location: { latitude: 52.5200, longitude: 13.4050 } },
  { vehicleId: '003', location: { latitude: 48.8566, longitude: 2.3522 } },
  { vehicleId: '006', location: { latitude: 37.7749, longitude: -122.4194 } }
]

const humanFriendlyVehicleLocations = getHumanFriendlyVehicleLocations(vehicles, vehicleLocations);
logText(humanFriendlyVehicleLocations.join('\n'));
