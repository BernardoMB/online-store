export type Product = {
  productId: string;
  productName: string;
  description: string;
  price: number;
  imageUrl?: string;
};

const products: Product[] = [
  {
    productId: "1",
    productName: "Wireless Mouse",
    description: "Ergonomic and precise, with Bluetooth support.",
    price: 29.99,
    imageUrl: "/images/mouse.jpg",
  },
  {
    productId: "2",
    productName: "Mechanical Keyboard",
    description: "Backlit keys, satisfying switches.",
    price: 79.99,
    imageUrl: "/images/keyboard.jpg",
  },
  {
    productId: "3",
    productName: "Noise-Canceling Headphones",
    description: "Immersive sound and silence.",
    price: 149.99,
    imageUrl: "/images/headphones.jpg",
  },
];

export const ProductsService = {
  getAllProducts: (): Product[] => {
    return products;
  },
};
