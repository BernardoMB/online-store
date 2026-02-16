import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { cartService } from "../../services/CartService";
import { Button, Center, Stack, Text } from "@chakra-ui/react";
import ClosedSection from "../ClosedSection";
import HomePageSection from "../HomePageSection/HomePageSection";

const Success: React.FC = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        cartService.empty();
    }, []);

    return <>
        <HomePageSection>
            <Center minHeight={'420px'}>
            <Stack direction={'column'} gap={16}>
                <Text>
                    Your order has been placed successfully.
                </Text>    
                <Button
                    variant={'outline'}
                    borderRadius="0.25rem"
                    flexShrink={0}
                    onClick={(e) => {
                        navigate("/products")
                    }}
                >
                    Continue Shopping
                </Button>
            </Stack>
            </Center>
        </HomePageSection>
    </>
};

export default Success;