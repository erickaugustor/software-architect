import { CarFactory } from "./factory/bicycle-factory";
import { randomCarAlgorithm, randomNumbers } from "./main/random-vehicle-algorithm";
import { Car } from "./vehicle/car";

const fusca = new Car('Fusca');
fusca.pickUp('Joanna');
fusca.stop();

const celta = new Car('celta');
celta.pickUp('Joanna');
celta.stop();

// usando factory
const carFactory = new CarFactory();

const new_fusca = carFactory.getVehicle('Fusca');
new_fusca.pickUp('Joanna');
fusca.stop();

const newCarFactory = new CarFactory();

const customerNames = ['Ana', 'Joana', 'Helena'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm()
  console.log(vehicle);
  const name = customerNames[randomNumbers(customerNames.length)]
  vehicle.pickUp(name)
  vehicle.stop()


  const newCar = newCarFactory.pickUp(name, 'novo carro');
  newCar.stop();
}

