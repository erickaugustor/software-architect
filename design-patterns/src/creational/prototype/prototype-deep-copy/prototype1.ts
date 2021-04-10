export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map(item => item.clone());

    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address1 = new Address('Av Brasil', 13);
const person3 = new Person('Sérgio', 40);

person3.addAddress(address1);

const person4 = person3.clone();

// the change will reflect in person4
person3.addresses[0].street = 'NENHUMA RUA';

person4.name = 'Person2';
console.log(person4.addresses);


