import { loadStripe } from "@stripe/stripe-js";
import { cartService } from "../../services/CartService";
import type { Shipping } from "../../model/CartModel";

const CheckoutButton: React.FC<{ shipping: Shipping; disabled: boolean }> = ({ shipping, disabled }) => {
  const handleCheckout = async () => {
    // TODO: Load this url from configuration
    const response = await fetch("https://zkys57t35d.execute-api.us-west-2.amazonaws.com/default/OnlineStoreCheckout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        items: cartService.getItems(), 
        shipping 
      }),
    });
  
    const { sessionId } = await response.json();
    // TODO: Load the public key from configuration
    const stripe = await loadStripe("pk_test_51RdN7NPp6ZhE6zwbbcfU87AuamV62hCSymQYAAs7g4Lc1Puyipeta4NCR76mBuRM3TKGMJYMwT544PdyeKhw1Qy000yYh37FgJ");
    stripe?.redirectToCheckout({ sessionId });
  };

  return <button onClick={handleCheckout} disabled={disabled}>Pay with Stripe</button>;
};

export default CheckoutButton;
