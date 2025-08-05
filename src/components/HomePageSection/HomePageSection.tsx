import { Box, Container } from "@chakra-ui/react"
import React, { type ReactNode } from "react"
import { useColorModeValue } from "../ui/color-mode";

const HomePageSection = ({ children }: { children: ReactNode }) => {
    
    const linearGradientColor = useColorModeValue('linear-gradient(#e9e8e6, #fafaf9)', 'linear-gradient(#717171, #000000)');
    const linearGradientColor2 = useColorModeValue('linear-gradient(#fafaf9, #e9e8e6)', 'linear-gradient(#000000, #717171)');
    
    return (
        <Container paddingInline={'2rem'} position={'relative'} maxWidth={'80rem'} width='100%' marginInline={'auto'}>
            <Container paddingBlock={'6rem'}>
                {children}
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
    )
}

export default HomePageSection;