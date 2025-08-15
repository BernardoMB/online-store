import { ringSizes, type ProductCardProps } from "@/model/ProductModel";
import { Box, Stack, Text, Button, type BoxProps, type StackProps, createListCollection, Select, Portal, Spacer } from "@chakra-ui/react";
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductGridCardSwiper from "./ProductGridCardSwiper";
import { useEffect, useState } from "react";
import { cartService } from "@/services/CartService";

const ProductGridCard: React.FC<ProductCardProps & BoxProps & StackProps> = ({
    productId,
    productName,
    description,
    price,
    images,
    ...props
}) => {
    const getInitialQuantity = () => {
        const total = cartService.getQuantity(productId);
        if (productId === '1') {
            console.log('Initial quantity', total);
        }
        return total;
    };
    const [selectedSize, setSelectedSize] = useState<string | undefined>();
    const [quantity, setQuantity] = useState(getInitialQuantity());

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
        const newQuantity = cartService.getQuantity(productId);
        console.log('New quantity', newQuantity);
        setQuantity(newQuantity);
    };

    useEffect(() => {
        const quantity = cartService.getQuantity(productId);
        setQuantity(quantity);
      }, []);

    return (
        <>
            <ProductGridCardSwiper productName={productName} images={images} {...props}></ProductGridCardSwiper>
            <Stack gap={'1rem'} flex={1} justifyContent={'space-between'} p="0.725rem">
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'start'} gap={'1rem'}>
                    <Stack gap={'0.5'}>
                        <Text as='h1' fontSize={'1.125rem'} fontWeight={600} lineHeight={'1.225rem'} lineClamp={2}>{productName}</Text>
                        <Text as='h1' fontSize={'0.825rem'} fontWeight={400} lineHeight={'1.125rem'} lineClamp={2} color={'myAppTextColor'}>{description}</Text>
                    </Stack>
                    <Stack gap={'0.5'}>
                        <Box>
                            <Text>${price}</Text>
                        </Box>
                        {quantity}
                    </Stack>
                </Stack>
                <Stack gap={'0.725rem'}>
                    <Select.Root
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
                    {/* 🛒 Add to Cart Button */}
                    <Button
                        variant={'outline'}
                        borderRadius="0.25rem"
                        //backgroundColor="#948effff"
                        flexShrink={0}
                        disabled={!selectedSize}
                        onClick={handleAddToCart}
                    >
                        Add to cart
                    </Button>
                </Stack>
            </Stack>
        </>
    );
};

export default ProductGridCard;