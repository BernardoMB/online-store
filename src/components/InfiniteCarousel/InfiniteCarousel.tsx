import { Box, ClientOnly, Container, Flex, Grid, Stack, Text, VStack } from '@chakra-ui/react';
import './InfiniteCarousel.css'
import { useColorModeValue } from '../ui/color-mode';
import Marquee from "react-fast-marquee";
import { useEffect, useState } from 'react';
import type { Product } from '@/model/ProductModel';
import { ProductsService } from '@/services/ProductsService';
import ProductGridCard from '../ProductGridCard/ProductGridCard';

const InfiniteCarousel: React.FC = () => {
    const patternImg = useColorModeValue('pattern_light.svg', 'pattern_dark.svg');

    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

    useEffect(() => {
        const featuredProducts = ProductsService.getFeaturedProducts();
        setFeaturedProducts(featuredProducts);
    }, []);

    const cardBackgroundColor = useColorModeValue('white', '#191918');
    const textColor = useColorModeValue('gray.500', 'gray.200');

    return (
        <>
            <Container position={'relative'}
                paddingInline={{ base: '0.5rem', sm: '1rem', md: '1.5rem', lg: '2rem' }}
                maxWidth={'80rem'} width={'100%'} marginInline={'auto'}
            >
                <Container as="section"
                    backgroundImage={`url(/images/${patternImg})`}
                    borderInlineWidth={'1px'}
                    paddingInline={'0rem'}
                    paddingBlock={'2rem'}
                    overflow={'hidden'}
                >
                    <VStack gap={'1rem'}>
                        <Text as='h2' fontSize={'1.125rem'} lineHeight={'1.75rem'} fontWeight={500}>Featured Products</Text>
                        <ClientOnly>
                            <Marquee style={{ overflow: 'hidden' }} speed={20}>
                            {/* <div className="slider">
                                <div className="slide-track"> */}
                            {/* <div className="slide">
                                        <img src="/images/ring1.png" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src="/images/ring1.png" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src="/images/ring1.png" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src="/images/ring1.png" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src="/images/ring1.png" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src="/images/ring1.png" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src="/images/ring1.png" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src="/images/ring1.png" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src="/images/ring1.png" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src="/images/ring1.png" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src="/images/ring1.png" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src="/images/ring1.png" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src="/images/ring1.png" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src="/images/ring1.png" alt="" />
                                    </div> */}

                            <Flex height={'100%'} alignItems={'stretch'}>
                                {featuredProducts.map((featuredProduct: Product, index) => (
                                    <Box width={'16rem'}
                                        height={'--webkit-fill-available'} 
                                        key={featuredProduct.productId + index}
                                        borderWidth={'1px'}
                                        color={textColor}
                                        marginRight={'1.5rem'}
                                    >
                                        <ProductGridCard
                                            productId={featuredProduct.productId}
                                            productName={featuredProduct.productName}
                                            description={featuredProduct.description}
                                            price={featuredProduct.price}
                                            images={featuredProduct.images}
                                            rating={featuredProduct.rating}
                                            backgroundColor={cardBackgroundColor}
                                        />
                                    </Box>
                                ))}
                            </Flex>

                            {/* </div>
                            </div> */}
                            </Marquee>
                        </ClientOnly>
                    </VStack>
                </Container>
            </Container>
        </>
    );
};

export default InfiniteCarousel;