import './Footer.css'
import { Container } from '@chakra-ui/react';
import { Box, Flex, Text, Link, Stack } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import Divider from '../Divider';
import { StoreLogo } from '../StoreLogo';
import { useColorModeValue } from '../ui/color-mode';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  const logoColor = useColorModeValue('black', 'white');
  const bottomFontColor = useColorModeValue('#5D5D58', '#c0beb9');
  const linkHoverColor = useColorModeValue('black', 'white');

  return (
    <>
      <Container position={'relative'} paddingInline={{ base: '0.5rem', sm: '1rem', md: '1.5rem', lg: '2rem' }} maxWidth={'80rem'} width={'100%'} marginInline={'auto'}>
        <Box as='section' width="100%" borderInlineWidth={'1px'} paddingInline={{ base: '1rem', sm: '1rem', md: '1.5rem', lg: '2rem' }} paddingBlock={{ base: '3rem', md: '4rem' }}>
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={'4rem'}
            justify="space-between"
            color={bottomFontColor}
          >
            {/* Left Column */}
            <Stack gap={'2rem'}>
              <Stack gap={'1rem'}>
                <Stack direction={'row'} alignItems={'end'} gap={'0.125rem'}>
                  <StoreLogo color={logoColor} width="35" height="46" style={{ marginTop: "-5px" }} />
                  &ensp;
                  <Box whiteSpace="nowrap">
                    <Text textStyle="xl" color={logoColor}>Hue & Hoot</Text>
                  </Box>
                </Stack>
                <Text fontSize={'16px'}>
                  Glow rings, made to be stared at
                </Text>
              </Stack>
              {/* Social Icons */}
              <Flex gap={4} fontSize={30}>
                {/* TODO: Create business pages */}
                <FaInstagram />
                <FaFacebook />
              </Flex>
            </Stack>
            {/* Right Columns */}
            <Flex gap={{ base: 8, md: '3rem' }} wrap="wrap">
              <Stack gap={'2rem'}>
                <Stack>
                  <Text color="fg.subtle" fontSize={'sm'} lineHeight={'1.25rem'}>Glow Rings</Text>
                  <Stack gap={'0.625rem'}>
                    <Link href="/products" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                      color={bottomFontColor}>Products</Link>
                    {/* TODO: Add other products support */}
                    {/* <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                      color={bottomFontColor}>Other Products</Link> */}
                  </Stack>
                </Stack>
                <Stack>
                  <Text color="fg.subtle" fontSize={'sm'} lineHeight={'1.25rem'}>Help</Text>
                  <Stack gap={'0.625rem'}>
                    {/* TODO: Create shipping info page */}
                    <Link href="/home#faq" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                      color={bottomFontColor}>Shipping</Link>
                    <Link href="/home#contact" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                      color={bottomFontColor}>Get help</Link>
                  </Stack>
                </Stack>
              </Stack>
              <Stack gap={2}>
                <Text color="fg.subtle" fontSize={'sm'} lineHeight={'1.25rem'}>Info</Text>
                <Stack gap={'0.625rem'}>
                  <Link href="/home#featured" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>Featured Products</Link>
                  <Link href="/home#ingredients" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>How they're made</Link>
                  <Link href="/home#crystals" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>Healing</Link>
                  <Link href="/home#testimonials" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>Testimonials</Link>
                  <Link href="/home#faq" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>FAQs</Link>
                  <Link href="/home#contact" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>Contact</Link>
                </Stack>
              </Stack>
              <Stack gap={2}>
                <Text color="fg.subtle" fontSize={'sm'} lineHeight={'1.25rem'}>Site</Text>
                <Stack gap={'0.625rem'}>
                  <Link href="/home" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>Home</Link>
                  <Link href="/products" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>Products</Link>
                  <Link href="/about" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>About</Link>
                  <Link href="/checkout" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>Checkout</Link>
                  {/* <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>Referral program</Link> */}
                </Stack>
              </Stack>
              <Stack gap={2}>
                <Text color="fg.subtle" fontSize={'sm'} lineHeight={'1.25rem'}>Contact</Text>
                <Stack gap={'0.625rem'}>
                  <Link href="/home#contact" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }} border={1} borderRadius={20} paddingBlock={1} paddingInline={2} borderColor={'myAppGlobalBorderColor'} borderStyle={'solid'}
                    color={bottomFontColor}>
                    Send us a message
                  </Link>
                  <Stack direction={'row'} gap={1} alignItems="baseline">
                    <FaLocationDot />
                    <Stack>
                      <Text>716 Fishburn Rd.</Text>
                      <Text>Hershey, PA 17033</Text>
                    </Stack>
                  </Stack>
                  <Stack direction={'row'} gap={1} alignItems="center ">
                    <MdEmail />
                    <Stack>
                      <Link
                        href="mailto:bmondragonbrozon@gmail.com"
                        _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                        color={bottomFontColor}
                      >
                        <Text>bmondragonbrozon@gmail.com</Text>
                      </Link>
                    </Stack>
                  </Stack>
                  <Stack direction={'row'} gap={1} alignItems="center ">
                    <FaPhone />
                    <Stack>
                      <Text>(571) 626-1227</Text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Flex>
          </Stack>
        </Box>
      </Container>
      <Divider />
      {/* Bottom Bar */}
      <Container position={'relative'} paddingInline={{ base: '0.5rem', sm: '1rem', md: '1.5rem', lg: '2rem' }} maxWidth={'80rem'} width={'100%'} marginInline={'auto'}>
        <Box width="100%" borderInlineWidth={'1px'} paddingBlock={'1rem'} paddingInline={'2rem'}>
          <Flex
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
            direction={{ base: "column", md: "row" }}
            fontSize={'14px'}
            color={bottomFontColor}
            gap={2}
          >
            <Text>© 2025 Hue & Hoot</Text>
            <Flex gap={4}>
              {/* <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                color={bottomFontColor}>Legal Disclosure</Link> */}
              <Link href="/privacy-policy" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                color={bottomFontColor}>Privacy Policy</Link>
              <Link href="/terms-and-conditions" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                color={bottomFontColor}>Terms & Conditions</Link>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
