import { CompositeMeal } from "./classes/composite-meal";
import { MainDishBuilder } from "./classes/main-dish-builder";
import { Beans, Meat, Rice } from "./classes/meals";

// composite

const rice = new Rice('Arroz', 5);
const beans = new Beans('Feijão', 10);
const meat = new Meat('Carne', 20);

const mealComposite = new CompositeMeal();
mealComposite.add(rice, beans, meat);

console.log(mealComposite.getPrice());

// builder 

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();

console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();

const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);
