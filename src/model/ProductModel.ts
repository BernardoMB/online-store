import type { BoxProps, StackProps } from "@chakra-ui/react";

export type Product = {
  productId: string;
  productName: string;
  description: string;
  price: number;
  images: string[];
  isActive: boolean;
  featured: boolean;
};

export type ProductCardProps = StackProps & {
    productId: string;
    productName: string;
    description: string;
    price: number;
    images: string[];
};