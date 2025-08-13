import React from "react";
import { Center } from "@chakra-ui/react";
import Reviews from "./Reviews/Reviews";
import Welcome from "./Welcome/Welcome";
import InfiniteCarousel from "./InfiniteCarousel/InfiniteCarousel";
import IngredientsSection from "./IngredientsSection/IngredientsSection";
import Divider from "./Divider";
import FAQs from "./FAQs/FAQs";
import HomePageSection from "./HomePageSection/HomePageSection";
import Contact from "./Contact/Contact";
import Crystals from "./Crystals/Crystals";
import ClosedSection from "./ClosedSection";

const Home: React.FC = () => {
    return (
        <>
            <HomePageSection>
                <Welcome></Welcome>
            </HomePageSection>
            <Divider />
            <ClosedSection>
                <Center>
                    <h2>Welcome to Hue & Hoot—where every item tells a story, and every style has a soul.</h2>
                </Center>
            </ClosedSection>
            <Divider />
            <InfiniteCarousel></InfiniteCarousel>
            <Divider />
            <IngredientsSection></IngredientsSection>
            <Divider />
            <Crystals></Crystals>
            <Divider />
            <ClosedSection>
                <Center>
                    <h2>The Glow Speaks for Itself</h2>
                </Center>
            </ClosedSection>
            <Divider />
            <HomePageSection>
                <Reviews />
            </HomePageSection>
            <Divider />
            <ClosedSection background='unset' p='0'>
                <FAQs />
            </ClosedSection>
            <Divider />
            <HomePageSection>
                <Contact />
            </HomePageSection>
        </>
    );
};

export default Home;