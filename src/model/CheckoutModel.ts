import type { CartItem } from "./CartModel";

export type CheckoutCardItem = {
  product: CartItem;
  sizes: number[];
};