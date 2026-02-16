import React from 'react';
import HomePageSection from '../HomePageSection/HomePageSection';
import { Box, Grid, GridItem, Stack, Text, Image } from '@chakra-ui/react';
import imageLight from '../../assets/welcome_light.png';
import imageDark from '../../assets/welcome_dark.png';
import { useColorModeValue } from '../ui/color-mode';

const IngredientsSection: React.FC = () => {
    const image = useColorModeValue(
        <Image src={imageLight} alt="Hue & Hoot Banner" height={'30rem'} />,
        <Image src={imageDark} alt="Hue & Hoot Banner" height={'30rem'} />
    );

    return (
        <HomePageSection>
            <Stack direction={{ base: 'column', md: 'row' }}
                gap={{ md: '2rem' }}
                alignItems={{ md: 'center' }}
            >
                <Stack gap={{ base: '1rem', md: '3rem'}}>
                    <Stack gap='2rem'>
                        <Stack flexDirection={'column'} gap='1rem'>
                            <Stack gap={'0.75rem'}>
                                <Text as='p' color={'#82827c'} letterSpacing={'0.1rem'} fontSize={'0.875rem'} textAlign={{base: 'center', md: 'start'}}>3 SIMPLE INGREDIENTS</Text>
                                <Text as='h2' fontSize={'1.875rem'} lineHeight={'2.375rem'} whiteSpace={'pre-line'} textWrap={'balance'} fontWeight={600} textAlign={{base: 'center', md: 'start'}}>Beauty, Lit From Within</Text>
                            </Stack>
                            <Text as='p' color={'myAppTextColor'} fontSize={'1.125rem'} lineHeight={'1.75rem'} whiteSpace={'pre-line'} textAlign={{base: 'center', md: 'start'}}>Crystal, stone, and glow powder—fused in harmony to craft a luminous masterpiece.</Text>
                        </Stack>
                    </Stack>
                    <Box display={{ base: 'blobk', md: 'none' }} alignSelf={'center'}>
                        {image}
                    </Box>
                    <Stack>
                        <Stack gap={'0.25rem'}>
                            <Text as='h3' fontWeight={600} fontSize={'1.125rem'} lineHeight={'1.75rem'}>1. Crystals</Text>
                            <Text as='p' color={'myAppTextColor'}>Crystals aren’t just beautiful—they’re tools of balance, spirit elevation, and energetic healing.</Text>
                        </Stack>
                        <Box marginBlock={'1.5rem'} marginInline={'0rem'} borderInlineStartWidth={0} borderWidth={0} borderTopWidth={'1px'} alignSelf={'stretch'} borderColor={'inherit'} width={'auto'} height={'auto'}></Box>
                        <Stack gap={'0.25rem'}>
                            <Text as='h3' fontWeight={600} fontSize={'1.125rem'} lineHeight={'1.75rem'}>2. Stones</Text>
                            <Text as='p' color={'myAppTextColor'}>Each stone carries ancient earth magic—centering your energy and restoring inner calm.</Text>
                        </Stack>
                        <Box marginBlock={'1.5rem'} marginInline={'0rem'} borderInlineStartWidth={0} borderWidth={0} borderTopWidth={'1px'} alignSelf={'stretch'} borderColor={'inherit'} width={'auto'} height={'auto'}></Box>
                        <Stack gap={'0.25rem'}>
                            <Text as='h3' fontWeight={600} fontSize={'1.125rem'} lineHeight={'1.75rem'}>3. Glow Powder</Text>
                            <Text as='p' color={'myAppTextColor'}>Scientifically proven to make humans go ‘ooooh’ and forget what they were doing.</Text>
                        </Stack>
                    </Stack>
                </Stack>
                <Box display={{ base: 'none', md: 'block' }}>
                    {image}
                </Box>
            </Stack>
        </HomePageSection>
    );
};

export default IngredientsSection;
