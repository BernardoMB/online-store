import React from "react";
import { useNavigate } from "react-router-dom";
import Content from "./Content";
import { Box } from "@chakra-ui/react";

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <h2>🏠 Welcome Home</h2>
            <Content />
            <button onClick={() => navigate("/products")}>
                Shop Products
            </button>
            <Box>Chakra box works!</Box>
        </>
    );
};

export default Home