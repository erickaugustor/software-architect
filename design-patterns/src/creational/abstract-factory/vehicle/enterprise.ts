import Customer from "../customer/interfaces/customer";
import Vehicle from "../customer/interfaces/customer";

export class Enterprise implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) {}

  pickUp(): void {
    console.log(`${this.name} está buscando ${this.customer.name}`)
  }
}