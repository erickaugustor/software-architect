class MessagingOld {
  sendMessage(msg: string): void {
    console.log('[MESSAGE]: ', msg);
  }
}

class OrderOld {
  constructor(
    private readonly messaging: MessagingOld,
  ) {}
}

// Test unitário - Ajuda a mockar.

// Solução:

interface IMessage {
  sendMessage(msg: string): void
}

class Messaging implements IMessage {
  sendMessage(msg: string): void {
    console.log('[MESSAGE]: ', msg);
  }
}

class Order {
  constructor(
    private readonly messaging: IMessage,
  ) {}
}

const messaging = new Messaging();
const oder = new Order(messaging);
