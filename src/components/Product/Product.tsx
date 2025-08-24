import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsService } from "../../services/ProductsService";
import { cartService, groupByIdWithSizes } from "../../services/CartService";
import { Badge, Portal, Select } from "@chakra-ui/react";
import { ringSizes, type ProductCardProps } from "@/model/ProductModel";
import type { CartItem } from "@/model/CartModel";
import { IoTrashOutline } from "react-icons/io5";

function getSizesInCart(items: CartItem[], productId: string): number[] {
    const groups = groupByIdWithSizes(items);
    if (groups.length <= 0) {
        return [];
    }
    const productGroup = groups.find(x => x.product.productId === productId);
    if (!productGroup) {
        return [];
    }
    return productGroup.sizes;
}

const ProductPage: React.FC = () => {
    const { productId } = useParams();
    const [selectedSize, setSelectedSize] = useState<string | undefined>();
    const product = ProductsService.getProductById(productId!);
    const [quantity, setQuantity] = useState(cartService.getQuantityByProductId(productId!));
    const [sizes, setSizes] = useState(getSizesInCart(cartService.getItems(), productId!));

    if (!product) {
        return <div style={{ padding: "2rem" }}>Product not found.</div>;
    }

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('No size has been selected');
            return;
        }
        cartService.addItem({
            // productId: product.productId,
            // productName: product.productName,
            // description: product.description,
            // price: product.price,
            ...product,
            imageUrl: product.images[0], // TODO: Show all images instead of just showing the first element of the array of images
            quantity: 1,
            size: Number(selectedSize)
        });
        const newQuantity = cartService.getQuantityByProductId(product.productId);
        console.log('New quantity', newQuantity);
        setQuantity(newQuantity);
        setSizes(getSizesInCart(cartService.getItems(), productId!));
    };

    const handleRemoveAllFromCart = () => {
        cartService.removeItemAll(productId!);
        setQuantity(cartService.getQuantityByProductId(productId!));
        setSizes(getSizesInCart(cartService.getItems(), productId!));
    };

    const handleRemoveFromCartOnce = (size: number) => {
        cartService.removeItem(productId!, size);
        setQuantity(cartService.getQuantityByProductId(productId!));
        setSizes(getSizesInCart(cartService.getItems(), productId!));
    }

    useEffect(() => {
        const updateQuantity = () => setQuantity(cartService.getQuantityByProductId(productId!));
        cartService.subscribe(updateQuantity);
        updateQuantity();
        return () => {
            // Optionally remove listener if you implement unsubscribe
        };
    }, [productId]);

    useEffect(() => {
        const refresh = () => {
            setSizes(getSizesInCart(cartService.getItems(), productId!));
        };

        // Wrap cart mutators to trigger re-renders if needed
        const originalAdd = cartService.addItem.bind(cartService);
        const originalRemove = cartService.removeItem.bind(cartService);
        const originalRemoveAll = cartService.removeItemAll.bind(cartService);

        cartService.addItem = (...args) => {
            originalAdd(...args);
            refresh();
        };
        cartService.removeItem = (...args) => {
            originalRemove(...args);
            refresh();
        };
        cartService.removeItemAll = (...args) => {
            originalRemoveAll(...args);
            refresh();
        }

        return () => {
            cartService.addItem = originalAdd;
            cartService.removeItem = originalRemove;
            cartService.removeItemAll = originalRemoveAll;
        };
    }, []);

    return (
        <div style={{ padding: "2rem" }}>
            <h2>{product.productName}</h2>
            {/* TODO: Show all images instead of just showing the first element of the array of images */}
            {product.images[0] && <img src={product.images[0]} alt={product.productName} width="300" />}
            <p style={{ marginTop: "1rem" }}>{product.description}</p>
            <p style={{ fontWeight: "bold" }}>${product.price.toFixed(2)}</p>
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
                            {ringSizes.items.map((size: any) => (
                                <Select.Item key={size.value} item={size}>
                                    {size.label}
                                    <Select.ItemIndicator />
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Portal>
            </Select.Root>
            {quantity > 0 && <p>In Cart: {quantity}</p>}
            {sizes.map((size, index) => (
                <Badge
                    key={`${productId}-size-${index}`}
                    backgroundColor={'myBadgeBackgroundColor'}
                    color={'myBadgeColor'}
                    onClick={(e) => handleRemoveFromCartOnce(size)}
                >
                    {size}
                    <IoTrashOutline />
                </Badge>
            ))}
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={(e) => handleRemoveFromCartOnce(Number(selectedSize))}>Remove from Cart</button>
            <button onClick={handleRemoveAllFromCart}>Remove all from Cart</button>
        </div>
    );
};

export default ProductPage;
