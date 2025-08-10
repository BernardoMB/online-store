import type { Product } from "../model/ProductModel";

const products: Product[] = [
  {
    productId: "1",
    productName: "Wireless Mouse",
    description: "Ergonomic and precise, with Bluetooth support.",
    price: 29.99,
    images: ["/images/orange-ring-1.jpg", "/images/orange-ring-1.jpg"],
    isActive: true,
    featured: true
  },
  {
    productId: "2",
    productName: "Mechanical Keyboard",
    description: "Backlit keys, satisfying switches.",
    price: 79.99,
    images: ["/images/orange-ring-1.jpg"],
    isActive: true,
    featured: false
  },
  {
    productId: "3",
    productName: "Noise-Canceling Headphones",
    description: "Immersive sound and silence.",
    price: 149.99,
    images: ["/images/orange-ring-1.jpg"],
    isActive: true,
    featured: false
  },
  {
    productId: "4",
    productName: "Bluetooth Speaker",
    description: "Best quiality sound and portability.",
    price: 149.99,
    images: ["/images/orange-ring-1.jpg"],
    isActive: true,
    featured: false
  },
  {
    productId: "5",
    productName: "Orange Glow Stone Ring",
    description: "Stainless Steel, Glow Powder, Obsidian, Red Jasper, Carnelian",
    price: 49.99,
    images: ["/images/orange-ring-1.jpg"],
    isActive: true,
    featured: true
  }
];

export const ProductsService = {
  getAllProducts: (): Product[] => {
    return products.filter(p => p.isActive);
  },
  getProductById: (productId: string): Product | undefined => {
    const product: Product | undefined = products.find(product => product.productId == productId);
    return product;
  },
  getFeaturedProducts: (): Product[] => {
    return products.filter(p => p.isActive && p.featured);
  },
};
