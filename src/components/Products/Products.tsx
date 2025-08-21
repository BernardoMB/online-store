import React, { useEffect, useState } from "react";
import { ProductsService } from "../../services/ProductsService";
import type { Product } from "../../model/ProductModel";
import { Grid, GridItem } from "@chakra-ui/react";
import ClosedSection from "../ClosedSection";
import ProductGridCard from "../ProductGridCard/ProductGridCard";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  useEffect(() => {
    const allProducts = ProductsService.getAllProducts();
    setProducts(allProducts);
    setTotalProducts(allProducts.length);
  }, []);

  return (
    <ClosedSection background='unset' p="0" minHeight={'calc(100vh - 94px - 350px - 55px)'}>
      <Grid 
        templateRows={{base: "unset", sm: 'unset', md: "unset", lg: 'unset' }}
        templateColumns={{base: "repeat(1, 1fr)", sm: 'repeat(2, 1fr)', md: "repeat(4, 1fr)", lg: 'repeat(5, 1fr)' }}
        paddingBlock={'4rem'}
      >
        {products.filter(x => /*x.productId='1'*/true).map((product: Product) => (
          <GridItem 
            key={product.productId} 
            rowSpan={1} 
            colSpan={1}
            _light={{ borderWidth: '0.5px' }}
            _dark={{ borderWidth: '1px' }}
            display={'flex'} 
            flexDirection={'column'}
          >
              <ProductGridCard
                productId={product.productId}
                productName={product.productName}
                description={product.description}
                price={product.price}
                images={product.images}
                rating={product.rating}
              />
          </GridItem>
        ))}
      </Grid>
    </ClosedSection>
  );
};

export default Products;
