import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./index.css";

const App: React.FC = () => {
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
        <Sidebar isVisible={isSidebarOpen} />
        {isSidebarOpen && (
          <div className="sidebar-backdrop" onClick={() => setIsSidebarOpen(false)} />
        )}
        <Content />
      </div>

      <Footer />
    </div>
  );
};

export default App;
