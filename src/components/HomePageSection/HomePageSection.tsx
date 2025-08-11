import { Box, Container } from "@chakra-ui/react"
import { type ReactNode } from "react"

const HomePageSection = ({ children }: { children: ReactNode }) => {
    return (
        <Container position={'relative'} 
            paddingInline={{base: '0.5rem', sm: '1rem', md: '1.5rem', lg: '2rem'}} 
            maxWidth={'80rem'} width='100%' 
            marginInline={'auto'}
        >
            <Container paddingBlock={{base: '2rem', md: '6rem'}}>
                {children}
                <Box position={'absolute'} top={'0rem'} left={'0rem'} width={'100%'} pointerEvents={'none'} aria-hidden='true' role='presentation'>
                    {/* Left */}
                    <Box position={'absolute'} top={'0rem'} left={'0rem'} height={'7.125rem'} borderLeftWidth={'1px'} zIndex={1}></Box>
                    <Box position={'absolute'} top={'0rem'} left={'0rem'} height={'12rem'} width={'1px'} zIndex={2} bgImage={'var(--chakra-colors-my-app-border-gradient-top)'} ></Box>
                    {/* Right */}
                    <Box position={'absolute'} top={'0rem'} right={'0rem'} height={'7.125rem'} borderLeftWidth={'1px'} zIndex={1}></Box>
                    <Box position={'absolute'} top={'0rem'} right={'0rem'} height={'12rem'} width={'1px'} zIndex={2} bgImage={'var(--chakra-colors-my-app-border-gradient-top)'} ></Box>
                </Box>
                <Box position={'absolute'} bottom={'0rem'} left={'0rem'} width={'100%'} pointerEvents={'none'} aria-hidden='true' role='presentation'>
                    {/* Left */}
                    <Box position={'absolute'} bottom={'0rem'} left={'0rem'} height={'7.125rem'} borderLeftWidth={'1px'} zIndex={1}></Box>
                    <Box position={'absolute'} bottom={'0rem'} left={'0rem'} height={'12rem'} width={'1px'} zIndex={2} bgImage={'var(--chakra-colors-my-app-border-gradient-bottom)'} ></Box>
                    {/* Right */}
                    <Box position={'absolute'} bottom={'0rem'} right={'0rem'} height={'7.125rem'} borderLeftWidth={'1px'} zIndex={1}></Box>
                    <Box position={'absolute'} bottom={'0rem'} right={'0rem'} height={'12rem'} width={'1px'} zIndex={2} bgImage={'var(--chakra-colors-my-app-border-gradient-bottom)'} ></Box>
                </Box>
            </Container>
        </Container>
    )
}

export default HomePageSection;