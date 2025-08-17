import React from "react";
import HomePageSection from "./HomePageSection/HomePageSection";
import { Grid, Stack, Text, Image, Box } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";

const teamMembers = [
  {
    name: "Maximilian Roskosch",
    role: "Co-Founder & CEO",
    image:
      "https://cms.hellobonnie.de/api/avatars/file/max-356x356.webp",
  },
  {
    name: "Niklas Klein",
    role: "Co-Founder & CPO",
    image:
      "https://cms.hellobonnie.de/api/avatars/file/niklas-356x356.jpg",
  },
  {
    name: "Christian Schröter",
    role: "Principal Software Engineer",
    image:
      "https://cms.hellobonnie.de/api/avatars/file/Profilbild-356x356.jpg",
  },
  {
    name: "Zora Wolbert",
    role: "Working Student",
    image:
      "https://cms.hellobonnie.de/api/avatars/file/zora-356x356.webp",
  },
  {
    name: "Amarachi Ugochukwu",
    role: "Working Student",
    image:
      "https://cms.hellobonnie.de/api/avatars/file/amara-356x356.webp",
  },
];

const About: React.FC = () => {
    const msgColor = useColorModeValue('gray.700', '#c0beb9');

    return (
        <>
            <HomePageSection>
                <Grid gap={{ base: '2rem', md: '4rem' }} gridTemplateColumns={{ base: 'repeat(1, minmax(0, 1fr))', md: 'repeat(2, minmax(0px, 1fr))' }}>
                    <Stack gap={4}>
                        <Text fontSize={'0.875rem'} lineHeight={'1.25rem'} textTransform={'uppercase'} letterSpacing={'0.1em'} fontWeight="bold" color="myAccentColor" >About Us</Text>
                        <Text fontSize={'1.875rem'} lineHeight={'2.375rem'} whiteSpace={'pre-line'} textWrap={'balance'} fontWeight={600}>Our mission - Craf glow rings that heal, mesmerize, and beautify.</Text>
                        <Text color={msgColor}>
                            Hue & Hoot began with a simple idea: that delightful design should feel personal, playful, and polished.
                        </Text>
                        <Text color={msgColor}>
                            Born from late-night sketches and early-morning code—Hue & Hoot is built for the curious, creative, and impeccably styled.
                        </Text>
                    </Stack>
                </Grid>
            </HomePageSection>
            <HomePageSection>
                <Grid gap={{ base: '2rem', md: '4rem' }} gridTemplateColumns={{ base: 'repeat(1, minmax(0, 1fr))', md: 'repeat(2, minmax(0px, 1fr))' }}>
                    <Stack gap={4}>
                        <Text fontSize={'0.875rem'} lineHeight={'1.25rem'} textTransform={'uppercase'} letterSpacing={'0.1em'} fontWeight="bold" color={msgColor}>Our Story</Text>
                        <Text fontSize={'1.875rem'} lineHeight={'2.375rem'} whiteSpace={'pre-line'} textWrap={'balance'} fontWeight={600}>How It All Began</Text>
                    </Stack>
                    <Stack color={msgColor} gap={4}>
                        <Text as="p">
                            Welcome to Hue and Hoot, a small but spirited shop nestled in Hershey, Pennsylvania, where handcrafted glow rings come to life with quiet magic and intention.
                        </Text>
                        <Text as="p">
                            I’m Bernardo Mondragon, the heart behind this growing venture. What began as a humble idea to support my family has blossomed into a creative sanctuary—each ring a luminous piece of wearable art, shaped by hand and guided by care.
                        </Text>
                        <Text as="p">
                            Inspired by my lifelong fascination with owls—symbols of wisdom, mystery, and quiet strength—Hue and Hoot reflects a blend of radiant color and soulful design. Every item in the shop is made in-house, crafted slowly and deliberately, with an eye for detail and a touch of enchantment.
                        </Text>
                        <Text as="p">
                            This is just the beginning. New designs and features are on the horizon, each one carrying a bit more light, a bit more story. Thank you for being part of this journey.
                        </Text>
                    </Stack>
                </Grid>
            </HomePageSection>
            <HomePageSection>
                <Stack gap={8}>
<Stack gap={8}>
<Text fontSize={'0.875rem'} lineHeight={'1.25rem'} textTransform={'uppercase'} letterSpacing={'0.1em'} fontWeight="bold" color="myAccentColor" >Our </Text>
                        <Text fontSize={'1.875rem'} lineHeight={'2.375rem'} whiteSpace={'pre-line'} textWrap={'balance'} fontWeight={600}>Our mission - Craf glow rings that heal, mesmerize, and beautify.</Text>
                        <Text color={msgColor}>
                            Hue & Hoot began with a simple idea: that delightful design should feel personal, playful, and polished.
                        </Text>
</Stack>
                </Stack>
            </HomePageSection>
        </>
    );
};

export default About;


