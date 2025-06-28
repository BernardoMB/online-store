import React, { useState, useEffect } from "react";
import { cartService } from "../../services/CartService";
import "./Checkout.css";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import ProductCard from "../ProductCard/ProductCard";

const Checkout: React.FC = () => {
  const [items, setItems] = useState(cartService.getItems());
  const [total, setTotal] = useState(cartService.getTotalPrice());
  const [shipping, setShipping] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const refresh = () => {
      setItems(cartService.getItems());
      setTotal(cartService.getTotalPrice());
    };

    // Wrap cart mutators to trigger re-renders if needed
    const originalAdd = cartService.addItem.bind(cartService);
    const originalRemove = cartService.removeItem.bind(cartService);
    const originalRemoveAll = cartService.removeItemAll.bind(cartService);

    cartService.addItem = (...args) => {
      originalAdd(...args);
      refresh();
    };
    cartService.removeItem = (...args) => {
      originalRemove(...args);
      refresh();
    };
    cartService.removeItemAll = (...args) => {
      originalRemoveAll(...args);
      refresh();
    }

    return () => {
      cartService.addItem = originalAdd;
      cartService.removeItem = originalRemove;
    };
  }, []);

  const updateShipping = (field: string, value: string) => {
    const newShipping = { ...shipping, [field]: value };
    setShipping(newShipping);

    // Naive validation
    const isValid = Object.values(newShipping).every((v) => v.trim() !== "");
    setFormValid(isValid);
  };
  
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
            {items.map((product) => (
              <ProductCard
                key={product.productId}
                productId={product.productId}
                productName={product.productName}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </ul>

          <form className="shipping-form">
            <input type="text" placeholder="Full Name" value={shipping.name}
              onChange={(e) => updateShipping("name", e.target.value)} required />
            <input type="text" placeholder="Street Address" value={shipping.address}
              onChange={(e) => updateShipping("address", e.target.value)} required />
            <input type="text" placeholder="City" value={shipping.city}
              onChange={(e) => updateShipping("city", e.target.value)} required />
            <input type="text" placeholder="State" value={shipping.state}
              onChange={(e) => updateShipping("state", e.target.value)} required />
            <input type="text" placeholder="ZIP Code" value={shipping.zip}
              onChange={(e) => updateShipping("zip", e.target.value)} required />
          </form>

          <h3>Total: ${total.toFixed(2)}</h3>
          <CheckoutButton disabled={!formValid} shipping={shipping} />
        </>
      )}

    </div>
  );
};

export default Checkout;
