class ShoppingCartOCP {
  public total = 2

  applyDiscount(): number {
    return this.total - this.total * 0.2;
  }
}
