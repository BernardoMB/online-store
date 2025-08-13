import { AspectRatio, Image, Box, type BoxProps, type StackProps, Flex, Button } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import './ProductGridCardSwiper.css';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Divider from "../Divider";

const ProductGridCardSwiper: React.FC<{ productName: string, images: string[] } & BoxProps & StackProps> = ({
    productName,
    images,
    ...props
}) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const paginationRef = useRef(null);
    const swiperRef = useRef(null);
    return (
        <>
            <Flex {...props}>
                <Swiper
                    ref={swiperRef}
                    className="grid-card-swiper"
                    modules={[Navigation, Pagination]}
                    // navigation
                    pagination={{
                        clickable: true,
                        type: 'fraction'
                    }}
                    onSwiper={(swiper: any) => {
                        setTimeout(() => {
                            if (swiper && swiper.params && swiper.navigation && swiper.pagination) {
                                (swiper.params.navigation as any).prevEl = prevRef.current;
                                (swiper.params.navigation as any).nextEl = nextRef.current;
                                (swiper.params.pagination as any).el = paginationRef.current;
                                swiperRef.current = swiper;
                                swiper.navigation.init();
                                swiper.navigation.update();
                                swiper.pagination.init();
                                swiper.pagination.render();
                                swiper.pagination.update();
                            }
                        }, 0);
                    }}
                    style={{
                        width: '1px', flexGrow: 1,
                    }}
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
            <Flex>
                <Button onClick={() => (swiperRef.current as any).slidePrev()} variant={'ghost'}>
                    <BsChevronLeft />
                </Button>
                {/* <button ref={prevRef}>Prev</button> */}
                <Box borderInlineWidth={'1px'} flex={1} display={'flex'} alignItems={'center'}>
                    <div ref={paginationRef} style={{ textAlign: "center" }} />
                    {/* {(swiperRef.current as any)?.realIndex + 1 + ' of ' + images.length} */}
                </Box>
                {/* <button ref={nextRef}>Next</button> */}
                <Button onClick={() => (swiperRef.current as any).slideNext()} variant={'ghost'}>
                    <BsChevronRight />
                </Button>
            </Flex>
            <Divider></Divider>
        </>
    );
};

export default ProductGridCardSwiper;