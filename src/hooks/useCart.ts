import { useState, useEffect } from "react";
import { cartService } from "../services/CartService";

export function useCartTotals() {
  const [totals, setTotals] = useState({
    price: cartService.getTotalPrice(),
    count: cartService.getItemCount(),
  });

  useEffect(() => {
    const sync = () =>
      setTotals({
        price: cartService.getTotalPrice(),
        count: cartService.getItemCount(),
      });

    const originalAdd = cartService.addItem;
    const originalRemoveOnce = cartService.removeItem;
    const originalRemove = cartService.removeItemAll;

    cartService.addItem = (...args) => {
      originalAdd.apply(cartService, args);
      sync();
    };

    cartService.removeItem = (...args) => {
      originalRemoveOnce.apply(cartService, args);
      sync();
    };

    cartService.removeItemAll = (...args) => {
      originalRemove.apply(cartService, args);
      sync();
    };

    return () => {
      cartService.addItem = originalAdd;
      cartService.removeItem = originalRemoveOnce;
      cartService.removeItemAll = originalRemove;
    };
  }, []);

  return totals;
}