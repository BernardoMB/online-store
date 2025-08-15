export type CartItem = {
  productId: string;
  productName: string;
  description: string;
  size: number;
  price: number;
  quantity: number;
  imageUrl?: string;
};

export type Shipping = {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
};