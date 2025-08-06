import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import type { Product } from "../model/ProductModel";
import { ProductsService } from "../services/ProductsService";

const Content: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const featuredProducts = ProductsService.getFeaturedProducts();
    setFeaturedProducts(featuredProducts);
  }, []);

  return (
    <main style={{ flex: 1, padding: "1rem", background: "#f9f9f9" }}>
      <div className="product-grid">
        {featuredProducts.map((product: Product, index: number) => {
          return (
            <ProductCard
              key={product.productId}
              productId={product.productId}
              productName={product.productName}
              description={product.description}
              price={product.price}
              images={product.images}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Content;
