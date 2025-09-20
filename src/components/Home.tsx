import React, { useEffect } from "react";
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
import { useLocation } from "react-router-dom";

const Home: React.FC = () => {
    //#region Hash navigation
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                // First scroll into view
                element.scrollIntoView({ behavior: 'smooth' });

                // Then adjust for sticky header after a short delay
                setTimeout(() => {
                    const headerHeight = (document.querySelector('#appHeader') as HTMLElement)?.offsetHeight || 0;
                    let offset = headerHeight + 96; // Adjust to match your header height
                    offset = 94;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = window.pageYOffset + elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                    });
                }, 300); // Delay to allow scrollIntoView to complete
            }
        }
    }, [hash]);

    //#endregion

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
            <section id="featured">
                <InfiniteCarousel></InfiniteCarousel>
            </section>
            <Divider />
            <section id="ingredients">
                <IngredientsSection></IngredientsSection>
            </section>
            <Divider />
            <section id="crystals">
                <Crystals></Crystals>
            </section>
            <Divider />
            <ClosedSection>
                <Center>
                    <h2>The Glow Speaks for Itself</h2>
                </Center>
            </ClosedSection>
            <Divider />
            <section id="testimonials">
                <HomePageSection>
                    <Reviews />
                </HomePageSection>
            </section>
            <Divider />
            <section id="faq">
                <ClosedSection background='unset' p='0'>
                    <FAQs />
                </ClosedSection>
            </section>
            <Divider />
            <section id="contact">
                <HomePageSection>
                    <Contact />
                </HomePageSection>
            </section>
        </>
    );
};

export default Home;