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
            <Box
                data-state="open"
                _open={{
                    animationName: "fade-in, ease-in",
                    animationDuration: "5000ms",
                }}
                _closed={{
                    animationName: "fade-out, ease-out",
                    animationDuration: "5000ms",
                }}
            >
                This is a composed animation
            </Box>
        </>
    );
};

export default Home