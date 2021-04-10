import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { CompositeMeal } from "./composite-meal";
import { Beans, Beverage, Dessaert, Rice } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: CompositeMeal = new CompositeMeal();

  reset(): this {
    this._meal = new CompositeMeal();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 50);
    const bean = new Beans('Feijão', 20);

    this._meal.add(rice, bean);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Bebida', 50);

    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessaert('Sobremesa', 50);

    this._meal.add(dessert);
    return this;
  }

  getMeal(): CompositeMeal {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}