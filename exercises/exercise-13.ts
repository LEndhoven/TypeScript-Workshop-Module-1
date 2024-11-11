/**
 * Exercise 13
 *
 * This exercise has no runtime check. You don't have to run this exercise to verify your solution.
 *
 * A more real life version of a repository fetches vehicles from a data source using a network connection.
 * Things can go wrong when fetching data from a network connection, so we need to handle errors.
 *
 * In case of an error, we should not return vehicles, but return an object with an error message instead.
 */

// Can you modify the return type of the `getVehiclesWithMaxTareWeight` method in the `VehicleRepository` interface
// to support returning an object with an error message?
interface VehicleRepository {
  getVehiclesWithMaxTareWeight(maxTareWeight: number): Vehicle[] | { error: string };
}
