
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home";
import Products from "./components/Products/Products";
import About from "./components/About";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
