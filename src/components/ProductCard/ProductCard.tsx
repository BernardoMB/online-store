import React, { useEffect, useState } from "react";
import { cartService } from "../../services/CartService";
import { Link } from "react-router-dom";
import "./ProductCard.css";

type ProductCardProps = {
    productId: string;
    productName: string;
    description: string;
    price: number;
    images: string[];
};

const ProductCard: React.FC<ProductCardProps> = ({
    productId,
    productName,
    description,
    price,
    images,
}) => {
    const [quantity, setQuantity] = useState(cartService.getQuantity(productId));

    const handleAddToCart = () => {
        cartService.addItem({
            productId,
            productName,
            description,
            price,
            quantity: 1,
            imageUrl: images[0]
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
                {/* TODO: Show all images instead of just one */}
                {images[0] && <img src={images[0]} alt={productName} />}
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
