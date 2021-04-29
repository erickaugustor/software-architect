import { Messaging } from "./services/messaging";
import { Order } from "./entities/order";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";
import { ShoppingCart } from "./entities/shopping-card";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();

const oder = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Test', 10.1));
shoppingCart.addItem(new Product('Test 123', 10.1));
shoppingCart.addItem(new Product('Test 123', 10.1));

oder.checkout();
