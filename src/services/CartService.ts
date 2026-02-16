import type { CheckoutCardItem } from "@/model/CheckoutModel";
import type { CartItem } from "../model/CartModel";
import { saveCartToIndexedDB } from "./DatabaseService";

class CartService {
  private items: Map<string, CartItem> = new Map();
  private listeners: (() => void)[] = [];

  subscribe(listener: () => void) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach(fn => fn());
  }

  // Add item or update quantity
  addItem(item: CartItem): void {
    const key = `id:${item.productId};size:${item.size}`;
    const existing = this.items.get(key);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.items.set(key, { ...item });
    }
    saveCartToIndexedDB(this.getItems());
    this.notify();
  }

  // Remove item once by productId
  removeItem(productId: string, size: number): void {
    const key = `id:${productId};size:${size}`;
    const existing = this.items.get(key);
    if (existing) {
      existing.quantity -= 1;
    } else {
      alert('Error: the item is not in the cart')
    }
    if (existing?.quantity == 0) {
      this.items.delete(key);
    }
    saveCartToIndexedDB(this.getItems());
    this.notify();
  }

  // Remove all items by productId
  removeItemAll(productId: string): void {
    console.log('Removing all items with productId', productId);
    console.log('Itmes', this.items);
    for (const key of this.items.keys()) {
      console.log(`Checking in key "${key}" includes "id:${productId};"`);
      if (key.includes(`id:${productId};`)) {
        console.log(`Key "${key}" includes "id:${productId};". Hence, deleting item`);
        this.items.delete(key);
      }
    }
    saveCartToIndexedDB(this.getItems());
    this.notify();
  }

  // Empty cart
  empty(): void {
    this.items.clear();
    saveCartToIndexedDB(this.getItems());
    this.notify();
  }

  // Get total price
  getTotalPrice(): number {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }

  // Get total number of items
  getItemCount(): number {
    let count = 0;
    this.items.forEach((item) => {
      count += item.quantity;
    });
    return count;
  }

  // Optional: return cart contents
  getItems(): CartItem[] {
    return Array.from(this.items.values());
  }

  // Get item quantity by product ID 
  getQuantityByProductId(productId: string): number {
    let count = 0;
    this.items.forEach((item) => {
      if (item.productId === productId) {
        count += item.quantity;
      }
    });
    return count;
  }

  // Get item quantity by product ID and size
  getQuantity(productId: string, size: number): number {
    const key = `id:${productId};size:${size}`;
    return this.items.get(key)?.quantity || 0;
  }
}

export const cartService = new CartService();

export function groupByIdWithSizes(items: CartItem[]): CheckoutCardItem[] {
  //console.log('Grouping items by productId and sizes', items);
  const grouped: any = {};
  for (const item of items) {
    if (!grouped[item.productId]) {
      // Product is not there
      grouped[item.productId] = { product: item, sizes: Array(item.quantity).fill(item.size) };
    } else {
      // Product is already there
      grouped[item.productId].sizes.push(...Array(item.quantity).fill(item.size));
    }
  }
  return Object.values(grouped);
}