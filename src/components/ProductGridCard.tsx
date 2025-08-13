import type { ProductCardProps } from "@/model/ProductModel";
import { AspectRatio, Image, Box, Stack, type BoxProps, type StackProps, Flex } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductGridCard: React.FC<ProductCardProps & BoxProps & StackProps> = ({
    productId,
    productName,
    description,
    price,
    images,
    ...props
}) => {
    return (
        <Flex {...props}>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                style={{ width: '1px', flexGrow: 1 }}
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
        </Flex>
    );
};

export default ProductGridCard;