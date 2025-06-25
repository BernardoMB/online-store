import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

type SidebarProps = {
  isVisible: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ isVisible }) => {
  const navigate = useNavigate();

  return (
    <aside className={`sidebar ${isVisible ? "slide-in" : "slide-out"}`}>
      <nav>
        <ul>
          <li>
            <button onClick={() => navigate("/home")}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/products")}>
              Shop Products
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/about")}>
              About
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/checkout")}>
              Checkout
            </button>
            </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
