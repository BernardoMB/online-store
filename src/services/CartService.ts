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
  }

  // Remove all items by productId
  removeItemAll(productId: string): void {
    this.items.delete(productId);
    saveCartToIndexedDB(this.getItems());
  }

  // Empty cart
  empty(): void {
    this.items.clear();
    saveCartToIndexedDB(this.getItems());
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