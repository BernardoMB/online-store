import { createListCollection, type BoxProps, type StackProps } from "@chakra-ui/react";

export type Product = {
  productId: string;
  productName: string;
  description: string;
  price: number;
  images: string[];
  isActive: boolean;
  featured: boolean;
  rating: number;
};

export type ProductCardProps = StackProps & {
    productId: string;
    productName: string;
    description: string;
    price: number;
    images: string[];
    rating: number;
};

export const ringSizes = createListCollection({
    items: [
        { label: "Size 5", value: "5" },
        { label: "Size 6", value: "6" },
        { label: "Size 7", value: "7" },
        { label: "Size 8", value: "8" },
        { label: "Size 9", value: "9" },
        { label: "Size 10", value: "10" },
        { label: "Size 11", value: "11" },
        { label: "Size 12", value: "12" },
    ],
});
