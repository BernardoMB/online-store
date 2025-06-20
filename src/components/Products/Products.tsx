import React from "react";
import { ProductsService } from "../../services/ProductsService";
import type { Product }  from "../../services/ProductsService";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css"

const Products: React.FC = () => {
  const products: Product[] = ProductsService.getAllProducts();

  return (
    <div className="products-page">
      <h2>🛍️ Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.productId}
            productId={product.productId}
            productName={product.productName}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
