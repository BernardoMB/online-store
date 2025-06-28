import React, { useEffect, useState } from "react";
import { cartService } from "../../services/CartService";
import { Link } from "react-router-dom";
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
            imageUrl
        });
        const newQuantity = cartService.getQuantity(productId);
        setQuantity(newQuantity);
    };
    
    const handleRemoveAllFromCart = () => {
        cartService.removeItemAll(productId);
        const newQuantity = cartService.getQuantity(productId);
        setQuantity(newQuantity);
    };

    const handleRemoveFromCartOnce = () => {
        cartService.removeItem(productId);
        const newQuantity = cartService.getQuantity(productId);
        setQuantity(newQuantity);
    }

    return (
        <Link to={`/product/${productId}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div className="product-card">
                {imageUrl && <img src={imageUrl} alt={productName} />}
                <h3>{productName}</h3>
                <p>${price.toFixed(2)}</p>
                {quantity > 0 && <p>In Cart: {quantity}</p>}
                <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleAddToCart(); }}>
                    Add to Cart
                </button>
                <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleRemoveAllFromCart(); }}>
                    Remove all from Cart
                </button>
                <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleRemoveFromCartOnce(); }}>
                    Remove from Cart
                </button>
            </div>
        </Link>
    );
};

export default ProductCard;
