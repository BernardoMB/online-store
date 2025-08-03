import './Welcome.css'
import bannerImg from '../../assets/welcome.png';
import { Box, Button, Container, Flex, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useColorModeValue } from '../ui/color-mode';

const Welcome: React.FC = () => {
    const navigate = useNavigate();

    const linearGradientColor = useColorModeValue('linear-gradient(#CBD5E0, #F7FAFC)', 'linear-gradient(#717171, #000000)');
    const linearGradientColor2 = useColorModeValue('linear-gradient(#F7FAFC, #CBD5E0)', 'linear-gradient(#000000, #717171)');

    return (
        <Container paddingInline={'2rem'} position={'relative'} maxWidth={'80rem'} width='100%' marginInline={'auto'}>
            <Container paddingBlock={'6rem'}>
                <HStack justifyContent={'space-between'}>
                    <Stack gap={'2rem'}>
                        <Stack gap={'1.5rem'}>
                            <Text as='h1' className='welcome-phrase'>Glow rings, made to be stared at</Text>
                            <Text as='p' className='welcome-phrase-2' color={'gray.700'}>Explore and find your unique style.</Text>
                        </Stack>
                        <HStack gap={'0.75rem'}>
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
                        </HStack>
                    </Stack>
                    <Image src={bannerImg} alt="Hue & Hoot Banner" height={'30rem'} marginRight={'6rem'}/>
                </HStack>
                <Box position={'absolute'} top={'0rem'} left={'0rem'} width={'100%'} pointerEvents={'none'} aria-hidden='true' role='presentation'>
                    {/* Left */}
                    <Box position={'absolute'} top={'0rem'} left={'0rem'} height={'7.125rem'} borderLeftWidth={'1px'} zIndex={1}></Box>
                    <Box position={'absolute'} top={'0rem'} left={'0rem'} height={'12rem'} width={'1px'} zIndex={2} bgImage={linearGradientColor} ></Box>
                    {/* Right */}
                    <Box position={'absolute'} top={'0rem'} right={'0rem'} height={'7.125rem'} borderLeftWidth={'1px'} zIndex={1}></Box>
                    <Box position={'absolute'} top={'0rem'} right={'0rem'} height={'12rem'} width={'1px'} zIndex={2} bgImage={linearGradientColor} ></Box>
                </Box>
                <Box position={'absolute'} bottom={'0rem'} left={'0rem'} width={'100%'} pointerEvents={'none'} aria-hidden='true' role='presentation'>
                    {/* Left */}
                    <Box position={'absolute'} bottom={'0rem'} left={'0rem'} height={'7.125rem'} borderLeftWidth={'1px'} zIndex={1}></Box>
                    <Box position={'absolute'} bottom={'0rem'} left={'0rem'} height={'12rem'} width={'1px'} zIndex={2} bgImage={linearGradientColor2} ></Box>
                    {/* Right */}
                    <Box position={'absolute'} bottom={'0rem'} right={'0rem'} height={'7.125rem'} borderLeftWidth={'1px'} zIndex={1}></Box>
                    <Box position={'absolute'} bottom={'0rem'} right={'0rem'} height={'12rem'} width={'1px'} zIndex={2} bgImage={linearGradientColor2} ></Box>
                </Box>
            </Container>
        </Container>
    );
};

export default Welcome;
