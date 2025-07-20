import { Box, Icon, Text, Flex, Stack, Badge } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useColorModeValue } from './ui/color-mode';

type CartIndicatorProps = {
  count: number;
  price: number;
  showPrice: boolean;
};

export function CartIndicator({ count, price, showPrice }: CartIndicatorProps) {
  const navigate = useNavigate();

  // Theme-aware values for hover and text color
  const hoverBg = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const badgeBg = useColorModeValue('red.500', 'red.400');

  //const shoppingCartIconColor = "teal.500";
  const shoppingCartIconColor = undefined;

  return (
    <>
      {/* Option 1 */}
      {/* <div>
        <strong>🛒 Cart:</strong> {count} item{count !== 1 && "s"} — ${price.toFixed(2)}
      </div> */}

      {/* Option 2 */}
      {/* <Stack direction="row">
        <Icon as={FaShoppingCart} boxSize={6} color="teal.500" />
        <Badge colorScheme="teal" fontSize="0.9em" px={2} borderRadius="md">
          {count} item{count !== 1 && 's'}
        </Badge>
        <Text fontWeight="bold" color="gray.700">
          ${price.toFixed(2)}
        </Text>
      </Stack> */}

      {/* Option 3 */}
      <Flex
        as="button"
        align="center"
        gap={3}
        position="relative"
        cursor="pointer"
        px={3}
        py={2}
        borderRadius="md"
        bg="transparent"
        _hover={{ bg: hoverBg, boxShadow: 'md' }}
        transition="all 0.2s ease-in-out"
        onClick={() => navigate('/checkout')}
      >
        <Box position="relative">
          {/* <Icon as={FaShoppingCart} boxSize={7} color={shoppingCartIconColor} /> */}
          🛒

          {count > 0 && (
            <Box
              position="absolute"
              top="0"
              right="0"
              transform="translate(45%, -45%)"
              bg={badgeBg}
              color="white"
              fontSize="10px"
              fontWeight="bold"
              borderRadius="full"
              px={1.5}
              py={0.5}
              minW="4"
              textAlign="center"
              lineHeight="1"
              boxShadow="md"
            >
              {count}
            </Box>
          )}
        </Box>

        {showPrice && (
          <Text fontWeight="bold" fontSize="md" color={textColor}>
            ${price.toFixed(2)}
          </Text>
        )}
      </Flex>
    </>
  );
}
