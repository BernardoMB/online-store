import './Welcome.css'
import bannerImg from '../../assets/welcome.png';
import { Box, Button, Container, Flex, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useColorModeValue } from '../ui/color-mode';
import HomePageSection from '../HomePageSection/HomePageSection';

const Welcome: React.FC = () => {
    const navigate = useNavigate();

    return (
        <HomePageSection>
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
        </HomePageSection>
    );
};

export default Welcome;
