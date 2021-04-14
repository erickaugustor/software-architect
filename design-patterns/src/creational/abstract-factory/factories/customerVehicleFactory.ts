import Customer from "../customer/interfaces/customer";
import Vehicle from "../vehicle/interfaces/vehicle";

export interface CreateVehicleCustomer {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}