import { Container, Stack, Text, VStack } from '@chakra-ui/react';
import './InfiniteCarousel.css'
import { useColorModeValue } from '../ui/color-mode';

const InfiniteCarousel: React.FC = () => {
    const patternImg = useColorModeValue('pattern_light.svg', 'pattern_dark.svg');

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
                        <Text as='h2' fontSize={'1.125rem'} lineHeight={'1.75 rem'} fontWeight={700}>Featured Products</Text>
                        <div className="slider">
                            <div className="slide-track">
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
                                </div>
                                <div className="slide">
                                    <img src="/images/ring1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </VStack>
                </Container>
            </Container>
        </>
    );
};

export default InfiniteCarousel;
