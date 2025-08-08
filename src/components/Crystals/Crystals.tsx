import { Bleed, Box, Container, Grid, GridItem, Icon, Stack, Text } from "@chakra-ui/react";
import { GiCrystalBall } from "react-icons/gi";
import { useColorModeValue } from "../ui/color-mode";
import { GiCrystalShine } from "react-icons/gi";
import { GiElectric } from "react-icons/gi";
import Marquee from "react-fast-marquee";

const Crystals: React.FC = () => {
    const iconColor = useColorModeValue('gray.900', 'gray.100');
    const patternImg = useColorModeValue('pattern_light.svg', 'pattern_dark.svg');

    return (
        <Container paddingInline={'2rem'} position={'relative'} maxWidth={'80rem'} width={'100%'} marginInline={'auto'}>
            <Container paddingBlock={'6rem'} paddingInline={'0rem'} position={'relative'} borderInlineWidth={'1px'}>
                <Grid gridTemplateColumns={'repeat(2, minmax(0, 1fr))'}>
                    <GridItem>
                        <Box borderBlockWidth={'1px'} borderRightWidth={'1px'} height={'100%'}>
                            <Stack padding={'2rem'} gap={'1rem'} alignItems={'start'}>
                                <Text as='h2' fontSize={'1.875rem'} lineHeight={'2.375rem'}>The art of energetic healing</Text>
                                <Text as='p' fontSize={'1.125rem'} lineHeight={'1.75rem'} whiteSpace={'pre-line'} color={'myAppTextColor'}>These rings are made from a variety of healing crystals such as amethyst, quartz, pyrite, jasper, and others.</Text>
                            </Stack>
                            <Stack gap={'2rem'}>
                                <Bleed>
                                    <Container as="section"
                                        backgroundImage={`url(/images/${patternImg})`}
                                        paddingInline={'0rem'}
                                        paddingBlock={'2rem'}
                                        overflow={'hidden'}
                                    >
                                        <Box>
                                            <Marquee speed={20}>
                                                <img src="/images/crystals/1.png" alt="" style={{height: '120px', marginRight: '40px'}}/>
                                                <img src="/images/crystals/2.png" alt="" style={{height: '120px', marginRight: '40px'}}/>
                                                <img src="/images/crystals/3.png" alt="" style={{height: '120px', marginRight: '40px'}}/>
                                                <img src="/images/crystals/4.png" alt="" style={{height: '120px', marginRight: '40px'}}/>
                                                <img src="/images/crystals/5.png" alt="" style={{height: '120px', marginRight: '40px'}}/>
                                                <img src="/images/crystals/6.png" alt="" style={{height: '120px', marginRight: '40px'}}/>
                                                <img src="/images/crystals/7.png" alt="" style={{height: '120px', marginRight: '40px'}}/>
                                                <img src="/images/crystals/8.png" alt="" style={{height: '120px', marginRight: '40px'}}/>
                                            </Marquee>
                                        </Box>
                                    </Container>
                                </Bleed>
                                <Bleed>
                                    <Container as="section"
                                        backgroundImage={`url(/images/${patternImg})`}
                                        paddingInline={'0rem'}
                                        paddingBlock={'2rem'}
                                        overflow={'hidden'}
                                        marginBottom={'2rem'}
                                    >
                                        <Box>
                                            <Marquee direction="right" speed={20}>
                                                <img src="/images/crystals/9.png" alt="" style={{height: '120px', marginRight: '40px'}}/>
                                                <img src="/images/crystals/10.png" alt="" style={{height: '120px', marginRight: '40px'}}/>
                                                <img src="/images/crystals/11.png" alt="" style={{height: '120px', marginRight: '40px'}}/>
                                                <img src="/images/crystals/12.png" alt="" style={{height: '120px', marginRight: '40px'}}/>
                                                <img src="/images/crystals/13.png" alt="" style={{height: '120px', marginRight: '40px'}}/>
                                                <img src="/images/crystals/14.png" alt="" style={{height: '120px', marginRight: '40px'}}/>
                                                <img src="/images/crystals/15.png" alt="" style={{height: '120px', marginRight: '40px'}}/>
                                            </Marquee>
                                        </Box>
                                    </Container>
                                </Bleed>
                            </Stack>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box borderBlockWidth={'1px'} height={'100%'}>
                            <Stack padding={'2rem'} gap={'2rem'} alignItems={'start'}>
                                <Stack gap={'1rem'}>
                                    <Text as='h2' fontSize={'1.875rem'} lineHeight={'2.375rem'}>Did you know...</Text>
                                    <Text as='p' fontSize={'1.125rem'} lineHeight={'1.75rem'} whiteSpace={'pre-line'} color={'myAppTextColor'}>Crystals emit subtle vibrations that align energy, promoting emotional balance, clarity, and holistic healing.</Text>
                                </Stack>
                                <Stack gap='2rem'>
                                    <Stack direction={'row'} gap={'1.25rem'} alignItems={'start'}>
                                        <Box borderWidth={'1px'} padding={'1rem'} backgroundColor={'myAppBackground2'}>
                                            <Icon fontSize={'2rem'} color={iconColor}>
                                                <GiCrystalBall />
                                            </Icon>
                                        </Box>
                                        <Text as='p' fontSize={'1.125rem'} lineHeight={'1.75rem'} whiteSpace={'pre-line'} color={'myAppTextColor'}>Healing crystals have been used for thousands of years. Ancient Egyptians adorned themselves with stones like lapis lazuli and turquoise, believing they could ward off illness and negative energy.</Text>
                                    </Stack>
                                    <Stack direction={'row'} gap={'1.25rem'} alignItems={'start'}>
                                        <Box borderWidth={'1px'} padding={'1rem'} backgroundColor={'myAppBackground2'}>
                                            <Icon fontSize={'2rem'} color={iconColor}>
                                                <GiCrystalShine />
                                            </Icon>
                                        </Box>
                                        <Text as='p' fontSize={'1.125rem'} lineHeight={'1.75rem'} whiteSpace={'pre-line'} color={'myAppTextColor'}>Crystals interact with the body’s energy fields. Their unique vibrational frequencies can help unblock or redirect energy flow, promoting relaxation and clarity.</Text>
                                    </Stack>
                                    <Stack direction={'row'} gap={'1.25rem'} alignItems={'start'}>
                                        <Box borderWidth={'1px'} padding={'1rem'} backgroundColor={'myAppBackground2'}>
                                            <Icon fontSize={'2rem'} color={iconColor}>
                                                <GiElectric />
                                            </Icon>
                                        </Box>
                                        <Text as='p' fontSize={'1.125rem'} lineHeight={'1.75rem'} whiteSpace={'pre-line'} color={'myAppTextColor'}>The Curie brothers discovered the piezoelectric effect in 1880 — crystals like quartz can generate electricity when compressed. This principle is used in watches, microphones, and medical devices.</Text>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                    </GridItem>
                </Grid>
            </Container>
        </Container>
    );
};

export default Crystals;