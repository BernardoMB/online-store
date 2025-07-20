import { AbsoluteCenter, Box, Center, Text } from "@chakra-ui/react";
import { useCartTotals } from "../../hooks/useCart";
import { ColorModeButton, useColorModeValue } from "../ui/color-mode";
import './Header.css';
import { CartIndicator } from "../CartIndicator";
import { StoreLogo } from "../StoreLogo";

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
    <header className="site-header">
      <div className="header-container">
        <div className="header-section left">
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? <div>&#10006;</div> : "☰"}
          </button>
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
    </header>
  );
};

export default Header;