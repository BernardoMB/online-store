import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { Bleed, Box, Flex, HStack, Icon, Menu, Text } from "@chakra-ui/react";
import { FcHome, FcShop, FcAbout, FcPaid  } from "react-icons/fc";
import { useColorMode, useColorModeValue } from "../ui/color-mode";

type SidebarProps = {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isVisible, setIsVisible }) => {
  const [shouldShowShadow, setShouldShowShadow] = useState(true);

  const navigate = useNavigate();

  const hideSidebar: Function = () => {
    setIsVisible(false);
  }

  const handleNavigate: Function = (route: string): void => {
    hideSidebar();
    navigate(route);
  }

  useEffect(() => {
    if (!isVisible) {
      // Wait for animation to finish before removing shadow
      const timer = setTimeout(() => {
        setShouldShowShadow(false);
      }, 300); // Matches your CSS transition timing

      return () => clearTimeout(timer);
    } else {
      // Restore shadow instantly when opening
      setShouldShowShadow(true);
    }
  }, [isVisible]);

  const { colorMode } = useColorMode();
  const backgroundColor = useColorModeValue('white', 'black');

  return (
    <aside className={`sidebar ${isVisible ? "slide-in" : "slide-out"}`}
      style={{
        boxShadow: shouldShowShadow ? "2px 0 10px rgba(0, 0, 0, 0.15)" : "none",
        backgroundColor
      }}>
      <Bleed inline="1rem">
        {[
          { to: "/home", label: "Home", icon: FcHome },
          { to: "/products", label: "Shop Products", icon: FcShop },
          { to: "/about", label: "About Us", icon: FcAbout },
          { to: "/checkout", label: "Checkout", icon: FcPaid },
        ].map((link, index) =>
            <NavLink to={link.to} style={{ textDecoration: 'none' }} key={`sidebar-navlink-${index}`} onClick={() => handleNavigate()}>
              {({ isActive }) => (
                <HStack
                  px={4}
                  py={2}
                  position="relative"
                  _hover={{ textDecoration: 'underline' }}
                  background={isActive ? colorMode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1);' : 'unset'}
                >
                  <Icon as={link.icon} boxSize={5} />
                  <Text fontWeight="medium">{link.label}</Text>
                  {isActive && (
                    <Box
                      position="absolute"
                      right={0}
                      top={0}
                      height="100%"
                      width="4px"
                      bg={colorMode === 'light' ? 'black' : 'white'}
                    />
                  )}
                </HStack>
              )}
              {/* Using after for is active indicator: */}
              {/* <NavLink to={link.to} style={{ position: 'relative', textDecoration: 'none' }}>
                {({ isActive }) => (
                  <HStack
                    px={4}
                    py={2}
                    background={ isActive ? colorMode === 'light' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4);' : 'unset' }
                    _hover={{ textDecoration: 'underline' }}
                    _after={{ content: '""', display: isActive ? 'block' : 'none', position: 'absolute', right: 0, height: '100%', width: '2px', backgroundColor: colorMode === 'light' ? 'black' : 'white' }}
                  >
                    <Icon as={link.icon} boxSize={5} />
                    <Text fontWeight="medium">{link.label}</Text>
                  </HStack>
                )}
              </NavLink> */}
            </NavLink>
        )}
      </Bleed>
    </aside>
  );
};

export default Sidebar;
