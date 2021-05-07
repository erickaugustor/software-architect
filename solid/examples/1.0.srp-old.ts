type CartItemOld = {
  name: string;
  price: number;
}

class ShoppingCartOld {
  private readonly _items: CartItemOld[] = [];

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  isEmpty(): boolean {
    this.sendMessage(`total: ${this._items.length}`);
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem: ', msg);
  }
}
