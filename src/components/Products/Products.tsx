import React, { useEffect, useState } from "react";
import { ProductsService } from "../../services/ProductsService";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css"
import type { Product } from "../../model/ProductModel";
import { Box, Text } from "@chakra-ui/react";
import ProductCardSmall from "../ProductCardSmall/ProductCardSmall";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const allProducts = ProductsService.getAllProducts();
    setProducts(allProducts);
  }, []);

  return (
    <div className="products-page">
      <h2>🛍️ Our Products</h2>
      <Text>From soft hues to bold hoots—browse what makes your style sing.</Text>
      <div className="product-grid">
        {products.map((product: Product) => (
          <Box width={'220px'} height={'220px'} key={product.productId}>
              <ProductCardSmall
                productId={product.productId}
                productName={product.productName}
                description={product.description}
                price={product.price}
                images={product.images}
              />
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Products;
