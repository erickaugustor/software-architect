const personPrototype = {
  firstName: 'Luiz',
  lastName: 'Miranda',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// almost like a heritage
const anotherPerson = Object.create(personPrototype);

// shawdowing
anotherPerson.firstName = 'Joana';

// first look in anotherPerson, after in personPrototype and after in the prototype
