import { AbsoluteCenter, Box, Button, Container, HStack, Text } from "@chakra-ui/react";
import { useCartTotals } from "../../hooks/useCart";
import { ColorModeButton, useColorMode, useColorModeValue } from "../ui/color-mode";
import './Header.css';
import { CartIndicator } from "../CartIndicator";
import { StoreLogo } from "../StoreLogo";
import { NavLink } from "react-router-dom";

type HeaderProps = {
  expanded: boolean;
  toggleHeader: () => void;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
};

const Header: React.FC<HeaderProps> = ({
  expanded,
  toggleHeader,
  toggleSidebar,
  isSidebarOpen,
}) => {
  const { price, count } = useCartTotals();

  const backgroundColor = useColorModeValue('white', '#222221');
  const logoColor = useColorModeValue('black', 'white');

  const { colorMode } = useColorMode();

  const accentColor = useColorModeValue('accent', 'accent');

  return (
    <Box>
      {/* App Header */}
      <Box as="header" borderBottomWidth={'1px'} borderColor={'myAppGlobalBorderColor'}>
        <Container paddingInline={{ base: '0.5rem', sm: '1rem', md: '1.5rem', lg: '2rem' }}
          position={'relative'}
          maxWidth={'80rem'}
          width={'100%'}
          marginInline={'auto'}
        >
          <Box width="100%" borderInlineWidth={'1px'} className="site-header"
            paddingInline={{ base: '0.5rem', sm: '1rem', md: '1.5rem', lg: '2rem' }}
            backgroundColor={backgroundColor}
          >
            <div className="header-container">
              <div className="header-section left">
                <Button variant="ghost" onClick={toggleSidebar} display={{ base: 'block', md: 'none' }} paddingInline={{ base: '0.5rem', sm: '1rem' }}>
                  {isSidebarOpen ? <div>&#10006;</div> : ("☰")}
                </Button>
                &emsp;
              </div>
              <AbsoluteCenter marginLeft={{ base: '-28px', sm: '0px' }}>
                <div className="header-section center">
                  <StoreLogo color={logoColor} width="35" height="46" style={{ marginTop: "-5px" }} />
                  &ensp;
                  <Box whiteSpace="nowrap">
                    <Text textStyle="xl">Hue & Hoot</Text>
                  </Box>
                </div>
              </AbsoluteCenter>
              {/* <button onClick={toggleHeader} style={{ marginLeft: "1rem" }}>
              {expanded ? "Collapse Header" : "Expand Header"}
              </button> */}
              {/* <div className="spacer"></div> */}
              <div className="header-section right">
                <ColorModeButton></ColorModeButton>
                <CartIndicator count={count} price={price} showPrice={false}></CartIndicator>
              </div>
            </div>
          </Box>
        </Container>
      </Box>

      {/* Navigation items */}
      <Box borderBottomWidth={'1px'} borderColor={'myAppGlobalBorderColor'} display={{ base: 'none', md: 'block' }}>
        <Container
          paddingInline={{ base: '0.5rem', sm: '1rem', md: '1.5rem', lg: '2rem' }}
          position={'relative'}
          maxWidth={'80rem'}
          width={'100%'}
          marginInline={'auto'}
        >
          <Box width="100%" borderInlineWidth={'1px'} className="site-header" backgroundColor={backgroundColor}>
            <div className="header-container" style={{ height: '2em' }}>
              <AbsoluteCenter>
                <HStack gap={10}>
                  {[
                    { to: "/home", label: "Home" },
                    { to: "/products", label: "Shop Products" },
                    { to: "/about", label: "About Us" },
                    { to: "/checkout", label: "Checkout" },
                  ].map((link, index) =>
                    <NavLink to={link.to} style={{ textDecoration: 'none', position: 'relative' }} key={`sidebar-navlink-${index}`}>
                      {({ isActive }) => (
                        <Text fontWeight="medium"
                          _hover={{ opacity: 0.9 }}
                          whiteSpace={'nowrap'}
                          color={ isActive ? 'myAccentColor' : 'inherit'}
                        >
                          {link.label}
                        </Text>
                      )}
                    </NavLink>
                  )}
                </HStack>
              </AbsoluteCenter>
            </div>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
