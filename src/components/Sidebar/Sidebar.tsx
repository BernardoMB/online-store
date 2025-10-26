import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { AbsoluteCenter, Bleed, Box, Center, Flex, HStack, Icon, Menu, Text } from "@chakra-ui/react";
import { FcHome, FcShop, FcAbout, FcPaid } from "react-icons/fc";
import { useColorMode, useColorModeValue } from "../ui/color-mode";
import { StoreLogo } from "../StoreLogo";
import Divider from "../Divider";
import { MdHome } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaUserLock } from "react-icons/fa6";
import { MdPolicy } from "react-icons/md";

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
  const backgroundColor = useColorModeValue('#fafaf9', '#191918');
  const logoColor = useColorModeValue('black', 'white');

  return (
    <aside className={`sidebar ${isVisible ? "slide-in" : "slide-out"}`}
      style={{
        boxShadow: shouldShowShadow ? "2px 0 10px rgba(0, 0, 0, 0.15)" : "none",
        backgroundColor,
      }}>
      <Flex alignItems="center" padding={'0.6rem'} justifyContent="center">
        <StoreLogo color={logoColor} width="35" height="46" style={{ marginTop: "-5px" }} />
        <Box whiteSpace="nowrap">
          <Text textStyle="xl">Hue & Hoot</Text>
        </Box>
      </Flex>
      <Divider></Divider>
      <Bleed inline="1rem" padding={'1rem'}>
        {[
          { to: "/home", label: "Home", icon: MdHome },
          { to: "/products", label: "Shop Products", icon: FaShoppingBag },
          { to: "/about", label: "About Us", icon: BsInfoCircleFill },
          { to: "/checkout", label: "Checkout", icon: PiShoppingCartSimpleFill },
          { to: "/privacy-policy", label: "Privacy Policy", icon: FaUserLock },
          { to: "/terms-and-conditions", label: "Terms and Conditions", icon: MdPolicy },
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
                <Text fontWeight="medium" color={'myAppTextColor'}>{link.label}</Text>
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
