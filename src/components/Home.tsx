import React from "react";
import { useNavigate } from "react-router-dom";
import Content from "./Content";

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <h2>🏠 Welcome Home</h2>
            <Content />
            <button onClick={() => navigate("/products")}>
                Shop Products
            </button>
        </>
    );
};

export default Home