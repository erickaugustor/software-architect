import Customer from "./interfaces/customer";

export class Individual implements Customer {
  constructor(public name: string) {}
}
