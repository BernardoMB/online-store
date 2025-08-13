import React, { useEffect, useState } from "react";
import { ProductsService } from "../../services/ProductsService";
import type { Product } from "../../model/ProductModel";
import { Grid, GridItem } from "@chakra-ui/react";
import ClosedSection from "../ClosedSection";
import ProductGridCard from "../ProductGridCard/ProductGridCard";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const allProducts = ProductsService.getAllProducts();
    setProducts(allProducts);
  }, []);

  return (
    <ClosedSection background='unset' p="0">
      <Grid 
        templateRows={{base: "unset", sm: 'unset', md: "repeat(5, 1fr)"}}
        templateColumns={{base: "repeat(1, 1fr)", sm: 'repeat(2, 1fr)', md: "repeat(5, 1fr)" }}
        paddingBlock={'4rem'}
      >
        {products.filter(x=>/*x.productId='1'*/true).map((product: Product) => (
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
