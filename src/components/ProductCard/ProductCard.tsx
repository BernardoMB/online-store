import React, { useEffect, useState } from "react";
import { cartService } from "../../services/CartService";

import "./ProductCard.css";

type ProductCardProps = {
    productId: string;
    productName: string;
    description: string;
    price: number;
    imageUrl?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
    productId,
    productName,
    description,
    price,
    imageUrl,
}) => {
    const [quantity, setQuantity] = useState(cartService.getQuantity(productId));

    const handleAddToCart = () => {
        cartService.addItem({
            productId,
            productName,
            description,
            price,
            quantity: 1,
        });
        setQuantity(cartService.getQuantity(productId));
    };
    
    const handleRemoveAllFromCart = () => {
        cartService.removeItemAll(productId);
        setQuantity(cartService.getQuantity(productId));
    };

    const handleRemoveFromCartOnce = () => {
        cartService.removeItem(productId);
        setQuantity(cartService.getQuantity(productId));
    }

    return (
        <div className="product-card">
            {imageUrl && <img src={imageUrl} alt={productName} />}
            <h3>{productName}</h3>
            <p>${price.toFixed(2)}</p>
            {quantity > 0 && <p>In Cart: {quantity}</p>}
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleRemoveFromCartOnce}>Remove from Cart</button>
            <button onClick={handleRemoveAllFromCart}>Remove all from Cart</button>
        </div>
    );
};

export default ProductCard;
