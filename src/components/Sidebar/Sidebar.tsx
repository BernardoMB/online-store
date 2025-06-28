import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

type SidebarProps = {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isVisible, setIsVisible }) => {
  const navigate = useNavigate();

  const hideSidebar: Function = () => {
    setIsVisible(false);  
  }

  const handleNavigate: Function = (route: string): void => {
    hideSidebar();
    navigate(route);
  }

  return (
    <aside className={`sidebar ${isVisible ? "slide-in" : "slide-out"}`}>
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
    </aside>
  );
};

export default Sidebar;
