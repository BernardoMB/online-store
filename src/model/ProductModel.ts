export type Product = {
  productId: string;
  productName: string;
  description: string;
  price: number;
  images: string[];
  isActive: boolean;
  featured: boolean;
};

export type ProductCardProps = {
    productId: string;
    productName: string;
    description: string;
    price: number;
    images: string[];
};