import React from "react";
import { useNavigate } from "react-router-dom";
import Content from "./Content";
import { Box, Button, Center } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import AppSwiper from "./Swiper/Swiper";

const Home: React.FC = () => {
    const navigate = useNavigate();

    const welcomeMessageBackgroundColor = useColorModeValue('gray.200', 'gray.500');
    const welcomeMessageColor = useColorModeValue('gray.500', 'gray.200');

    return (
        <>
            <AppSwiper></AppSwiper>
            <Box background={welcomeMessageBackgroundColor} color={welcomeMessageColor} width="100%" padding="4" >
                <Center>
                    <h2>Welcome to Hue & Hoot—where every item tells a story, and every style has a soul.</h2>
                </Center>
            </Box>

            {/* Composed animation */}
            <Box data-state="open"
                _open={{
                    animationName: "fade-in, ease-in",
                    animationDuration: "5000ms",
                }}
                _closed={{
                    animationName: "fade-out, ease-out",
                    animationDuration: "5000ms",
                }}>
                <Content />
            </Box>

            <Center>
                <Button onClick={() => navigate("/products")}>
                    Shop Products
                </Button>
            </Center>
        </>
    );
};

export default Home