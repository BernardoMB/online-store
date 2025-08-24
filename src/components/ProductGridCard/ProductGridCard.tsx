import { ringSizes, type ProductCardProps } from "@/model/ProductModel";
import { Box, Stack, Text, Button, type BoxProps, type StackProps, Select, Portal, Badge, Flex, Icon } from "@chakra-ui/react";
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductGridCardSwiper from "./ProductGridCardSwiper";
import { useEffect, useState } from "react";
import { cartService } from "@/services/CartService";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { IoMdStar } from "react-icons/io";

const ProductGridCard: React.FC<ProductCardProps & BoxProps & StackProps> = ({
    productId,
    productName,
    description,
    price,
    images,
    rating,
    ...props
}) => {
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState<string | undefined>();
    const [quantity, setQuantity] = useState(cartService.getQuantityByProductId(productId));

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('No size has been selected');
            return;
        }
        cartService.addItem({
            productId,
            productName,
            description,
            price,
            quantity: 1,
            imageUrl: images[0],
            size: Number(selectedSize)
        });
        const newQuantity = cartService.getQuantityByProductId(productId);
        console.log('New quantity', newQuantity);
        setQuantity(newQuantity);
    };

    useEffect(() => {
        const updateQuantity = () => setQuantity(cartService.getQuantityByProductId(productId));
        cartService.subscribe(updateQuantity);
        updateQuantity();
        return () => {
            // Optionally remove listener if you implement unsubscribe
        };
    }, [productId]);

    return (
        <Box display={'flex'}
            flexDirection={'column'}
            height={'100%'}
            cursor={'pointer'}
            onClick={() => navigate(`/product/${productId}`)}
            position={'relative'}
            {...props}
        >
            <Flex justifyContent={'end'}
                alignItems={'anchor-center'}
                position="absolute"
                zIndex={2}
                left="0.5rem"
                top="0.3rem"
            >
                <Icon
                    as={IoMdStar}
                    boxSize={5}
                    color={'yellow.400'}
                />
                &ensp;
                <Text>{rating}</Text>
            </Flex>
            {quantity > 0 && (
                <Badge
                    backgroundColor={'myBadgeBackgroundColor'}
                    color={'myBadgeColor'}
                    position="absolute"
                    zIndex={2}
                    right="0.5rem"
                    top="0.5rem"
                >
                    <PiShoppingCartSimpleDuotone />
                    {quantity}
                </Badge>
            )}
            <ProductGridCardSwiper productName={productName} images={images} />
            <Stack gap={'1rem'} flex={1} justifyContent={'space-between'} p="0.725rem">
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'start'} gap={'1rem'}>
                    <Stack gap={'0.5'}>
                        <Text as='h1' fontSize={'1.125rem'} fontWeight={600} lineHeight={'1.225rem'} lineClamp={2}>{productName}</Text>
                        <Text as='h1' fontSize={'0.825rem'} fontWeight={400} lineHeight={'1.125rem'} lineClamp={2} color={'myAppTextColor'}>{description}</Text>
                    </Stack>
                    <Box>
                        <Text>${price}</Text>
                    </Box>
                </Stack>
                <Stack gap={'0.725rem'}>
                    <Select.Root
                        onClick={(e) => e.stopPropagation()}
                        collection={ringSizes}
                        size="sm"
                        multiple={false}
                        onValueChange={(e) => setSelectedSize((e.value as string[])[0])}
                    >
                        <Select.HiddenSelect />
                        {/* <Select.Label>Ring Size</Select.Label> */}
                        <Select.Control>
                            <Select.Trigger>
                                <Select.ValueText placeholder="Select size" />
                            </Select.Trigger>
                            <Select.IndicatorGroup>
                                <Select.Indicator />
                            </Select.IndicatorGroup>
                        </Select.Control>
                        <Portal>
                            <Select.Positioner>
                                <Select.Content>
                                    {ringSizes.items.map((size) => (
                                        <Select.Item key={size.value} item={size}>
                                            {size.label}
                                            <Select.ItemIndicator />
                                        </Select.Item>
                                    ))}
                                </Select.Content>
                            </Select.Positioner>
                        </Portal>
                    </Select.Root>
                    <Button
                        variant={'outline'}
                        borderRadius="0.25rem"
                        flexShrink={0}
                        disabled={!selectedSize}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart();
                        }}
                    >
                        Add to cart
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};

export default ProductGridCard;