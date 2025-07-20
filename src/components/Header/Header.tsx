import { Badge, Box, Icon, Stack, Text } from "@chakra-ui/react";
import { useCartTotals } from "../../hooks/useCart";
import { ColorModeButton } from "../ui/color-mode";
import './Header.css';
import { FaShoppingCart } from "react-icons/fa";
import { CartIndicator } from "../CartIndicator";

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

  return (
    <header className="site-header">
      <button onClick={toggleSidebar}>
        {isSidebarOpen ? <div>&#10006;</div> : "☰"}
      </button>
      <Box whiteSpace="nowrap">
        &emsp;🦉 Hue & Hoot
      </Box>
      {/* <button onClick={toggleHeader} style={{ marginLeft: "1rem" }}>
        {expanded ? "Collapse Header" : "Expand Header"}
      </button> */}
      <div className="spacer"></div>
      <ColorModeButton></ColorModeButton>
      &emsp;
      <CartIndicator count={count} price={price}></CartIndicator>
    </header>
  );
};

export default Header;