import { Box, type BoxProps } from "@chakra-ui/react";

const Divider: React.FC<BoxProps> = (props) => {
    return (
        <Box marginBlock={'0rem'} marginInline={'0rem'} borderInlineStartWidth={0} borderTopWidth={'1px'} {...props}></Box>
    );
};

export default Divider;