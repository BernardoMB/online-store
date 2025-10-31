import type { Product } from "../model/ProductModel";

const products: Product[] = [
  {
    productId: "1",
    productName: "Orange Ring",
    description: "Aluminum ring with orange glow stone and quartz inlays.",
    price: 45,
    images: ["/images/orange-ring-1.jpg", "/images/orange-ring-1.jpg"],
    isActive: true,
    featured: true,
    rating: 4.5
  },
  {
    productId: "2",
    productName: "Green Glow Stone",
    description: "Aluminum ring with green glow stone and quartz inlays.",
    price: 45,
    images: [
      "/images/products/green-aluminum/1.jpg", 
      "/images/products/green-aluminum/2.jpg", 
      "/images/products/green-aluminum/3.png"
    ],
    isActive: true,
    featured: false,
    rating: 4.7
  },
  {
    productId: "3",
    productName: "Green Glow Stone",
    description: "Black coated aluminum ring with green glow stone and quartz inlays.",
    price: 45,
    images: [
      "/images/products/green-black-coated-aluminum/1.png", 
      "/images/products/green-black-coated-aluminum/2.png", 
      "/images/products/green-black-coated-aluminum/3.png"
    ],
    isActive: true,
    featured: false,
    rating: 4.8
  },
  {
    productId: "4",
    productName: "Bluetooth Speaker",
    description: "Best quiality sound and portability.",
    price: 90,
    images: ["/images/orange-ring-1.jpg"],
    isActive: true,
    featured: false,
    rating: 5
  },
  {
    productId: "5",
    productName: "Orange Glow Stone Ring",
    description: "Stainless Steel, Glow Powder, Obsidian, Red Jasper, Carnelian",
    price: 50,
    images: ["/images/orange-ring-1.jpg"],
    isActive: true,
    featured: true,
    rating: 4.7
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
