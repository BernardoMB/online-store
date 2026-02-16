import type { CheckoutCardItem } from "@/model/CheckoutModel"
import { AspectRatio, Box, Text, Image, Stack, Badge, Button, Bleed } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import { cartService } from "@/services/CartService";
import Divider from "./Divider";

interface CheckoutItemCardProps {
    card: CheckoutCardItem;
    onRemove: (productId: string, size: number) => void;
    onRemoveAll: (productId: string) => void;
}

const CheckoutItemCard: React.FC<CheckoutItemCardProps> = ({ card, onRemove, onRemoveAll }) => {
    const navigate = useNavigate();

    const handleRemoveFromCartOnce = (e: any, size: number) => {
        e.stopPropagation();
        onRemove(card.product.productId, size);
    }
    
    const handleRemoveAllFromCart = (e: any) => {
        e.stopPropagation();
        onRemoveAll(card.product.productId);
    }

    return (
        <Box
            key={card.product.productId}
            borderBottomWidth={'1px'}
            onClick={() => navigate(`/product/${card.product.productId}`)}
            cursor={'pointer'}
        >
            <Stack gap={0}>
                <Divider />
                <Stack direction={'row'} gap={0}>
                    <AspectRatio 
                        ratio={16 / 10} 
                        borderRadius={'inherit'} 
                        width={'40%'} 
                        minWidth={'110px'}
                        borderRightWidth={'1px'}
                    >
                        <Image
                            src={card.product.imageUrl}
                            alt={card.product.productName}
                            objectFit="cover"
                        />
                    </AspectRatio>
                    <Stack width={'60%'} gap={0}>
                        <Stack gap={0}>
                            <Text fontWeight={'bold'} paddingInline={'0.5rem'}>{card.product.productName}</Text>
                            <Divider />
                        </Stack>
                        <Stack paddingInline={'0.5rem'}>
                            <Text>Unit Price: ${card.product.price.toFixed(2)}</Text>
                            <Text>Quantity: {card.sizes.length}</Text>
                            <Stack direction={'row'}>
                                <Text>Sizes:</Text>
                                <Stack direction={'row'} flexWrap={'wrap'}>
                                    {card.sizes.map((size, index) => (
                                        <Badge
                                            key={`${card.product.productId}-size-${index}`}
                                            backgroundColor={'myBadgeBackgroundColor'}
                                            color={'myBadgeColor'}
                                            onClick={(e) => handleRemoveFromCartOnce(e, size)}
                                            _hover={{ cursor: 'pointer', opacity: 0.8 }}
                                        >
                                            {size}
                                            <IoTrashOutline />
                                        </Badge>
                                    ))}
                                </Stack>
                            </Stack>
                            <Text>Total: ${(card.product.price * card.product.quantity).toFixed(2)}</Text>
                        </Stack>
                    </Stack>
                </Stack>
                <Divider />
                <Button 
                    variant={'ghost'} 
                    onClick={(e) => handleRemoveAllFromCart(e)} 
                    width={'100%'} 
                >
                    Remove All
                </Button>
            </Stack>
        </Box>
    )
}

export default CheckoutItemCard;