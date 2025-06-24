import type { CartItem } from "../model/CartModel";
import { saveCartToIndexedDB } from "./DatabaseService";

class CartService {
  private items: Map<string, CartItem> = new Map();

  // Add item or update quantity
  addItem(item: CartItem): void {
    const existing = this.items.get(item.productId);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.items.set(item.productId, { ...item });
    }
    saveCartToIndexedDB(this.getItems());
  }

  // Remove item once by productId
  removeItem(productId: string): void {
    const existing = this.items.get(productId);
    if (existing) {
      existing.quantity -= 1;
    } else {
      alert('Error: the item is not in the cart')
    }
    if (existing?.quantity == 0) {
      this.items.delete(productId);
    }
    saveCartToIndexedDB(this.getItems());
  }

  // Remove all items by productId
  removeItemAll(productId: string): void {
    this.items.delete(productId);
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

  getQuantity(productId: string): number {
    return this.items.get(productId)?.quantity || 0;
  }
}

export const cartService = new CartService();