import React from "react";
import { useNavigate } from "react-router-dom";
import Content from "./Content";
import { Box, Button, Center, Container } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import Reviews from "./Reviews/Reviews";
import Welcome from "./Welcome/Welcome";
import InfiniteCarousel from "./InfiniteCarousel/InfiniteCarousel";
import IngredientsSection from "./IngredientsSection/IngredientsSection";
import Divider from "./Divider";
import FAQs from "./FAQs/FAQs";
import HomePageSection from "./HomePageSection/HomePageSection";
import Contact from "./Contact/Contact";
import Crystals from "./Crystals/Crystals";

const Home: React.FC = () => {
    const navigate = useNavigate();

    const welcomeMessageBackgroundColor = useColorModeValue('white', '#222221');
    const welcomeMessageColor = useColorModeValue('gray.500', 'gray.200');

    return (
        <>
            <Welcome></Welcome>
            <Divider />
            <Container position={'relative'} paddingInline={{ base: '0.5rem', sm: '1rem', md: '1.5rem', lg: '2rem' }} maxWidth={'80rem'} width={'100%'} marginInline={'auto'}>
                <Box background={welcomeMessageBackgroundColor} color={welcomeMessageColor} width="100%" padding="4" borderInlineWidth={'1px'}>
                    <Center>
                        <h2>Welcome to Hue & Hoot—where every item tells a story, and every style has a soul.</h2>
                    </Center>
                </Box>
            </Container>
            <Divider />
            <InfiniteCarousel></InfiniteCarousel>
            <Divider />
            <IngredientsSection></IngredientsSection>
            <Divider />
            <Crystals></Crystals>
            <Divider />
            <Container position={'relative'} paddingInline={{ base: '0.5rem', sm: '1rem', md: '1.5rem', lg: '2rem' }} maxWidth={'80rem'} width={'100%'} marginInline={'auto'}>
                <Box background={welcomeMessageBackgroundColor} color={welcomeMessageColor} width="100%" padding="4" borderInlineWidth={'1px'}>
                    <Center>
                        <h2>The Glow Speaks for Itself</h2>
                    </Center>
                </Box>
            </Container>
            <Divider />
            <HomePageSection>
                <Reviews />
            </HomePageSection>
            <Divider />
            <Container position={'relative'} paddingInline={{ base: '0.5rem', sm: '1rem', md: '1.5rem', lg: '2rem' }} maxWidth={'80rem'} width={'100%'} marginInline={'auto'}>
                <Box width="100%" borderInlineWidth={'1px'}>
                    <FAQs />
                </Box>
            </Container>
            <Divider />
            <HomePageSection>
                <Contact />
            </HomePageSection>
        </>
    );
};

export default Home;