import React from 'react';
import BeforeAfterSlider from '../BeforeAfterSlider/BeforeAfterSlider';
import HomePageSection from '../HomePageSection/HomePageSection';
import { AspectRatio, Box, Grid, GridItem, Stack, Text, VStack } from '@chakra-ui/react';

const SliderSection: React.FC = () => {

    return (
        <HomePageSection>
            <Grid templateColumns="repeat(2, 1fr)" gap="16" alignItems={'center'}>
                <GridItem>
                    <Stack gap='3rem'>
                        <Stack gap='2rem'>
                            <Stack flexDirection={'column'} gap='1rem'>
                                <Stack gap={'0.75rem'}>
                                    <Text as='p' color={'#82827c'} letterSpacing={'0.1rem'} fontSize={'0.875rem'}>3 SIMPLE INGREDIENTS</Text>
                                    <Text as='h2' fontSize={'1.875rem'} lineHeight={'2.375rem'} whiteSpace={'pre-line'} textWrap={'balance'} fontWeight={600}>Beauty, Lit From Within</Text>
                                </Stack>
                                <Text as='p' color={'#5D5D58'} fontSize={'1.125rem'} lineHeight={'1.75rem'} whiteSpace={'pre-line'}>Crystal, stone, and glow powder—fused in harmony to craft a luminous masterpiece.</Text>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Stack gap={'0.25rem'}>
                                <Text as='h3' fontWeight={600} fontSize={'1.125rem'} lineHeight={'1.75rem'}>1. Crystals</Text>
                                <Text as='p' color={'#5D5D58'}>Crystals aren’t just beautiful—they’re tools of balance, spirit elevation, and energetic healing.</Text>
                            </Stack>
                            <Box marginBlock={'1.5rem'} marginInline={'0rem'} borderInlineStartWidth={0} borderWidth={0} borderTopWidth={'1px'} alignSelf={'stretch'} borderColor={'inherit'} width={'auto'} height={'auto'}></Box>
                            <Stack gap={'0.25rem'}>
                                <Text as='h3' fontWeight={600} fontSize={'1.125rem'} lineHeight={'1.75rem'}>2. Stones</Text>
                                <Text as='p' color={'#5D5D58'}>Each stone carries ancient earth magic—centering your energy and restoring inner calm.</Text>
                            </Stack>
                            <Box marginBlock={'1.5rem'} marginInline={'0rem'} borderInlineStartWidth={0} borderWidth={0} borderTopWidth={'1px'} alignSelf={'stretch'} borderColor={'inherit'} width={'auto'} height={'auto'}></Box>
                            <Stack gap={'0.25rem'}>
                                <Text as='h3' fontWeight={600} fontSize={'1.125rem'} lineHeight={'1.75rem'}>3. Glow Powder</Text>
                                <Text as='p' color={'#5D5D58'}>Scientifically proven to make humans go ‘ooooh’ and forget what they were doing.</Text>
                            </Stack>
                        </Stack>
                    </Stack>
                </GridItem>
                <GridItem>
                    <Box borderStartEndRadius={'4rem'} borderEndStartRadius={'4rem'} padding={'0.5rem'} borderWidth={'1px'}>
                        <AspectRatio ratio={1} borderRadius={'inherit'}>
                            <BeforeAfterSlider
                                beforeSrc='/images/glow_ring_before.jpg'
                                afterSrc='/images/glow_ring_after.jpg'
                            >
                            </BeforeAfterSlider>
                        </AspectRatio>    
                    </Box>
                </GridItem>
            </Grid>
        </HomePageSection>
    );
};

export default SliderSection;
