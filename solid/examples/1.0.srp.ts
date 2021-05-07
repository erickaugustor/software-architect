type CartItem = {
  name: string;
  price: number;
}

class MessagingService {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada: ', msg);
  }
}

class ShoppingCart {
  private readonly _items: CartItem[] = [];

  constructor(
    private readonly messaging: MessagingService,
  ) {}

  isEmpty(): boolean {
    this.messaging.sendMessage(`total: ${this._items.length}`);
    return this._items.length === 0;
  }
}
