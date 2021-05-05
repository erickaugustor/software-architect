export abstract class oldDiscount {
  abstract calculate(value: number): number;
}

export class oldFifityPercentDiscount extends oldDiscount {
  private readonly discount = 0.5;

  calculate(price: number): number {
    return price - price * (this.discount);
  }
}

/********/

export abstract class Discount {
  protected discount = 0;
  
  calculate(price: number): number {
    return price - price * (this.discount);
  }
}

export class FifityPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}