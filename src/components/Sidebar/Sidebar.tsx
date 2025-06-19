import "./Sidebar.css";
type SidebarProps = {
  isVisible: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ isVisible }) => {
  return (
    <aside className={`sidebar ${isVisible ? "show" : "hide"}`}>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Cart</a></li>
          <li><a href="#">Account</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
