// Strategy + Injeção de Dependencia

abstract class oldDiscount {
  abstract calculate(value: number): number;
}

class OldFifityPercentDiscount extends oldDiscount {
  private readonly discount = 0.5;

  calculate(price: number): number {
    return price - price * (this.discount);
  }
}

class OldShoppingCart {
  public total = 2

  constructor(
    private readonly discountStrategy: oldDiscount,
  ) {}

  applyDiscount(): number {
    return this.discountStrategy.calculate(this.total));
  }
}

const fifityPercent = new OldFifityPercentDiscount();
new OldShoppingCart(fifityPercent);

/********/

abstract class Discount {
  protected discount = 0;
  
  calculate(price: number): number {
    return price - price * (this.discount);
  }
}

class FifityPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}