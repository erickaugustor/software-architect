import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-card";
import { FifityPercentDiscount } from "./classes/discount";

const fifityPercentDiscount = new FifityPercentDiscount();

const shoppingCart = new ShoppingCart(fifityPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const oder = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Test', 10.1));
shoppingCart.addItem(new Product('Test 123', 10.1));
shoppingCart.addItem(new Product('Test 123', 10.1));

oder.checkout();
