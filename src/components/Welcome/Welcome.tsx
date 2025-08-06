import './Welcome.css'
import { AspectRatio, Box, Button, Container, Flex, Grid, GridItem, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useColorModeValue } from '../ui/color-mode';
import HomePageSection from '../HomePageSection/HomePageSection';
import BeforeAfterSlider from '../BeforeAfterSlider/BeforeAfterSlider';

const Welcome: React.FC = () => {
    const navigate = useNavigate();
    const phraseColor = useColorModeValue('gray.500', 'gray.400');

    return (
        <HomePageSection>
            <Stack direction={{base: 'column', md: 'row'}} 
                flexDirection={{base: 'column', md: 'row-reverse'}} 
                gap={{md: '2rem'}}
                alignItems={{ md: 'center'}}
            >
                {/* Slider */}
                <Box flexGrow={{md: 1}} 
                    borderStartEndRadius={'4rem'} 
                    borderEndStartRadius={'4rem'} 
                    padding={'0.5rem'} 
                    borderWidth={'1px'} 
                    height={{ lg: '-webkit-fill-available'}}
                    marginBottom={{base: '1rem', sm: '1.rem', md: 'unset'}}
                >
                    <AspectRatio ratio={{ base: 4 / 3, sm: 3 / 2, md: 16 / 10, lg: 4 / 3 }} borderRadius={'inherit'}>
                        <BeforeAfterSlider
                            beforeSrc='/images/sliderBefore.jpg'
                            afterSrc='/images/sliderAfter.jpg'
                        >
                        </BeforeAfterSlider>
                    </AspectRatio>
                </Box>
                {/* Text and buttons */}
                <Stack gap={'2rem'} maxWidth={{md: '22rem', lg: '32rem'}} minWidth={{lg: '22rem'}}>
                    <Stack gap={'1.5rem'}>
                        <Text as='h1' 
                            alignSelf={{base: 'center', md: 'start'}}
                            fontSize={{base: '2rem', sm: '2rem', md: '2.5rem', lg: '3.75rem'}}
                            lineHeight={{base: '2.725rem', lg: '4.5rem'}}
                            textAlign={{base: 'center', md: 'start' }}
                            className='welcome-phrase'
                        >
                            Glow rings, made to be stared at
                        </Text>
                        <Text as='p' className='welcome-phrase-2' 
                            textAlign={{base: 'center', md: 'start'}}
                            fontSize={{base: '1rem', lg: 'var(--chakra-font-sizes-xl)'}}
                            color={phraseColor}
                        >
                            Explore and find your unique style.
                        </Text>
                    </Stack>
                    <Stack gap={'0.75rem'} direction={{base: 'column', lg: 'row'}}>
                        <Button onClick={() => navigate("/products")}
                            height={{ base: "3rem", lg: "4rem" }}
                            minWidth={{ base: "3rem", lg: "4rem" }}
                            fontSize={{ base: "1rem", lg: "1.125rem" }}
                            lineHeight={'1.55rem'}
                            lg={{ lineHeight: '1.75rem' }}
                            paddingInline={'1.25rem'}
                            gap={'0.625rem'}
                            className='btn btn-2'
                        >
                            Shop Products
                        </Button>
                        <Button onClick={() => navigate("/products")}
                            variant='outline'
                            height={{ base: "3rem", lg: "4rem" }}
                            minWidth={{ base: "3rem", lg: "4rem" }}
                            fontSize={{ base: "1rem", lg: "1.125rem" }}
                            lineHeight={'1.55rem'}
                            lg={{ lineHeight: '1.75rem' }}
                            paddingInline={'1.25rem'}
                            gap={'0.625rem'}
                        >
                            Other Products
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </HomePageSection>
    );
};

export default Welcome;
