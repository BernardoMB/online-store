import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./Layout.css";
import Header from "../Header/Header";

const Layout: React.FC = () => {
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      <Header
        expanded={isHeaderExpanded}
        toggleHeader={() => setIsHeaderExpanded((prev) => !prev)}
        toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
      />

      {isHeaderExpanded && (
        <>
          <div className="expanded-header">🚀 Expanded Header Content</div>
          <div className="backdrop" onClick={() => setIsHeaderExpanded(false)}></div>
        </>
      )}

      <div className="main-layout">
        <Sidebar isVisible={isSidebarOpen} setIsVisible={setIsSidebarOpen} />
        {isSidebarOpen && (
          <div className="sidebar-backdrop" onClick={() => setIsSidebarOpen(false)} />
        )}
        <main className="routed-content">
            <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
