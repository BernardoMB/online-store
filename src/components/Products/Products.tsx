import React, { useEffect, useState } from "react";
import { ProductsService } from "../../services/ProductsService";
import type { Product } from "../../model/ProductModel";
import { Grid, GridItem } from "@chakra-ui/react";
import ClosedSection from "../ClosedSection";
import ProductGridCard from "../ProductGridCard";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const allProducts = ProductsService.getAllProducts();
    setProducts(allProducts);
  }, []);

  return (
    <ClosedSection background='unset' p="0">
      <Grid 
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(5, 1fr)" 
      >
        {products.map((product: Product) => (
          <GridItem key={product.productId} rowSpan={1} colSpan={1} borderWidth={'1px'}>
              <ProductGridCard
                productId={product.productId}
                productName={product.productName}
                description={product.description}
                price={product.price}
                images={product.images}
              />
          </GridItem>
        ))}
      </Grid>
    </ClosedSection>
  );
};

export default Products;
