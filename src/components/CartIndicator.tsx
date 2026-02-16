import { Box, Icon, Text, Flex, Stack, Badge, IconButton } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useColorModeValue } from './ui/color-mode';
import { PiShoppingCartSimpleDuotone } from 'react-icons/pi';
import { LuVoicemail } from 'react-icons/lu';
import { use } from 'react';

type CartIndicatorProps = {
  count: number;
  price: number;
  showPrice: boolean;
};

export function CartIndicator({ count, price, showPrice }: CartIndicatorProps) {
  const navigate = useNavigate();
  return (
    <>
      <IconButton
        aria-label="Call support"
        variant={'ghost'}
        size={'sm'}
        onClick={() => navigate('/checkout')}
      >
        <PiShoppingCartSimpleDuotone />
      </IconButton>
      {count > 0 && (
        <Badge backgroundColor={'myBadgeBackgroundColor'}
          color={'myBadgeColor'}
          position="absolute"
          top="0"
          right="0"
          transform="translate(50%, 50%)"
        >
          {count}
        </Badge>
      )}
    </>
  );
}
