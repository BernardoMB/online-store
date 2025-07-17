import React, { useEffect, useState } from "react";
import { ProductsService } from "../../services/ProductsService";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css"
import type { Product } from "../../model/ProductModel";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const allProducts = ProductsService.getAllProducts();
    setProducts(allProducts);
  }, []);

  return (
    <div className="products-page">
      <h2>🛍️ Our Products</h2>
      <div className="product-grid">
        {products.map((product: Product) => (
          <ProductCard
            key={product.productId}
            productId={product.productId}
            productName={product.productName}
            description={product.description}
            price={product.price}
            images={product.images}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
