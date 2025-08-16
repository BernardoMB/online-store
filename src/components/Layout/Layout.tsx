import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./Layout.css";
import Header from "../Header/Header";
import ThemeColorMetaTag from "../ThemeColorMetaTag";
import Divider from "../Divider";
import { Box } from "@chakra-ui/react";

const Layout: React.FC = () => {
  const [isStickyHeader, setIsStickyHeader] = useState(true);
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      <ThemeColorMetaTag />
      <Box position={isStickyHeader ? 'fixed' : 'unset'} zIndex={isStickyHeader ? 10 : 'unset'} width={isStickyHeader ? '100%' : 'unset'} top={isStickyHeader ? 0 : 'unset'} backgroundColor={isStickyHeader ? 'myAppBackground' : 'unset'}>
        <Header
          expanded={isHeaderExpanded}
          toggleHeader={() => setIsHeaderExpanded((prev) => !prev)}
          toggleSidebar={() => {
            setIsSidebarOpen((prev) => !prev);
          }}
          isSidebarOpen={isSidebarOpen}
        />
      </Box>

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
          <Box marginTop={ isStickyHeader ? { base: '60px', md: '94px' } : 'unset'}
          minHeight={'calc(100vh - 94px - 350px - 55px)'}
          >
            <Outlet />
          </Box>
        </main>
      </div>

      <Divider />
      <Footer />
    </div>
  );
};

export default Layout;
