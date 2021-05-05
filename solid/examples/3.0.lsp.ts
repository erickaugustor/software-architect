abstract class DiscountOld {
  calculate(price: number): number {
    return price - 10;
  }
}

class ShoppingOld {
  constructor(private readonly discount: DiscountOld) {}

  totalDiscount(): number {
    const result = this.discount.calculate(this.totalDiscount());
    return result
  } 
}

// Quebrando o principio

abstract class Discount {
  calculate(price: number): unknown {
    return price - 10;
  }
}

class Shopping {
  constructor(private readonly discount: DiscountOld) {}

  totalDiscount(): number {
    const result = this.discount.calculate(this.totalDiscount())
    
    if (typeof result === 'number') return result
    return 0;
  }
}


// Mudando o comportamento

