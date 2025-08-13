import { Box, Container, type BoxProps } from "@chakra-ui/react"
import { type ReactNode } from "react"
import { useColorModeValue } from "./ui/color-mode";

type ClosedSectionProps = BoxProps & {
  children: ReactNode;
};

const ClosedSection = ({ children, ...props }: ClosedSectionProps) => {
    const welcomeMessageBackgroundColor = useColorModeValue('white', '#222221');
    const welcomeMessageColor = useColorModeValue('gray.500', 'gray.200');
    return (
        <Container 
            position={'relative'} 
            paddingInline={{ base: '0.5rem', sm: '1rem', md: '1.5rem', lg: '2rem' }} 
            maxWidth={'80rem'} 
            width={'100%'} 
            marginInline={'auto'}
        >
            <Box 
                background={welcomeMessageBackgroundColor} 
                color={welcomeMessageColor} 
                width="100%" 
                padding="4" 
                borderInlineWidth={'1px'} 
                {...props}
            >
                {children}
            </Box>
        </Container>
    )
}

export default ClosedSection;