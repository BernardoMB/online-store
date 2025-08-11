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
            <Stack direction={{ base: 'column', md: 'row' }}
                flexDirection={{ base: 'column', md: 'row-reverse' }}
                gap={{ md: '2rem' }}
                alignItems={{ md: 'center' }}
            >
                {/* Slider */}
                <Box flexGrow={{ md: 1 }}
                    borderStartEndRadius={'4rem'}
                    borderEndStartRadius={'4rem'}
                    padding={'0.5rem'}
                    borderWidth={'1px'}
                    height={{ lg: '-webkit-fill-available' }}
                    marginBottom={{ base: '1rem', sm: '1.rem', md: 'unset' }}
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
                <Stack gap={'2rem'} maxWidth={{ md: '22rem', lg: '32rem' }} minWidth={{ lg: '22rem' }}>
                    <Stack gap={'1.5rem'}>
                        <Text as='h1'
                            alignSelf={{ base: 'center', md: 'start' }}
                            fontSize={{ base: '2rem', sm: '2rem', md: '2.5rem', lg: '3.75rem' }}
                            lineHeight={{ base: '2.725rem', lg: '4.5rem' }}
                            textAlign={{ base: 'center', md: 'start' }}
                            className='welcome-phrase'
                        >
                            Glow rings, made to be stared at
                        </Text>
                        <Text as='p' className='welcome-phrase-2'
                            textAlign={{ base: 'center', md: 'start' }}
                            fontSize={{ base: '1rem', lg: 'var(--chakra-font-sizes-xl)' }}
                            color={phraseColor}
                        >
                            Adorn your spirit with handcrafted rings that radiate healing energy, artistic beauty, and inner light
                        </Text>
                    </Stack>
                    <Stack gap={'0.75rem'} direction={{ base: 'column', lg: 'row' }}>
                        <Button onClick={() => navigate("/products")}
                            height={{ base: "3rem", lg: "4rem" }}
                            minWidth={{ base: "3rem", lg: "4rem" }}
                            fontSize={{ base: "1rem", md: "1.125rem" }}
                            fontWeight={500}
                            lineHeight={'1.55rem'}
                            md={{ lineHeight: '1.75rem' }}
                            paddingInline={'1.25rem'}
                            gap={'0.625rem'}
                            borderWidth={'0px'}
                            borderRadius={'0.125rem'}
                            backgroundImage="url('/images/welcome_button.avif')" // Path to your AVIF or PNG file
                            backgroundSize="100% 100%" // Stretch to fill width & height
                            backgroundRepeat="no-repeat"
                            backgroundPosition="center"
                             _dark={{ boxShadow: '0px 0px 10px 0px rgba(240, 255, 253, 0.9)' }}
                            _hover={{
                                opacity: 0.9,
                            }}
                        >
                            Shop Products
                        </Button>

                        {/* <Button onClick={() => navigate("/products")}
                            variant='outline'
                            height={{ base: "3rem", lg: "4rem" }}
                            minWidth={{ base: "3rem", lg: "4rem" }}
                            fontSize={{ base: "1rem", md: "1.125rem" }}
                            fontWeight={500}
                            lineHeight={'1.55rem'}
                            md={{ lineHeight: '1.75rem' }}
                            paddingInline={'1.25rem'}
                            borderRadius={'0.125rem'}
                            gap={'0.625rem'}
                        >
                            Other Products
                        </Button> */}

                        {/* Gradient Border Button */}
                        <Button
                            onClick={() => navigate("/products")}
                            variant='outline'
                            height={{ base: "3rem", lg: "4rem" }}
                            minWidth={{ base: "3rem", lg: "4rem" }}
                            fontSize={{ base: "1rem", md: "1.125rem" }}
                            fontWeight={500}
                            lineHeight="1.55rem"
                            px="1.25rem"
                            gap="0.625rem"
                            borderRadius="0.125rem"
                            border="2px solid transparent"
                            bgClip="padding-box"
                            position="relative"
                            background='none'
                            _before={{
                                content: '""',
                                position: "absolute",
                                inset: 0,
                                padding: "2px",
                                borderRadius: "0.125rem",
                                background:
                                    "linear-gradient(120deg, #f21976, #c73cc9, #a091ea, #75c2ed, #5bfbd2, #f4fe67ff, #ff6c1b)",
                                WebkitMask:
                                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                            _light={{_hover: {background: "gray.50"}}}
                            _dark={{_hover: {background: "gray.700"}}}
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
