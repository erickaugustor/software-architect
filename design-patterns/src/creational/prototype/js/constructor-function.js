function Person (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

const personPrototype = {
  firstName: 'Luiz',
  lastName: 'Miranda',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
// loose the constructor, to add:
Person.prototype.constructor = Person;

const person1 = new Person('Luiz', 'Miranda', 30);
console.log(person1.fullName());

// almost like a heritage
function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'oie';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person2 = new Person('Helena', 'Vieira', 30);
console.log(person2.fullName());
