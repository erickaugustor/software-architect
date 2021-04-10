export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

const person1 = new Person('Luiz', 30);
const person2 = person1.clone();

console.log(person2)
console.log(person2.name)

person2.name = 'Joana';
console.log(person2.name);

export class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address('Av Brasil', 13);
const person3 = new Person('Sérgio', 40);

person3.addAddress(address1);

const person4 = person3.clone();

// the change will reflect in person4
person3.addresses[0].street = 'NENHUMA RUA';

person4.name = 'Person2';
console.log(person4.addresses);


