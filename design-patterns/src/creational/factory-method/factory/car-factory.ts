import { Bicycle } from "../vehicle/bicycle";
import { Vehicle } from "../vehicle/vehicle";
import { VehicleFactory } from "./creator-factory";

export class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}