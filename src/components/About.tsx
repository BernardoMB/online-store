import React from "react";
import HomePageSection from "./HomePageSection/HomePageSection";
import { Grid, Stack, Text, Image, Box, Link, AspectRatio } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import Divider from "./Divider";

const About: React.FC = () => {
    const msgColor = useColorModeValue('gray.700', '#c0beb9');

    return (
        <>
            <HomePageSection>
                <Grid gap={{ base: '2rem', md: '4rem' }} gridTemplateColumns={{ base: 'repeat(1, minmax(0, 1fr))', md: 'repeat(2, minmax(0px, 1fr))' }}>
                    <Stack gap={4}>
                        <Text fontSize={'0.875rem'} lineHeight={'1.25rem'} textTransform={'uppercase'} letterSpacing={'0.1em'} fontWeight="medium" color="myAccentColor" >About Us</Text>
                        <Text fontSize={'1.875rem'} lineHeight={'2.375rem'} whiteSpace={'pre-line'} textWrap={'balance'} fontWeight={600}>Our mission — Craf glow rings that heal, mesmerize, and beautify.</Text>
                        <Text color={msgColor}>
                            Hue & Hoot began with a simple idea: that delightful design should feel personal, playful, and polished.
                        </Text>
                        <Text color={msgColor}>
                            Born from late-night sketches and early-morning code—Hue & Hoot is built for the curious, creative, and impeccably styled.
                        </Text>
                    </Stack>

                    <Box flexGrow={{ md: 1 }}
                        borderStartEndRadius={'4rem'}
                        borderEndStartRadius={'4rem'}
                        padding={'0.5rem'}
                        borderWidth={'1px'}
                        height={{ lg: '-webkit-fill-available' }}
                        marginBottom={{ base: '1rem', sm: '1.rem', md: 'unset' }}
                    >
                        <AspectRatio ratio={{ base: 4 / 3, sm: 3 / 2, md: 16 / 10, lg: 4 / 3 }} borderRadius={'inherit'}>
                            <Image
                                src={'/images/About/ring.jpg'}
                                alt={'store front image'}
                                objectFit="cover"
                                w="100%"
                                h="100%"
                                borderRadius={'inherit'}
                            />
                        </AspectRatio>
                    </Box>
                </Grid>
            </HomePageSection>
            <Divider></Divider>
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
                            I’m Bernardo Mondragon, the heart behind this glowing venture. What began as a hobby and a humble idea to support my family has blossomed into a creative sanctuary—each ring a luminous piece of wearable art, shaped by hand and guided by care.
                        </Text>
                        <Text as="p">
                            Inspired by my lifelong fascination with owls—symbols of wisdom, mystery, and quiet strength—Hue and Hoot reflects a blend of radiant color and soulful design. Every item in the shop is made in-house, crafted slowly and deliberately, with an eye for detail and a touch of enchantment.
                        </Text>
                        <Text as="p">
                            This is just the beginning. New designs and features are on the horizon, each one carrying a bit more light, a bit more story.
                        </Text>
                        {/* <Text as="p">
                            These efforts are dedicated to my fiance Kiki and her children, Dustyn and Jaylin. They are my life and I thank them for being part of this journey.
                        </Text> */}
                    </Stack>
                </Grid>
            </HomePageSection>
            <Divider></Divider>
            <HomePageSection>
                <Stack gap={8}>
                    <Stack gap={4}>
                        <Text fontSize={'0.875rem'} lineHeight={'1.25rem'} textTransform={'uppercase'} letterSpacing={'0.1em'} fontWeight="bold" color="myAccentColor" >Our Team</Text>
                        <Text fontSize={'1.875rem'} lineHeight={'2.375rem'} whiteSpace={'pre-line'} textWrap={'balance'} fontWeight={600}>Meet The One Man Army</Text>
                        <Text color={msgColor}>
                            From the first stone and a "Hello World!", to the final polish and executive decisions, every piece is a labor of love, crafted by me, Bernardo Mondragon. I pour my heart into each design, ensuring that every ring is not just a product, but a story waiting to be worn.
                        </Text>
                    </Stack>
                    <Grid gap={4}>
                        <Link href="https://bernardomondragon.net" _hover={{ textDecoration: "none" }} target={'_blank'}>
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                gap={3}
                                borderWidth={'1px'}
                                padding={'8px'}
                                paddingBottom={'16px'}
                                width={256}
                            >
                                <Image
                                    src={'/images/About/CoFounderAndCEO.png'}
                                    alt={'creator image'}
                                    objectFit="cover"
                                    w="100%"
                                    h="auto"
                                />
                                <Stack>
                                    <Text fontWeight={600}>Bernardo Mondragon Brozon</Text>
                                    <Text color={msgColor}>Co-Founder & CEO</Text>
                                </Stack>
                            </Box>
                        </Link>
                    </Grid>
                </Stack>
            </HomePageSection>
        </>
    );
};

export default About;


