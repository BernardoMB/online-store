import { AbsoluteCenter, Box, Button, Center, HStack, IconButton, Text } from "@chakra-ui/react";
import { useCartTotals } from "../../hooks/useCart";
import { ColorModeButton, useColorModeValue } from "../ui/color-mode";
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

  const logoColor = useColorModeValue('black', 'white');

  return (
    <>
      {/* App Header */}
      <Box as="header" className="site-header" boxShadow={{ base: '0 0 1px 1px rgba(20, 23, 28, .1), 0 3px 1px 0 rgba(20, 23, 28, .1)', md: 'none' }}>
        <div className="header-container">
          <div className="header-section left">
            <Button variant="ghost" onClick={toggleSidebar} display={{ base: 'block', md: 'none' }}>
              {isSidebarOpen ? <div>&#10006;</div> : ("☰")}
            </Button>
            &emsp;
          </div>
          <AbsoluteCenter>
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
      {/* Navigation items */}
      <Box as="header"
        className="site-header"
        display={{ base: 'none', md: 'block' }}
        boxShadow={{ md: '0 0 1px -1px rgba(20, 23, 28, .1), 0 3px 1px 0 rgba(20, 23, 28, .1)', base: 'none' }}
      >
        <div className="header-container" style={{ height: '2em' }}>
          <AbsoluteCenter>
            <HStack gap={10}>
              {[
                { to: "/home", label: "Home" },
                { to: "/products", label: "Shop Products" },
                { to: "/about", label: "About Us" },
                { to: "/checkout", label: "Checkout" },
              ].map((link, index) =>
                <NavLink to={link.to} style={{ textDecoration: 'none' }} key={`sidebar-navlink-${index}`}>
                  {({ isActive }) => (
                    <Text fontWeight="medium"
                      _hover={{ textDecoration: 'underline' }}
                      color={isActive ? 'orange.500' : 'unset'}
                      whiteSpace={'nowrap'}
                    >{link.label}</Text>
                  )}
                </NavLink>
              )}
            </HStack>
          </AbsoluteCenter>
        </div>
      </Box>
    </>
  );
};

export default Header;