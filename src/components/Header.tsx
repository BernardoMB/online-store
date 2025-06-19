import { useCartTotals } from "../hooks/useCart";

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
        {isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
      </button>
      <button onClick={toggleHeader} style={{ marginLeft: "1rem" }}>
        {expanded ? "Collapse Header" : "Expand Header"}
      </button>
      <div>
        <strong>🛒 Cart:</strong> {count} item{count !== 1 && "s"} — ${price.toFixed(2)}
      </div>
    </header>
  );
};

export default Header;