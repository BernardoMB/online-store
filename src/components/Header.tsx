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
}) => (
  <header className="site-header">
    <button onClick={toggleHeader}>
      {expanded ? "Collapse Header" : "Expand Header"}
    </button>
    <button onClick={toggleSidebar} style={{ marginLeft: "1rem" }}>
      {isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
    </button>
  </header>
);

export default Header;