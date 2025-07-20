import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { Box, Flex, HStack, Icon, Menu, Text } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { useColorModeValue } from "../ui/color-mode";

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

  const menuItemColor = useColorModeValue('black', 'white');
  const backgroundColor = useColorModeValue('white', 'black');

  return (
<Flex backgroundColor={backgroundColor}>
    <aside className={`sidebar ${isVisible ? "slide-in" : "slide-out"}`} style={{boxShadow: shouldShowShadow ? "2px 0 10px rgba(0, 0, 0, 0.15)" : "none" }}>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleNavigate("/home")}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigate("/products")}>
              Shop Products
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigate("/about")}>
              About
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigate("/checkout")}>
              Checkout
            </button>
            </li>
        </ul>
      </nav>



  <NavLink to={"/checkout"} style={{ textDecoration: 'none' }}>
        {({ isActive }) => (
          <HStack
            px={4}
            py={2}
            borderRadius="md"
            bg={isActive ? menuItemColor : 'transparent'}
            color={isActive ? 'white' : 'gray.700'}
            _hover={{ bg: menuItemColor }}
          >
            <Icon as={FaHome} boxSize={5} />
            <Text fontWeight="medium">Checkout</Text>
          </HStack>
        )}
      </NavLink>




    </aside>
</Flex>
  );
};

export default Sidebar;
