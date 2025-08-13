import type { ProductCardProps } from "@/model/ProductModel";
import { cartService } from "@/services/CartService";
import { Text, Box, Flex, Icon, Stack, Image, Button, AspectRatio } from "@chakra-ui/react";
import { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductCardSmall: React.FC<ProductCardProps> = ({
    productId,
    productName,
    description,
    price,
    images,
    ...props
}) => {
    const rating = 5; // TODO: rating needs to ba a property of the product and part of the product card props
    const navigate = useNavigate();
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
        <>
            <Stack gap='0.25rem'
                _light={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}
                _dark={{ borderWidth: '1px', borderColor: 'gray.700' }}
                p='0.575rem'
                position={'relative'}
                height={'100%'}
                width={'100%'}
                bg='myAppBackground2'
                borderRadius={'0.255rem'}
                {...props}
            >
                <Stack gap='0.25rem'>
                    <Flex justifyContent={'end'} alignItems={'anchor-center'}>
                        <Icon
                            as={IoMdStar}
                            boxSize={5}
                            color={'yellow.400'}
                        />
                        &ensp;
                        <Text>4.5</Text>
                    </Flex>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        style={{ width: '100%' }}
                    >
                        {images.map((src, i) => (
                            <SwiperSlide key={i}>
                                <AspectRatio ratio={16 / 10} borderRadius={'inherit'} width={'100%'}>
                                    <Image
                                        src={src}
                                        alt={productName}
                                        objectFit="cover"
                                    />
                                </AspectRatio>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Stack>
                <Stack gap={'1rem'} flex={1} justifyContent={'space-between'} marginTop={'0.255rem'}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'start'} gap={'1rem'}>
                        <Stack gap={'0.5'}>
                            <Text as='h1' fontSize={'1.125rem'} fontWeight={600} lineHeight={'1.225rem'} lineClamp={2}>{productName}</Text>
                            <Text as='h1' fontSize={'0.825rem'} fontWeight={400} lineHeight={'1.125rem'} lineClamp={2}>{description}</Text>
                        </Stack>
                        <Box>
                            <Text>${price}</Text>
                        </Box>
                    </Stack>
                    <Button colorScheme="teal" borderRadius={'0.25rem'} backgroundColor={'#948effff'} color={'white'} flexShrink={0}>Add to cart</Button>
                </Stack>
            </Stack>
        </>
    )
}

export default ProductCardSmall;