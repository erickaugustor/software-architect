import Customer from "./interfaces/customer";

export class Enterprise implements Customer {
  constructor(public name: string) {}
}