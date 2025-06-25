
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home";
import Products from "./components/Products/Products";
import About from "./components/About";
import { useEffect, useRef } from "react";
import { loadCartFromIndexedDB } from "./services/DatabaseService";
import { cartService } from "./services/CartService";
import Checkout from "./components/Checkout/Checkout";
import Success from "./components/Success/Success";
import ProductPage from "./components/Product/Product";

const App: React.FC = () => {
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    loadCartFromIndexedDB()
      .then(items => {
        items.forEach(item => cartService.addItem(item));
      })
      .catch(err => console.error("Cart load error:", err));
  }, []);
  
  return <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="success" element={<Success />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Route>
    </Routes>
  </Router>;
}

export default App;
