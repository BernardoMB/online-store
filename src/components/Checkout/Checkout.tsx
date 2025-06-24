import React, { useState, useEffect } from "react";
import { cartService } from "../../services/CartService";
import "./Checkout.css";
import CheckoutButton from "../CheckoutButton/CheckoutButton";

const Checkout: React.FC = () => {
  const [items, setItems] = useState(cartService.getItems());
  const [total, setTotal] = useState(cartService.getTotalPrice());

  useEffect(() => {
    const refresh = () => {
      setItems(cartService.getItems());
      setTotal(cartService.getTotalPrice());
    };

    // Wrap cart mutators to trigger re-renders if needed
    const originalAdd = cartService.addItem.bind(cartService);
    const originalRemove = cartService.removeItem.bind(cartService);

    cartService.addItem = (...args) => {
      originalAdd(...args);
      refresh();
    };
    cartService.removeItem = (...args) => {
      originalRemove(...args);
      refresh();
    };

    return () => {
      cartService.addItem = originalAdd;
      cartService.removeItem = originalRemove;
    };
  }, []);

  return (
    <div className="checkout-page">
      <h2>🧾 Checkout</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.productId}>
                <strong>{item.productName}</strong> — ${item.price.toFixed(2)} × {item.quantity}
                <span style={{ marginLeft: "1rem" }}>
                  = ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>

          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}

      <CheckoutButton />
    </div>
  );
};

export default Checkout;
