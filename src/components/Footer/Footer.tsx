import { useState } from 'react';
import './Footer.css'
import TermsAndConditionsModal from '../TermsAndConditionsModal/TermsAndConditionsModal';
import StoreIcon from '../StoreIcon';
import { Center, Container } from '@chakra-ui/react';
import { Box, Flex, Text, Link, Stack, IconButton, Image } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Divider from '../Divider';
import { StoreLogo } from '../StoreLogo';
import { useColorModeValue } from '../ui/color-mode';

const Footer: React.FC = () => {
  const [isTermsAndConditionsOpen, setIsTemrsAndConditionsOpen] = useState(false);
  const logoColor = useColorModeValue('black', 'white');
  const bottomFontColor = useColorModeValue('#5D5D58', '#c0beb9');
  const linkHoverColor = useColorModeValue('black', 'white');

  return (
    <>
      <Container position={'relative'} paddingInline={{ base: '0.5rem', sm: '1rem', md: '1.5rem', lg: '2rem' }} maxWidth={'80rem'} width={'100%'} marginInline={'auto'}>
        <Box as='section' width="100%" borderInlineWidth={'1px'} paddingInline={'2rem'} paddingBlock={'4rem'}>
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
              <Flex gap={2}>
                <button>Icon button</button>
                <button>Icon button</button>
              </Flex>
            </Stack>
            {/* Right Columns */}
            <Flex gap={{ base: 8, md: '3rem' }} wrap="wrap">
              <Stack gap={'2rem'}>
                <Stack>
                  <Text color="fg.subtle" fontSize={'sm'} lineHeight={'1.25rem'}>Product</Text>
                  <Stack gap={'0.625rem'}>
                    <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                      color={bottomFontColor}>Wallet & Smartcard</Link>
                    <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                      color={bottomFontColor}>Dashboard & Integration</Link>
                  </Stack>
                </Stack>
                <Stack>
                  <Text color="fg.subtle" fontSize={'sm'} lineHeight={'1.25rem'}>Benefits</Text>
                  <Stack gap={'0.625rem'}>
                    <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                      color={bottomFontColor}>Brands</Link>
                    <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                      color={bottomFontColor}>Regions</Link>
                  </Stack>
                  </Stack>
              </Stack>
              <Stack gap={2}>
                <Text color="fg.subtle" fontSize={'sm'} lineHeight={'1.25rem'}>Solutions</Text>
                <Stack gap={'0.625rem'}>
                  <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>Startups</Link>
                  <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>Consulting</Link>
                  <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>Technology</Link>
                  <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>Manufacturing</Link>
                  <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>Healthcare</Link>
                  <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>Public Sector</Link>
                </Stack>
              </Stack>
              <Stack gap={2}>
                <Text color="fg.subtle" fontSize={'sm'} lineHeight={'1.25rem'}>Resources</Text>
                <Stack gap={'0.625rem'}>
                  <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>Blog</Link>
                  <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>Glossary</Link>
                  <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>Tax Advantages</Link>
                  <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>About HelloBonnie</Link>
                  <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>Referral program</Link>
                </Stack>
              </Stack>
              <Stack gap={2}>
                <Text color="fg.subtle" fontSize={'sm'} lineHeight={'1.25rem'}>Help</Text>
                <Stack gap={'0.625rem'}>
                  <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>For Employees</Link>
                  <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                    color={bottomFontColor}>For Companies</Link>
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
              <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                color={bottomFontColor}>Legal Disclosure</Link>
              <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                color={bottomFontColor}>Privacy Policy</Link>
              <Link href="#" _hover={{ color: linkHoverColor, cursor: 'pointer', textDecoration: 'none' }}
                color={bottomFontColor}>Terms</Link>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
