import { CarFactory } from "../factory/bicycle-factory";
import { Vehicle } from "../vehicle/vehicle";

export const randomNumbers = (length: number): number => Math.floor(Math.floor(Math.random() * length);

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory()

  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta');

  const cars = [car1, car2]

  return cars[randomNumbers(cars.length)]
}