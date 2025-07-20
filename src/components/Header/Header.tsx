import { useCartTotals } from "../../hooks/useCart";
import { ColorModeToggler } from "../ColorModeToggler";
import './Header.css';

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
      &emsp; Hue & Hoot
      {/* <button onClick={toggleHeader} style={{ marginLeft: "1rem" }}>
        {expanded ? "Collapse Header" : "Expand Header"}
      </button> */}
      <div className="spacer"></div>
      <ColorModeToggler></ColorModeToggler>
      <div>
        <strong>🛒 Cart:</strong> {count} item{count !== 1 && "s"} — ${price.toFixed(2)}
      </div>
    </header>
  );
};

export default Header;