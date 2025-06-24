import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { cartService } from "../../services/CartService";

const Success: React.FC = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        cartService.empty();
    }, []);

    return <>
        <h1>Thank you for your purchase!</h1>
        <button onClick={() => navigate("/products")}>
            Continue Shopping
        </button>
    </>
};

export default Success;