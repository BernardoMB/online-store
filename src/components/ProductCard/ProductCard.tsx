import React, { useEffect, useState } from "react";
import { cartService } from "../../services/CartService";
import { Link, useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { Badge, Box, Button, Flex, Stack, Text, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { ProductCardProps } from "@/model/ProductModel";

const ProductCard: React.FC<ProductCardProps> = ({
    productId,
    productName,
    description,
    price,
    images,
}) => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(cartService.getQuantity(productId));

    const handleAddToCart = () => {
        cartService.addItem({
            productId,
            productName,
            description,
            price,
            quantity: 1,
            imageUrl: images[0],
            size: 7 // TODO: Make this dynamic
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
        // <Link to={`/product/${productId}`} style={{ textDecoration: "none", color: "inherit" }}>
        //     <div className="product-card">
        //         {/* TODO: Show all images instead of just one */}
        //         {images[0] && <img src={images[0]} alt={productName} />}
        //         <h3>{productName}</h3>
        //         <p>${price.toFixed(2)}</p>
        //         {quantity > 0 && <p>In Cart: {quantity}</p>}
        //         <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleAddToCart(); }}>
        //             Add to Cart
        //         </button>
        //         <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleRemoveAllFromCart(); }}>
        //             Remove all from Cart
        //         </button>
        //         <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleRemoveFromCartOnce(); }}>
        //             Remove from Cart
        //         </button>
        //     </div>
        // </Link>

        <Box
            w="300px"
            borderWidth="1px"
            borderRadius="2xl"
            overflow="hidden"
            bg="white"
            shadow="md"
            cursor="pointer"
            _hover={{ shadow: "xl", transform: "scale(1.02)" }}
            transition="all 0.2s ease"
            onClick={() => navigate(`/product/${productId}`)}
        >
            {/* Image Swiper */}
            <Box position="relative" onClick={(e) => e.stopPropagation()}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    style={{ width: "100%", height: "220px" }}
                >
                    {images.map((src, i) => (
                        <SwiperSlide key={i}>
                            <Image
                                src={src}
                                alt={productName}
                                w="100%"
                                h="220px"
                                objectFit="cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>

            {/* Product Info */}
            <Box p={4}>
                <Stack direction='row'>
                    <Text fontSize="lg" fontWeight="bold">
                        {productName}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                        {description}
                    </Text>
                    <Text fontSize="xl" fontWeight="bold" color="pink.500">
                        ${price}
                    </Text>
                </Stack>

                {/* Cart Count */}
                {quantity > 0 && (
                    <Badge mt={2} colorScheme="pink" fontSize="0.8em">
                        In Cart: {quantity}
                    </Badge>
                )}

                {/* Action Buttons */}
                <Flex mt={4} gap={2} onClick={(e) => e.stopPropagation()}>
                    <Button colorScheme="pink" flex="1" onClick={handleAddToCart}>
                        Add
                    </Button>
                    <Button colorScheme="yellow" flex="1" onClick={handleRemoveFromCartOnce}>
                        Remove One
                    </Button>
                    <Button colorScheme="red" flex="1" onClick={handleRemoveAllFromCart}>
                        Clear
                    </Button>
                </Flex>
            </Box>
        </Box>
    );
};

export default ProductCard;
