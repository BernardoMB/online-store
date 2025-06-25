import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsService } from "../../services/ProductsService";
import { cartService } from "../../services/CartService";

const ProductPage: React.FC = () => {
    const { productId } = useParams();
    const [quantity, setQuantity] = useState(cartService.getQuantity(productId!));
    const product = ProductsService.getProductById(productId!);

    if (!product) {
        return <div style={{ padding: "2rem" }}>Product not found.</div>;
    }

    //#region Cart Interations
    const handleAddToCart = () => {
        cartService.addItem({
            productId: product.productId,
            productName: product.productName,
            description: product.description,
            price: product.price,
            quantity: 1,
            imageUrl: product.imageUrl
        });
        setQuantity(cartService.getQuantity(productId!));
    };

    const handleRemoveAllFromCart = () => {
        cartService.removeItemAll(productId!);
        setQuantity(cartService.getQuantity(productId!));
    };

    const handleRemoveFromCartOnce = () => {
        cartService.removeItem(productId!);
        setQuantity(cartService.getQuantity(productId!));
    }
    //#endregion

    return (
        <div style={{ padding: "2rem" }}>
            <h2>{product.productName}</h2>
            {product.imageUrl && <img src={product.imageUrl} alt={product.productName} width="300" />}
            <p style={{ marginTop: "1rem" }}>{product.description}</p>
            <p style={{ fontWeight: "bold" }}>${product.price.toFixed(2)}</p>
            {quantity > 0 && <p>In Cart: {quantity}</p>}
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleRemoveFromCartOnce}>Remove from Cart</button>
            <button onClick={handleRemoveAllFromCart}>Remove all from Cart</button>
        </div>
    );
};

export default ProductPage;
