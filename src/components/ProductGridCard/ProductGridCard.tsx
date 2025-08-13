import type { ProductCardProps } from "@/model/ProductModel";
import { AspectRatio, Image, Box, Stack, type BoxProps, type StackProps, Flex } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import ProductGridCardSwiper from "./ProductGridCardSwiper";

const ProductGridCard: React.FC<ProductCardProps & BoxProps & StackProps> = ({
    productId,
    productName,
    description,
    price,
    images,
    ...props
}) => {
    return (
        <>
            <ProductGridCardSwiper productName={productName} images={images} {...props}></ProductGridCardSwiper>
            <Stack>
                {productName}
            </Stack>
        </>
    );
};

export default ProductGridCard;